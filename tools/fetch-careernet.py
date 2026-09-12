# -*- coding: utf-8 -*-
"""커리어넷(교육부) 오픈API 에서 학과·직업 정보를 받아 tmp/ 에 저장한다.

   인증키는 tmp/careernet-key.txt 첫 줄에 적어 둔다. (tmp 는 깃에 올라가지 않는다)
   받아 둔 것으로 build-activity-data.py 가 activity-data.js 를 만들기 때문에,
   인증키가 웹사이트로 나가는 일은 없다.

   쓰는 법:  python tools/fetch-careernet.py
"""
import io
import json
import os
import sys
import time
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KEY_FILE = os.path.join(ROOT, 'tmp', 'careernet-key.txt')
BASE = 'https://www.career.go.kr/cnet/openapi/getOpenApi'
PER_PAGE = 100

# (저장 이름, svcCode, gubun, 설명)
SETS = [
    ('major', 'MAJOR', 'univ_list', '학과 정보 (대학)'),
    ('job', 'JOB', 'job_dic_list', '직업 정보'),
]


def read_key():
    if not os.path.exists(KEY_FILE):
        raise SystemExit(
            '인증키가 없습니다.\n'
            '  1) https://www.career.go.kr 에서 오픈API 인증키를 받으세요.\n'
            '  2) 받은 키를 tmp/careernet-key.txt 첫 줄에 붙여 넣으세요.')
    return io.open(KEY_FILE, encoding='utf-8').read().strip()


def call(key, svc_code, gubun, page):
    query = urllib.parse.urlencode({
        'apiKey': key, 'svcType': 'api', 'svcCode': svc_code,
        'contentType': 'json', 'gubun': gubun,
        'perPage': PER_PAGE, 'thisPage': page,
    })
    req = urllib.request.Request(BASE + '?' + query, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=30) as res:
        return json.loads(res.read().decode('utf-8'))


def rows_of(data):
    """응답 어디에 목록이 들어 있든 가장 큰 배열을 찾아낸다."""
    best = []
    def walk(value, depth):
        nonlocal best
        if depth > 6 or not isinstance(value, (dict, list)):
            return
        if isinstance(value, list):
            if value and isinstance(value[0], dict) and len(value) > len(best):
                best = value
            return
        for item in value.values():
            walk(item, depth + 1)
    walk(data, 0)
    return best


key = read_key()
for name, svc_code, gubun, label in SETS:
    first = call(key, svc_code, gubun, 1)
    content = first.get('result', {}).get('content')
    if isinstance(content, list) and content and content[0].get('code') == '-1':
        raise SystemExit('%s — %s' % (label, content[0].get('message')))

    all_rows, seen = [], set()
    for page in range(1, 200):
        data = first if page == 1 else call(key, svc_code, gubun, page)
        rows = rows_of(data)
        added = 0
        for row in rows:
            mark = json.dumps(row, sort_keys=True, ensure_ascii=False)
            if mark in seen:
                continue
            seen.add(mark)
            all_rows.append(row)
            added += 1
        print('  %s %d쪽: 새로 %d개 (모두 %d)' % (label, page, added, len(all_rows)))
        if not added:
            break
        time.sleep(0.2)

    out = os.path.join(ROOT, 'tmp', '%s.json' % name)
    json.dump({'ret_data': all_rows}, io.open(out, 'w', encoding='utf-8'), ensure_ascii=False)
    print('%s %d개 -> tmp/%s.json' % (label, len(all_rows), name))
    if all_rows:
        print('  칸 이름:', ', '.join(list(all_rows[0])[:12]))
