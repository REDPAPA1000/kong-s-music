# -*- coding: utf-8 -*-
"""음악 동영상 -> video-data.js"""
import io
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
S3 = 'https://s3.douclass.com/pub/'
VIEWER = 'https://www.douclass.com/viewer/SPC_P/%s'
LECTURE = ('https://academy.gugak.go.kr/open/open/lecture/detail.do'
           '?openLectureSeq=%s&srchOpenCategorySeq=17&srchListType=CATEGORY'
           '&currentMenuId=900006001')


def load(name):
    path = os.path.join(ROOT, 'tools', name)
    ns = {}
    with io.open(path, encoding='utf-8') as handle:
        exec(compile(handle.read(), path, 'exec'), ns)
    return ns['SCOPES']


def mp4(token):
    year, month, fid = token.split('/')
    return '%s%s/MP4/%s/%s.mp4' % (S3, year, month, fid)


def pdf(token):
    year, month, fid = token.split('/')
    return '%s%s/TC_ACTIVE/%s/%s.pdf' % (S3, year, month, fid)


def media(token):
    if token.startswith('mp4:'):
        return mp4(token[4:])
    if token.startswith('mpg:'):
        year, month, fid = token[4:].split('/')
        return '%s%s/ETC/%s/%s.mpg' % (S3, year, month, fid)
    if token.startswith('gugak:'):
        return LECTURE % token[6:]
    return mp4(token)


def link(token, cls_id):
    """두클래스 파일은 뷰어 주소로, 외부 강의는 원래 주소 그대로."""
    global viewer_count
    if token.startswith('gugak:'):
        return media(token)
    viewer_count += 1
    return VIEWER % cls_id


def clock(seconds):
    if not seconds:
        return ''
    return '%d:%02d' % (seconds // 60, seconds % 60)


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'")


GROUPS = [
    ('anim', '음악 애니메이션', 'video-anim.py'),
    ('lesson', '수업 도움 동영상', 'video-lesson.py'),
    ('inst', '악기 연주법', 'video-inst.py'),
    ('gugak', '국악 동영상', 'video-gugak.py'),
]

ids_ns = {}
_idpath = os.path.join(ROOT, 'tools', 'video-ids.py')
with io.open(_idpath, encoding='utf-8') as handle:
    exec(compile(handle.read(), _idpath, 'exec'), ids_ns)
BY_SCOPE = ids_ns['BY_SCOPE']

lines = []
report = []
viewer_count = 0

for group, group_label, source_file in GROUPS:
    total = 0
    for scope, art, rows in load(source_file):
        id_rows = BY_SCOPE[(group, scope)]
        if len(id_rows) != len(rows):
            raise SystemExit('%s / %s : 개수 불일치 %d vs %d'
                             % (group, scope, len(rows), len(id_rows)))
        for index, row in enumerate(rows, start=1):
            title, token, seconds = row[0], row[1], row[2]
            id_title, cls_id = id_rows[index - 1]
            if id_title != title:
                raise SystemExit('%s / %s #%d : 제목 불일치 "%s" vs "%s"'
                                 % (group, scope, index, title, id_title))
            fields = ['group: "%s"' % group, 'scope: "%s"' % esc(scope),
                      'art: "%s"' % art, 'no: %d' % index,
                      'title: "%s"' % esc(title), 'url: "%s"' % link(token, cls_id)]
            length = clock(seconds)
            if length:
                fields.append('len: "%s"' % length)
            if group == 'lesson' and len(row) > 3 and row[3]:
                fields.append('tag: "%s"' % esc(row[3]))
            if group == 'inst' and len(row) > 3 and row[3]:
                fields.append('sheetUrl: "%s"' % pdf(row[3]))
                fields.append('sheetLabel: "연주 악보 (pdf)"')
            if group == 'gugak':
                if row[3]:
                    fields.append('tag: "%s"' % esc(row[3]))
                if row[4]:
                    fields.append('source: "%s"' % esc(row[4]))
            lines.append('  { %s },' % ', '.join(fields))
        report.append('  %-22s %3d' % (scope, len(rows)))
        total += len(rows)
    report.append('%-24s %3d' % (group_label, total))

with io.open(os.path.join(ROOT, 'video-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const videoItems = [\n' + '\n'.join(lines) + '\n];\n')

print('\n'.join(report))
print('-' * 30)
print('total %d  (뷰어 주소 %d / 외부 링크 %d)'
      % (len(lines), viewer_count, len(lines) - viewer_count))

# 주의: build-video-data.py 를 다시 돌린 뒤에는
#       python tools/apply-viewer-links.py 를 실행해
#       악보 PDF 주소를 hermes 뷰어로 다시 바꿔야 한다.
