# -*- coding: utf-8 -*-
"""songs-part*.py 의 데이터를 모아 songs-data.js 를 만든다."""
import io
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))

GROUPS = []
for module_name in ('songs_part1', 'songs_part2'):
    path = os.path.join(ROOT, 'tools', module_name.replace('_', '-') + '.py')
    if not os.path.exists(path):
        continue
    namespace = {}
    with io.open(path, encoding='utf-8') as handle:
        exec(compile(handle.read(), path, 'exec'), namespace)
    GROUPS.extend(namespace['GROUPS'])


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'")


lines = []
report = {}
for genre, scope, rows in GROUPS:
    for index, (title, note, url, sheet) in enumerate(rows, start=1):
        fields = ['genre: "%s"' % genre, 'no: %d' % index, 'title: "%s"' % esc(title)]
        if scope:
            fields.append('scope: "%s"' % scope)
        if note:
            fields.append('note: "%s"' % esc(note))
        fields.append('url: "%s"' % url)
        if sheet:
            fields.append('sheetUrl: "%s"' % sheet)
            fields.append('sheetLabel: "활동지 (pdf)"')
        lines.append('  { %s },' % ', '.join(fields))
    report['%s / %s' % (genre, scope or '-')] = len(rows)

with io.open(os.path.join(ROOT, 'songs-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const songItems = [\n' + '\n'.join(lines) + '\n];\n')

for key in sorted(report):
    print('%-24s %3d' % (key, report[key]))
print('-' * 30)
print('total %d' % len(lines))
