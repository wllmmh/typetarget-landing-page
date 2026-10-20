import type { Messages } from "./en"

export const vi: Messages = {
  meta: {
    title: "TypeTarget: chuyển giọng nói thành văn bản, vào bất kỳ ô nhập nào",
    description:
      "Tiện ích trình duyệt miễn phí, mã nguồn mở, chép lời âm thanh của bất kỳ thẻ nào và nhập trực tiếp vào bất kỳ ô văn bản nào trong bất kỳ thẻ nào. Ghi chú cuộc họp, phụ đề và nhập liệu trực tiếp cho mọi cuộc trò chuyện AI.",
  },
  header: {
    addTo: "Thêm vào {browser}",
    language: "Ngôn ngữ",
  },
  hero: {
    headline: "Giọng nói thành văn bản, nhập ở bất cứ đâu.",
    intro:
      "TypeTarget là tiện ích trình duyệt miễn phí chép lời âm thanh của bạn thẳng vào bất kỳ ô văn bản nào bạn chỉ định.",
    note: "Miễn phí · Giấy phép MIT · Chrome 116 trở lên",
    availableOn: "Có trên",
    chromeWebStore: "Cửa hàng Chrome trực tuyến",
    githubLabel: "Mã nguồn TypeTarget trên GitHub",
    githubTitle: "Mã nguồn trên GitHub",
    howItWorks: "Cách hoạt động",
  },
  steps: {
    carouselLabel: "Các bước thiết lập",
    slideLabel: "{n} / {total}",
    step: "Bước {n}",
    optional: "(không bắt buộc)",
    pause: "Tạm dừng trình chiếu",
    play: "Phát trình chiếu",
    mute: "Tắt tiếng video",
    unmute: "Bật tiếng video",
    pickModel: {
      title: "Chọn mô hình và/hoặc ngôn ngữ.",
      body: "Chọn một mô hình AI chép lời ngay trên máy tính của bạn, hoặc để nhà cung cấp đám mây xử lý thay bạn. Gộp lại, chúng hiểu hơn <languages>100 ngôn ngữ của con người</languages>.",
      animation:
        "Cửa sổ bật lên của TypeTarget. Con trỏ cuộn danh sách mô hình và chọn Whisper Large v3 Q5, rồi cuộn danh sách ngôn ngữ nói và chọn tiếng Anh.",
    },
    selectInput: {
      title: "Chọn nguồn vào.",
      body: "Nhấp vào nút <code>{startListening}</code> trong bảng TypeTarget, hoặc nhấp chuột phải vào trang bất kỳ. Chọn <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        'Một cuộc gọi video trong thẻ trình duyệt. Con trỏ nhấp chuột phải, mở menu TypeTarget và nhấp vào "{listenToTab}".',
    },
    chooseOutput: {
      title: "Chọn nơi xuất.",
      body: "Nhấp vào nút <code>{startTyping}</code> trong bảng TypeTarget, hoặc nhấp chuột phải vào ô văn bản của trang web bất kỳ rồi chọn <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        'Cuộc gọi video ở bước 2. Con trỏ nhấp chuột phải, mở menu TypeTarget và nhấp vào "{typeToNewFile}". Một hộp văn bản có viền xanh lá và đồng hồ hẹn giờ mở ra ở cuối trang, lời nói được chép lại dần hiện vào đó. Con trỏ nhấp nút "Mở trong thẻ mới" của hộp, và văn bản tiếp tục được nhập vào một hộp toàn trang trong thẻ mới.',
    },
  },
  chromeMenu: {
    back: "Quay lại",
    forward: "Tiến",
    reload: "Tải lại",
    saveAs: "Lưu thành…",
    print: "In…",
    cast: "Truyền…",
    qrCode: "Tạo mã QR cho trang này",
    translate: "Dịch sang français",
    viewSource: "Xem nguồn trang",
    blockElements: "Chặn phần tử",
    inspect: "Kiểm tra",
    ctrl: "Ctrl",
    altLeft: "Alt+Mũi tên trái",
    altRight: "Alt+Mũi tên phải",
  },
  useCases: {
    heading: "Ghi chú là của bạn. Xuất và lưu ở bất cứ đâu.",
    intro:
      "TypeTarget không lưu ghi chú của bạn. Thay vào đó, bạn cho nó biết cần viết vào đâu.",
    notes: {
      heading: "Ghi chú bạn giữ lại",
      intro: "Dùng bất kỳ thẻ trình duyệt nào làm nguồn âm thanh.",
      items: [
        {
          title: "Bài giảng và khóa học",
          body: "Từng lời của buổi học đã ghi hoặc trực tiếp, thẳng vào ghi chú học tập của bạn.",
        },
        {
          title: "Phỏng vấn và nghiên cứu người dùng",
          body: "Chép lời một buổi đã ghi trong lúc bạn xem lại.",
        },
        {
          title: "Podcast và mạng xã hội",
          body: "Lưu bản chép lời của cả một video để làm ghi chú chương trình, bản nháp blog hoặc câu trích dẫn bạn cần.",
        },
        {
          title: "Ghi chú cuộc gọi vào CRM",
          body: "Cuộc gọi bán hàng hoặc hỗ trợ, nhập thẳng vào ô ghi chú của bản ghi.",
        },
      ],
    },
    captions: {
      heading: "Phụ đề",
      intro: "Đọc những gì một thẻ đang nói, ngay khi nó nói.",
      items: [
        {
          title: "Phụ đề ở nơi không có",
          body: "Luồng phát trực tiếp, trình phát nhúng và bản ghi cũ chưa bao giờ có phụ đề.",
        },
        {
          title: "Hội thảo trực tuyến và hội nghị trực tiếp",
          body: "Giữ lại toàn bộ bản chép lời, không chỉ trang trình chiếu bạn đã chụp ảnh.",
        },
        {
          title: "Ghi chú cuộc họp",
          body: "Một cuộc gọi web ở thẻ này, bản chép lời trong tài liệu hoặc ứng dụng ghi chú ở thẻ kế bên.",
        },
        {
          title: "Hỗ trợ người khiếm thính và nghe kém",
          body: "Bản văn bản liên tục của bất kỳ cuộc gọi hay video nào, trong một hộp bạn có thể cuộn ngược lại.",
        },
      ],
    },
    llm: {
      heading: "Vào bất kỳ cuộc trò chuyện AI nào",
      intro:
        "TypeTarget có thể nhập vào ô lời nhắc của bất kỳ giao diện web LLM nào. Đưa hướng dẫn cho AI, và mọi tin nhắn bạn gửi sẽ được xử lý theo cách bạn yêu cầu.",
      items: [
        {
          title: "Nhập vai trực tiếp",
          body: "Giao cho AI một nhân vật. Những gì phía bên kia nói sẽ vào ô chat như lời thoại của bạn.",
        },
        {
          title: "Trợ lý cuộc họp",
          body: "Yêu cầu câu hỏi tiếp theo, việc cần làm hoặc bản giải thích dễ hiểu cho các thuật ngữ chuyên môn.",
        },
        {
          title: "Luyện ngôn ngữ",
          body: "Một gia sư sửa lỗi, giải thích hoặc đố bạn dựa trên âm thanh bạn đang nghe.",
        },
        {
          title: "Hỗ trợ học tập",
          body: "Biến bài giảng thành thẻ ghi nhớ, bản tóm tắt hoặc câu hỏi luyện tập ngay khi nó diễn ra.",
        },
        {
          title: "Bình luận trực tiếp",
          body: "Chú thích các luận điểm trong một cuộc tranh luận, buổi gọi vốn hay bài phát biểu khi nó vẫn đang diễn ra.",
        },
      ],
    },
    examplePrompt:
      "Bạn là bạn luyện hội thoại tiếng Tây Ban Nha của tôi. Mọi thứ tôi gửi là những gì ai đó vừa nói trong một video tiếng Anh. Hãy trả lời bằng tiếng Tây Ban Nha đơn giản như thể bạn đang đáp lại họ, rồi cho tôi một từ trong đó để học.",
    exampleCaption:
      "Một lời nhắc mẫu. Dán lời nhắc của bạn vào bất kỳ cuộc trò chuyện AI nào trước khi bắt đầu nghe.",
  },
  spec: {
    heading: "Miễn phí mãi mãi.",
    intro:
      "Không có đồng hồ tính phí, không giới hạn những gì bạn giữ lại. Ghi bao nhiêu tùy thích, bao lâu tùy thích.",
    recording: {
      label: "Không giới hạn ghi.",
      value:
        "Cứ để nó chạy suốt cả ngày hội nghị. TypeTarget không giới hạn thời lượng một phiên.",
    },
    storage: {
      label: "Không giới hạn dung lượng.",
      value:
        "TypeTarget không lưu bản chép lời, nên chẳng có gì bị đầy. Mọi từ đi thẳng vào ô bạn đã chọn, và bạn có thể lưu thành tệp .txt trên máy tính của mình. Không máy chủ, không tài khoản, không nhật ký.",
    },
    account: {
      label: "Không cần tài khoản.",
      value:
        "Miễn phí và mã nguồn mở theo giấy phép MIT. Không dùng thử, không gói trả phí, không cần tạo tài khoản. Các mô hình chép lời trên đám mây chạy bằng tài khoản Google hoặc Groq của chính bạn, và cả hai đều có gói miễn phí.",
    },
    limitsNoteLink: "Xem ghi chú về giới hạn của nhà cung cấp",
    limitsNote:
      "* TypeTarget không tự đặt giới hạn nào. Các mô hình được lưu trữ (Gemini, Groq) áp dụng hạn mức gói miễn phí riêng, do Google và Groq đặt và có thể thay đổi bất cứ lúc nào. Whisper cục bộ không có hạn mức.",
  },
  faq: {
    heading: "Câu hỏi thường gặp.",
    microphone: {
      q: "Nó có chép lời giọng nói của tôi không?",
      a: "Không. TypeTarget nghe những gì bạn nghe, không phải những gì bạn nói. Nó không dùng micrô của bạn.",
    },
    needKey: {
      q: "Tôi có cần khóa API không?",
      a: "Không cần để bắt đầu. Whisper cục bộ không cần khóa, nhưng hiệu năng phụ thuộc vào phần cứng của bạn. Khóa Gemini hoặc Groq, mà bạn nhận miễn phí từ các nhà cung cấp đó, cho phép chép lời trực tiếp trên mọi máy.",
    },
    getKey: {
      q: "Làm sao để lấy khóa API?",
      gemini:
        "<b>Gemini.</b> Truy cập <link>aistudio.google.com/api-keys</link> và nhấp vào nút <code>Create API key</code> ở góc trên bên phải.",
      geminiSteps: [
        "Đặt tên bất kỳ cho khóa.",
        "Chọn <code>Create new project</code> và cũng đặt tên bất kỳ cho dự án.",
        "Nhấp vào <code>Create key</code>.",
        "Sao chép khóa được cấp và dán vào ô khóa API trong TypeTarget.",
      ],
      groq: "<b>Groq.</b> Truy cập <link>console.groq.com/keys</link> và nhấp vào nút <code>Create API Key</code>.",
      groqSteps: [
        "Đặt Display Name tùy ý.",
        "Sao chép Secret Key và dán vào ô khóa API Groq trong TypeTarget.",
      ],
      aiStudioImage:
        'Góc trên bên phải trang khóa API của Google AI Studio, có liên kết "API quickstart", nút "Create API key" và bên dưới là menu thả xuống "Filter by All projects".',
      groqImage: 'Nút "Create API Key" của GroqCloud, có dấu cộng trước nhãn.',
    },
    slow: {
      q: "Sao việc chép lời của tôi chậm?",
      a: "Nhiều khả năng bạn đang dùng Whisper cục bộ, chạy ngay trong trình duyệt, nên tốc độ phụ thuộc vào phần cứng của bạn. Trên máy cũ hoặc yếu hơn, nó có thể bị chậm so với âm thanh. Để chép lời trực tiếp nhanh trên mọi máy, hãy chuyển sang khóa Gemini hoặc Groq miễn phí.",
    },
    wrongLanguage: {
      q: "Tại sao nó chép lời sai ngôn ngữ?",
      a: "Hãy thử một mô hình khác trong <code>{model}</code>: mô hình lớn hơn phân biệt ngôn ngữ tốt hơn. Nếu bạn biết ngôn ngữ đang được nói, hãy chọn nó trong <code>{spokenLanguage}</code> thay vì để <code>{auto}</code>. Bạn cũng có thể tăng <code>{chunkLength}</code> để mô hình có nhiều lời nói hơn mà nhận ra ngôn ngữ.",
    },
    audio: {
      q: "Âm thanh của tôi đi đâu?",
      a: "Với Whisper cục bộ, không đi đâu cả: nó được chép lời ngay trong trình duyệt của bạn. Với Gemini hoặc Groq, nó chỉ đến nhà cung cấp đó, bằng khóa của chính bạn. Nó không bao giờ đến TypeTarget.",
    },
    languages: {
      q: "Hỗ trợ những ngôn ngữ nào?",
      transcription:
        "<b>Chép lời.</b> Các mô hình Whisper của OpenAI, chạy cục bộ hay trên Groq, hỗ trợ <whisper>99 ngôn ngữ</whisper>. Gemini Transcribe có <gemini>danh sách ngôn ngữ được hỗ trợ</gemini> riêng.",
      interface:
        "<b>Giao diện.</b> Giao diện TypeTarget có sẵn bằng tiếng Việt, tiếng Anh, tiếng Ả Rập, tiếng Ba Lan, tiếng Bengal, tiếng Bồ Đào Nha (Brazil và Bồ Đào Nha), tiếng Đức, tiếng Hàn, tiếng Hindi, tiếng Indonesia, tiếng Marathi, tiếng Nga, tiếng Nhật, tiếng Pháp, tiếng Philippines, tiếng Séc, tiếng Tây Ban Nha, tiếng Telugu, tiếng Thái, tiếng Thổ Nhĩ Kỳ, tiếng Trung (Giản thể và Phồn thể), tiếng Ukraina, tiếng Urdu và tiếng Ý, theo ngôn ngữ của hệ thống và trình duyệt của bạn.",
    },
    browsers: {
      q: "Nó hoạt động trên trình duyệt nào?",
      a: "Chrome 116 trở lên, cài từ Cửa hàng Chrome trực tuyến. Các trình duyệt dựa trên Chromium như Edge và Brave có thể thêm từ cùng trang đó.",
    },
    unpacked: {
      q: "Tôi có thể tải mà không cần Cửa hàng Chrome trực tuyến không?",
      a: "Có. <download>Tải tệp zip</download> và giải nén để có thư mục tên <code>typetarget</code>. Mở <code>chrome://extensions</code> bằng cách dán vào thanh địa chỉ, vì trang web không thể liên kết tới đó (trong Edge là <code>edge://extensions</code>, trong Brave là <code>brave://extensions</code>). Bật Chế độ dành cho nhà phát triển ở góc trên bên phải, nhấp <code>Tải tiện ích đã giải nén</code> và chọn thư mục đã giải nén. Để cập nhật sau này, tải tệp zip mới, thay thư mục và nhấn mũi tên tải lại trên thẻ của TypeTarget.",
    },
    contact: {
      q: "Làm thế nào để liên hệ với TypeTarget?",
      a: "Hãy gửi tin nhắn qua <contact>biểu mẫu này</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Miễn phí và mã nguồn mở theo giấy phép MIT; <source>mã nguồn trên GitHub</source>. Chép lời bằng Whisper (whisper.cpp, trong trình duyệt của bạn), Google Gemini hoặc Groq, với khóa của chính bạn. TypeTarget không liên kết với Google hay Groq. Không máy chủ, không tài khoản, không phân tích, kể cả trang này. <privacy>Chính sách quyền riêng tư</privacy>. <issues>Báo cáo sự cố</issues>. <contact>Liên hệ</contact>.",
  },
}
