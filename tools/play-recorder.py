# -*- coding: utf-8 -*-
"""리코더 TOP 40 — 57곡. (제목, 유튜브 ID, 활동지 PDF 연·월·id)"""

YT = 'https://www.youtube.com/embed/%s'
PDF = 'https://s3.douclass.com/pub/%s/TC_ACTIVE/%s/%s.pdf'


def y(vid):
    return YT % vid


def p(year, ym, fid):
    return PDF % (year, ym, fid)


# 왼손 연습곡
LEFT = [
    ("비행기(사장조)", y('qNgRiwNjOY8'), p(2024, 2407, 'cefsgg97lcze')),
    ("뻐꾸기", y('nyp9IW2pDDo'), p(2024, 2407, '6wgdq7rnzkv3')),
    ("나비야", y('xSPB6RZBXIw'), p(2024, 2407, 'l26tinylf2sw')),
    ("환희의 송가", y('IqqfZkTKcsE'), p(2024, 2407, 'c8h3t30oo1df')),
    ("소나타", y('63IEwZlpufU'), p(2024, 2407, 'd7rx57ylwfsn')),
    ("징글 벨", y('dr0o6G7pkhI'), p(2024, 2407, 'rr7y0trq622w')),
    ("사계(봄)", y('VJql6I5BGCQ'), p(2024, 2407, 'wka3w077mcvd')),
]

# 오른손 연습곡
RIGHT = [
    ("비행기(바장조)", y('s7jm5ScA2pA'), p(2024, 2407, '4dkiol1t26w0')),
    ("자전거", y('NKAsdUPCJTg'), p(2024, 2407, 'kniz8xab99z6')),
    ("작은 별", y('KsOubRF8pXc'), p(2024, 2407, 'l0yk2pzwrc4j')),
    ("모두 다 꽃이야", y('xcMqw1_TpFc'), p(2025, 2511, 'yapq0a08sljt')),
    ("피노키오", y('VFMlSAdvfz4'), p(2024, 2407, 'bijwwels0tf2')),
    ("하얀 나라", y('bPdg6eQ5fJ4'), p(2025, 2511, 'ch4ds544e42z')),
    ("창밖을 보라", y('uUg9VEwGaEA'), p(2024, 2407, 'puros68l4gxv')),
]

# 기본음 연주곡
BASIC = [
    ("바나나 차차", y('h8VQbCQpslY'), p(2024, 2407, 'qn1l7ch1xg7o')),
    ("문 리버", y('yGHOoB6N01k'), p(2024, 2407, 'nror0q7rmksl')),
    ("풍선", y('oF2h0Z9lYM8'), p(2024, 2407, 'phz5v9kto0ef')),
    ("얼굴 찌푸리지 말아요", y('N9DnA8IxDKM'), p(2024, 2407, 'qgq0jp85586l')),
    ("가을 아침", y('GzkZ0xVyMPc'), p(2024, 2407, 'mgjjfgokmk1v')),
    ("사랑을 했다", y('NmvpJ86bHRw'), p(2024, 2407, 'odv9dmg88ouf')),
    ("스즈메의 문단속(참새)", y('VIkLR_Iof5A'), p(2024, 2407, 'atu6nnfaghxk')),
    ("흔들리는 꽃들 속에서 네 샴푸 향이 느껴진 거야", y('EBIqz7iXPAA'), p(2024, 2407, 'll144ty1jsjr')),
    ("Dynamite(오리지널)", y('mqo5HhtrqAE'), p(2024, 2407, 'ljoiqslldujf')),
    ("Dynamite(쉬운 버전)", y('C90W8JFTM0I'), p(2024, 2408, 'u9x419c5er82')),
]

# 시b 연주곡
FLAT = [
    ("We Wish You A Merry Christmas", y('lb8f3muW_nc'), p(2024, 2407, 'vqjc779l87se')),
    ("바람이 불어오는 곳", y('p4X-oMiqvX0'), p(2024, 2407, 'hg0todemylcy')),
    ("오버 더 레인보우", y('2aTE8hL_k9U'), p(2024, 2407, 'w1lajac3g1gs')),
    ("다섯 글자 예쁜 말", y('XsBG0rIqTec'), p(2024, 2407, 'qtkx4ahdas4l')),
    ("여행", y('BiT6ycuLvHc'), p(2024, 2407, 'b8j23bmf3au3')),
    ("거위의 꿈", y('FW4LcDnhqRQ'), p(2024, 2407, 'cavmx3pmosn4')),
    ("제주도의 푸른 밤", y('--qZ-UJ18zw'), p(2024, 2407, 'qfvzptrauvai')),
]

