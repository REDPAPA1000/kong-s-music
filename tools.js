/* 수업도구 — 사이트 안에서 바로 쓰는 도구 모음
   소리는 모두 Web Audio 로 직접 만들어 낸다(외부 음원 없음). */

const TOOL_STORE = "music-class-tools";

function toolStore(key, value) {
  try {
    const all = JSON.parse(localStorage.getItem(TOOL_STORE) || "{}");
    if (value === undefined) return all[key];
    all[key] = value;
    localStorage.setItem(TOOL_STORE, JSON.stringify(all));
    return value;
  } catch { return value === undefined ? undefined : value; }
}

/* ── 소리 ─────────────────────────────────────────── */
let audioCtx = null;
function ac() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function blip(freq, when, dur, type, gain) {
  const ctx = ac();
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type || "sine";
  osc.frequency.setValueAtTime(freq, when);
  amp.gain.setValueAtTime(0.0001, when);
  amp.gain.exponentialRampToValueAtTime(gain || 0.28, when + 0.01);
  amp.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  osc.connect(amp).connect(ctx.destination);
  osc.start(when);
  osc.stop(when + dur + 0.05);
}

const TOOL_SOUNDS = {
  piano: (t) => [523.25, 659.25, 783.99].forEach((f, i) => blip(f, t + i * 0.12, 0.9, "triangle", 0.22)),
  xylophone: (t) => [1046.5, 1318.5, 1568, 2093].forEach((f, i) => blip(f, t + i * 0.08, 0.5, "sine", 0.2)),
  triangle: (t) => { blip(2093, t, 1.6, "sine", 0.16); blip(3136, t + 0.02, 1.4, "sine", 0.1); },
  bell: (t) => { blip(880, t, 1.8, "sine", 0.2); blip(1320, t + 0.01, 1.5, "sine", 0.12); },
  none: () => {},
};

function playToolSound(name) {
  const make = TOOL_SOUNDS[name];
  if (!make) return;
  make(ac().currentTime + 0.02);
}

function clickSound(accent) {
  const ctx = ac();
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  const now = ctx.currentTime;
  osc.type = "square";
  osc.frequency.setValueAtTime(accent ? 1600 : 1000, now);
  amp.gain.setValueAtTime(accent ? 0.32 : 0.18, now);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
  osc.connect(amp).connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.06);
}

