# -*- coding: utf-8 -*-
"""songs-part2.py 를 빌더가 쓰는 GROUPS(4칸) 형태로 바꾸고,
   따옴표 때문에 깨진 제목 한 건을 바로잡는다."""
import io
import sys

sys.stdout.reconfigure(encoding='utf-8')

BS = chr(92)
PATH = 'tools/songs-part2.py'

ns = {}
exec(compile(io.open(PATH, encoding='utf-8').read(), PATH, 'exec'), ns)

FIXES = {BS: '"사계" 중 \'겨울\''}


def lit(text):
    return '"%s"' % (text or '').replace(BS, BS + BS).replace('"', BS + '"')


lines = ['# -*- coding: utf-8 -*-',
         '"""노래 익히기 — 서양음악 동요/가곡, 국악 민요',
         '   행 = (제목, 보조설명, 감상 주소, 악보 주소)"""',
         '']
names = {('west', '동요'): 'WEST_KIDS',
         ('west', '가곡'): 'WEST_ART',
         ('gugak', '민요'): 'GUGAK_FOLK'}
fixed = 0

for genre, scope, rows in ns['SCOPES']:
    lines.append('%s = [   # %d곡' % (names[(genre, scope)], len(rows)))
    for title, note, url, sheet, _label in rows:
        if title in FIXES:
            title = FIXES[title]
            fixed += 1
        lines.append('    (%s, %s, %s, %s),'
                     % (lit(title), lit(note), lit(url), lit(sheet)))
    lines.append(']')
    lines.append('')

lines.append('GROUPS = [')
for genre, scope, _rows in ns['SCOPES']:
    lines.append('    ("%s", "%s", %s),' % (genre, scope, names[(genre, scope)]))
lines.append(']')

io.open(PATH, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print('GROUPS 형태로 변환, 제목 %d건 수정' % fixed)
