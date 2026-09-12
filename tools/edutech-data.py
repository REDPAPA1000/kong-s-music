# -*- coding: utf-8 -*-
"""뮤직 에듀테크 — 69개. 사이트 37 + 실습하기 32"""

PPT = 'https://s3.douclass.com/pub/2026/TC_PPT/2609/%s.pptx'
HWP = 'https://s3.douclass.com/pub/2026/ST_ACTIVE/2609/%s.hwp'
YT = 'https://www.youtube.com/embed/%s'


def ppt(fid):
    return PPT % fid


def hwp(fid):
    return HWP % fid


def y(vid):
    return YT % vid


# 에듀테크 사이트 — (제목, 분류, 설명, URL, 출처)
SITES = [
    ("쉐어드 피아노", "탐색/연주", "링크 하나로 여러 사용자가 실시간 합주를 즐기는 공유 피아노", "https://musiclab.chromeexperiments.com/Shared-Piano/", ""),
    ("송메이커", "창작 기초", "색깔 블록을 채워 멜로디와 박자를 직관적으로 만드는 음악 스케치북", "https://musiclab.chromeexperiments.com/Song-Maker/", ""),
    ("리듬", "탐색/연주", "원숭이 캐릭터와 폴리 리듬을 눈과 귀로 익히는 리듬 도구", "https://musiclab.chromeexperiments.com/Rhythm/", ""),
    ("스펙트로그램", "교과 융합", "[음악+과학] 소리의 주파수와 음색 차이를 2D 그래픽으로 관찰하는 시각화 도구", "https://musiclab.chromeexperiments.com/spectrogram/", ""),
    ("사운드 웨이브즈", "교과 융합", "[음악+과학] 건반을 누를 때 공기 입자의 진동을 살펴보는 파동 실험실", "https://musiclab.chromeexperiments.com/Sound-Waves/", ""),
    ("아르페지오", "탐색/연주", "코드 휠을 돌려 펼침화음의 울림과 패턴을 탐색해요.", "https://musiclab.chromeexperiments.com/Arpeggios/", ""),
    ("칸딘스키", "교과 융합", "[음악+미술] 나만의 추상화를 그리면 선과 도형이 움직여 노래해요.", "https://musiclab.chromeexperiments.com/Kandinsky/", ""),
    ("보이스 스피너", "탐색/연주", "녹음한 목소리의 재생 속도와 음높이를 변형하는 음성 놀이터", "https://musiclab.chromeexperiments.com/Voice-Spinner/", ""),
    ("하모닉스", "탐색/연주", "현의 분할과 배음 원리를 눈과 귀로 이해하는 음향 실험실", "https://musiclab.chromeexperiments.com/Harmonics/", ""),
    ("피아노롤", "탐색/연주", "흘러가는 롤 테이프를 보며 음의 길이와 높낮이를 익히는 가상 피아노", "https://musiclab.chromeexperiments.com/Piano-Roll/", ""),
    ("오실레이터", "교과 융합", "[음악+과학] 주파수 캐릭터의 키를 조절해 소리의 기본 파형을 체험하는 도구", "https://musiclab.chromeexperiments.com/Oscillators/", ""),
    ("스트링스", "탐색/연주", "현의 분할과 배음 원리를 눈과 귀로 쉽게 이해하는 음향 실험실", "https://musiclab.chromeexperiments.com/Strings/", ""),
    ("멜로디 메이커", "창작 기초", "현의 길이에 따른 음높이 변화를 직관적으로 탐구하는 가상 현악기", "https://musiclab.chromeexperiments.com/Melody-Maker/", ""),
    ("코드", "탐색/연주", "격자 위에 블록을 배치해 나만의 짧은 멜로디를 만드는 창작 도구", "https://musiclab.chromeexperiments.com/Chords/", ""),
    ("블롭 오페라", "탐색/연주", "물방울 캐릭터를 드래그해 아름다운 4성부 화음을 만들어요.", "https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw?cp=e30", "구글 아트앤컬처"),
    ("비올라 더 버드", "탐색/연주", "새 캐릭터를 움직여 명곡의 비올라 파트를 직접 연주해 보는 음악 게임", "https://artsandculture.google.com/experiment/viola-the-bird/nAEJVwNkp-FnrQ", "구글 아트앤컬처"),
    ("페인트 위드 뮤직", "교과 융합", "[음악+미술] 붓질의 색과 질감에 따라 자연 풍경 음악이 채색되는 예술 융합 툴", "https://artsandculture.google.com/experiment/paint-with-music/YAGuJyDB-XbbWg", "구글 아트앤컬처"),
    ("어시스티드 멜로디", "창작 기초", "내가 흥얼거린 멜로디에 모차르트·바흐 스타일 반주를 덧붙여 주는 AI 툴", "https://artsandculture.google.com/experiment/assisted-melody/cAGcgh18Zi7DqQ", "구글 아트앤컬처"),
    ("내셔널 갤러리 믹스테이프", "교과 융합", "[음악+미술] 명화의 분위기에 맞춰 AI가 맞춤형 음악을 추천하는 감상 플랫폼", "https://artsandculture.google.com/experiment/national-gallery-mixtape/iwHPaSXS-zrryg?hl=en", "구글 아트앤컬처"),
    ("뮤지컬 캔버스", "교과 융합", "[음악+미술] 그림을 그리는 손길에 반응해 배경 음악 선율이 변하는 인터랙티브 캔버스", "https://artsandculture.google.com/experiment/musical-canvas/6AF2kMdrQhI4tQ?hl=en", "구글 아트앤컬처"),
    ("블롭 비츠", "탐색/연주", "떨어지는 음표 블록을 터치하며 클래식 곡을 연주하는 감각적인 음악 게임", "https://artsandculture.google.com/experiment/blob-beats/ZgF_e3-CO-iRPw", "구글 아트앤컬처"),
    ("플레이 어 칸딘스키", "교과 융합", "[음악+미술] 명화 속 색채와 도형을 클릭해 공감각적인 소리를 감상하는 사이트", "https://artsandculture.google.com/experiment/play-a-kandinsky/sgF5ivv105ukhA", "구글 아트앤컬처"),
    ("7월 4일 불꽃놀이", "탐색/연주", "터뜨린 불꽃에 맞춰 화려한 음악 하모니가 울려 퍼지는 인터랙티브 쇼", "https://artsandculture.google.com/experiment/fourth-of-july-fireworks/3wFbmusK9c852w", "구글 아트앤컬처"),
    ("악기 놀이터", "탐색/연주", "터치와 클릭으로 국악기와 서양 악기의 음색을 자유롭게 탐색하는 체험관", "https://artsandculture.google.com/experiment/instrument-playground/8QFo2oQr2uT3pg", "구글 아트앤컬처"),
    ("원 사운드 투 프레임즈", "교과 융합", "[음악+미술] AI가 만든 음악을 듣고 어울리는 명화를 맞혀보는 감각적인 퀴즈 게임", "https://artsandculture.google.com/experiment/one-sound-two-frames/IQFz5C4K_sgFpg?hl=en", "구글 아트앤컬처"),
    ("베토벤 비트", "탐색/연주", "베토벤 명곡을 힙합, 펑크 등 현대적 비트와 매시업해 감상하는 음악 실험실", "https://artsandculture.google.com/experiment/beethoven-beats/PgH1UvTSVIvCrQ", "구글 아트앤컬처"),
    ("리와일드 더 월드", "교과 융합", "[음악+환경] 멸종 위기 생태계의 자연 소리를 믹싱하며 회복 과정을 체험하는 사운드 툴", "https://artsandculture.google.com/experiment/rewild-the-world/IQFqhSColyB_Ng", "구글 아트앤컬처"),
    ("토킹 투어", "교과 융합", "[음악+사회] 오디오 해설과 공간 앰비언스 사운드로 명소를 탐방하는 가상 오디오 투어", "https://artsandculture.google.com/experiment/talking-tours/8AGlfzgsYmBeIA?hl=ko", "구글 아트앤컬처"),
    ("AI 듀엣", "탐색/연주", "연주한 멜로디를 인식해 실시간으로 어울리는 화답을 들려주는 AI 도구", "https://experiments.withgoogle.com/ai/ai-duet/view/", ""),
    ("인피니트 드럼 머신", "탐색/연주", "일상의 수만 가지 소리를 AI가 음색별로 분류해 놓은 드럼 비트 머신", "https://experiments.withgoogle.com/ai/drum-machine/view/", ""),
    ("두들 바흐", "창작 기초", "입력한 단선율을 바흐 풍의 우아한 4성부 다성음악으로 편곡해 주는 AI 툴", "https://doodles.google/doodle/celebrating-johann-sebastian-bach/", ""),
    ("음비라", "탐색/연주", "아프리카 전통 악기 음비라의 유래를 알아보고 연주할 수 있는 가상 악기", "https://www.google.com/logos/2020/mbira/r5/mbira20.html?ddllb=1&doodle=122734981&hl=en&gl=zw", ""),
    ("워드 신스", "탐색/연주", "텍스트를 입력하면 음성 신디사이저가 전자음 멜로디로 연주해 주는 도구", "https://creatability.withgoogle.com/word-synth/", ""),
    ("키보드", "탐색/연주", "브라우저 화면에서 간편하게 건반을 누르며 연주하는 가상 키보드", "https://creatability.withgoogle.com/word-synth/", ""),
    ("톤트랜스퍼", "교과 융합", "[음악+과학] 목소리나 일상의 소리를 실제 악기의 고유 음색과 주파수로 바꿔주는 변환기", "https://sites.research.google/tonetransfer", ""),
    ("캡컷", "영상 편집", "무료 음원과 자동 자막, 풍부한 템플릿으로 음악 영상을 쉽게 제작하는 편집 프로그램", "https://www.capcut.com/ko-kr/", ""),
    ("블로", "영상 편집", "터치 몇 번으로 컷 편집과 배경음악 삽입을 마치는 모바일 전용 영상 편집 앱", "https://www.vllo.io/?lang=ko", ""),
]

