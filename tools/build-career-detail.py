# -*- coding: utf-8 -*-
"""커리어넷 학과·직업 상세를 받아 career/ 아래에 쪽마다 한 파일로 저장한다.

   진로활동에서 학과나 직업을 누르면 커리어넷으로 나가 버려서, 아이들이 사이트를
   떠나지 않고 읽을 수 있도록 내용을 우리 쪽에 둔다. 능력·지식 점수표와 그래프는
   커리어넷에 맡기고 화면에서 원문으로 이어 준다.

   자료가 5MB 가 넘어 한 파일에 담지 않는다. 누른 학과(직업)만 읽어 온다.

   쓰는 법:  python tools/build-career-detail.py
             python tools/build-career-detail.py --limit 5   (맛보기)
"""
import json
import os
import re
import sys
import time
import urllib.request

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'career')

MAJOR_LIST = 'https://www.career.go.kr/cloud/api/major/uSearch?size=200&page=%d&sort=major_nm,asc'
JOB_LIST = 'https://www.career.go.kr/cloud/api/job/search?size=200&page=%d&sort=job_nm,asc'
MAJOR_VIEW = 'https://www.career.go.kr/cloud/api/major/uView?seq=%s'
JOB_VIEW = 'https://www.career.go.kr/cloud/api/job/view?seq=%s'

UNIV = '100388'          # 대학교 (100387 은 전문대학)
FIELDS = {
    '100391': '인문계열', '100392': '사회계열', '100393': '교육계열',
    '100394': '공학계열', '100395': '자연계열', '100396': '의약계열',
    '100397': '예체능계열',
}

LIMIT = None
if '--limit' in sys.argv:
    LIMIT = int(sys.argv[sys.argv.index('--limit') + 1])


def post(url):
    req = urllib.request.Request(url, data=b'{}', method='POST', headers={
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/json',
        'Referer': 'https://www.career.go.kr/cloud/w/major/uList',
        'Origin': 'https://www.career.go.kr',
    })
    with urllib.request.urlopen(req, timeout=60) as res:
        return json.loads(res.read().decode('utf-8'))


def get(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=60) as res:
        return json.loads(res.read().decode('utf-8'))


def pages(api):
    rows = []
    for page in range(0, 40):
        data = post(api % page)
        got = data.get('content') or []
        rows.extend(got)
        if len(got) < 200 or len(rows) >= (data.get('totalElements') or 0):
            break
        time.sleep(0.15)
    return rows


def tidy(text):
    return ' '.join(str(text or '').split())


def texts(rows):
    """커리어넷은 글 목록을 ["글"] 또는 [{"name": "글"}] 두 모양으로 준다."""
    out = []
    for row in rows or []:
        if not row:                                    # 빈 칸이 섞여 오기도 한다
            continue
        value = row if isinstance(row, str) else (row.get('name') or row.get('detail') or '')
        value = tidy(value)
        if value:
            out.append(value)
    return out


def items(rows):
    """빈 칸(null)이 섞여 오는 목록을 걸러 준다."""
    return [row for row in (rows or []) if row]


def norm(name):
    return re.sub(r'[\s·ㆍ,/&()]', '', str(name or ''))


# -- 받기 --------------------------------------------------
print('커리어넷 목록을 받습니다.')
major_rows = [r for r in pages(MAJOR_LIST) if str(r.get('univ_se')) == UNIV]
job_rows = pages(JOB_LIST)
print('학과 %d개 / 직업 %d개' % (len(major_rows), len(job_rows)))
if LIMIT:
    major_rows, job_rows = major_rows[:LIMIT], job_rows[:LIMIT]

majors, jobs = [], []
for kind, rows, api, box in (('학과', major_rows, MAJOR_VIEW, majors),
                             ('직업', job_rows, JOB_VIEW, jobs)):
    key = 'seq' if kind == '학과' else 'job_cd'
    for i, row in enumerate(rows):
        try:
            box.append((row, get(api % row[key])))
        except Exception as error:                     # 한둘 빠져도 나머지는 만든다
            print('  %s %s 를 못 받았습니다 (%s)' % (kind, row.get(key), error))
        if (i + 1) % 100 == 0:
            print('  %s 상세 %d/%d' % (kind, i + 1, len(rows)))
        time.sleep(0.12)

# -- 서로 잇기 ---------------------------------------------
job_by_seq = set()
job_by_name = {}
for summary, detail in jobs:
    seq = str(detail.get('seq') or summary.get('job_cd'))
    job_by_seq.add(seq)
    job_by_name.setdefault(norm(detail.get('job_nm') or summary.get('job_nm')), seq)
    for alias in tidy(detail.get('rel_job_nm')).split(','):
        if norm(alias):
            job_by_name.setdefault(norm(alias), seq)

major_by_name = {}
for summary, detail in majors:
    seq = str(detail.get('seq') or summary.get('seq'))
    major_by_name.setdefault(norm(detail.get('major_NM') or summary.get('major_nm')), seq)
    for inst in items(detail.get('inst')):
        if norm(inst.get('major_NM')):
            major_by_name.setdefault(norm(inst.get('major_NM')), seq)


def job_link(name, seq):
    if seq and str(seq) in job_by_seq:
        return str(seq)
    return job_by_name.get(norm(name))


