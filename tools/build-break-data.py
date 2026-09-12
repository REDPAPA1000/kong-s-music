# -*- coding: utf-8 -*-
"""쉬는 시간 · 틈새 시간 365 -> break-data.js

   tmp/gap365.json (두클래스 목록 API 응답) 을 읽어서 만든다.
   자료 본체는 cls_url (canvas.douclass.com 뷰어) 로 바로 연결한다.
"""
import collections
import io
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'tmp', 'gap365.json')
OUT = os.path.join(ROOT, 'break-data.js')


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


raw = json.load(io.open(SRC, encoding='utf-8'))
rows = raw['ret_data']
total = raw.get('paging', {}).get('total_count')

lines = []
stats = collections.Counter()
for row in rows:
    fields = [
        'id: %s' % row['cls_id'],
        't: "%s"' % esc(row.get('cls_title')),
        'u: "%s"' % esc(row.get('cls_url') or row.get('cls_fname')),
        'img: "%s"' % esc(row.get('cls_thumbnail')),
        'lb: "%s"' % esc(row.get('rest_label')),
        'ty: "%s"' % esc(row.get('rest_type')),
        'gr: "%s"' % esc(row.get('rest_grade')),
    ]
    lines.append('{%s}' % ','.join(fields))
    stats['길이:' + (row.get('rest_label') or '?')] += 1
    stats['갈래:' + (row.get('rest_type') or '?')] += 1
    stats['학년:' + (row.get('rest_grade') or '?')] += 1

with io.open(OUT, 'w', encoding='utf-8') as handle:
    handle.write('const gapItems = [\n' + ',\n'.join(lines) + '\n];\n')

print('%d개 -> %s' % (len(lines), os.path.basename(OUT)))
if total and total != len(lines):
    print('주의: 두클래스 쪽 전체는 %d개입니다. 아직 %d개만 받았습니다.' % (total, len(lines)))
for key in sorted(stats):
    print('  %-12s %3d' % (key, stats[key]))
