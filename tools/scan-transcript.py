# -*- coding: utf-8 -*-
"""대화 기록(.jsonl)에 남아 있는 두클래스 API 응답 레코드를
   (cls_level, cls_type, cls_sub_type) 별로 모아 개수와 표본을 보여 준다."""
import collections
import io
import re
import sys

raw = io.open(sys.argv[1], encoding='utf-8', errors='replace').read()
raw = raw.replace('\\"', '"').replace('\\\\', '\\')

Q = r'"%s"\s*:\s*"([^"]*)"'
record = re.compile(r'"cls_id"\s*:\s*(\d+)(.*?)(?="cls_id"\s*:\s*\d+|$)', re.S)

groups = collections.OrderedDict()
seen = set()

for match in record.finditer(raw):
    cls_id = match.group(1)
    body = match.group(2)[:6000]

    def field(name):
        hit = re.search(Q % name, body)
        return hit.group(1) if hit else ''

    key = (field('cls_level'), field('cls_type'), field('cls_sub_type'))
    title = field('cls_title').strip()
    if (key, cls_id) in seen:
        continue
    seen.add((key, cls_id))
    groups.setdefault(key, []).append((cls_id, title))

for key in sorted(groups, key=lambda k: -len(groups[k])):
    rows = groups[key]
    print('level=%-7s type=%-7s sub=%-7s  %4d개' % (key[0], key[1], key[2], len(rows)))
    print('     %s' % ' | '.join(t for _, t in rows[:4]))