# -- 학과 --------------------------------------------------
major_dir = os.path.join(OUT, 'major')
os.makedirs(major_dir, exist_ok=True)
major_index = []
for summary, detail in majors:
    seq = str(detail.get('seq') or summary.get('seq'))
    related = []
    for job in items(detail.get('relateJob')):
        name = tidy(job.get('relate_JOB_NAME'))
        if name:
            related.append({'t': name, 'j': job_link(name, job.get('relate_SEQ'))})
    page = {
        'seq': seq,
        'name': detail.get('major_NM') or summary.get('major_nm'),
        'field': FIELDS.get(str(detail.get('major_CL1') or summary.get('major_cl1')), ''),
        'summary': tidy(detail.get('major_SUMRY') or summary.get('major_sumry')),
        'characteristics': tidy(detail.get('characteristics')),
        'interest': tidy(detail.get('interest')),
        'employmentRate': detail.get('empymn_CODE') or summary.get('empymn_code'),
        'subjects': [{'t': tidy(s.get('subject_NAME')), 'n': tidy(s.get('subject_DESCRIPTION'))}
                     for s in items(detail.get('subject')) if tidy(s.get('subject_NAME'))][:10],
        'after': [{'t': tidy(g.get('graduate_AFTER_NAME')), 'n': tidy(g.get('graduate_AFTER_DESCRIPTION'))}
                  for g in items(detail.get('graduateAfter')) if tidy(g.get('graduate_AFTER_NAME'))],
        'jobs': related,
        'certs': [tidy(q.get('qualf_NAME')) for q in items(detail.get('relateQualf')) if tidy(q.get('qualf_NAME'))],
        'names': [tidy(i.get('major_NM')) for i in items(detail.get('inst')) if tidy(i.get('major_NM'))][:40],
        'unis': [{'t': tidy(u.get('univ_NM')), 'd': tidy(u.get('major_NM')), 'a': tidy(u.get('area_NAME'))}
                 for u in items(detail.get('schl')) if tidy(u.get('univ_NM'))],
    }
    with open(os.path.join(major_dir, '%s.json' % seq), 'w', encoding='utf-8') as out:
        json.dump(page, out, ensure_ascii=False, separators=(',', ':'))
    major_index.append(page)

# -- 직업 --------------------------------------------------
job_dir = os.path.join(OUT, 'job')
os.makedirs(job_dir, exist_ok=True)
job_index = []
for summary, detail in jobs:
    seq = str(detail.get('seq') or summary.get('job_cd'))
    depts = []
    for dept in items(detail.get('jobDepartList')):
        name = tidy(dept.get('name'))
        if name:
            depts.append({'t': name, 'm': major_by_name.get(norm(name))})
    page = {
        'seq': seq,
        'name': detail.get('job_nm') or summary.get('job_nm'),
        'group': tidy(detail.get('std_job_btm_nm') or summary.get('top_nm')),
        'aptitude': tidy(detail.get('aptit_name') or summary.get('aptit_name')),
        'also': tidy(detail.get('rel_job_nm') or summary.get('rel_job_nm')),
        'work': texts(detail.get('jobWorkList')),
        'fit': texts(detail.get('jobAptitudeList')) + texts(detail.get('jobInterestList')),
        'become': (texts(detail.get('jobCurriculumList')) + texts(detail.get('jobTrainingList'))
                   + texts(detail.get('jobCertificateList')) + texts(detail.get('jobRecruitList'))),
        'forecast': texts(detail.get('jobForecastList')),
        'explore': texts(detail.get('researchList')),
        'wage': tidy(detail.get('wage') or summary.get('wage')),
        'wageNote': tidy(detail.get('wage_source')),
        'satisfaction': tidy(detail.get('satisfication')),
        'certs': [tidy(c.get('name')) for c in items(detail.get('jobCertiList')) if tidy(c.get('name'))],
        'orgs': [{'t': tidy(o.get('name')), 'u': tidy(o.get('detail'))}
                 for o in items(detail.get('jobRelOrgList')) if tidy(o.get('name'))],
        'majors': depts,
    }
    with open(os.path.join(job_dir, '%s.json' % seq), 'w', encoding='utf-8') as out:
        json.dump(page, out, ensure_ascii=False, separators=(',', ':'))
    job_index.append(page)

size = sum(os.path.getsize(os.path.join(d, f))
           for d in (major_dir, job_dir) for f in os.listdir(d))
linked_jobs = sum(1 for m in major_index for j in m['jobs'] if j['j'])
all_jobs = sum(len(m['jobs']) for m in major_index)
linked_majors = sum(1 for j in job_index for m in j['majors'] if m['m'])
all_majors = sum(len(j['majors']) for j in job_index)
print('\n학과 %d쪽 / 직업 %d쪽 (%.1f MB, 누를 때만 읽음)'
      % (len(major_index), len(job_index), size / 1048576.0))
print('학과→직업 이음 %d/%d (%.1f%%)' % (linked_jobs, all_jobs, 100.0 * linked_jobs / max(1, all_jobs)))
print('직업→학과 이음 %d/%d (%.1f%%)' % (linked_majors, all_majors, 100.0 * linked_majors / max(1, all_majors)))
print('-> career/major/, career/job/')
