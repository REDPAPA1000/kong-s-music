# -*- coding: utf-8 -*-
"""진로활동 -> activity-data.js

   tmp/career.json  (두클래스 진로 교육 목록)
   tmp/major.json   (커리어넷 학과 정보)
   tmp/job.json     (커리어넷 직업 정보)
   없는 파일은 빈 목록으로 둔다.
"""
import collections
import io
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'activity-data.js')
MAJOR_VIEW = 'https://www.career.go.kr/cloud/w/major/uView?seq='
CAREER_SITE = 'https://www.career.go.kr'


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


def load(name):
    path = os.path.join(ROOT, 'tmp', name)
    if not os.path.exists(path):
        return None
    raw = json.load(io.open(path, encoding='utf-8'))
    return raw.get('ret_data', raw if isinstance(raw, list) else [])


def watch_url(url):
    """유튜브 embed 주소를 보통 보기 주소로 바꾼다. 그래야 설명과 목록이 함께 보인다."""
    hit = re.search(r'youtube\.com/embed/([A-Za-z0-9_-]{6,})', url or '')
    return 'https://www.youtube.com/watch?v=%s' % hit.group(1) if hit else (url or '')


def build_career():
    rows = load('career.json')
    if not rows:
        return [], collections.Counter()
    lines, stats = [], collections.Counter()
    for row in rows:
        title = esc(row.get('cls_title'))
        fields = [
            'id: "%s"' % row['cls_id'],
            't: "%s"' % title,
            'u: "%s"' % esc(watch_url(row.get('cls_url') or row.get('cls_fname'))),
            'img: "%s"' % esc(row.get('cls_thumbnail')),
        ]
        if row.get('cls_source'):
            fields.append('n: "%s"' % esc(row['cls_source']))
        lines.append('{%s}' % ','.join(fields))
        stats['출처:' + (row.get('cls_source') or '없음')] += 1
    return lines, stats


FIELDS = {
    '100391': '인문계열', '100392': '사회계열', '100393': '교육계열',
    '100394': '공학계열', '100395': '자연계열', '100396': '의약계열',
    '100397': '예체능계열',
}


def build_major():
    """커리어넷 학과 정보(대학교). tools/fetch-careernet.py 가 받아 둔 것을 쓴다.
       seq 로 커리어넷 학과 쪽에 바로 연결하고, 그림도 커리어넷 것을 그대로 참조한다."""
    rows = load('major-careernet.json')
    if not rows:
        return [], collections.Counter()
    lines, stats, seen = [], collections.Counter(), set()
    # 계열은 인문·사회·교육·공학·자연·의약·예체능 차례로 둔다
    order = list(FIELDS)
    rows = sorted(rows, key=lambda r: (order.index(str(r.get('major_cl1')))
                                       if str(r.get('major_cl1')) in order else len(order),
                                       r.get('major_nm') or ''))
    for item in rows:
        name = esc(item.get('major_nm'))
        seq = item.get('seq')
        if not name or not seq or seq in seen:
            continue
        seen.add(seq)
        field = FIELDS.get(str(item.get('major_cl1')), '')
        fields = [
            'id: "%s"' % seq,
            't: "%s"' % name,
            'u: "%s%s"' % (MAJOR_VIEW, seq),
        ]
        if item.get('thumbnail'):
            fields.append('img: "%s%s"' % (CAREER_SITE, esc(item['thumbnail'])))
        if field:
            fields.append('c: "%s"' % field)
        # 설명에 줄바꿈이 섞여 있어 한 줄로 모은다
        note = esc(' '.join((item.get('major_sumry') or '').split()))
        if len(note) > 90:
            note = note[:90].rstrip() + '…'
        if note:
            fields.append('n: "%s"' % note)
        lines.append('{%s}' % ','.join(fields))
        stats['계열:' + (field or '그 밖')] += 1
    return lines, stats


def build_job():
    rows = load('job.json')
    if not rows:
        return [], collections.Counter()
    lines, stats, seen = [], collections.Counter(), set()
    for row in rows:
        item = row.get('row', row) if isinstance(row, dict) else row
        name = esc(item.get('job_nm') or item.get('jobNm') or item.get('name'))
        if not name or name in seen:
            continue
        seen.add(name)
        group = esc(item.get('aptit_name') or item.get('lClass') or '')
        fields = ['id: "%s"' % (item.get('job_cd') or item.get('jobCd') or len(lines)), 't: "%s"' % name]
        if group:
            fields.append('c: "%s"' % group)
        note = esc(item.get('summary') or item.get('work') or '')
        if note:
            fields.append('n: "%s"' % (note[:110] + ' 외' if len(note) > 110 else note))
        lines.append('{%s}' % ','.join(fields))
        stats['갈래:' + (group or '없음')] += 1
    return lines, stats


chunks = []
for var, builder, label in [
    ('careerItems', build_career, '진로 교육'),
    ('majorItems', build_major, '학과 정보'),
    ('jobItems', build_job, '직업 정보'),
]:
    lines, stats = builder()
    chunks.append('const %s = [\n%s\n];' % (var, ',\n'.join(lines)) if lines else 'const %s = [];' % var)
    if lines:
        print('%s %d개' % (label, len(lines)))
        for key in sorted(stats):
            print('    %-16s %3d' % (key, stats[key]))
    else:
        print('%s — 자료가 없어 빈 목록으로 둡니다.' % label)

io.open(OUT, 'w', encoding='utf-8').write(
    '/* 진로활동 — tools/build-activity-data.py 가 만든다. 손으로 고치지 마세요. */\n'
    + '\n\n'.join(chunks) + '\n')
print('\n-> %s (%.0f KB)' % (os.path.basename(OUT), os.path.getsize(OUT) / 1024.0))
