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

SETS = [
    ('gapItems', 'gap365.json', '틈새 시간 365'),
    ('audioItems', 'audiobook.json', '오디오북'),
    ('gameItems', 'game.json', '게임'),
    ('chosungItems', 'chosung.json', '초성게임'),
    ('cardItems', 'card.json', '카드 짝 맞추기'),
]


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


def series_of(title):
    """'유머 365_30' -> '유머 365',  '세계 국기 맞추기 <아시아>' -> '세계 국기 맞추기'"""
    name = re.sub(r'<[^>]*>\s*$', '', title).strip()
    name = re.sub(r'[_\s]*\d+$', '', name).strip()
    return re.sub(r'[\s\-–—!~,.]+$', '', name).strip()


def build(src_name):
    path = os.path.join(ROOT, 'tmp', src_name)
    if not os.path.exists(path):
        return None, 0, collections.Counter()
    raw = json.load(io.open(path, encoding='utf-8'))
    rows = raw['ret_data']
    total = raw.get('paging', {}).get('total_count') or len(rows)

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
for var, src, label in SETS:
    lines, total, stats = build(src)
    if lines is None:
        print('%s — tmp/%s 가 없어 빈 목록으로 둡니다.' % (label, src))
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
