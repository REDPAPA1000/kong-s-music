/* 에듀테크 도구별 「소개 영상」과 「사용설명서」.
   edutech-data.js 는 도구 목록(이름·주소)만 들고 있고, 여기에 학생용 안내를 붙인다.
   둘을 나눠 둔 이유는 설명서를 한꺼번에 쓰지 않고 하나씩 채워 나가기 위해서다.
   비어 있는 도구는 화면에 단추가 아예 나오지 않는다.

   embed  도구를 설명서 화면 안에 띄울 수 있는가.
          블롭 오페라·어시스티드 멜로디처럼 SAMEORIGIN 으로 막아 둔 곳은 false 다.
   video  유튜브 주소. 실제로 열리는 것만 적는다.
   steps  학생이 그대로 따라 할 수 있는 차례. 없으면 단추가 안 나온다. */

const edutechGuides = {
  /* ── 소개 영상이 이미 있는 도구 ───────────────────────
     영상은 모두 차곡차곡TV 것이고, 주소가 살아 있는지 확인했다. */
  "쉐어드 피아노": { embed: true },
  "송메이커": {
    embed: true,
    steps: [
      "화면에 네모 칸이 깔린 판이 나옵니다. 위쪽은 음높이, 오른쪽으로 갈수록 시간이 흐릅니다.",
      "칸을 누르면 그 자리에 음이 찍힙니다. 다시 누르면 지워집니다.",
      "아래쪽 점 두 줄은 리듬입니다. 눌러서 북소리를 넣어 보세요.",
      "왼쪽 아래 ▶를 누르면 처음부터 들려줍니다. 들으면서 고치면 빠릅니다.",
      "Settings 에서 박자와 길이, 음계를 바꿀 수 있습니다. 5음 음계로 두면 어떤 칸을 눌러도 어울립니다.",
      "Save 를 누르면 주소가 만들어집니다. 그 주소를 보내면 친구가 그대로 열어 볼 수 있습니다.",
    ],
  },
  "칸딘스키": { embed: true, video: "https://www.youtube.com/embed/i75gBAAOQnw", videoSource: "차곡차곡TV" },
  "스펙트로그램": { embed: true },
  "블롭 오페라": { embed: false, video: "https://www.youtube.com/embed/OHhF0_Z-HpU", videoSource: "차곡차곡TV" },
  "비올라 더 버드": { embed: false, video: "https://www.youtube.com/embed/Kl6cXFlxfLA", videoSource: "차곡차곡TV" },
  "페인트 위드 뮤직": { embed: false, video: "https://www.youtube.com/embed/Esm5mA3OTnY", videoSource: "차곡차곡TV" },
  "타이파톤": { embed: true, video: "https://www.youtube.com/embed/itL7saLqUc4", videoSource: "차곡차곡TV" },
  "두들 바흐": { embed: false, video: "https://www.youtube.com/embed/QdFoEWmvZDM", videoSource: "차곡차곡TV" },
  "수노": { embed: false, video: "https://www.youtube.com/embed/pzG7fQsN5KQ", videoSource: "차곡차곡TV",
    caution: "가입이 필요하고 나이 제한이 있습니다. 수업에 쓰기 전 계정 정책을 확인하세요." },
  "리와일드 더 월드": { embed: false, video: "https://www.youtube.com/embed/tlVWTL_Rixs", videoSource: "차곡차곡TV" },

  /* ── 화면 안에 띄울 수 있다고 확인한 도구 ───────────── */
  "파타탭": { embed: true },
  "인크레디박스": { embed: true },
  "그루브 피자": { embed: true },
  "아일 오브 튠": { embed: true },
  "톤 크래프트": { embed: true },
  "플링크": { embed: true },
  "빕박스": { embed: true },

  /* ── 띄울 수 없다고 확인한 도구 ─────────────────────── */
  "어시스티드 멜로디": { embed: false },
  "뮤지카": { embed: false },

  /* ── 준비물이나 계정이 필요한 도구 ─────────────────── */
  "세미 컨덕터": { embed: false, caution: "웹캠이 있어야 합니다. 카메라 사용 허용을 눌러야 시작됩니다." },
  "언스포큰 심포니": { embed: false, caution: "웹캠이 있어야 합니다." },
  "밴드랩": { embed: false, caution: "가입이 필요합니다." },
  "사운드트랩": { embed: false, caution: "가입이 필요합니다." },
  "유디오": { embed: false, caution: "가입이 필요하고 나이 제한이 있습니다." },
  "믹스 오디오": { embed: false, caution: "가입이 필요합니다." },
  "훅패드": { embed: false, caution: "일부 기능은 유료입니다." },
  "플랫": { embed: false, caution: "저장하려면 가입이 필요합니다." },
};

window.edutechGuides = edutechGuides;
