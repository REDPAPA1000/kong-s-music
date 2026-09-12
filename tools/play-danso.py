# -*- coding: utf-8 -*-
"""단소·소금 TOP 40 — 40곡. (제목, 유튜브 ID, 활동지 PDF id)"""

YT = 'https://www.youtube.com/embed/%s'
PDF = 'https://s3.douclass.com/pub/2025/TC_ACTIVE/2505/%s.pdf'


def y(vid):
    return YT % vid


def p(fid):
    return PDF % fid


# 단소 연습곡
DANSO_PRACTICE = [
    ("비행기", y('VT5wu1uLE7M'), p('d3o21t5gr3h4')),
    ("학교 종", y('P3fL3QWV6Cc'), p('9cjm663ld0yu')),
    ("봄나들이", y('e6qm7sw51KA'), p('9hrvl08fbodk')),
    ("곰 세마리", y('mQ7HUIbZ3Lk'), p('ndz2yx94widi')),
    ("토끼야", y('T5WPRkbhbZs'), p('eqc0g76a6ad3')),
    ("도깨비 나라", y('2LYg7yAAgYw'), p('ugn7boiql0wb')),
    ("산할아버지", y('Y7j2y-Rw45s'), p('8kvoylm6m33v')),
    ("어메이징 그레이스", y('kf18SxR_W2U'), p('6kih9fgd47x0')),
    ("첨밀밀", y('mhQdi6u0Xa0'), p('t06m7x46viro')),
]

# 단소 연주곡
DANSO_PLAY = [
    ("모두 다 꽃이야", y('826SFFRwU10'), p('2ur8gn0epaet')),
    ("아침 해", y('ehsNNTR3Gkk'), p('6wfhzc2ohswl')),
    ("홀로 아리랑", y('XMYqbyZo6_E'), p('jz20wokibtor')),
    ("반달", y('dQmnKxbW46s'), p('3vm19hjleqic')),
    ("산도깨비", y('gYmJ9nqIYtE'), p('ymrhqscqzmqi')),
    ("바나나 차차", y('VSVYvDt_lpg'), p('0qhz303tm1zq')),
    ("사랑을 했다", y('MAMbvzHGQ-s'), p('6z3faxi3js8t')),
    ("석별의 정", y('kHQBbkGaH-8'), p('8vigujjzyzjw')),
    ("비익련리", y('oT3nZKCSypk'), p('5426nybr9mjo')),
    ("상사화", y('F09mrt0juto'), p('rcle3rwtw4ie')),
    ("인연", y('B0pAJ3iBxxw'), p('03t222ilycwl')),
]

# 소금 연습곡
SOGEUM_PRACTICE = [
    ("새야 새야", y('nTiMj0PaH-g'), p('1golurp5n2mb')),
    ("작은 별", y('_OVPsXiGnSc'), p('qy0nkbhglqie')),
    ("환희의 송가", y('GP9nd5biH_Y'), p('ftwzc73khjgy')),
    ("나비야", y('QYHoKsl211I'), p('iyv6qf9n7mmg')),
    ("자전거", y('D49DmbZEhE4'), p('yqz8qaez6qe6')),
    ("독도는 우리 땅", y('a1RUBW2dpcU'), p('ycpuhn4eattz')),
    ("할아버지의 시계", y('NQuJoHtd36s'), p('7edmiwnknm73')),
    ("오나라", y('jPwcOaP4DN4'), p('0e67piqjp6mz')),
    ("창밖을 보라", y('eH5UGg4-X78'), p('wv56bsdi61fy')),
]

# 소금 연주곡
SOGEUM_PLAY = [
    ("인연", y('pKO3hkUVHXk'), p('4ym606virpe8')),
    ("애국가", y('L0geSoTnoK8'), p('bcm0tyuxyiuk')),
    ("모두 다 꽃이야", y('TYfWrUI8Jb8'), p('zh56pbt1xt46')),
    ("섬집 아기", y('9WSopvVRJfQ'), p('zudm82h5d76o')),
    ("고향의 봄", y('fgDcZQeXGdo'), p('ktssj1ocam7t')),
    ("바람이 불어오는 곳", y('zZQGBElBvA8'), p('kq3p7b7scj7g')),
    ("징글 벨", y('WXHMiwf1b_A'), p('er2k1ie2e3xa')),
    ("풍선", y('vVkRjfd5gUE'), p('rtluzg7jm4cr')),
    ("꽃의 동화", y('eAVii1Q92N4'), p('aeixt4ppypgz')),
    ("사계 중 봄", y('bOCquz-f6dY'), p('ly1ibmvw39x1')),
    ("언제나 몇 번이라도", y('74FaM_MdZaM'), p('s1lwwz2ychqz')),
]

SCOPES = [
    ("단소 연습곡", DANSO_PRACTICE),
    ("단소 연주곡", DANSO_PLAY),
    ("소금 연습곡", SOGEUM_PRACTICE),
    ("소금 연주곡", SOGEUM_PLAY),
]
