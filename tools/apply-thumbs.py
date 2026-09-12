# -*- coding: utf-8 -*-
"""두클래스 뷰어로 연결된 카드에 원본 썸네일 주소(img)를 붙인다.
   --check 를 주면 적용 범위만 보고 파일은 고치지 않는다."""
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
thumbs = json.load(io.open(os.path.join(ROOT, 'tools', 'thumb-map.json'), encoding='utf-8'))
check_only = '--check' in sys.argv

TARGETS = ['app.js', 'play-data.js', 'edutech-data.js',
           'songs-data.js', 'smart-data.js', 'video-data.js']

# url: "....viewer/SPC_P/12345"  바로 뒤에 img 를 끼워 넣는다
PATTERN = re.compile(r'url: "https://www\.douclass\.com/viewer/SPC_P/(\d+)"(?!, img)')

grand_hit = grand_miss = 0
for name in TARGETS:
    path = os.path.join(ROOT, name)
    if not os.path.exists(path):
        continue
    text = io.open(path, encoding='utf-8').read()
    hit = [0]
    miss = [0]

    def swap(match):
        cls_id = match.group(1)
        url = thumbs.get(cls_id)
        if not url:
            miss[0] += 1
            return match.group(0)
        hit[0] += 1
        return '%s, img: "%s"' % (match.group(0), url)

    new_text = PATTERN.sub(swap, text)
    if not check_only and new_text != text:
        io.open(path, 'w', encoding='utf-8').write(new_text)
    print('%-18s 썸네일 %4d   없음 %4d' % (name, hit[0], miss[0]))
    grand_hit += hit[0]
    grand_miss += miss[0]

print('-' * 46)
print('%-18s 썸네일 %4d   없음 %4d' % ('합계', grand_hit, grand_miss))
if check_only:
    print('(확인만 했고 파일은 그대로입니다)')
