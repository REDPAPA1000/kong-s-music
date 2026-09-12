# -*- coding: utf-8 -*-
"""노래 익히기 데이터 1차 — 전래 동요 / 판소리·시조 / 창작국악 / 대중음악 / 세계음악"""

T25 = 'https://t25.kr/%s'
CHASI = 'http://cfchasi.douclass.com/contents/MU/%s'
FT25 = 'https://file.t25.kr/c2/ens/%s'
FDOU = 'https://file.douclass.com/c2/ens/%s'
CF = ('https://ddcro3vd12403.cloudfront.net/2-douclass-smartbook/02_MID/MUS/%s'
      '/publish/book/app/%s/index.html?APXPGTTL=%s&ABRPRM=%%7B%%7D')
PDF = 'https://s3.douclass.com/pub/%s/TC_ACTIVE/%s/%s.pdf'


def t(code):
    return T25 % code


def c(path):
    return CHASI % path


def f(path):
    return FT25 % path


def cf(book, app, page):
    return CF % (book, app, page)


def p(year, ym, fid):
    return PDF % (year, ym, fid)


# (제목, 부가설명, 악보 URL, 활동지 PDF URL)
GUGAK_FOLK = [
    ("어깨동무", "", t('1uy8'), p(2025, 2506, 'pytdjnyep82v')),
    ("남생아 놀아라", "", t('yacx'), p(2025, 2505, '3p50lo49j07l')),
    ("두꺼비집이 여물까", "", t('e1i7'), p(2025, 2505, 'ktuyi4wspu7n')),
    ("실구대 소리", "", t('skst'), p(2025, 2505, 'iwr1bb9vii5g')),
    ("월월이청청", "", t('z9ib'), p(2025, 2506, 'roam1sfs4cwg')),
    ("대문놀이", "", t('ucu6'), p(2025, 2505, 'fw0v1x6nsnlt')),
    ("이거리 저거리 각거리", "", t('qdun'), p(2025, 2505, 'nrlqm5l99owv')),
    ("벌아 벌아 꿀 떠라", "", t('ce5o'), p(2025, 2505, 'kf3vq2hjk1tq')),
    ("나물노래", "", t('7j8s'), p(2025, 2505, 'zng8f4nwyarf')),
    ("장장 짚세기", "", t('erwc'), p(2025, 2505, 'z79mn7yxoj5f')),
    ("잠자리 꽁꽁", "", t('sucn'), p(2025, 2505, 'jbm4cd0oq9xx')),
    ("숨바꼭질(1)", "", c('MUS3/mus_3/1/1_2_7.html'), p(2025, 2505, '5s28rt7mzg81')),
    ("숨바꼭질(2)", "", c('MUS3/mus_3/1/1_2_8.html'), p(2025, 2505, 'vke17wzvosgg')),
    ("덕석 몰자", "", c('MUS3/mus_3/1/1_7_15.html'), p(2025, 2505, 'y5sllb175dca')),
    ("널뛰기", "", c('MUS3/mus_3/4/4_2_8.html'), p(2025, 2506, 'xyqbo7t5alkw')),
    ("고사리꺾자", "", c('MUS5/mus_5/1/1_2_3.html'), p(2025, 2506, 'yb71ljqvj00x')),
    ("청어엮자", "", c('MUS5/mus_5/1/1_2_6.html'), p(2025, 2505, 'yzgr53v0qzsb')),
    ("윷놀이", "", c('MUS3/mus_3/4/4_2_7.html'), p(2025, 2505, 'vwroqajonjab')),
]

GUGAK_PANSORI = [
    ("화초장타령", "판소리 '흥보가'", t('3om2'), p(2025, 2505, 'g6uhpewupgyd')),
    ("자진사랑가", "판소리 '춘향가'", t('rgmi'), p(2025, 2505, 'kvijs254jvvw')),
    ("자진사랑가", "판소리 '춘향가'", cf('MUS2', 'contMusic01', '28_2'), p(2025, 2505, 'vqz7ulsz7f39')),
    ("태산이", "", t('3994'), p(2025, 2506, 'bsdvs1vdyfdo')),
    ("동창이", "", cf('MUS2', 'contActivity04', '84_6'), p(2025, 2506, 'f38hcxy0pvyz')),
]

