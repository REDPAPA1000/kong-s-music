# -*- coding: utf-8 -*-
"""칼림바 TOP 50 — 53곡. (제목, 유튜브 ID, 활동지 PDF id)"""

YT = 'https://www.youtube.com/embed/%s'
PDF = 'https://s3.douclass.com/pub/2026/TC_ACTIVE/2603/%s.pdf'


def y(vid):
    return YT % vid


def p(fid):
    return PDF % fid


# 8음 음계곡
EIGHT = [
    ("8음 음계 연습곡", y('2MIO1aJJ7qg'), p('3qq38jk7sx8h')),
    ("작은 별", y('6VqtzaLUVpk'), p('l35gpf2ajzs3')),
    ("둥근 빵", y('jvpjg2tE6PQ'), p('af1n49442e0k')),
    ("곰 세 마리", y('bxN7txPDY3w'), p('a0sw0r1ijofy')),
    ("학교 종", y('HQK-nePWOd0'), p('uz8sg6glo07r')),
    ("환희의 송가", y('f2m9XSy9XA0'), p('z6aoz62azvxf')),
    ("구슬비", y('pEO0iQ8p0E8'), p('4s0y780mtsg0')),
    ("노르웨이 춤곡", y('49ZE7mRPZnc'), p('vpf0vfxpa9yr')),
    ("뻐꾸기", y('8LJ1QLBw46s'), p('9pycy7wn32gt')),
    ("잠자리", y('g7F4IHsZLqw'), p('4n3nlv2cnm3q')),
    ("브람스 자장가", y('Jp2sLFeAl2U'), p('r96cwwe8oex4')),
    ("바누와", y('dLWFvO547js'), p('ud96ssi4kq8u')),
    ("캉캉", y('wfjTBgT6YjY'), p('z5eeryqo7grc')),
    ("어린이 노래", y('Pz_EmuRMgmU'), p('h35mp4ji52xg')),
    ("도레미 노래", y('R0G1dNpvU2g'), p('welktqc1u9zl')),
    ("풍선", y('d7USa8feHuw'), p('4u89uhs53ne1')),
]

# 단선율 및 화음 연주
MELODY = [
    ("17음 음계 연습곡", y('Cjw1IO7OTKo'), p('yr3iu33ujdei')),
    ("미키마우스 행진", y('HqStAXmu0NA'), p('l02evh0cz4er')),
    ("옥수수 하모니카", y('MFpvTBQ0g_E'), p('ruo5bl70ytap')),
    ("피노키오", y('KsO-GroBDkg'), p('g66iw4lg5hek')),
    ("아리랑", y('MNS66Oo5-5E'), p('i0cuqt9lum1m')),
    ("도라지타령", y('k2nM0oXVpsk'), p('4ubo6q9rnclz')),
    ("모두 다 꽃이야", y('OyihbSdiIhA'), p('kjvlt640l7q0')),
    ("바람이 불어오는 곳", y('F3lDjPC_5Qc'), p('babrpzbawgvj')),
    ("시대를 초월한 마음", y('B6Y4r3MEUUI'), p('vg1f5zmn7shx')),
    ("학교 가는 길", y('7_75zQN3HMw'), p('owhf9142upns')),
    ("언제나 몇 번이라도", y('eJODXPA5Qu0'), p('xu7w94io5bi2')),
    ("백조의 호수", y('h-EkJrxE118'), p('w4qkvzmvobra')),
    ("Summer", y('RLnz-jWwKFo'), p('k7wrslikh793')),
    ("Last Christmas", y('ZsX-TrI-dc8'), p('xl5bvdycoq11')),
    ("Kiss The Rain", y('fJhSm6ywM9g'), p('m4wdbv9mj6wg')),
    ("인생의 회전목마", y('sHEoPKHOmjw'), p('dwsl9te8y8op')),
    ("When You Wish Upon A Star", y('sP4_Iy144zs'), p('r5qgoc3ub1ra')),
    ("We Wish You A Merry Christmas", y('3PV2s-ll3uw'), p('omxqo3sahwwe')),
    ("밤양갱", y('kZXVdY44bJY'), p('xgalx1urlak6')),
    ("The First Noel", y('zxLRCTQTfiY'), p('ojg756gr9rue')),
    ("홀로 아리랑", y('5_h6QYjeNmY'), p('cz1mi7vpeqi3')),
    ("캐논 변주곡", y('kPNxebHNSqg'), p('csob44hpnabk')),
    ("할아버지의 시계", y('YpC-Joifi6Q'), p('9vafjc6ifuso')),
]

# 양손 연주
BOTH = [
    ("옥타브 음계 연습곡", y('sthtcxfb7y4'), p('ebu5hnjdgp8y')),
    ("즐거운 여행자", y('Z2N6iMpJK6s'), p('u8gm94aegjkr')),
    ("젓가락 행진곡", y('PxiTskOP4_U'), p('e5fozdxjmemn')),
    ("Amazing Grace", y('3VbzOo0-p9s'), p('9kzsj3itp4dk')),
    ("사랑의 기쁨", y('FUCUn2uwIIM'), p('gnib2vf7tpny')),
    ("You Are My Sunshine", y('j8dbBLcA5Ks'), p('1d75uni2pxog')),
    ("Moon River", y('uovYf17r950'), p('rpolv2mwk8ay')),
    ("염소 4만 원", y('oIZdqMmzOkI'), p('dsk4emh70i6o')),
    ("너를 태우고", y('bx32Lr0MMKQ'), p('pe9caxx3xtfe')),
    ("벼랑 위의 포뇨", y('BtXcQYWI2Pg'), p('b7zubt44pidj')),
    ("제주도의 푸른 밤", y('6YSeJ2tEUtU'), p('52m5o64bkt8b')),
]

# 합주곡
GROUP = [
    ("수고했어, 오늘도", y('Py3XDekyYQ8'), p('1lqjgzsxyjmo')),
    ("바다가 보이는 마을", y('Sa5FDtu-iC0'), p('r31u09itul4x')),
    ("아로하", y('60HLuLzPRig'), p('4l1k8zn6zmq3')),
]

SCOPES = [
    ("8음 음계곡", EIGHT),
    ("단선율 및 화음 연주", MELODY),
    ("양손 연주", BOTH),
    ("합주곡", GROUP),
]
