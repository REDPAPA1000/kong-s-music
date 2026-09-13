# -*- coding: utf-8 -*-
"""커리어넷(교육부) 학과·직업 정보를 받아 tmp/ 에 저장한다.

   커리어넷 학과정보 화면(career.go.kr/cloud/w/major/uList)이 쓰는 공개 목록이라
   인증키가 필요 없다. 받은 자료에는 학과 설명·취업률·진학률·그림·관련학과가
   모두 들어 있고, seq 로 학과 쪽에 바로 연결된다.

   쓰는 법:  python tools/fetch-careernet.py
"""
import collections
import io
import json
import os
import sys
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'tmp', 'major-careernet.json')
JOB_OUT = os.path.join(ROOT, 'tmp', 'job-careernet.json')
JOB_API = 'https://www.career.go.kr/cloud/api/job/search?size=200&page=%d&sort=job_nm,asc'
API = 'https://www.career.go.kr/cloud/api/major/uSearch?size=200&page=%d&sort=major_nm,asc'
PAGE_SIZE = 200

UNIV = '100388'          # 대학교 (100387 은 전문대학)
FIELDS = {
    '100391': '인문계열', '100392': '사회계열', '100393': '교육계열',
    '100394': '공학계열', '100395': '자연계열', '100396': '의약계열',
    '100397': '예체능계열',
}


def call(page, api=None):
    req = urllib.request.Request((api or API) % page, data=b'{}', method='POST', headers={
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/json',
        'Referer': 'https://www.career.go.kr/cloud/w/major/uList',
        'Origin': 'https://www.career.go.kr',
    })
    with urllib.request.urlopen(req, timeout=60) as res:
        return json.loads(res.read().decode('utf-8'))


rows, total = [], None
for page in range(0, 40):
    data = call(page)
    got = data.get('content') or []
    total = data.get('totalElements', total)
    rows.extend(got)
    print('  %d쪽: %d개 (모두 %d)' % (page + 1, len(got), len(rows)))
    if len(got) < PAGE_SIZE or (total and len(rows) >= total):
        break
print('커리어넷이 준 학과 %d개 (알려 준 전체 %s개)' % (len(rows), total))

univ = [r for r in rows if str(r.get('univ_se')) == UNIV]
print('그 가운데 대학교 %d개, 전문대학 %d개' % (len(univ), len(rows) - len(univ)))

stats = collections.Counter(FIELDS.get(str(r.get('major_cl1')), '그 밖') for r in univ)
for key in sorted(stats):
    print('    %-8s %3d' % (key, stats[key]))

json.dump({'ret_data': univ}, io.open(OUT, 'w', encoding='utf-8'), ensure_ascii=False)
print('\n-> tmp/%s' % os.path.basename(OUT))


# ── 직업 정보 ──────────────────────────────────────
jobs, total = [], None
for page in range(0, 40):
    data = call(page, JOB_API)
    got = data.get('content') or []
    total = data.get('totalElements', total)
    jobs.extend(got)
    print('  직업 %d쪽: %d개 (모두 %d)' % (page + 1, len(got), len(jobs)))
    if len(got) < PAGE_SIZE or (total and len(jobs) >= total):
        break

# 직업군(top_nm)은 이 목록에 들어 있지 않다. 두클래스에서 받아 둔 것이 있으면
# job_cd 로 맞춰 붙인다.
douclass = os.path.join(ROOT, 'tmp', 'job-douclass.json')
groups = {}
if os.path.exists(douclass):
    for row in json.load(io.open(douclass, encoding='utf-8')).get('ret_data', []):
        item = row.get('row', row) if isinstance(row, dict) else row
        code = str(item.get('job_cd') or '')
        if code and item.get('top_nm'):
            groups[code] = item['top_nm']
    print('두클래스에서 직업군 %d개를 가져왔습니다.' % len(groups))

hit = 0
for job in jobs:
    name = groups.get(str(job.get('job_cd')))
    if name:
        job['top_nm'] = name
        hit += 1
print('직업 %d개 가운데 %d개에 직업군을 붙였습니다.' % (len(jobs), hit))

json.dump({'ret_data': jobs}, io.open(JOB_OUT, 'w', encoding='utf-8'), ensure_ascii=False)
print('-> tmp/%s' % os.path.basename(JOB_OUT))
