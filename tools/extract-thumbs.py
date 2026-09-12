# -*- coding: utf-8 -*-
"""대화 기록과 tmp/listening.json 에서 cls_id -> 썸네일 주소 대응표를 만든다."""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'tools', 'thumb-map.json')
BS = chr(92)

thumbs = {}

# 1) 대화 기록에 남아 있는 API 응답
raw = io.open(sys.argv[1], encoding='utf-8', errors='replace').read()
raw = raw.replace(BS + '"', '"').replace(BS + BS, BS)
record = re.compile(r'"cls_id"\s*:\s*(\d+)(.*?)(?="cls_id"\s*:\s*\d+|$)', re.S)
for match in record.finditer(raw):
    body = match.group(2)[:6000]
    hit = re.search(r'"cls_thumbnail"\s*:\s*"([^"]*)"', body)
    if hit and hit.group(1).startswith('http'):
        thumbs[match.group(1)] = hit.group(1)
print('대화 기록에서  %5d개' % len(thumbs))

# 2) 감상실 전체 목록
listening = os.path.join(ROOT, 'tmp', 'listening.json')
before = len(thumbs)
if os.path.exists(listening):
    rows = json.load(io.open(listening, encoding='utf-8'))['ret_data']
    have = 0
    for row in rows:
        url = row.get('cls_thumbnail') or ''
        if url.startswith('http'):
            thumbs[str(row['cls_id'])] = url
            have += 1
    print('감상실 %d건 중 썸네일 %d개 (새로 %d개)'
          % (len(rows), have, len(thumbs) - before))
else:
    print('감상실 목록 파일 없음')

with io.open(OUT, 'w', encoding='utf-8') as handle:
    handle.write(json.dumps(thumbs, ensure_ascii=False, indent=1))
print('합계 %d개 -> %s' % (len(thumbs), os.path.basename(OUT)))
