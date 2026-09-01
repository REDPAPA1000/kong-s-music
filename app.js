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
    const scoreMeta = item.pdf ? "<span>PDF 1쪽</span>" : "<span>악보 준비 중</span>";
    const scoreAction = item.pdf
      ? `<button class="lesson-open" type="button" data-open-resource="${item.id}">악보·수업안</button>`
      : `<span class="lesson-unavailable" aria-disabled="true">악보 준비 중</span>`;
    return `
      <article class="resource-card ${semesterClasses[item.semester] || "semester-one"} ${domainClasses[item.domain] || "domain-singing"}">
        <div class="card-top"><div class="tag-group"><span class="semester-tag">${item.semester}</span><span class="domain-tag">${item.domain}</span></div></div>
        <div class="card-body"><h3>${item.title}</h3><p>${item.subtitle}</p><div class="card-meta"><span>◷ ${item.duration}</span><span>수준 ${item.level}</span>${scoreMeta}</div></div>
        <div class="card-actions"><a class="smart-launch" href="${item.mediaUrl}" target="_blank" rel="noopener">스마트 악보 바로 실행 <span aria-hidden="true">↗</span></a><div class="secondary-actions"><a class="guide-launch" href="${item.guideUrl}" target="_blank" rel="noopener">스마트 수업안</a><a class="ibook-launch" href="${item.ibookUrl}" target="_blank" rel="noopener">교과서 EBOOK</a>${scoreAction}</div></div>
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
  document.querySelector("#media-box").innerHTML = item.mediaUrl
    ? `<div class="smart-ppt"><div class="media-icon" aria-hidden="true">▶</div><strong>${item.mediaLabel}</strong><p>악보의 QR과 같은 출판사 수업 화면</p><div class="media-features">${item.mediaFeatures.map((feature) => `<span>${feature}</span>`).join("")}</div><a href="${item.mediaUrl}" target="_blank" rel="noopener">스마트 악보 바로 실행 <span aria-hidden="true">↗</span></a><a class="ibook-inline" href="${item.guideUrl}" target="_blank" rel="noopener">스마트 수업안 열기 <span aria-hidden="true">↗</span></a><a class="ibook-inline" href="${item.ibookUrl}" target="_blank" rel="noopener">교과서 EBOOK 31쪽 <span aria-hidden="true">↗</span></a></div>`
    : `<div><div class="media-icon" aria-hidden="true">QR</div><strong>연결 주소 등록 필요</strong><p>악보 오른쪽 위 QR의 공식 주소를 확인한 뒤<br />이 영역에 연결합니다.</p></div>`;
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
handleRoute();
