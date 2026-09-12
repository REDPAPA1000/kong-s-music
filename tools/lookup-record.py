# -*- coding: utf-8 -*-
"""대화 기록에서 특정 cls_id 레코드의 주요 필드를 보여 준다."""
import io
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

BS = chr(92)
raw = io.open(sys.argv[1], encoding='utf-8', errors='replace').read()
raw = raw.replace(BS + '"', '"').replace(BS + BS, BS)
record = re.compile(r'"cls_id"\s*:\s*(\d+)(.*?)(?="cls_id"\s*:\s*\d+|$)', re.S)

wanted = set(sys.argv[2:])
FIELDS = ('cls_title', 'cls_type', 'cls_sub_type', 'cls_ftype', 'cls_url', 'cls_docs',
          'ppt_url', 'ppt_docs', 'ppt_ftype',
          'tc_active_url', 'tc_active_docs',
          'st_active_url', 'st_active_docs', 'st_active_ftype',
          'sc_mplayer_url', 'sc_mplayer_docs', 'ad_mplayer_url')

seen = set()
for match in record.finditer(raw):
    cls_id = match.group(1)
    if cls_id not in wanted or cls_id in seen:
        continue
    seen.add(cls_id)
    body = match.group(2)[:8000]
    print('=== cls_id %s ===' % cls_id)
    for name in FIELDS:
        hit = re.search(r'"%s"\s*:\s*"([^"]*)"' % name, body)
        if hit and hit.group(1):
            print('  %-18s %s' % (name, hit.group(1)[:120]))
    print()