NEWGUGAK = [
    ("아침 해", "", f('ele_music_6/6-1/6-1-2/6-1-2-1.html'), p(2026, 2604, 'eluvxg94b04g')),
    ("달빛 가야금", "", f('ele_music_6/6-1/6-1-5/6-1-5-1.html'), p(2026, 2604, '2za1j5cgiifw')),
    ("추워라 추워라 춥대장", "", f('ele_music_5/5-1/5-1-4/5-1-4-3.html'), p(2026, 2604, 'nzl2j2rtdiyn')),
    ("만파식적", "", f('ele_music_5/5-1/5-1-2/5-1-2-5.html'), p(2026, 2604, 'l535d9ff5esk')),
    ("모두 다 꽃이야", "", t('xofc'), p(2025, 2505, 'unecuilpg8br')),
    ("악기 놀이", "", t('eajh'), p(2025, 2505, 'v8zfagv31ldx')),
    ("함께 어울려 사는 세상", "", t('6vf2'), p(2025, 2505, 'no2ou569h8qv')),
    ("동지팥죽", "", c('MUS3/mus_3/4/4_2_3.html'), p(2025, 2505, 'm48nbzn4hrns')),
    ("바삭바삭 쥐 생원", "", c('MUS5/mus_5/3/3_2_3.html'), p(2025, 2505, 'zibj1xohr2s7')),
    ("개구리 소리", "", c('MUS6/mus_6/1/1_2_3.html'), p(2025, 2505, 'awflm4p069ya')),
    ("아침 해", "", c('MUS6/mus_6/3/3_2_3.html'), p(2025, 2505, '0zia3cdlfclr')),
    ("군밤타령(아 카펠라)", "", cf('MUS1', 'contMusic04', '87_2'), p(2025, 2505, 'xzvvz6h4jggj')),
    ("난감하네", "", t('1e52'), p(2025, 2505, 'kt2ikk42rjjv')),
    ("아름다운 나라", "부분 2부 합창", t('q89j'), p(2025, 2505, 'kutdnuj6eihx')),
    ("범 내려온다", "", t('a0tb'), p(2025, 2505, 'uxxigkl7xy2t')),
]

