# -*- coding: utf-8 -*-
"""쉬는 시간 -> break-data.js

   tmp/gap365.json · tmp/audiobook.json · tmp/game.json (두클래스 목록 API 응답)
   세 개를 읽어서 한 파일로 만든다.
   자료 본체는 cls_url (두클래스 뷰어) 로 바로 연결한다.
"""
import collections
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'break-data.js')

# 학교급마다 따로 받은 파일이 있으면 뒤에 덧붙이면 된다. 없는 파일은 건너뛴다.
SETS = [
    ('gapItems', ['gap365.json', 'gap365-2.json'], '틈새 시간 365'),
    ('audioItems', ['audiobook.json', 'audiobook-2.json'], '오디오북'),
    ('gameItems', ['game.json', 'game-2.json'], '게임'),
    ('chosungItems', ['chosung.json', 'chosung-2.json'], '초성게임'),
    ('cardItems', ['card.json', 'card-2.json'], '카드 짝 맞추기'),
]


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


def series_of(title):
    """'유머 365_30' -> '유머 365',  '세계 국기 맞추기 <아시아>' -> '세계 국기 맞추기'"""
    name = re.sub(r'<[^>]*>\s*$', '', title).strip()
    name = re.sub(r'[_\s]*\d+$', '', name).strip()
    return re.sub(r'[\s\-–—!~,.]+$', '', name).strip()


def build(src_names):
    rows = []
    seen = set()
    for name in src_names:
        path = os.path.join(ROOT, 'tmp', name)
        if not os.path.exists(path):
            continue
        for row in json.load(io.open(path, encoding='utf-8'))['ret_data']:
            if row['cls_id'] in seen:
                continue
            seen.add(row['cls_id'])
            rows.append(row)
    if not rows:
        return None, 0, collections.Counter()
    total = len(rows)

    lines = []
    stats = collections.Counter()
    for row in rows:
        title = esc(row.get('cls_title'))
        fields = [
            'id: "%s"' % row['cls_id'],
            't: "%s"' % title,
            's: "%s"' % esc(row.get('book') or series_of(title)),
            'u: "%s"' % esc(row.get('cls_url') or row.get('cls_fname')),
            'img: "%s"' % esc(row.get('cls_thumbnail')),
            'lb: "%s"' % esc(row.get('rest_label')),
            'ty: "%s"' % esc(row.get('rest_type')),
            'gr: "%s"' % esc(row.get('rest_grade')),
        ]
        if row.get('tags'):
            fields.append('tg: "%s"' % esc(row['tags']))
        if row.get('by'):
            fields.append('by: "%s"' % esc(row['by']))
        lines.append('{%s}' % ','.join(fields))
        stats['묶음:' + (row.get('book') or series_of(title))] += 1
        stats['길이:' + (row.get('rest_label') or '없음')] += 1
        stats['갈래:' + (row.get('rest_type') or '없음')] += 1
        stats['학년:' + (row.get('rest_grade') or '없음')] += 1
    return lines, total, stats


chunks = []
for var, srcs, label in SETS:
    lines, total, stats = build(srcs)
    if lines is None:
        print('%s — tmp/%s 가 없어 빈 목록으로 둡니다.' % (label, ' · tmp/'.join(srcs)))
        chunks.append('const %s = [];' % var)
        continue
    chunks.append('const %s = [\n%s\n];' % (var, ',\n'.join(lines)))
    print('%s %d개' % (label, len(lines)))
    if total != len(lines):
        print('  주의: 두클래스 쪽 전체는 %d개입니다.' % total)
    for key in sorted(stats):
        if key.startswith('길이') or key.startswith('학년'):
            print('    %-14s %3d' % (key, stats[key]))

io.open(OUT, 'w', encoding='utf-8').write('\n\n'.join(chunks) + '\n')
print('\n-> %s  (%.0f KB)' % (os.path.basename(OUT), os.path.getsize(OUT) / 1024.0))
