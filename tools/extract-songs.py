# -*- coding: utf-8 -*-
"""대화 기록에서 노래 익히기 미작업분(서양 동요/가곡, 국악 민요)을 뽑아
   songs-part2.py 형태의 데이터로 저장한다."""
import io
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

TRANSCRIPT = sys.argv[1]
OUT = sys.argv[2] if len(sys.argv) > 2 else 'tools/songs-part2.py'

BS = chr(92)
raw = io.open(TRANSCRIPT, encoding='utf-8', errors='replace').read()
raw = raw.replace(BS + '"', '"').replace(BS + BS, BS)

record = re.compile(r'"cls_id"\s*:\s*(\d+)(.*?)(?="cls_id"\s*:\s*\d+|$)', re.S)


def field(name, body):
    hit = re.search(r'"%s"\s*:\s*"([^"]*)"' % name, body)
    return hit.group(1).strip() if hit else ''


# (cls_type, cls_sub_type) -> (genre, scope)
WANTED = {
    ('40248', '50572'): ('west', '동요'),
    ('40248', '50573'): ('west', '가곡'),
    ('40249', '50594'): ('gugak', '민요'),
}

buckets = {key: [] for key in WANTED}
seen = set()

for match in record.finditer(raw):
    cls_id = match.group(1)
    body = match.group(2)[:6000]
    key = (field('cls_type', body), field('cls_sub_type', body))
    if key not in WANTED or cls_id in seen:
        continue
    seen.add(cls_id)

    sheet = field('tc_active_docs', body) or field('tc_active_url', body)
    label = '활동지 (pdf)'
    if not sheet:
        sheet = field('st_active_docs', body) or field('st_active_url', body)
        label = '학습지 (pdf)'
    if not sheet:
        sheet = field('sc_mplayer_docs', body) or field('sc_mplayer_url', body)
        label = '악보 (pdf)'

    buckets[key].append({
        'title': field('cls_title', body),
        'note': field('cls_sub_content', body),
        'url': field('cls_url', body),
        'sheet': sheet,
        'label': label if sheet else '',
    })


def lit(text):
    return '"%s"' % (text or '').replace(BS, BS + BS).replace('"', BS + '"')


lines = ['# -*- coding: utf-8 -*-',
         '"""노래 익히기 — 서양음악 동요/가곡, 국악 민요 (대화 기록에서 복원)',
         '   행 = (제목, 보조설명, 감상 주소, 악보 주소, 악보 이름)"""',
         '']

names = {('40248', '50572'): 'WEST_KIDS',
         ('40248', '50573'): 'WEST_ART',
         ('40249', '50594'): 'GUGAK_FOLK'}

for key, (genre, scope) in WANTED.items():
    rows = buckets[key]
    lines.append('%s = [   # %s / %s  %d곡' % (names[key], genre, scope, len(rows)))
    for row in rows:
        lines.append('    (%s, %s, %s, %s, %s),'
                     % (lit(row['title']), lit(row['note']), lit(row['url']),
                        lit(row['sheet']), lit(row['label'])))
    lines.append(']')
    lines.append('')
    print('%-10s %-6s %3d곡   악보 있음 %d' % (genre, scope, len(rows),
                                              sum(1 for r in rows if r['sheet'])))

lines.append('SCOPES = [')
for key, (genre, scope) in WANTED.items():
    lines.append('    ("%s", "%s", %s),' % (genre, scope, names[key]))
lines.append(']')

io.open(OUT, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
print('저장: %s' % OUT)