/* ── 공통 도우미 ──────────────────────────────────── */
function mmss(totalSeconds) {
  const s = Math.max(0, Math.round(totalSeconds));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

function shuffle(list) {
  const copy = list.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* 버튼에 붙이는 작은 그림 */
const ICON = {
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5l11 7-11 7z"/></svg>`,
  reset: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M4 12a8 8 0 108-8"/><path d="M4 4.5V10h5.5"/></svg>`,
  note: `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><path d="M6 4h9l4 4v12H6z"/><path d="M9 12h7M9 16h5"/></svg>`,
};

/* ── 1. 타이머 ────────────────────────────────────── */
function mountTimer(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <input class="tool-name" type="text" placeholder="제목을 입력하세요." data-title />
        <div class="flip" data-role="flip">
          <span class="flip-tile" data-role="mm">00</span>
          <span class="flip-colon"><i></i><i></i></span>
          <span class="flip-tile" data-role="ss">00</span>
        </div>
        <div class="tool-bar"><span data-role="fill"></span></div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-start>${ICON.play}<span data-role="go-label">시작</span></button>
          <button class="tool-pill" data-reset>${ICON.reset}초기화</button>
        </div>
        <p class="flip-msg" data-role="done" hidden></p>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>시간 설정</b>
          <div class="tool-set-grid">
            ${[30, 60, 180, 300, 600, 1200, 1800, 2400, 3000]
              .map((s) => `<button class="tool-chip" data-set="${s}">${s < 60 ? s + "초" : s / 60 + "분"}</button>`).join("")}
          </div>
        </div>
        <div class="tool-set"><b>시간 조절</b>
          <div class="tool-step">
            <button class="tool-round" data-step="-1" aria-label="시간 빼기">−</button>
            <select data-unit aria-label="조절 단위">
              <option value="10">10초</option><option value="30">30초</option>
              <option value="60" selected>1분</option><option value="300">5분</option>
            </select>
            <button class="tool-round" data-step="1" aria-label="시간 더하기">+</button>
          </div>
        </div>
        <div class="tool-set"><b>효과음 설정</b>
          <select data-sound aria-label="종료음">
            <option value="piano">피아노</option><option value="xylophone">실로폰</option>
            <option value="triangle">트라이앵글</option><option value="bell">종</option>
            <option value="none">소리 없음</option>
          </select>
        </div>
        <div class="tool-set"><b>종료 메시지</b>
          <textarea rows="2" data-msg placeholder="시간 종료! 이제 선생님을 보세요"></textarea>
        </div>
      </aside>
    </div>`;

  const flip = host.querySelector("[data-role=flip]");
  const mm = host.querySelector("[data-role=mm]");
  const ss = host.querySelector("[data-role=ss]");
  const fill = host.querySelector("[data-role=fill]");
  const done = host.querySelector("[data-role=done]");
  const startBtn = host.querySelector("[data-start]");
  const goLabel = host.querySelector("[data-role=go-label]");
  let total = 0;
  let left = 0;
  let ticking = null;

  const paint = () => {
    const s = Math.max(0, Math.round(left));
    mm.textContent = String(Math.floor(s / 60)).padStart(2, "0");
    ss.textContent = String(s % 60).padStart(2, "0");
    fill.style.width = total ? `${Math.max(0, (left / total) * 100)}%` : "0%";
    flip.classList.toggle("is-done", s === 0 && total > 0 && !ticking);
  };
  const stop = () => {
    clearInterval(ticking); ticking = null;
    goLabel.textContent = "시작";
    startBtn.classList.remove("is-stop");
  };
  const setTotal = (seconds) => {
    total = Math.max(0, Math.min(7200, seconds));
    left = total; done.hidden = true; paint();
  };

  host.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => {
    stop(); setTotal(Number(b.dataset.set));
  }));
  host.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => {
    stop();
    const unit = Number(host.querySelector("[data-unit]").value);
    setTotal(total + unit * Number(b.dataset.step));
  }));
  host.querySelector("[data-reset]").addEventListener("click", () => { stop(); left = total; done.hidden = true; paint(); });

  startBtn.addEventListener("click", () => {
    if (ticking) { stop(); return; }
    if (left <= 0) return;
    ac();
    goLabel.textContent = "멈춤";
    startBtn.classList.add("is-stop");
    const endAt = Date.now() + left * 1000;
    ticking = setInterval(() => {
      left = (endAt - Date.now()) / 1000;
      if (left <= 0) {
        left = 0;
        stop();
        playToolSound(host.querySelector("[data-sound]").value);
        const title = host.querySelector("[data-title]").value.trim();
        const msg = host.querySelector("[data-msg]").value.trim() || "시간 종료! 이제 선생님을 보세요";
        done.textContent = title ? `${title} — ${msg}` : msg;
        done.hidden = false;
      }
      paint();
    }, 100);
  });

  paint();
  return stop;
}

/* ── 2. 스톱워치 ──────────────────────────────────── */
function mountStopwatch(host) {
  host.innerHTML = `
    <div class="tool-layout is-solo">
      <div class="tool-pane">
        <input class="tool-name" type="text" placeholder="제목을 입력하세요." data-title />
        <div class="flip">
          <span class="flip-tile" data-role="mm">00</span>
          <span class="flip-colon"><i></i><i></i></span>
          <span class="flip-tile" data-role="ss">00</span>
          <span class="flip-tile is-small" data-role="ms">0</span>
        </div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-start>${ICON.play}<span data-role="go-label">시작</span></button>
          <button class="tool-pill" data-lap>${ICON.note}기록</button>
          <button class="tool-pill" data-reset>${ICON.reset}초기화</button>
        </div>
        <ol class="tool-laps" data-role="laps"></ol>
      </div>
    </div>`;

  const mm = host.querySelector("[data-role=mm]");
  const ss = host.querySelector("[data-role=ss]");
  const ms = host.querySelector("[data-role=ms]");
  const laps = host.querySelector("[data-role=laps]");
  const startBtn = host.querySelector("[data-start]");
  const goLabel = host.querySelector("[data-role=go-label]");
  let base = 0;
  let elapsed = 0;
  let ticking = null;

  const show = () => {
    const t = elapsed / 1000;
    mm.textContent = String(Math.floor(t / 60)).padStart(2, "0");
    ss.textContent = String(Math.floor(t % 60)).padStart(2, "0");
    ms.textContent = String(Math.floor((t * 10) % 10));
  };
  const stop = () => {
    clearInterval(ticking); ticking = null;
    goLabel.textContent = "시작"; startBtn.classList.remove("is-stop");
  };

  startBtn.addEventListener("click", () => {
    if (ticking) { elapsed = Date.now() - base; stop(); return; }
    base = Date.now() - elapsed;
    goLabel.textContent = "멈춤";
    startBtn.classList.add("is-stop");
    ticking = setInterval(() => { elapsed = Date.now() - base; show(); }, 50);
  });
  host.querySelector("[data-lap]").addEventListener("click", () => {
    if (!elapsed) return;
    const li = document.createElement("li");
    li.textContent = `${mm.textContent}:${ss.textContent}.${ms.textContent}`;
    laps.prepend(li);
  });
  host.querySelector("[data-reset]").addEventListener("click", () => {
    stop(); elapsed = 0; laps.innerHTML = ""; show();
  });

  show();
  return stop;
}

/* ── 3. 메트로놈 ──────────────────────────────────── */
function mountMetronome(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <input class="tool-name" type="text" placeholder="제목을 입력하세요." data-title />
        <div class="flip"><span class="flip-tile" data-role="bpm">90</span></div>
        <p class="tool-sub">BPM</p>
        <div class="tool-dots" data-role="dots"></div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-start>${ICON.play}<span data-role="go-label">시작</span></button>
          <button class="tool-pill" data-tap>${ICON.note}박자 두드리기</button>
        </div>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>빠르기</b>
          <div class="tool-step">
            <button class="tool-round" data-step="-5" aria-label="느리게">−</button>
            <select data-beats aria-label="박자">
              <option value="2">2박</option><option value="3">3박</option>
              <option value="4" selected>4박</option><option value="6">6박</option>
            </select>
            <button class="tool-round" data-step="5" aria-label="빠르게">+</button>
          </div>
          <input type="range" min="30" max="240" value="90" data-range class="tool-range" aria-label="빠르기" />
        </div>
        <div class="tool-set"><b>자주 쓰는 빠르기</b>
          <div class="tool-set-grid">
            ${[["60", "Largo"], ["76", "Adagio"], ["96", "Andante"], ["120", "Moderato"], ["144", "Allegro"], ["184", "Presto"]]
              .map(([v, name]) => `<button class="tool-chip" data-bpm="${v}">${name}<br />${v}</button>`).join("")}
          </div>
        </div>
      </aside>
    </div>`;

  const bpmView = host.querySelector("[data-role=bpm]");
  const range = host.querySelector("[data-range]");
  const dots = host.querySelector("[data-role=dots]");
  const startBtn = host.querySelector("[data-start]");
  let bpm = 90;
  let beats = 4;
  let timer = null;
  let beat = 0;
  let taps = [];

  const drawDots = () => {
    dots.innerHTML = Array.from({ length: beats }, (_, i) => `<span class="${i === 0 ? "is-accent" : ""}"></span>`).join("");
  };
  const setBpm = (value) => {
    bpm = Math.min(240, Math.max(30, Math.round(value)));
    bpmView.textContent = bpm;
    range.value = bpm;
    if (timer) { start(); }
  };
  const goLabel = host.querySelector("[data-role=go-label]");
  const stop = () => { clearInterval(timer); timer = null; goLabel.textContent = "시작"; startBtn.classList.remove("is-stop"); [...dots.children].forEach((d) => d.classList.remove("is-on")); };
  function start() {
    clearInterval(timer);
    ac();
    beat = 0;
    goLabel.textContent = "멈춤";
    startBtn.classList.add("is-stop");
    const tick = () => {
      const accent = beat % beats === 0;
      clickSound(accent);
      [...dots.children].forEach((d, i) => d.classList.toggle("is-on", i === beat % beats));
      beat += 1;
    };
    tick();
    timer = setInterval(tick, 60000 / bpm);
  }

  range.addEventListener("input", () => setBpm(Number(range.value)));
  host.querySelectorAll("[data-step]").forEach((b) => b.addEventListener("click", () => setBpm(bpm + Number(b.dataset.step))));
  host.querySelectorAll("[data-bpm]").forEach((b) => b.addEventListener("click", () => setBpm(Number(b.dataset.bpm))));
  host.querySelector("[data-beats]").addEventListener("change", (e) => { beats = Number(e.target.value); drawDots(); });
  host.querySelector("[data-tap]").addEventListener("click", () => {
    const now = Date.now();
    taps = taps.filter((t) => now - t < 3000).concat(now);
    if (taps.length >= 2) {
      const gaps = taps.slice(1).map((t, i) => t - taps[i]);
      setBpm(60000 / (gaps.reduce((a, b) => a + b, 0) / gaps.length));
    }
  });
  startBtn.addEventListener("click", () => { if (timer) stop(); else start(); });

  drawDots();
  return stop;
}

/* ── 4. 발표도우미 — 돌림판과 사다리타기 ──────────── */
const WHEEL_COLORS = ["#f7bb2e", "#59a9f0", "#3ecf96", "#f57fb0", "#9a7cf0", "#ef705e", "#45c9c0", "#f2955a"];

function mountChooserWorkspace(host, initialMode = "wheel") {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <div class="tool-tabs" data-role="tabs">
          <button type="button" data-mode="wheel" class="${initialMode === "wheel" ? "is-on" : ""}">돌림판</button>
          <button type="button" data-mode="ladder" class="${initialMode === "ladder" ? "is-on" : ""}">사다리타기</button>
        </div>
        <input class="tool-name" type="text" placeholder="제목을 입력하세요." data-title />

        <div data-pane="wheel" class="tool-pane"${initialMode === "wheel" ? "" : " hidden"}>
          <div class="wheel-wrap">
            <span class="wheel-pin" aria-hidden="true"></span>
            <canvas data-wheel width="620" height="620" aria-label="돌림판"></canvas>
          </div>
          <div class="tool-row tool-main">
            <button class="tool-pill is-go" data-spin>${ICON.play}돌리기</button>
            <button class="tool-pill" data-again>${ICON.reset}전체 되살리기</button>
          </div>
        </div>

        <div data-pane="ladder" class="tool-pane"${initialMode === "ladder" ? "" : " hidden"}>
          <canvas class="tool-canvas" data-ladder width="760" height="380"></canvas>
          <div class="tool-row" data-role="starts"></div>
          <div class="tool-row tool-main">
            <button class="tool-pill is-go" data-make>${ICON.reset}사다리 새로 만들기</button>
          </div>
        </div>

        <p class="flip-msg" data-role="result" hidden></p>
      </div>

      <aside class="tool-side">
        <div class="tool-set"><b>이름 · 키워드</b>
          <textarea rows="7" data-names placeholder="한 줄에 하나씩 적어 주세요&#10;1모둠&#10;2모둠&#10;3모둠&#10;4모둠"></textarea>
        </div>
        <div class="tool-set"><b>사다리 결과</b>
          <textarea rows="4" data-prizes placeholder="당첨&#10;꽝&#10;꽝&#10;꽝"></textarea>
        </div>
        <label class="tool-check"><input type="checkbox" data-norepeat checked /> 돌림판에서 뽑은 것은 빼기</label>
        <button class="tool-chip" data-save>목록 저장</button>
        <span class="tool-sub" data-role="saved"></span>
      </aside>
    </div>`;

  const names = host.querySelector("[data-names]");
  const result = host.querySelector("[data-role=result]");
  const canvas = host.querySelector("[data-wheel]");
  const ctx = canvas.getContext("2d");
  names.value = toolStore("names") || "1모둠\n2모둠\n3모둠\n4모둠";

  const readAll = () => names.value.split("\n").map((n) => n.trim()).filter(Boolean);
  let pool = readAll();
  let angle = 0;
  let spinning = false;

  /* 돌림판 그리기 */
  function drawWheel() {
    const list = pool.length ? pool : ["키워드1", "키워드2"];
    const r = canvas.width / 2;
    const seg = (Math.PI * 2) / list.length;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    list.forEach((name, i) => {
      const from = -Math.PI / 2 + i * seg;
      ctx.beginPath();
      ctx.moveTo(r, r);
      ctx.arc(r, r, r - 6, from, from + seg);
      ctx.closePath();
      ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.stroke();

      const mid = from + seg / 2;
      const flipped = Math.cos(mid) < 0;          // 왼쪽 조각은 글씨를 뒤집어 바로 읽히게
      ctx.save();
      ctx.translate(r, r);
      ctx.rotate(flipped ? mid + Math.PI : mid);
      ctx.fillStyle = "#2c3049";
      ctx.font = `800 ${list.length > 10 ? 22 : 28}px "Pretendard", sans-serif`;
      ctx.textAlign = flipped ? "left" : "right";
      ctx.textBaseline = "middle";
      ctx.fillText(name.length > 9 ? `${name.slice(0, 8)}…` : name, flipped ? -(r - 28) : r - 28, 0);
      ctx.restore();
    });
    ctx.beginPath();
    ctx.arc(r, r, 34, 0, Math.PI * 2);
    ctx.fillStyle = "#3d4157";
    ctx.fill();
  }

  function spin() {
    const list = pool.length ? pool : readAll();
    if (!list.length) { say("이름을 먼저 적어 주세요"); return; }
    if (spinning) return;
    spinning = true;
    ac();
    const index = Math.floor(Math.random() * list.length);
    const segDeg = 360 / list.length;
    angle += 360 * (4 + Math.floor(Math.random() * 3)) + ((360 - ((angle + (index + 0.5) * segDeg) % 360)) % 360);
    canvas.style.transform = `rotate(${angle}deg)`;
    setTimeout(() => {
      spinning = false;
      playToolSound("xylophone");
      say(list[index]);
      if (host.querySelector("[data-norepeat]").checked && pool.length > 1) {
        pool = pool.filter((_, i) => i !== index);
        drawWheel();
      }
    }, 4300);
  }

  const say = (text) => { result.textContent = text; result.hidden = false; };

  /* 사다리타기 */
  const ladder = host.querySelector("[data-ladder]");
  const lctx = ladder.getContext("2d");
  const starts = host.querySelector("[data-role=starts]");
  let count = 4;
  let rungs = [];

  const colX = (i) => 60 + i * ((ladder.width - 120) / Math.max(1, count - 1));
  const rowY = (r) => 44 + r * ((ladder.height - 88) / 11);
  const prizeAt = (i) => {
    const list = host.querySelector("[data-prizes]").value.split("\n").map((s) => s.trim()).filter(Boolean);
    return list[i] || `${i + 1}`;
  };
  const startName = (i) => readAll()[i] || `${i + 1}번`;

  function buildLadder() {
    count = Math.min(10, Math.max(2, readAll().length || 4));
    rungs = [];
    for (let r = 1; r <= 10; r += 1) {
      const used = new Set();
      for (let c = 0; c < count - 1; c += 1) {
        if (used.has(c) || Math.random() < 0.55) continue;
        rungs.push({ row: r, col: c });
        used.add(c); used.add(c + 1);
      }
    }
    starts.innerHTML = Array.from({ length: count }, (_, i) =>
      `<button class="tool-chip" data-start="${i}">${startName(i)}</button>`).join("");
    result.hidden = true;
    drawLadder();
  }

  function drawLadder(path) {
    lctx.clearRect(0, 0, ladder.width, ladder.height);
    lctx.lineWidth = 3;
    lctx.lineCap = "round";
    for (let i = 0; i < count; i += 1) {
      lctx.strokeStyle = "#c9cbe0";
      lctx.beginPath(); lctx.moveTo(colX(i), rowY(0)); lctx.lineTo(colX(i), rowY(11)); lctx.stroke();
    }
    rungs.forEach((g) => {
      lctx.strokeStyle = "#c9cbe0";
      lctx.beginPath(); lctx.moveTo(colX(g.col), rowY(g.row)); lctx.lineTo(colX(g.col + 1), rowY(g.row)); lctx.stroke();
    });
    if (path) {
      lctx.lineWidth = 5;
      lctx.strokeStyle = "#ef705e";
      lctx.beginPath();
      path.forEach((p, i) => (i ? lctx.lineTo(colX(p.col), rowY(p.row)) : lctx.moveTo(colX(p.col), rowY(p.row))));
      lctx.stroke();
    }
    lctx.font = '800 15px "Pretendard", sans-serif';
    lctx.textAlign = "center";
    for (let i = 0; i < count; i += 1) {
      lctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
      lctx.fillText(startName(i), colX(i), 24);
      lctx.fillStyle = "#6b6f86";
      lctx.fillText(prizeAt(i), colX(i), ladder.height - 12);
    }
  }

  function runLadder(startCol) {
    let col = startCol;
    const path = [{ row: 0, col }];
    for (let r = 1; r <= 10; r += 1) {
      const right = rungs.find((g) => g.row === r && g.col === col);
      const left = rungs.find((g) => g.row === r && g.col + 1 === col);
      if (right) { path.push({ row: r, col }); col += 1; path.push({ row: r, col }); }
      else if (left) { path.push({ row: r, col }); col -= 1; path.push({ row: r, col }); }
    }
    path.push({ row: 11, col });
    drawLadder(path);
    say(`${startName(startCol)} → ${prizeAt(col)}`);
    ac(); playToolSound("triangle");
  }

  /* 갈래 바꾸기 */
  host.querySelector("[data-role=tabs]").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-mode]");
    if (!tab) return;
    host.querySelectorAll("[data-mode]").forEach((b) => b.classList.toggle("is-on", b === tab));
    host.querySelector('[data-pane="wheel"]').hidden = tab.dataset.mode !== "wheel";
    host.querySelector('[data-pane="ladder"]').hidden = tab.dataset.mode !== "ladder";
    result.hidden = true;
    if (tab.dataset.mode === "ladder") buildLadder(); else drawWheel();
  });

  host.querySelector("[data-spin]").addEventListener("click", spin);
  host.querySelector("[data-again]").addEventListener("click", () => {
    pool = readAll(); angle = 0; canvas.style.transition = "none"; canvas.style.transform = "rotate(0deg)";
    requestAnimationFrame(() => { canvas.style.transition = ""; });
    result.hidden = true; drawWheel();
  });
  host.querySelector("[data-make]").addEventListener("click", buildLadder);
  host.querySelector("[data-prizes]").addEventListener("input", () => drawLadder());
  starts.addEventListener("click", (event) => {
    const b = event.target.closest("[data-start]");
    if (b) runLadder(Number(b.dataset.start));
  });
  names.addEventListener("input", () => { pool = readAll(); drawWheel(); });
  host.querySelector("[data-save]").addEventListener("click", () => {
    toolStore("names", names.value);
    const saved = host.querySelector("[data-role=saved]");
    saved.textContent = "저장했습니다";
    setTimeout(() => { saved.textContent = ""; }, 1600);
  });

  drawWheel();
  return () => {};
}

function mountChooser(host) {
  let cleanup = null;
  const showChoice = () => {
    if (cleanup) { cleanup(); cleanup = null; }
    host.innerHTML = `
      <section class="chooser-home" aria-label="발표도우미 방식 선택">
        <p class="chooser-kicker">발표도우미</p>
        <h3>오늘은 어떤 방식으로<br />발표자를 뽑을까요?</h3>
        <div class="chooser-choice-grid">
          <button type="button" class="chooser-choice is-wheel" data-chooser-mode="wheel">
            <span class="chooser-doodle" aria-hidden="true">◉</span>
            <strong>돌림판</strong><small>이름이나 모둠을 돌려서 뽑기</small>
          </button>
          <button type="button" class="chooser-choice is-ladder" data-chooser-mode="ladder">
            <span class="chooser-doodle" aria-hidden="true">♜</span>
            <strong>사다리타기</strong><small>결과를 정해 재미있게 고르기</small>
          </button>
        </div>
      </section>`;
    host.querySelectorAll("[data-chooser-mode]").forEach((button) => button.addEventListener("click", () => {
      cleanup = mountChooserWorkspace(host, button.dataset.chooserMode);
    }));
  };
  showChoice();
  return () => { if (cleanup) cleanup(); };
}

/* ── 5. 모둠 점수 ─────────────────────────────────── */
function mountTeams(host) {
  host.innerHTML = `
    <div class="tool-layout is-solo">
      <div class="tool-pane">
        <input class="tool-name" type="text" placeholder="제목을 입력하세요." data-title />
        <div class="tool-teams" data-role="teams"></div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-add>${ICON.play}모둠 더하기</button>
          <button class="tool-pill" data-zero>${ICON.reset}점수 0으로</button>
          <button class="tool-pill" data-clear>모두 지우기</button>
        </div>
      </div>
    </div>`;

  const board = host.querySelector("[data-role=teams]");
  let teams = toolStore("teams") || [
    { name: "1모둠", score: 0 }, { name: "2모둠", score: 0 },
    { name: "3모둠", score: 0 }, { name: "4모둠", score: 0 },
  ];
  const save = () => toolStore("teams", teams);

  function draw() {
    const best = Math.max(0, ...teams.map((t) => t.score));
    board.innerHTML = teams.map((team, i) => `
      <div class="tool-team${team.score === best && best > 0 ? " is-best" : ""}">
        <input class="tool-team-name" value="${team.name.replace(/"/g, "&quot;")}" data-name="${i}" aria-label="모둠 이름" />
        <strong class="tool-team-score">${team.score}</strong>
        <div class="tool-team-btns">
          <button data-delta="${i}:1">+1</button>
          <button data-delta="${i}:5">+5</button>
          <button data-delta="${i}:-1">−1</button>
          <button data-remove="${i}" class="is-quiet">삭제</button>
        </div>
      </div>`).join("");
  }

  board.addEventListener("click", (event) => {
    const delta = event.target.closest("[data-delta]");
    if (delta) {
      const [i, d] = delta.dataset.delta.split(":").map(Number);
      teams[i].score += d;
      save(); draw(); return;
    }
    const remove = event.target.closest("[data-remove]");
    if (remove) { teams.splice(Number(remove.dataset.remove), 1); save(); draw(); }
  });
  board.addEventListener("input", (event) => {
    const name = event.target.closest("[data-name]");
    if (!name) return;
    teams[Number(name.dataset.name)].name = name.value;
    save();
  });
  host.querySelector("[data-add]").addEventListener("click", () => {
    teams.push({ name: `${teams.length + 1}모둠`, score: 0 }); save(); draw();
  });
  host.querySelector("[data-zero]").addEventListener("click", () => {
    teams = teams.map((t) => ({ ...t, score: 0 })); save(); draw();
  });
  host.querySelector("[data-clear]").addEventListener("click", () => { teams = []; save(); draw(); });

  draw();
  return () => {};
}

/* ── 6. 자리 바꾸기 ───────────────────────────────── */
function mountSeats(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <p class="seat-desk">칠판</p>
        <div class="seat-board" data-role="board"></div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-shuffle>${ICON.play}자리 섞기</button>
          <button class="tool-pill" data-order>${ICON.reset}번호 차례로</button>
        </div>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>자리 모양</b>
          <div class="tool-step">
            <button class="tool-round" data-col="-1" aria-label="줄 줄이기">−</button>
            <select data-cols aria-label="한 줄에 놓을 자리 수">
              ${[2, 3, 4, 5, 6].map((n) => `<option value="${n}"${n === 4 ? " selected" : ""}>${n}자리씩</option>`).join("")}
            </select>
            <button class="tool-round" data-col="1" aria-label="줄 늘리기">+</button>
          </div>
        </div>
        <div class="tool-set"><b>이름</b>
          <textarea rows="9" data-names placeholder="한 줄에 한 명씩 적어 주세요&#10;1번 김민준&#10;2번 이서연"></textarea>
        </div>
        <label class="tool-check"><input type="checkbox" data-pairs /> 앞 번호와 뒤 번호를 번갈아 앉히기</label>
        <button class="tool-chip" data-save>이름 저장</button>
        <span class="tool-sub" data-role="saved"></span>
      </aside>
    </div>`;

  const board = host.querySelector("[data-role=board]");
  const names = host.querySelector("[data-names]");
  names.value = toolStore("seat-names") || toolStore("names") || "";

  const readAll = () => names.value.split("\n").map((n) => n.trim()).filter(Boolean);
  let order = readAll();

  function draw(animate) {
    const cols = Number(host.querySelector("[data-cols]").value);
    const list = order.length ? order : Array.from({ length: 20 }, (_, i) => `${i + 1}번`);
    const rows = [];
    for (let i = 0; i < list.length; i += cols) rows.push(list.slice(i, i + cols));
    board.innerHTML = rows.map((row, r) => `
      <div class="seat-row">
        ${row.map((name, c) => `
          <div class="seat${animate ? " is-new" : ""}" style="animation-delay:${(r * cols + c) * 22}ms">
            <span>${name}</span><small>${r + 1}줄 ${c + 1}번째</small>
          </div>`).join("")}
      </div>`).join("");
  }

  host.querySelector("[data-shuffle]").addEventListener("click", () => {
    order = shuffle(readAll());
    if (!order.length) return;
    if (host.querySelector("[data-pairs]").checked) order = weave(order);
    ac(); playToolSound("xylophone");
    draw(true);
  });
  host.querySelector("[data-order]").addEventListener("click", () => { order = readAll(); draw(true); });
  host.querySelectorAll("[data-col]").forEach((b) => b.addEventListener("click", () => {
    const select = host.querySelector("[data-cols]");
    const next = Math.min(6, Math.max(2, Number(select.value) + Number(b.dataset.col)));
    select.value = next;
    draw(false);
  }));
  host.querySelector("[data-cols]").addEventListener("change", () => draw(false));
  names.addEventListener("input", () => { order = readAll(); draw(false); });
  host.querySelector("[data-save]").addEventListener("click", () => {
    toolStore("seat-names", names.value);
    const saved = host.querySelector("[data-role=saved]");
    saved.textContent = "저장했습니다";
    setTimeout(() => { saved.textContent = ""; }, 1600);
  });

  // 앞쪽 절반과 뒤쪽 절반을 번갈아 끼워 넣어 짝을 섞는다
  function weave(list) {
    const half = Math.ceil(list.length / 2);
    const a = list.slice(0, half);
    const b = list.slice(half);
    const out = [];
    for (let i = 0; i < half; i += 1) {
      out.push(a[i]);
      if (b[i]) out.push(b[i]);
    }
    return out;
  }

  draw(false);
  return () => {};
}

