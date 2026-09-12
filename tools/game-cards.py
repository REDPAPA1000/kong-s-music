# -*- coding: utf-8 -*-
"""두클래스 게임 카드(화면에서 긁어온 것) -> tmp/<이름>.json

   긁어온 카드의 text 는 이런 차례다.
     ["0"(조회수), "초성 게임", 제목, "#중학", "#음악", "#2권", "#3단원", "BY 예*능선생님"]
   조회수는 화면에서 나중에 채워지는 값이라 여기서는 버린다.

   쓰는 법:  python tools/game-cards.py chosung-cards.json chosung.json 초성게임
             python tools/game-cards.py card-cards.json    card.json    카드짝맞추기
"""
import collections
import io
import re
import json
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC_NAME, OUT_NAME, KIND = (sys.argv[1:4] + ['chosung-cards.json', 'chosung.json', '초성게임'])[:3]     if len(sys.argv) > 3 else ('chosung-cards.json', 'chosung.json', '초성게임')
SRC = os.path.join(ROOT, 'tmp', SRC_NAME)
OUT = os.path.join(ROOT, 'tmp', OUT_NAME)
SITE = 'https://canvas.douclass.com'
# 학교급을 가리키는 꼬리표 — #초등 #중학 #고등 #1권 #3단원 #공통 …
LEVEL_TAG = re.compile(r'^#(초등|초|중학|중등|중|고등|고|공통|\d+학년|\d+권|\d+단원)$')

cards = json.load(io.open(SRC, encoding='utf-8'))
rows = []
stats = collections.Counter()

for card in cards:
    text = [t for t in card['text'] if t not in ('0', '초성 게임', '카드 짝 맞추기', '숨은 단어 찾기')]
    title = text[0] if text else '(제목 없음)'
    by = next((t[3:].strip() for t in text if t.startswith('BY ')), '')
    tags = [t for t in text[1:] if t.startswith('#')]

    # 놀이는 초등·중등·고등 어디서나 같이 쓴다.
    # 그래서 학교급·교과서 권·단원 꼬리표는 떼고, 묶음도 두지 않는다.
    tags = [t for t in tags if not LEVEL_TAG.match(t)]
    book = ''
    grade = ''

    rows.append({
        'cls_id': card['code'],
        'cls_title': title,
        'cls_thumbnail': card['img'],
        # startSinglePlay() 가 여는 주소 — 누르면 게임이 바로 뜬다
        'cls_url': '%s/center/game/play?code=%s&isLand=true' % (SITE, card['code']),
        'detail_url': SITE + card['detail'],
        'cls_ftype': 'URL',
        'rest_label': '',
        'rest_type': KIND,
        'rest_grade': grade,
        'tags': ' '.join(tags),
        'by': by,
        'book': book,
    })
    stats['꼬리표 수:%d' % len(tags)] += 1

json.dump({'paging': {'total_count': len(rows)}, 'ret_data': rows},
          io.open(OUT, 'w', encoding='utf-8'), ensure_ascii=False)

print('%s %d개 -> tmp/%s' % (KIND, len(rows), os.path.basename(OUT)))
for key in sorted(stats):
    print('  %-10s %2d' % (key, stats[key]))
print('\n제목:', ', '.join(r['cls_title'] for r in rows[:6]), '…')
