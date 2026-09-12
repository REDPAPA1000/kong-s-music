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

/* ── 1. 타이머 ────────────────────────────────────── */
function mountTimer(host) {
  host.innerHTML = `
    <div class="tool-big" data-role="display">00:00</div>
    <div class="tool-bar"><span data-role="fill"></span></div>
    <div class="tool-row">
      ${[30, 60, 180, 300, 600].map((s) => `<button class="tool-chip" data-add="${s}">${s < 60 ? s + "초" : s / 60 + "분"}</button>`).join("")}
      <button class="tool-chip is-quiet" data-clear>지우기</button>
    </div>
    <div class="tool-row">
      <label class="tool-field">분 <input type="number" min="0" max="180" value="0" data-min /></label>
      <label class="tool-field">초 <input type="number" min="0" max="59" value="0" data-sec /></label>
      <button class="tool-chip" data-set>맞추기</button>
    </div>
    <div class="tool-row">
      <label class="tool-field">종료음
        <select data-sound>
          <option value="piano">피아노</option>
          <option value="xylophone">실로폰</option>
          <option value="triangle">트라이앵글</option>
          <option value="bell">종</option>
          <option value="none">소리 없음</option>
        </select>
      </label>
      <label class="tool-field tool-grow">종료 문구 <input type="text" data-msg placeholder="그만! 선생님을 보세요" /></label>
    </div>
    <div class="tool-row tool-main">
      <button class="tool-go" data-start>시작</button>
      <button class="tool-chip" data-reset>되돌리기</button>
    </div>
    <p class="tool-done" data-role="done" hidden></p>`;

  const display = host.querySelector("[data-role=display]");
  const fill = host.querySelector("[data-role=fill]");
  const done = host.querySelector("[data-role=done]");
  const startBtn = host.querySelector("[data-start]");
  let total = 0;
  let left = 0;
  let ticking = null;

  const paint = () => {
    display.textContent = mmss(left);
    fill.style.width = total ? `${Math.max(0, (left / total) * 100)}%` : "0%";
    display.classList.toggle("is-done", left === 0 && total > 0 && !ticking);
  };
  const stop = () => { clearInterval(ticking); ticking = null; startBtn.textContent = "시작"; };
  const setTotal = (seconds) => { total = seconds; left = seconds; done.hidden = true; paint(); };

  host.querySelectorAll("[data-add]").forEach((b) => b.addEventListener("click", () => {
    stop();
    setTotal(total === left ? total + Number(b.dataset.add) : Number(b.dataset.add));
  }));
  host.querySelector("[data-clear]").addEventListener("click", () => { stop(); setTotal(0); });
  host.querySelector("[data-set]").addEventListener("click", () => {
    stop();
    const m = Number(host.querySelector("[data-min]").value) || 0;
    const s = Number(host.querySelector("[data-sec]").value) || 0;
    setTotal(m * 60 + s);
  });
  host.querySelector("[data-reset]").addEventListener("click", () => { stop(); left = total; done.hidden = true; paint(); });

  startBtn.addEventListener("click", () => {
    if (ticking) { stop(); return; }
    if (left <= 0) return;
    ac();
    startBtn.textContent = "멈춤";
    const endAt = Date.now() + left * 1000;
    ticking = setInterval(() => {
      left = (endAt - Date.now()) / 1000;
      if (left <= 0) {
        left = 0;
        stop();
        playToolSound(host.querySelector("[data-sound]").value);
        done.textContent = host.querySelector("[data-msg]").value.trim() || "시간이 다 되었습니다";
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
    <div class="tool-big" data-role="display">00:00.0</div>
    <div class="tool-row tool-main">
      <button class="tool-go" data-start>시작</button>
      <button class="tool-chip" data-lap>구간 기록</button>
      <button class="tool-chip is-quiet" data-reset>되돌리기</button>
    </div>
    <ol class="tool-laps" data-role="laps"></ol>`;

  const display = host.querySelector("[data-role=display]");
  const laps = host.querySelector("[data-role=laps]");
  const startBtn = host.querySelector("[data-start]");
  let base = 0;
  let elapsed = 0;
  let ticking = null;

  const show = () => {
    const t = elapsed / 1000;
    const m = Math.floor(t / 60);
    display.textContent = `${String(m).padStart(2, "0")}:${String(Math.floor(t % 60)).padStart(2, "0")}.${Math.floor((t * 10) % 10)}`;
  };
  const stop = () => { clearInterval(ticking); ticking = null; startBtn.textContent = "시작"; };

  startBtn.addEventListener("click", () => {
    if (ticking) { elapsed = Date.now() - base; stop(); return; }
    base = Date.now() - elapsed;
    startBtn.textContent = "멈춤";
    ticking = setInterval(() => { elapsed = Date.now() - base; show(); }, 50);
  });
  host.querySelector("[data-lap]").addEventListener("click", () => {
    if (!elapsed) return;
    const li = document.createElement("li");
    li.textContent = display.textContent;
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
    <div class="tool-big" data-role="bpm">90</div>
    <p class="tool-sub">BPM</p>
    <div class="tool-row">
      <button class="tool-chip" data-step="-5">−5</button>
      <input type="range" min="30" max="240" value="90" data-range class="tool-range" />
      <button class="tool-chip" data-step="5">+5</button>
    </div>
    <div class="tool-row">
      <label class="tool-field">박자
        <select data-beats>
          <option value="2">2박</option><option value="3">3박</option>
          <option value="4" selected>4박</option><option value="6">6박</option>
        </select>
      </label>
      <button class="tool-chip" data-tap>박자 두드리기</button>
    </div>
    <div class="tool-dots" data-role="dots"></div>
    <div class="tool-row tool-main"><button class="tool-go" data-start>시작</button></div>`;

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
  const stop = () => { clearInterval(timer); timer = null; startBtn.textContent = "시작"; [...dots.children].forEach((d) => d.classList.remove("is-on")); };
  function start() {
    clearInterval(timer);
    ac();
    beat = 0;
    startBtn.textContent = "멈춤";
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

/* ── 4. 시킴이 (발표 도우미) ──────────────────────── */
function mountChooser(host) {
  host.innerHTML = `
    <div class="tool-big" data-role="pick">?</div>
    <div class="tool-row tool-main">
      <button class="tool-go" data-draw>뽑기</button>
      <button class="tool-chip" data-again>전체 되살리기</button>
    </div>
    <label class="tool-check"><input type="checkbox" data-norepeat checked /> 뽑은 사람은 빼기</label>
    <p class="tool-sub" data-role="left"></p>
    <label class="tool-field tool-block">명단 (한 줄에 한 명)
      <textarea rows="6" data-names placeholder="1번 김민준&#10;2번 이서연&#10;3번 박도윤"></textarea>
    </label>
    <div class="tool-row"><button class="tool-chip" data-save>명단 저장</button><span class="tool-sub" data-role="saved"></span></div>`;

  const pick = host.querySelector("[data-role=pick]");
  const leftView = host.querySelector("[data-role=left]");
  const names = host.querySelector("[data-names]");
  const savedView = host.querySelector("[data-role=saved]");
  names.value = toolStore("names") || "";
  let pool = [];

  const readAll = () => names.value.split("\n").map((n) => n.trim()).filter(Boolean);
  const refill = () => { pool = readAll(); showLeft(); };
  const showLeft = () => { leftView.textContent = `남은 사람 ${pool.length}명 / 전체 ${readAll().length}명`; };

  host.querySelector("[data-draw]").addEventListener("click", () => {
    const all = readAll();
    if (!all.length) { pick.textContent = "명단을 먼저 적어 주세요"; return; }
    const noRepeat = host.querySelector("[data-norepeat]").checked;
    if (!noRepeat) { pick.textContent = all[Math.floor(Math.random() * all.length)]; return; }
    if (!pool.length) refill();
    if (!pool.length) return;
    const index = Math.floor(Math.random() * pool.length);
    pick.textContent = pool[index];
    pool.splice(index, 1);
    showLeft();
    ac(); playToolSound("xylophone");
  });
  host.querySelector("[data-again]").addEventListener("click", () => { refill(); pick.textContent = "?"; });
  host.querySelector("[data-save]").addEventListener("click", () => {
    toolStore("names", names.value);
    savedView.textContent = "저장했습니다";
    setTimeout(() => { savedView.textContent = ""; }, 1600);
  });
  names.addEventListener("input", refill);

  refill();
  return () => {};
}

/* ── 5. 모둠 점수 ─────────────────────────────────── */
function mountTeams(host) {
  host.innerHTML = `
    <div class="tool-teams" data-role="teams"></div>
    <div class="tool-row tool-main">
      <button class="tool-chip" data-add>모둠 더하기</button>
      <button class="tool-chip" data-zero>점수 0으로</button>
      <button class="tool-chip is-quiet" data-clear>모두 지우기</button>
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

/* ── 6. 사다리 ────────────────────────────────────── */
function mountLadder(host) {
  host.innerHTML = `
    <div class="tool-row">
      <label class="tool-field">인원 <input type="number" min="2" max="8" value="4" data-count /></label>
      <button class="tool-chip" data-make>사다리 만들기</button>
    </div>
    <label class="tool-field tool-block">결과 (한 줄에 하나, 비우면 번호로)
      <textarea rows="3" data-prizes placeholder="당첨&#10;꽝&#10;꽝&#10;꽝"></textarea>
    </label>
    <canvas class="tool-canvas" data-canvas width="720" height="360"></canvas>
    <div class="tool-row" data-role="starts"></div>
    <p class="tool-done" data-role="result" hidden></p>`;

  const canvas = host.querySelector("[data-canvas]");
  const ctx = canvas.getContext("2d");
  const starts = host.querySelector("[data-role=starts]");
  const result = host.querySelector("[data-role=result]");
  let count = 4;
  let rungs = [];

  const colX = (i) => 60 + i * ((canvas.width - 120) / (count - 1));

  function build() {
    count = Math.min(8, Math.max(2, Number(host.querySelector("[data-count]").value) || 4));
    host.querySelector("[data-count]").value = count;
    rungs = [];
    const rows = 10;
    for (let r = 1; r <= rows; r += 1) {
      const used = new Set();
      for (let c = 0; c < count - 1; c += 1) {
        if (used.has(c) || Math.random() < 0.55) continue;
        rungs.push({ row: r, col: c });
        used.add(c); used.add(c + 1);
      }
    }
    starts.innerHTML = Array.from({ length: count }, (_, i) => `<button class="tool-chip" data-start="${i}">${i + 1}번</button>`).join("");
    result.hidden = true;
    draw();
  }

  function draw(path) {
    const rowY = (r) => 30 + r * ((canvas.height - 60) / 11);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#c9cbe0";
    for (let i = 0; i < count; i += 1) {
      ctx.beginPath(); ctx.moveTo(colX(i), rowY(0)); ctx.lineTo(colX(i), rowY(11)); ctx.stroke();
    }
    rungs.forEach((g) => {
      ctx.beginPath(); ctx.moveTo(colX(g.col), rowY(g.row)); ctx.lineTo(colX(g.col + 1), rowY(g.row)); ctx.stroke();
    });
    if (path) {
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#6c6ce0";
      ctx.beginPath();
      path.forEach((p, i) => (i ? ctx.lineTo(colX(p.col), rowY(p.row)) : ctx.moveTo(colX(p.col), rowY(p.row))));
      ctx.stroke();
    }
    ctx.fillStyle = "#6b6f86";
    ctx.font = "600 14px sans-serif";
    ctx.textAlign = "center";
    for (let i = 0; i < count; i += 1) {
      ctx.fillText(`${i + 1}`, colX(i), 20);
      ctx.fillText(prizeAt(i), colX(i), canvas.height - 8);
    }
  }

  const prizeAt = (i) => {
    const list = host.querySelector("[data-prizes]").value.split("\n").map((s) => s.trim()).filter(Boolean);
    return list[i] || `${i + 1}`;
  };

  function run(startCol) {
    let col = startCol;
    const path = [{ row: 0, col }];
    for (let r = 1; r <= 10; r += 1) {
      const right = rungs.find((g) => g.row === r && g.col === col);
      const left = rungs.find((g) => g.row === r && g.col + 1 === col);
      if (right) { path.push({ row: r, col }); col += 1; path.push({ row: r, col }); }
      else if (left) { path.push({ row: r, col }); col -= 1; path.push({ row: r, col }); }
    }
    path.push({ row: 11, col });
    draw(path);
    result.textContent = `${startCol + 1}번 → ${prizeAt(col)}`;
    result.hidden = false;
    ac(); playToolSound("triangle");
  }

  starts.addEventListener("click", (e) => {
    const b = e.target.closest("[data-start]");
    if (b) run(Number(b.dataset.start));
  });
  host.querySelector("[data-make]").addEventListener("click", build);
  host.querySelector("[data-prizes]").addEventListener("input", () => draw());

  build();
  return () => {};
}

/* ── 7. 깜깜이 ────────────────────────────────────── */
function mountDark(host) {
  host.innerHTML = `
    <p class="tool-sub">화면을 어둡게 덮어 시선을 모읍니다. 마우스를 따라 동그란 창이 열립니다.</p>
    <div class="tool-row">
      <label class="tool-field tool-grow">어둡기 <input type="range" min="40" max="100" value="88" data-dim class="tool-range" /></label>
      <label class="tool-field">창 크기 <input type="range" min="0" max="260" value="120" data-hole class="tool-range" /></label>
    </div>
    <div class="tool-row tool-main"><button class="tool-go" data-go>덮기 시작</button></div>
    <p class="tool-sub">끄려면 화면을 누르거나 <b>Esc</b> 를 누르세요.</p>`;

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
    <div class="tool-big" data-role="view">집중!</div>
    <label class="tool-field tool-block">보여 줄 문구 <input type="text" data-msg value="집중!" /></label>
    <div class="tool-row tool-main">
      <button class="tool-go" data-go>3 · 2 · 1 시작</button>
      <button class="tool-chip" data-chime>주의 끌기 소리</button>
    </div>
    <p class="tool-sub">카운트다운이 끝나면 문구가 크게 깜빡입니다.</p>`;

  const view = host.querySelector("[data-role=view]");
  let timer = null;
  const stop = () => { clearInterval(timer); timer = null; view.classList.remove("is-flash"); };

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
      setTimeout(() => view.classList.remove("is-flash"), 2600);
    }, 900);
  });
  host.querySelector("[data-chime]").addEventListener("click", () => { ac(); playToolSound("triangle"); });

  return stop;
}

/* ── 9. 집중 사운드 (배경음악) ────────────────────── */
function mountAmbience(host) {
  host.innerHTML = `
    <p class="tool-sub">활동 시간에 깔아 두는 잔잔한 소리입니다. 저작권 걱정 없이 그 자리에서 만들어 냅니다.</p>
    <div class="tool-row">
      ${[["rain", "빗소리"], ["wind", "바람"], ["hum", "낮은 울림"]].map(([k, label], i) =>
        `<button class="tool-chip${i === 0 ? " is-on" : ""}" data-kind="${k}">${label}</button>`).join("")}
    </div>
    <div class="tool-row">
      <label class="tool-field tool-grow">소리 크기 <input type="range" min="0" max="100" value="35" data-vol class="tool-range" /></label>
    </div>
    <div class="tool-row tool-main"><button class="tool-go" data-go>켜기</button></div>`;

  let nodes = null;
  let kind = "rain";

  const stop = () => {
    if (!nodes) return;
    try { nodes.src.stop(); } catch { /* 이미 멈춤 */ }
    nodes.gain.disconnect();
    nodes = null;
    host.querySelector("[data-go]").textContent = "켜기";
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
    host.querySelector("[data-go]").textContent = "끄기";
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

/* ── 10. 판서 ─────────────────────────────────────── */
function mountBoard(host) {
  host.innerHTML = `
    <div class="tool-row">
      <span class="tool-swatches">
        ${["#222a3a", "#e04848", "#2f9c8a", "#3a7bd5", "#d59a1a", "#ffffff"].map((c, i) =>
          `<button class="tool-swatch${i === 0 ? " is-on" : ""}" style="--c:${c}" data-color="${c}" aria-label="색 ${i + 1}"></button>`).join("")}
      </span>
      <label class="tool-field">굵기 <input type="range" min="2" max="24" value="5" data-size class="tool-range" /></label>
      <button class="tool-chip" data-bg>바탕 바꾸기</button>
      <button class="tool-chip" data-undo>되돌리기</button>
      <button class="tool-chip is-quiet" data-clear>모두 지우기</button>
    </div>
    <canvas class="tool-canvas is-board" data-canvas width="1000" height="560"></canvas>`;

  const canvas = host.querySelector("[data-canvas]");
  const ctx = canvas.getContext("2d");
  let color = "#222a3a";
  let size = 5;
  let drawing = false;
  let dark = false;
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
    ctx.strokeStyle = color; ctx.lineWidth = size; ctx.lineCap = "round"; ctx.lineJoin = "round";
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
  { key: "timer", label: "타이머", desc: "남은 시간 재기 · 종료음", tone: "salmon", mount: mountTimer,
    art: `<svg viewBox="0 0 48 48"><path d="M14 6h20M14 42h20"/><path d="M17 6c0 9 7 12 7 18s-7 9-7 18M31 6c0 9-7 12-7 18s7 9 7 18"/></svg>` },
  { key: "stopwatch", label: "스톱워치", desc: "경과 시간 · 구간 기록", tone: "teal", mount: mountStopwatch,
    art: `<svg viewBox="0 0 48 48"><circle cx="24" cy="27" r="16"/><path d="M24 27v-9M19 5h10M24 5v6M38 14l3-3"/></svg>` },
  { key: "metronome", label: "메트로놈", desc: "빠르기 연습 · 박자 두드리기", tone: "indigo", mount: mountMetronome,
    art: `<svg viewBox="0 0 48 48"><path d="M19 6h10l7 36H12z"/><path d="M15 30h18"/><path d="M24 38V14"/></svg>` },
  { key: "chooser", label: "시킴이", desc: "발표자 무작위로 뽑기", tone: "violet", mount: mountChooser,
    art: `<svg viewBox="0 0 48 48"><circle cx="24" cy="16" r="7"/><path d="M11 41c0-7 6-12 13-12s13 5 13 12"/></svg>` },
  { key: "teams", label: "모둠 점수", desc: "모둠별 점수 기록", tone: "magenta", mount: mountTeams,
    art: `<svg viewBox="0 0 48 48"><circle cx="17" cy="17" r="6"/><circle cx="32" cy="19" r="5"/><path d="M7 40c0-6 5-10 10-10s10 4 10 10M27 40c0-5 4-8 8-8s7 3 7 8"/></svg>` },
  { key: "ladder", label: "사다리", desc: "사다리 타기로 정하기", tone: "orange", mount: mountLadder,
    art: `<svg viewBox="0 0 48 48"><path d="M14 6v36M34 6v36M14 16h20M14 26h20M14 36h20"/></svg>` },
  { key: "focus", label: "집중", desc: "카운트다운 · 주의 끌기", tone: "gold", mount: mountFocus,
    art: `<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="16"/><circle cx="24" cy="24" r="7"/><path d="M24 4v6M24 38v6M4 24h6M38 24h6"/></svg>` },
  { key: "dark", label: "깜깜이", desc: "화면 덮어 시선 모으기", tone: "night", mount: mountDark,
    art: `<svg viewBox="0 0 48 48"><path d="M30 6a18 18 0 100 36 15 15 0 010-36z"/></svg>` },
  { key: "ambience", label: "집중 사운드", desc: "활동 시간 배경 소리", tone: "sky", mount: mountAmbience,
    art: `<svg viewBox="0 0 48 48"><path d="M10 19v10h7l9 8V11l-9 8z"/><path d="M32 18a9 9 0 010 12M37 13a16 16 0 010 22"/></svg>` },
  { key: "board", label: "판서", desc: "화면에 쓰고 그리기", tone: "green", mount: mountBoard,
    art: `<svg viewBox="0 0 48 48"><rect x="6" y="10" width="36" height="24" rx="3"/><path d="M16 40h16M24 34v6"/><path d="M14 22h9M14 27h14"/></svg>` },
];

/* ── 화면 ─────────────────────────────────────────── */
let toolCleanup = null;

function closeTool() {
  const stage = document.querySelector("#tool-stage");
  if (!stage || stage.hidden) return;
  if (typeof toolCleanup === "function") { try { toolCleanup(); } catch { /* 정리 실패는 무시 */ } }
  toolCleanup = null;
  stage.hidden = true;
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
  grid.innerHTML = classTools.map((tool) => `
    <li class="hall-item tone-${tool.tone}">
      <button class="tool-blob" type="button" data-open="${tool.key}">
        <span class="tool-mark" aria-hidden="true">${tool.art}</span>
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