/* ── 7. 깜깜이 ────────────────────────────────────── */
function mountDark(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <div class="flip"><span class="flip-tile">🌙</span></div>
        <p class="tool-sub">화면을 어둡게 덮어 시선을 모읍니다. 마우스를 따라 동그란 창이 열립니다.</p>
        <div class="tool-row tool-main"><button class="tool-pill is-go" data-go>${ICON.play}덮기 시작</button></div>
        <p class="tool-sub">끄려면 화면을 누르거나 <b>Esc</b> 를 누르세요.</p>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>어둡기</b>
          <input type="range" min="40" max="100" value="88" data-dim class="tool-range" aria-label="어둡기" />
        </div>
        <div class="tool-set"><b>동그란 창 크기</b>
          <input type="range" min="0" max="260" value="120" data-hole class="tool-range" aria-label="창 크기" />
        </div>
      </aside>
    </div>`;

  let cover = null;
  const close = () => { if (cover) { cover.remove(); cover = null; } };

  host.querySelector("[data-go]").addEventListener("click", () => {
    close();
    const dim = Number(host.querySelector("[data-dim]").value) / 100;
    const hole = Number(host.querySelector("[data-hole]").value);
    cover = el(`<div class="tool-cover" role="button" tabindex="0" aria-label="깜깜이 끄기"></div>`);
    const paint = (x, y) => {
      cover.style.background = hole > 0
        ? `radial-gradient(circle ${hole}px at ${x}px ${y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,${dim}) 100%)`
        : `rgba(0,0,0,${dim})`;
    };
    paint(window.innerWidth / 2, window.innerHeight / 2);
    cover.addEventListener("mousemove", (e) => paint(e.clientX, e.clientY));
    cover.addEventListener("click", close);
    document.body.appendChild(cover);
    cover.focus();
  });

  return close;
}

/* ── 8. 집중 ──────────────────────────────────────── */
function mountFocus(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <div class="flip"><span class="flip-tile" data-role="view">집중!</span></div>
        <div class="tool-row tool-main">
          <button class="tool-pill is-go" data-go>${ICON.play}3 · 2 · 1 시작</button>
          <button class="tool-pill" data-chime>${ICON.note}주의 끌기 소리</button>
        </div>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>보여 줄 문구</b>
          <input type="text" data-msg value="집중!" />
        </div>
        <div class="tool-set"><b>자주 쓰는 문구</b>
          <div class="tool-set-grid">
            ${["집중!", "모두 앞을 보세요", "악기를 내려놓으세요", "조용히", "자리에 앉기", "준비 됐나요?"]
              .map((m) => `<button class="tool-chip" data-say="${m}">${m}</button>`).join("")}
          </div>
        </div>
        <p class="tool-sub">카운트다운이 끝나면 문구가 온 화면에 크게 나타납니다.</p>
      </aside>
    </div>`;

  const view = host.querySelector("[data-role=view]");
  let timer = null;
  let cover = null;
  const closeCover = () => { if (cover) { cover.remove(); cover = null; } };
  const stop = () => { clearInterval(timer); timer = null; view.classList.remove("is-flash"); closeCover(); };

  host.querySelector("[data-go]").addEventListener("click", () => {
    stop(); ac();
    let n = 3;
    view.textContent = n;
    clickSound(false);
    timer = setInterval(() => {
      n -= 1;
      if (n > 0) { view.textContent = n; clickSound(false); return; }
      clearInterval(timer); timer = null;
      view.textContent = host.querySelector("[data-msg]").value.trim() || "집중!";
      view.classList.add("is-flash");
      playToolSound("bell");
      cover = el(`<button class="focus-cover" type="button" aria-label="집중 화면 닫기"><span>모두,</span><strong></strong><small>화면을 누르거나 Esc를 누르세요</small></button>`);
      cover.querySelector("strong").textContent = view.textContent;
      cover.addEventListener("click", closeCover);
      document.body.appendChild(cover);
      setTimeout(() => view.classList.remove("is-flash"), 2600);
    }, 900);
  });
  host.querySelector("[data-chime]").addEventListener("click", () => { ac(); playToolSound("triangle"); });
  host.querySelectorAll("[data-say]").forEach((b) => b.addEventListener("click", () => {
    host.querySelector("[data-msg]").value = b.dataset.say;
  }));

  return stop;
}

