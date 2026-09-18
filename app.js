const grades = {
  "1-2": { label: "초등 1·2학년", number: "1·2", kicker: "COMBINED ELEMENTARY MUSIC", description: "함께 노래하고 몸으로 소리를 느끼며 음악과 친해지는 합반 수업입니다." },
  "3": { label: "초등 3학년", number: "3", kicker: "ELEMENTARY MUSIC", description: "박과 리듬을 익히고 친구들과 소리를 맞춰 가는 첫 음악 수업입니다." },
  "4": { label: "초등 4학년", number: "4", kicker: "ELEMENTARY MUSIC", description: "목소리와 악기로 느낌을 표현하고, 음악 속 이야기를 발견합니다." },
  "5": { label: "초등 5학년", number: "5", kicker: "ELEMENTARY MUSIC", description: "다양한 음악의 특징을 이해하고 자신만의 표현으로 확장합니다." },
  "6": { label: "초등 6학년", number: "6", kicker: "ELEMENTARY MUSIC", description: "함께 만드는 음악의 즐거움과 여러 문화의 음악을 경험합니다." },
  "m1": { label: "중학교 1학년", number: "中1", kicker: "MIDDLE SCHOOL MUSIC", description: "음악의 요소를 이해하고 노래와 연주에 주도적으로 참여합니다." },
  "m2": { label: "중학교 2학년", number: "中2", kicker: "MIDDLE SCHOOL MUSIC", description: "시대와 문화 속 음악을 탐색하고 다양한 방식으로 표현합니다." },
  "m3": { label: "중학교 3학년", number: "中3", kicker: "MIDDLE SCHOOL MUSIC", description: "음악을 해석하고 협업하여 완성도 있는 결과물을 만듭니다." },
  "h1": { label: "고등학교 1학년", number: "高1", kicker: "HIGH SCHOOL MUSIC", description: "음악을 삶과 연결해 비평하고 창의적으로 표현하는 수업입니다." }
};

