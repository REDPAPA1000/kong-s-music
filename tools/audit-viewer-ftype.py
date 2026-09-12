# -*- coding: utf-8 -*-
"""뷰어 주소로 바꾼 카드들의 원본 cls_ftype 을 조사한다.
   ftype 이 PPT/MP4/PDF 처럼 실제 파일이면 뷰어가 내용을 보여 주지만,
   VIEW 처럼 본문 파일이 없는 종류는 뷰어가 빈 화면이 된다."""
import collections
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BS = chr(92)

raw = io.open(sys.argv[1], encoding='utf-8', errors='replace').read()
raw = raw.replace(BS + '"', '"').replace(BS + BS, BS)
record = re.compile(r'"cls_id"\s*:\s*(\d+)(.*?)(?="cls_id"\s*:\s*\d+|$)', re.S)

info = {}
for match in record.finditer(raw):
    body = match.group(2)[:6000]

    def field(name):
        hit = re.search(r'"%s"\s*:\s*"([^"]*)"' % name, body)
        return hit.group(1) if hit else ''

    info[match.group(1)] = (field('cls_ftype'), field('cls_title'))

TARGETS = ['app.js', 'play-data.js', 'edutech-data.js', 'video-data.js', 'songs-data.js']
USED = re.compile(r'viewer/SPC_P/(\d+)')

tally = collections.Counter()
suspect = []
for name in TARGETS:
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        continue
    for cls_id in USED.findall(io.open(path, encoding='utf-8').read()):
        ftype, title = info.get(cls_id, ('(기록없음)', ''))
        tally[ftype] += 1
        if ftype not in ('PPT', 'MP4', 'PDF', 'MP3', 'HWP', 'ETC'):
            suspect.append((name, cls_id, ftype, title))

print('뷰어로 연결한 카드의 원본 종류')
for ftype, count in tally.most_common():
    print('  %-10s %4d' % (ftype or '(빈값)', count))

print()
print('빈 화면이 날 수 있는 항목 %d건' % len(suspect))
for name, cls_id, ftype, title in suspect[:20]:
    print('  %-14s %s  %-6s %s' % (name, cls_id, ftype, title[:34]))