/* ── 9. 배경음악 ─────────────────────────────────── */
function mountAmbience(host) {
  host.innerHTML = `
    <div class="tool-layout">
      <div class="tool-pane">
        <div class="flip"><span class="flip-tile">♪</span></div>
        <p class="tool-sub">활동 시간에 깔아 두는 잔잔한 배경음입니다. 저작권 걱정 없이 이 브라우저에서 바로 만들어 냅니다.</p>
        <div class="tool-row tool-main"><button class="tool-pill is-go" data-go>${ICON.play}켜기</button></div>
      </div>
      <aside class="tool-side">
        <div class="tool-set"><b>소리 고르기</b>
          <div class="tool-set-grid">
            ${[["rain", "빗소리"], ["wind", "바람"], ["hum", "집중 사운드"]].map(([k, label], i) =>
              `<button class="tool-chip${i === 0 ? " is-on" : ""}" data-kind="${k}">${label}</button>`).join("")}
          </div>
        </div>
        <div class="tool-set"><b>소리 크기</b>
          <input type="range" min="0" max="100" value="35" data-vol class="tool-range" aria-label="소리 크기" />
        </div>
      </aside>
    </div>`;

  let nodes = null;
  let kind = "rain";

  const stop = () => {
    if (!nodes) return;
    try { nodes.src.stop(); } catch { /* 이미 멈춤 */ }
    nodes.gain.disconnect();
    nodes = null;
    host.querySelector("[data-go]").innerHTML = `${ICON.play}켜기`;
  };

  function start() {
    const ctx = ac();
    const seconds = 2;
    const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = (last + 0.02 * white) / 1.02;      // 갈색 잡음 쪽으로
      data[i] = kind === "rain" ? white * 0.35 + last * 2 : last * 3.2;
    }
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = kind === "rain" ? 2200 : kind === "wind" ? 700 : 300;
    const gain = ctx.createGain();
    gain.gain.value = Number(host.querySelector("[data-vol]").value) / 100 * 0.5;
    src.connect(filter).connect(gain).connect(ctx.destination);
    src.start();
    nodes = { src, gain };
    host.querySelector("[data-go]").innerHTML = `${ICON.play}끄기`;
  }

  host.querySelectorAll("[data-kind]").forEach((b) => b.addEventListener("click", () => {
    host.querySelectorAll("[data-kind]").forEach((o) => o.classList.remove("is-on"));
    b.classList.add("is-on");
    kind = b.dataset.kind;
    if (nodes) { stop(); start(); }
  }));
  host.querySelector("[data-vol]").addEventListener("input", (e) => {
    if (nodes) nodes.gain.gain.value = Number(e.target.value) / 100 * 0.5;
  });
  host.querySelector("[data-go]").addEventListener("click", () => { if (nodes) stop(); else start(); });

  return stop;
}

