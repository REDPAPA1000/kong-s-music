# -*- coding: utf-8 -*-
"""음악 감상실 & 악보은행 -> listening-data.js

   tmp/listening.json (두클래스 목록 API 응답 전체) 을 읽어서 만든다.
   자료 본체는 두클래스 뷰어(viewer/SPC_P/<cls_id>)로 연결하고,
   악보는 뷰어 주소(sc_mplayer_docs)가 있으면 그쪽을 쓴다.
"""
import collections
import io
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'tmp', 'listening.json')
OUT = os.path.join(ROOT, 'listening-data.js')
VIEWER = 'https://www.douclass.com/viewer/SPC_P/%s'
PUBLISHER = '두산동아'

GRADE_ORDER = ['초등3', '초등4', '초등5', '초등6', '중학 음악①', '중학 음악②']
GENRE_ORDER = ['서양', '국악', '창작국악', '대중음악', '세계음악']
AREA_ORDER = ['가창', '기악', '감상']
TYPE_ORDER = ['멜로디', '합주', '합창']


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'").strip()


rows = json.load(io.open(SRC, encoding='utf-8'))['ret_data']
# 두클래스 목록과 같은 차례로 둔다 (정렬하지 않음)

lines = []
stats = collections.Counter()
sheet_viewer = 0

for row in rows:
    sheet = row.get('sc_mplayer_docs') or row.get('sc_mplayer_url') or ''
    if row.get('sc_mplayer_docs'):
        sheet_viewer += 1
    video = row.get('ad_mplayer_url') or ''
    # 추가자료 이름은 원본 표기를 쓰되, 오타만 바로잡는다
    video_label = (row.get('ad_mplayer_disp_name') or '').strip()
    video_label = {'동양상': '동영상', '노래익히기': '노래 익히기',
                   '흑인': '노래 익히기'}.get(video_label, video_label)
    if video and not video_label:
        video_label = '동영상'
    kind = row.get('mp_filter5') or ''
    if kind == '-':
        kind = ''

    fields = [
        'p: "%s"' % PUBLISHER,
        'lv: "%s"' % esc(row.get('mp_filter2')),
        'gr: "%s"' % esc(row.get('mp_filter3')),
        'ge: "%s"' % esc(row.get('mp_filter1')),
        'ar: "%s"' % esc(row.get('mp_filter4')),
        'ty: "%s"' % esc(kind),
        't: "%s"' % esc(row.get('cls_title')),
        'u: "%s"' % (VIEWER % row['cls_id']),
    ]
    note = esc(row.get('cls_sub_content'))
    if note:
        fields.append('n: "%s"' % note)
    if sheet:
        fields.append('s: "%s"' % sheet)
    if video:
        fields.append('v: "%s"' % video)
        fields.append('vl: "%s"' % esc(video_label))
    lines.append('{%s}' % ','.join(fields))

    stats['학교급:' + (row.get('mp_filter2') or '?')] += 1
    stats['장르:' + (row.get('mp_filter1') or '?')] += 1

with io.open(OUT, 'w', encoding='utf-8') as handle:
    handle.write('const listeningItems = [\n' + ',\n'.join(lines) + '\n];\n')

print('총 %d개  ->  %s' % (len(lines), os.path.basename(OUT)))
print('악보 뷰어 주소 %d개 / 직접 파일 %d개'
      % (sheet_viewer, sum(1 for r in rows if r.get('sc_mplayer_url')) - sheet_viewer))
print('파일 크기 %.0f KB' % (os.path.getsize(OUT) / 1024.0))
for key in sorted(stats):
    if key.startswith('학교급') or key.startswith('장르'):
        print('  %-14s %4d' % (key, stats[key]))
