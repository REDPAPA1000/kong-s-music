# -*- coding: utf-8 -*-
"""음악 도서 -> books-data.js"""
import io
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'tools', 'books-data.py')
BOOK = 'https://onbook.douclass.com/bookDetail/%s'

ns = {}
with io.open(SRC, encoding='utf-8') as handle:
    exec(compile(handle.read(), SRC, 'exec'), ns)


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


lines = []
total = 0
for group, group_label, scope, art, rows in ns['GROUPS']:
    for index, (title, book_id) in enumerate(rows, start=1):
        fields = ['group: "%s"' % group, 'art: "%s"' % art, 'no: %d' % index,
                  'title: "%s"' % esc(title), 'url: "%s"' % (BOOK % book_id)]
        if scope:
            fields.append('scope: "%s"' % scope)
        lines.append('  { %s },' % ', '.join(fields))
    print('%-18s %-12s %3d' % (group_label, scope or '-', len(rows)))
    total += len(rows)

with io.open(os.path.join(ROOT, 'books-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const bookItems = [\n' + '\n'.join(lines) + '\n];\n')

print('-' * 36)
print('total %d' % total)
