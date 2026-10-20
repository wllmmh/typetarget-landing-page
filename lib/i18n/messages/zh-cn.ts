import type { Messages } from "./en"

export const zhCN: Messages = {
  meta: {
    title: "TypeTarget：语音转文字，输入到任意文本框",
    description:
      "一款免费开源的浏览器扩展程序，可转写任意标签页的音频，并实时输入到任意标签页的任意文本框中。会议记录、字幕，以及面向任意 AI 聊天的实时输入。",
  },
  header: {
    addTo: "添加到 {browser}",
    language: "语言",
  },
  hero: {
    headline: "语音转文字，随处输入。",
    intro:
      "TypeTarget 是一款免费的浏览器扩展程序，可将音频直接转写到你指定的任意文本框中。",
    note: "免费 · MIT 许可 · Chrome 116+",
    availableOn: "可在以下位置获取",
    chromeWebStore: "Chrome 应用商店",
    githubLabel: "GitHub 上的 TypeTarget 源代码",
    githubTitle: "GitHub 上的源代码",
    howItWorks: "使用方法",
  },
  steps: {
    carouselLabel: "设置步骤",
    slideLabel: "第 {n} 页，共 {total} 页",
    step: "第 {n} 步",
    optional: "（可选）",
    pause: "暂停幻灯片",
    play: "播放幻灯片",
    mute: "将视频静音",
    unmute: "取消视频静音",
    pickModel: {
      title: "选择模型和/或语言。",
      body: "选择一个在你电脑上本地转写的 AI 模型，或者让云服务商替你完成计算。它们加起来能听懂超过 <languages>100 种人类语言</languages>。",
      animation:
        "TypeTarget 弹出窗口。指针滚动模型列表并选择 Whisper Large v3 Q5，然后滚动语音语言列表并选择英语。",
    },
    selectInput: {
      title: "选择输入。",
      body: "点击 TypeTarget 面板中的 <code>{startListening}</code> 按钮，或在任意页面上点击右键。选择 <code>TypeTarget</code> → <code>{listenToTab}</code>。",
      animation:
        "浏览器标签页中的视频通话。指针点击右键，打开 TypeTarget 菜单，然后点击“{listenToTab}”。",
    },
    chooseOutput: {
      title: "选择输出。",
      body: "点击 TypeTarget 面板中的 <code>{startTyping}</code> 按钮，或在任意网页的文本框上点击右键，选择 <code>TypeTarget</code> → <code>{typeToField}</code>。",
      animation:
        "第 2 步中的视频通话。指针点击右键，打开 TypeTarget 菜单，然后点击“{typeToNewFile}”。页面底部打开一个带绿色边框和计时器的文本框，转写的语音逐字输入其中。指针点击文本框的“在新标签页中打开”按钮，文字继续在新标签页的全页文本框中输入。",
    },
  },
  chromeMenu: {
    back: "返回",
    forward: "前进",
    reload: "重新加载",
    saveAs: "另存为…",
    print: "打印…",
    cast: "投放…",
    qrCode: "为此网页创建二维码",
    translate: "翻译成 français",
    viewSource: "查看网页源代码",
    blockElements: "屏蔽元素",
    inspect: "检查",
    ctrl: "Ctrl",
    altLeft: "Alt+向左箭头",
    altRight: "Alt+向右箭头",
  },
  useCases: {
    heading: "笔记归你所有。输出并保存到任何地方。",
    intro: "TypeTarget 不会存储你的笔记。你只需告诉它写到哪里。",
    notes: {
      heading: "留得住的笔记",
      intro: "将任意浏览器标签页用作音频来源。",
      items: [
        {
          title: "讲座和课程",
          body: "录播或直播课程的每一个字，直接进入你的学习笔记。",
        },
        {
          title: "访谈和用户研究",
          body: "回看录制的访谈时同步转写。",
        },
        {
          title: "播客和社交媒体",
          body: "保存整段视频的转写稿，用于节目笔记、博客草稿或你需要的引用。",
        },
        {
          title: "通话记录写入 CRM",
          body: "销售或客服通话，直接输入到记录的备注栏中。",
        },
      ],
    },
    captions: {
      heading: "字幕",
      intro: "标签页说什么，就同步读到什么。",
      items: [
        {
          title: "为没有字幕的内容加上字幕",
          body: "从未提供字幕的直播、嵌入式播放器和旧录像。",
        },
        {
          title: "网络研讨会和会议直播",
          body: "留下完整的转写稿，而不只是你拍下的那张幻灯片。",
        },
        {
          title: "会议记录",
          body: "一个标签页里开网络会议，下一个标签页的文档或笔记应用里就是转写稿。",
        },
        {
          title: "为听障人士提供无障碍支持",
          body: "任何通话或视频的实时文字版本，显示在可以向上回滚的文本框里。",
        },
      ],
    },
    llm: {
      heading: "输入到任意 AI 聊天",
      intro:
        "TypeTarget 可以输入到任意大语言模型网页界面的提示框中。给 AI 下好指令，你发给它的每条消息都会按你的要求处理。",
      items: [
        {
          title: "实时角色扮演",
          body: "让 AI 扮演一个角色。对方说的话会作为你的台词进入它的聊天框。",
        },
        {
          title: "会议助手",
          body: "让它提出追问、整理待办事项，或把行话翻成大白话。",
        },
        {
          title: "语言练习",
          body: "一位导师，根据你正在听的音频纠错、讲解或给你出题。",
        },
        {
          title: "学习助手",
          body: "边听讲座，边把内容变成抽认卡、摘要或练习题。",
        },
        {
          title: "实时点评",
          body: "在辩论、路演或主题演讲进行时，为其中的观点加上批注。",
        },
      ],
    },
    examplePrompt:
      "你是我的西班牙语会话伙伴。我发给你的每句话，都是英语视频里有人刚刚说的话。请用简单的西班牙语回复，就像在回答对方一样，然后从中挑一个词让我学习。",
    exampleCaption:
      "提示词示例。开始收听前，把你自己的提示词粘贴到任意 AI 聊天中。",
  },
  spec: {
    heading: "永久免费。",
    intro: "没有计费，保存多少也没有上限。想录多少就录多少，想录多久就录多久。",
    recording: {
      label: "没有录制限制。",
      value: "开一整天的会议也可以一直开着。TypeTarget 不限制单次会话的时长。",
    },
    storage: {
      label: "没有存储限制。",
      value:
        "TypeTarget 不存储转写内容，所以没有什么会被填满。每个字都直接进入你选的文本框，你也可以把它保存为自己电脑上的 .txt 文件。没有服务器，没有账号，没有日志。",
    },
    account: {
      label: "无需账号。",
      value:
        "基于 MIT 许可免费开源。没有试用期，没有付费档，也不用注册账号。云端托管的转写模型通过你自己的 Google 或 Groq 账号运行，两者都提供免费额度。",
    },
    limitsNoteLink: "查看关于服务商限制的说明",
    limitsNote:
      "* TypeTarget 本身不设任何限制。托管模型（Gemini、Groq）有各自的免费额度，由 Google 和 Groq 设定，并可能随时调整。本地 Whisper 没有额度限制。",
  },
  faq: {
    heading: "常见问题。",
    microphone: {
      q: "它会转写我自己的声音吗？",
      a: "不会。TypeTarget 听的是你听到的，而不是你说的。它不使用你的麦克风。",
    },
    needKey: {
      q: "我需要 API 密钥吗？",
      a: "开始时不需要。本地 Whisper 无需密钥，但性能取决于你的硬件。Gemini 或 Groq 的密钥可以从这些服务商免费获取，有了它，任何电脑都能实时转写。",
    },
    getKey: {
      q: "如何获取 API 密钥？",
      gemini:
        "<b>Gemini。</b>前往 <link>aistudio.google.com/api-keys</link>，点击右上角的 <code>Create API key</code> 按钮。",
      geminiSteps: [
        "给密钥随便取个名字。",
        "选择 <code>Create new project</code>，也给项目随便取个名字。",
        "点击 <code>Create key</code>。",
        "复制生成的密钥，粘贴到 TypeTarget 的 API 密钥输入框中。",
      ],
      groq: "<b>Groq。</b>前往 <link>console.groq.com/keys</link>，点击 <code>Create API Key</code> 按钮。",
      groqSteps: [
        "Display Name 随便填。",
        "复制你的 Secret Key，粘贴到 TypeTarget 的 Groq API 密钥输入框中。",
      ],
      aiStudioImage:
        "Google AI Studio API 密钥页面的右上角，有“API quickstart”链接和“Create API key”按钮，下方是“Filter by All projects”下拉菜单。",
      groqImage: "GroqCloud 的“Create API Key”按钮，文字前有一个加号。",
    },
    slow: {
      q: "为什么我的转写很慢？",
      a: "你很可能在用本地 Whisper，它在浏览器内运行，所以速度取决于你的硬件。在较旧或性能较弱的电脑上，它可能跟不上音频。想在任何电脑上快速实时转写，请改用免费的 Gemini 或 Groq 密钥。",
    },
    wrongLanguage: {
      q: "为什么转写成了错误的语言？",
      a: "在 <code>{model}</code> 中换一个模型试试：更大的模型更擅长分辨语言。如果你知道说的是哪种语言，请在 <code>{spokenLanguage}</code> 中选择它，而不是保留 <code>{auto}</code>。你也可以调大 <code>{chunkLength}</code>，让模型有更多语音来识别语言。",
    },
    audio: {
      q: "我的音频会去哪里？",
      a: "使用本地 Whisper 时，哪里都不去：它在你的浏览器内转写。使用 Gemini 或 Groq 时，音频只会用你自己的密钥发送给该服务商。它绝不会发送给 TypeTarget。",
    },
    languages: {
      q: "支持哪些语言？",
      transcription:
        "<b>转写。</b>OpenAI 的 Whisper 模型，无论在本地还是在 Groq 上，都支持 <whisper>99 种语言</whisper>。Gemini Transcribe 有自己的<gemini>支持语言列表</gemini>。",
      interface:
        "<b>界面。</b>TypeTarget 界面提供阿拉伯语、波兰语、德语、俄语、法语、菲律宾语、韩语、捷克语、马拉地语、孟加拉语、葡萄牙语（巴西和葡萄牙）、日语、泰卢固语、泰语、土耳其语、乌尔都语、乌克兰语、西班牙语、印地语、印度尼西亚语、意大利语、英语、越南语和中文（简体和繁体）版本，会根据你的系统和浏览器语言显示。",
    },
    browsers: {
      q: "它支持哪些浏览器？",
      a: "Chrome 116 或更高版本，从 Chrome 应用商店安装。Edge 和 Brave 等基于 Chromium 的浏览器也可以从同一页面添加。",
    },
    unpacked: {
      q: "不通过 Chrome 应用商店可以加载吗？",
      a: "可以。<download>下载 zip 文件</download>并解压，得到一个名为 <code>typetarget</code> 的文件夹。由于网页无法链接到 <code>chrome://extensions</code>，请将它粘贴到地址栏中打开（Edge 中是 <code>edge://extensions</code>，Brave 中是 <code>brave://extensions</code>）。打开右上角的开发者模式，点击 <code>加载未打包的扩展程序</code>，然后选择解压后的文件夹。以后要更新时，下载新的 zip，替换文件夹，再点击 TypeTarget 卡片上的重新加载箭头。",
    },
    contact: {
      q: "你们的联系方式是什么？",
      a: "请通过<contact>这个表单</contact>给我们留言。",
    },
  },
  footer: {
    text: "TypeTarget {version}。基于 MIT 许可免费开源；<source>GitHub 上的源代码</source>。转写由 Whisper（whisper.cpp，在你的浏览器中）、Google Gemini 或 Groq 完成，使用你自己的密钥。TypeTarget 与 Google 和 Groq 均无关联。没有服务器，没有账号，没有统计分析，本页面也一样。<privacy>隐私权政策</privacy>。<issues>报告问题</issues>。<contact>联系我们</contact>。",
  },
}
