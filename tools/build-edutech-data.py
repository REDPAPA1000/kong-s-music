# -*- coding: utf-8 -*-
"""뮤직 에듀테크 -> edutech-data.js"""
import io
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'tools', 'edutech-data.py')

ns = {}
with io.open(SRC, encoding='utf-8') as handle:
    exec(compile(handle.read(), SRC, 'exec'), ns)

ART = {'탐색/연주': 'play', '창작 기초': 'create', '교과 융합': 'fusion', '영상 편집': 'video'}


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'")


lines = []
counts = {}


def add(group, scope, index, title, art, url, **extra):
    fields = ['group: "%s"' % group, 'scope: "%s"' % scope, 'no: %d' % index,
              'title: "%s"' % esc(title), 'art: "%s"' % art, 'url: "%s"' % url]
    for key in ('tag', 'desc', 'source', 'sheetUrl', 'sheetLabel'):
        if extra.get(key):
            fields.append('%s: "%s"' % (key, esc(extra[key]) if key in ('tag', 'desc', 'source', 'sheetLabel') else extra[key]))
    lines.append('  { %s },' % ', '.join(fields))
    counts[scope] = counts.get(scope, 0) + 1


for i, (title, tag, desc, url, source) in enumerate(ns['SITES'], start=1):
    add('site', '에듀테크 사이트', i, title, ART.get(tag, 'play'), url, tag=tag, desc=desc, source=source)

for i, (title, url, source) in enumerate(ns['INTRO'], start=1):
    add('lab', '사이트 소개 영상', i, title, 'tutorial', url, source=source)

for i, (title, url, sheet) in enumerate(ns['LESSON'], start=1):
    add('lab', '수업 자료', i, title, 'lesson', url, sheetUrl=sheet, sheetLabel='학습지 (hwp)')

for i, (title, url, sheet, source) in enumerate(ns['EDIT'], start=1):
    add('lab', '영상 편집', i, title, 'video', url, source=source,
        sheetUrl=sheet, sheetLabel='활동지 (hwp)' if sheet else '')

with io.open(os.path.join(ROOT, 'edutech-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const edutechItems = [\n' + '\n'.join(lines) + '\n];\n')

for key in counts:
    print('%-16s %2d' % (key, counts[key]))
print('-' * 22)
print('total %d' % len(lines))