# 파# 연주곡
SHARP = [
    ("미뉴에트", y('laheS6yTha8'), p(2024, 2407, 'p3dmo49nnimo')),
    ("너의 의미", y('omawWDi9Xw4'), p(2024, 2407, 'i5wwkxf9qpvr')),
    ("나는 나비", y('rplp19qh1a0'), p(2024, 2407, '61gtlewlad36')),
    ("벚꽃 엔딩", y('wqMTNQdMPTI'), p(2024, 2407, '2l9md12eydye')),
    ("Summer", y('0aIu4hpMIrg'), p(2024, 2407, 'vo8ikyq7yaxs')),
    ("회전목마", y('zzb2QC3BPR0'), p(2024, 2407, 'yk0bdjni5kk0')),
    ("사건의 지평선", y('pbErTOxqmJg'), p(2024, 2407, 'wu2fcslonlvv')),
    ("송어", y('P9Xr94j4Ero'), p(2024, 2407, 'kr5lu5w7lvet')),
]

# 고급 연주곡
ADVANCED = [
    ("인생의 회전목마", y('6Aplwh2EPSU'), p(2024, 2407, '8wvlqahk85in')),
    ("수고했어, 오늘도", y('EV9V6USRMKQ'), p(2024, 2407, 'nrcebuzr487k')),
    ("신호등(오리지널)", y('EV5LonIdiOg'), p(2024, 2407, 'wcyo21ujh07o')),
    ("신호등(쉬운 버전)", y('2vZR7dk8chU'), p(2024, 2407, 'nmrr2s6aqjhc')),
    ("드라마", y('bGQ71jD06Gw'), p(2024, 2408, 'h2ifb0g5vklj')),
    ("네모의 꿈", y('B9C6tGo3Tyo'), p(2024, 2407, 'j8ivxfht8uv1')),
    ("문어의 꿈", y('eoJTUtHX0h0'), p(2024, 2407, '6vhke2fa9ala')),
    ("후라이의 꿈", y('oktoICHeLow'), p(2025, 2511, 'j0izh50ynzfi')),
    ("Happy Things(오리지널)", y('wkzS1KTdMD4'), p(2024, 2407, 'nqryh2pmzbha')),
    ("Happy Things(쉬운 버전)", y('dc_qDVfDxwk'), p(2024, 2407, 'yoj01alyghsn')),
    ("바람의 멜로디", y('2VqyE6e8yiE'), p(2024, 2407, '2bc0lf4dg1bg')),
]

# 중주·합주 연주곡
ENSEMBLE = [
    ("캐논 변주곡(2중주)", y('LDf65ig284Y'), p(2024, 2407, 'mqpivtzgf56c')),
    ("언제나 몇 번이라도(2중주)", y('Q7LT22lPG3Q'), p(2024, 2407, '9xlna88y6b4j')),
    ("'넌 할 수 있어'라고 말해 주세요(2중주)", y('-LLelqJ2kUE'), p(2024, 2407, 'ywf8b6flw4kv')),
    ("할아버지의 낡은 시계(2중주)", y('j_cXITW-ogM'), p(2024, 2407, '0g7y98z1kpxf')),
    ("오락실(합주)", y('hrWGv-Q-LdI'), p(2024, 2407, 'wqucn4rplbcd')),
    ("징글 벨(합주)", y('tG2cUi217qs'), p(2024, 2407, 'fo49suo4liet')),
    ("학교 가는 길(합주)", y('mvIDKn9CupA'), p(2024, 2407, '9l67va5jlbr3')),
]

SCOPES = [
    ("왼손 연습곡", LEFT),
    ("오른손 연습곡", RIGHT),
    ("기본음 연주곡", BASIC),
    ("시b 연주곡", FLAT),
    ("파# 연주곡", SHARP),
    ("고급 연주곡", ADVANCED),
    ("중주·합주 연주곡", ENSEMBLE),
]