POP = [
    ("풍선", "", f('ele_music_6/6-1/6-1-4/6-1-4-1.html'), p(2026, 2604, '2kxr5c5co5g1')),
    ("여행을 떠나요", "", f('ele_music_6/6-1/6-1-5/6-1-5-2.html'), p(2026, 2604, 'gz1he2skshvv')),
    ("홀로 아리랑", "", f('ele_music_5/5-1/5-1-5/5-1-5-1.html'), p(2026, 2604, 'fwiz9e1c7xpj')),
    ("사자가 잠이 든 정글", "기악 합주", f('ele_music_5/5-1/5-1-3/5-1-3-6.html'), p(2026, 2604, 'me8lgp7hckws')),
    ("바람이 불어오는 곳", "바장조", f('ele_music_5/5-1/5-1-2/5-1-2-6.html'), p(2026, 2604, 'gp418f1nmo0o')),
    ("바람의 멜로디", "", f('ele_music_5/5-1/5-1-5/5-1-5-2.html'), p(2026, 2604, 's20cj8ouqcsd')),
    ("도레미 송", "영화 '사운드 오브 뮤직'", t('et89'), p(2025, 2505, '4lih9zdcsp1b')),
    ("도레미 송", "영화 '사운드 오브 뮤직'", cf('MUS1', 'contMusic01', '12_2'), p(2025, 2505, '7go7gn9fzf5p')),
    ("염소 4만 원", "", t('vxe1'), p(2025, 2505, '2ue6gycgzr4h')),
    ("제주도의 푸른 밤", "", f('m_music/song/mus/mid/1_56.html'), p(2025, 2505, '34cnka5myi6g')),
    ("바람이 불어오는 곳", "다장조", f('m_music/song/mus/mid/2_58.html'), p(2026, 2604, '21cq5bjp21dr')),
    ("포기는 없어", "만화 '주토피아'", FDOU % 'donga_music_3/3-1/3-1-4/3-4-2-1.html', p(2025, 2505, 'osa47pu549xg')),
    ("같이 눈사람 만들래", "만화 '겨울왕국'", FDOU % 'donga_music_3/3-1/3-1-4/3-4-2-2.html', p(2025, 2505, 'sb0y7d3lovp7')),
    ("같이 눈사람 만들래", "만화 '겨울왕국'", cf('MUS1', 'contMusic04', '76_2'), p(2025, 2505, 'cjv6drgw1b6u')),
    ("Love Is an Open Door", "만화 '겨울왕국'", t('5s7d'), p(2025, 2505, 'obphzfjl0yt3')),
    ("함께 연주하는 겨울 노래(합주)", "", t('v5t9'), p(2025, 2506, 'cizm276kaopw')),
    ("Happy Things", "", t('niv8'), p(2025, 2505, 'fgwwdt3h8lnu')),
    ("폰서트(카혼)", "", f('m_music/song/mus/mid/1_54.html'), p(2025, 2505, '5blxkb762svm')),
    ("함께 가요, 탄소 중립", "", t('vxvo'), p(2025, 2505, '45onb4t3w5qu')),
    ("말하는 대로", "", cf('MUS2', 'contMusic01', '18_4'), p(2025, 2505, 'jot8mwfz2ct8')),
    ("먼지가 되어", "수업 자료 보기에서 악보pdf를 활동지로 제공합니다.", cf('MUS2', 'contMusic01', '36_4'), p(2025, 2504, '12op7eg5eyix')),
    ("여행(합주)", "", t('6vvb'), p(2025, 2505, 'lazvae0vwtnw')),
    ("여행을 떠나요(드럼)", "", cf('MUS2', 'contMusic04', '92_4'), p(2025, 2505, 'q0m4r74wsy1s')),
    ("수고했어, 오늘도", "수업 자료 보기에서 악보pdf를 활동지로 제공합니다.", t('sdw1'), p(2025, 2504, 'dz5xieajqknz')),
    ("바람의 멜로디", "만화 '마당을 나온 암탉' 부분 2부 합창", t('nt29'), p(2026, 2604, '6dodmgsyvjnq')),
    ("내일이 아름답도록", "부분 2부 합창", cf('MUS2', 'contMusic04', '82_3'), p(2025, 2505, '5h3fy7a8jp4d')),
    ("버터플라이", "영화 '국가대표'", cf('MUS2', 'contMusic04', '76_2'), p(2025, 2505, 'edrg8m5lclya')),
    ("아이 해브 어 드림", "", cf('MUS2', 'contMusic01', '18_3'), p(2025, 2505, 'uvn75brwem5t')),
    ("I'll Be Missing You(드럼)", "", f('m_music/song/mus/mid/2_60.html'), p(2025, 2505, 'zqe6u5hmx9tw')),
    ("사자가 잠든 고요한 정글(합주)", "영화 '라이온 킹', 기타·리코더·카혼", t('qjrd'), p(2025, 2505, '4nhv33kl6ror')),
    ("When I'm Gone", "영화 '피치 퍼펙트'", f('m_music/song/mus/mid/1_52.html'), p(2025, 2505, 'kw03jti0tcj7')),
    ("Try Everything", "만화 '주토피아' 부분 3부 합창", t('75pu'), p(2025, 2505, 'vzgogr0ecdku')),
    ("싱싱싱", "3부 합창", cf('MUS2', 'contMusic04', '80_2'), p(2025, 2505, 'u5u0ydgpf31v')),
    ("누가 죄인인가", "뮤지컬 '영웅' 부분 2부 합창", t('tuc4'), p(2025, 2505, 'sp2g7ourr9o3')),
    ("Seasons of Love", "뮤지컬 '렌트' 부분 2부 합창", t('egov'), p(2025, 2505, 'csm4ai0xn2se')),
    ("굿모닝 볼티모어", "뮤지컬 '헤어스프레이'", cf('MUS2', 'contMusic04', '78_2'), p(2025, 2505, 'jexm698y892a')),
    ("민중의 노래", "뮤지컬 '레 미제라블'", cf('MUS2', 'contMusic04', '78_3'), p(2025, 2505, 'fn890lp1pflj')),
]