/* ── 10. 칠판 ─────────────────────────────────────── */
function mountBoard(host) {
  host.innerHTML = `
    <div class="tool-layout is-solo"><div class="tool-pane">
    <div class="tool-row">
      <span class="tool-swatches">
        ${["#222a3a", "#e04848", "#2f9c8a", "#3a7bd5", "#d59a1a", "#ffffff"].map((c, i) =>
          `<button class="tool-swatch${i === 0 ? " is-on" : ""}" style="--c:${c}" data-color="${c}" aria-label="색 ${i + 1}"></button>`).join("")}
      </span>
      <label class="tool-field">굵기 <input type="range" min="2" max="24" value="5" data-size class="tool-range" /></label>
      <button class="tool-chip" data-bg>바탕 바꾸기</button>
      <button class="tool-chip" data-eraser>지우개</button>
      <button class="tool-chip" data-undo>되돌리기</button>
      <button class="tool-chip is-quiet" data-clear>모두 지우기</button>
    </div>
    <canvas class="tool-canvas is-board" data-canvas width="1000" height="560"></canvas>
    </div></div>`;

  const canvas = host.querySelector("[data-canvas]");
  const ctx = canvas.getContext("2d");
  let color = "#222a3a";
  let size = 5;
  let drawing = false;
  let dark = false;
  let erasing = false;
  const shots = [];

  const fillBg = () => {
    ctx.fillStyle = dark ? "#183028" : "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };
  const snap = () => { shots.push(canvas.toDataURL()); if (shots.length > 20) shots.shift(); };
  const pos = (e) => {
    const r = canvas.getBoundingClientRect();
    const p = e.touches ? e.touches[0] : e;
    return { x: (p.clientX - r.left) * (canvas.width / r.width), y: (p.clientY - r.top) * (canvas.height / r.height) };
  };

  const down = (e) => { e.preventDefault(); snap(); drawing = true; const { x, y } = pos(e); ctx.beginPath(); ctx.moveTo(x, y); };
  const move = (e) => {
    if (!drawing) return;
    e.preventDefault();
    const { x, y } = pos(e);
    ctx.globalCompositeOperation = erasing ? "destination-out" : "source-over";
    ctx.strokeStyle = color; ctx.lineWidth = erasing ? size * 2.6 : size; ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.lineTo(x, y); ctx.stroke();
  };
  const up = () => { drawing = false; };

  canvas.addEventListener("mousedown", down);
  canvas.addEventListener("mousemove", move);
  window.addEventListener("mouseup", up);
  canvas.addEventListener("touchstart", down, { passive: false });
  canvas.addEventListener("touchmove", move, { passive: false });
  canvas.addEventListener("touchend", up);

  host.querySelectorAll("[data-color]").forEach((b) => b.addEventListener("click", () => {
    host.querySelectorAll("[data-color]").forEach((o) => o.classList.remove("is-on"));
    b.classList.add("is-on");
    color = b.dataset.color;
  }));
  host.querySelector("[data-size]").addEventListener("input", (e) => { size = Number(e.target.value); });
  host.querySelector("[data-eraser]").addEventListener("click", (event) => {
    erasing = !erasing;
    event.currentTarget.classList.toggle("is-on", erasing);
    event.currentTarget.textContent = erasing ? "지우개 사용 중" : "지우개";
  });
  host.querySelector("[data-bg]").addEventListener("click", () => {
    dark = !dark;
    canvas.classList.toggle("is-dark", dark);
    snap(); fillBg();
  });
  host.querySelector("[data-clear]").addEventListener("click", () => { snap(); fillBg(); });
  host.querySelector("[data-undo]").addEventListener("click", () => {
    const last = shots.pop();
    if (!last) return;
    const img = new Image();
    img.onload = () => { ctx.clearRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0); };
    img.src = last;
  });

  fillBg();
  return () => { window.removeEventListener("mouseup", up); };
}