const resources = [
  {
    id: "speechless",
    grade: "h1",
    domain: "가창",
    semester: "1학기",
    title: "Speechless",
    subtitle: "영화 ‘알라딘’ OST로 자기 목소리를 표현해 보는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/speeches-score.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106507_31p_22_ST&teacher=false",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["악보 보기", "노래 듣기·따라 부르기", "계이름", "반주 듣기", "발성 연습"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/5942/contents/index.html?skin=basic03&page=8",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4774/contents/index.html?skin=basic01&page=31",
    steps: [
      "곡의 분위기와 주인공의 마음을 이야기한다.",
      "비바샘 스마트 PPT로 노래를 듣고 주요 선율을 익힌다.",
      "호흡과 영어 가사의 리듬을 살려 함께 노래한다.",
      "내 목소리를 내고 싶은 순간을 한 문장으로 나눈다."
    ],
    teacherNote: "스마트 PPT는 출판사 제공 화면으로 바로 실행됩니다. 수업 전 교실 네트워크와 재생 소리를 먼저 점검하면 흐름이 끊기지 않습니다."
  },
  {
    id: "holo-arirang-ocarina",
    grade: "h1",
    domain: "기악",
    semester: "1학기",
    title: "홀로 아리랑",
    subtitle: "오카리나의 운지와 호흡을 익혀 ‘홀로 아리랑’을 함께 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/holo-arirang-ocarina.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/3896/contents/index.html?skin=basic03&page=15",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["오카리나 운지", "반주 듣기", "리듬 익히기", "함께 연주하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/3896/contents/index.html?skin=basic03&page=15",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4774/contents/index.html?skin=basic01&page=63",
    steps: [
      "‘홀로 아리랑’의 가락과 곡의 분위기를 들어 본다.",
      "오카리나 운지와 바른 호흡을 차례로 점검한다.",
      "짧은 가락부터 천천히 연결하여 연주한다.",
      "반주에 맞춰 친구들과 균형 있게 합주한다."
    ],
    teacherNote: "긴 음은 숨을 충분히 준비해 안정적으로 소리 내도록 돕고, 합주 전에는 각 파트의 음량과 호흡 시작점을 함께 맞춥니다."
  },
  {
    id: "boriuls-summer",
    grade: "m3",
    domain: "가창",
    semester: "1학기",
    title: "보리울의 여름",
    subtitle: "영화 속 음악을 통해 가사와 선율의 분위기를 느끼며 노래하는 가창 수업",
    kind: "스마트 자료",
    duration: "40분",
    level: "보통",
    pdf: "assets/boriuls-summer.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/4471/contents/index.html?skin=basic03&page=5",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "가락 따라 부르기", "함께 노래하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/4471/contents/index.html?skin=basic03&page=5",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4776/contents/index.html?skin=basic01&page=37",
    steps: [
      "영화 장면과 음악의 분위기를 떠올려 본다.",
      "스마트 PPT로 노래를 듣고 가사의 뜻을 나눈다.",
      "호흡과 프레이즈를 살려 주요 가락을 익힌다.",
      "곡의 정서를 생각하며 함께 노래한다."
    ],
    teacherNote: "영화의 장면과 가사의 정서를 먼저 충분히 나눈 뒤, 문장 끝의 호흡을 맞추며 자연스러운 프레이즈로 노래하도록 안내합니다."
  },
  {
    id: "grandfathers-clock-kalimba",
    grade: "m3",
    domain: "기악",
    semester: "1학기",
    title: "할아버지의 낡은 시계",
    subtitle: "칼림바의 숫자 악보를 읽고 반주에 맞춰 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/grandfathers-clock-kalimba.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/4366/contents/index.html?skin=basic03&page=15",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["칼림바 연주", "숫자 악보", "반주 듣기", "함께 연주하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/4366/contents/index.html?skin=basic03&page=16",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4775/contents/index.html?skin=basic01&page=51",
    steps: [
      "칼림바의 음 배열과 숫자 악보 읽는 법을 확인한다.",
      "오른손과 왼손이 이어지는 부분을 나누어 천천히 연습한다.",
      "짧은 마디부터 정확한 박으로 연결해 연주한다.",
      "반주에 맞춰 친구들과 박과 음량을 맞춘다."
    ],
    teacherNote: "한 손으로 이어 연주하는 부분은 낮은 음부터 차례로 연습하게 하고, 빠르게 연결하기 전에는 정확한 박을 먼저 확인하도록 안내합니다."
  },
  {
    id: "womans-heart",
    grade: "m2",
    domain: "가창",
    semester: "1학기",
    title: "여자의 마음",
    subtitle: "오페라 「리골레토」의 아리아를 극의 분위기에 맞춰 표현하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/womans-heart.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106438_32p_20_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "극의 분위기", "함께 노래하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/4272/contents/index.html?skin=basic03&page=1",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4775/contents/index.html?skin=basic01&page=33",
    steps: [
      "오페라의 장면과 인물의 마음을 살펴본다.",
      "스마트 PPT로 선율과 가사의 흐름을 익힌다.",
      "레가토와 셈여림을 살려 주요 가락을 연습한다.",
      "극의 분위기에 어울리는 표현으로 함께 노래한다."
    ],
    teacherNote: "노래의 가사와 오페라 장면을 함께 연결하고, 레가토로 긴 선율을 자연스럽게 이어 표현하도록 돕습니다."
  },
  {
    id: "you-to-me-ukulele",
    grade: "m2",
    domain: "기악",
    semester: "1학기",
    title: "너에게 난 나에게 넌",
    subtitle: "우쿨렐라의 기본 코드를 익혀 반주와 함께 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/you-to-me-ukulele.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/4331/contents/index.html?skin=basic03&page=15",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["우쿨렐라 코드", "코드 표", "반주 듣기", "함께 연주하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/4331/contents/index.html?skin=basic03&page=15",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4776/contents/index.html?skin=basic01&page=55",
    steps: [
      "우쿨렐라의 기본 자세와 코드표를 확인한다.",
      "C, G7, Am 등 주요 코드를 차례로 잡아 본다.",
      "코드 전환이 필요한 마디를 천천히 반복 연습한다.",
      "반주에 맞춰 리듬과 코드를 함께 연주한다."
    ],
    teacherNote: "코드를 빠르게 바꾸기보다 정확한 손 모양을 먼저 익히도록 하고, 반주에 맞춰 일정한 박으로 스트로크하도록 안내합니다."
  },
  {
    id: "beautiful-world",
    grade: "m1",
    domain: "가창",
    semester: "1학기",
    title: "아름다운 세상",
    subtitle: "노랫말의 의미를 생각하며 노래와 수화 언어로 표현하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/beautiful-world.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/3930/contents/index.html?skin=basic03&page=5",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "수화 언어", "가사 익히기", "함께 노래하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/3930/contents/index.html?skin=basic03&page=1",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4775/contents/index.html?skin=basic01&page=17",
    steps: [
      "노랫말이 전하는 아름다운 세상의 모습을 이야기한다.",
      "스마트 PPT로 선율과 가사를 함께 익힌다.",
      "주요 가사에 맞는 수화 언어 동작을 연습한다.",
      "노래와 수화 언어를 함께 표현하며 마무리한다."
    ],
    teacherNote: "수화 언어의 동작 범위와 손 모양을 먼저 천천히 익히고, 가사의 의미가 자연스럽게 전달되도록 노래와 동작을 함께 맞춥니다."
  },
  {
    id: "autumn-morning-recorder",
    grade: "m1",
    domain: "기악",
    semester: "1학기",
    title: "가을 아침",
    subtitle: "리코더의 운지와 호흡을 익혀 ‘가을 아침’을 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/autumn-morning-recorder.pdf",
    mediaUrl: "https://ibook.vivasam.com/CBS_iBook/6991/contents/index.html?skin=basic03&page=13",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["리코더 운지", "반주 듣기", "리듬 익히기", "함께 연주하기"],
    guideUrl: "https://ibook.vivasam.com/CBS_iBook/6991/contents/index.html?skin=basic03&page=15",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/4775/contents/index.html?skin=basic01&page=55",
    steps: [
      "곡의 분위기와 리코더로 표현할 소리를 들어 본다.",
      "리코더 운지와 호흡을 점검하며 주요 가락을 익힌다.",
      "어려운 리듬을 짧은 마디부터 연결해 연주한다.",
      "반주에 맞춰 친구들과 박과 음량을 맞춘다."
    ],
    teacherNote: "높은 음을 낼 때에는 숨을 세게 밀기보다 일정한 호흡을 유지하도록 돕고, 합주 전에는 시작과 끝의 박을 함께 확인합니다."
  },
  {
    id: "mountain-ridge-singing",
    grade: "6",
    domain: "가창",
    semester: "1학기",
    title: "산마루에서",
    subtitle: "가락의 특징을 살려 활기차게 노래하며 자신감을 표현하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/mountain-ridge.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106537_12p_4_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "가락 연습", "함께 노래하기"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fmountain-ridge-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/11126/contents/index.html?skin=basic01&page=13",
    steps: [
      "산마루의 풍경을 떠올리며 노랫말이 전하는 느낌을 나눈다.",
      "스마트 PPT로 선율과 가사를 듣고 주요 가락을 익힌다.",
      "‘야호’처럼 힘차게 표현할 부분의 호흡과 발음을 연습한다.",
      "곡의 분위기를 살려 친구들과 활기차게 노래한다."
    ],
    teacherNote: "초등 수업안은 PPTX 형식으로 제공됩니다. 스마트 수업안 버튼을 누르면 브라우저에서 바로 볼 수 있으며, 필요할 때는 내려받아 PowerPoint로 열 수 있습니다."
  },
  {
    id: "rainbow-beyond-kalimba",
    grade: "6",
    domain: "기악",
    semester: "1학기",
    title: "무지개 너머",
    subtitle: "칼림바의 맑은 울림으로 선율을 익히고 친구들과 함께 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/rainbow-beyond-kalimba.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106537_20p_8_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["칼림바 연주", "가락 익히기", "반주 듣기", "함께 연주하기"],
    guideUrl: "assets/rainbow-beyond-kalimba-lesson-plan.pdf",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/11126/contents/index.html?skin=basic01&page=21",
    steps: [
      "칼림바의 음 배열과 기본 연주 자세를 확인한다.",
      "스마트 PPT로 곡의 선율을 듣고 주요 가락을 익힌다.",
      "어려운 부분을 짧게 나누어 천천히 반복 연습한다.",
      "친구들과 박자와 소리의 어울림을 맞추며 함께 연주한다."
    ],
    teacherNote: "첨부된 수업안 PPTX의 수업 내용과 활동을 유지한 PDF 수업안으로 연결했습니다. 스마트 수업안 버튼에서 바로 열 수 있습니다."
  },
  {
    id: "hands-draw-wind-singing",
    grade: "5",
    domain: "가창",
    semester: "1학기",
    title: "내 손은 바람을 그려요",
    subtitle: "바람의 움직임을 떠올리며 가락을 다양한 방법으로 표현하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/hands-draw-wind.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106536_72p_44_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "가락 표현", "함께 노래하기"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fhands-draw-wind-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/11125/contents/index.html?skin=basic01&page=73",
    steps: [
      "바람이 만들어 내는 소리와 움직임을 떠올려 본다.",
      "스마트 PPT로 두 절의 가사와 주요 가락을 익힌다.",
      "바람의 느낌이 드러나도록 호흡과 셈여림을 달리해 본다.",
      "친구들과 가락의 흐름을 살려 노래하며 마무리한다."
    ],
    teacherNote: "초등 수업안은 PPTX 형식으로 제공됩니다. 스마트 수업안 버튼을 누르면 브라우저에서 바로 볼 수 있으며, 필요할 때는 내려받아 PowerPoint로 열 수 있습니다."
  },
  {
    id: "a-whole-new-world-ocarina",
    grade: "5",
    domain: "기악",
    semester: "1학기",
    title: "A Whole New World",
    subtitle: "오카리나의 운지와 호흡을 익혀 ‘A Whole New World’를 함께 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/a-whole-new-world-ocarina.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106536_20p_11_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["오카리나 운지", "반주 듣기", "리듬 익히기", "함께 연주하기"],
    guideUrl: "assets/a-whole-new-world-ocarina-lesson-plan.pdf",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/11125/contents/index.html?skin=basic01&page=21",
    steps: [
      "영화 속 장면과 곡의 분위기를 떠올리며 선율을 들어 본다.",
      "오카리나 운지와 안정적인 호흡을 차례로 점검한다.",
      "어려운 리듬과 가락을 짧은 마디부터 반복해 익힌다.",
      "반주에 맞춰 친구들과 소리의 어울림을 느끼며 연주한다."
    ],
    teacherNote: "원본 PPTX 수업안은 용량이 커서, 수업 내용과 활동을 유지한 PDF 수업안으로 연결했습니다. 스마트 수업안 버튼에서 바로 열 수 있습니다."
  },
  {
    id: "favorite-words-singing",
    grade: "4",
    domain: "가창",
    semester: "1학기",
    title: "내가 제일 좋아하는 말",
    subtitle: "소중한 사람에게 전하고 싶은 마음을 노래로 표현하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/favorite-words.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106414_30p_7_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "셈여림 표현", "함께 노래하기"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Ffavorite-words-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1691/contents/index.html?page=31",
    steps: [
      "내가 가장 좋아하는 말과 그 말을 전하고 싶은 사람을 떠올린다.",
      "스마트 PPT로 노래를 듣고 노랫말과 주요 가락을 익힌다.",
      "셈여림의 변화를 살려 마음이 잘 전해지도록 연습한다.",
      "친구들과 따뜻한 마음을 담아 함께 노래한다."
    ],
    teacherNote: "초등 수업안은 PPTX 형식으로 제공됩니다. 스마트 수업안 버튼을 누르면 브라우저에서 바로 볼 수 있으며, 필요할 때는 내려받아 PowerPoint로 열 수 있습니다."
  },
  {
    id: "corn-harmonica-recorder",
    grade: "4",
    domain: "기악",
    semester: "1학기",
    title: "옥수수 하모니카",
    subtitle: "리코더로 차례가기와 뛰어가기 가락을 익혀 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/corn-harmonica-recorder.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_40p_10_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["리코더 운지", "가락선 보기", "차례가기", "함께 연주하기"],
    guideUrl: "assets/corn-harmonica-recorder-lesson-plan.pdf",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1690/contents/index.html?page=41",
    steps: [
      "‘옥수수 하모니카’의 가락과 리코더 소리를 들어 본다.",
      "차례가기와 뛰어가기 가락을 손으로 따라 그려 본다.",
      "리코더 운지와 계이름을 확인하며 짧은 가락부터 연주한다.",
      "친구들과 박을 맞춰 끝까지 이어 연주한다."
    ],
    teacherNote: "원본 PPTX 수업안은 용량이 커서, 수업 내용과 활동을 유지한 PDF 수업안으로 연결했습니다. 스마트 수업안 버튼에서 바로 열 수 있습니다."
  },
  {
    id: "cotton-candy-singing",
    grade: "3",
    domain: "가창",
    semester: "1학기",
    title: "솜사탕",
    subtitle: "노랫말의 느낌을 살려 재미있게 노래 부르는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/cotton-candy.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_56p_14_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "가사 익히기", "셈여림 표현", "함께 노래하기"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fcotton-candy-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1690/contents/index.html?page=57",
    steps: [
      "솜사탕의 모양과 맛을 떠올리며 곡의 느낌을 나눈다.",
      "스마트 PPT로 노랫말과 주요 가락을 익힌다.",
      "셈여림을 달리해 솜사탕의 재미있는 모습을 표현한다.",
      "친구들과 노래를 부르며 어울리는 말을 넣어 본다."
    ],
    teacherNote: "초등 수업안은 PPTX 형식으로 제공됩니다. 스마트 수업안 버튼을 누르면 브라우저에서 바로 볼 수 있으며, 필요할 때는 내려받아 PowerPoint로 열 수 있습니다."
  },
  {
    id: "snowflake-song-singing",
    grade: "3",
    domain: "가창",
    semester: "1학기",
    title: "눈꽃송이",
    subtitle: "눈 내리는 장면을 떠올리며 셈여림을 살려 노래하는 가창 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/snowflake-song.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_76p_20_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["노래 듣기", "3/4박자", "셈여림 표현", "함께 노래하기"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fsnowflake-song-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1690/contents/index.html?page=77",
    steps: [
      "눈 내리는 풍경을 떠올리며 노래의 분위기를 이야기한다.",
      "스마트 PPT로 가사와 3/4박자의 흐름을 익힌다.",
      "셈여림을 살려 눈꽃송이가 내려오는 모습을 표현한다.",
      "친구들과 호흡을 맞춰 부드럽게 노래한다."
    ],
    teacherNote: "초등 수업안은 PPTX 형식으로 제공됩니다. 스마트 수업안 버튼을 누르면 브라우저에서 바로 볼 수 있으며, 필요할 때는 내려받아 PowerPoint로 열 수 있습니다."
  },
  {
    id: "airplane-recorder",
    grade: "3",
    domain: "기악",
    semester: "1학기",
    title: "비행기",
    subtitle: "리코더의 시·라·솔 운지를 익혀 ‘비행기’를 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/airplane-recorder.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_20p_60_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["리코더 운지", "시·라·솔", "반주 듣기", "함께 연주하기"],
    guideUrl: "assets/airplane-recorder-lesson-plan.pdf",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1690/contents/index.html?page=21",
    steps: [
      "비행기의 움직임을 떠올리며 곡의 빠르기와 분위기를 듣는다.",
      "리코더의 시·라·솔 운지를 바른 자세로 익힌다.",
      "짧은 가락을 계이름과 함께 반복해 연주한다.",
      "반주에 맞춰 친구들과 박을 맞추어 연주한다."
    ],
    teacherNote: "원본 PPTX 수업안은 용량이 커서, 수업 내용과 활동을 유지한 PDF 수업안으로 연결했습니다. 스마트 수업안 버튼에서 바로 열 수 있습니다."
  },
  {
    id: "little-star-recorder",
    grade: "3",
    domain: "기악",
    semester: "1학기",
    title: "작은별",
    subtitle: "리코더의 낮은음과 어울리는 소리를 익혀 ‘작은별’을 연주하는 기악 수업",
    kind: "악보 · 스마트 PPT",
    duration: "40분",
    level: "보통",
    pdf: "assets/little-star-recorder.pdf",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_37p_62_ST",
    mediaLabel: "비바샘 스마트 PPT",
    mediaFeatures: ["리코더 운지", "낮은음", "반주 듣기", "함께 연주하기"],
    guideUrl: "assets/little-star-recorder-lesson-plan.pdf",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/1690/contents/index.html?page=37",
    steps: [
      "별이 빛나는 모습을 떠올리며 곡의 가락을 들어 본다.",
      "낮은음을 포함한 리코더 운지를 차례로 확인한다.",
      "짧은 가락부터 정확한 운지와 호흡으로 연주한다.",
      "다른 가락과의 어울림을 느끼며 함께 연주한다."
    ],
    teacherNote: "원본 PPTX 수업안은 용량이 커서, 수업 내용과 활동을 유지한 PDF 수업안으로 연결했습니다. 스마트 수업안 버튼에서 바로 열 수 있습니다."
  },
  {
    id: "rhythm-instrument-song",
    grade: "1-2",
    domain: "기악",
    semester: "1학기",
    title: "리듬 악기 노래",
    subtitle: "여러 리듬 악기의 소리를 듣고 리듬에 맞춰 함께 연주하는 기악 수업",
    kind: "스마트 악보",
    duration: "40분",
    level: "쉬움",
    pdf: "",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_42p_11_ST",
    mediaLabel: "비바샘 스마트 악보",
    mediaFeatures: ["리듬 악기", "소리 탐색", "리듬 익히기", "함께 연주하기"],
    guideUrl: "",
    ibookUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_42p_11_ST",
    steps: [
      "리듬 악기의 이름과 소리를 들어 본다.",
      "스마트 악보를 보며 일정한 박을 손뼉으로 익힌다.",
      "리듬 악기를 나누어 맡아 간단한 리듬을 연주한다.",
      "친구들과 소리를 맞추어 노래와 함께 연주한다."
    ],
    teacherNote: "초1·2 기악의 첫 번째 곡입니다. 스마트 악보 바로 실행 버튼에서 수업 자료를 열어 바로 활용할 수 있습니다."
  },
  {
    id: "young-band",
    grade: "1-2",
    domain: "기악",
    semester: "1학기",
    title: "어린 음악대",
    subtitle: "리듬 악기의 다양한 소리를 느끼며 친구들과 즐겁게 연주하는 기악 수업",
    kind: "스마트 악보",
    duration: "40분",
    level: "쉬움",
    pdf: "",
    mediaUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_30p_7_ST",
    mediaLabel: "비바샘 스마트 악보",
    mediaFeatures: ["리듬 악기", "가락 익히기", "박자 맞추기", "함께 연주하기"],
    guideUrl: "",
    ibookUrl: "https://viewer.vivasam.com/qrviewer/viewer.html?qrcode=106413_30p_7_ST",
    steps: [
      "노래의 경쾌한 분위기와 악기 소리를 들어 본다.",
      "스마트 악보를 보며 일정한 박과 리듬을 익힌다.",
      "리듬 악기를 나누어 맡아 연주 순서를 연습한다.",
      "친구들과 박을 맞춰 즐겁게 함께 연주한다."
    ],
    teacherNote: "초1·2 기악의 두 번째 곡입니다. 스마트 악보 바로 실행 버튼에서 수업 자료를 열어 바로 활용할 수 있습니다."
  },
  {
    id: "bean-sprouts-singing",
    grade: "1-2",
    domain: "가창",
    semester: "1학기",
    title: "콩콩콩 콩나물",
    subtitle: "자라나는 콩나물처럼 나의 모습을 떠올리며 즐겁게 노래하는 가창 수업",
    kind: "악보 · 반주 · 수업안",
    duration: "40분",
    level: "보통",
    pdf: "assets/bean-sprouts.pdf",
    mediaUrl: "https://dn22.vivasam.com/VS/NES/INT/106389/zip/contents/02/17/int21_217_05.html",
    mediaLabel: "비바샘 스마트 악보",
    mediaFeatures: ["반주 듣기", "노래 연습", "가사 표현", "몸짓 활동"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fbean-sprouts-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/13355/contents/index.html?skin=basic01&page=51",
    steps: [
      "콩나물이 자라는 모습을 떠올리며 노랫말을 읽어 본다.",
      "스마트 악보 바로 실행으로 반주를 들으며 노래의 리듬과 가락을 익힌다.",
      "몸짓으로 콩나물이 자라는 모습을 표현하며 노래한다.",
      "친구들과 즐겁게 노래하며 마무리한다."
    ],
    teacherNote: "첫 번째 스마트 악보 바로 실행 버튼은 비바샘 스마트 악보를 엽니다. 스마트 수업안에서는 PPT 활동 자료를 바로 열 수 있습니다."
  },
  {
    id: "autumn-road-singing",
    grade: "1-2",
    domain: "가창",
    semester: "1학기",
    title: "당신은 누구십니까",
    subtitle: "스마트 악보로 노랫말과 가락을 즐겁게 익히는 가창 수업",
    kind: "악보 · 반주 · 수업안",
    duration: "40분",
    level: "보통",
    pdf: "assets/autumn-road.pdf",
    mediaUrl: "https://dn22.vivasam.com/VS/NES/INT/106385/zip/contents/05/02/int11_502_03.html",
    mediaLabel: "비바샘 스마트 악보",
    mediaFeatures: ["반주 듣기", "노래 연습", "가을 풍경", "몸짓 표현"],
    guideUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2FREDPAPA1000%2Fkong-s-music%2Fmain%2Fassets%2Fautumn-road-lesson-plan.pptx",
    ibookUrl: "https://ibook.vivasam.com/CBS_iBook/14713/contents/index.html?skin=basic01&page=57",
    steps: [
      "가을의 색과 바람을 떠올리며 노래의 분위기를 이야기한다.",
      "스마트 악보 바로 실행으로 반주를 들으며 노랫말과 가락을 익힌다.",
      "손과 몸으로 가을 길의 모습을 표현하며 노래한다.",
      "친구들과 고운 소리로 가을 길을 완성한다."
    ],
    teacherNote: "첫 번째 스마트 악보 바로 실행 버튼은 비바샘 스마트 악보를 엽니다."
  }
];

const semesterClasses = { "1학기": "semester-one", "2학기": "semester-two" };
const domainClasses = { "가창": "domain-singing", "기악": "domain-instrument", "감상": "domain-listening", "창작": "domain-creating" };

const state = { grade: "4", domain: "가창", search: "", lastFocus: null };
const homeView = document.querySelector("#home-view");
const aboutView = document.querySelector("#about");
const domainPreview = document.querySelector(".domain-preview");
const libraryView = document.querySelector("#library-view");
const theoryView = document.querySelector("#theory-view");
const resourceGrid = document.querySelector("#resource-grid");
const dialog = document.querySelector("#lesson-dialog");
const loginDialog = document.querySelector("#login-dialog");

function hideAllViews() {
  [homeView, aboutView, domainPreview, libraryView, theoryView, hallView, historyView,
    composerView, theorybookView, songsView, playView, smartView, edutechView,
    videoView, listeningView, booksView, toolsView, breakView, breaklistView,
    activityView, actlistView, actpageView]
    .forEach((view) => { if (view) view.hidden = true; });
}

function setCurrentNav(route) {
  document.querySelectorAll(".grade-nav a").forEach((link) => {
    const active = link.dataset.route === route;
    if (active) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
}

function showHome() {
  homeView.hidden = false;
  aboutView.hidden = false;
  domainPreview.hidden = false;
  libraryView.hidden = true;
  theoryView.hidden = true;
  hallView.hidden = true;
  historyView.hidden = true;
  composerView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  setCurrentNav("home");
  document.title = "연정쌤의 음악 교실";
}

function showGrade(grade) {
  state.grade = grades[grade] ? grade : "1-2";
  const data = grades[state.grade];
  homeView.hidden = true;
  aboutView.hidden = true;
  domainPreview.hidden = true;
  libraryView.hidden = false;
  theoryView.hidden = true;
  hallView.hidden = true;
  historyView.hidden = true;
  composerView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  document.querySelector("#grade-kicker").textContent = data.kicker;
  document.querySelector("#library-title").textContent = data.label;
  document.querySelector("#grade-description").textContent = data.description;
  document.querySelector("#grade-number").textContent = data.number;
  document.title = `${data.label} | 연정쌤의 음악 교실`;
  setCurrentNav(state.grade);
  renderResources();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showTheory() {
  homeView.hidden = true;
  aboutView.hidden = true;
  domainPreview.hidden = true;
  libraryView.hidden = true;
  theoryView.hidden = false;
  hallView.hidden = true;
  historyView.hidden = true;
  composerView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  setCurrentNav("theory");
  document.title = "음악 이론 | 연정쌤의 음악 교실";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function renderResources() {
  const query = state.search.trim().toLocaleLowerCase("ko");
  const list = resources.filter((item) => item.grade === state.grade && item.domain === state.domain && (!query || `${item.title} ${item.subtitle}`.toLocaleLowerCase("ko").includes(query)));
  document.querySelector("#domain-heading").textContent = `${state.domain} 수업`;
  document.querySelector("#result-count").textContent = `${list.length}개의 자료`;
  document.querySelectorAll(".domain-tabs button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.domain === state.domain)));

  if (!list.length) {
    const searchMessage = query ? `‘${state.search}’에 맞는 자료가 없습니다.` : `${grades[state.grade].label} ${state.domain} 자료를 준비하고 있습니다.`;
    resourceGrid.innerHTML = `<div class="empty-state"><div class="empty-icon" aria-hidden="true">♪</div><h3>${searchMessage}</h3><p>자료가 추가되면 악보, 영상, 활동 흐름을 한 카드에서 바로 열 수 있습니다.</p></div>`;
    return;
  }

  resourceGrid.innerHTML = list.map((item) => {
    const scoreMeta = item.pdf
      ? "<span>PDF 1쪽</span>"
      : item.mediaUrl
        ? "<span>스마트 악보</span>"
        : "<span>악보 준비 중</span>";
    const primaryAction = item.mediaUrl
      ? `<a class="smart-launch" href="${item.mediaUrl}" target="_blank" rel="noopener">${item.primaryLabel || "스마트 악보 바로 실행"} <span aria-hidden="true">↗</span></a>`
      : `<span class="lesson-unavailable" aria-disabled="true">${item.primaryLabel || "수업 자료 준비 중"}</span>`;
    const guideAction = item.guideUrl
      ? `<a class="guide-launch" href="${item.guideUrl}" target="_blank" rel="noopener">스마트 수업안</a>`
      : `<span class="lesson-unavailable" aria-disabled="true">수업안 준비 중</span>`;
    const scoreAction = item.pdf
      ? `<button class="lesson-open" type="button" data-open-resource="${item.id}">악보·수업안</button>`
      : `<span class="lesson-unavailable" aria-disabled="true">악보 준비 중</span>`;
    const secondaryActions = item.grade === "1-2"
      ? ""
      : `<div class="secondary-actions">${guideAction}<a class="ibook-launch" href="${item.ibookUrl}" target="_blank" rel="noopener">교과서 EBOOK</a>${scoreAction}</div>`;
    return `
      <article class="resource-card ${semesterClasses[item.semester] || "semester-one"} ${domainClasses[item.domain] || "domain-singing"}">
        <div class="card-top"><div class="tag-group"><span class="semester-tag">${item.semester}</span><span class="domain-tag">${item.domain}</span></div></div>
        <div class="card-body"><h3>${item.title}</h3><p>${item.subtitle}</p><div class="card-meta"><span>◷ ${item.duration}</span><span>수준 ${item.level}</span>${scoreMeta}</div></div>
        <div class="card-actions">${primaryAction}${secondaryActions}</div>
      </article>`;
  }).join("");
}

function openLesson(id, trigger) {
  const item = resources.find((resource) => resource.id === id);
  if (!item) return;
  state.lastFocus = trigger;
  document.querySelector("#dialog-meta").textContent = `${grades[item.grade].label} · ${item.semester} · ${item.domain}`;
  document.querySelector("#dialog-title").textContent = item.title;
  const pdfUrl = `${item.pdf}#view=FitH&toolbar=1`;
  document.querySelector("#pdf-frame").src = pdfUrl;
  ["#pdf-open", "#pdf-download", "#pdf-fallback-link"].forEach((selector) => document.querySelector(selector).href = item.pdf);
  document.querySelector("#lesson-steps").innerHTML = item.steps.map((step) => `<li>${step}</li>`).join("");
  document.querySelector("#teacher-note-text").textContent = item.teacherNote;
  const ibookPage = new URL(item.ibookUrl).searchParams.get("page");
  const guideLink = item.guideUrl
    ? `<a class="ibook-inline" href="${item.guideUrl}" target="_blank" rel="noopener">스마트 수업안 열기 <span aria-hidden="true">↗</span></a>`
    : `<span class="ibook-inline lesson-unavailable" aria-disabled="true">스마트 수업안 준비 중</span>`;
  const audioPlayer = item.audioUrl
    ? `<div class="audio-player"><strong>${item.audioLabel || "반주 듣기"}</strong><audio controls preload="metadata" src="${item.audioUrl}">이 브라우저에서는 오디오를 재생할 수 없습니다.</audio></div>`
    : "";
  const mediaLabel = item.mediaLabel || "수업 자료";
  const primaryLabel = item.primaryLabel || "스마트 악보 바로 실행";
  document.querySelector("#media-box").innerHTML = item.mediaUrl
    ? `<div class="smart-ppt"><div class="media-icon" aria-hidden="true">▶</div><strong>${mediaLabel}</strong><p>악보와 함께 활용하는 수업 자료입니다.</p><div class="media-features">${item.mediaFeatures.map((feature) => `<span>${feature}</span>`).join("")}</div><a href="${item.mediaUrl}" target="_blank" rel="noopener">${primaryLabel} <span aria-hidden="true">↗</span></a>${audioPlayer}${guideLink}<a class="ibook-inline" href="${item.ibookUrl}" target="_blank" rel="noopener">교과서 EBOOK ${ibookPage}쪽 <span aria-hidden="true">↗</span></a></div>`
    : `<div class="smart-ppt"><div class="media-icon" aria-hidden="true">QR</div><strong>수업 자료 준비 중</strong><p>제공된 PPT 또는 음원이 등록되면<br />이 영역에서 바로 실행할 수 있습니다.</p>${audioPlayer}${guideLink}<a class="ibook-inline" href="${item.ibookUrl}" target="_blank" rel="noopener">교과서 EBOOK ${ibookPage}쪽 <span aria-hidden="true">↗</span></a></div>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  document.querySelector("#dialog-close").focus();
}

function closeLesson() {
  dialog.close();
  document.querySelector("#pdf-frame").src = "about:blank";
  document.body.classList.remove("dialog-open");
  state.lastFocus?.focus();
}

function handleRoute() {
  const hash = location.hash || "#home";
  const match = hash.match(/^#grade-(.+)$/);
  if (match) showGrade(match[1]);
  else if (hash === "#theory") showTheory();
  else if (hash === "#musichall") showHall();
  else if (hash === "#music-history") showHistory();
  else if (hash === "#composer") showComposer();
  else if (hash === "#theory-book") showTheorybook();
  else if (hash === "#songs") showSongs();
  else if (hash === "#play") showPlay();
  else if (hash === "#smart") showSmart();
  else if (hash === "#edutech") showEdutech();
  else if (hash === "#video") showVideo();
  else if (hash === "#listening") showListening();
  else if (hash === "#books") showBooks();
  else if (hash === "#tools") showTools();
  else if (hash === "#break") showBreak();
  else if (hash.startsWith("#break-") && breakLists[hash.slice(7)]) showBreaklist(hash.slice(7));
  else if (hash === "#activity") showActivity();
  else if (/^#activity-(major|job)\/\d+$/.test(hash)) showActpage(...hash.slice(10).split("/"));
  else if (hash.startsWith("#activity-") && activityLists[hash.slice(10)]) showActlist(hash.slice(10));
  else showHome();
  document.querySelector("#grade-nav").classList.remove("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", "false");
}

document.querySelector(".menu-button").addEventListener("click", (event) => {
  const nav = document.querySelector("#grade-nav");
  const open = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".domain-tabs button").forEach((button) => button.addEventListener("click", () => {
  state.domain = button.dataset.domain;
  renderResources();
}));

document.querySelector("#resource-search").addEventListener("input", (event) => {
  state.search = event.target.value;
  renderResources();
});

resourceGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-open-resource]");
  if (trigger) openLesson(trigger.dataset.openResource, trigger);
});

document.querySelector("#dialog-close").addEventListener("click", closeLesson);
dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeLesson(); });
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeLesson(); });

const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("music-class-theme");
if (savedTheme === "dark") document.documentElement.dataset.theme = "dark";

function syncThemeButton() {
  const dark = document.documentElement.dataset.theme === "dark";
  themeToggle.setAttribute("aria-pressed", String(dark));
  themeToggle.setAttribute("aria-label", dark ? "라이트 모드 켜기" : "다크 모드 켜기");
  themeToggle.querySelector(".theme-icon").textContent = dark ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.theme !== "dark";
  if (dark) document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
  localStorage.setItem("music-class-theme", dark ? "dark" : "light");
  syncThemeButton();
});
syncThemeButton();

const loginButton = document.querySelector("#login-button");
const loginForm = document.querySelector("#login-form");
const loginUsername = document.querySelector("#login-username");
const loginPassword = document.querySelector("#login-password");
const loginMessage = document.querySelector("#login-message");
let pendingRoute = null;

function openLogin(message = "") {
  loginMessage.textContent = message;
  loginForm.reset();
  loginDialog.showModal();
  loginUsername.focus();
}

function syncLoginButton() {
  const username = localStorage.getItem("music-class-user");
  loginButton.setAttribute("aria-label", username ? `${username} 로그아웃` : "교사용 로그인");
  loginButton.classList.toggle("is-logged-in", Boolean(username));
  loginButton.querySelector(".visually-hidden").textContent = username ? "로그아웃" : "로그인";
}

loginButton.addEventListener("click", () => {
  if (localStorage.getItem("music-class-user")) {
    localStorage.removeItem("music-class-user");
    syncLoginButton();
    return;
  }
  pendingRoute = null;
  openLogin();
});

document.querySelector("#grade-nav").addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link || link.dataset.route === "home" || localStorage.getItem("music-class-user")) return;
  event.preventDefault();
  pendingRoute = link.getAttribute("href");
  openLogin("수업 자료는 로그인 후 이용할 수 있습니다.");
});

document.querySelector("#login-close").addEventListener("click", () => loginDialog.close());
loginDialog.addEventListener("cancel", (event) => { event.preventDefault(); loginDialog.close(); });
loginDialog.addEventListener("click", (event) => { if (event.target === loginDialog) loginDialog.close(); });
async function hashPassword(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  const passwordHash = await hashPassword(loginPassword.value);
  if (loginUsername.value.trim() !== "trumpet95" || passwordHash !== "deb2676eeef1cf8fc35f1e58cd860a000ac231550a915589dc66159806fc4a4a") {
    loginMessage.textContent = "아이디 또는 비밀번호가 맞지 않습니다.";
    loginPassword.select();
    return;
  }
  localStorage.setItem("music-class-user", "trumpet95");
  loginMessage.textContent = "로그인되었습니다.";
  syncLoginButton();
  window.setTimeout(() => {
    loginDialog.close();
    if (pendingRoute) {
      location.hash = pendingRoute;
      pendingRoute = null;
    }
  }, 450);
});
syncLoginButton();

window.addEventListener("hashchange", handleRoute);

/* ── 음악관 ───────────────────────────────────────────── */

const hallCategories = [
  { key: "history", label: "음악사", desc: "시대별 흐름", tone: "gold", image: "assets/music-hall/history.png", href: "#music-history" },
  { key: "composer", label: "작곡가", desc: "인물로 보는 음악", tone: "teal", image: "assets/music-hall/composer.png", href: "#composer" },
  { key: "theory", label: "음악 기초 이론", desc: "악전과 원리", tone: "orange", image: "assets/music-hall/theory.png", href: "#theory-book" },
  { key: "listening", label: "음악 감상실 · 악보은행", desc: "감상곡과 악보", tone: "sky", image: "assets/music-hall/listening.png", href: "#listening" },
  { key: "singing", label: "노래 익히기 모음", desc: "장르별 추가 악곡", tone: "blue", image: "assets/music-hall/singing.png", href: "#songs" },
  { key: "playing", label: "음악 연주 자료집", desc: "기악 합주 자료", tone: "magenta", image: "assets/music-hall/playing.png", href: "#play" },
  { key: "smart", label: "스마트 악기", desc: "화면으로 연주하기", tone: "indigo", image: "assets/music-hall/smart.png", href: "#smart" },
  { key: "edutech", label: "뮤직 에듀테크", desc: "수업용 디지털 도구", tone: "violet", image: "assets/music-hall/edutech.png", href: "#edutech" },
  { key: "video", label: "음악 동영상", desc: "수업 영상 모음", tone: "salmon", image: "assets/music-hall/video.png", href: "#video" },
  { key: "book", label: "음악 도서", desc: "읽을거리", tone: "pink", image: "assets/music-hall/book.png", href: "#books" },
];

const historyItems = [
  // 음악사 PPT · 서양 음악사
  { format: "ppt", scope: "west", no: 1, title: "고대", period: "B.C. 6세기 ~ 450년경", url: "https://mh.douclass.com/viewer/SPC_P/56362?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/wqj73w2pkh37.png" },
  { format: "ppt", scope: "west", no: 2, title: "중세", period: "450 ~ 1450년경", url: "https://mh.douclass.com/viewer/SPC_P/56363?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/0ev9zhxtjh4o.png" },
  { format: "ppt", scope: "west", no: 3, title: "르네상스", period: "1450년경 ~ 1600년경", url: "https://mh.douclass.com/viewer/SPC_P/56364?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/jlfchnm8ezh0.png" },
  { format: "ppt", scope: "west", no: 4, title: "바로크", period: "1600 ~ 1750", url: "https://mh.douclass.com/viewer/SPC_P/56365?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/c2qnk00j7sb4.png" },
  { format: "ppt", scope: "west", no: 5, title: "고전주의", period: "1750 ~ 1820", url: "https://mh.douclass.com/viewer/SPC_P/56366?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/n5ewws0o5eov.png" },
  { format: "ppt", scope: "west", no: 6, title: "낭만주의", period: "1820 ~ 1900", url: "https://mh.douclass.com/viewer/SPC_P/56367?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/qyr56w359c4i.png" },
  { format: "ppt", scope: "west", no: 7, title: "근·현대", period: "1900 ~ 현재", url: "https://mh.douclass.com/viewer/SPC_P/56368?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/dyfrylrhyyla.png" },
  // 음악사 PPT · 우리나라 음악사
  { format: "ppt", scope: "korea", no: 1, title: "상고 시대", period: "~ B.C. 57", url: "https://mh.douclass.com/viewer/SPC_P/56369?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/nwa48w5v0pxb.png" },
  { format: "ppt", scope: "korea", no: 2, title: "삼국 시대", period: "B.C. 57 ~ 676", url: "https://mh.douclass.com/viewer/SPC_P/56370?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/031367ar36t9.png" },
  { format: "ppt", scope: "korea", no: 3, title: "통일 신라와 발해", period: "676 ~ 918", url: "https://mh.douclass.com/viewer/SPC_P/56371?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/q1sk1mzamh65.png" },
  { format: "ppt", scope: "korea", no: 4, title: "고려 시대", period: "918 ~ 1392", url: "https://mh.douclass.com/viewer/SPC_P/56372?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/f0g7c6d3quc2.png" },
  { format: "ppt", scope: "korea", no: 5, title: "조선 전기", period: "1392 ~ 1592", url: "https://mh.douclass.com/viewer/SPC_P/56373?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/sdgrvduig4ce.png" },
  { format: "ppt", scope: "korea", no: 6, title: "조선 후기", period: "1592 ~ 1876", url: "https://mh.douclass.com/viewer/SPC_P/56374?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/p0682whkllrb.png" },
  { format: "ppt", scope: "korea", no: 7, title: "근·현대", period: "1876 ~", url: "https://mh.douclass.com/viewer/SPC_P/56375?type=student", img: "https://s3.douclass.com/pub/2026/thumb/2607/5gshwhuuzrps.png" },
  // 애니메이션 · 서양 음악사 (음악 박물관)
  { format: "anim", scope: "west", badge: "음악 박물관", title: "고대", duration: "0:31", url: "https://www.douclass.com/viewer/SPC_P/56387", img: "https://s3.douclass.com/pub/2026/thumb/2607/zzyekg5r4kwk.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "중세", duration: "0:28", url: "https://www.douclass.com/viewer/SPC_P/56388", img: "https://s3.douclass.com/pub/2026/thumb/2607/gkkgbfmorf3y.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "르네상스", duration: "0:23", url: "https://www.douclass.com/viewer/SPC_P/56389", img: "https://s3.douclass.com/pub/2026/thumb/2607/f7i0cd6fijwy.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "바로크", duration: "0:29", url: "https://www.douclass.com/viewer/SPC_P/56390", img: "https://s3.douclass.com/pub/2026/thumb/2607/arep5ujzncaz.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "고전주의", duration: "0:35", url: "https://www.douclass.com/viewer/SPC_P/56391", img: "https://s3.douclass.com/pub/2026/thumb/2607/gryax9nlb4s3.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "낭만주의", duration: "0:28", url: "https://www.douclass.com/viewer/SPC_P/56392", img: "https://s3.douclass.com/pub/2026/thumb/2607/irs0u3zlqzzp.jpg" },
  { format: "anim", scope: "west", badge: "음악 박물관", title: "근·현대", duration: "0:41", url: "https://www.douclass.com/viewer/SPC_P/56393", img: "https://s3.douclass.com/pub/2026/thumb/2607/f5hrrwty55px.jpg" },
  // 애니메이션 · 서양 음악사 (시대별)
  { format: "anim", scope: "west", no: 1, title: "고대", duration: "0:15", url: "https://www.douclass.com/viewer/SPC_P/56426", img: "https://s3.douclass.com/pub/2026/thumb/2607/v2ou8ud4rq2c.jpg" },
  { format: "anim", scope: "west", no: 2, title: "중세", duration: "0:13", url: "https://www.douclass.com/viewer/SPC_P/56427", img: "https://s3.douclass.com/pub/2026/thumb/2607/cna347se60ux.jpg" },
  { format: "anim", scope: "west", no: 3, title: "르네상스", duration: "0:22", url: "https://www.douclass.com/viewer/SPC_P/56428", img: "https://s3.douclass.com/pub/2026/thumb/2607/arlwaic1dm8l.jpg" },
  { format: "anim", scope: "west", no: 4, title: "바로크", duration: "0:24", url: "https://www.douclass.com/viewer/SPC_P/56429", img: "https://s3.douclass.com/pub/2026/thumb/2607/egz3dmri933f.jpg" },
  { format: "anim", scope: "west", no: 5, title: "고전주의", duration: "0:28", url: "https://www.douclass.com/viewer/SPC_P/56430", img: "https://s3.douclass.com/pub/2026/thumb/2607/juw9z7n9jdxx.jpg" },
  { format: "anim", scope: "west", no: 6, title: "낭만주의", duration: "0:28", url: "https://www.douclass.com/viewer/SPC_P/56431", img: "https://s3.douclass.com/pub/2026/thumb/2607/ucj2ovnna9p5.jpg" },
  { format: "anim", scope: "west", no: 7, title: "근·현대", duration: "0:25", url: "https://www.douclass.com/viewer/SPC_P/56432", img: "https://s3.douclass.com/pub/2026/thumb/2607/0yfd76f4pnz3.jpg" },
  // 애니메이션 · 우리나라 음악사 (국악 박물관)
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "상고 시대", duration: "0:29", url: "https://www.douclass.com/viewer/SPC_P/30122", img: "https://s3.douclass.com/pub/2024/thumb/2407/fdvfum3re0hv.png" },
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "삼국 시대", duration: "0:55", url: "https://www.douclass.com/viewer/SPC_P/30123", img: "https://s3.douclass.com/pub/2024/thumb/2407/6ombxvf9dzg1.png" },
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "통일 신라·발해", duration: "0:50", url: "https://www.douclass.com/viewer/SPC_P/30124", img: "https://s3.douclass.com/pub/2024/thumb/2407/yxbuaq71pwmg.png" },
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "고려 시대", duration: "0:28", url: "https://www.douclass.com/viewer/SPC_P/30125", img: "https://s3.douclass.com/pub/2024/thumb/2407/r6axy2k4mbmr.png" },
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "조선 시대", duration: "0:39", url: "https://www.douclass.com/viewer/SPC_P/30126", img: "https://s3.douclass.com/pub/2024/thumb/2407/3k4mpks0z5yz.png" },
  { format: "anim", scope: "korea", badge: "국악 박물관", title: "근·현대", duration: "0:32", url: "https://www.douclass.com/viewer/SPC_P/30127", img: "https://s3.douclass.com/pub/2024/thumb/2407/q6g7ttbvnzqp.png" },
];

/* 시대별 일러스트 — 직접 그린 SVG */
const historyArt = {
  colosseum: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><rect class="a-fill" x="20" y="26" width="80" height="44" rx="5"/><g class="a-line"><rect x="20" y="26" width="80" height="44" rx="5"/><path d="M20 40h80M20 54h80"/><path d="M27 40v-6a3.5 3.5 0 017 0v6M39 40v-6a3.5 3.5 0 017 0v6M51 40v-6a3.5 3.5 0 017 0v6M63 40v-6a3.5 3.5 0 017 0v6M75 40v-6a3.5 3.5 0 017 0v6M87 40v-6a3.5 3.5 0 017 0v6"/><path d="M27 54v-6a3.5 3.5 0 017 0v6M39 54v-6a3.5 3.5 0 017 0v6M51 54v-6a3.5 3.5 0 017 0v6M63 54v-6a3.5 3.5 0 017 0v6M75 54v-6a3.5 3.5 0 017 0v6M87 54v-6a3.5 3.5 0 017 0v6"/><path d="M33 70v-8a4 4 0 018 0v8M55 70v-8a4 4 0 018 0v8M77 70v-8a4 4 0 018 0v8"/></g></svg>`,
  cathedral: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M26 26h16v44H26zM78 26h16v44H78zM46 32h28v38H46z"/><path class="a-fill" d="M34 6l10 20H24zM86 6l10 20H76zM60 14l16 18H44z"/><g class="a-line"><path d="M26 26h16v44H26zM78 26h16v44H78zM46 32h28v38H46z"/><path d="M34 6l10 20H24zM86 6l10 20H76zM60 14l16 18H44z"/><circle cx="60" cy="44" r="7"/><path d="M60 37v14M53 44h14"/><path d="M54 70v-12a6 6 0 0112 0v12"/><path d="M30 38v-4a4 4 0 018 0v4M82 38v-4a4 4 0 018 0v4M30 52v-4a4 4 0 018 0v4M82 52v-4a4 4 0 018 0v4"/></g></svg>`,
  duomo: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M26 54h68v16H26z"/><path class="a-fill" d="M44 40h32v14H44z"/><path class="a-fill" d="M42 40C42 20 60 12 60 12s18 8 18 28z"/><g class="a-line"><path d="M26 54h68v16H26zM44 40h32v14H44z"/><path d="M42 40C42 20 60 12 60 12s18 8 18 28z"/><path d="M60 12V4M52 8h16"/><path d="M60 12v28M50 15q10 14 10 25M70 15q-10 14-10 25"/><path d="M50 54v-14M70 54v-14"/><path d="M32 70v-9a4 4 0 018 0v9M80 70v-9a4 4 0 018 0v9M54 70v-8a6 6 0 0112 0v8"/></g></svg>`,
  baroque: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M14 44h92v26H14z"/><path class="a-fill" d="M46 30h28v40H46z"/><path class="a-fill" d="M46 30q14-16 28 0z"/><g class="a-line"><path d="M14 44h92v26H14zM46 30h28v40H46z"/><path d="M46 30q14-16 28 0z"/><path d="M60 14v6"/><path d="M22 58v-6a3 3 0 016 0v6M32 58v-6a3 3 0 016 0v6M82 58v-6a3 3 0 016 0v6M92 58v-6a3 3 0 016 0v6"/><path d="M14 50h32M74 50h32"/><path d="M54 70v-12a6 6 0 0112 0v12"/></g></svg>`,
  neoclassic: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M18 64h84v6H18zM23 58h74v6H23z"/><path class="a-fill" d="M24 30h72v6H24z"/><path class="a-fill" d="M60 12l38 18H22z"/><g class="a-line"><path d="M18 64h84v6H18zM23 58h74v6H23zM24 30h72v6H24z"/><path d="M60 12l38 18H22z"/><path d="M30 36v22M42 36v22M54 36v22M66 36v22M78 36v22M90 36v22"/></g></svg>`,
  opera: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M16 40h88v30H16z"/><path class="a-fill" d="M40 24h40v16H40z"/><path class="a-fill" d="M16 40q10-14 20 0zM84 40q10-14 20 0zM44 24q16-16 32 0z"/><g class="a-line"><path d="M16 40h88v30H16zM40 24h40v16H40z"/><path d="M16 40q10-14 20 0zM84 40q10-14 20 0zM44 24q16-16 32 0z"/><path d="M26 26v-5M60 8v-4M94 26v-5"/><path d="M16 54h88"/><path d="M46 54v-6a6 6 0 0112 0v6M64 54v-6a6 6 0 0112 0v6"/><path d="M24 70v-14M34 70v-14M86 70v-14M96 70v-14"/><path d="M52 70v-10a8 8 0 0116 0v10"/></g></svg>`,
  modern: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M12 62h96v8H12z"/><path class="a-fill" d="M24 62C24 44 38 30 52 28 42 38 36 50 34 62ZM42 62C42 40 58 24 74 22 62 34 56 48 54 62ZM60 62C60 38 78 20 96 18 82 32 76 46 74 62Z"/><g class="a-line"><path d="M12 62h96v8H12z"/><path d="M24 62C24 44 38 30 52 28 42 38 36 50 34 62ZM42 62C42 40 58 24 74 22 62 34 56 48 54 62ZM60 62C60 38 78 20 96 18 82 32 76 46 74 62Z"/></g></svg>`,
  bronze: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><circle class="a-fill" cx="60" cy="42" r="17"/><g class="a-line"><circle cx="60" cy="42" r="17"/><circle cx="60" cy="42" r="8"/><path d="M60 25v-4M60 63v4M43 42h-4M77 42h4M48 30l-3-3M72 54l3 3M72 30l3-3M48 54l-3 3"/></g><g class="a-fill"><circle cx="60" cy="17" r="5"/><circle cx="60" cy="67" r="5"/><circle cx="35" cy="42" r="5"/><circle cx="85" cy="42" r="5"/><circle cx="42" cy="24" r="5"/><circle cx="78" cy="60" r="5"/><circle cx="78" cy="24" r="5"/><circle cx="42" cy="60" r="5"/></g><g class="a-line"><circle cx="60" cy="17" r="5"/><circle cx="60" cy="67" r="5"/><circle cx="35" cy="42" r="5"/><circle cx="85" cy="42" r="5"/><circle cx="42" cy="24" r="5"/><circle cx="78" cy="60" r="5"/><circle cx="78" cy="24" r="5"/><circle cx="42" cy="60" r="5"/></g></svg>`,
  clayfigure: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><circle class="a-fill" cx="46" cy="18" r="9"/><path class="a-fill" d="M36 30h20l6 16H30z"/><path class="a-fill" d="M26 50h68l-6 16H32z"/><g class="a-line"><circle cx="46" cy="18" r="9"/><path d="M36 30h20l6 16H30z"/><path d="M26 50h68l-6 16H32z"/><path d="M30 54h60M31 58h58M32 62h56"/><path d="M56 34l10 12"/><circle cx="70" cy="48" r="4"/><path d="M42 15h8"/></g></svg>`,
  bell: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M44 26q16-7 32 0 5 20 5 32 0 5-21 5t-21-5q0-12 5-32z"/><g class="a-line"><path d="M30 14h60"/><path d="M54 14q6-8 12 0"/><path d="M44 26q16-7 32 0 5 20 5 32 0 5-21 5t-21-5q0-12 5-32z"/><path d="M41 52q19 5 38 0"/><path d="M41 36q19 5 38 0"/><circle cx="52" cy="44" r="4"/><circle cx="68" cy="44" r="4"/></g></svg>`,
  chimes: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M20 16h80v7H20zM24 23h6v47h-6zM90 23h6v47h-6z"/><g class="a-line"><path d="M20 16h80v7H20zM24 23h6v47h-6zM90 23h6v47h-6z"/><path d="M34 40h52M34 58h52"/></g><g class="a-fill"><path d="M38 30h5l5 8-5 3-5-8zM52 30h5l5 8-5 3-5-8zM66 30h5l5 8-5 3-5-8zM80 30h-5l-5 8 5 3 5-8z"/><path d="M38 48h5l5 8-5 3-5-8zM52 48h5l5 8-5 3-5-8zM66 48h5l5 8-5 3-5-8z"/></g><g class="a-line"><path d="M38 30h5l5 8-5 3-5-8zM52 30h5l5 8-5 3-5-8zM66 30h5l5 8-5 3-5-8z"/><path d="M38 48h5l5 8-5 3-5-8zM52 48h5l5 8-5 3-5-8zM66 48h5l5 8-5 3-5-8z"/></g></svg>`,
  bells: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M20 14h80v7H20zM24 21h6v49h-6zM90 21h6v49h-6z"/><g class="a-line"><path d="M20 14h80v7H20zM24 21h6v49h-6zM90 21h6v49h-6z"/><path d="M34 38h52M34 58h52"/></g><g class="a-fill"><path d="M38 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM54 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM70 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11z"/><path d="M38 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM54 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM70 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11z"/></g><g class="a-line"><path d="M38 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM54 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM70 26q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11z"/><path d="M38 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM54 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11zM70 46q5-3 10 0 2 7 2 11 0 2-7 2t-7-2q0-4 2-11z"/></g></svg>`,
  drum: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M44 28h30q9 14 0 28H44q-9-14 0-28z"/><ellipse class="a-fill" cx="44" cy="42" rx="9" ry="14"/><g class="a-line"><path d="M44 28h30q9 14 0 28H44"/><ellipse cx="44" cy="42" rx="9" ry="14"/><path d="M74 28q9 14 0 28"/><path d="M48 30l-2 24M70 30l2 24"/><path d="M34 66h50"/><path d="M84 22l12 10M84 34l12-10"/></g></svg>`,
  peaks: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><circle class="a-accent" cx="30" cy="20" r="7"/><circle class="a-fill" cx="92" cy="20" r="7"/><path class="a-fill" d="M10 62l16-24 10 14 14-22 14 22 10-14 16 24z"/><g class="a-line"><circle cx="30" cy="20" r="7"/><circle cx="92" cy="20" r="7"/><path d="M10 62l16-24 10 14 14-22 14 22 10-14 16 24z"/><path d="M10 66q10-5 20 0t20 0 20 0 20 0 20 0M10 72q10-5 20 0t20 0 20 0 20 0 20 0"/></g></svg>`,
  gramophone: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M32 52h34v16a3 3 0 01-3 3H35a3 3 0 01-3-3z"/><path class="a-fill" d="M62 50q8-26 30-32 6 12-2 22-9 11-24 14z"/><g class="a-line"><path d="M32 52h34v16a3 3 0 01-3 3H35a3 3 0 01-3-3z"/><path d="M62 50q8-26 30-32 6 12-2 22-9 11-24 14z"/><path d="M56 52l8-6"/><circle cx="49" cy="46" r="5"/><path d="M66 62h8a4 4 0 014 4v4"/><path d="M36 58h6"/></g></svg>`,
};

const artByTitle = {
  west: { "고대": "colosseum", "중세": "cathedral", "르네상스": "duomo", "바로크": "baroque", "고전주의": "neoclassic", "낭만주의": "opera", "근·현대": "modern" },
  korea: { "상고 시대": "bronze", "삼국 시대": "clayfigure", "통일 신라와 발해": "bell", "통일 신라·발해": "bell", "고려 시대": "chimes", "조선 전기": "bells", "조선 후기": "drum", "조선 시대": "peaks", "근·현대": "gramophone" },
};

function historyArtFor(item) {
  return historyArt[artByTitle[item.scope][item.title]] || "";
}

const composerItems = [
  { format: "era", no: 1, era: "중세", art: "medieval", title: "다레초", latin: "Guido d'Arezzo", years: "995?~1050?", caption: "중세_다레초", url: "https://www.douclass.com/viewer/SPC_P/54533", img: "https://s3.douclass.com/pub/2026/thumb/2607/0n6np2bfgvia.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/wfsbxcby3uh3.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 2, era: "중세", art: "medieval", title: "마쇼", latin: "Guillaume de Machaut", years: "1300?~1377", caption: "중세_마쇼", url: "https://www.douclass.com/viewer/SPC_P/54554", img: "https://s3.douclass.com/pub/2026/thumb/2607/d6mudnznf5kw.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/uz8i3x7bwbga.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 3, era: "르네상스", art: "renaissance", title: "조스캥", latin: "Josquin des Prez", years: "1440?~1521", caption: "르네상스_조스캥", url: "https://www.douclass.com/viewer/SPC_P/54555", img: "https://s3.douclass.com/pub/2026/thumb/2607/owozc2235wnu.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/k9tk2lpm4cx3.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 4, era: "르네상스", art: "renaissance", title: "팔레스트리나", latin: "G. P. da Palestrina", years: "1525?~1594", caption: "르네상스_팔레스트리나", url: "https://www.douclass.com/viewer/SPC_P/54556", img: "https://s3.douclass.com/pub/2026/thumb/2607/ichtkwb0a0v2.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/0ji7poh6g9ub.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 5, era: "바로크", art: "baroque", title: "비발디", latin: "Antonio Vivaldi", years: "1678~1741", caption: "바로크_비발디", url: "https://www.douclass.com/viewer/SPC_P/54557", img: "https://s3.douclass.com/pub/2026/thumb/2607/jhmwohdxu2x2.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/mqp4m3xkj450.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 6, era: "바로크", art: "baroque", title: "바흐", latin: "J. S. Bach", years: "1685~1750", caption: "바로크_바흐", url: "https://www.douclass.com/viewer/SPC_P/54558", img: "https://s3.douclass.com/pub/2026/thumb/2607/v73r3guois2j.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/npfm8majrskt.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 7, era: "바로크", art: "baroque", title: "헨델", latin: "G. F. Handel", years: "1685~1759", caption: "바로크_헨델", url: "https://www.douclass.com/viewer/SPC_P/54559", img: "https://s3.douclass.com/pub/2026/thumb/2607/jbmchw5tj65x.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/oehp5a6c1rhv.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 8, era: "고전", art: "classical", title: "하이든", latin: "Joseph Haydn", years: "1732~1809", caption: "고전_하이든", url: "https://www.douclass.com/viewer/SPC_P/54560", img: "https://s3.douclass.com/pub/2026/thumb/2607/np1jj7gspy4q.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/0gydxpisbt4n.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 9, era: "고전", art: "classical", title: "모차르트", latin: "W. A. Mozart", years: "1756~1791", caption: "고전_모차르트", url: "https://www.douclass.com/viewer/SPC_P/54561", img: "https://s3.douclass.com/pub/2026/thumb/2607/lqttfy6bc338.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/xspw343vrnku.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 10, era: "고전", art: "classical", title: "베토벤", latin: "L. van Beethoven", years: "1770~1827", caption: "고전_베토벤", url: "https://www.douclass.com/viewer/SPC_P/54562", img: "https://s3.douclass.com/pub/2026/thumb/2607/uhz2nkhpkq4h.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/olb5chjn7f4q.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 11, era: "낭만", art: "romantic", title: "로시니", latin: "Gioachino Rossini", years: "1792~1868", caption: "낭만_로시니", url: "https://www.douclass.com/viewer/SPC_P/54563", img: "https://s3.douclass.com/pub/2026/thumb/2607/vs4lt5o5opg0.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/t4zh90twizam.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 12, era: "낭만", art: "romantic", title: "슈베르트", latin: "Franz Schubert", years: "1797~1828", caption: "낭만_슈베르트", url: "https://www.douclass.com/viewer/SPC_P/54564", img: "https://s3.douclass.com/pub/2026/thumb/2607/rfmh74b1zjdw.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/w99x48farjuo.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 13, era: "낭만", art: "romantic", title: "베를리오즈", latin: "Hector Berlioz", years: "1803~1869", caption: "낭만_베를리오즈", url: "https://www.douclass.com/viewer/SPC_P/54565", img: "https://s3.douclass.com/pub/2026/thumb/2607/wgcm22gx9qj4.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/5126caro3ib8.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 14, era: "낭만", art: "romantic", title: "멘델스존", latin: "Felix Mendelssohn", years: "1809~1847", caption: "낭만_멘델스존", url: "https://www.douclass.com/viewer/SPC_P/54566", img: "https://s3.douclass.com/pub/2026/thumb/2607/mlryo7ecd4cg.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/wovkwc2o28ty.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 15, era: "낭만", art: "romantic", title: "쇼팽", latin: "Frederic Chopin", years: "1810~1849", caption: "낭만_쇼팽", url: "https://www.douclass.com/viewer/SPC_P/54567", img: "https://s3.douclass.com/pub/2026/thumb/2607/97qbzksbn93z.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/mf6y375fuahz.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 16, era: "낭만", art: "romantic", title: "슈만", latin: "Robert Schumann", years: "1810~1856", caption: "낭만_슈만", url: "https://www.douclass.com/viewer/SPC_P/54568", img: "https://s3.douclass.com/pub/2026/thumb/2607/homq0mt8lnuq.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/roz286kq0oxc.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 17, era: "낭만", art: "romantic", title: "리스트", latin: "Franz Liszt", years: "1811~1886", caption: "낭만_리스트", url: "https://www.douclass.com/viewer/SPC_P/54569", img: "https://s3.douclass.com/pub/2026/thumb/2607/ek65avjrgzoe.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/e5duyun7794t.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 18, era: "낭만", art: "romantic", title: "베르디", latin: "Giuseppe Verdi", years: "1813~1901", caption: "낭만_베르디", url: "https://www.douclass.com/viewer/SPC_P/54570", img: "https://s3.douclass.com/pub/2026/thumb/2607/fuhcbcqnlf9z.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/gzr8innf27h5.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 19, era: "낭만", art: "romantic", title: "바그너", latin: "Richard Wagner", years: "1813~1883", caption: "낭만_바그너", url: "https://www.douclass.com/viewer/SPC_P/54571", img: "https://s3.douclass.com/pub/2026/thumb/2607/fp3arf2mko5d.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/g0bw53f0dczp.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 20, era: "낭만", art: "romantic", title: "브람스", latin: "Johannes Brahms", years: "1833~1897", caption: "낭만_브람스", url: "https://www.douclass.com/viewer/SPC_P/54572", img: "https://s3.douclass.com/pub/2026/thumb/2607/l3sg0t94hj2a.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/jxlhr0xnf49l.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 21, era: "낭만", art: "romantic", title: "비제", latin: "Georges Bizet", years: "1838~1875", caption: "낭만_비제", url: "https://www.douclass.com/viewer/SPC_P/54575", img: "https://s3.douclass.com/pub/2026/thumb/2607/fkxh417ns82p.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/lde0v2vr2v6z.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 22, era: "낭만", art: "romantic", title: "차이콥스키", latin: "P. I. Tchaikovsky", years: "1840~1893", caption: "낭만_차이콥스키", url: "https://www.douclass.com/viewer/SPC_P/54577", img: "https://s3.douclass.com/pub/2026/thumb/2607/6jo0ksg1594j.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/n96myu9pgiod.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 23, era: "낭만(민족주의)", art: "nationalist", title: "스메타나", latin: "Bedrich Smetana", years: "1824~1884", caption: "낭만(민족주의)_스메타나", url: "https://www.douclass.com/viewer/SPC_P/54579", img: "https://s3.douclass.com/pub/2026/thumb/2607/x3i9tw2vujzd.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/9fzpxwbze5c6.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 24, era: "낭만(민족주의)", art: "nationalist", title: "무소륵스키", latin: "Modest Mussorgsky", years: "1839~1881", caption: "낭만(민족주의)_무소륵스키", url: "https://www.douclass.com/viewer/SPC_P/54582", img: "https://s3.douclass.com/pub/2026/thumb/2607/bfl1a80i6pwd.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/zbroru114diq.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 25, era: "낭만(민족주의)", art: "nationalist", title: "드보르자크", latin: "Antonin Dvorak", years: "1841~1904", caption: "낭만(민족주의)_드보르자크", url: "https://www.douclass.com/viewer/SPC_P/54585", img: "https://s3.douclass.com/pub/2026/thumb/2607/1cvyue2ll1s4.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/1x0g7byzk25q.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 26, era: "낭만(민족주의)", art: "nationalist", title: "그리그", latin: "Edvard Grieg", years: "1843~1907", caption: "낭만(민족주의)_그리그", url: "https://www.douclass.com/viewer/SPC_P/54586", img: "https://s3.douclass.com/pub/2026/thumb/2607/xe1q91frfinz.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/wx1lz0q3znso.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 27, era: "근현대", art: "modernist", title: "드뷔시", latin: "Claude Debussy", years: "1862~1918", caption: "근현대_드뷔시", url: "https://www.douclass.com/viewer/SPC_P/54588", img: "https://s3.douclass.com/pub/2026/thumb/2607/aovvs7m5bwzk.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/j59ssnxo62gk.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 28, era: "근현대", art: "modernist", title: "쇤베르크", latin: "Arnold Schoenberg", years: "1874~1951", caption: "근현대_쇤베르크", url: "https://www.douclass.com/viewer/SPC_P/54590", img: "https://s3.douclass.com/pub/2026/thumb/2607/ykvvbpew9ehp.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/ah16x19o7ahy.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 29, era: "근현대", art: "modernist", title: "스트라빈스키", latin: "Igor Stravinsky", years: "1882~1971", caption: "근현대_스트라빈스키", url: "https://www.douclass.com/viewer/SPC_P/54591", img: "https://s3.douclass.com/pub/2026/thumb/2607/sazyq9okrwzw.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/vbxk8bf74dnk.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "era", no: 30, era: "근현대", art: "modernist", title: "케이지", latin: "John Cage", years: "1912~1992", caption: "근현대_케이지", url: "https://www.douclass.com/viewer/SPC_P/54593", img: "https://s3.douclass.com/pub/2026/thumb/2607/4s7eiespfey2.png", sheetUrl: "https://s3.douclass.com/pub/2026/TC_ACTIVE/2607/n9bbjrt1xbqi.hwpx", sheetLabel: "활동지 (hwpx)" },
  { format: "webtoon", no: 1, scope: "해외편", art: "world", title: "모차르트", caption: "모차르트", url: "https://www.douclass.com/viewer/SPC_C/54542", img: "https://s3.douclass.com/pub/2026/thumb/2608/kintxo1j2jjn.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/yzzy7bn0srox.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 2, scope: "해외편", art: "world", title: "베토벤", caption: "베토벤", url: "https://www.douclass.com/viewer/SPC_C/54543", img: "https://s3.douclass.com/pub/2026/thumb/2608/ll6z5jumkn3m.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/shno7dqjqole.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 3, scope: "해외편", art: "world", title: "차이콥스키", caption: "차이콥스키", url: "https://www.douclass.com/viewer/SPC_C/54544", img: "https://s3.douclass.com/pub/2026/thumb/2608/th8w71o3tnhq.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/368kwtvq2ht2.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 4, scope: "해외편", art: "world", title: "존 케이지", caption: "존 케이지", url: "https://www.douclass.com/viewer/SPC_C/54545", img: "https://s3.douclass.com/pub/2026/thumb/2608/d10c3fsmyow9.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/9g37ysnnhjau.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 5, scope: "해외편", art: "world", title: "마이클 잭슨", caption: "마이클 잭슨", url: "https://www.douclass.com/viewer/SPC_C/54546", img: "https://s3.douclass.com/pub/2026/thumb/2608/0mzpauuv642o.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/q4wecii96qiq.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 6, scope: "해외편", art: "world", title: "히사이시 조", caption: "히사이시 조", url: "https://www.douclass.com/viewer/SPC_C/54547", img: "https://s3.douclass.com/pub/2026/thumb/2608/8sfn5f7hkkry.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/6g9n3zbvu06c.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 7, scope: "국내편", art: "korean", title: "세종 대왕과 박연", caption: "세종 대왕과 박연", url: "https://www.douclass.com/viewer/SPC_C/54548", img: "https://s3.douclass.com/pub/2026/thumb/2608/9io5y8i9ut81.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/t299odiulj2w.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 8, scope: "국내편", art: "korean", title: "왕산악과 우륵", caption: "왕산악과 우륵", url: "https://www.douclass.com/viewer/SPC_C/54549", img: "https://s3.douclass.com/pub/2026/thumb/2608/37smqpt7y1pc.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/kxoswshrvcbe.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 9, scope: "국내편", art: "korean", title: "황병기", caption: "황병기", url: "https://www.douclass.com/viewer/SPC_C/54550", img: "https://s3.douclass.com/pub/2026/thumb/2608/o9dx88hvxe0p.jpg", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/fnwkormo50w8.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 10, scope: "국내편", art: "korean", title: "김덕수", caption: "김덕수", url: "https://www.douclass.com/viewer/SPC_C/54551", img: "https://s3.douclass.com/pub/2026/thumb/2608/n48iqcmqx7v9.png", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/3wazv4vhdf5o.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 11, scope: "국내편", art: "korean", title: "조수미", caption: "조수미", url: "https://www.douclass.com/viewer/SPC_C/54552", img: "https://s3.douclass.com/pub/2026/thumb/2608/54vb3q02v9q8.jpg", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/sg0tvn65wmwm.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "webtoon", no: 12, scope: "국내편", art: "korean", title: "조성진", caption: "조성진", url: "https://www.douclass.com/viewer/SPC_C/54553", img: "https://s3.douclass.com/pub/2026/thumb/2608/9holty9mcx6e.jpg", sheetUrl: "https://s3.douclass.com/pub/2026/ST_ACTIVE/2608/o0odvsjvl7ar.pdf", sheetLabel: "활동지 (pdf)" },
  { format: "textbook", no: 1, art: "textbook", title: "생상스", work: "동물의 사육제", caption: "[생상스] 동물의 사육제", url: "https://canva.link/a0nd5vlpl64u7fs", img: "https://s3.douclass.com/pub/2026/thumb/2608/g8mu5s5nmie3.png", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 2, art: "textbook", title: "프로코피예프", work: "피터와 늑대", caption: "[프로코피예프] 피터와 늑대", url: "https://canva.link/53d5rdc6rg7i0xs", img: "https://s3.douclass.com/pub/2026/thumb/2608/j13wqi1c7gi4.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 3, art: "textbook", title: "비제", work: "&quot;아를의 여인&quot; 중 '파랑돌'", caption: "[비제] &quot;아를의 여인&quot; 중 '파랑돌'", url: "https://canva.link/6s5p051kpw5fv5j", img: "https://s3.douclass.com/pub/2026/thumb/2608/5b1gm270c108.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 4, art: "textbook", title: "그리그", work: "페르 귄트 모음", caption: "[그리그] 페르 귄트 모음", url: "https://canva.link/i4rsg3zba5gibvc", img: "https://s3.douclass.com/pub/2026/thumb/2608/fgcy3162a7zr.png", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 5, art: "textbook", title: "로시니", work: "빌헬름텔 서곡", caption: "[로시니] 빌헬름텔 서곡", url: "https://canva.link/u91odjds0yo5dp4", img: "https://s3.douclass.com/pub/2026/thumb/2608/tfv2lari1bpg.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 6, art: "textbook", title: "하이든", work: "'시계 교향곡' 제2악장", caption: "[하이든] '시계 교향곡' 제2악장", url: "https://canva.link/b65dmt1gvl3p7tw", img: "https://s3.douclass.com/pub/2026/thumb/2608/a0k7sjgrvmiz.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 7, art: "textbook", title: "홀스트", work: "&quot;행성&quot; 중 '목성'", caption: "[홀스트] &quot;행성&quot; 중 '목성'", url: "https://canva.link/67t5uans6rvk1wk", img: "https://s3.douclass.com/pub/2026/thumb/2608/trpxwkut97mh.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 8, art: "textbook", title: "브람스", work: "'헝가리 춤곡 제5번'", caption: "[브람스] '헝가리 춤곡 제5번'", url: "https://canva.link/v8esuiu4n9o27ji", img: "https://s3.douclass.com/pub/2026/thumb/2608/4kuwsqz71jjz.jpg", sheetUrl: "", sheetLabel: "" },
  { format: "textbook", no: 9, art: "textbook", title: "스메타나", work: "&quot;나의 조국&quot; 중 '몰다우'", caption: "[스메타나] &quot;나의 조국&quot; 중 '몰다우'", url: "https://canva.link/hv090su9jjtu16i", img: "https://s3.douclass.com/pub/2026/thumb/2608/tgbtluxkt5sk.png", sheetUrl: "", sheetLabel: "" },
];

const theoryItems = [
  { format: "anim", no: 1, art: "staff", title: "오선과 음자리표", duration: "2:42", url: "https://www.douclass.com/viewer/SPC_P/30288", img: "https://s3.douclass.com/pub/2024/thumb/2407/xv5ygr1kmu24.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/4b/21/c5cc90ca48b6c9efc666c5a28a88496ab78c/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 2, art: "notes", title: "음표와 쉼표", duration: "1:26", url: "https://www.douclass.com/viewer/SPC_P/30293", img: "https://s3.douclass.com/pub/2024/thumb/2407/mtxlv8vj6py2.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/8b/b1/012be6d118162ab3533d538c9b82759a7591/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 3, art: "repeat", title: "반복 기호", duration: "3:30", url: "https://www.douclass.com/viewer/SPC_P/30295", img: "https://s3.douclass.com/pub/2024/thumb/2407/1lcd9s5mhs18.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/40/13/d44d0daac383837efb2ce0a4b4cc2c01e32f/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 4, art: "meter", title: "박자", duration: "1:44", url: "https://www.douclass.com/viewer/SPC_P/30300", img: "https://s3.douclass.com/pub/2024/thumb/2407/tld0qz8pujxh.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/a8/d1/8478d8a2b36c8648fefef36069b34fea0f04/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 5, art: "pitch", title: "음이름과 계이름", duration: "1:56", url: "https://www.douclass.com/viewer/SPC_P/30304", img: "https://s3.douclass.com/pub/2024/thumb/2407/fslpn7i1z8y5.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/5e/8c/a3d3e40a9cab46fdf1e43ab1858c3ba45321/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 6, art: "accidental", title: "임시표", duration: "2:28", url: "https://www.douclass.com/viewer/SPC_P/30308", img: "https://s3.douclass.com/pub/2024/thumb/2407/0zg0xjbxo1s0.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/92/dc/c44cecc1834d8326ff60f94eb0ca081d364f/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 7, art: "symbols", title: "다양한 음악 기호", duration: "1:58", url: "https://www.douclass.com/viewer/SPC_P/30315", img: "https://s3.douclass.com/pub/2024/thumb/2407/ezv5ji25aizg.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/ad/96/244c0f242f5beb4e116a1e8c027fc712247b/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 8, art: "dynamics", title: "셈여림표", duration: "2:17", url: "https://www.douclass.com/viewer/SPC_P/30318", img: "https://s3.douclass.com/pub/2024/thumb/2407/zm4c7ninjet0.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/97/a6/53179ee1f62cf2775efb13207379033e3033/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 9, art: "tempo", title: "빠르기말", duration: "2:38", url: "https://www.douclass.com/viewer/SPC_P/30330", img: "https://s3.douclass.com/pub/2024/thumb/2407/9sby6rxiyc2e.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/eb/ac/803c4d71d165be9f77583046fcec5bdf5795/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 10, art: "scale", title: "장음계", duration: "1:57", url: "https://www.douclass.com/viewer/SPC_P/30333", img: "https://s3.douclass.com/pub/2024/thumb/2407/n14pn3s7hbk1.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/3f/c6/407369276abfd5823a99b34d3e8be72f2fce/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 11, art: "scale", title: "단음계", duration: "3:52", url: "https://www.douclass.com/viewer/SPC_P/30338", img: "https://s3.douclass.com/pub/2024/thumb/2407/s3giwsi4aeg3.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/78/40/d95946cc12d28759f6a50bfb6ecd003816f0/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 12, art: "chord", title: "화음", duration: "1:37", url: "https://www.douclass.com/viewer/SPC_P/30342", img: "https://s3.douclass.com/pub/2024/thumb/2407/7ej3egb6ubak.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/62/31/6ef55157461fb3ea593e8440afe866ac8b3e/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 13, art: "form", title: "음악의 형식", duration: "2:41", url: "https://www.douclass.com/viewer/SPC_P/30346", img: "https://s3.douclass.com/pub/2024/thumb/2407/0ju89ckc33sb.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/7d/f4/69d70e2b1fa196e34e04bbb30fddf6752aff/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 14, art: "form", title: "메기고 받는 형식", duration: "2:05", url: "https://www.douclass.com/viewer/SPC_P/43114", img: "https://s3.douclass.com/pub/2025/thumb/2506/u34kj2ht15z8.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/ae/0e/cf236890caa0726fafc3377dc8226b68afd3/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 15, art: "meter", title: "한배", duration: "1:49", url: "https://www.douclass.com/viewer/SPC_P/43115", img: "https://s3.douclass.com/pub/2025/thumb/2506/r0zgnupo55fo.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/a5/49/0cccd60d87adab8c5ca339e3c2fb7f5a5f49/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 16, art: "tori", title: "시김새", duration: "2:07", url: "https://www.douclass.com/viewer/SPC_P/43116", img: "https://s3.douclass.com/pub/2025/thumb/2506/0xo0qtl3wt20.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/7e/36/23b7998a2c9acb945bd8de34336bc153829f/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 17, art: "janggu", title: "장구 장단의 부호와 구음", duration: "2:50", url: "https://www.douclass.com/viewer/SPC_P/43117", img: "https://s3.douclass.com/pub/2025/thumb/2506/2k14xih3be9m.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/a1/56/8ce1b6a4d580ee9d8a1a105b7ddbed6dfe30/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 18, art: "janggu", title: "여러 가지 장단", duration: "3:38", url: "https://www.douclass.com/viewer/SPC_P/43118", img: "https://s3.douclass.com/pub/2025/thumb/2506/ya8to2x6vgoz.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/31/c0/5b16c4d2b605683221c3c29752aa963d98c2/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 19, art: "jeongganbo", title: "율명", duration: "2:15", url: "https://www.douclass.com/viewer/SPC_P/43119", img: "https://s3.douclass.com/pub/2025/thumb/2506/wei894nto9bx.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/b8/50/47e3869961b305b2add7160aec5e74aeec68/hview.html", sheetLabel: "수업용 PPT" },
  { format: "anim", no: 20, art: "tori", title: "토리", duration: "5:31", url: "https://www.douclass.com/viewer/SPC_P/43120", img: "https://s3.douclass.com/pub/2025/thumb/2506/s1eki49mbscm.png", sheetUrl: "https://hermes.douclass.com/hermes/resource/store/67/59/2535f2a5be287d6371b23aebe3689d72ef44/hview.html", sheetLabel: "수업용 PPT" },
  { format: "sheet", scope: "기초 이론집", no: 1, art: "staff", title: "오선과 음자리표", url: "https://www.douclass.com/viewer/SPC_P/43121", img: "https://s3.douclass.com/pub/2025/thumb/2506/qu86xm7xmlm5.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 2, art: "notes", title: "음표와 쉼표", url: "https://www.douclass.com/viewer/SPC_P/43122", img: "https://s3.douclass.com/pub/2025/thumb/2506/evz73nu5xvyr.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 3, art: "repeat", title: "반복 기호", url: "https://www.douclass.com/viewer/SPC_P/43123", img: "https://s3.douclass.com/pub/2025/thumb/2506/7lomdev3xx26.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 4, art: "meter", title: "박자와 세로줄", url: "https://www.douclass.com/viewer/SPC_P/43124", img: "https://s3.douclass.com/pub/2025/thumb/2506/ftuv59zn6c9h.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 5, art: "pitch", title: "음이름과 계이름", url: "https://www.douclass.com/viewer/SPC_P/43125", img: "https://s3.douclass.com/pub/2025/thumb/2506/1zuuvfe55eth.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 6, art: "accidental", title: "임시표", url: "https://www.douclass.com/viewer/SPC_P/43126", img: "https://s3.douclass.com/pub/2025/thumb/2506/92cg5xodtqji.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 7, art: "symbols", title: "다양한 음악 기호", url: "https://www.douclass.com/viewer/SPC_P/43127", img: "https://s3.douclass.com/pub/2025/thumb/2506/4uczb1boignc.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 8, art: "dynamics", title: "셈여림표", url: "https://www.douclass.com/viewer/SPC_P/43128", img: "https://s3.douclass.com/pub/2025/thumb/2506/xy2nvog658j3.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 9, art: "tempo", title: "빠르기말", url: "https://www.douclass.com/viewer/SPC_P/43129", img: "https://s3.douclass.com/pub/2025/thumb/2506/l7c3omuqkurx.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 10, art: "scale", title: "장음계", url: "https://www.douclass.com/viewer/SPC_P/43130", img: "https://s3.douclass.com/pub/2025/thumb/2506/ek5yon3uls7m.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 11, art: "scale", title: "단음계", url: "https://www.douclass.com/viewer/SPC_P/43131", img: "https://s3.douclass.com/pub/2025/thumb/2506/7xzpyvcgz93q.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 12, art: "chord", title: "화음", url: "https://www.douclass.com/viewer/SPC_P/43132", img: "https://s3.douclass.com/pub/2025/thumb/2506/pnul8wp5fljp.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 13, art: "form", title: "음악의 형식", url: "https://www.douclass.com/viewer/SPC_P/43133", img: "https://s3.douclass.com/pub/2025/thumb/2506/n4rwsgj2tsc3.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 14, art: "form", title: "메기고 받는 형식", url: "https://www.douclass.com/viewer/SPC_P/43134", img: "https://s3.douclass.com/pub/2025/thumb/2506/97sdotycmfmm.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 15, art: "meter", title: "한배", url: "https://www.douclass.com/viewer/SPC_P/43135", img: "https://s3.douclass.com/pub/2025/thumb/2506/xbq2rsrpxuoq.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 16, art: "tori", title: "시김새", url: "https://www.douclass.com/viewer/SPC_P/43136", img: "https://s3.douclass.com/pub/2025/thumb/2506/ali3rdlzjawn.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 17, art: "janggu", title: "장구", url: "https://www.douclass.com/viewer/SPC_P/43137", img: "https://s3.douclass.com/pub/2025/thumb/2506/y81xni5u31i0.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 18, art: "janggu", title: "장단", url: "https://www.douclass.com/viewer/SPC_P/43138", img: "https://s3.douclass.com/pub/2025/thumb/2506/r2jh8zd7cvpy.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 19, art: "jeongganbo", title: "율명과 정간보", url: "https://www.douclass.com/viewer/SPC_P/43139", img: "https://s3.douclass.com/pub/2025/thumb/2506/v6ln7kg4lzjk.jpg" },
  { format: "sheet", scope: "기초 이론집", no: 20, art: "tori", title: "토리", url: "https://www.douclass.com/viewer/SPC_P/43140", img: "https://s3.douclass.com/pub/2025/thumb/2506/epl34igbsuhy.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 1, art: "staff", title: "오선과 음자리표", url: "https://www.douclass.com/viewer/SPC_P/43141", img: "https://s3.douclass.com/pub/2025/thumb/2506/f73f2dxl4rcd.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 2, art: "notes", title: "음표와 쉼표", url: "https://www.douclass.com/viewer/SPC_P/43142", img: "https://s3.douclass.com/pub/2025/thumb/2506/ib6iwqraie0a.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 3, art: "repeat", title: "도돌이표", url: "https://www.douclass.com/viewer/SPC_P/43143", img: "https://s3.douclass.com/pub/2025/thumb/2506/9q4dypxybyv9.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 4, art: "meter", title: "박자와 세로줄", url: "https://www.douclass.com/viewer/SPC_P/43144", img: "https://s3.douclass.com/pub/2025/thumb/2506/5s62u57wr9if.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 5, art: "pitch", title: "음이름과 계이름", url: "https://www.douclass.com/viewer/SPC_P/43145", img: "https://s3.douclass.com/pub/2025/thumb/2506/mzmk63213c2e.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 6, art: "dynamics", title: "빠르기말과 셈여림표", url: "https://www.douclass.com/viewer/SPC_P/43146", img: "https://s3.douclass.com/pub/2025/thumb/2506/ow3jmvpibk00.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 7, art: "scale", title: "음계와 조", url: "https://www.douclass.com/viewer/SPC_P/43147", img: "https://s3.douclass.com/pub/2025/thumb/2506/346ojn770s9a.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 8, art: "chord", title: "화음", url: "https://www.douclass.com/viewer/SPC_P/43148", img: "https://s3.douclass.com/pub/2025/thumb/2506/pcz07wkwghda.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 9, art: "janggu", title: "장구 장단", url: "https://www.douclass.com/viewer/SPC_P/43149", img: "https://s3.douclass.com/pub/2025/thumb/2506/deu1lpy0b7hz.jpg" },
  { format: "sheet", scope: "수업 도움 자료집", no: 10, art: "jeongganbo", title: "율명과 정간보", url: "https://www.douclass.com/viewer/SPC_P/43150", img: "https://s3.douclass.com/pub/2025/thumb/2506/1rnexgnzmkz0.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 1, art: "staff", title: "오선과 음자리표", url: "https://www.douclass.com/viewer/SPC_P/43151", img: "https://s3.douclass.com/pub/2025/thumb/2506/fe0y89iyzw7c.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 2, art: "repeat", title: "반복 기호", url: "https://www.douclass.com/viewer/SPC_P/43152", img: "https://s3.douclass.com/pub/2025/thumb/2506/cpgfglk3r3fk.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 3, art: "notes", title: "음표와 쉼표", url: "https://www.douclass.com/viewer/SPC_P/43153", img: "https://s3.douclass.com/pub/2025/thumb/2506/7co6yuxkt744.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 4, art: "accidental", title: "임시표", url: "https://www.douclass.com/viewer/SPC_P/43154", img: "https://s3.douclass.com/pub/2025/thumb/2506/ateiq8f57agv.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 5, art: "meter", title: "박자", url: "https://www.douclass.com/viewer/SPC_P/43155", img: "https://s3.douclass.com/pub/2025/thumb/2506/5nwunttnbogq.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 6, art: "dynamics", title: "셈여림표", url: "https://www.douclass.com/viewer/SPC_P/43156", img: "https://s3.douclass.com/pub/2025/thumb/2506/nmujd1ctzg4i.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 7, art: "tempo", title: "빠르기말", url: "https://www.douclass.com/viewer/SPC_P/43157", img: "https://s3.douclass.com/pub/2026/thumb/2607/g3m34qrrh8u5.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 8, art: "pitch", title: "음이름과 계이름", url: "https://www.douclass.com/viewer/SPC_P/43160", img: "https://s3.douclass.com/pub/2025/thumb/2506/ofgl70x5a1sb.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 9, art: "scale", title: "장음계", url: "https://www.douclass.com/viewer/SPC_P/43161", img: "https://s3.douclass.com/pub/2025/thumb/2506/l7nvmegqvouc.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 10, art: "scale", title: "단음계", url: "https://www.douclass.com/viewer/SPC_P/43162", img: "https://s3.douclass.com/pub/2025/thumb/2506/spor3dhdqisf.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 11, art: "chord", title: "화음", url: "https://www.douclass.com/viewer/SPC_P/43163", img: "https://s3.douclass.com/pub/2025/thumb/2506/11ktcdfrt0p0.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 12, art: "symbols", title: "다양한 음악 기호", url: "https://www.douclass.com/viewer/SPC_P/43164", img: "https://s3.douclass.com/pub/2025/thumb/2506/v4lcw6ic05tf.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 13, art: "form", title: "음악의 형식", url: "https://www.douclass.com/viewer/SPC_P/43165", img: "https://s3.douclass.com/pub/2025/thumb/2506/68m4rqvlyun9.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 14, art: "form", title: "메기고 받는 형식", url: "https://www.douclass.com/viewer/SPC_P/43166", img: "https://s3.douclass.com/pub/2025/thumb/2506/4msx5o8hpjfd.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 15, art: "meter", title: "한배", url: "https://www.douclass.com/viewer/SPC_P/43167", img: "https://s3.douclass.com/pub/2025/thumb/2506/kh8pluf2ith5.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 16, art: "tori", title: "시김새", url: "https://www.douclass.com/viewer/SPC_P/43168", img: "https://s3.douclass.com/pub/2025/thumb/2506/aapethewji12.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 17, art: "janggu", title: "장구", url: "https://www.douclass.com/viewer/SPC_P/43169", img: "https://s3.douclass.com/pub/2025/thumb/2506/7ye578cqguno.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 18, art: "janggu", title: "장단", url: "https://www.douclass.com/viewer/SPC_P/43170", img: "https://s3.douclass.com/pub/2025/thumb/2506/d5z16peik8qf.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 19, art: "tori", title: "토리", url: "https://www.douclass.com/viewer/SPC_P/43171", img: "https://s3.douclass.com/pub/2025/thumb/2506/dne157r6cahi.jpg" },
  { format: "sheet", scope: "그림 개념 용어집", no: 20, art: "jeongganbo", title: "율명", url: "https://www.douclass.com/viewer/SPC_P/43172", img: "https://s3.douclass.com/pub/2025/thumb/2506/r4077dkxax2x.jpg" },
  { format: "game", scope: "ZEP 퀴즈", no: 1, art: "notes", title: "음표", url: "https://quiz.zep.us/play/7R01ZK", img: "https://s3.douclass.com/pub/2026/thumb/2608/tyvabhktrgo9.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 2, art: "notes", title: "음표의 덧셈과 뺄셈", url: "https://quiz.zep.us/play/GpLwQm", img: "https://s3.douclass.com/pub/2026/thumb/2608/f91lotkzfl9f.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 3, art: "notes", title: "쉼표", url: "https://quiz.zep.us/play/WaQ7eq", img: "https://s3.douclass.com/pub/2026/thumb/2608/us7so60o0q1q.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 4, art: "notes", title: "쉼표의 덧셈과 뺄셈", url: "https://quiz.zep.us/play/zZeLGN", img: "https://s3.douclass.com/pub/2026/thumb/2608/agwxn5jkr65s.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 5, art: "recorder", title: "리코더", url: "https://quiz.zep.us/play/Z90Gra", img: "https://s3.douclass.com/pub/2026/thumb/2608/ff62ey136ksm.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 6, art: "janggu", title: "장구", url: "https://quiz.zep.us/play/bLbzrL", img: "https://s3.douclass.com/pub/2026/thumb/2608/ava0q1r6rn47.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 7, art: "jeongganbo", title: "단소와 정간보", url: "https://quiz.zep.us/play/gGegJ5", img: "https://s3.douclass.com/pub/2026/thumb/2608/6xzrjoze1ao0.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 8, art: "etiquette", title: "음악회 예절", url: "https://quiz.zep.us/play/vJM159", img: "https://s3.douclass.com/pub/2026/thumb/2608/gyekw4jtfkd1.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 9, art: "tori", title: "토리", url: "https://quiz.zep.us/play/XWQaoK", img: "https://s3.douclass.com/pub/2026/thumb/2608/0wmbbh6e4elg.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 10, art: "etiquette", title: "저작권과 디지털 공간", url: "https://quiz.zep.us/play/lpBoXK", img: "https://s3.douclass.com/pub/2026/thumb/2608/u3gyne4pkhhk.png" },
  { format: "game", scope: "ZEP 퀴즈", no: 11, art: "form", title: "음악극", url: "https://quiz.zep.us/play/GpAlJQ", img: "https://s3.douclass.com/pub/2026/thumb/2608/73tprax4efil.png" },
  { format: "game", scope: "음악 메모리 게임", no: 1, art: "notes", title: "음표 길이", url: "https://ele.douclass.com/viewer/TXB_C/313738", img: "https://s3.douclass.com/pub/2026/thumb/2608/ot6oiu4j4zk1.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 2, art: "notes", title: "음표 이름", url: "https://ele.douclass.com/viewer/TXB_C/313739", img: "https://s3.douclass.com/pub/2026/thumb/2608/gn3xl4wew8bz.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 3, art: "notes", title: "쉼표 길이", url: "https://ele.douclass.com/viewer/TXB_C/316462", img: "https://s3.douclass.com/pub/2026/thumb/2608/y5izvs9ekuvi.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 4, art: "notes", title: "쉼표 이름", url: "https://ele.douclass.com/viewer/TXB_C/316463", img: "https://s3.douclass.com/pub/2026/thumb/2608/69megmrmjl0c.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 5, art: "meter", title: "박자", url: "https://ele.douclass.com/viewer/TXB_C/316464", img: "https://s3.douclass.com/pub/2026/thumb/2608/uf3910jwi9j9.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 6, art: "meter", title: "지휘", url: "https://ele.douclass.com/viewer/TXB_C/316465", img: "https://s3.douclass.com/pub/2026/thumb/2608/7dx70d4i6e0p.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 7, art: "pitch", title: "음이름", url: "https://ele.douclass.com/viewer/TXB_C/316466", img: "https://s3.douclass.com/pub/2026/thumb/2608/o5xh3aleg2k5.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 8, art: "pitch", title: "계이름", url: "https://ele.douclass.com/viewer/TXB_C/313740", img: "https://s3.douclass.com/pub/2026/thumb/2608/2vgw5gwax2zn.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 9, art: "pitch", title: "손기호", url: "https://ele.douclass.com/viewer/TXB_C/313741", img: "https://s3.douclass.com/pub/2026/thumb/2608/v24h9w41vrty.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 10, art: "accidental", title: "임시표", url: "https://ele.douclass.com/viewer/TXB_C/316472", img: "https://s3.douclass.com/pub/2026/thumb/2608/j2xuvza4r46d.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 11, art: "dynamics", title: "셈여림표 뜻", url: "https://ele.douclass.com/viewer/TXB_C/313742", img: "https://s3.douclass.com/pub/2026/thumb/2608/uwcx2i5qssbv.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 12, art: "dynamics", title: "셈여림표 이름", url: "https://ele.douclass.com/viewer/TXB_C/313743", img: "https://s3.douclass.com/pub/2026/thumb/2608/rx7tbr9j9x6e.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 13, art: "chord", title: "다장조 주요 3화음", url: "https://ele.douclass.com/viewer/TXB_C/316467", img: "https://s3.douclass.com/pub/2026/thumb/2608/bff9zqia4u3o.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 14, art: "chord", title: "사장조 주요 3화음", url: "https://ele.douclass.com/viewer/TXB_C/316468", img: "https://s3.douclass.com/pub/2026/thumb/2608/bjvq5ctwy8cm.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 15, art: "chord", title: "바장조 주요 3화음", url: "https://ele.douclass.com/viewer/TXB_C/316469", img: "https://s3.douclass.com/pub/2026/thumb/2608/avviggdh5zbm.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 16, art: "tori", title: "시김새", url: "https://ele.douclass.com/viewer/TXB_C/316471", img: "https://s3.douclass.com/pub/2026/thumb/2608/pdnwr05i10x2.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 17, art: "tori", title: "토리와 지역", url: "https://ele.douclass.com/viewer/TXB_C/316473", img: "https://s3.douclass.com/pub/2026/thumb/2608/dgi4s2p4v0bv.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 18, art: "tori", title: "토리와 대표 민요", url: "https://ele.douclass.com/viewer/TXB_C/316474", img: "https://s3.douclass.com/pub/2026/thumb/2608/9ekt7racea3a.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 19, art: "recorder", title: "리코더 운지법", url: "https://ele.douclass.com/viewer/TXB_C/313744", img: "https://s3.douclass.com/pub/2026/thumb/2608/jer7snht1m8a.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 20, art: "janggu", title: "장구 부호", url: "https://ele.douclass.com/viewer/TXB_C/313745", img: "https://s3.douclass.com/pub/2026/thumb/2608/pxvgk2z4oqyc.jpg" },
  { format: "game", scope: "음악 메모리 게임", no: 21, art: "jeongganbo", title: "율명", url: "https://ele.douclass.com/viewer/TXB_C/313746", img: "https://s3.douclass.com/pub/2026/thumb/2608/2viq7jtzyvgk.jpg" },
];

const hallView = document.querySelector("#musichall-view");
const historyView = document.querySelector("#history-view");
const hallGrid = document.querySelector("#hall-grid");
const historyGrid = document.querySelector("#history-grid");
const historyState = { format: "ppt", scope: "all" };

function renderHall() {
  hallGrid.innerHTML = hallCategories.map((item) => {
    const inner = `<span class="hall-label">${item.label}</span><span class="hall-desc">${item.desc}</span><span class="hall-arrow" aria-hidden="true">→</span>`;
    const imageStyle = ` style="--hall-image: url('${item.image}')"`;
    return item.href
      ? `<li class="hall-item tone-${item.tone}"><a href="${item.href}"${imageStyle}>${inner}</a></li>`
      : `<li class="hall-item tone-${item.tone} is-soon"><span class="hall-blob"${imageStyle} aria-disabled="true">${inner}<span class="hall-soon">준비 중</span></span></li>`;
  }).join("");
}

const FAV_KEY = "music-hall-favorites";

function itemId(item) {
  return `${item.format}:${item.scope}:${item.badge || item.no}:${item.title}`;
}

function isViewerLink(url) {
  return /douclass\.com\/viewer\/|hermes\.douclass\.com/.test(url || "");
}

function sheetAction(url) {
  return isViewerLink(url) ? "열기" : "내려받기";
}

function coverImg(item) {
  // 두클래스 원본 썸네일. 못 불러오면 지워져서 밑에 깔린 그림이 그대로 보인다.
  return item && item.img
    ? `<img class="cover-shot" src="${item.img}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
    : "";
}

function readFavorites() {
  try { return new Set(JSON.parse(localStorage.getItem(FAV_KEY)) || []); }
  catch { return new Set(); }
}

function writeFavorites(set) {
  try { localStorage.setItem(FAV_KEY, JSON.stringify([...set])); } catch { /* 저장 불가 환경 */ }
}

const historySelection = new Set();

function renderHistory() {
  const list = historyItems.filter((item) => item.format === historyState.format && (historyState.scope === "all" || item.scope === historyState.scope));
  const favorites = readFavorites();
  document.querySelector("#history-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#history-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === historyState.format)));
  document.querySelectorAll("#history-view .history-tabs button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === historyState.scope)));

  historyGrid.innerHTML = list.map((item, index) => {
    const id = itemId(item);
    const key = `${historyState.format}-${historyState.scope}-${index}`;
    const caption = item.badge ? `[${item.badge}]${item.title}` : `${item.no}. ${item.title}`;
    const overlay = item.format === "ppt"
      ? `<span class="thumb-caption"><span class="thumb-title">${item.title}</span><span class="thumb-period">(${item.period})</span></span>`
      : `<span class="thumb-play" aria-hidden="true">▶</span><span class="thumb-time">${item.duration}</span>`;
    const thumb = `${historyArtFor(item)}${coverImg(item)}<span class="thumb-overlay format-${item.format}">${overlay}</span>`;
    const open = item.url
      ? `<a class="history-open" href="${item.url}" target="_blank" rel="noopener"><span class="history-thumb scope-${item.scope}">${thumb}</span></a>`
      : `<span class="history-open is-soon" aria-disabled="true"><span class="history-thumb scope-${item.scope}">${thumb}</span></span>`;
    const picked = historyGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const menuItems = [
      item.url ? `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="학생용 링크">↗ 학생에게 공유하기</button>` : "",
      item.teacherUrl ? `<button role="menuitem" type="button" data-share="${item.teacherUrl}" data-share-label="교사용 링크">↗ 선생님에게 공유하기</button>` : "",
    ].filter(Boolean).join("") || `<span role="menuitem" aria-disabled="true" class="is-soon">공유할 링크 없음</span>`;
    return `
      <li class="history-card${item.url ? "" : " is-soon"}${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${caption} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${caption} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${caption}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${caption} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
      </li>`;
  }).join("");
  syncToolbar(historyGrid);
}

function syncToolbar(grid) {
  const cfg = grid._cfg;
  if (!cfg) return;
  const boxes = [...grid.querySelectorAll("[data-pick]")];
  const picked = boxes.filter((box) => box.checked);
  cfg.selectAll.checked = boxes.length > 0 && picked.length === boxes.length;
  cfg.selectAll.indeterminate = picked.length > 0 && picked.length < boxes.length;
  cfg.favTool.disabled = picked.length === 0;
  cfg.favTool.textContent = picked.length ? `♡ 찜하기 (${picked.length})` : "♡ 찜하기";
}

function closeMenusIn(grid, except) {
  grid.querySelectorAll(".history-menu").forEach((menu) => {
    if (menu === except) return;
    menu.hidden = true;
    menu.parentElement.querySelector(".history-kebab").setAttribute("aria-expanded", "false");
  });
}

function closeAllMenus() {
  document.querySelectorAll(".history-menu").forEach((menu) => {
    menu.hidden = true;
    menu.parentElement.querySelector(".history-kebab")?.setAttribute("aria-expanded", "false");
  });
}

function flashToast(message) {
  let toast = document.querySelector("#history-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "history-toast";
    toast.className = "history-toast";
    toast.setAttribute("role", "status");
    document.body.append(toast);
  }
  toast.textContent = message;
  toast.classList.add("is-on");
  clearTimeout(flashToast.timer);
  flashToast.timer = setTimeout(() => toast.classList.remove("is-on"), 2200);
}

async function shareLink(url, label) {
  try {
    await navigator.clipboard.writeText(url);
    flashToast(`${label}를 복사했습니다.`);
  } catch {
    const field = document.createElement("textarea");
    field.value = url;
    field.setAttribute("readonly", "");
    field.style.cssText = "position:fixed;opacity:0";
    document.body.append(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    flashToast(ok ? `${label}를 복사했습니다.` : "복사에 실패했습니다. 주소를 직접 복사해 주세요.");
  }
}

function toggleFavorite(grid, id) {
  const favorites = readFavorites();
  const on = !favorites.has(id);
  if (on) favorites.add(id); else favorites.delete(id);
  writeFavorites(favorites);
  const button = grid.querySelector(`[data-like="${CSS.escape(id)}"]`);
  button.classList.toggle("is-on", on);
  button.setAttribute("aria-pressed", String(on));
  button.textContent = on ? "♥" : "♡";
  return on;
}

function wireResourceGrid(grid, { selectAll, favTool, rerender }) {
  grid._cfg = { selectAll, favTool, selection: new Set(), rerender };

  grid.addEventListener("change", (event) => {
    const box = event.target.closest("[data-pick]");
    if (!box) return;
    if (box.checked) grid._cfg.selection.add(box.dataset.pick);
    else grid._cfg.selection.delete(box.dataset.pick);
    box.closest(".history-card, .listening-row").classList.toggle("is-picked", box.checked);
    syncToolbar(grid);
  });

  grid.addEventListener("click", (event) => {
    const like = event.target.closest("[data-like]");
    if (like) {
      flashToast(toggleFavorite(grid, like.dataset.like) ? "찜 목록에 담았습니다." : "찜을 해제했습니다.");
      return;
    }
    const more = event.target.closest("[data-more]");
    if (more) {
      const panel = document.querySelector(`#${CSS.escape(more.getAttribute("aria-controls"))}`);
      const open = panel.hidden;
      panel.hidden = !open;
      more.setAttribute("aria-expanded", String(open));
      return;
    }
    const kebab = event.target.closest(".history-kebab");
    if (kebab) {
      const menu = document.querySelector(`#${CSS.escape(kebab.getAttribute("aria-controls"))}`);
      const open = menu.hidden;
      closeMenusIn(grid, menu);
      menu.hidden = !open;
      kebab.setAttribute("aria-expanded", String(open));
      if (open) menu.querySelector("[role=menuitem]:not([aria-disabled])")?.focus();
      return;
    }
    const share = event.target.closest("[data-share]");
    if (share) {
      shareLink(share.dataset.share, share.dataset.shareLabel);
      closeMenusIn(grid);
      return;
    }
    if (!event.target.closest(".history-menu")) closeMenusIn(grid);
  });

  selectAll.addEventListener("change", (event) => {
    grid.querySelectorAll("[data-pick]").forEach((box) => {
      box.checked = event.target.checked;
      if (box.checked) grid._cfg.selection.add(box.dataset.pick);
      else grid._cfg.selection.delete(box.dataset.pick);
      box.closest(".history-card, .listening-row").classList.toggle("is-picked", box.checked);
    });
    syncToolbar(grid);
  });

  favTool.addEventListener("click", () => {
    const picked = [...grid.querySelectorAll("[data-pick]")].filter((box) => box.checked);
    if (!picked.length) return;
    const favorites = readFavorites();
    picked.forEach((box) => favorites.add(box.dataset.pick));
    writeFavorites(favorites);
    grid._cfg.rerender();
    flashToast(`${picked.length}개를 찜 목록에 담았습니다.`);
  });
}

document.addEventListener("click", (event) => {
  if (!event.target.closest(".history-card")) closeAllMenus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllMenus();
});

wireResourceGrid(historyGrid, {
  selectAll: document.querySelector("#history-select-all"),
  favTool: document.querySelector('#history-view [data-tool="favorite"]'),
  rerender: renderHistory,
});

/* 작곡가 일러스트 — 시대별 머리 모양과 옷깃으로 구분한 흉상 */
const composerArt = {
  medieval: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><path d="M18 22a3 3 0 100 6 3 3 0 000-6zM24 23v-9l8-2v9"/><circle cx="21" cy="52" r="3"/><path d="M24 52v-8l7-2v8"/></g><path class="a-fill" d="M64 78c1-13 10-20 22-20s21 7 22 20z"/><path class="a-fill" d="M70 34c0-12 7-19 16-19s16 7 16 19c0 10-7 17-16 17s-16-7-16-17z"/><path class="a-hair" d="M68 36c0-16 8-24 18-24s18 8 18 24c-3-8-9-11-18-11s-15 3-18 11z"/><g class="a-line"><path d="M64 78c1-13 10-20 22-20s21 7 22 20"/><path d="M70 34c0-12 7-19 16-19s16 7 16 19c0 10-7 17-16 17s-16-7-16-17z"/><path d="M68 36c0-16 8-24 18-24s18 8 18 24c-3-8-9-11-18-11s-15 3-18 11z"/><path d="M78 58l8 8 8-8"/><path d="M86 66v12"/></g></svg>`,
  renaissance: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="26" r="3"/><path d="M23 26v-9l8-2v9"/><circle cx="22" cy="54" r="3"/><path d="M25 54v-8"/></g><path class="a-fill" d="M64 78c1-13 10-20 22-20s21 7 22 20z"/><path class="a-fill" d="M72 38c0-11 6-18 14-18s14 7 14 18c0 10-6 16-14 16s-14-6-14-16z"/><path class="a-hair" d="M66 24c0-6 9-10 20-10s20 4 20 10c0 3-9 5-20 5s-20-2-20-5z"/><g class="a-line"><path d="M64 78c1-13 10-20 22-20s21 7 22 20"/><path d="M72 38c0-11 6-18 14-18s14 7 14 18c0 10-6 16-14 16s-14-6-14-16z"/><path d="M66 24c0-6 9-10 20-10s20 4 20 10c0 3-9 5-20 5s-20-2-20-5z"/><path d="M72 60q14 8 28 0"/><path d="M86 54v6"/></g></svg>`,
  baroque: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="24" r="3"/><path d="M23 24v-10l9-2v10"/><circle cx="29" cy="22" r="3"/><circle cx="21" cy="54" r="3"/><path d="M24 54v-9l8-2v9"/></g><path class="a-fill" d="M62 78c1-13 11-20 24-20s23 7 24 20z"/><path class="a-fill" d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path class="a-hair" d="M66 34c0-16 8-24 20-24s20 8 20 24c0 10-3 18-7 18-3 0-4-6-4-16 0-8-3-12-9-12s-9 4-9 12c0 10-1 16-4 16-4 0-7-8-7-18z"/><g class="a-line"><path d="M62 78c1-13 11-20 24-20s23 7 24 20"/><path d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path d="M66 34c0-16 8-24 20-24s20 8 20 24c0 10-3 18-7 18-3 0-4-6-4-16 0-8-3-12-9-12s-9 4-9 12c0 10-1 16-4 16-4 0-7-8-7-18z"/><circle cx="70" cy="44" r="5"/><circle cx="102" cy="44" r="5"/><path d="M80 58l6 7 6-7"/></g></svg>`,
  classical: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="26" r="3"/><path d="M23 26v-10l9-2v10"/><circle cx="21" cy="55" r="3"/><path d="M24 55v-9"/></g><path class="a-fill" d="M62 78c1-13 11-20 24-20s23 7 24 20z"/><path class="a-fill" d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path class="a-hair" d="M68 30c0-13 8-20 18-20s18 7 18 20c0 5-2 8-5 8-2 0-3-4-3-9 0-6-4-9-10-9s-10 3-10 9c0 5-1 9-3 9-3 0-5-3-5-8z"/><g class="a-line"><path d="M62 78c1-13 11-20 24-20s23 7 24 20"/><path d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path d="M68 30c0-13 8-20 18-20s18 7 18 20c0 5-2 8-5 8-2 0-3-4-3-9 0-6-4-9-10-9s-10 3-10 9c0 5-1 9-3 9-3 0-5-3-5-8z"/><circle cx="70" cy="40" r="5"/><circle cx="102" cy="40" r="5"/><circle cx="70" cy="49" r="5"/><circle cx="102" cy="49" r="5"/><path d="M78 58l8 6 8-6"/><path d="M86 64v14"/></g></svg>`,
  romantic: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="24" r="3"/><path d="M23 24v-11l10-2v11"/><circle cx="30" cy="22" r="3"/><circle cx="22" cy="56" r="3"/><path d="M25 56v-9"/></g><path class="a-fill" d="M62 78c1-13 11-20 24-20s23 7 24 20z"/><path class="a-fill" d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path class="a-hair" d="M68 32c-2-8 0-14 4-18 3-3 8-4 14-4s11 1 14 4c4 4 6 10 4 18-2-6-5-9-8-11 1 4 0 7-2 9-1-6-5-9-8-9s-7 3-8 9c-2-2-3-5-2-9-3 2-6 5-8 11z"/><g class="a-line"><path d="M62 78c1-13 11-20 24-20s23 7 24 20"/><path d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path d="M68 32c-2-8 0-14 4-18 3-3 8-4 14-4s11 1 14 4c4 4 6 10 4 18-2-6-5-9-8-11 1 4 0 7-2 9-1-6-5-9-8-9s-7 3-8 9c-2-2-3-5-2-9-3 2-6 5-8 11z"/><path d="M78 58q8 10 16 0"/><path d="M86 62v16"/></g></svg>`,
  nationalist: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="25" r="3"/><path d="M23 25v-10l9-2v10"/><circle cx="21" cy="55" r="3"/><path d="M24 55v-9l8-2v9"/></g><path class="a-fill" d="M62 78c1-13 11-20 24-20s23 7 24 20z"/><path class="a-fill" d="M74 36c0-11 5-17 12-17s12 6 12 17c0 6-2 11-5 13-2 6-5 9-7 9s-5-3-7-9c-3-2-5-7-5-13z"/><path class="a-hair" d="M69 30c0-13 7-20 17-20s17 7 17 20c-3-7-9-10-17-10s-14 3-17 10z"/><g class="a-line"><path d="M62 78c1-13 11-20 24-20s23 7 24 20"/><path d="M74 36c0-11 5-17 12-17s12 6 12 17c0 6-2 11-5 13-2 6-5 9-7 9s-5-3-7-9c-3-2-5-7-5-13z"/><path d="M69 30c0-13 7-20 17-20s17 7 17 20c-3-7-9-10-17-10s-14 3-17 10z"/><path d="M79 40h4M89 40h4"/><path d="M86 58v20"/><path d="M70 68l6 4M102 68l-6 4"/></g></svg>`,
  modernist: `<svg class="history-art" viewBox="-12 -6 150 96" aria-hidden="true"><g class="c-note"><circle cx="20" cy="26" r="3"/><path d="M23 26v-10l9-2v10"/><path d="M20 54h12M20 58h8"/></g><path class="a-fill" d="M62 78c1-13 11-20 24-20s23 7 24 20z"/><path class="a-fill" d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path class="a-hair" d="M71 26c2-9 8-13 15-13s13 4 15 13c-4-4-9-6-15-6s-11 2-15 6z"/><g class="a-line"><path d="M62 78c1-13 11-20 24-20s23 7 24 20"/><path d="M74 38c0-11 5-17 12-17s12 6 12 17c0 9-5 15-12 15s-12-6-12-15z"/><path d="M71 26c2-9 8-13 15-13s13 4 15 13c-4-4-9-6-15-6s-11 2-15 6z"/><circle cx="79" cy="36" r="5"/><circle cx="93" cy="36" r="5"/><path d="M84 36h4M74 35l-3-1M98 35l3-1"/><path d="M78 58l8 8 8-8M86 66v12"/></g></svg>`,
  world: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><rect class="a-fill" x="14" y="12" width="92" height="56" rx="6"/><path class="a-accent" d="M14 18a6 6 0 016-6h80a6 6 0 016 6v6H14z"/><g class="a-line"><rect x="14" y="12" width="92" height="56" rx="6"/><path d="M14 24h92"/><circle cx="22" cy="18" r="2"/><circle cx="29" cy="18" r="2"/><circle cx="36" cy="18" r="2"/></g><g class="a-line"><circle cx="60" cy="42" r="13"/><path d="M47 42h26M60 29c6 6 6 20 0 26M60 29c-6 6-6 20 0 26"/></g></svg>`,
  korean: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><rect class="a-fill" x="14" y="12" width="92" height="56" rx="6"/><path class="a-accent" d="M14 18a6 6 0 016-6h80a6 6 0 016 6v6H14z"/><g class="a-line"><rect x="14" y="12" width="92" height="56" rx="6"/><path d="M14 24h92"/><circle cx="22" cy="18" r="2"/><circle cx="29" cy="18" r="2"/><circle cx="36" cy="18" r="2"/></g><path class="a-fill" d="M40 52h40l-4 10H44z"/><g class="a-line"><path d="M40 52h40l-4 10H44z"/><path d="M43 56h34M44 60h32"/><path d="M60 34v18M52 38l8-6 8 6"/><circle cx="60" cy="30" r="4"/></g></svg>`,
  textbook: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M16 18h40q4 0 4 4v42q0-4-4-4H16z"/><path class="a-fill" d="M104 18H64q-4 0-4 4v42q0-4 4-4h40z"/><g class="a-line"><path d="M16 18h40q4 0 4 4v42q0-4-4-4H16zM104 18H64q-4 0-4 4v42q0-4 4-4h40z"/><path d="M60 22v42"/><path d="M22 30h28M22 36h28M22 42h22"/><path d="M70 48h28"/><circle cx="74" cy="46" r="3"/><path d="M77 46v-9l9-2v9"/><circle cx="83" cy="44" r="3"/><path d="M92 34h6M95 31v6"/></g></svg>`,
};

const composerGrid = document.querySelector("#composer-grid");
const composerView = document.querySelector("#composer-view");
const composerState = { format: "era", scope: "all" };
const composerScopes = { webtoon: ["all", "해외편", "국내편"] };

function composerId(item) {
  return `composer:${item.format}:${item.no}:${item.title}`;
}

function renderComposers() {
  const scoped = composerScopes[composerState.format];
  const list = composerItems.filter((item) => item.format === composerState.format
    && (!scoped || composerState.scope === "all" || item.scope === composerState.scope));
  const favorites = readFavorites();

  document.querySelector("#composer-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#composer-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === composerState.format)));

  const tabs = document.querySelector("#composer-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === composerState.scope)));
  }

  composerGrid.innerHTML = list.map((item, index) => {
    const id = composerId(item);
    const key = `composer-${composerState.format}-${index}`;
    const picked = composerGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.era || item.scope || "교과서";
    const nameBlock = item.format === "era"
      ? `<span class="composer-name"><b>${item.title}</b><i>${item.latin}</i><em>${item.years}</em></span>`
      : `<span class="composer-name plain"><b>${item.title}</b>${item.work ? `<em>${item.work}</em>` : ""}</span>`;
    const open = item.url
      ? `<a class="history-open" href="${item.url}" target="_blank" rel="noopener"><span class="history-thumb composer-thumb art-${item.art}">${composerArt[item.art]}${coverImg(item)}<span class="thumb-overlay format-composer">${nameBlock}</span><span class="composer-badge">${badge}</span></span></a>`
      : `<span class="history-open is-soon"><span class="history-thumb composer-thumb art-${item.art}">${composerArt[item.art]}${coverImg(item)}<span class="thumb-overlay format-composer">${nameBlock}</span><span class="composer-badge">${badge}</span></span></span>`;
    const menuItems = [
      item.url ? `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="수업 자료 링크">↗ 수업 자료 공유하기</button>` : "",
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("") || `<span role="menuitem" aria-disabled="true" class="is-soon">공유할 링크 없음</span>`;
    const extra = item.sheetUrl
      ? `<div class="history-extra">
          <button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button>
          <div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div>
        </div>`
      : "";
    return `
      <li class="history-card composer-card${item.url ? "" : " is-soon"}${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.caption} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.caption} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.caption}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.caption} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(composerGrid);
}

function showComposer() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true; historyView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  composerView.hidden = false;
  setCurrentNav("musichall");
  document.title = "작곡가 | 연정쌤의 음악 교실";
  renderComposers();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#composer-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  composerState.format = button.dataset.format;
  composerState.scope = "all";
  renderComposers();
}));

document.querySelector("#composer-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  composerState.scope = tab.dataset.scope;
  renderComposers();
});

wireResourceGrid(composerGrid, {
  selectAll: document.querySelector("#composer-select-all"),
  favTool: document.querySelector('#composer-view [data-tool="favorite"]'),
  rerender: renderComposers,
});

/* 음악 기초 이론 일러스트 — 개념별 기호 */
const theoryArt = {
  staff: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M16 26h88M16 34h88M16 42h88M16 50h88M16 58h88"/><path d="M34 62c6-2 9-7 9-14 0-9-3-14-6-14s-5 4-5 10c0 9 5 15 10 20 4 4 5 8 3 10-3 3-8 0-8-5"/><path d="M78 30v24M74 34h10M74 46h10"/></g><g class="a-fill"><circle cx="34" cy="42" r="3"/></g></svg>`,
  notes: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M16 58h88"/></g><g class="a-fill"><ellipse cx="30" cy="54" rx="8" ry="6" transform="rotate(-18 30 54)"/><ellipse cx="62" cy="54" rx="8" ry="6" transform="rotate(-18 62 54)"/></g><g class="a-line"><ellipse cx="30" cy="54" rx="8" ry="6" transform="rotate(-18 30 54)"/><path d="M37 52V20"/><ellipse cx="62" cy="54" rx="8" ry="6" transform="rotate(-18 62 54)"/><path d="M69 52V20q12 4 12 14"/><path d="M92 20c6 0 8 5 4 9l-6 6c-4 4-2 9 4 9M92 20c-5 0-7 4-4 7"/><path d="M88 44h12v10H88z"/></g></svg>`,
  repeat: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M14 24h92M14 32h92M14 40h92M14 48h92M14 56h92"/><path d="M26 24v32M32 24v32"/><path d="M94 24v32M88 24v32"/></g><g class="a-fill"><circle cx="40" cy="36" r="3.5"/><circle cx="40" cy="44" r="3.5"/><circle cx="80" cy="36" r="3.5"/><circle cx="80" cy="44" r="3.5"/></g><g class="a-line"><path d="M52 68q8-10 16 0"/><path d="M60 62v6"/></g></svg>`,
  meter: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M14 24h92M14 32h92M14 40h92M14 48h92M14 56h92"/><path d="M44 24v32M76 24v32M104 24v32"/></g><g class="a-fill"><text x="26" y="38" font-size="17" font-weight="800" text-anchor="middle">4</text><text x="26" y="55" font-size="17" font-weight="800" text-anchor="middle">4</text></g><g class="a-line"><path d="M56 70l8-10 8 10"/></g></svg>`,
  pitch: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M16 30h88v34H16z"/></g><g class="a-line"><path d="M16 30h88v34H16z"/><path d="M28 30v34M40 30v34M52 30v34M64 30v34M76 30v34M88 30v34"/></g><g class="a-fill" style="fill:var(--art-ink)"><path d="M24 30h8v20h-8zM46 30h8v20h-8zM58 30h8v20h-8zM80 30h8v20h-8zM92 30h8v20h-8z"/></g><g class="a-line"><path d="M20 18h12M20 22h8"/><circle cx="60" cy="18" r="4"/></g></svg>`,
  accidental: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M24 22v40M34 18v40M18 32l22-5M18 46l22-5"/><path d="M58 16v38q0-12 10-14t0 12"/><path d="M92 16v40M84 30q8-6 8 4t-8 4"/></g></svg>`,
  dynamics: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M14 34h44l-44 8"/><path d="M62 42h44l-44-8"/></g><g class="a-fill"><text x="36" y="68" font-size="18" font-style="italic" font-weight="800" text-anchor="middle">p</text><text x="84" y="68" font-size="18" font-style="italic" font-weight="800" text-anchor="middle">f</text></g></svg>`,
  tempo: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M60 12l22 58H38z"/><g class="a-line"><path d="M60 12l22 58H38z"/><path d="M44 56h32"/><path d="M60 62V26"/><path d="M46 30h28"/></g><g class="a-fill"><circle cx="60" cy="26" r="4"/></g></svg>`,
  scale: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M12 24h96M12 32h96M12 40h96M12 48h96M12 56h96"/></g><g class="a-fill"><circle cx="22" cy="56" r="4"/><circle cx="34" cy="52" r="4"/><circle cx="46" cy="48" r="4"/><circle cx="58" cy="44" r="4"/><circle cx="70" cy="40" r="4"/><circle cx="82" cy="36" r="4"/><circle cx="94" cy="32" r="4"/><circle cx="104" cy="28" r="4"/></g><g class="a-line"><path d="M22 56l82-28"/></g></svg>`,
  chord: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M14 22h92M14 30h92M14 38h92M14 46h92M14 54h92"/></g><g class="a-fill"><ellipse cx="36" cy="54" rx="6" ry="4.5"/><ellipse cx="36" cy="46" rx="6" ry="4.5"/><ellipse cx="36" cy="38" rx="6" ry="4.5"/><ellipse cx="80" cy="46" rx="6" ry="4.5"/><ellipse cx="80" cy="38" rx="6" ry="4.5"/><ellipse cx="80" cy="30" rx="6" ry="4.5"/></g><g class="a-line"><path d="M42 54V24M86 46V16"/></g></svg>`,
  form: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M12 26h28v24H12zM46 26h28v24H46zM80 26h28v24H80z"/><g class="a-line"><path d="M12 26h28v24H12zM46 26h28v24H46zM80 26h28v24H80z"/><path d="M40 38h6M74 38h6"/></g><g class="a-fill" style="fill:var(--art-ink)"><text x="26" y="45" font-size="14" font-weight="800" text-anchor="middle">A</text><text x="60" y="45" font-size="14" font-weight="800" text-anchor="middle">B</text><text x="94" y="45" font-size="14" font-weight="800" text-anchor="middle">A</text></g><g class="a-line"><path d="M20 62h80"/></g></svg>`,
  janggu: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M34 26q12 12 0 24-8 4-8-12t8-12zM86 26q-12 12 0 24 8 4 8-12t-8-12z"/><path class="a-fill" d="M34 30h52v16H34z"/><g class="a-line"><path d="M34 26q12 12 0 24-8 4-8-12t8-12zM86 26q-12 12 0 24 8 4 8-12t-8-12z"/><path d="M34 30h52v16H34z"/><path d="M40 30l-2 16M74 30l2 16"/><path d="M20 60l12-8M100 60l-12-8"/></g></svg>`,
  jeongganbo: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M42 12h36v58H42z"/><g class="a-line"><path d="M42 12h36v58H42z"/><path d="M42 26h36M42 40h36M42 54h36M60 12v58"/></g><g class="a-fill" style="fill:var(--art-ink)"><text x="51" y="23" font-size="9" font-weight="800" text-anchor="middle">黃</text><text x="69" y="37" font-size="9" font-weight="800" text-anchor="middle">太</text><text x="51" y="51" font-size="9" font-weight="800" text-anchor="middle">仲</text><text x="69" y="65" font-size="9" font-weight="800" text-anchor="middle">林</text></g></svg>`,
  tori: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M46 14c14 0 24 10 26 22 2 12-2 22-8 28-5 5-12 6-18 2-7-5-8-14-4-20 3-5 9-6 13-3"/><g class="a-line"><path d="M46 14c14 0 24 10 26 22 2 12-2 22-8 28-5 5-12 6-18 2-7-5-8-14-4-20 3-5 9-6 13-3"/><path d="M20 46q8-8 16 0t16 0"/><path d="M84 30q8-8 16 0M84 46q8-8 16 0"/></g></svg>`,
  recorder: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M22 34h72q8 0 8 6t-8 6H22q-6 0-6-6t6-6z"/><g class="a-line"><path d="M22 34h72q8 0 8 6t-8 6H22q-6 0-6-6t6-6z"/><path d="M28 34v12"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="40" cy="40" r="3"/><circle cx="52" cy="40" r="3"/><circle cx="64" cy="40" r="3"/><circle cx="76" cy="40" r="3"/><circle cx="88" cy="40" r="3"/></g><g class="a-line"><path d="M34 56q10 8 20 0t20 0"/></g></svg>`,
  etiquette: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M18 22h84v34H18z"/><g class="a-line"><path d="M18 22h84v34H18z"/><path d="M18 30h84"/><path d="M30 56v10M90 56v10"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="44" cy="44" r="6"/><circle cx="60" cy="42" r="6"/><circle cx="76" cy="44" r="6"/></g><g class="a-line"><path d="M52 14q8-8 16 0"/><path d="M60 6v8"/></g></svg>`,
  symbols: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M16 30h88M16 38h88M16 46h88M16 54h88"/><path d="M30 24q10-10 20 0"/><path d="M70 62q10 10 20 0"/><path d="M56 18v8M52 22h8"/></g><g class="a-fill"><circle cx="34" cy="46" r="4"/><circle cx="46" cy="38" r="4"/><circle cx="74" cy="54" r="4"/><circle cx="86" cy="46" r="4"/></g></svg>`,
};

const theorybookGrid = document.querySelector("#theorybook-grid");
const theorybookView = document.querySelector("#theorybook-view");
const theorybookState = { format: "all", scope: "all" };
const theorybookScopes = {
  sheet: ["all", "기초 이론집", "수업 도움 자료집", "그림 개념 용어집"],
  game: ["all", "ZEP 퀴즈", "음악 메모리 게임"],
};
const theoryKindLabel = { anim: "애니메이션", sheet: "학습지", game: "게임" };

function theoryId(item) {
  return `theory:${item.format}:${item.scope || "-"}:${item.no}:${item.title}`;
}

function renderTheorybook() {
  const scoped = theorybookScopes[theorybookState.format];
  const list = theoryItems.filter((item) => (theorybookState.format === "all" || item.format === theorybookState.format)
    && (!scoped || theorybookState.scope === "all" || item.scope === theorybookState.scope));
  const favorites = readFavorites();

  document.querySelector("#theorybook-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#theorybook-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === theorybookState.format)));

  const tabs = document.querySelector("#theorybook-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === theorybookState.scope)));
  }

  theorybookGrid.innerHTML = list.map((item, index) => {
    const id = theoryId(item);
    const key = `theory-${theorybookState.format}-${theorybookState.scope}-${index}`;
    const picked = theorybookGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.scope || theoryKindLabel[item.format];
    const mark = item.format === "anim"
      ? `<span class="thumb-play" aria-hidden="true">▶</span><span class="thumb-time">${item.duration}</span>`
      : "";
    const thumb = `<span class="history-thumb theory-thumb kind-${item.format}">${theoryArt[item.art] || theoryArt.symbols}${coverImg(item)}<span class="thumb-overlay format-theory"><span class="theory-name">${item.title}</span>${mark}</span><span class="composer-badge">${badge}</span></span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="자료 링크">↗ 자료 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    const extra = item.sheetUrl
      ? `<div class="history-extra">
          <button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button>
          <div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div>
        </div>`
      : "";
    return `
      <li class="history-card theory-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.title}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(theorybookGrid);
}

function showTheorybook() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  theorybookView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악 기초 이론 | 연정쌤의 음악 교실";
  renderTheorybook();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#theorybook-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  theorybookState.format = button.dataset.format;
  theorybookState.scope = "all";
  renderTheorybook();
}));

document.querySelector("#theorybook-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  theorybookState.scope = tab.dataset.scope;
  renderTheorybook();
});

wireResourceGrid(theorybookGrid, {
  selectAll: document.querySelector("#theorybook-select-all"),
  favTool: document.querySelector('#theorybook-view [data-tool="favorite"]'),
  rerender: renderTheorybook,
});

/* 노래 익히기 — 장르별 악보 일러스트 */
const songArt = {
  western: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><path d="M10 26h100M10 34h100M10 42h100M10 50h100M10 58h100"/><path d="M26 62c5-2 8-6 8-12 0-8-3-12-5-12s-4 3-4 8c0 8 4 13 8 17 4 4 4 7 2 9-2 2-6 0-6-4"/></g><g class="a-fill"><ellipse cx="52" cy="46" rx="5" ry="4"/><ellipse cx="68" cy="38" rx="5" ry="4"/><ellipse cx="84" cy="42" rx="5" ry="4"/><ellipse cx="100" cy="34" rx="5" ry="4"/></g><g class="a-line"><path d="M57 46V24M73 38V16M89 42V20M105 34V12"/><path d="M57 24q10 3 16 0M89 20q10 3 16 0"/></g></svg>`,
  gugak: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M34 10h52v62H34z"/><g class="a-line"><path d="M34 10h52v62H34z"/><path d="M34 26h52M34 42h52M34 58h52M60 10v62"/></g><g class="a-fill" style="fill:var(--art-ink)"><text x="47" y="22" font-size="10" font-weight="800" text-anchor="middle">黃</text><text x="73" y="38" font-size="10" font-weight="800" text-anchor="middle">仲</text><text x="47" y="54" font-size="10" font-weight="800" text-anchor="middle">林</text><text x="73" y="70" font-size="10" font-weight="800" text-anchor="middle">南</text></g></svg>`,
  newgugak: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M40 8h44v64H40z"/><g class="a-line"><path d="M40 8h44v64H40z"/><path d="M40 24h44M40 40h44M40 56h44M62 8v64"/></g><g class="a-fill" style="fill:var(--art-ink)"><text x="51" y="20" font-size="9" font-weight="800" text-anchor="middle">太</text><text x="73" y="36" font-size="9" font-weight="800" text-anchor="middle">姑</text></g><g class="a-fill"><ellipse cx="22" cy="50" rx="5" ry="4"/><ellipse cx="100" cy="30" rx="5" ry="4"/></g><g class="a-line"><path d="M27 50V28M105 30V8"/></g></svg>`,
  pop: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M48 18h24v30a12 12 0 01-24 0z"/><g class="a-line"><path d="M48 18h24v30a12 12 0 01-24 0zM48 30h24M48 40h24"/><path d="M38 44c0 12 10 20 22 20s22-8 22-20"/><path d="M60 64v10M46 74h28"/></g><g class="a-fill"><circle cx="22" cy="34" r="4"/><circle cx="98" cy="26" r="4"/></g><g class="a-line"><path d="M26 34V16l8-2v18M102 26V10"/></g></svg>`,
  world: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><circle class="a-fill" cx="60" cy="40" r="26"/><g class="a-line"><circle cx="60" cy="40" r="26"/><path d="M34 40h52"/><path d="M60 14c8 8 8 44 0 52M60 14c-8 8-8 44 0 52"/><path d="M39 24q21 8 42 0M39 56q21-8 42 0"/></g><g class="a-fill"><circle cx="20" cy="22" r="4"/><circle cx="100" cy="58" r="4"/></g><g class="a-line"><path d="M24 22V6M104 58V42"/></g></svg>`,
};

const songsGrid = document.querySelector("#songs-grid");
const songsView = document.querySelector("#songs-view");
const songsState = { genre: "western", scope: "all" };
const songsScopes = {
  western: ["all", "동요", "가곡"],
  gugak: ["all", "전래 동요", "민요", "판소리 및 시조"],
};
const songGenreLabel = { western: "서양 음악", gugak: "국악", newgugak: "창작국악", pop: "대중음악", world: "세계음악" };

function songId(item) {
  return `song:${item.genre}:${item.scope || "-"}:${item.no}:${item.title}`;
}

function renderSongs() {
  const scoped = songsScopes[songsState.genre];
  const list = songItems.filter((item) => item.genre === songsState.genre
    && (!scoped || songsState.scope === "all" || item.scope === songsState.scope));
  const favorites = readFavorites();

  document.querySelector("#songs-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#songs-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === songsState.genre)));

  const tabs = document.querySelector("#songs-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === songsState.scope)));
  }

  if (!list.length) {
    songsGrid.innerHTML = `<li class="songs-empty"><div class="empty-icon" aria-hidden="true">♪</div><h3>${songGenreLabel[songsState.genre]} 자료를 준비하고 있습니다.</h3><p>목록 데이터를 넣으면 악보와 활동지가 바로 연결됩니다.</p></li>`;
    syncToolbar(songsGrid);
    return;
  }

  songsGrid.innerHTML = list.map((item, index) => {
    const id = songId(item);
    const key = `song-${songsState.genre}-${songsState.scope}-${index}`;
    const picked = songsGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.scope || songGenreLabel[item.genre];
    const thumb = `<span class="history-thumb song-thumb genre-${item.genre}">${songArt[item.genre] || songArt.western}${coverImg(item)}<span class="thumb-overlay format-song"><span class="song-name">${item.title}${item.note ? `<em>${item.note}</em>` : ""}</span></span><span class="composer-badge">${badge}</span></span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="악보 링크">↗ 악보 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    const extra = item.sheetUrl
      ? `<div class="history-extra">
          <button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button>
          <div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div>
        </div>`
      : "";
    return `
      <li class="history-card song-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.title}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(songsGrid);
}

function showSongs() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  songsView.hidden = false;
  setCurrentNav("musichall");
  document.title = "노래 익히기 모음 | 연정쌤의 음악 교실";
  renderSongs();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#songs-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  songsState.genre = button.dataset.format;
  songsState.scope = "all";
  renderSongs();
}));

document.querySelector("#songs-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  songsState.scope = tab.dataset.scope;
  renderSongs();
});

wireResourceGrid(songsGrid, {
  selectAll: document.querySelector("#songs-select-all"),
  favTool: document.querySelector('#songs-view [data-tool="favorite"]'),
  rerender: renderSongs,
});

/* 음악 연주 자료집 — 곡집 표지 */
const playArt = {
  recorder: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 8h42a6 6 0 016 6v52a6 6 0 01-6 6H52z"/><path class="a-accent" d="M40 8h12v64H40a6 6 0 01-6-6V14a6 6 0 016-6z"/><g class="a-line"><path d="M40 8h54a6 6 0 016 6v52a6 6 0 01-6 6H40a6 6 0 01-6-6V14a6 6 0 016-6zM52 8v64"/><path d="M62 22h28M62 28h20"/><path d="M64 46h26q4 0 4 4t-4 4H64q-3 0-3-4t3-4z"/><circle cx="70" cy="50" r="2"/><circle cx="78" cy="50" r="2"/><circle cx="86" cy="50" r="2"/></g></svg>`,
  kalimba: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 8h42a6 6 0 016 6v52a6 6 0 01-6 6H52z"/><path class="a-accent" d="M40 8h12v64H40a6 6 0 01-6-6V14a6 6 0 016-6z"/><g class="a-line"><path d="M40 8h54a6 6 0 016 6v52a6 6 0 01-6 6H40a6 6 0 01-6-6V14a6 6 0 016-6zM52 8v64"/><path d="M62 20h28v34H62z"/><path d="M66 54V32M71 54V28M76 54V26M81 54V28M86 54V32"/><path d="M62 34h28"/></g></svg>`,
  danso: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 8h42a6 6 0 016 6v52a6 6 0 01-6 6H52z"/><path class="a-accent" d="M40 8h12v64H40a6 6 0 01-6-6V14a6 6 0 016-6z"/><g class="a-line"><path d="M40 8h54a6 6 0 016 6v52a6 6 0 01-6 6H40a6 6 0 01-6-6V14a6 6 0 016-6zM52 8v64"/><path d="M76 18v40"/><circle cx="76" cy="26" r="2.5"/><circle cx="76" cy="34" r="2.5"/><circle cx="76" cy="42" r="2.5"/><circle cx="76" cy="50" r="2.5"/><path d="M64 64h24"/></g></svg>`,
  ensemble: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 8h42a6 6 0 016 6v52a6 6 0 01-6 6H52z"/><path class="a-accent" d="M40 8h12v64H40a6 6 0 01-6-6V14a6 6 0 016-6z"/><g class="a-line"><path d="M40 8h54a6 6 0 016 6v52a6 6 0 01-6 6H40a6 6 0 01-6-6V14a6 6 0 016-6zM52 8v64"/><path d="M62 26h32M62 34h32M62 42h32M62 50h32"/></g><g class="a-fill"><circle cx="70" cy="42" r="3.5"/><circle cx="82" cy="34" r="3.5"/><circle cx="92" cy="38" r="3.5"/></g><g class="a-line"><path d="M73 42V24M85 34V16M95 38V20"/></g></svg>`,
  guide: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 8h42a6 6 0 016 6v52a6 6 0 01-6 6H52z"/><path class="a-accent" d="M40 8h12v64H40a6 6 0 01-6-6V14a6 6 0 016-6z"/><g class="a-line"><path d="M40 8h54a6 6 0 016 6v52a6 6 0 01-6 6H40a6 6 0 01-6-6V14a6 6 0 016-6zM52 8v64"/><path d="M62 22h28M62 30h28M62 38h18"/><path d="M62 50h20v14H62z"/><path d="M86 52v12M92 52v12"/></g></svg>`,
};

const playGrid = document.querySelector("#play-grid");
const playView = document.querySelector("#play-view");
const playState = { group: "all", scope: "all" };
const playGroupLabel = { all: "전체보기(PDF)", recorder: "리코더 TOP 40", kalimba: "칼림바 TOP 50", danso: "단소·소금 TOP 40", ensemble: "기악 연주곡집" };

function playId(item) {
  return `play:${item.group}:${item.no}:${item.title}`;
}

function playScopesFor(group) {
  const found = [];
  playItems.forEach((item) => {
    if (item.group === group && item.scope && !found.includes(item.scope)) found.push(item.scope);
  });
  return found.length ? ["all", ...found] : null;
}

function renderPlay() {
  const scoped = playScopesFor(playState.group);
  const list = playItems.filter((item) => item.group === playState.group
    && (!scoped || playState.scope === "all" || item.scope === playState.scope));
  const favorites = readFavorites();

  document.querySelector("#play-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#play-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === playState.group)));

  const tabs = document.querySelector("#play-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === playState.scope)));
  }

  if (!list.length) {
    playGrid.innerHTML = `<li class="songs-empty"><div class="empty-icon" aria-hidden="true">♪</div><h3>${playGroupLabel[playState.group]} 자료를 준비하고 있습니다.</h3><p>목록 데이터를 넣으면 악보와 연주 영상이 바로 연결됩니다.</p></li>`;
    syncToolbar(playGrid);
    return;
  }

  playGrid.innerHTML = list.map((item, index) => {
    const id = playId(item);
    const key = `play-${playState.group}-${index}`;
    const picked = playGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const isVideo = item.art === "video";
    const badge = isVideo ? "연주 듣기" : "PDF";
    const cover = isVideo ? `<span class="thumb-play" aria-hidden="true">▶</span>` : (playArt[item.art] || playArt.guide);
    const thumb = `<span class="history-thumb play-thumb cover-${item.art}">${cover}${coverImg(item)}<span class="thumb-overlay format-play"><span class="play-name">${item.title}${item.note ? `<em>${item.note}</em>` : ""}</span></span><span class="composer-badge">${badge}</span></span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="${isVideo ? "연주 영상" : "자료"} 링크">↗ ${isVideo ? "연주 영상" : "자료"} 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    return `
      <li class="history-card play-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.title}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${item.sheetUrl ? `<div class="history-extra"><button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button><div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div></div>` : ""}
      </li>`;
  }).join("");
  syncToolbar(playGrid);
}

function showPlay() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  playView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악 연주 자료집 | 연정쌤의 음악 교실";
  renderPlay();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#play-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  playState.group = button.dataset.format;
  playState.scope = "all";
  renderPlay();
}));

document.querySelector("#play-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  playState.scope = tab.dataset.scope;
  renderPlay();
});

wireResourceGrid(playGrid, {
  selectAll: document.querySelector("#play-select-all"),
  favTool: document.querySelector('#play-view [data-tool="favorite"]'),
  rerender: renderPlay,
});

/* 스마트 악기 — 악기별 일러스트 */
const smartArt = {
  piano: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M14 20h92v44H14z"/><g class="a-line"><path d="M14 20h92v44H14z"/><path d="M27 20v44M40 20v44M53 20v44M66 20v44M79 20v44M92 20v44"/></g><g class="a-fill" style="fill:var(--art-ink)"><path d="M22 20h10v26H22zM35 20h10v26H35zM61 20h10v26H61zM74 20h10v26H74zM87 20h10v26H87z"/></g><g class="a-line"><path d="M14 64h92"/></g></svg>`,
  kalimba: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M26 12h68a6 6 0 016 6v44a6 6 0 01-6 6H26a6 6 0 01-6-6V18a6 6 0 016-6z"/><g class="a-line"><path d="M26 12h68a6 6 0 016 6v44a6 6 0 01-6 6H26a6 6 0 01-6-6V18a6 6 0 016-6z"/><path d="M20 34h80"/><path d="M32 56V24M42 56V20M52 56V18M62 56V17M72 56V18M82 56V20M92 56V24"/><circle cx="60" cy="62" r="4"/></g></svg>`,
  xylophone: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M12 18h14v52H12zM30 22h14v44H30zM48 26h14v36H48zM66 30h14v28H66zM84 34h14v20H84z"/></g><g class="a-line"><path d="M12 18h14v52H12zM30 22h14v44H30zM48 26h14v36H48zM66 30h14v28H66zM84 34h14v20H84z"/><path d="M8 28h96M8 60h96"/><path d="M104 24l8-8M104 30l8-8"/></g><g class="a-fill"><circle cx="110" cy="16" r="4"/></g></svg>`,
  recorder: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M16 34h78q10 0 10 6t-10 6H16q-6 0-6-6t6-6z"/><g class="a-line"><path d="M16 34h78q10 0 10 6t-10 6H16q-6 0-6-6t6-6z"/><path d="M26 34v12M34 34v12"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="46" cy="40" r="3"/><circle cx="56" cy="40" r="3"/><circle cx="66" cy="40" r="3"/><circle cx="76" cy="40" r="3"/><circle cx="86" cy="40" r="3"/></g><g class="a-line"><path d="M30 56q14 10 28 0t28 0"/></g></svg>`,
  ocarina: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M34 26c14-8 34-8 44 4 8 9 4 24-8 30-14 7-32 3-38-8-5-9-2-20 2-26z"/><g class="a-line"><path d="M34 26c14-8 34-8 44 4 8 9 4 24-8 30-14 7-32 3-38-8-5-9-2-20 2-26z"/><path d="M78 30l18-8q4 4 0 8l-16 8"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="46" cy="38" r="3"/><circle cx="58" cy="34" r="3"/><circle cx="70" cy="38" r="3"/><circle cx="50" cy="52" r="3"/><circle cx="64" cy="52" r="3"/></g></svg>`,
  drum: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M34 36h44v26a22 8 0 01-44 0z"/><ellipse class="a-fill" cx="56" cy="36" rx="22" ry="8"/><g class="a-line"><path d="M34 36v26a22 8 0 0044 0V36"/><ellipse cx="56" cy="36" rx="22" ry="8"/></g><g class="a-fill"><ellipse cx="26" cy="24" rx="16" ry="4"/><ellipse cx="94" cy="30" rx="14" ry="4"/></g><g class="a-line"><ellipse cx="26" cy="24" rx="16" ry="4"/><path d="M26 28v34"/><ellipse cx="94" cy="30" rx="14" ry="4"/><path d="M94 34v28"/><path d="M14 70h92"/></g></svg>`,
  cajon: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M32 10h56v60H32z"/><g class="a-line"><path d="M32 10h56v60H32z"/><path d="M32 18h56"/><circle cx="60" cy="42" r="9"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="60" cy="42" r="9"/></g><g class="a-line"><path d="M40 62h40"/><path d="M20 34q-6 6 0 12M100 34q6 6 0 12"/></g></svg>`,
  rhythm: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="32" cy="28" r="14"/><path d="M62 16l16 26H46z"/><path d="M84 52h22v14H84z"/><circle cx="34" cy="58" r="10"/></g><g class="a-line"><circle cx="32" cy="28" r="14"/><circle cx="32" cy="28" r="8"/><path d="M62 16l16 26H46z"/><path d="M56 42h12"/><path d="M84 52h22v14H84z"/><path d="M90 52v14M96 52v14M100 52v14"/><circle cx="34" cy="58" r="10"/><path d="M34 48v20"/></g></svg>`,
  metronome: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M60 8l24 62H36z"/><g class="a-line"><path d="M60 8l24 62H36z"/><path d="M44 56h32"/><path d="M60 62V22"/><path d="M48 30h24"/></g><g class="a-fill"><rect x="54" y="24" width="12" height="6" rx="2"/><circle cx="60" cy="20" r="4"/></g><g class="a-line"><rect x="54" y="24" width="12" height="6" rx="2"/></g></svg>`,
  janggu: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M30 24q14 16 0 32-10 5-10-16t10-16zM90 24q-14 16 0 32 10 5 10-16t-10-16z"/><path class="a-fill" d="M30 30h60v20H30z"/><g class="a-line"><path d="M30 24q14 16 0 32-10 5-10-16t10-16zM90 24q-14 16 0 32 10 5 10-16t-10-16z"/><path d="M30 30h60v20H30z"/><path d="M38 30l-3 20M52 30l-2 20M68 30l2 20M82 30l3 20"/></g><g class="a-line"><path d="M12 66l14-10M108 66l-14-10"/></g></svg>`,
  danso: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M52 6h16v68H52z"/><g class="a-line"><path d="M52 6h16v68H52z"/><path d="M52 18h16M52 62h16"/><path d="M56 6q4-4 8 0"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="60" cy="28" r="3.5"/><circle cx="60" cy="38" r="3.5"/><circle cx="60" cy="48" r="3.5"/><circle cx="60" cy="56" r="3.5"/></g></svg>`,
  sogeum: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M10 32h100v16H10z"/><g class="a-line"><path d="M10 32h100v16H10z"/><path d="M24 32v16M98 32v16"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="34" cy="40" r="3.5"/><circle cx="46" cy="40" r="3.5"/><circle cx="58" cy="40" r="3.5"/><circle cx="70" cy="40" r="3.5"/><circle cx="82" cy="40" r="3.5"/></g><g class="a-line"><path d="M16 40h4"/><path d="M36 62q12 8 24 0t24 0"/></g></svg>`,
  gayageum: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M8 16h104q6 0 6 6v36q0 6-6 6H8z"/><g class="a-line"><path d="M8 16h104q6 0 6 6v36q0 6-6 6H8z"/><path d="M8 24h110M8 32h110M8 40h110M8 48h110M8 56h110"/></g><g class="a-fill" style="fill:var(--art-ink)"><path d="M34 22l5 6-5 6-5-6zM50 30l5 6-5 6-5-6zM66 38l5 6-5 6-5-6zM82 46l5 6-5 6-5-6z"/></g></svg>`,
  gugak: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="12" y="10" width="30" height="28" rx="5"/><rect x="48" y="10" width="30" height="28" rx="5"/><rect x="84" y="10" width="24" height="28" rx="5"/><rect x="12" y="44" width="30" height="28" rx="5"/><rect x="48" y="44" width="30" height="28" rx="5"/><rect x="84" y="44" width="24" height="28" rx="5"/></g><g class="a-line"><rect x="12" y="10" width="30" height="28" rx="5"/><rect x="48" y="10" width="30" height="28" rx="5"/><rect x="84" y="10" width="24" height="28" rx="5"/><rect x="12" y="44" width="30" height="28" rx="5"/><rect x="48" y="44" width="30" height="28" rx="5"/><rect x="84" y="44" width="24" height="28" rx="5"/><path d="M22 30q5-14 10 0"/><path d="M58 18v12M54 24h8"/><path d="M92 18v12"/><path d="M20 58h14M22 52h10"/><path d="M58 52q5 10 0 14"/><path d="M90 52l12 12"/></g></svg>`,
};

const smartGrid = document.querySelector("#smart-grid");
const smartView = document.querySelector("#smart-view");
const smartState = { group: "all" };
const smartGroupLabel = { all: "스마트 악기", west: "서양 악기", gugak: "국악기" };

function smartId(item) {
  return `smart:${item.group}:${item.no}:${item.title}`;
}

function renderSmart() {
  const list = smartItems.filter((item) => smartState.group === "all" || item.group === smartState.group);
  const favorites = readFavorites();

  document.querySelector("#smart-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#smart-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === smartState.group)));

  smartGrid.innerHTML = list.map((item, index) => {
    const id = smartId(item);
    const key = `smart-${smartState.group}-${index}`;
    const picked = smartGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const thumb = `<span class="history-thumb smart-thumb tone-${item.group}">${smartArt[item.art] || smartArt.gugak}${coverImg(item)}<span class="thumb-overlay format-smart"><span class="smart-name">${item.title}</span></span><span class="composer-badge">${item.scope}</span></span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="악기 링크">↗ 악기 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    const extra = item.sheetUrl
      ? `<div class="history-extra"><button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button><div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div></div>`
      : "";
    return `
      <li class="history-card smart-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.title}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(smartGrid);
}

function showSmart() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true; playView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  smartView.hidden = false;
  setCurrentNav("musichall");
  document.title = "스마트 악기 연주 | 연정쌤의 음악 교실";
  renderSmart();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#smart-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  smartState.group = button.dataset.format;
  renderSmart();
}));

wireResourceGrid(smartGrid, {
  selectAll: document.querySelector("#smart-select-all"),
  favTool: document.querySelector('#smart-view [data-tool="favorite"]'),
  rerender: renderSmart,
});

/* 뮤직 에듀테크 — 분류별 아이콘 */
const edutechArt = {
  play: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><rect x="18" y="14" width="84" height="52" rx="8"/><path d="M18 26h84"/><circle cx="27" cy="20" r="2.5"/><circle cx="35" cy="20" r="2.5"/></g><g class="a-fill"><circle cx="60" cy="46" r="15"/></g><g class="a-line" style="stroke:var(--art-bg)"><path d="M55 39l12 7-12 7z" style="fill:var(--art-bg)"/></g></svg>`,
  create: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><rect x="18" y="14" width="84" height="52" rx="8"/><path d="M18 26h84"/><circle cx="27" cy="20" r="2.5"/><circle cx="35" cy="20" r="2.5"/></g><g class="a-fill"><rect x="30" y="46" width="10" height="12" rx="2"/><rect x="44" y="38" width="10" height="20" rx="2"/><rect x="58" y="42" width="10" height="16" rx="2"/><rect x="72" y="34" width="10" height="24" rx="2"/><rect x="86" y="48" width="8" height="10" rx="2"/></g></svg>`,
  fusion: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-line"><rect x="18" y="14" width="84" height="52" rx="8"/><path d="M18 26h84"/><circle cx="27" cy="20" r="2.5"/><circle cx="35" cy="20" r="2.5"/></g><g class="a-fill"><circle cx="48" cy="46" r="12"/></g><g class="a-line"><circle cx="48" cy="46" r="12"/><path d="M72 58l10-22 10 22z"/><path d="M64 34h6M64 40h6"/></g></svg>`,
  video: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M20 22h58v36H20z"/><g class="a-line"><path d="M20 22h58v36H20z"/><path d="M78 34l22-10v32l-22-10z"/><path d="M20 30h58M20 50h58"/><path d="M30 22v8M42 22v8M54 22v8M66 22v8"/></g></svg>`,
  tutorial: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M16 14h88a6 6 0 016 6v40a6 6 0 01-6 6H16a6 6 0 01-6-6V20a6 6 0 016-6z"/><g class="a-line"><path d="M16 14h88a6 6 0 016 6v40a6 6 0 01-6 6H16a6 6 0 01-6-6V20a6 6 0 016-6z"/><path d="M52 30l20 10-20 10z"/><path d="M40 72h40"/></g></svg>`,
  lesson: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M24 10h56a6 6 0 016 6v54H24z"/><g class="a-line"><path d="M24 10h56a6 6 0 016 6v54H24z"/><path d="M24 10a6 6 0 00-6 6v54a6 6 0 016-6"/><path d="M36 26h38M36 36h38M36 46h24"/></g><g class="a-fill"><circle cx="76" cy="56" r="4"/></g><g class="a-line"><path d="M79 56v-12l10-2v12"/><circle cx="86" cy="54" r="4"/></g></svg>`,
};

/* 새로 더한 사이트는 기능을 바로 떠올릴 수 있는 고유 그림과 공식 파비콘을 함께 쓴다.
   화면을 베끼지 않고, 각 도구의 쓰임만 원본 일러스트로 재해석한다. */
const edutechSiteVisual = {
  38: "✹", 39: "⌨", 40: "◉", 41: "∿", 42: "♫", 43: "♬", 44: "▦",
  45: "◔", 46: "♩", 47: "≋", 48: "◌", 49: "✦", 50: "⌁", 51: "⌂",
  52: "◫", 53: "♬", 54: "✋", 55: "↭", 56: "♮", 57: "◯", 58: "✧"
};

function edutechSiteArt(item) {
  const glyph = edutechSiteVisual[item.no];
  if (!glyph || item.group !== "site") return "";
  const favicon = `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(item.url)}`;
  return `<span class="edutech-site-art site-art-${item.no}" aria-hidden="true"><i></i><b>${glyph}</b><em></em></span><img class="edutech-site-logo" src="${favicon}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`;
}

const edutechGrid = document.querySelector("#edutech-grid");
const edutechView = document.querySelector("#edutech-view");
const edutechState = { group: "all", scope: "all", level: "all" };
const edutechGroupLabel = { all: "뮤직 에듀테크", site: "에듀테크 사이트", lab: "에듀테크 실습하기" };

function edutechScopes() {
  if (edutechState.group !== "lab") return null;
  const found = [];
  edutechItems.forEach((item) => {
    if (item.group === "lab" && !found.includes(item.scope)) found.push(item.scope);
  });
  return ["all", ...found];
}

function edutechId(item) {
  return `edutech:${item.group}:${item.scope}:${item.no}:${item.title}`;
}

function renderEdutech() {
  const scoped = edutechScopes();
  const list = edutechItems.filter((item) => (edutechState.group === "all" || item.group === edutechState.group)
    && (!scoped || edutechState.scope === "all" || item.scope === edutechState.scope)
    /* 학교급은 도구에만 매겨 두었다. 실습 자료·영상은 걸러내지 않는다. */
    && (edutechState.level === "all" || item.group !== "site"
      || (edutechState.level === "pick" ? Boolean(item.pick) : item.level === edutechState.level)));
  /* 대표를 맨 앞에 둔다. 그다음은 원래 차례 그대로. */
  list.sort((a, b) => (b.pick ? 1 : 0) - (a.pick ? 1 : 0));
  const favorites = readFavorites();

  document.querySelector("#edutech-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#edutech-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === edutechState.group)));

  const tabs = document.querySelector("#edutech-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === edutechState.scope)));
  }

  edutechGrid.innerHTML = list.map((item, index) => {
    const id = edutechId(item);
    const key = `edutech-${edutechState.group}-${edutechState.scope}-${index}`;
    const picked = edutechGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.tag || item.scope;
    /* 학교급과 대표 표시 — 도구에만 붙는다 */
    const levelMark = item.level ? `<span class="level-mark${item.pick ? " is-pick" : ""}">${item.pick ? "★ " : ""}${item.level}</span>` : "";
    const siteArt = edutechSiteArt(item);
    const thumb = `<span class="history-thumb edutech-thumb kind-${item.art}${siteArt ? ` has-site-art site-art-${item.no}` : ""}">${siteArt || edutechArt[item.art] || edutechArt.play}${coverImg(item)}<span class="thumb-overlay format-edutech"><span class="edutech-name">${item.title}</span></span><span class="composer-badge">${badge}</span>${levelMark}</span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="자료 링크">↗ 자료 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    const extra = item.sheetUrl
      ? `<div class="history-extra"><button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "수업 자료 보기" : "수업 자료 내려받기"} (1) <span aria-hidden="true">⌄</span></button><div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div></div>`
      : "";
    return `
      <li class="history-card edutech-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot edutech-foot">
          <span class="history-caption">${item.title}${item.desc ? `<em>${item.desc}</em>` : ""}${item.source ? `<i>출처 ${item.source}</i>` : ""}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(edutechGrid);
}

function showEdutech() {
  /* 감출 화면을 따로 적어 두면 새 화면이 생길 때마다 빠뜨린다 (설명서가 그랬다) */
  hideAllViews();
  edutechView.hidden = false;
  setCurrentNav("musichall");
  document.title = "뮤직 에듀테크 | 연정쌤의 음악 교실";
  renderEdutech();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#edutech-view .level-switch button").forEach((button) => button.addEventListener("click", () => {
  edutechState.level = button.dataset.level;
  document.querySelectorAll("#edutech-view .level-switch button").forEach((one) =>
    one.setAttribute("aria-selected", String(one.dataset.level === edutechState.level)));
  renderEdutech();
}));

document.querySelectorAll("#edutech-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  edutechState.group = button.dataset.format;
  edutechState.scope = "all";
  renderEdutech();
}));

document.querySelector("#edutech-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  edutechState.scope = tab.dataset.scope;
  renderEdutech();
});

wireResourceGrid(edutechGrid, {
  selectAll: document.querySelector("#edutech-select-all"),
  favTool: document.querySelector('#edutech-view [data-tool="favorite"]'),
  rerender: renderEdutech,
});

/* 음악 동영상 — 갈래별 아이콘 */
const videoArt = {
  mask: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M60 8c18 0 30 6 30 20 0 24-14 44-30 44S30 52 30 32c0-14 12-24 30-24z"/></g><g class="a-line"><path d="M60 8c18 0 30 6 30 20 0 24-14 44-30 44S30 52 30 32c0-14 12-24 30-24z"/><path d="M40 32c5-5 11-5 15 0M65 32c4-5 10-5 15 0"/><path d="M50 54c6 4 14 4 20 0"/><path d="M30 26l-14-6M90 26l14-6"/></g><g class="a-hair"><circle cx="47" cy="34" r="3"/><circle cx="73" cy="34" r="3"/></g></svg>`,
  fan: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M60 70A44 44 0 0116 26h88A44 44 0 0160 70z" transform="rotate(180 60 48)"/></g><g class="a-line"><path d="M60 70A44 44 0 0116 26h88A44 44 0 0160 70z" transform="rotate(180 60 48)"/><path d="M60 70V26M60 70L30 40M60 70l30-30M60 70L42 30M60 70l18-40"/><circle cx="60" cy="70" r="4"/></g></svg>`,
  pansori: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="40" cy="22" r="10"/><ellipse cx="86" cy="48" rx="20" ry="18"/></g><g class="a-line"><circle cx="40" cy="22" r="10"/><path d="M40 32v22M40 38l-14 8M40 38l14 6"/><path d="M40 54l-10 20M40 54l10 20"/><ellipse cx="86" cy="48" rx="20" ry="18"/><ellipse cx="86" cy="48" rx="11" ry="10"/></g></svg>`,
  arirang: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M10 62l26-32 16 18 14-20 24 34z"/></g><g class="a-line"><path d="M10 62l26-32 16 18 14-20 24 34z"/><path d="M6 62h108"/><circle cx="92" cy="18" r="8"/><path d="M100 18V6l12-3v12"/></g><g class="a-fill"><circle cx="96" cy="18" r="5"/><circle cx="108" cy="15" r="5"/></g></svg>`,
  court: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M30 24h60v8H30z"/><path d="M42 36c0 12-4 16-4 22h16c0-6-4-10-4-22z"/><path d="M74 36c0 12-4 16-4 22h16c0-6-4-10-4-22z"/></g><g class="a-line"><path d="M24 20h72l-6 12H30z"/><path d="M42 36c0 12-4 16-4 22h16c0-6-4-10-4-22zM74 36c0 12-4 16-4 22h16c0-6-4-10-4-22z"/><path d="M30 66h60"/><path d="M60 20V10"/></g></svg>`,
  song: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="50" y="10" width="20" height="34" rx="10"/></g><g class="a-line"><rect x="50" y="10" width="20" height="34" rx="10"/><path d="M38 38a22 22 0 0044 0"/><path d="M60 60v10M46 70h28"/><path d="M22 24c6 6 6 14 0 20M98 24c-6 6-6 14 0 20"/></g></svg>`,
  baton: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="34" cy="58" r="7"/></g><g class="a-line"><path d="M34 58L96 16"/><circle cx="34" cy="58" r="7"/><path d="M92 10c6 2 8 6 8 10"/><path d="M24 24c8-8 18-8 26 0M18 14c12-12 28-12 40 0"/></g></svg>`,
  kid: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="44" cy="42" r="21"/><circle cx="82" cy="56" r="7"/></g><g class="a-line"><circle cx="44" cy="42" r="21"/><path d="M36 38h.01M52 38h.01" stroke-width="4"/><path d="M36 50c5 5 11 5 16 0"/><path d="M89 56V24l16-5v31"/><circle cx="82" cy="56" r="7"/><circle cx="98" cy="50" r="7"/></g></svg>`,
  teen: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="20" y="42" width="16" height="24" rx="7"/><rect x="84" y="42" width="16" height="24" rx="7"/></g><g class="a-line"><path d="M26 44v-6a34 34 0 0168 0v6"/><rect x="20" y="42" width="16" height="24" rx="7"/><rect x="84" y="42" width="16" height="24" rx="7"/><path d="M52 60v-18l18-5v18"/></g><g class="a-fill"><circle cx="48" cy="60" r="5"/><circle cx="66" cy="55" r="5"/></g></svg>`,
  body: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="58" cy="16" r="9"/></g><g class="a-line"><circle cx="58" cy="16" r="9"/><path d="M58 25v24"/><path d="M58 31L34 21M58 31l24-10"/><path d="M58 49L42 72M58 49l16 23"/><path d="M96 22a10 10 0 010 14M104 16a18 18 0 010 26"/></g></svg>`,
  quiz: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M22 10h76a9 9 0 019 9v30a9 9 0 01-9 9H64L46 74V58H22a9 9 0 01-9-9V19a9 9 0 019-9z"/></g><g class="a-line"><path d="M22 10h76a9 9 0 019 9v30a9 9 0 01-9 9H64L46 74V58H22a9 9 0 01-9-9V19a9 9 0 019-9z"/></g><g class="a-line" style="stroke:var(--art-bg);stroke-width:4.5"><path d="M50 26a10 10 0 0120 3c0 7-10 7-10 14"/><path d="M60 50h.01" stroke-width="6"/></g></svg>`,
  activity: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="16" y="20" width="44" height="44" rx="5" transform="rotate(-8 38 42)"/></g><g class="a-line"><rect x="16" y="20" width="44" height="44" rx="5" transform="rotate(-8 38 42)"/><circle cx="76" cy="26" r="7"/><circle cx="76" cy="58" r="7"/><path d="M82 31l24 16M82 53l24-16"/></g></svg>`,
  perc: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><ellipse cx="52" cy="46" rx="28" ry="25"/></g><g class="a-line"><ellipse cx="52" cy="46" rx="28" ry="25"/><ellipse cx="52" cy="46" rx="17" ry="15"/><path d="M52 12v9M24 46h-9M80 46h9M52 71v7"/><path d="M108 18L84 38"/></g><g class="a-fill"><circle cx="108" cy="17" r="5"/></g></svg>`,
  jang: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M32 20v40c0-13 11-18 28-20-17-2-28-7-28-20z"/><path d="M88 20v40c0-13-11-18-28-20 17-2 28-7 28-20z"/></g><g class="a-line"><path d="M32 20v40M88 20v40"/><path d="M32 20c0 13 11 18 28 20 17-2 28-7 28-20"/><path d="M32 60c0-13 11-18 28-20 17 2 28 7 28 20"/><path d="M40 28l40 24M40 52l40-24"/></g></svg>`,
  keys: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="14" y="24" width="92" height="36" rx="5"/></g><g class="a-line"><rect x="14" y="24" width="92" height="36" rx="5"/><path d="M29 24v36M44 24v36M59 24v36M74 24v36M91 24v36"/></g><g class="a-hair"><rect x="24" y="24" width="9" height="21" rx="2"/><rect x="39" y="24" width="9" height="21" rx="2"/><rect x="69" y="24" width="9" height="21" rx="2"/><rect x="86" y="24" width="9" height="21" rx="2"/></g></svg>`,
  recorder: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="53" y="6" width="14" height="66" rx="7"/></g><g class="a-line"><rect x="53" y="6" width="14" height="66" rx="7"/><path d="M53 19h14M53 62h14"/><circle cx="60" cy="28" r="2.4"/><circle cx="60" cy="37" r="2.4"/><circle cx="60" cy="46" r="2.4"/><circle cx="60" cy="55" r="2.4"/><path d="M84 34l14-4M84 44l14 4"/></g></svg>`,
  danso: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="30" y="34" width="70" height="13" rx="6" transform="rotate(-12 65 40)"/></g><g class="a-line"><rect x="30" y="34" width="70" height="13" rx="6" transform="rotate(-12 65 40)"/><path d="M48 44l3-13M66 40l3-13M84 36l3-13"/><circle cx="56" cy="38" r="2.2"/><circle cx="70" cy="35" r="2.2"/><circle cx="84" cy="32" r="2.2"/><path d="M18 60c6-6 14-6 20 0"/></g></svg>`,
  guitar: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="40" cy="52" r="18"/><circle cx="62" cy="46" r="14"/></g><g class="a-line"><circle cx="40" cy="52" r="18"/><circle cx="62" cy="46" r="14"/><path d="M74 40l26-18M98 16l8 7-6 8"/></g><g class="a-line" style="stroke:var(--art-bg);stroke-width:2.4"><circle cx="55" cy="48" r="6"/></g></svg>`,
  ocarina: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M34 26c14-8 34-8 44 4 8 9 4 24-8 30-14 7-32 3-38-8-5-9-2-20 2-26z"/><g class="a-line"><path d="M34 26c14-8 34-8 44 4 8 9 4 24-8 30-14 7-32 3-38-8-5-9-2-20 2-26z"/><path d="M78 30l18-8q4 4 0 8l-16 8"/></g><g class="a-fill" style="fill:var(--art-ink)"><circle cx="46" cy="38" r="3"/><circle cx="58" cy="34" r="3"/><circle cx="70" cy="38" r="3"/><circle cx="50" cy="52" r="3"/><circle cx="64" cy="52" r="3"/></g></svg>`,
  kalimba: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><path class="a-fill" d="M26 12h68a6 6 0 016 6v44a6 6 0 01-6 6H26a6 6 0 01-6-6V18a6 6 0 016-6z"/><g class="a-line"><path d="M26 12h68a6 6 0 016 6v44a6 6 0 01-6 6H26a6 6 0 01-6-6V18a6 6 0 016-6z"/><path d="M20 34h80"/><path d="M32 56V24M42 56V20M52 56V18M62 56V17M72 56V18M82 56V20M92 56V24"/><circle cx="60" cy="62" r="4"/></g></svg>`,
  gaya: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M10 28h100l-7 26H17z"/></g><g class="a-line"><path d="M10 28h100l-7 26H17z"/><path d="M18 34h86M18 41h84M18 48h82"/><path d="M44 28l-4 26M62 28l-4 26M80 28l-4 26"/></g></svg>`,
  concept: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="26" y="12" width="62" height="52" rx="5"/></g><g class="a-line"><rect x="26" y="12" width="62" height="52" rx="5"/><path d="M38 26h38M38 36h38M38 46h24"/><path d="M26 12a7 7 0 000 14M88 50a7 7 0 010 14"/><path d="M76 60V44l14-4v14"/></g><g class="a-fill"><circle cx="72" cy="60" r="5"/><circle cx="86" cy="56" r="5"/></g></svg>`,
  perform: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="10" y="8" width="100" height="12" rx="3"/><path d="M10 20c12 7 14 27 10 48H10zM110 20c-12 7-14 27-10 48h10z"/></g><g class="a-line"><rect x="10" y="8" width="100" height="12" rx="3"/><path d="M10 20c12 7 14 27 10 48M110 20c-12 7-14 27-10 48"/><circle cx="60" cy="44" r="13"/></g><g class="a-hair"><path d="M55 37l12 7-12 7z"/></g></svg>`,
  trivia: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="52" cy="42" r="28"/></g><g class="a-line"><circle cx="52" cy="42" r="28"/></g><g class="a-line" style="stroke:var(--art-bg);stroke-width:5"><path d="M43 33a10 10 0 0119 3c0 7-9 8-9 15"/><path d="M53 60h.01" stroke-width="7"/></g><g class="a-fill"><path d="M94 12l4 10 10 4-10 4-4 10-4-10-10-4 10-4z"/></g></svg>`,
};

const videoArtKeywords = [
  [/탈춤|봉산|강령|은율|사자놀음|가면/, "mask"],
  [/강강술래|부채춤|춘앵전|오양선|포구락|처용무|무용|소고 춤|고사리|덕석|청어/, "fan"],
  [/판소리|춘향가|수궁가|흥보가|명창|득음|화초장|박타령|사랑가/, "pansori"],
  [/아리랑/, "arirang"],
  [/종묘|문묘|제례|취타|여민락|보허자|영산회상|수제천|천년만세|낙양춘|평조회상|청성|정간보/, "court"],
  [/노래|가곡|시조|민요|가창|호흡|합창|동요|랩 해요|응원 구호/, "song"],
  [/지휘/, "baton"],
];

function videoArtFor(item) {
  if (item.group !== "inst") {
    for (const [pattern, art] of videoArtKeywords) {
      if (pattern.test(item.title)) return art;
    }
  }
  return item.art;
}

const videoGrid = document.querySelector("#video-grid");
const videoView = document.querySelector("#video-view");
const videoState = { group: "anim", scope: "all" };
const videoGroupLabel = { anim: "음악 애니메이션", lesson: "수업 도움 동영상", inst: "악기 연주법", gugak: "국악 동영상" };

function videoScopes() {
  const found = [];
  videoItems.forEach((item) => {
    if (item.group === videoState.group && !found.includes(item.scope)) found.push(item.scope);
  });
  return ["all", ...found];
}

function videoId(item) {
  return `video:${item.group}:${item.scope}:${item.no}:${item.title}`;
}

function renderVideo() {
  const scoped = videoScopes();
  const list = videoItems.filter((item) => item.group === videoState.group
    && (videoState.scope === "all" || item.scope === videoState.scope));
  const favorites = readFavorites();

  document.querySelector("#video-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#video-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === videoState.group)));

  const tabs = document.querySelector("#video-tabs");
  const signature = `${videoState.group}|${scoped.join("|")}`;
  if (tabs.dataset.signature !== signature) {
    tabs.dataset.signature = signature;
    tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
  }
  tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === videoState.scope)));

  videoGrid.innerHTML = list.map((item, index) => {
    const id = videoId(item);
    const key = `video-${videoState.group}-${videoState.scope}-${index}`;
    const picked = videoGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.tag || item.scope;
    const length = item.len ? `<span class="video-len">${item.len}</span>` : "";
    const art = videoArtFor(item);
    const thumb = `<span class="history-thumb video-thumb kind-${art}">${videoArt[art] || videoArt.kid}${coverImg(item)}<span class="thumb-overlay format-video"><span class="video-name">${item.title}</span></span><span class="composer-badge">${badge}</span>${length}</span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    const menuItems = [
      `<button role="menuitem" type="button" data-share="${item.url}" data-share-label="영상 링크">↗ 영상 공유하기</button>`,
      item.sheetUrl ? `<button role="menuitem" type="button" data-share="${item.sheetUrl}" data-share-label="${item.sheetLabel} 링크">↗ ${item.sheetLabel} 공유하기</button>` : "",
    ].filter(Boolean).join("");
    const extra = item.sheetUrl
      ? `<div class="history-extra"><button class="extra-toggle" type="button" data-more aria-expanded="false" aria-controls="extra-${key}">${sheetAction(item.sheetUrl) === "열기" ? "연주 악보 보기" : "연주 악보 내려받기"} (1) <span aria-hidden="true">⌄</span></button><div class="extra-panel" id="extra-${key}" hidden><a href="${item.sheetUrl}" target="_blank" rel="noopener">${item.sheetLabel} ${sheetAction(item.sheetUrl)} <span aria-hidden="true">↗</span></a></div></div>`
      : "";
    return `
      <li class="history-card video-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot video-foot">
          <span class="history-caption">${item.title}${item.source ? `<i>출처 ${item.source}</i>` : ""}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>${menuItems}</div>
        ${extra}
      </li>`;
  }).join("");
  syncToolbar(videoGrid);
}

function showVideo() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true; playView.hidden = true; smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  videoView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악 동영상 | 연정쌤의 음악 교실";
  renderVideo();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#video-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  videoState.group = button.dataset.format;
  videoState.scope = "all";
  renderVideo();
}));

document.querySelector("#video-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  videoState.scope = tab.dataset.scope;
  renderVideo();
});

wireResourceGrid(videoGrid, {
  selectAll: document.querySelector("#video-select-all"),
  favTool: document.querySelector('#video-view [data-tool="favorite"]'),
  rerender: renderVideo,
});

const listeningView = document.querySelector("#listening-view");
const listeningRowsHost = document.querySelector("#listening-rows");
const PAGE_SIZE = 50;

const listeningRows = [
  { key: "lv", label: "학교급" },
  { key: "gr", label: "학년" },
  { key: "ge", label: "장르" },
  { key: "ar", label: "영역" },
  { key: "ty", label: "유형" },
];

const listeningOrder = {
  lv: ["초등", "중학"],
  gr: ["초등3", "초등4", "초등5", "초등6", "중학 음악①", "중학 음악②"],
  ge: ["서양", "국악", "창작국악", "대중음악", "세계음악"],
  ar: ["가창", "감상", "기악"],
  ty: ["멜로디", "합주", "합창"],
};

// 고른 값이 없으면 전체로 본다
const listeningState = { lv: [], gr: [], ge: [], ar: [], ty: [], q: "", page: 1 };
let listeningLoaded = false;

function listeningOptions(key) {
  const found = [];
  listeningItems.forEach((item) => {
    const value = item[key];
    if (value && !found.includes(value)) found.push(value);
  });
  const order = listeningOrder[key];
  if (order) found.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  return found;
}

function listeningMatches(item) {
  for (const { key } of listeningRows) {
    const picked = listeningState[key];
    if (picked.length && !picked.includes(item[key])) return false;
  }
  const q = listeningState.q.trim().toLowerCase();
  if (!q) return true;
  return `${item.t} ${item.n || ""}`.toLowerCase().includes(q);
}

function listeningId(item) {
  return `listening:${item.u}`;
}

function buildListeningFilters() {
  const host = document.querySelector("#listening-filters");
  if (host.dataset.ready) return;
  host.dataset.ready = "1";
  host.innerHTML = listeningRows.map(({ key, label }) => {
    const boxes = listeningOptions(key).map((value) => `
      <label class="filter-check"><input type="checkbox" data-key="${key}" value="${value}" /><span>${value}</span></label>`).join("");
    return `<div class="filter-row"><span class="filter-label">${label}</span><div class="filter-checks">
      <label class="filter-check"><input type="checkbox" data-key="${key}" data-all="1" checked /><span>전체</span></label>${boxes}</div></div>`;
  }).join("") + `
    <div class="filter-row"><span class="filter-label">검색</span><div class="filter-checks">
      <input type="search" id="listening-q" class="filter-q" placeholder="곡명 및 키워드를 입력해 주세요." /></div></div>`;
}

function syncAllBox(key) {
  const host = document.querySelector("#listening-filters");
  const all = host.querySelector(`input[data-key="${key}"][data-all]`);
  const picked = [...host.querySelectorAll(`input[data-key="${key}"]:not([data-all])`)].filter((box) => box.checked);
  all.checked = picked.length === 0;
}

function collectListeningFilters() {
  const host = document.querySelector("#listening-filters");
  listeningRows.forEach(({ key }) => {
    listeningState[key] = [...host.querySelectorAll(`input[data-key="${key}"]:not([data-all])`)]
      .filter((box) => box.checked).map((box) => box.value);
  });
  listeningState.q = (document.querySelector("#listening-q")?.value || "").trim();
  listeningState.page = 1;
}

function renderListening() {
  const list = listeningItems.filter(listeningMatches);
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  if (listeningState.page > pages) listeningState.page = pages;
  const start = (listeningState.page - 1) * PAGE_SIZE;
  const slice = list.slice(start, start + PAGE_SIZE);
  const favorites = readFavorites();

  document.querySelector("#listening-count").innerHTML = list.length
    ? `총 <b>${list.length}개</b>의 자료가 있습니다. <i>(${start + 1}–${start + slice.length})</i>`
    : `조건에 맞는 자료가 없습니다.`;

  listeningRowsHost.innerHTML = slice.length ? slice.map((item) => {
    const id = listeningId(item);
    const picked = listeningRowsHost._cfg.selection.has(id);
    const liked = favorites.has(id);
    // 음원은 두클래스 로그인이 있어야 들을 수 있어 넣지 않는다
    const sheet = item.s
      ? `<a class="row-btn" href="${item.s}" target="_blank" rel="noopener">악보 <span aria-hidden="true">♪</span></a>`
      : `<span class="row-none">—</span>`;
    const video = item.v
      ? `<a class="row-btn is-ghost" href="${item.v}" target="_blank" rel="noopener">${item.vl || "동영상"}</a>`
      : `<span class="row-none">—</span>`;
    return `
      <tr class="listening-row${picked ? " is-picked" : ""}" data-id="${id}">
        <td class="col-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} aria-label="${item.t} 선택" /></td>
        <td>${item.lv}</td>
        <td>${item.gr}</td>
        <th scope="row" class="col-title" title="${item.t}${item.n ? ` · ${item.n}` : ""}">${item.t}</th>
        <td>${item.ge}</td>
        <td>${item.ar}</td>
        <td>${item.ty || "—"}</td>
        <td class="col-files">${sheet}</td>
        <td>${video}</td>
        <td class="col-fav"><button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.t} 찜하기">${liked ? "♥" : "♡"}</button></td>
      </tr>`;
  }).join("") : `<tr><td colspan="10" class="listening-empty">조건에 맞는 자료가 없습니다. 조건을 줄이거나 초기화해 보세요.</td></tr>`;

  const pager = document.querySelector("#listening-pager");
  if (pages <= 1) {
    pager.innerHTML = "";
  } else {
    const span = 10;
    let from = Math.max(1, listeningState.page - Math.floor(span / 2));
    const to = Math.min(pages, from + span - 1);
    from = Math.max(1, to - span + 1);
    const btn = (page, text, disabled) =>
      `<button type="button" data-page="${page}"${disabled ? " disabled" : ""}${page === listeningState.page ? ' aria-current="page"' : ""}>${text}</button>`;
    const numbers = [];
    for (let page = from; page <= to; page += 1) numbers.push(btn(page, page));
    pager.innerHTML = btn(listeningState.page - 1, "←", listeningState.page === 1)
      + numbers.join("") + btn(listeningState.page + 1, "→", listeningState.page === pages)
      + `<span class="pager-total">${listeningState.page} / ${pages}</span>`;
  }
  syncToolbar(listeningRowsHost);
}

function showListening() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true; playView.hidden = true; smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  listeningView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악 감상실 & 악보은행 | 연정쌤의 음악 교실";
  window.scrollTo({ top: 0, behavior: "instant" });

  if (listeningLoaded) { renderListening(); return; }
  document.querySelector("#listening-count").textContent = "자료를 불러오는 중입니다…";
  const script = document.createElement("script");
  script.src = "listening-data.js?v=addebc9";
  script.onload = () => { listeningLoaded = true; buildListeningFilters(); renderListening(); };
  script.onerror = () => {
    document.querySelector("#listening-count").textContent = "자료를 불러오지 못했습니다. 새로고침해 주세요.";
  };
  document.head.appendChild(script);
}

document.querySelector("#listening-filters").addEventListener("change", (event) => {
  const box = event.target.closest("input[data-key]");
  if (!box) return;
  const key = box.dataset.key;
  const host = document.querySelector("#listening-filters");
  if (box.dataset.all) {
    // 전체를 켜면 그 줄의 다른 선택을 비운다
    host.querySelectorAll(`input[data-key="${key}"]:not([data-all])`).forEach((other) => { other.checked = false; });
    box.checked = true;
  } else {
    syncAllBox(key);
  }
});

document.querySelector("#listening-search").addEventListener("click", () => {
  collectListeningFilters();
  renderListening();
});

document.querySelector("#listening-filters").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.id === "listening-q") {
    event.preventDefault();
    collectListeningFilters();
    renderListening();
  }
});

document.querySelector("#listening-reset").addEventListener("click", () => {
  const host = document.querySelector("#listening-filters");
  host.querySelectorAll("input[type=checkbox]").forEach((box) => { box.checked = !!box.dataset.all; });
  const q = document.querySelector("#listening-q");
  if (q) q.value = "";
  listeningRows.forEach(({ key }) => { listeningState[key] = []; });
  listeningState.q = "";
  listeningState.page = 1;
  renderListening();
});

document.querySelector("#listening-pager").addEventListener("click", (event) => {
  const button = event.target.closest("[data-page]");
  if (!button || button.disabled) return;
  listeningState.page = Number(button.dataset.page);
  renderListening();
  listeningView.scrollIntoView({ behavior: "smooth", block: "start" });
});

wireResourceGrid(listeningRowsHost, {
  selectAll: document.querySelector("#listening-select-all"),
  favTool: document.querySelector('#listening-view [data-tool="favorite"]'),
  rerender: renderListening,
});

/* 음악 도서 — 갈래별 아이콘 */
const bookArt = {
  uku: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="44" cy="50" r="17"/><circle cx="63" cy="45" r="13"/></g><g class="a-line"><circle cx="44" cy="50" r="17"/><circle cx="63" cy="45" r="13"/><path d="M75 39l24-16M97 18l8 6-5 8"/></g><g class="a-line" style="stroke:var(--art-bg);stroke-width:2.4"><circle cx="56" cy="46" r="5"/></g></svg>`,
  classic: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M26 14h56a6 6 0 016 6v50H26z"/></g><g class="a-line"><path d="M26 14h56a6 6 0 016 6v50H26z"/><path d="M26 14a6 6 0 00-6 6v50a6 6 0 016-6"/><path d="M38 30h34M38 40h34"/><path d="M60 62V48l14-4v14"/></g><g class="a-fill"><circle cx="56" cy="62" r="4.5"/><circle cx="70" cy="58" r="4.5"/></g></svg>`,
  korean: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><path d="M24 18h72l-6 10H30z"/><path d="M34 34h52v32H34z"/></g><g class="a-line"><path d="M24 18h72l-6 10H30z"/><path d="M34 34h52v32H34z"/><path d="M44 44h32M44 52h32"/><path d="M60 18V8"/></g></svg>`,
  pop: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><circle cx="58" cy="42" r="24"/></g><g class="a-line"><circle cx="58" cy="42" r="24"/><circle cx="58" cy="42" r="7"/><path d="M88 22l14-6M88 32l16-2M88 52l16 4"/></g><g class="a-hair"><circle cx="58" cy="42" r="3"/></g></svg>`,
  career: `<svg class="history-art" viewBox="0 0 120 80" aria-hidden="true"><g class="a-fill"><rect x="24" y="28" width="72" height="40" rx="6"/></g><g class="a-line"><rect x="24" y="28" width="72" height="40" rx="6"/><path d="M46 28v-6a6 6 0 016-6h16a6 6 0 016 6v6"/><path d="M24 44h72"/></g><g class="a-line"><path d="M60 12V4M52 8l-4-6M68 8l4-6"/></g></svg>`,
};

const booksGrid = document.querySelector("#books-grid");
const booksView = document.querySelector("#books-view");
const booksState = { group: "all", scope: "all" };

function booksScopes() {
  if (booksState.group !== "genre") return null;
  const found = [];
  bookItems.forEach((item) => {
    if (item.group === "genre" && item.scope && !found.includes(item.scope)) found.push(item.scope);
  });
  return ["all", ...found];
}

function bookId(item) {
  return `book:${item.group}:${item.scope || "-"}:${item.no}:${item.title}`;
}

function renderBooks() {
  const scoped = booksScopes();
  const list = bookItems.filter((item) => (booksState.group === "all" || item.group === booksState.group)
    && (!scoped || booksState.scope === "all" || item.scope === booksState.scope));
  const favorites = readFavorites();

  document.querySelector("#books-count").innerHTML = `총 <b>${list.length}개</b>의 자료가 있습니다.`;
  document.querySelectorAll("#books-view .format-switch button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.format === booksState.group)));

  const tabs = document.querySelector("#books-tabs");
  tabs.hidden = !scoped;
  if (scoped) {
    const signature = scoped.join("|");
    if (tabs.dataset.signature !== signature) {
      tabs.dataset.signature = signature;
      tabs.innerHTML = scoped.map((scope) => `<button type="button" role="tab" data-scope="${scope}">${scope === "all" ? "전체" : scope}</button>`).join("");
    }
    tabs.querySelectorAll("button").forEach((button) => button.setAttribute("aria-selected", String(button.dataset.scope === booksState.scope)));
  }

  booksGrid.innerHTML = list.map((item, index) => {
    const id = bookId(item);
    const key = `book-${booksState.group}-${booksState.scope}-${index}`;
    const picked = booksGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.scope || (item.group === "instrument" ? "가창 및 악기" : "창작 및 진로");
    const cover = item.img
      ? `<img class="book-cover" src="${item.img}" alt="" loading="lazy" decoding="async" onerror="this.remove()" />`
      : "";
    const overlay = item.img ? "" : `<span class="thumb-overlay format-book"><span class="book-name">${item.title}</span></span>`;
    const thumb = `<span class="history-thumb book-thumb kind-${item.art}">${bookArt[item.art] || bookArt.classic}${cover}${overlay}<span class="composer-badge">${badge}</span></span>`;
    const open = `<a class="history-open" href="${item.url}" target="_blank" rel="noopener">${thumb}</a>`;
    return `
      <li class="history-card book-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.title} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.title} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot book-foot">
          <span class="history-caption">${item.title}<i>예스24 음악도서</i></span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.title} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden><button role="menuitem" type="button" data-share="${item.url}" data-share-label="도서 링크">↗ 도서 공유하기</button></div>
      </li>`;
  }).join("");
  syncToolbar(booksGrid);
}

function showBooks() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true; playView.hidden = true; smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true;
  booksView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악 도서 | 연정쌤의 음악 교실";
  renderBooks();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#books-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  booksState.group = button.dataset.format;
  booksState.scope = "all";
  renderBooks();
}));

document.querySelector("#books-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-scope]");
  if (!tab) return;
  booksState.scope = tab.dataset.scope;
  renderBooks();
});

wireResourceGrid(booksGrid, {
  selectAll: document.querySelector("#books-select-all"),
  favTool: document.querySelector('#books-view [data-tool="favorite"]'),
  rerender: renderBooks,
});

/* 수업도구 — 화면과 기능은 tools.js 에 있다 */
const toolsView = document.querySelector("#tools-view");

function showTools() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  historyView.hidden = true; composerView.hidden = true; theorybookView.hidden = true;
  songsView.hidden = true; playView.hidden = true; smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true;
  booksView.hidden = true;
  toolsView.hidden = false;
  setCurrentNav("tools");
  document.title = "수업도구 | 연정쌤의 음악 교실";
  if (typeof renderTools === "function") renderTools();
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showHall() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  composerView.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; historyView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  hallView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악관 | 연정쌤의 음악 교실";
  window.scrollTo({ top: 0, behavior: "instant" });
}

function showHistory() {
  homeView.hidden = true; aboutView.hidden = true; domainPreview.hidden = true;
  composerView.hidden = true;
  libraryView.hidden = true; theoryView.hidden = true; hallView.hidden = true;
  theorybookView.hidden = true;
  songsView.hidden = true;
  playView.hidden = true;
  smartView.hidden = true;
  edutechView.hidden = true; videoView.hidden = true; listeningView.hidden = true; booksView.hidden = true; toolsView.hidden = true; breakView.hidden = true; breaklistView.hidden = true;
  activityView.hidden = true; actlistView.hidden = true; actpageView.hidden = true;
  historyView.hidden = false;
  setCurrentNav("musichall");
  document.title = "음악사 | 연정쌤의 음악 교실";
  renderHistory();
  window.scrollTo({ top: 0, behavior: "instant" });
}

document.querySelectorAll("#history-view .format-switch button").forEach((button) => button.addEventListener("click", () => {
  historyState.format = button.dataset.format;
  renderHistory();
}));

document.querySelectorAll("#history-view .history-tabs button").forEach((button) => button.addEventListener("click", () => {
  historyState.scope = button.dataset.scope;
  renderHistory();
}));

/* ── 쉬는 시간 ───────────────────────────────────── */

const breakView = document.querySelector("#break-view");
const breakGrid = document.querySelector("#break-grid");

const breakCards = [
  { key: "gap", label: "틈새 시간 365", desc: "남는 몇 분 채우기", tone: "teal",
    art: `<svg viewBox="0 0 48 48"><rect x="11" y="5" width="26" height="4" rx="2" fill="#3d4157"/><rect x="11" y="39" width="26" height="4" rx="2" fill="#3d4157"/><path d="M15 9h18c0 7-6 10-6 15s6 8 6 15H15c0-7 6-10 6-15s-6-8-6-15z" fill="#fff" stroke="#3d4157" stroke-width="2.4" stroke-linejoin="round"/><path d="M19.5 13h9c-.4 4-4.5 6.6-4.5 6.6S19.9 17 19.5 13z" fill="#3ecf96"/><path d="M24 30.5c3 2 5.2 4.8 5.6 7.5H18.4c.4-2.7 2.6-5.5 5.6-7.5z" fill="#f7bb2e"/></svg>` },
  { key: "audio", label: "오디오북", desc: "귀로 듣는 읽을거리", tone: "blue",
    art: `<svg viewBox="0 0 48 48"><path d="M8 26a16 16 0 0132 0" fill="none" stroke="#3d4157" stroke-width="3.2" stroke-linecap="round"/><rect x="4" y="25" width="10" height="16" rx="4" fill="#59a9f0"/><rect x="34" y="25" width="10" height="16" rx="4" fill="#59a9f0"/><path d="M20 16l10 6-10 6z" fill="#f7bb2e"/></svg>` },
  { key: "game", label: "게임", desc: "화면으로 하는 놀이", tone: "magenta",
    art: `<svg viewBox="0 0 48 48"><rect x="3" y="14" width="42" height="22" rx="10" fill="#9a7cf0"/><path d="M13 21v8M9 25h8" stroke="#fff" stroke-width="2.8" stroke-linecap="round"/><circle cx="33" cy="22.5" r="2.6" fill="#f7bb2e"/><circle cx="38" cy="28" r="2.6" fill="#3ecf96"/></svg>` },
  { key: "chosung", label: "초성게임", desc: "초성 보고 맞히기", tone: "indigo",
    art: `<svg viewBox="0 0 48 48"><rect x="4" y="10" width="18" height="18" rx="5" fill="#fff" stroke="#3d4157" stroke-width="2.2"/><rect x="26" y="10" width="18" height="18" rx="5" fill="#fff" stroke="#3d4157" stroke-width="2.2"/><path d="M9 16h8v7" stroke="#5b73e8" stroke-width="2.8" fill="none" stroke-linecap="round"/><path d="M31 16v7h8" stroke="#f7bb2e" stroke-width="2.8" fill="none" stroke-linecap="round"/><rect x="14" y="33" width="20" height="6" rx="3" fill="#3ecf96"/></svg>` },
  { key: "card", label: "카드 짝 맞추기", desc: "짝을 찾는 기억 놀이", tone: "orange",
    art: `<svg viewBox="0 0 48 48"><rect x="5" y="12" width="17" height="24" rx="4" transform="rotate(-8 13.5 24)" fill="#59a9f0"/><rect x="26" y="12" width="17" height="24" rx="4" transform="rotate(8 34.5 24)" fill="#f57fb0"/><path d="M31 21l3.5 3.5L38 21" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="13.5" cy="24" r="3.4" fill="#fff"/></svg>` },
  { key: "word", label: "숨은 단어 찾기", desc: "글자판 속 낱말", tone: "sky",
    art: `<svg viewBox="0 0 48 48"><rect x="5" y="6" width="30" height="30" rx="5" fill="#eaf3ff" stroke="#3d4157" stroke-width="2.2"/><path d="M15 6v30M25 6v30M5 16h30M5 26h30" stroke="#c3d6ee" stroke-width="1.8"/><circle cx="32" cy="31" r="9" fill="none" stroke="#3ecf96" stroke-width="3.4"/><path d="M38.5 37.5L44 43" stroke="#3ecf96" stroke-width="3.6" stroke-linecap="round"/></svg>` },
];

function renderBreakHub() {
  const sprite = {
    gap: [3, 2], audio: [0, 3], game: [1, 3],
    chosung: [2, 3], card: [3, 3], word: [3, 3],
  };
  breakGrid.innerHTML = breakCards.map((card, i) => `
    <li class="hall-item tone-${card.tone}">
      <a class="tool-blob" href="${breakLists[card.key].hash}" style="--card-art: url('assets/class-cards/class-card-sprite.png'); --sprite-x: ${sprite[card.key][0]}; --sprite-y: ${sprite[card.key][1]};">
        <span class="tool-index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <span class="tool-badge" aria-hidden="true">${card.art}</span>
        <span class="hall-label">${card.label}</span>
        <span class="hall-desc">${card.desc}</span>
        <span class="hall-arrow" aria-hidden="true">→</span>
      </a>
    </li>`).join("");
}

function showBreak() {
  hideAllViews();
  breakView.hidden = false;
  setCurrentNav("break");
  document.title = "쉬는 시간 | 연정쌤의 음악 교실";
  renderBreakHub();
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ── 쉬는 시간 · 갈래 화면 — 음악관 하위 화면과 같은 얼개 ── */

const breaklistView = document.querySelector("#breaklist-view");
const breaklistGrid = document.querySelector("#breaklist-grid");

const BREAK_PAGE = 24;
const breakLists = {
  gap: {
    label: "틈새 시간 365", hash: "#break-gap",
    desc: "수업 끝나고 남는 몇 분!<br />짧은 퀴즈로 가볍게 채워 보세요.",
    items: () => gapItems, empty: "쓰실 활동 목록을 주시면 이 자리에 넣겠습니다.",
  },
  audio: {
    label: "오디오북", hash: "#break-audio",
    desc: "귀로 듣는 이야기!<br />아이들과 함께 들어 보세요.",
    items: () => audioItems, empty: "들려주실 오디오북 목록을 주시면 이 자리에 넣겠습니다.",
  },
  game: {
    label: "게임", hash: "#break-game",
    desc: "화면으로 바로 하는 놀이!<br />누르면 새 창에서 열립니다.",
    items: () => gameItems, empty: "쓰실 게임 목록을 주시면 이 자리에 넣겠습니다.",
  },
  chosung: {
    label: "초성게임", hash: "#break-chosung",
    desc: "초성만 보고 낱말 맞히기!<br />모둠별로 겨루어 보세요.",
    items: () => chosungItems, empty: "두클래스 초성게임 목록을 주시면 이 자리에 넣겠습니다.",
  },
  card: {
    label: "카드 짝 맞추기", hash: "#break-card",
    desc: "뒤집어서 짝을 찾는 기억 놀이!<br />음악 낱말을 익히기에 좋습니다.",
    items: () => cardItems, empty: "두클래스 카드 짝 맞추기 목록을 주시면 이 자리에 넣겠습니다.",
  },
  word: {
    label: "숨은 단어 찾기", hash: "#break-word",
    desc: "글자판 속에 숨은 낱말 찾기!<br />눈과 머리를 함께 씁니다.",
    items: () => wordItems, empty: "두클래스 숨은 단어 찾기 목록을 주시면 이 자리에 넣겠습니다.",
  },
};

const breakFilters = [
  { key: "s", label: "묶음" },
  { key: "ty", label: "갈래" },
  { key: "lb", label: "걸리는 시간" },
];

const breaklistState = { tab: "gap", scope: "전체", scopeKey: "", page: 1 };

function breakValues(items, key) {
  const found = [];
  items.forEach((item) => { if (item[key] && !found.includes(item[key])) found.push(item[key]); });
  return found;
}

/* 값이 두 가지 이상 열두 가지 이하인 것 하나만 세부 분류로 쓴다 */
function breakScopeKey(items) {
  for (const { key } of breakFilters) {
    const values = breakValues(items, key);
    if (values.length >= 2 && values.length <= 12) return key;
  }
  return "";
}

function breakId(item) {
  return `break-${breaklistState.tab}:${item.id}`;
}

function renderBreaklist() {
  const config = breakLists[breaklistState.tab];
  const items = config.items();
  const favorites = readFavorites();

  document.querySelector("#breaklist-title").textContent = config.label;
  document.querySelector("#breaklist-desc").innerHTML = config.desc;

  const sw = document.querySelector("#breaklist-switch");
  sw.innerHTML = Object.entries(breakLists).map(([key, one]) =>
    `<button type="button" role="tab" data-break-go="${key}" aria-selected="${key === breaklistState.tab}">${one.label}</button>`).join("");

  const scopeKey = breakScopeKey(items);
  const tabs = document.querySelector("#breaklist-tabs");
  if (scopeKey !== breaklistState.scopeKey) {
    breaklistState.scopeKey = scopeKey;
    breaklistState.scope = "전체";
  }
  tabs.hidden = !scopeKey;
  tabs.innerHTML = scopeKey
    ? ["전체", ...breakValues(items, scopeKey)].map((value) =>
      `<button type="button" role="tab" data-break-scope="${value}" aria-selected="${value === breaklistState.scope}">${value}</button>`).join("")
    : "";

  const list = scopeKey && breaklistState.scope !== "전체"
    ? items.filter((item) => item[scopeKey] === breaklistState.scope)
    : items;
  const pages = Math.max(1, Math.ceil(list.length / BREAK_PAGE));
  if (breaklistState.page > pages) breaklistState.page = pages;
  const start = (breaklistState.page - 1) * BREAK_PAGE;
  const slice = list.slice(start, start + BREAK_PAGE);

  document.querySelector("#breaklist-count").innerHTML = list.length
    ? `총 <b>${list.length}개</b>의 자료가 있습니다. <i>(${start + 1}–${start + slice.length})</i>`
    : `자료를 준비하고 있습니다. ${config.empty}`;

  breaklistGrid.innerHTML = slice.map((item, index) => {
    const id = breakId(item);
    const key = `break-${breaklistState.tab}-${index}`;
    const picked = breaklistGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.lb ? `<span class="composer-badge">${item.lb}</span>` : "";
    const thumb = `<span class="history-thumb break-thumb">${coverImg(item)}<span class="thumb-overlay format-break"><span class="break-name">${item.t}</span></span>${badge}</span>`;
    return `
      <li class="history-card break-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.t} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.t} 찜하기">${liked ? "♥" : "♡"}</button>
        <a class="history-open" href="${item.u}" target="_blank" rel="noopener">${thumb}</a>
        <div class="history-foot">
          <span class="history-caption">${item.t}${item.tg ? `<i>${item.tg}</i>` : ""}${item.by ? `<i>BY ${item.by}</i>` : ""}</span>
          <button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.t} 자료 메뉴">⋮</button>
        </div>
        <div class="history-menu" id="menu-${key}" role="menu" hidden>
          <button role="menuitem" type="button" data-share="${item.u}" data-share-label="${config.label} 링크">↗ 링크 공유하기</button>
        </div>
      </li>`;
  }).join("");

  renderBreakPager(pages);
  syncToolbar(breaklistGrid);
}

function renderBreakPager(pages) {
  const pager = document.querySelector("#breaklist-pager");
  if (pages <= 1) { pager.innerHTML = ""; return; }
  const btn = (page, text, off) =>
    `<button type="button" data-break-page="${page}"${off ? " disabled" : ""}${page === breaklistState.page ? ' aria-current="page"' : ""}>${text}</button>`;
  const span = Math.min(10, pages);
  let from = Math.max(1, breaklistState.page - Math.floor(span / 2));
  from = Math.min(from, Math.max(1, pages - span + 1));
  const numbers = Array.from({ length: Math.min(span, pages - from + 1) }, (_, i) => btn(from + i, from + i, false));
  pager.innerHTML = btn(breaklistState.page - 1, "←", breaklistState.page === 1)
    + numbers.join("")
    + btn(breaklistState.page + 1, "→", breaklistState.page === pages)
    + `<span class="pager-total">${breaklistState.page} / ${pages}</span>`;
}

wireResourceGrid(breaklistGrid, {
  selectAll: document.querySelector("#breaklist-select-all"),
  favTool: document.querySelector("#breaklist-view [data-tool=favorite]"),
  rerender: renderBreaklist,
});

document.querySelector("#breaklist-switch").addEventListener("click", (event) => {
  const go = event.target.closest("[data-break-go]");
  if (go) location.hash = breakLists[go.dataset.breakGo].hash;
});
document.querySelector("#breaklist-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-break-scope]");
  if (!tab) return;
  breaklistState.scope = tab.dataset.breakScope;
  breaklistState.page = 1;
  renderBreaklist();
});
document.querySelector("#breaklist-pager").addEventListener("click", (event) => {
  const page = event.target.closest("[data-break-page]");
  if (!page) return;
  breaklistState.page = Number(page.dataset.breakPage);
  renderBreaklist();
  breaklistView.scrollIntoView({ block: "start", behavior: "smooth" });
});

function showBreaklist(tab) {
  hideAllViews();
  if (breaklistState.tab !== tab) {
    breaklistState.tab = tab;
    breaklistState.scope = "전체";
    breaklistState.scopeKey = "";
    breaklistState.page = 1;
    breaklistGrid._cfg.selection.clear();
  }
  breaklistView.hidden = false;
  setCurrentNav("break");
  document.title = `${breakLists[tab].label} | 연정쌤의 음악 교실`;
  renderBreaklist();
  window.scrollTo({ top: 0, behavior: "instant" });
}

/* ── 진로활동 ────────────────────────────────────── */

const activityView = document.querySelector("#activity-view");
const activityGrid = document.querySelector("#activity-grid");
const actlistView = document.querySelector("#actlist-view");
const actlistGrid = document.querySelector("#actlist-grid");

/* 쪽마다 카드가 꽉 차게 — 칸 수는 화면 폭에 따라 달라지므로 개수도 따라 정한다.
   고정된 수를 쓰면 마지막 줄이 비는데도 다음 쪽에 카드가 남아 헷갈린다. */
const ACT_ROWS = 6;
let actPerPage = 0;   /* 마지막으로 그려낸 쪽 크기 */
function actPageSize() {
  const columns = getComputedStyle(actlistGrid).gridTemplateColumns.split(" ")
    .filter((one) => one && one !== "none").length;
  return Math.max(1, columns || 5) * ACT_ROWS;
}
let activityLoaded = false;

/* 진로활동 자료는 꽤 커서 그 화면에 들어갈 때만 읽어 온다 */
function loadActivityData(after) {
  if (activityLoaded) { after(); return; }
  const script = document.createElement("script");
  script.src = "activity-data.js";
  script.onload = () => {
    activityLoaded = true;
    after();
  };
  script.onerror = () => {
    document.querySelector("#actlist-count").textContent = "자료를 불러오지 못했습니다. 새로고침해 주세요.";
  };
  document.head.appendChild(script);
}

const activityLists = {
  career: {
    label: "진로 교육", hash: "#activity-career", tone: "gold",
    desc: "나를 알고 앞날을 그리는 시간!<br />진로 수업에 바로 쓰는 자료입니다.",
    items: () => window.careerItems || [],
    art: `<svg viewBox="0 0 48 48"><path d="M24 5l5.5 11.5L42 18l-9 8.6L35.2 39 24 33l-11.2 6L15 26.6 6 18l12.5-1.5z" fill="#f7bb2e"/></svg>`,
  },
  major: {
    label: "학과 정보", hash: "#activity-major", tone: "blue",
    desc: "무엇을 배우는 곳일까?<br />계열별로 학과를 살펴보세요.",
    items: () => window.majorItems || [],
    art: `<svg viewBox="0 0 48 48"><path d="M24 8L4 17l20 9 20-9z" fill="#59a9f0"/><path d="M12 22v10c0 3 5.4 6 12 6s12-3 12-6V22" fill="none" stroke="#3d4157" stroke-width="2.8" stroke-linecap="round"/><path d="M41 18v11" stroke="#f7bb2e" stroke-width="2.8" stroke-linecap="round"/></svg>`,
  },
  job: {
    label: "직업 정보", hash: "#activity-job", tone: "orange",
    desc: "어떤 일을 하는 사람일까?<br />직업군별로 찾아보세요.",
    items: () => window.jobItems || [],
    art: `<svg viewBox="0 0 48 48"><rect x="4" y="15" width="40" height="26" rx="5" fill="#f2955a"/><path d="M17 15v-4a3 3 0 013-3h8a3 3 0 013 3v4" fill="none" stroke="#3d4157" stroke-width="2.8" stroke-linecap="round"/><rect x="19" y="24" width="10" height="6" rx="2" fill="#fff"/></svg>`,
  },
};

function renderActivityHub() {
  activityGrid.innerHTML = Object.entries(activityLists).map(([key, card], i) => {
    const ready = card.items().length > 0;
    const inner = `
      <span class="tool-index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
      <span class="tool-badge" aria-hidden="true">${card.art}</span>
      <span class="hall-label">${card.label}</span>
      <span class="hall-desc">${card.desc.replace(/<br \/>/g, " ").split("!")[0]}</span>`;
    return `<li class="hall-item tone-${card.tone}">
        <a class="tool-blob" href="${card.hash}">${inner}
          <span class="hall-arrow" aria-hidden="true">→</span>
          ${ready ? "" : `<span class="hall-soon">준비 중</span>`}
        </a>
      </li>`;
  }).join("");
}

function showActivity() {
  hideAllViews();
  activityView.hidden = false;
  setCurrentNav("activity");
  document.title = "진로활동 | 연정쌤의 음악 교실";
  window.scrollTo({ top: 0, behavior: "instant" });
  loadActivityData(renderActivityHub);
}

/* 갈래 화면 — 음악관 하위 화면과 같은 얼개 */
const actlistState = { tab: "career", scope: "전체", page: 1 };

function actValues(items) {
  const found = [];
  items.forEach((item) => { if (item.c && !found.includes(item.c)) found.push(item.c); });
  return found;
}

/* 계열·직업군마다 다른 그림 — 커리어넷 이미지는 자주 막혀서 우리 그림만 쓴다.
   바깥에서 받아오는 것이 없으니 카드가 뜨는 순간 그림도 함께 보인다. */
const careerMotifs = {
  /* 학과 — 7계열 */
  "인문계열": { tone: "ink", art: `<path d="M60 26c-9-7-21-9-33-8v41c12-1 24 1 33 8 9-7 21-9 33-8V18c-12-1-24 1-33 8z"/><path d="M60 26v41"/>` },
  "사회계열": { tone: "sky", art: `<circle cx="60" cy="40" r="26"/><path d="M34 40h52M60 14c8 8 12 17 12 26s-4 18-12 26c-8-8-12-17-12-26s4-18 12-26z"/>` },
  "교육계열": { tone: "grass", art: `<rect x="20" y="14" width="80" height="48" rx="5"/><path d="M34 30h30M34 42h44M46 62v8h28v-8"/>` },
  "공학계열": { tone: "steel", art: `<path d="M83.6 35.4 L91.8 36.2 L91.8 43.8 L83.6 44.6 L79.9 53.4 L85.2 59.8 L79.8 65.2 L73.4 59.9 L64.6 63.6 L63.8 71.8 L56.2 71.8 L55.4 63.6 L46.6 59.9 L40.2 65.2 L34.8 59.8 L40.1 53.4 L36.4 44.6 L28.2 43.8 L28.2 36.2 L36.4 35.4 L40.1 26.6 L34.8 20.2 L40.2 14.8 L46.6 20.1 L55.4 16.4 L56.2 8.2 L63.8 8.2 L64.6 16.4 L73.4 20.1 L79.8 14.8 L85.2 20.2 L79.9 26.6 Z"/><circle cx="60" cy="40" r="11"/>` },
  "자연계열": { tone: "mint", art: `<path d="M52 12h16M56 12v20L38 62c-4 6 0 12 7 12h30c7 0 11-6 7-12L64 32V12"/><path d="M45 52h30"/>` },
  "의약계열": { tone: "rose", art: `<circle cx="44" cy="40" r="24"/><path d="M44 28v24M32 40h24"/><rect x="76" y="20" width="22" height="42" rx="11"/><path d="M76 41h22"/>` },
  "예체능계열": { tone: "violet", art: `<path d="M60 12c-22 0-40 14-40 32 0 12 10 20 22 20 6 0 8-4 8-8 0-6 4-9 10-9h10c14 0 22-8 22-19 0-9-12-16-32-16z"/><circle cx="42" cy="32" r="5"/><circle cx="62" cy="26" r="5"/><circle cx="80" cy="36" r="5"/>` },

  /* 직업 — 10직업군 */
  "경영·사무·금융·보험직": { tone: "sky", art: `<rect x="18" y="26" width="84" height="44" rx="8"/><path d="M44 26v-8c0-4 3-7 7-7h18c4 0 7 3 7 7v8M18 44h84"/><path d="M52 40h16v10H52z"/>` },
  "연구직 및 공학 기술직": { tone: "steel", art: `<path d="M66 8l12 12-20 20-12-12z"/><path d="M58 40c-16 6-24 24-16 38"/><path d="M52 58h30"/><path d="M28 72h64"/><path d="M42 72v-8h24v8"/>` },
  "교육·법률·사회복지·경찰·소방직 및 군인": { tone: "ink", art: `<path d="M60 10l32 11v20c0 16-13 27-32 33-19-6-32-17-32-33V21z"/><path d="M46 40l10 10 20-19"/>` },
  "보건·의료직": { tone: "rose", art: `<path d="M16 42h20l7-16 12 32 9-20 6 10 4-6h30"/><path d="M84 12v16M76 20h16"/>` },
  "예술·디자인·방송·스포츠직": { tone: "violet", art: `<rect x="46" y="8" width="28" height="36" rx="14"/><path d="M30 38c0 16 13 28 30 28s30-12 30-28M60 66v10M44 76h32"/>` },
  "미용·여행·숙박·음식·경비·청소직": { tone: "mint", art: `<circle cx="30" cy="20" r="9"/><circle cx="30" cy="60" r="9"/><path d="M38 26l50 38M38 54l50-38"/><path d="M70 40l20-14M70 40l20 14"/>` },
  "영업·판매·운전·운송직": { tone: "gold", art: `<path d="M14 22h52v34H14zM66 32h18l16 16v8H66z"/><circle cx="34" cy="62" r="8"/><circle cx="84" cy="62" r="8"/>` },
  "건설·채굴직": { tone: "amber", art: `<path d="M30 54c0-18 13-30 30-30s30 12 30 30"/><path d="M47 26v28M73 26v28"/><path d="M16 54h88v10H16z"/>` },
  "농림어업직": { tone: "grass", art: `<path d="M60 70V34"/><path d="M60 40c-16 0-26-8-26-22 16 0 26 8 26 22zM60 46c16 0 26-8 26-22-16 0-26 8-26 22z"/><path d="M28 70h64"/>` },
  "설치·정비·생산직": { tone: "copper", art: `<path d="M84 14a18 18 0 00-24 24L26 72l10 10 34-34a18 18 0 0024-24l-13 13-11-11z"/><circle cx="90" cy="62" r="10"/>` },
};

const careerToneList = ["ink", "sky", "grass", "steel", "mint", "rose", "violet", "gold", "amber", "copper"];

function careerFallbackArt(item, kind) {
  const motif = careerMotifs[item.c];
  const seed = Array.from(`${item.c || ""}${item.id || item.t || ""}`)
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
  /* 분류가 있으면 그 분류의 그림과 색, 없으면 예전처럼 골고루 나눠 준다 */
  const tone = motif ? motif.tone : careerToneList[seed % careerToneList.length];
  const art = motif ? motif.art : (kind === "major"
    ? `<path d="M60 15 16 34l44 19 44-19z"/><path d="M34 44v15c0 8 12 14 26 14s26-6 26-14V44"/><path d="M100 36v25"/>`
    : `<rect x="18" y="25" width="84" height="45" rx="10"/><path d="M43 25v-8c0-5 4-8 9-8h16c5 0 9 3 9 8v8"/><path d="M18 45h84M52 41h16v10H52z"/>`);
  /* 같은 분류 안에서도 카드마다 조금씩 달라 보이게 한다 */
  const shade = seed % 6;
  return `<span class="career-fallback career-fallback-${kind} career-tone-${tone} career-shade-${shade}" aria-hidden="true">
    <span class="career-fallback-shape"><svg viewBox="0 0 120 80">${art}</svg></span>
    <i></i><i></i><i></i>
  </span>`;
}

function renderActlist() {
  const config = activityLists[actlistState.tab];
  const items = config.items();
  const favorites = readFavorites();

  document.querySelector("#actlist-title").textContent = config.label;
  document.querySelector("#actlist-desc").innerHTML = config.desc;
  document.querySelector("#actlist-switch").innerHTML = Object.entries(activityLists).map(([key, one]) =>
    `<button type="button" role="tab" data-act-go="${key}" aria-selected="${key === actlistState.tab}">${one.label}</button>`).join("");

  const scopes = actValues(items);
  const tabs = document.querySelector("#actlist-tabs");
  tabs.hidden = scopes.length < 2;
  tabs.innerHTML = scopes.length >= 2
    ? ["전체", ...scopes].map((value) =>
      `<button type="button" role="tab" data-act-scope="${value}" aria-selected="${value === actlistState.scope}">${value}</button>`).join("")
    : "";

  const list = actlistState.scope === "전체" ? items : items.filter((item) => item.c === actlistState.scope);
  const per = actPageSize();
  actPerPage = per;   /* 창이 바뀔 때 어디를 보고 있었는지 되짚는 데 쓴다 */
  const pages = Math.max(1, Math.ceil(list.length / per));
  if (actlistState.page > pages) actlistState.page = pages;
  const start = (actlistState.page - 1) * per;
  const slice = list.slice(start, start + per);

  document.querySelector("#actlist-count").innerHTML = list.length
    ? `총 <b>${list.length}개</b>의 자료가 있습니다. <i>(${start + 1}–${start + slice.length})</i>`
    : `자료를 준비하고 있습니다. 두클래스 ${config.label} 목록을 주시면 이 자리에 넣겠습니다.`;

  actlistGrid.innerHTML = slice.map((item, index) => {
    const id = `act-${actlistState.tab}:${item.id}`;
    const key = `act-${actlistState.tab}-${index}`;
    const picked = actlistGrid._cfg.selection.has(id);
    const liked = favorites.has(id);
    const badge = item.c ? `<span class="composer-badge">${item.c}</span>` : "";
    const fallback = careerFallbackArt(item, actlistState.tab);
    /* 커리어넷 학과·직업 이미지는 외부 직링크가 자주 늦거나 차단된다.
       이 두 목록은 처음부터 자체 벡터 그림을 써 빈 카드가 나타나지 않게 한다. */
    const remoteCover = actlistState.tab === "career" ? coverImg(item) : "";
    const thumb = `<span class="history-thumb career-thumb">${fallback}${remoteCover}<span class="thumb-overlay format-break"><span class="break-name">${item.t}</span></span>${badge}</span>`;
    // 학과·직업은 우리 쪽 화면에서 열고, 나머지는 만든 곳으로 보낸다
    const inside = actpageKinds[actlistState.tab] ? `#activity-${actlistState.tab}/${item.id}` : "";
    const open = inside
      ? `<a class="history-open" href="${inside}">${thumb}</a>`
      : item.u
        ? `<a class="history-open" href="${item.u}" target="_blank" rel="noopener">${thumb}</a>`
        : `<span class="history-open is-plain">${thumb}</span>`;
    const menu = item.u
      ? `<button class="history-kebab" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="menu-${key}" aria-label="${item.t} 자료 메뉴">⋮</button>`
      : "";
    return `
      <li class="history-card break-card${picked ? " is-picked" : ""}" data-id="${id}">
        <label class="history-pick"><input type="checkbox" data-pick="${id}"${picked ? " checked" : ""} /><span class="visually-hidden">${item.t} 선택</span></label>
        <button class="history-like${liked ? " is-on" : ""}" type="button" data-like="${id}" aria-pressed="${liked}" aria-label="${item.t} 찜하기">${liked ? "♥" : "♡"}</button>
        ${open}
        <div class="history-foot">
          <span class="history-caption">${item.t}${item.n ? `<i>${item.n}</i>` : ""}</span>
          ${menu}
        </div>
        ${item.u ? `<div class="history-menu" id="menu-${key}" role="menu" hidden>
          <button role="menuitem" type="button" data-share="${inside ? location.origin + location.pathname + inside : item.u}" data-share-label="${config.label} 링크">↗ 링크 공유하기</button>
        </div>` : ""}
      </li>`;
  }).join("");

  renderActPager(pages);
  syncToolbar(actlistGrid);
}

function renderActPager(pages) {
  const pager = document.querySelector("#actlist-pager");
  if (pages <= 1) { pager.innerHTML = ""; return; }
  const btn = (page, text, off) =>
    `<button type="button" data-act-page="${page}"${off ? " disabled" : ""}${page === actlistState.page ? ' aria-current="page"' : ""}>${text}</button>`;
  const span = Math.min(10, pages);
  let from = Math.max(1, actlistState.page - Math.floor(span / 2));
  from = Math.min(from, Math.max(1, pages - span + 1));
  const numbers = Array.from({ length: Math.min(span, pages - from + 1) }, (_, i) => btn(from + i, from + i, false));
  pager.innerHTML = btn(actlistState.page - 1, "←", actlistState.page === 1)
    + numbers.join("")
    + btn(actlistState.page + 1, "→", actlistState.page === pages)
    + `<span class="pager-total">${actlistState.page} / ${pages}</span>`;
}

wireResourceGrid(actlistGrid, {
  selectAll: document.querySelector("#actlist-select-all"),
  favTool: document.querySelector("#actlist-view [data-tool=favorite]"),
  rerender: renderActlist,
});

document.querySelector("#actlist-switch").addEventListener("click", (event) => {
  const go = event.target.closest("[data-act-go]");
  if (go) location.hash = activityLists[go.dataset.actGo].hash;
});
document.querySelector("#actlist-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-act-scope]");
  if (!tab) return;
  actlistState.scope = tab.dataset.actScope;
  actlistState.page = 1;
  renderActlist();
});
document.querySelector("#actlist-pager").addEventListener("click", (event) => {
  const page = event.target.closest("[data-act-page]");
  if (!page) return;
  actlistState.page = Number(page.dataset.actPage);
  renderActlist();
  actlistView.scrollIntoView({ block: "start", behavior: "smooth" });
});

/* 창 폭이 바뀌면 칸 수가 바뀌므로 쪽 개수도 다시 잡는다.
   보던 카드가 몇 번째였는지를 기준으로 삼아 자리를 잃지 않게 한다. */
window.addEventListener("resize", () => {
  if (actlistView.hidden || !actPerPage) return;
  const per = actPageSize();
  if (per === actPerPage) return;
  const firstItem = (actlistState.page - 1) * actPerPage;   /* 지금 쪽의 첫 카드가 몇 번째인지 */
  actlistState.page = Math.floor(firstItem / per) + 1;
  renderActlist();
});

function showActlist(tab) {
  hideAllViews();
  if (actlistState.tab !== tab) {
    actlistState.tab = tab;
    actlistState.scope = "전체";
    actlistState.page = 1;
    actlistGrid._cfg.selection.clear();
  }
  actlistView.hidden = false;
  setCurrentNav("activity");
  document.title = `${activityLists[tab].label} | 연정쌤의 음악 교실`;
  window.scrollTo({ top: 0, behavior: "instant" });
  document.querySelector("#actlist-count").textContent = "자료를 불러오는 중입니다…";
  document.querySelector("#actlist-note").textContent = tab === "career"
    ? "자료는 동아출판 두클래스에서 열립니다."
    : "내용은 커리어넷(한국직업능력연구원) 자료입니다.";
  loadActivityData(renderActlist);
}

/* ── 학과·직업 한 쪽 ──────────────────────────────────
   누르면 커리어넷으로 나가 버리던 것을, 우리 쪽에서 읽도록 바꾼다.
   내용이 5MB 가 넘어 tools/build-career-detail.py 가 쪽마다 나눠 두었고,
   여기서는 누른 쪽 하나만 받아 온다. */
const actpageView = document.querySelector("#actpage-view");
const actpageCache = new Map();

const actpageKinds = {
  major: {
    label: "학과 정보", hash: "#activity-major",
    origin: (seq) => `https://www.career.go.kr/cloud/w/major/uView?seq=${seq}`,
  },
  job: {
    label: "직업 정보", hash: "#activity-job",
    origin: (seq) => `https://www.career.go.kr/cloud/w/job/view?seq=${seq}`,
  },
};

const escText = (value) => String(value ?? "").replace(/[&<>"]/g,
  (one) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[one]));

function actBlock(title, body) {
  return body ? `<section class="actpage-block"><h2>${title}</h2>${body}</section>` : "";
}

const actParas = (rows) => (rows || []).map((text) => `<p>${escText(text)}</p>`).join("");

const actNotes = (rows) => (rows || []).length
  ? `<ul class="actpage-notes">${rows.map((row) =>
    `<li><b>${escText(row.t)}</b>${row.n ? `<span>${escText(row.n)}</span>` : ""}</li>`).join("")}</ul>`
  : "";

const actTags = (rows) => (rows || []).length
  ? `<p class="actpage-tags">${rows.map((row) => escText(row)).map((one) => `<span>${one}</span>`).join("")}</p>`
  : "";

/* 이어지는 학과·직업. 커리어넷 직업사전에 없는 이름은 눌리지 않게 둔다. */
function actLinks(rows, kind) {
  if (!(rows || []).length) return "";
  return `<p class="actpage-tags is-link">${rows.map((row) => {
    const seq = kind === "job" ? row.j : row.m;
    return seq
      ? `<a href="#activity-${kind}/${seq}">${escText(row.t)}</a>`
      : `<span>${escText(row.t)}</span>`;
  }).join("")}</p>`;
}

function renderMajorPage(page) {
  const areas = [...new Set(page.unis.map((uni) => uni.a).filter(Boolean))];
  document.querySelector("#actpage-facts").innerHTML = [
    page.field ? `<span>${escText(page.field)}</span>` : "",
    page.unis.length ? `<span>개설 대학 <b>${page.unis.length}곳</b></span>` : "",
    page.employmentRate ? `<span>취업률 <b>${escText(page.employmentRate)}%</b></span>` : "",
  ].join("");

  return actBlock("이런 학과예요", page.characteristics ? `<p>${escText(page.characteristics)}</p>` : "")
    + actBlock("이런 학생에게 어울려요", page.interest ? `<p>${escText(page.interest)}</p>` : "")
    + actBlock("무엇을 배우나요", actNotes(page.subjects))
    + actBlock("졸업하면 어디로 가나요", actNotes(page.after))
    + actBlock("이어지는 직업", actLinks(page.jobs, "job"))
    + actBlock("관련 자격", actTags(page.certs))
    + actBlock("대학에서 부르는 이름", actTags(page.names))
    + (page.unis.length ? `<details class="actpage-more">
        <summary>어느 대학에 있나요 (${page.unis.length}곳${areas.length ? ` · ${areas.length}개 지역` : ""})</summary>
        <ul class="actpage-unis">${page.unis.map((uni) =>
          `<li><b>${escText(uni.t)}</b><span>${escText(uni.d)}</span><i>${escText(uni.a)}</i></li>`).join("")}</ul>
      </details>` : "");
}

function renderJobPage(page) {
  document.querySelector("#actpage-facts").innerHTML = [
    page.group ? `<span>${escText(page.group)}</span>` : "",
    page.wage ? `<span>평균 연봉 <b>${escText(page.wage)}만원</b></span>` : "",
    page.satisfaction ? `<span>직업 만족도 <b>${escText(page.satisfaction)}%</b></span>` : "",
  ].join("");

  return actBlock("하는 일", actParas(page.work))
    + actBlock("이런 사람에게 어울려요", actParas(page.fit))
    + actBlock("어떻게 하면 될 수 있나요", actParas(page.become))
    + actBlock("앞으로는 어떨까요", actParas(page.forecast))
    + actBlock("미리 알아보는 방법", actParas(page.explore))
    + actBlock("이어지는 학과", actLinks(page.majors, "major"))
    + actBlock("관련 자격", actTags(page.certs))
    + actBlock("더 알아볼 곳", (page.orgs || []).length
      ? `<p class="actpage-tags is-link">${page.orgs.map((org) => (org.u
        ? `<a href="${escText(org.u)}" target="_blank" rel="noopener">${escText(org.t)} ↗</a>`
        : `<span>${escText(org.t)}</span>`)).join("")}</p>` : "");
}

async function showActpage(kind, seq) {
  const config = actpageKinds[kind];
  hideAllViews();
  actpageView.hidden = false;
  setCurrentNav("activity");
  window.scrollTo({ top: 0, behavior: "instant" });

  const back = document.querySelector("#actpage-back");
  back.href = config.hash;
  back.textContent = `← ${config.label}`;
  document.querySelector("#actpage-kind").textContent = config.label;
  document.querySelector("#actpage-title").textContent = "불러오는 중…";
  document.querySelector("#actpage-lead").textContent = "";
  document.querySelector("#actpage-facts").innerHTML = "";
  document.querySelector("#actpage-body").innerHTML = "";

  const key = `${kind}/${seq}`;
  try {
    if (!actpageCache.has(key)) {
      const res = await fetch(`career/${kind}/${seq}.json`);
      if (!res.ok) throw new Error(String(res.status));
      actpageCache.set(key, await res.json());
    }
  } catch (error) {
    document.querySelector("#actpage-title").textContent = "자료를 불러오지 못했습니다";
    document.querySelector("#actpage-body").innerHTML =
      `<p class="actpage-fail">잠시 뒤에 다시 열어 보세요. <a href="${config.origin(seq)}" target="_blank" rel="noopener">커리어넷에서 보기 ↗</a></p>`;
    return;
  }
  if (location.hash !== `#activity-${key}`) return;   // 그 사이 다른 쪽으로 옮겨 갔다

  const page = actpageCache.get(key);
  document.title = `${page.name} | 연정쌤의 음악 교실`;
  document.querySelector("#actpage-title").textContent = page.name;
  document.querySelector("#actpage-lead").textContent = page.summary
    || (page.work && page.work[0]) || "";
  document.querySelector("#actpage-body").innerHTML =
    (kind === "major" ? renderMajorPage(page) : renderJobPage(page))
    + `<p class="actpage-origin"><a href="${config.origin(page.seq)}" target="_blank" rel="noopener">커리어넷에서 더 자세히 보기 ↗</a></p>`;
}

/* 홈 사진의 오른쪽 테두리를 네비 마지막 항목(진로활동) 글자에 맞춘다.
   네비는 가운데로 모이고 사진은 칸 배치를 따라가서, 화면 너비마다 어긋나는 양이
   달라진다. 그래서 CSS 로는 묶이지 않아 여기서 재서 맞춘다.
   글꼴이 늦게 자리잡으면 재는 값이 달라지므로, 자리를 잡기 전에는 사진을
   내보이지 않는다. 그래야 옆으로 미끄러지는 것처럼 보이지 않는다. */
function alignHeroPhoto() {
  const card = document.querySelector(".portrait-card");
  const nav = document.querySelector('.grade-nav a[data-route="activity"]')
    || document.querySelector(".grade-nav a:last-of-type");
  const intro = document.querySelector(".hero-intro");
  if (!card || !nav || !intro) return;

  card.style.setProperty("--photo-shift", "0px");
  if (window.innerWidth >= 1100) {
    const cardBox = card.getBoundingClientRect();
    let shift = nav.getBoundingClientRect().right - cardBox.right;
    // 왼쪽으로 갈 때는 소개 문장과 노란 딱지가 부딪히지 않을 만큼만
    const room = cardBox.left - 38 - intro.getBoundingClientRect().right - 24;
    if (shift < -room) shift = -room;
    // 오른쪽으로 갈 때는 쪽 여백을 넘지 않을 만큼만
    const edge = document.documentElement.clientWidth
      - parseFloat(getComputedStyle(document.querySelector(".home-view")).paddingRight);
    shift = Math.min(shift, edge - cardBox.right);
    card.style.setProperty("--photo-shift", Math.round(shift) + "px");
  }
  card.classList.add("is-placed");
}

let heroAlignTimer = null;
window.addEventListener("resize", () => {
  clearTimeout(heroAlignTimer);
  heroAlignTimer = setTimeout(alignHeroPhoto, 120);
});
// 글꼴이 자리잡은 뒤에 한 번 더 맞춘다. 글꼴을 못 읽어도 사진은 반드시 내보인다.
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(alignHeroPhoto);
}
setTimeout(alignHeroPhoto, 1200);

renderHall();
handleRoute();
alignHeroPhoto();
