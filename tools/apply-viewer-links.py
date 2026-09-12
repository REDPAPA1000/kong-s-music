# -*- coding: utf-8 -*-
"""s3.douclass.com 직접 파일 주소를 두클래스 뷰어 주소로 교체한다.

   브라우저가 곧바로 내려받아 버리는 원인은 S3가 보내는
   Content-Disposition: attachment 헤더라서, 주소 자체를 뷰어로 바꿔야 한다.
"""
import io
import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MAP = os.path.join(ROOT, 'tools', 'viewer-map.json')

data = json.load(io.open(MAP, encoding='utf-8'))
lookup = {}
lookup.update(data['attach_to_viewer'])
lookup.update(data['file_to_viewer'])

TARGETS = ['app.js', 'play-data.js', 'edutech-data.js',
           'songs-data.js', 'smart-data.js', 'video-data.js']

S3 = re.compile(r'https://s3\.douclass\.com/[^"\'\s]+')

total_hit = 0
total_miss = 0
missed = {}

for name in TARGETS:
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        continue
    text = io.open(path, encoding='utf-8').read()
    hit = [0]
    miss = []

    def swap(match):
        url = match.group(0)
        if url in lookup:
            hit[0] += 1
            return lookup[url]
        miss.append(url)
        return url

    new_text = S3.sub(swap, text)
    if new_text != text:
        io.open(path, 'w', encoding='utf-8').write(new_text)
    total_hit += hit[0]
    total_miss += len(miss)
    if miss:
        missed[name] = miss
    print('%-18s 교체 %4d   남음 %4d' % (name, hit[0], len(miss)))

print('-' * 44)
print('%-18s 교체 %4d   남음 %4d' % ('합계', total_hit, total_miss))

if missed:
    print('\n[뷰어 주소를 못 찾은 항목]')
    for name, urls in missed.items():
        kinds = {}
        for url in urls:
            kinds[url.rsplit('.', 1)[-1]] = kinds.get(url.rsplit('.', 1)[-1], 0) + 1
        print('  %s: %s' % (name, kinds))
        for url in urls[:5]:
            print('     %s' % url)
