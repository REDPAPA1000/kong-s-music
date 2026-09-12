# -*- coding: utf-8 -*-
"""cls_ftype 이 VIEW 인 자료는 두클래스 뷰어가 빈 화면을 띄운다.
   (본문 파일 없이 PPT 만 딸린 종류) 이런 카드는 뷰어 대신
   원래 파일 주소로 되돌린다."""
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

broken = {}
for match in record.finditer(raw):
    body = match.group(2)[:6000]

    def field(name):
        hit = re.search(r'"%s"\s*:\s*"([^"]*)"' % name, body)
        return hit.group(1) if hit else ''

    if field('cls_ftype') != 'VIEW':
        continue
    target = field('ppt_url') or field('cls_url')
    if target.startswith('http'):
        broken[match.group(1)] = (target, field('cls_title').strip())

print('뷰어가 빈 화면인 종류(VIEW) %d건 확인' % len(broken))

TARGETS = ['app.js', 'play-data.js', 'edutech-data.js', 'video-data.js', 'songs-data.js']
PATTERN = re.compile(r'"https://www\.douclass\.com/viewer/SPC_P/(\d+)"')

total = 0
for name in TARGETS:
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        continue
    text = io.open(path, encoding='utf-8').read()
    hit = [0]

    def swap(match):
        cls_id = match.group(1)
        if cls_id not in broken:
            return match.group(0)
        hit[0] += 1
        return '"%s"' % broken[cls_id][0]

    new_text = PATTERN.sub(swap, text)
    if new_text != text:
        io.open(path, 'w', encoding='utf-8').write(new_text)
    if hit[0]:
        print('  %-18s %3d건 되돌림' % (name, hit[0]))
    total += hit[0]

print('-' * 34)
print('합계 %d건' % total)
