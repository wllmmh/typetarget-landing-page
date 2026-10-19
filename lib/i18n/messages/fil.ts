import type { Messages } from "./en"

export const fil: Messages = {
  meta: {
    title: "TypeTarget: speech to text, sa kahit anong text field",
    description:
      "Isang libre at open-source na browser extension na nagta-transcribe ng audio ng kahit anong tab at tina-type ito, live, sa kahit anong text field sa kahit anong tab. Meeting notes, captions, at live input para sa kahit anong AI chat.",
  },
  header: {
    addTo: "Idagdag sa {browser}",
    language: "Wika",
  },
  hero: {
    headline: "Speech to text, tina-type kahit saan.",
    intro:
      "Ang TypeTarget ay isang libreng browser extension na nagta-transcribe ng iyong audio diretso sa kahit anong text field na sasabihin mo.",
    note: "Libre · MIT license · Chrome 116+",
    availableOn: "Available sa",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Source code ng TypeTarget sa GitHub",
    githubTitle: "Source code sa GitHub",
    howItWorks: "Paano ito gumagana",
  },
  steps: {
    carouselLabel: "Mga hakbang sa setup",
    slideLabel: "{n} sa {total}",
    step: "Hakbang {n}",
    optional: "(opsyonal)",
    pause: "I-pause ang slideshow",
    play: "I-play ang slideshow",
    mute: "I-mute ang video",
    unmute: "I-unmute ang video",
    pickModel: {
      title: "Pumili ng model at/o wika.",
      body: "Pumili ng AI model na nagta-transcribe nang lokal sa iyong computer, o hayaan ang isang cloud provider na gumawa ng compute para sa iyo. Magkakasama, nauunawaan nila ang mahigit <languages>100 wika ng tao</languages>.",
      animation:
        "Ang popup ng TypeTarget. Ini-scroll ng pointer ang listahan ng mga model at pinipili ang Whisper Large v3 Q5, pagkatapos ay ini-scroll ang listahan ng sinasalitang wika at pinipili ang English.",
    },
    selectInput: {
      title: "Pumili ng input.",
      body: "I-click ang <code>{startListening}</code> na button sa TypeTarget panel, o mag-right click sa kahit anong page. Piliin ang <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        'Isang video call sa isang browser tab. Nagra-right click ang pointer, binubuksan ang TypeTarget menu at kini-click ang "{listenToTab}".',
    },
    chooseOutput: {
      title: "Pumili ng output.",
      body: "I-click ang <code>{startTyping}</code> na button sa TypeTarget panel, o mag-right click sa text field ng kahit anong web page at piliin ang <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        'Ang video call mula sa hakbang 2. Nagra-right click ang pointer, binubuksan ang TypeTarget menu at kini-click ang "{typeToNewFile}". May bumubukas na text box na may berdeng outline at timer sa ibaba ng page, at tina-type dito ang na-transcribe na pananalita. Kini-click ng pointer ang "Buksan sa bagong tab" na button ng box, at patuloy na tina-type ang text sa isang full-page na box sa bagong tab.',
    },
  },
  chromeMenu: {
    back: "Bumalik",
    forward: "Sumulong",
    reload: "I-reload",
    saveAs: "I-save bilang…",
    print: "I-print…",
    cast: "I-cast…",
    qrCode: "Gumawa ng QR Code para sa page na ito",
    translate: "Isalin sa français",
    viewSource: "Tingnan ang source ng page",
    blockElements: "I-block ang mga element",
    inspect: "Siyasatin",
    ctrl: "Ctrl",
    altLeft: "Alt+Left Arrow",
    altRight: "Alt+Right Arrow",
  },
  useCases: {
    heading: "Sa iyo ang notes mo. I-output at i-save kahit saan.",
    intro:
      "Hindi sine-save ng TypeTarget ang notes mo. Sa halip, ikaw ang magsasabi kung saan nito isusulat ang mga ito.",
    notes: {
      heading: "Notes na itinatabi mo",
      intro:
        "Gamitin ang kahit anong browser tab bilang pinagmumulan ng audio.",
      items: [
        {
          title: "Mga lecture at course",
          body: "Bawat salita ng recorded o live na klase, diretso sa iyong study notes.",
        },
        {
          title: "Mga interview at user research",
          body: "I-transcribe ang isang recorded na session habang pinapanood mo ulit.",
        },
        {
          title: "Mga podcast at social media",
          body: "I-save ang transcript ng isang buong video para sa show notes, draft ng blog o quote na kailangan mo.",
        },
        {
          title: "Call notes sa CRM",
          body: "Mga sales o support call, diretsong tina-type sa notes field ng record.",
        },
      ],
    },
    captions: {
      heading: "Captions",
      intro: "Basahin ang sinasabi ng isang tab, habang sinasabi nito.",
      items: [
        {
          title: "Captions kung saan wala",
          body: "Mga stream, embedded player at lumang recording na hindi kailanman nagkaroon ng subtitle.",
        },
        {
          title: "Mga live webinar at conference",
          body: "Itabi ang buong transcript, hindi lang ang slide na kinunan mo ng litrato.",
        },
        {
          title: "Meeting notes",
          body: "Isang web call sa isang tab, ang transcript sa iyong doc o notes app sa katabi.",
        },
        {
          title:
            "Accessibility para sa mga Bingi at may kapansanan sa pandinig",
          body: "Tuloy-tuloy na text version ng kahit anong call o video, sa isang box na puwede mong i-scroll pabalik.",
        },
      ],
    },
    llm: {
      heading: "Sa kahit anong AI chat",
      intro:
        "Kayang mag-type ng TypeTarget sa prompt box ng kahit anong LLM web interface. Bigyan ng instructions ang AI, at bawat message na ipapadala mo ay haharapin sa paraang hiniling mo.",
      items: [
        {
          title: "Live roleplay",
          body: "Gawing isang character ang AI. Ang sinasabi ng kabilang panig ay napupunta sa chat box nito bilang iyong mga linya.",
        },
        {
          title: "Meeting copilot",
          body: "Humingi ng follow-up questions, action items o simpleng paliwanag ng jargon.",
        },
        {
          title: "Pagsasanay sa wika",
          body: "Isang tutor na nagtatama, nagpapaliwanag o nagku-quiz sa iyo tungkol sa audio na pinakikinggan mo.",
        },
        {
          title: "Tulong sa pag-aaral",
          body: "Gawing flashcards, summary o practice questions ang isang lecture habang nangyayari ito.",
        },
        {
          title: "Live commentary",
          body: "Lagyan ng anotasyon ang mga claim sa isang debate, pitch o keynote habang nagaganap pa ito.",
        },
      ],
    },
    examplePrompt:
      "Ikaw ang aking conversation partner sa Spanish. Lahat ng ipinapadala ko ay sinabi lang ng isang tao sa isang English na video. Sumagot sa simpleng Spanish, na parang sinasagot mo sila, tapos bigyan mo ako ng isang salita mula roon na pag-aaralan.",
    exampleCaption:
      "Isang halimbawang prompt. I-paste ang sarili mong prompt sa kahit anong AI chat bago ka magsimulang makinig.",
  },
  spec: {
    heading: "Libre habambuhay.",
    intro:
      "Walang tumatakbong metro, walang limit sa itinatabi mo. Mag-record hangga't gusto mo, gaano man katagal.",
    recording: {
      label: "Walang limit sa pag-record.",
      value:
        "Hayaan itong tumakbo sa buong araw na conference. Walang limit ang TypeTarget sa haba ng isang session.",
    },
    storage: {
      label: "Walang limit sa storage.",
      value:
        "Hindi nagse-save ng transcript ang TypeTarget, kaya walang mapupuno. Bawat salita ay diretsong napupunta sa field na pinili mo, at puwede mo itong i-save bilang .txt file sa sarili mong computer. Walang server, walang account, walang log.",
    },
    account: {
      label: "Hindi kailangan ng account.",
      value:
        "Libre at open source sa ilalim ng MIT license. Walang trial, walang bayad na tier, walang account na gagawin. Ang mga cloud hosted na transcription model ay tumatakbo sa sarili mong Google o Groq account, at parehong may libreng tier.",
    },
    limitsNoteLink: "Tingnan ang note tungkol sa mga limit ng provider",
    limitsNote:
      "* Walang sariling limit ang TypeTarget. Ang mga hosted model (Gemini, Groq) ay may sariling free-tier quota, na itinatakda ng Google at Groq at puwedeng magbago anumang oras. Walang quota ang Local Whisper.",
  },
  faq: {
    heading: "Mga madalas itanong.",
    microphone: {
      q: "Tina-transcribe ba nito ang sarili kong boses?",
      a: "Hindi. Naririnig ng TypeTarget ang naririnig mo, hindi ang sinasabi mo. Hindi nito ginagamit ang iyong mikropono.",
    },
    needKey: {
      q: "Kailangan ko ba ng API key?",
      a: "Hindi para magsimula. Walang key na kailangan ang Local Whisper, pero nakadepende ang performance sa iyong hardware. Ang Gemini o Groq key, na makukuha mo nang libre sa mga provider na iyon, ay nagbibigay ng live transcription sa kahit anong machine.",
    },
    getKey: {
      q: "Paano ako makakakuha ng API key?",
      gemini:
        "<b>Gemini.</b> Pumunta sa <link>aistudio.google.com/api-keys</link> at i-click ang <code>Create API key</code> na button sa kanang itaas.",
      geminiSteps: [
        "Pangalanan ang key mo ng kahit ano.",
        "Piliin ang <code>Create new project</code>, at pangalanan din ng kahit ano ang project.",
        "I-click ang <code>Create key</code>.",
        "Kopyahin ang key na ibinigay at i-paste ito sa API key field ng TypeTarget.",
      ],
      groq: "<b>Groq.</b> Pumunta sa <link>console.groq.com/keys</link> at i-click ang <code>Create API Key</code> na button.",
      groqSteps: [
        "Bigyan ito ng kahit anong Display Name.",
        "Kopyahin ang iyong Secret Key at i-paste ito sa Groq API key field ng TypeTarget.",
      ],
      aiStudioImage:
        'Ang kanang itaas na sulok ng API keys page ng Google AI Studio, na may "API quickstart" na link, "Create API key" na button, at "Filter by All projects" na dropdown sa ilalim nila.',
      groqImage:
        'Ang "Create API Key" na button ng GroqCloud, na may plus sign bago ang label.',
    },
    slow: {
      q: "Bakit mabagal ang transcription ko?",
      a: "Malamang ay gumagamit ka ng Local Whisper, na tumatakbo sa loob ng browser mo, kaya nakadepende ang bilis nito sa iyong hardware. Sa luma o hindi gaanong malakas na machine, puwede itong mahuli sa audio. Para sa mabilis at live na transcription sa kahit anong machine, lumipat sa libreng Gemini o Groq key.",
    },
    wrongLanguage: {
      q: "Mali ang wikang tina-transcribe nito.",
      a: "Sumubok ng ibang model sa <code>{model}</code>: mas magaling ang mas malalaking model sa pagkilala ng mga wika. Kung alam mo ang wikang sinasalita, piliin ito sa <code>{spokenLanguage}</code> sa halip na iwan sa <code>{auto}</code>. Puwede mo ring taasan ang <code>{chunkLength}</code>, para mas maraming pananalita ang mapakinggan ng model bago nito tukuyin ang wika.",
    },
    audio: {
      q: "Saan napupunta ang audio ko?",
      a: "Sa Local Whisper, wala: tina-transcribe ito sa loob ng browser mo. Sa Gemini o Groq, sa provider lang na iyon ito napupunta, gamit ang sarili mong key. Hindi ito kailanman napupunta sa TypeTarget.",
    },
    languages: {
      q: "Anong mga wika ang sinusuportahan ninyo?",
      transcription:
        "<b>Transcription.</b> Sinusuportahan ng mga Whisper model ng OpenAI, local man o sa Groq, ang <whisper>99 na wika</whisper>. May sariling <gemini>listahan ng mga sinusuportahang wika</gemini> ang Gemini Transcribe.",
      interface:
        "<b>Interface.</b> Available ang interface ng TypeTarget sa Arabic, Bengali, Chinese (Simplified at Traditional), Czech, English, Filipino, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Marathi, Polish, Portuguese (Brazil at Portugal), Russian, Spanish, Telugu, Thai, Turkish, Ukrainian, Urdu at Vietnamese, ayon sa wika ng iyong system at browser.",
    },
    browsers: {
      q: "Saang mga browser ito gumagana?",
      a: "Chrome 116 o mas bago, na-install mula sa Chrome Web Store. Ang mga Chromium-based na browser tulad ng Edge at Brave ay puwedeng mag-add nito mula sa parehong listing.",
    },
    unpacked: {
      q: "Puwede ko ba itong i-load nang walang Chrome Web Store?",
      a: "Oo. <download>I-download ang zip</download> at i-extract ito para makakuha ng folder na tinatawag na <code>typetarget</code>. Buksan ang <code>chrome://extensions</code> sa pamamagitan ng pag-paste nito sa address bar, dahil hindi ito puwedeng i-link ng mga web page (sa Edge ito ay <code>edge://extensions</code>, sa Brave <code>brave://extensions</code>). I-on ang Developer mode sa kanang itaas na sulok, i-click ang <code>I-load ang naka-unpack</code> at piliin ang na-extract na folder. Para mag-update sa ibang pagkakataon, i-download ang bagong zip, palitan ang folder at pindutin ang reload arrow sa card ng TypeTarget.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Libre at open source sa ilalim ng MIT license; <source>source code sa GitHub</source>. Transcription gamit ang Whisper (whisper.cpp, sa iyong browser), Google Gemini o Groq, gamit ang sarili mong key. Ang TypeTarget ay hindi kaanib ng Google o Groq. Walang server, walang account, walang analytics, kasama ang page na ito. <privacy>Patakaran sa privacy</privacy>. <issues>Mag-ulat ng isyu</issues>. <contact>Makipag-ugnayan</contact>.",
  },
}
