# -*- coding: utf-8 -*-
"""songs-part2.py 에서 수상한 제목을 찾아 원본 기록의 주변 글자를 보여 준다."""
import io
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

ns = {}
exec(compile(io.open('tools/songs-part2.py', encoding='utf-8').read(), 'p2', 'exec'), ns)

odd = []
for genre, scope, rows in ns['SCOPES']:
    for index, row in enumerate(rows):
        title = row[0]
        if len(title) <= 1 or chr(92) in title or '&' in title:
            odd.append((genre, scope, index, row))

print('수상한 제목 %d건' % len(odd))
for genre, scope, index, row in odd:
    print('  %s/%s #%d  제목=%r  보조=%r' % (genre, scope, index + 1, row[0], row[1]))
    print('      주소 %s' % row[2])

raw = io.open(sys.argv[1], encoding='utf-8', errors='replace').read()
for genre, scope, index, row in odd:
    tail = row[2].rsplit('/', 1)[-1][:24]
    hit = raw.find(tail)
    if hit > 0:
        window = raw[max(0, hit - 1400):hit + 200]
        found = re.findall(r'cls_title[^,]{0,90}', window)
        print('\n[%s] 주변 cls_title: %s' % (tail, found[-1] if found else '(못 찾음)'))