/* ── 도구 목록 ────────────────────────────────────── */
const classTools = [
  { key: "timer", label: "타이머", desc: "남은 시간 재기", tone: "salmon", mount: mountTimer,
    art: `<svg viewBox="0 0 48 48"><rect x="11" y="5" width="26" height="4" rx="2" fill="#3d4157"/><rect x="11" y="39" width="26" height="4" rx="2" fill="#3d4157"/><path d="M15 9h18c0 7-6 10-6 15s6 8 6 15H15c0-7 6-10 6-15s-6-8-6-15z" fill="#fff" stroke="#3d4157" stroke-width="2.4" stroke-linejoin="round"/><path d="M19.5 13h9c-.4 4-4.5 6.6-4.5 6.6S19.9 17 19.5 13z" fill="#f7bb2e"/><path d="M24 30.5c3 2 5.2 4.8 5.6 7.5H18.4c.4-2.7 2.6-5.5 5.6-7.5z" fill="#ef705e"/></svg>` },
  { key: "stopwatch", label: "스톱워치", desc: "걸린 시간 재기", tone: "teal", mount: mountStopwatch,
    art: `<svg viewBox="0 0 48 48"><rect x="19" y="3" width="10" height="5" rx="2.5" fill="#3d4157"/><rect x="34.5" y="8" width="7" height="4.6" rx="2.3" transform="rotate(45 38 10.3)" fill="#3d4157"/><circle cx="24" cy="28" r="16" fill="#3ecf96"/><circle cx="24" cy="28" r="11.5" fill="#fff"/><path d="M24 28v-7.5" stroke="#ef705e" stroke-width="3" stroke-linecap="round"/><circle cx="24" cy="28" r="2.2" fill="#3d4157"/></svg>` },
  { key: "chooser", label: "발표도우미", desc: "돌림판과 사다리", tone: "violet", mount: mountChooser,
    art: `<svg viewBox="0 0 48 48"><circle cx="24" cy="27" r="16" fill="#fff"/><path d="M24 27V11a16 16 0 0113.9 8z" fill="#f7bb2e"/><path d="M24 27l13.9-8a16 16 0 010 16z" fill="#59a9f0"/><path d="M24 27l13.9 8a16 16 0 01-27.8 0z" fill="#3ecf96"/><path d="M24 27l-13.9 8a16 16 0 0113.9-24z" fill="#f57fb0"/><circle cx="24" cy="27" r="16" fill="none" stroke="#3d4157" stroke-width="2.4"/><circle cx="24" cy="27" r="3.4" fill="#3d4157"/><path d="M24 3.5l4.4 7h-8.8z" fill="#ef705e"/></svg>` },
  { key: "focus", label: "집중", desc: "시선 모으기", tone: "gold", mount: mountFocus,
    art: `<svg viewBox="0 0 48 48"><circle cx="22" cy="26" r="17" fill="#ef705e"/><circle cx="22" cy="26" r="11.5" fill="#fff"/><circle cx="22" cy="26" r="6" fill="#ef705e"/><circle cx="22" cy="26" r="2.4" fill="#fff"/><path d="M40 5l1.7 3.9L45.6 10l-3.9 1.7L40 15.6l-1.7-3.9L34.4 10l3.9-1.4z" fill="#f7bb2e"/></svg>` },
  { key: "dark", label: "깜깜이", desc: "화면 덮기", tone: "night", mount: mountDark,
    art: `<svg viewBox="0 0 48 48"><path d="M31 6a19 19 0 100 36 16 16 0 010-36z" fill="#5a6291"/><path d="M38.5 8.5l1.2 2.8 2.8 1.2-2.8 1.2-1.2 2.8-1.2-2.8-2.8-1.2 2.8-1.2z" fill="#f7bb2e"/><circle cx="42" cy="22" r="1.6" fill="#f7bb2e"/><circle cx="35.5" cy="25" r="1.2" fill="#f7bb2e"/></svg>` },
  { key: "ambience", label: "배경음악", desc: "잔잔한 배경 소리", tone: "sky", mount: mountAmbience,
    art: `<svg viewBox="0 0 48 48"><path d="M6 19h7l10-8v26l-10-8H6z" fill="#59a9f0"/><path d="M29 18a9 9 0 010 12M34.5 12.5a16.5 16.5 0 010 23" stroke="#3ecf96" stroke-width="3.2" fill="none" stroke-linecap="round"/></svg>` },
  { key: "board", label: "칠판", desc: "쓰고 그리기", tone: "green", mount: mountBoard,
    art: `<svg viewBox="0 0 48 48"><rect x="4" y="7" width="40" height="27" rx="4" fill="#3d4157"/><rect x="7.5" y="10.5" width="33" height="20" rx="2" fill="#2f8f5c"/><path d="M12.5 22c3-4.5 6 2 9-2.2s6 1 9-3.3" stroke="#fff" stroke-width="2.2" fill="none" stroke-linecap="round"/><rect x="17" y="37" width="11" height="4.4" rx="2.2" fill="#3d4157"/><rect x="30" y="37.3" width="9" height="3.8" rx="1.9" fill="#f7bb2e"/></svg>` },
  { key: "metronome", label: "메트로놈", desc: "빠르기 연습", tone: "indigo", mount: mountMetronome,
    art: `<svg viewBox="0 0 48 48"><path d="M19 5h10l8 37H11z" fill="#9a7cf0"/><path d="M12.6 31h22.8l1.6 11H11z" fill="#7a5ae0"/><path d="M23.5 38L29 11" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><rect x="24.6" y="17" width="8.4" height="5" rx="1.8" transform="rotate(-11 28.8 19.5)" fill="#f7bb2e"/></svg>` },
  { key: "teams", label: "모둠 점수", desc: "모둠별 점수", tone: "magenta", mount: mountTeams,
    art: `<svg viewBox="0 0 48 48"><circle cx="16" cy="15" r="7" fill="#f57fb0"/><path d="M4 41c0-7 5.4-12 12-12s12 5 12 12z" fill="#f57fb0"/><circle cx="33" cy="19" r="6" fill="#59a9f0"/><path d="M23 41c0-6 4.5-10 10-10s10 4 10 10z" fill="#59a9f0"/></svg>` },
  { key: "seats", label: "자리 바꾸기", desc: "자리 새로 섞기", tone: "orange", mount: mountSeats,
    art: `<svg viewBox="0 0 48 48"><rect x="3" y="7" width="17" height="12" rx="3" fill="#59a9f0"/><rect x="28" y="29" width="17" height="12" rx="3" fill="#f7bb2e"/><path d="M26 13h13m0 0l-4.4-4.4M39 13l-4.4 4.4" stroke="#3d4157" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 35H9m0 0l4.4-4.4M9 35l4.4 4.4" stroke="#3d4157" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
];

/* ── 화면 ─────────────────────────────────────────── */
let toolCleanup = null;

function closeTool() {
  const stage = document.querySelector("#tool-stage");
  if (!stage || stage.hidden) return;
  if (typeof toolCleanup === "function") { try { toolCleanup(); } catch { /* 정리 실패는 무시 */ } }
  toolCleanup = null;
  stage.hidden = true;
  document.querySelector(".focus-cover")?.remove();
  document.body.classList.remove("tool-open");
  document.querySelector("#tool-stage-body").innerHTML = "";
}

function openTool(key) {
  const tool = classTools.find((t) => t.key === key);
  if (!tool) return;
  closeTool();
  const stage = document.querySelector("#tool-stage");
  const body = document.querySelector("#tool-stage-body");
  document.querySelector("#tool-stage-title").textContent = tool.label;
  stage.dataset.tone = tool.tone;
  stage.hidden = false;
  document.body.classList.add("tool-open");
  toolCleanup = tool.mount(body) || null;
  stage.querySelector("[data-tool-close]").focus();
}

function renderTools() {
  const grid = document.querySelector("#tools-grid");
  if (!grid) return;
  const sprite = {
    timer: [0, 0], stopwatch: [1, 0], chooser: [2, 0], ladder: [2, 2],
    focus: [0, 1], dark: [1, 1], ambience: [2, 1], board: [3, 1],
    metronome: [0, 2], teams: [1, 2],
  };
  grid.innerHTML = classTools.map((tool) => `
    <li class="hall-item tone-${tool.tone}">
      <button class="tool-blob" type="button" data-open="${tool.key}" style="--card-art: url('assets/class-cards/class-card-sprite.png'); --sprite-x: ${sprite[tool.key][0]}; --sprite-y: ${sprite[tool.key][1]};">
        <span class="tool-index" aria-hidden="true">${String(classTools.indexOf(tool) + 1).padStart(2, "0")}</span>
        <span class="tool-badge" aria-hidden="true">${tool.art}</span>
        <span class="hall-label">${tool.label}</span>
        <span class="hall-desc">${tool.desc}</span>
        <span class="hall-arrow" aria-hidden="true">→</span>
      </button>
    </li>`).join("");
}

document.addEventListener("click", (event) => {
  const open = event.target.closest("[data-open]");
  if (open) { openTool(open.dataset.open); return; }
  if (event.target.closest("[data-tool-close]")) closeTool();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelector(".tool-cover")?.remove();
    closeTool();
  }
});

window.classTools = classTools;
window.openTool = openTool;
window.closeTool = closeTool;
window.renderTools = renderTools;
