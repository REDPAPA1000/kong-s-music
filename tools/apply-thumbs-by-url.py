# -*- coding: utf-8 -*-
"""뷰어로 바꾸지 않은 카드(유튜브·t25 등 외부 링크)에도
   원본 주소가 같으면 썸네일을 붙인다."""
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

by_url = {}
for match in record.finditer(raw):
    body = match.group(2)[:6000]

    def field(name):
        hit = re.search(r'"%s"\s*:\s*"([^"]*)"' % name, body)
        return hit.group(1) if hit else ''

    thumb = field('cls_thumbnail')
    if not thumb.startswith('http'):
        continue
    for key in ('cls_url', 'ad_mplayer_url'):
        url = field(key)
        if url.startswith('http'):
            by_url.setdefault(url, thumb)

print('주소 -> 썸네일 %d개' % len(by_url))

TARGETS = ['app.js', 'play-data.js', 'edutech-data.js', 'songs-data.js',
           'smart-data.js', 'video-data.js']
# 이미 img 가 붙은 항목은 건드리지 않는다
PATTERN = re.compile(r'url: "([^"]+)"(?!, img)')

total = 0
for name in TARGETS:
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        continue
    text = io.open(path, encoding='utf-8').read()
    hit = [0]

    def swap(match):
        url = match.group(1).replace('&quot;', '"')
        thumb = by_url.get(url)
        if not thumb:
            return match.group(0)
        hit[0] += 1
        return '%s, img: "%s"' % (match.group(0), thumb)

    new_text = PATTERN.sub(swap, text)
    if new_text != text:
        io.open(path, 'w', encoding='utf-8').write(new_text)
    print('  %-18s %4d건' % (name, hit[0]))
    total += hit[0]

print('-' * 32)
print('합계 %d건' % total)