WORLD = [
    ("툼 발랄라이카", "", f('ele_music_6/6-1/6-1-3/6-1-3-5.html'), p(2026, 2604, 'kdupag2qt68p')),
    ("시마마 카", "", f('ele_music_6/6-1/6-1-4/6-1-4-5.html'), p(2026, 2604, '849lgn1yo1mt')),
    ("삼바렐레", "", f('ele_music_6/6-1/6-1-4/6-1-4-3.html'), p(2026, 2604, 'madgddifs8gd')),
    ("레쌈 삐리리", "", f('ele_music_6/6-1/6-1-4/6-1-4-4.html'), p(2026, 2604, 'm8l6rbct5s61')),
    ("피노키오", "", f('ele_music_5/5-1/5-1-4/5-1-4-4.html'), p(2026, 2604, '2f16lj2miqsa')),
    ("바누와", "", f('ele_music_5/5-1/5-1-2/5-1-2-3.html'), p(2026, 2604, 'vt8ysqx2hznd')),
    ("라 라스파", "", f('ele_music_5/5-1/5-1-4/5-1-4-5.html'), p(2026, 2604, '15qlhkhmbg0k')),
    ("체체쿨레", "", t('g5ij'), p(2025, 2505, 'kji1rdgjhka7')),
    ("꼬마 기차놀이", "", t('0kn7'), p(2025, 2505, 'zy8qu6pp5z6r')),
    ("아람쌈쌈", "", t('3wpz'), p(2025, 2506, 'kt97xrqtzori')),
    ("숲속의 곰 아저씨", "", t('2yy7'), p(2025, 2505, 'nk8gk37ky509')),
    ("코네쉬팔레쉔", "", t('s0zu'), p(2025, 2505, 'nlao98qdgi1v')),
    ("수건 돌려라", "", t('wtxv'), p(2025, 2505, '6jvw1rwwwuqo')),
    ("친구를 찾아라", "", c('MUS4/mus_4/2/2_4_3.html'), p(2025, 2505, '1lb707q70wcx')),
    ("사라스폰다", "", c('MUS4/mus_4/2/2_4_11.html'), p(2025, 2505, '7asj4nbj9rtv')),
    ("레쌈 삐리리", "", c('MUS5/mus_5/2/2_4_8.html'), p(2025, 2506, 'mr2nx51efja1')),
    ("모리화", "", t('qcyn'), p(2025, 2505, 'caj1fao22tc2')),
    ("꽃은 지고", "", cf('MUS1', 'contMusic04', '78_6'), p(2025, 2505, '7ofphkytfc66')),
    ("로렐라이", "", cf('MUS1', 'contMusic04', '78_10'), p(2025, 2505, '0qoi0f137uin')),
    ("월칭 마틸다", "", c('MUS5/mus_5/2/2_4_6.html'), p(2025, 2505, 'nyo2egpwnkx4')),
    ("월칭 마틸다", "", cf('MUS2', 'contMusic01', '20_4'), p(2025, 2505, 'xwp980yrxnnd')),
    ("라 쿠카라차", "", cf('MUS2', 'contMusic01', '20_6'), p(2025, 2505, '9qp9bxwyh4hg')),
    ("발라이오", "", cf('MUS2', 'contMusic01', '20_8'), p(2025, 2505, 'fqetvj5bsjb4')),
    ("나는 철도를 놓았네", "", cf('MUS2', 'contMusic01', '20_10'), p(2025, 2505, 'b0rlm955hfzp')),
    ("성자들의 행진", "", t('g6xy'), p(2025, 2505, 'j5prvtmx4rlr')),
    ("잠보", "", cf('MUS1', 'contMusic04', '78_8'), p(2025, 2505, 'w8r5emwbj4ue')),
    ("잠보 브와나", "부분 2부 합창", t('8dpc'), p(2025, 2505, 'j0jej9d5mucz')),
    ("포카레카레 아나", "부분 2부 합창", t('q9ml'), p(2025, 2505, 'bktbvhu7ug47')),
    ("샹젤리제", "", t('83t4'), p(2025, 2505, 'wb7ku09psnth')),
    ("샹젤리제", "부분 2부 합창", cf('MUS1', 'contMusic04', '70_3'), p(2025, 2505, '3jxsvwim6n95')),
    ("산타 루치아", "부분 2부 합창", t('3i4b'), p(2025, 2505, 'dh1a73cljif7')),
    ("에레스 투", "부분 2부 합창", t('niac'), p(2025, 2505, 'bqu91w1qw2ll')),
]

GROUPS = [
    ('gugak', '전래 동요', GUGAK_FOLK),
    ('gugak', '판소리 및 시조', GUGAK_PANSORI),
    ('newgugak', '', NEWGUGAK),
    ('pop', '', POP),
    ('world', '', WORLD),
]
