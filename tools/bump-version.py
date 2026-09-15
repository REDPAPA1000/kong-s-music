# -*- coding: utf-8 -*-
"""index.html 의 자산 주소에 붙은 ?v=... 를 현재 커밋으로 갱신한다.
   배포 후에도 브라우저가 예전 파일을 붙잡고 있는 일을 막는다.
   쓰는 법:  python tools/bump-version.py   (커밋 직전에 실행)"""
import io
import os
import re
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = ['styles.css', 'app.js', 'tools.js', 'songs-data.js', 'play-data.js', 'smart-data.js',
          'edutech-data.js', 'video-data.js', 'books-data.js', 'break-data.js', 'activity-data.js']

version = subprocess.run(['git', 'rev-parse', '--short', 'HEAD'],
                         capture_output=True, text=True, cwd=ROOT).stdout.strip()
if not version:
    raise SystemExit('git 커밋을 찾지 못했습니다.')

path = os.path.join(ROOT, 'index.html')
text = io.open(path, encoding='utf-8').read()
for asset in ASSETS:
    text = re.sub(r'(["\'])%s(\?v=[^"\']*)?\1' % re.escape(asset),
                  r'\g<1>%s?v=%s\1' % (asset, version), text)
io.open(path, 'w', encoding='utf-8').write(text)

app = os.path.join(ROOT, 'app.js')
source = io.open(app, encoding='utf-8').read()
source = re.sub(r'script\.src = "listening-data\.js(\?v=[^"]*)?";',
                'script.src = "listening-data.js?v=%s";' % version, source)
io.open(app, 'w', encoding='utf-8').write(source)

print('자산 버전을 %s 로 맞췄습니다.' % version)
