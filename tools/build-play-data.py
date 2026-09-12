# -*- coding: utf-8 -*-
"""음악 연주 자료집 데이터 -> play-data.js"""
import io
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PDF = 'https://s3.douclass.com/pub/2026/PDF/2607/%s.pdf'

# (제목, 부가설명, 자료 URL, 표지 종류)
ALL_PDF = [
    ("두클래스 TOP40 리코더 곡집", "연주/악보: 율다우", PDF % 'uunqqfhie1af', 'recorder'),
    ("두클래스 TOP50 칼림바 곡집", "", PDF % 'docqkosrhpnm', 'kalimba'),
    ("두클래스 TOP40 단소·소금 곡집", "연주/악보: 느루", PDF % 'tttw0u21f5z7', 'danso'),
    ("기악 연주곡집", "", PDF % '8uy4n2fdgxyh', 'ensemble'),
    ("초등 수업 도움 자료집", "", PDF % 'd5cj5u1arifv', 'guide'),
    ("중등 수업 도움 자료집", "", PDF % 'rq33g77mehc5', 'guide'),
]

def load_scopes(name):
    path = os.path.join(ROOT, 'tools', name)
    if not os.path.exists(path):
        return []
    ns = {}
    with io.open(path, encoding='utf-8') as handle:
        exec(compile(handle.read(), path, 'exec'), ns)
    rows = []
    for scope, items in ns['SCOPES']:
        for title, url, sheet in items:
            rows.append((title, '', url, 'video', scope, sheet))
    return rows


RECORDER = load_scopes('play-recorder.py')
KALIMBA = load_scopes('play-kalimba.py')
DANSO = load_scopes('play-danso.py')
ENSEMBLE = load_scopes('play-ensemble.py')

GROUPS = [
    ('all', ALL_PDF),
    ('recorder', RECORDER),
    ('kalimba', KALIMBA),
    ('danso', DANSO),
    ('ensemble', ENSEMBLE),
]


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'")


lines = []
for group, rows in GROUPS:
    for index, row in enumerate(rows, start=1):
        title, note, url, art = row[0], row[1], row[2], row[3]
        scope = row[4] if len(row) > 4 else ''
        sheet = row[5] if len(row) > 5 else ''
        fields = ['group: "%s"' % group, 'no: %d' % index, 'title: "%s"' % esc(title), 'art: "%s"' % art]
        if scope:
            fields.append('scope: "%s"' % scope)
        if note:
            fields.append('note: "%s"' % esc(note))
        fields.append('url: "%s"' % url)
        if sheet:
            fields.append('sheetUrl: "%s"' % sheet)
            fields.append('sheetLabel: "악보 (pdf)"')
        lines.append('  { %s },' % ', '.join(fields))
    print('%-10s %3d' % (group, len(rows)))

with io.open(os.path.join(ROOT, 'play-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const playItems = [\n' + '\n'.join(lines) + '\n];\n')

print('-' * 20)
print('total %d' % len(lines))
