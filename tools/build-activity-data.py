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


def build_careernet(name, label_key, code_key, extra):
    """커리어넷 학과·직업 목록. 칸 이름이 자료마다 달라 넉넉하게 찾는다."""
    rows = load(name)
    if not rows:
        return [], collections.Counter()
    lines, stats = [], collections.Counter()
    for i, row in enumerate(rows):
        title = esc(next((row[k] for k in label_key if row.get(k)), ''))
        if not title:
            continue
        code = next((str(row[k]) for k in code_key if row.get(k)), str(i))
        group = esc(next((row[k] for k in extra if row.get(k)), ''))
        fields = [
            'id: "%s"' % code,
            't: "%s"' % title,
            'u: "%s"' % esc(row.get('link') or row.get('url') or ''),
        ]
        if group:
            fields.append('c: "%s"' % group)
        lines.append('{%s}' % ','.join(fields))
        stats['갈래:' + (group or '없음')] += 1
    return lines, stats


chunks = []
for var, builder, label in [
    ('careerItems', build_career, '진로 교육'),
    ('majorItems', lambda: build_careernet('major.json', ('mClass', 'major', 'facilName'), ('majorSeq', 'seq'), ('lClass', 'mClass')), '학과 정보'),
    ('jobItems', lambda: build_careernet('job.json', ('job_nm', 'jobNm', 'name'), ('job_cd', 'jobCd', 'seq'), ('aptit_name', 'lClass')), '직업 정보'),
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
