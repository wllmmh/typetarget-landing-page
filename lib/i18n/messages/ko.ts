import type { Messages } from "./en"

export const ko: Messages = {
  meta: {
    title: "TypeTarget: 음성을 텍스트로, 어떤 입력란에든",
    description:
      "어떤 탭의 오디오든 받아쓰고, 어느 탭의 어떤 입력란에든 실시간으로 입력하는 무료 오픈 소스 브라우저 확장 프로그램입니다. 회의록, 자막, 그리고 모든 AI 채팅을 위한 실시간 입력.",
  },
  header: {
    addTo: "{browser}에 추가",
    language: "언어",
  },
  hero: {
    headline: "음성을 텍스트로, 어디에든 입력.",
    intro:
      "TypeTarget은 오디오를 지정한 입력란에 바로 받아써 주는 무료 브라우저 확장 프로그램입니다.",
    note: "무료 · MIT 라이선스 · Chrome 116 이상",
    availableOn: "다운로드:",
    chromeWebStore: "Chrome 웹 스토어",
    githubLabel: "GitHub의 TypeTarget 소스 코드",
    githubTitle: "GitHub의 소스 코드",
    howItWorks: "사용 방법",
  },
  steps: {
    carouselLabel: "설정 단계",
    slideLabel: "{n}/{total}",
    step: "{n}단계",
    optional: "(선택 사항)",
    pause: "슬라이드쇼 일시정지",
    play: "슬라이드쇼 재생",
    mute: "동영상 음소거",
    unmute: "동영상 음소거 해제",
    pickModel: {
      title: "모델과 언어를 선택하세요.",
      body: "컴퓨터에서 로컬로 받아쓰는 AI 모델을 선택하거나, 클라우드 제공업체에 연산을 맡기세요. 모두 합쳐 <languages>100개 이상의 언어</languages>를 이해합니다.",
      animation:
        "TypeTarget 팝업. 포인터가 모델 목록을 스크롤해 Whisper Large v3 Q5를 선택한 다음, 음성 언어 목록을 스크롤해 영어를 선택합니다.",
    },
    selectInput: {
      title: "입력을 선택하세요.",
      body: "TypeTarget 패널에서 <code>{startListening}</code> 버튼을 클릭하거나, 아무 페이지에서나 마우스 오른쪽 버튼을 클릭하세요. <code>TypeTarget</code> → <code>{listenToTab}</code>을 선택합니다.",
      animation:
        "브라우저 탭의 화상 통화. 포인터가 마우스 오른쪽 버튼을 클릭하고 TypeTarget 메뉴를 연 다음 '{listenToTab}'을 클릭합니다.",
    },
    chooseOutput: {
      title: "출력을 선택하세요.",
      body: "TypeTarget 패널에서 <code>{startTyping}</code> 버튼을 클릭하거나, 웹 페이지의 입력란을 마우스 오른쪽 버튼으로 클릭하고 <code>TypeTarget</code> → <code>{typeToField}</code>을 선택하세요.",
      animation:
        "2단계의 화상 통화. 포인터가 마우스 오른쪽 버튼을 클릭하고 TypeTarget 메뉴를 연 다음 '{typeToNewFile}'을 클릭합니다. 페이지 하단에 초록색 테두리와 타이머가 있는 텍스트 상자가 열리고, 받아쓴 음성이 입력됩니다. 포인터가 상자의 '새 탭에서 열기' 버튼을 클릭하면 새 탭의 전체 화면 상자에서 텍스트 입력이 이어집니다.",
    },
  },
  chromeMenu: {
    back: "뒤로",
    forward: "앞으로",
    reload: "새로고침",
    saveAs: "다른 이름으로 저장…",
    print: "인쇄…",
    cast: "전송…",
    qrCode: "이 페이지의 QR 코드 만들기",
    translate: "français(으)로 번역",
    viewSource: "페이지 소스 보기",
    blockElements: "요소 차단",
    inspect: "검사",
    ctrl: "Ctrl",
    altLeft: "Alt+왼쪽 화살표",
    altRight: "Alt+오른쪽 화살표",
  },
  useCases: {
    heading: "메모는 내 것. 어디로든 출력하고 저장하세요.",
    intro:
      "TypeTarget은 메모를 저장하지 않습니다. 대신 어디에 쓸지 직접 정하면 됩니다.",
    notes: {
      heading: "남겨 두는 메모",
      intro: "어떤 브라우저 탭이든 오디오 소스로 사용하세요.",
      items: [
        {
          title: "강의와 강좌",
          body: "녹화된 수업이나 실시간 수업의 모든 말을 학습 노트에 바로.",
        },
        {
          title: "인터뷰와 사용자 리서치",
          body: "녹화된 세션을 다시 보면서 받아쓰세요.",
        },
        {
          title: "팟캐스트와 소셜 미디어",
          body: "동영상 전체의 받아쓰기를 저장해 에피소드 노트, 블로그 초안, 필요한 인용문에 활용하세요.",
        },
        {
          title: "CRM에 통화 메모",
          body: "영업이나 지원 통화를 레코드의 메모란에 바로 입력.",
        },
      ],
    },
    captions: {
      heading: "자막",
      intro: "탭이 말하는 내용을, 말하는 그 순간에 읽으세요.",
      items: [
        {
          title: "자막이 없는 곳에 자막을",
          body: "자막이 제공되지 않은 스트리밍, 삽입된 플레이어, 오래된 녹화물.",
        },
        {
          title: "실시간 웨비나와 컨퍼런스",
          body: "사진으로 찍은 슬라이드만이 아니라 전체 받아쓰기를 남기세요.",
        },
        {
          title: "회의록",
          body: "한 탭에서는 웹 통화, 옆 탭의 문서나 메모 앱에는 받아쓰기.",
        },
        {
          title: "청각 장애인을 위한 접근성",
          body: "어떤 통화나 동영상이든 거슬러 스크롤할 수 있는 상자에 실시간 텍스트로.",
        },
      ],
    },
    llm: {
      heading: "모든 AI 채팅으로",
      intro:
        "TypeTarget은 어떤 LLM 웹 인터페이스의 프롬프트 입력란에도 입력할 수 있습니다. AI에게 지시를 내리면, 보내는 모든 메시지가 요청한 대로 처리됩니다.",
      items: [
        {
          title: "실시간 롤플레이",
          body: "AI에게 역할을 맡기세요. 상대방의 말이 당신의 대사로 채팅창에 들어갑니다.",
        },
        {
          title: "회의 코파일럿",
          body: "후속 질문, 할 일 목록, 전문 용어를 쉽게 풀어 쓴 설명을 요청하세요.",
        },
        {
          title: "언어 연습",
          body: "듣고 있는 오디오로 교정하고, 설명하고, 퀴즈를 내 주는 튜터.",
        },
        {
          title: "학습 도우미",
          body: "강의가 진행되는 동안 플래시카드, 요약, 연습 문제로 바꾸세요.",
        },
        {
          title: "실시간 해설",
          body: "토론, 피치, 기조연설이 진행되는 동안 주장에 주석을 다세요.",
        },
      ],
    },
    examplePrompt:
      "너는 내 스페인어 회화 파트너야. 내가 보내는 건 모두 영어 동영상에서 누군가 방금 한 말이야. 그 사람에게 대답하듯이 쉬운 스페인어로 답한 다음, 거기서 배울 단어 하나를 알려 줘.",
    exampleCaption:
      "프롬프트 예시. 듣기를 시작하기 전에 원하는 프롬프트를 AI 채팅에 붙여 넣으세요.",
  },
  spec: {
    heading: "영원히 무료.",
    intro:
      "돌아가는 요금 미터도, 남길 수 있는 양의 제한도 없습니다. 원하는 만큼, 원하는 시간 동안 기록하세요.",
    recording: {
      label: "녹음 시간 제한 없음.",
      value:
        "하루 종일 이어지는 컨퍼런스 내내 켜 두세요. TypeTarget은 세션 길이에 제한을 두지 않습니다.",
    },
    storage: {
      label: "저장 용량 제한 없음.",
      value:
        "TypeTarget은 받아쓰기를 저장하지 않으므로 가득 찰 것이 없습니다. 모든 말은 선택한 입력란에 바로 들어가며, 내 컴퓨터에 .txt 파일로 저장할 수 있습니다. 서버도, 계정도, 로그도 없습니다.",
    },
    account: {
      label: "계정 필요 없음.",
      value:
        "MIT 라이선스의 무료 오픈 소스입니다. 체험판도, 유료 요금제도, 만들 계정도 없습니다. 클라우드에서 호스팅되는 받아쓰기 모델은 내 Google 또는 Groq 계정으로 실행되며, 둘 다 무료 등급을 제공합니다.",
    },
    limitsNoteLink: "제공업체 한도에 대한 참고 보기",
    limitsNote:
      "* TypeTarget 자체에는 한도가 없습니다. 호스팅 모델(Gemini, Groq)에는 자체 무료 등급 할당량이 있으며, Google과 Groq이 정하고 언제든지 변경할 수 있습니다. 로컬 Whisper에는 할당량이 없습니다.",
  },
  faq: {
    heading: "자주 묻는 질문.",
    microphone: {
      q: "내 목소리도 받아쓰나요?",
      a: "아니요. TypeTarget은 당신이 말하는 것이 아니라 듣는 것을 듣습니다. 마이크를 사용하지 않습니다.",
    },
    needKey: {
      q: "API 키가 필요한가요?",
      a: "시작할 때는 필요 없습니다. 로컬 Whisper는 키가 필요 없지만 성능은 하드웨어에 따라 다릅니다. 각 제공업체에서 무료로 받을 수 있는 Gemini 또는 Groq 키가 있으면 어떤 컴퓨터에서든 실시간으로 받아쓸 수 있습니다.",
    },
    getKey: {
      q: "API 키는 어떻게 받나요?",
      gemini:
        "<b>Gemini.</b> <link>aistudio.google.com/api-keys</link>로 이동해 오른쪽 위의 <code>Create API key</code> 버튼을 클릭하세요.",
      geminiSteps: [
        "키 이름은 아무렇게나 정하세요.",
        "<code>Create new project</code>를 선택하고 프로젝트 이름도 아무렇게나 정하세요.",
        "<code>Create key</code>를 클릭하세요.",
        "받은 키를 복사해 TypeTarget의 API 키 입력란에 붙여 넣으세요.",
      ],
      groq: "<b>Groq.</b> <link>console.groq.com/keys</link>로 이동해 <code>Create API Key</code> 버튼을 클릭하세요.",
      groqSteps: [
        "Display Name은 원하는 대로 입력하세요.",
        "Secret Key를 복사해 TypeTarget의 Groq API 키 입력란에 붙여 넣으세요.",
      ],
      aiStudioImage:
        "Google AI Studio API 키 페이지의 오른쪽 위. 'API quickstart' 링크와 'Create API key' 버튼이 있고, 그 아래에 'Filter by All projects' 드롭다운이 있습니다.",
      groqImage:
        "GroqCloud의 'Create API Key' 버튼. 라벨 앞에 더하기 기호가 있습니다.",
    },
    slow: {
      q: "받아쓰기가 왜 느린가요?",
      a: "아마 로컬 Whisper를 사용하고 있을 겁니다. 브라우저 안에서 실행되므로 속도는 하드웨어에 따라 달라집니다. 오래되었거나 성능이 낮은 컴퓨터에서는 오디오를 따라가지 못할 수 있습니다. 어떤 컴퓨터에서든 빠른 실시간 받아쓰기를 원하면 무료 Gemini 또는 Groq 키로 바꾸세요.",
    },
    wrongLanguage: {
      q: "왜 다른 언어로 받아써요?",
      a: "<code>{model}</code>에서 다른 모델을 사용해 보세요. 큰 모델일수록 언어를 더 잘 구별합니다. 어떤 언어로 말하는지 알고 있다면 <code>{auto}</code>로 두지 말고 <code>{spokenLanguage}</code>에서 그 언어를 선택하세요. <code>{chunkLength}</code>를 늘리는 것도 방법입니다. 모델이 언어를 판단할 음성이 더 많아집니다.",
    },
    audio: {
      q: "제 오디오는 어디로 가나요?",
      a: "로컬 Whisper에서는 아무 데도 가지 않습니다. 브라우저 안에서 받아씁니다. Gemini나 Groq에서는 내 키를 사용해 해당 제공업체로만 전송됩니다. TypeTarget으로는 절대 가지 않습니다.",
    },
    languages: {
      q: "어떤 언어를 지원하나요?",
      transcription:
        "<b>받아쓰기.</b> OpenAI의 Whisper 모델은 로컬이든 Groq에서든 <whisper>99개 언어</whisper>를 지원합니다. Gemini Transcribe에는 별도의 <gemini>지원 언어 목록</gemini>이 있습니다.",
      interface:
        "<b>인터페이스.</b> TypeTarget 인터페이스는 독일어, 러시아어, 마라티어, 베트남어, 벵골어, 스페인어, 아랍어, 영어, 우르두어, 우크라이나어, 이탈리아어, 인도네시아어, 일본어, 중국어(간체 및 번체), 체코어, 태국어, 터키어, 텔루구어, 포르투갈어(브라질 및 포르투갈), 폴란드어, 프랑스어, 필리핀어, 한국어, 힌디어로 제공되며, 시스템과 브라우저 언어에 맞춰 표시됩니다.",
    },
    browsers: {
      q: "어떤 브라우저에서 작동하나요?",
      a: "Chrome 116 이상에서 Chrome 웹 스토어로 설치합니다. Edge, Brave 같은 Chromium 기반 브라우저도 같은 페이지에서 추가할 수 있습니다.",
    },
    unpacked: {
      q: "Chrome 웹 스토어 없이 로드할 수 있나요?",
      a: "네. <download>zip 파일을 다운로드</download>해 압축을 풀면 <code>typetarget</code> 폴더가 생깁니다. 웹 페이지에서는 링크할 수 없으므로 주소창에 <code>chrome://extensions</code>를 붙여 넣어 여세요(Edge에서는 <code>edge://extensions</code>, Brave에서는 <code>brave://extensions</code>). 오른쪽 위에서 개발자 모드를 켜고 <code>압축해제된 확장 프로그램을 로드합니다</code>를 클릭한 다음 압축을 푼 폴더를 선택하세요. 나중에 업데이트하려면 새 zip을 다운로드해 폴더를 바꾸고 TypeTarget 카드의 새로고침 화살표를 누르세요.",
    },
    contact: {
      q: "TypeTarget에 어떻게 문의하나요?",
      a: "<contact>이 양식</contact>으로 메시지를 보내 주세요.",
    },
  },
  footer: {
    text: "TypeTarget {version}. MIT 라이선스의 무료 오픈 소스. <source>GitHub의 소스 코드</source>. 받아쓰기는 Whisper(whisper.cpp, 브라우저 내), Google Gemini 또는 Groq로, 내 키를 사용합니다. TypeTarget은 Google 또는 Groq과 제휴하지 않았습니다. 서버도, 계정도, 분석 도구도 없으며 이 페이지도 마찬가지입니다. <privacy>개인정보처리방침</privacy>. <issues>문제 신고</issues>. <contact>문의</contact>.",
  },
}
