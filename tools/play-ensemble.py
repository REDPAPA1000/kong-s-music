# -*- coding: utf-8 -*-
"""기악 연주곡집 — 20곡. (제목, 유튜브 ID, 활동지 PDF id)"""

YT = 'https://www.youtube.com/embed/%s'
PDF = 'https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/%s.pdf'


def y(vid):
    return YT % vid


def p(fid):
    return PDF % fid


# 독주곡
SOLO = [
    ("바다가 보이는 마을", y('MtN19-DSVEA'), p('5om4wt3ar1fl')),
    ("아로하", y('KrIpiDyL1i0'), p('r6sx6pq0vew9')),
    ("우리의 꿈", y('rLLPNMQTzk8'), p('qgyhgb8oy3lv')),
    ("Viva La Vida", y('O0FNIZ1dPKQ'), p('fru7qbnxf1nh')),
    ("I’ll Be Missing You", y('DPAOYDx3xOM'), p('nbdww1qj48r2')),
    ("Falling Slowly", y('bkVmBLg_tZE'), p('bs850tp58h2z')),
    ("드라마", y('K3ADJA0m5LA'), p('q3023s1bwfmf')),
    ("가을 아침", y('O6jLxHqTp7A'), p('e779z65zb3cp')),
    ("황금별", y('e-MjyRx_jM4'), p('omh86wp0mpch')),
    ("누가 죄인인가", y('Anvri_7OXm0'), p('hapwqza8axjd')),
]

# 합주곡
GROUP = [
    ("지금 이 순간", y('cj-6iRKe3_o'), p('mwdrdftcroq0')),
    ("Think Of Me", y('VcVlS-u8iac'), p('shxrrqvxdwyl')),
    ("제주도의 푸른 밤", y('ysanF-LYojM'), p('17sz4dg5650y')),
    ("민중의 노래", y('pgjvgvamiQg'), p('rj0whb07jr74')),
    ("북극곰아", y('rOY9S9whS2g'), p('6mu3et1euc57')),
    ("Seasons Of Love", y('5OOwKOZY0Kk'), p('6x1cjzrax9wl')),
    ("사랑은 은하수 다방에서", y('e_t0GLIer8s'), p('49g8lj703r33')),
    ("폰서트", y('as2MMAeYJig'), p('x1onc29vp5kv')),
    ("나는 나비", y('Yzzfvu8tvoU'), p('w6s3qbhmjbjr')),
    ("This Is Me", y('KDWBGQtjqWM'), p('pq1vpug6qkas')),
]

SCOPES = [
    ("독주곡", SOLO),
    ("합주곡", GROUP),
]
