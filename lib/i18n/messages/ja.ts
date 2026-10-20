import type { Messages } from "./en"

export const ja: Messages = {
  meta: {
    title: "TypeTarget：音声をテキストに、どの入力欄にも",
    description:
      "どのタブの音声も文字起こしし、どのタブのどの入力欄にもリアルタイムで入力する、無料のオープンソースのブラウザ拡張機能。会議メモ、字幕、そしてあらゆる AI チャットへのライブ入力に。",
  },
  header: {
    addTo: "{browser} に追加",
    language: "言語",
  },
  hero: {
    headline: "音声をテキストに。どこにでも入力。",
    intro:
      "TypeTarget は、音声を指定した入力欄に直接文字起こしする無料のブラウザ拡張機能です。",
    note: "無料 · MIT ライセンス · Chrome 116 以降",
    availableOn: "入手先：",
    chromeWebStore: "Chrome ウェブストア",
    githubLabel: "GitHub の TypeTarget ソースコード",
    githubTitle: "GitHub のソースコード",
    howItWorks: "使い方",
  },
  steps: {
    carouselLabel: "設定の手順",
    slideLabel: "{n} / {total}",
    step: "ステップ {n}",
    optional: "（任意）",
    pause: "スライドショーを一時停止",
    play: "スライドショーを再生",
    mute: "動画をミュート",
    unmute: "動画のミュートを解除",
    pickModel: {
      title: "モデルと言語を選ぶ。",
      body: "パソコン上でローカルに文字起こしする AI モデルを選ぶか、計算をクラウドのプロバイダーに任せます。全体で <languages>100 以上の言語</languages>に対応しています。",
      animation:
        "TypeTarget のポップアップ。ポインターがモデル一覧をスクロールして Whisper Large v3 Q5 を選び、次に音声の言語の一覧をスクロールして英語を選びます。",
    },
    selectInput: {
      title: "入力元を選ぶ。",
      body: "TypeTarget パネルの <code>{startListening}</code> ボタンをクリックするか、任意のページを右クリックします。<code>TypeTarget</code> → <code>{listenToTab}</code> を選びます。",
      animation:
        "ブラウザのタブで行われているビデオ通話。ポインターが右クリックし、TypeTarget メニューを開いて「{listenToTab}」をクリックします。",
    },
    chooseOutput: {
      title: "出力先を選ぶ。",
      body: "TypeTarget パネルの <code>{startTyping}</code> ボタンをクリックするか、任意のウェブページの入力欄を右クリックして <code>TypeTarget</code> → <code>{typeToField}</code> を選びます。",
      animation:
        "ステップ 2 のビデオ通話。ポインターが右クリックし、TypeTarget メニューを開いて「{typeToNewFile}」をクリックします。緑の枠線とタイマーの付いたテキストボックスがページ下部に開き、文字起こしされた音声が入力されていきます。ポインターがボックスの「新しいタブで開く」ボタンをクリックすると、新しいタブの全画面のボックスでテキストの入力が続きます。",
    },
  },
  chromeMenu: {
    back: "戻る",
    forward: "進む",
    reload: "再読み込み",
    saveAs: "名前を付けて保存…",
    print: "印刷…",
    cast: "キャスト…",
    qrCode: "このページの QR コードを作成",
    translate: "français に翻訳",
    viewSource: "ページのソースを表示",
    blockElements: "要素をブロック",
    inspect: "検証",
    ctrl: "Ctrl",
    altLeft: "Alt+左矢印",
    altRight: "Alt+右矢印",
  },
  useCases: {
    heading: "メモは自分のもの。好きな場所に出力して保存。",
    intro:
      "TypeTarget はメモを保存しません。代わりに、どこに書き込むかをあなたが指定します。",
    notes: {
      heading: "手元に残るメモ",
      intro: "どのブラウザタブでも音声の入力元にできます。",
      items: [
        {
          title: "講義や講座",
          body: "録画やライブの授業の一語一語を、そのまま勉強ノートに。",
        },
        {
          title: "インタビューやユーザーリサーチ",
          body: "録画したセッションを見返しながら文字起こし。",
        },
        {
          title: "ポッドキャストや SNS",
          body: "動画全体の文字起こしを保存して、番組メモやブログの下書き、必要な引用に。",
        },
        {
          title: "通話メモを CRM に",
          body: "営業やサポートの通話を、レコードのメモ欄に直接入力。",
        },
      ],
    },
    captions: {
      heading: "字幕",
      intro: "タブが話している内容を、話しているそばから読む。",
      items: [
        {
          title: "字幕のないところに字幕を",
          body: "字幕が用意されなかった配信、埋め込みプレーヤー、古い録画に。",
        },
        {
          title: "ライブのウェビナーやカンファレンス",
          body: "撮影したスライドだけでなく、文字起こし全体を残せます。",
        },
        {
          title: "会議メモ",
          body: "あるタブでウェブ通話、隣のタブのドキュメントやメモアプリに文字起こし。",
        },
        {
          title: "聴覚に障がいのある方のために",
          body: "どんな通話や動画も、さかのぼってスクロールできるボックスにテキストで表示。",
        },
      ],
    },
    llm: {
      heading: "あらゆる AI チャットへ",
      intro:
        "TypeTarget は、どんな LLM のウェブ画面のプロンプト欄にも入力できます。AI に指示を与えれば、送るメッセージはすべて指示どおりに処理されます。",
      items: [
        {
          title: "ライブのロールプレイ",
          body: "AI に役を演じさせます。相手の発言が、あなたのセリフとしてチャット欄に届きます。",
        },
        {
          title: "会議のコパイロット",
          body: "追加の質問やアクションアイテム、専門用語のわかりやすい言い換えを頼めます。",
        },
        {
          title: "語学練習",
          body: "聞いている音声をもとに、添削、解説、クイズをしてくれる家庭教師。",
        },
        {
          title: "学習サポート",
          body: "講義をその場で単語カード、要約、練習問題に。",
        },
        {
          title: "ライブ解説",
          body: "討論、ピッチ、基調講演の主張に、進行中のうちに注釈を付けます。",
        },
      ],
    },
    examplePrompt:
      "あなたは私のスペイン語の会話パートナーです。私が送る内容はすべて、英語の動画で誰かが今言ったことです。その人に返事をするつもりで簡単なスペイン語で答え、そのあと覚えるべき単語を 1 つ教えてください。",
    exampleCaption:
      "プロンプトの例。聞き取りを始める前に、自分のプロンプトを AI チャットに貼り付けてください。",
  },
  spec: {
    heading: "ずっと無料。",
    intro:
      "メーターは回らず、残せる量にも上限なし。好きなだけ、好きなだけ長く記録できます。",
    recording: {
      label: "録音の制限なし。",
      value:
        "丸一日のカンファレンスでも動かしたままで大丈夫。TypeTarget はセッションの長さに上限を設けていません。",
    },
    storage: {
      label: "保存容量の制限なし。",
      value:
        "TypeTarget は文字起こしを保存しないので、いっぱいになるものがありません。すべての言葉は選んだ入力欄に直接入り、自分のパソコンに .txt ファイルとして保存できます。サーバーなし、アカウントなし、ログなし。",
    },
    account: {
      label: "アカウント不要。",
      value:
        "MIT ライセンスの無料オープンソース。試用期間も有料プランも、作成するアカウントもありません。クラウドでホストされる文字起こしモデルは自分の Google または Groq のアカウントで動き、どちらにも無料枠があります。",
    },
    limitsNoteLink: "プロバイダーの制限に関する注記を見る",
    limitsNote:
      "* TypeTarget 自体は制限を設けていません。ホスト型モデル（Gemini、Groq）にはそれぞれ無料枠の上限があり、Google と Groq が設定し、いつでも変更されることがあります。ローカルの Whisper には上限がありません。",
  },
  faq: {
    heading: "よくある質問。",
    microphone: {
      q: "自分の声を文字起こししますか？",
      a: "いいえ。TypeTarget が聞くのはあなたが聞いている音で、あなたが話す声ではありません。マイクは使いません。",
    },
    needKey: {
      q: "API キーは必要ですか？",
      a: "始めるだけなら不要です。ローカルの Whisper にキーは要りませんが、性能はハードウェアに左右されます。各プロバイダーから無料で取得できる Gemini や Groq のキーがあれば、どのパソコンでもリアルタイムに文字起こしできます。",
    },
    getKey: {
      q: "API キーはどうやって取得しますか？",
      gemini:
        "<b>Gemini。</b><link>aistudio.google.com/api-keys</link> を開き、右上の <code>Create API key</code> ボタンをクリックします。",
      geminiSteps: [
        "キーに好きな名前を付けます。",
        "<code>Create new project</code> を選び、プロジェクトにも好きな名前を付けます。",
        "<code>Create key</code> をクリックします。",
        "表示されたキーをコピーし、TypeTarget の API キー欄に貼り付けます。",
      ],
      groq: "<b>Groq。</b><link>console.groq.com/keys</link> を開き、<code>Create API Key</code> ボタンをクリックします。",
      groqSteps: [
        "Display Name に好きな名前を入力します。",
        "Secret Key をコピーし、TypeTarget の Groq API キー欄に貼り付けます。",
      ],
      aiStudioImage:
        "Google AI Studio の API キーページの右上。「API quickstart」リンクと「Create API key」ボタンがあり、その下に「Filter by All projects」のドロップダウンがあります。",
      groqImage:
        "GroqCloud の「Create API Key」ボタン。ラベルの前にプラス記号があります。",
    },
    slow: {
      q: "文字起こしが遅いのはなぜですか？",
      a: "おそらくローカルの Whisper を使っています。ブラウザ内で動くため、速度はハードウェアに左右されます。古いパソコンや性能の低いパソコンでは、音声に追いつけないことがあります。どのパソコンでも速くリアルタイムに文字起こしするには、無料の Gemini か Groq のキーに切り替えてください。",
    },
    wrongLanguage: {
      q: "なぜ違う言語で文字起こしされるのですか？",
      a: "<code>{model}</code> で別のモデルを試してください。大きなモデルほど言語を正しく聞き分けます。話されている言語がわかっている場合は、<code>{auto}</code> のままにせず <code>{spokenLanguage}</code> でその言語を選んでください。<code>{chunkLength}</code> を長くすると、モデルが言語を判断するための音声が増えるので、それも効果があります。",
    },
    audio: {
      q: "音声はどこに送られますか？",
      a: "ローカルの Whisper なら、どこにも送られません。ブラウザ内で文字起こしされます。Gemini や Groq の場合は、あなた自身のキーを使ってそのプロバイダーにだけ送られます。TypeTarget に送られることはありません。",
    },
    languages: {
      q: "どの言語に対応していますか？",
      transcription:
        "<b>文字起こし。</b>OpenAI の Whisper モデルは、ローカルでも Groq 上でも <whisper>99 言語</whisper>に対応しています。Gemini Transcribe には独自の<gemini>対応言語リスト</gemini>があります。",
      interface:
        "<b>画面表示。</b>TypeTarget の画面は、アラビア語、イタリア語、インドネシア語、ウクライナ語、ウルドゥー語、英語、韓国語、スペイン語、タイ語、チェコ語、中国語（簡体字・繁体字）、テルグ語、ドイツ語、トルコ語、日本語、ヒンディー語、フィリピノ語、フランス語、ベトナム語、ベンガル語、ポーランド語、ポルトガル語（ブラジル・ポルトガル）、マラーティー語、ロシア語に対応しており、システムとブラウザの言語に合わせて表示されます。",
    },
    browsers: {
      q: "どのブラウザで使えますか？",
      a: "Chrome 116 以降で、Chrome ウェブストアからインストールします。Edge や Brave などの Chromium ベースのブラウザも、同じページから追加できます。",
    },
    unpacked: {
      q: "Chrome ウェブストアを使わずに読み込めますか？",
      a: "はい。<download>zip をダウンロード</download>して展開すると、<code>typetarget</code> というフォルダができます。ウェブページからはリンクできないので、<code>chrome://extensions</code> をアドレスバーに貼り付けて開きます（Edge では <code>edge://extensions</code>、Brave では <code>brave://extensions</code>）。右上のデベロッパー モードをオンにし、<code>パッケージ化されていない拡張機能を読み込む</code> をクリックして、展開したフォルダを選びます。後で更新するときは、新しい zip をダウンロードしてフォルダを置き換え、TypeTarget のカードの再読み込みの矢印を押します。",
    },
    contact: {
      q: "TypeTargetへはどうすれば連絡できますか？",
      a: "<contact>こちらのフォーム</contact>からメッセージをお送りください。",
    },
  },
  footer: {
    text: "TypeTarget {version}。MIT ライセンスの無料オープンソース。<source>GitHub のソースコード</source>。文字起こしは Whisper（whisper.cpp、ブラウザ内）、Google Gemini、Groq のいずれかで、自分のキーを使います。TypeTarget は Google および Groq とは提携していません。サーバーなし、アカウントなし、アクセス解析なし。このページも同様です。<privacy>プライバシーポリシー</privacy>。<issues>問題を報告</issues>。<contact>お問い合わせ</contact>。",
  },
}
