# -*- coding: utf-8 -*-
"""대화 기록(.jsonl)에 남아 있는 두클래스 API 응답에서
   파일주소 -> 뷰어주소 대응표를 뽑아낸다.

   - cls_url(원본 파일)  ->  https://www.douclass.com/viewer/SPC_P/<cls_id>
   - tc_active_url / ppt_url / st_active_url  ->  같이 들어 있던 *_docs 뷰어 주소
"""
import io
import json
import os
import re
import sys

TRANSCRIPT = sys.argv[1]
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'viewer-map.json')

raw = io.open(TRANSCRIPT, encoding='utf-8', errors='replace').read()
# 기록 안에서는 따옴표가 이스케이프되어 있을 수 있다.
raw = raw.replace('\\"', '"').replace('\\\\', '\\')

Q = r'"%s"\s*:\s*"([^"]*)"'
N = r'"%s"\s*:\s*(\d+)'

record = re.compile(
    N % 'cls_id' + r'(.*?)(?=' + N % 'cls_id' + r'|$)', re.S)

by_file = {}
by_doc = {}
titles = {}

for match in record.finditer(raw):
    cls_id = match.group(1)
    body = match.group(2)[:6000]

    def field(name):
        hit = re.search(Q % name, body)
        return hit.group(1) if hit else ''

    title = field('cls_title').strip()
    viewer = 'https://www.douclass.com/viewer/SPC_P/%s' % cls_id

    url = field('cls_url')
    if url.startswith('https://s3.douclass.com/'):
        by_file[url] = viewer
        titles[url] = title

    for attach in ('tc_active', 'ppt', 'st_active', 'guide',
                   'sc_mplayer', 'ad_mplayer', 'au_mplayer'):
        a_url = field(attach + '_url')
        a_doc = field(attach + '_docs')
        if a_url.startswith('https://s3.douclass.com/') and a_doc.startswith('http'):
            by_doc[a_url] = a_doc

data = {'file_to_viewer': by_file, 'attach_to_viewer': by_doc, 'titles': titles}
with io.open(OUT, 'w', encoding='utf-8') as handle:
    handle.write(json.dumps(data, ensure_ascii=False, indent=1))

print('파일 -> 뷰어      %5d' % len(by_file))
print('첨부파일 -> 뷰어  %5d' % len(by_doc))
print('저장: %s' % OUT)
