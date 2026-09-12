# -*- coding: utf-8 -*-
"""지학사 78곡 중 감상실(listening-data.js)에 없는 곡을 찾는다.
   곡명이 "<오페라> 중 '<곡>'" 처럼 긴 제목 안에 들어 있는 경우도 있어
   완전 일치뿐 아니라 부분 일치도 함께 본다."""
import io
import os
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from importlib import import_module
jihak = import_module('jihak-songs')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
text = io.open(os.path.join(ROOT, 'listening-data.js'), encoding='utf-8').read()
titles = sorted(set(re.findall(r't: "(.*?)",u:', text)))

SUFFIX = re.compile(r'[-–]\s*(학생|반주|전문가|교사|원어|우리말|메인|[^-–]*곡집)\s*$')


def norm(name, drop_paren=True):
    name = name.replace('&quot;', '"')
    for _ in range(3):
        name = SUFFIX.sub('', name).strip()
    if drop_paren:
        name = re.sub(r'\([^)]*\)', '', name)
    return re.sub(r'[\s,·.\'"!?~\-–—()]+', '', name).lower()


exact = {}
for title in titles:
    exact.setdefault(norm(title), []).append(title)

missing, partial = [], []
for name, token in jihak.SONGS:
    key = norm(name)
    if key in exact:
        continue
    hits = [t for t in titles if key in norm(t, drop_paren=False)]
    if hits:
        partial.append((name, hits))
    else:
        missing.append((name, token))

print('감상실 곡 %d개(중복 제외) / 지학사 %d곡' % (len(titles), len(jihak.SONGS)))
print('\n[부분 일치 — 사람이 확인할 것] %d곡' % len(partial))
for name, hits in partial:
    print('  %s  ->  %s%s' % (name, ' | '.join(hits[:3]), ' ...' if len(hits) > 3 else ''))
print('\n[없는 곡] %d곡' % len(missing))
for name, token in missing:
    print('  %-24s %s' % (name, jihak.grade(token)))
