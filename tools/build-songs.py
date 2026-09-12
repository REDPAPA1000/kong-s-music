# -*- coding: utf-8 -*-
"""두클래스 목록 응답(raw JSON)을 노래 익히기 데이터로 변환한다.

사용법:
    python tools/build-songs.py

tmp/ 폴더의 song-*.json 을 읽어 songs-data.js 를 다시 만든다.
파일이 없는 분류는 그냥 건너뛴다.
"""
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = os.path.join(ROOT, 'tmp')
OUT = os.path.join(ROOT, 'songs-data.js')

# 파일 이름 -> (장르 key, 하위 분류 이름)
SOURCES = [
    ('song-western-child.json', 'western', '동요'),
    ('song-western-art.json', 'western', '가곡'),
    ('song-gugak-folk.json', 'gugak', '전래 동요'),
    ('song-gugak-minyo.json', 'gugak', '민요'),
    ('song-gugak-pansori.json', 'gugak', '판소리 및 시조'),
    ('song-newgugak.json', 'newgugak', ''),
    ('song-pop.json', 'pop', ''),
    ('song-world.json', 'world', ''),
]


def esc(text):
    """JS 템플릿 리터럴과 HTML 속성에 안전하게."""
    return (text or '').strip().replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").replace('$', '&#36;')


def load(name):
    path = os.path.join(RAW, name)
    if not os.path.exists(path):
        return None
    with io.open(path, encoding='utf-8-sig') as handle:
        return json.load(handle)


def main():
    lines = []
    report = []
    for name, genre, scope in SOURCES:
        data = load(name)
        if data is None:
            report.append('%-28s 없음' % name)
            continue
        rows = data.get('ret_data') or []
        for index, row in enumerate(rows, start=1):
            fields = [
                'genre: "%s"' % genre,
                'no: %d' % index,
                'title: "%s"' % esc(row.get('cls_title')),
            ]
            if scope:
                fields.append('scope: "%s"' % scope)
            note = esc(row.get('cls_sub_content'))
            if note:
                fields.append('note: "%s"' % note)
            fields.append('url: "%s"' % (row.get('cls_url') or ''))
            sheet = row.get('tc_active_url') or ''
            if sheet:
                fields.append('sheetUrl: "%s"' % sheet)
                fields.append('sheetLabel: "활동지 (pdf)"')
            lines.append('  { %s },' % ', '.join(fields))
        report.append('%-28s %3d곡  (%s%s)' % (name, len(rows), genre, ' / ' + scope if scope else ''))

    body = 'const songItems = [\n' + '\n'.join(lines) + '\n];\n'
    with io.open(OUT, 'w', encoding='utf-8') as handle:
        handle.write(body)

    print('\n'.join(report))
    print('-' * 44)
    print('총 %d곡 -> songs-data.js' % len(lines))


if __name__ == '__main__':
    main()
