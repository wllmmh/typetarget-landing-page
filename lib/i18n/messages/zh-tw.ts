import type { Messages } from "./en"

export const zhTW: Messages = {
  meta: {
    title: "TypeTarget：語音轉文字，輸入至任何文字欄位",
    description:
      "一款免費開源的瀏覽器擴充功能，可轉錄任何分頁的音訊，並即時輸入至任何分頁的任何文字欄位。會議記錄、字幕，以及適用於任何 AI 聊天的即時輸入。",
  },
  header: {
    addTo: "新增至 {browser}",
    language: "語言",
  },
  hero: {
    headline: "語音轉文字，隨處輸入。",
    intro:
      "TypeTarget 是一款免費的瀏覽器擴充功能，可將音訊直接轉錄至你指定的任何文字欄位。",
    note: "免費 · MIT 授權 · Chrome 116 以上",
    availableOn: "可於以下位置取得",
    chromeWebStore: "Chrome 線上應用程式商店",
    githubLabel: "GitHub 上的 TypeTarget 原始碼",
    githubTitle: "GitHub 上的原始碼",
    howItWorks: "使用方式",
  },
  steps: {
    carouselLabel: "設定步驟",
    slideLabel: "第 {n} 張，共 {total} 張",
    step: "步驟 {n}",
    optional: "（選用）",
    pause: "暫停投影片",
    play: "播放投影片",
    mute: "將影片設為靜音",
    unmute: "取消影片靜音",
    pickModel: {
      title: "選擇模型和/或語言。",
      body: "選擇在你的電腦上於本機轉錄的 AI 模型，或交給雲端供應商替你運算。它們加起來能聽懂超過 <languages>100 種人類語言</languages>。",
      animation:
        "TypeTarget 彈出式視窗。游標捲動模型清單並選取 Whisper Large v3 Q5，接著捲動語音語言清單並選取英文。",
    },
    selectInput: {
      title: "選擇輸入。",
      body: "按一下 TypeTarget 面板中的 <code>{startListening}</code> 按鈕，或在任何網頁上按一下滑鼠右鍵。選擇 <code>TypeTarget</code> → <code>{listenToTab}</code>。",
      animation:
        "瀏覽器分頁中的視訊通話。游標按一下滑鼠右鍵，開啟 TypeTarget 選單，然後按一下「{listenToTab}」。",
    },
    chooseOutput: {
      title: "選擇輸出。",
      body: "按一下 TypeTarget 面板中的 <code>{startTyping}</code> 按鈕，或在任何網頁的文字欄位上按一下滑鼠右鍵，然後選取 <code>TypeTarget</code> → <code>{typeToField}</code>。",
      animation:
        "步驟 2 中的視訊通話。游標按一下滑鼠右鍵，開啟 TypeTarget 選單，然後按一下「{typeToNewFile}」。頁面底部開啟一個帶有綠色外框和計時器的文字方塊，轉錄的語音逐字輸入其中。游標按一下方塊的「在新分頁中開啟」按鈕，文字便繼續在新分頁的全頁方塊中輸入。",
    },
  },
  chromeMenu: {
    back: "上一頁",
    forward: "下一頁",
    reload: "重新載入",
    saveAs: "另存新檔…",
    print: "列印…",
    cast: "投放…",
    qrCode: "為這個網頁建立 QR 圖碼",
    translate: "翻譯成 français",
    viewSource: "檢視網頁原始碼",
    blockElements: "封鎖元素",
    inspect: "檢查",
    ctrl: "Ctrl",
    altLeft: "Alt+向左鍵",
    altRight: "Alt+向右鍵",
  },
  useCases: {
    heading: "筆記屬於你。輸出並儲存到任何地方。",
    intro: "TypeTarget 不會儲存你的筆記。你只要告訴它要寫到哪裡。",
    notes: {
      heading: "留得住的筆記",
      intro: "將任何瀏覽器分頁用作音訊來源。",
      items: [
        {
          title: "講座和課程",
          body: "錄播或直播課程的每一個字，直接寫進你的學習筆記。",
        },
        {
          title: "訪談和使用者研究",
          body: "回看錄製的訪談時同步轉錄。",
        },
        {
          title: "Podcast 和社群媒體",
          body: "儲存整部影片的逐字稿，用於節目筆記、部落格草稿或你需要的引述。",
        },
        {
          title: "將通話記錄寫入 CRM",
          body: "業務或客服通話，直接輸入至記錄的備註欄位。",
        },
      ],
    },
    captions: {
      heading: "字幕",
      intro: "分頁說什麼，就同步讀到什麼。",
      items: [
        {
          title: "為沒有字幕的內容加上字幕",
          body: "從未提供字幕的直播、嵌入式播放器和舊錄影。",
        },
        {
          title: "線上研討會和會議直播",
          body: "留下完整的逐字稿，而不只是你拍下的那張投影片。",
        },
        {
          title: "會議記錄",
          body: "一個分頁開網路會議，下一個分頁的文件或筆記應用程式裡就是逐字稿。",
        },
        {
          title: "為聽障人士提供無障礙支援",
          body: "任何通話或影片的即時文字版本，顯示在可以往回捲動的方塊中。",
        },
      ],
    },
    llm: {
      heading: "輸入至任何 AI 聊天",
      intro:
        "TypeTarget 可以輸入至任何大型語言模型網頁介面的提示框。給 AI 下好指令，你傳給它的每則訊息都會依你的要求處理。",
      items: [
        {
          title: "即時角色扮演",
          body: "讓 AI 扮演一個角色。對方說的話會成為你的台詞，進入它的聊天框。",
        },
        {
          title: "會議助理",
          body: "請它提出追問、整理待辦事項，或把術語換成白話。",
        },
        {
          title: "語言練習",
          body: "一位家教，根據你正在聽的音訊幫你修正、解說或出題考你。",
        },
        {
          title: "學習輔助",
          body: "邊聽講座，邊把內容變成單字卡、摘要或練習題。",
        },
        {
          title: "即時評論",
          body: "在辯論、提案或主題演講進行時，為其中的論點加上註解。",
        },
      ],
    },
    examplePrompt:
      "你是我的西班牙文會話夥伴。我傳給你的每句話，都是英文影片裡有人剛說的話。請用簡單的西班牙文回覆，就像在回答對方一樣，然後從中挑一個單字讓我學。",
    exampleCaption: "提示範例。開始聆聽前，把你自己的提示貼到任何 AI 聊天中。",
  },
  spec: {
    heading: "永久免費。",
    intro: "沒有計費，保存多少也沒有上限。想錄多少就錄多少，想錄多久就錄多久。",
    recording: {
      label: "沒有錄製限制。",
      value:
        "開一整天的研討會也能一直開著。TypeTarget 不限制單次工作階段的長度。",
    },
    storage: {
      label: "沒有儲存空間限制。",
      value:
        "TypeTarget 不會儲存逐字稿，所以沒有東西會被塞滿。每個字都直接進入你選擇的欄位，你也可以在自己的電腦上將它存成 .txt 檔。沒有伺服器，沒有帳戶，沒有記錄。",
    },
    account: {
      label: "不需要帳戶。",
      value:
        "採用 MIT 授權，免費開源。沒有試用期，沒有付費方案，也不用建立帳戶。雲端代管的轉錄模型透過你自己的 Google 或 Groq 帳戶執行，兩者都提供免費方案。",
    },
    limitsNoteLink: "查看供應商限制的說明",
    limitsNote:
      "* TypeTarget 本身不設任何限制。代管模型（Gemini、Groq）有各自的免費方案配額，由 Google 和 Groq 設定，並可能隨時變更。本機 Whisper 沒有配額。",
  },
  faq: {
    heading: "常見問題。",
    microphone: {
      q: "它會轉錄我自己的聲音嗎？",
      a: "不會。TypeTarget 聽的是你聽到的，而不是你說的。它不會使用你的麥克風。",
    },
    needKey: {
      q: "我需要 API 金鑰嗎？",
      a: "開始時不需要。本機 Whisper 不需要金鑰，但效能取決於你的硬體。Gemini 或 Groq 的金鑰可以向這些供應商免費取得，有了它，任何電腦都能即時轉錄。",
    },
    getKey: {
      q: "如何取得 API 金鑰？",
      gemini:
        "<b>Gemini。</b>前往 <link>aistudio.google.com/api-keys</link>，按一下右上角的 <code>Create API key</code> 按鈕。",
      geminiSteps: [
        "隨意為金鑰命名。",
        "選擇 <code>Create new project</code>，也隨意為專案命名。",
        "按一下 <code>Create key</code>。",
        "複製產生的金鑰，貼到 TypeTarget 的 API 金鑰欄位。",
      ],
      groq: "<b>Groq。</b>前往 <link>console.groq.com/keys</link>，按一下 <code>Create API Key</code> 按鈕。",
      groqSteps: [
        "Display Name 隨意填寫。",
        "複製你的 Secret Key，貼到 TypeTarget 的 Groq API 金鑰欄位。",
      ],
      aiStudioImage:
        "Google AI Studio API 金鑰頁面的右上角，有「API quickstart」連結和「Create API key」按鈕，下方是「Filter by All projects」下拉式選單。",
      groqImage: "GroqCloud 的「Create API Key」按鈕，文字前有一個加號。",
    },
    slow: {
      q: "為什麼我的轉錄很慢？",
      a: "你很可能在使用本機 Whisper，它在瀏覽器內執行，所以速度取決於你的硬體。在較舊或效能較低的電腦上，它可能跟不上音訊。想在任何電腦上快速即時轉錄，請改用免費的 Gemini 或 Groq 金鑰。",
    },
    wrongLanguage: {
      q: "為什麼轉錄成錯誤的語言？",
      a: "在 <code>{model}</code> 中換一個模型試試：較大的模型較能分辨語言。如果你知道說的是哪種語言，請在 <code>{spokenLanguage}</code> 中選取它，而不是保留 <code>{auto}</code>。你也可以調高 <code>{chunkLength}</code>，讓模型有更多語音來辨識語言。",
    },
    audio: {
      q: "我的音訊會傳到哪裡？",
      a: "使用本機 Whisper 時，哪裡都不去：它在你的瀏覽器內轉錄。使用 Gemini 或 Groq 時，音訊只會用你自己的金鑰傳給該供應商。它絕不會傳給 TypeTarget。",
    },
    languages: {
      q: "支援哪些語言？",
      transcription:
        "<b>轉錄。</b>OpenAI 的 Whisper 模型，無論在本機或 Groq 上，都支援 <whisper>99 種語言</whisper>。Gemini Transcribe 有自己的<gemini>支援語言清單</gemini>。",
      interface:
        "<b>介面。</b>TypeTarget 介面提供中文（簡體和繁體）、日文、韓文、英文、法文、德文、西班牙文、義大利文、葡萄牙文（巴西和葡萄牙）、俄文、烏克蘭文、波蘭文、捷克文、土耳其文、阿拉伯文、烏爾都文、印地文、馬拉地文、孟加拉文、泰盧固文、泰文、越南文、印尼文和菲律賓文版本，會配合你的系統和瀏覽器語言顯示。",
    },
    browsers: {
      q: "它支援哪些瀏覽器？",
      a: "Chrome 116 以上版本，從 Chrome 線上應用程式商店安裝。Edge 和 Brave 等以 Chromium 為基礎的瀏覽器也能從同一個頁面新增。",
    },
    unpacked: {
      q: "可以不透過 Chrome 線上應用程式商店載入嗎？",
      a: "可以。<download>下載 zip 檔</download>並解壓縮，取得名為 <code>typetarget</code> 的資料夾。由於網頁無法連結至 <code>chrome://extensions</code>，請將它貼到網址列開啟（Edge 是 <code>edge://extensions</code>，Brave 是 <code>brave://extensions</code>）。開啟右上角的開發人員模式，按一下 <code>載入未封裝項目</code>，然後選取解壓縮後的資料夾。日後要更新時，下載新的 zip，取代資料夾，再按一下 TypeTarget 資訊卡上的重新載入箭頭。",
    },
    contact: {
      q: "如何聯絡 TypeTarget？",
      a: "請透過<contact>這份表單</contact>留言給我們。",
    },
  },
  footer: {
    text: "TypeTarget {version}。採用 MIT 授權，免費開源；<source>GitHub 上的原始碼</source>。轉錄由 Whisper（whisper.cpp，在你的瀏覽器中）、Google Gemini 或 Groq 完成，使用你自己的金鑰。TypeTarget 與 Google 和 Groq 均無關聯。沒有伺服器，沒有帳戶，沒有數據分析，這個網頁也一樣。<privacy>隱私權政策</privacy>。<issues>回報問題</issues>。<contact>聯絡我們</contact>。",
  },
}