# 실습하기 — 사이트 소개 영상 (제목, 유튜브, 출처)
INTRO = [
    ("크롬뮤직랩, 음악을 다양하게 즐길 수 있는 사이트", y('Yc-7N2aO9ME'), "차곡차곡TV"),
    ("눈으로 듣는 음악, 칸딘스키 연주하기", y('i75gBAAOQnw'), ""),
    ("블롭 오페라로 아름다운 노래 만들기", y('OHhF0_Z-HpU'), ""),
    ("비올라 더 버드, 비올라를 연주해 볼 수 있는 사이트", y('Kl6cXFlxfLA'), ""),
    ("페인트 위드 뮤직, 내가 그린 그림이 노래가 되는 사이트", y('Esm5mA3OTnY'), ""),
    ("타이파톤&파파고, 글이 음악이 되는 사이트", y('itL7saLqUc4'), ""),
    ("키림바, 칼림바를 스마트폰으로 연주하기", y('xDZfhoCRkgs'), ""),
    ("구글 두들바흐로 바흐처럼 멋지게 작곡하기", y('QdFoEWmvZDM'), ""),
    ("수노AI로 쉽고 빠르게 원하는 노래 만들기", y('pzG7fQsN5KQ'), ""),
    ("리와일드 더 월드, 환경보호를 실천해 볼 수 있는 사이트", y('tlVWTL_Rixs'), ""),
]

