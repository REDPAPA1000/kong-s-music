# -*- coding: utf-8 -*-
"""스마트 악기 연주 -> smart-data.js"""
import io
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
T25 = 'https://file.t25.kr/c2/ens/instrument/%s'
PPT = 'https://s3.douclass.com/pub/2024/TC_PPT/2409/%s.pptx'


def u(page):
    return T25 % page


def p(fid):
    return PPT % fid


# (제목, 일러스트 key, 악기 페이지, 학생용 링크 PPT)
WEST = [
    ("피아노", "piano", u('01piano.html'), p('8jzb8dzixcvx')),
    ("칼림바", "kalimba", u('02kalimba.html'), p('4xixnwh1nc8u')),
    ("실로폰", "xylophone", u('03xylophone.html'), p('pbez0k36x7wg')),
    ("리코더", "recorder", u('04recorder.html'), p('lte84c0sjwvv')),
    ("오카리나", "ocarina", u('05ocarina.html'), p('ve0rib1bv5u9')),
    ("드럼", "drum", u('06drum.html'), p('p5qvugm7mhpd')),
    ("카혼", "cajon", u('07cajon.html'), p('z439n1arlj14')),
    ("리듬 악기", "rhythm", u('11rhythm.html'), p('y54io78b931j')),
    ("메트로놈", "metronome", u('13metronome.html'), p('d6wgmxmfyuvi')),
]

GUGAK = [
    ("장구", "janggu", u('08jang_gu.html'), p('okecg8p6z8vc')),
    ("단소", "danso", u('09danso.html'), p('yyjncbt28uzz')),
    ("소금", "sogeum", u('10sogeum.html'), p('q1s2x70de7xb')),
    ("가야금", "gayageum", u('14gayageum.html'), ''),
    ("국악기", "gugak", u('12kor_music.html'), p('sg0jji18b64b')),
]

GROUPS = [('west', '서양 악기', WEST), ('gugak', '국악기', GUGAK)]


def esc(text):
    return (text or '').replace('\\', '\\\\').replace('"', '&quot;').replace('`', "'")


lines = []
for group, label, rows in GROUPS:
    for index, (title, art, url, ppt) in enumerate(rows, start=1):
        fields = ['group: "%s"' % group, 'scope: "%s"' % label, 'no: %d' % index,
                  'title: "%s"' % esc(title), 'art: "%s"' % art, 'url: "%s"' % url]
        if ppt:
            fields.append('sheetUrl: "%s"' % ppt)
            fields.append('sheetLabel: "학생용 링크 (pptx)"')
        lines.append('  { %s },' % ', '.join(fields))
    print('%-6s %-8s %2d' % (group, label, len(rows)))

with io.open(os.path.join(ROOT, 'smart-data.js'), 'w', encoding='utf-8') as handle:
    handle.write('const smartItems = [\n' + '\n'.join(lines) + '\n];\n')

print('-' * 22)
print('total %d' % len(lines))