# 실습하기 — 수업 자료 (제목, PPT, 학습지 HWP)
LESSON = [
    ("칸딘스키 뮤직랩, 내가 그린 그림이 음악이 돼요", ppt('y4wfgo6jvzao'), hwp('yni3xmuht5bn')),
    ("블롭 오페라로 만드는 꾸물꾸물 합창단", ppt('dg59co9t706m'), hwp('yuocxbicwnia')),
    ("파타탭, 자판을 두드리면 음악에 팡팡", ppt('12ma5hdgoms5'), hwp('33eawz84xstc')),
    ("타이파톤, 타닥타닥 멜로디 타자기", ppt('w27jwpna81qg'), hwp('xitw2ge1ucni')),
    ("스펙트로그램, 소리의 모양을 눈으로 봐요", ppt('s5nam8v0e3zw'), hwp('77nle952vniz')),
    ("러닝 신스, 찌릿찌릿 효과음 연구소", ppt('5b49ai8e5pm4'), hwp('6z5ol430g7ru')),
    ("인피니트 드럼 머신, 우리 주변의 소리로 비트 만들기", ppt('gbgouy95d1w6'), hwp('4hcxqnzo9ik9')),
    ("인크레더박스, 비트박스 군단과 만드는 나만의 앨범", ppt('017pej1nkx5n'), hwp('969gzze7b6v2')),
    ("뮤지카, 재미있는 음악 이론 게임방", ppt('aqk1b8kpuaeh'), hwp('rytbdg2k6sbm')),
    ("러닝 뮤직으로 나만의 리듬 디자인하기", ppt('2fy719t36n00'), hwp('gauve1x3rwsu')),
    ("송메이커로 알록달록 음악 작곡하기", ppt('on4ziuqsotvs'), hwp('fz4bmkp68z62')),
    ("빕박스로 주사위 발자국 소리 8마디 만들기", ppt('816h2pbypb11'), hwp('wxtj0vstyjwb')),
    ("그루브 피자로 우리 모둠 음식송 만들기", ppt('9bbs876f82o8'), hwp('tjfm4ly9uscp')),
    ("내가 좋아하는 동요 편곡하여 플랫으로 악보 그리기", ppt('wpd8uakky6cm'), hwp('x9ptogzet8dc')),
    ("밴드랩, AI와 함께하는 내 손 안의 녹음실", ppt('grf9rm3gia3c'), hwp('ih2tnrxcxxh6')),
    ("사운드 트랩으로 우리 반 라디오 방송 만들기", ppt('2co46whodw24'), hwp('9fy9jbjxd7h4')),
]

# 실습하기 — 영상 편집 (제목, 주 링크, 학습지, 출처)
EDIT = [
    ("[캡컷]으로 뮤직비디오 만들기", ppt('rug16v2asu66'), '', "몽당분필"),
    ("[캡컷]의 편집 기능 알아보기", y('U78LGDYAhhA'), '', "차곡차곡TV"),
    ("[캡컷] 영상을 처음 편집한다면 이것을 고려해보기", y('4Hs1igopuVI'), '', "차곡차곡TV"),
    ("[캡컷]으로 실제 영상 편집 해보기", y('v9qKXlqNnsE'), '', "차곡차곡TV"),
    ("[블로] 영상 편집 시작하기", ppt('wistiptuzzyf'), hwp('sn10fuf4j5wk'), "상상그리다필름"),
    ("[블로] 편집 및 효과 추가하기", ppt('efje8osle0yq'), hwp('cm03gawfqcfl'), "상상그리다필름"),
]
