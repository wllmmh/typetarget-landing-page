import type { Messages } from "./en"

export const id: Messages = {
  meta: {
    title: "TypeTarget: ucapan jadi teks, ke kolom teks mana pun",
    description:
      "Ekstensi browser gratis dan open source yang mentranskripsi audio tab mana pun dan mengetikkannya, secara langsung, ke kolom teks mana pun di tab mana pun. Catatan rapat, teks film, dan input langsung untuk chat AI apa pun.",
  },
  header: {
    addTo: "Tambahkan ke {browser}",
    language: "Bahasa",
  },
  hero: {
    headline: "Ucapan jadi teks, diketik di mana saja.",
    intro:
      "TypeTarget adalah ekstensi browser gratis yang mentranskripsi audio Anda langsung ke kolom teks mana pun yang Anda tentukan.",
    note: "Gratis · Lisensi MIT · Chrome 116+",
    availableOn: "Tersedia di",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Kode sumber TypeTarget di GitHub",
    githubTitle: "Kode sumber di GitHub",
    howItWorks: "Cara kerjanya",
  },
  steps: {
    carouselLabel: "Langkah penyiapan",
    slideLabel: "{n} dari {total}",
    step: "Langkah {n}",
    optional: "(opsional)",
    pause: "Jeda slideshow",
    play: "Putar slideshow",
    mute: "Bisukan video",
    unmute: "Bunyikan video",
    pickModel: {
      title: "Pilih model dan/atau bahasa.",
      body: "Pilih model AI yang mentranskripsi secara lokal di komputer Anda, atau biarkan penyedia cloud yang menangani komputasinya. Bersama-sama, mereka memahami lebih dari <languages>100 bahasa manusia</languages>.",
      animation:
        "Popup TypeTarget. Penunjuk menggulir daftar model dan memilih Whisper Large v3 Q5, lalu menggulir daftar bahasa lisan dan memilih bahasa Inggris.",
    },
    selectInput: {
      title: "Pilih input.",
      body: "Klik tombol <code>{startListening}</code> di panel TypeTarget, atau klik kanan di halaman mana pun. Pilih <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        'Panggilan video di tab browser. Penunjuk mengklik kanan, membuka menu TypeTarget, lalu mengklik "{listenToTab}".',
    },
    chooseOutput: {
      title: "Pilih output.",
      body: "Klik tombol <code>{startTyping}</code> di panel TypeTarget, atau klik kanan kolom teks di halaman web mana pun dan pilih <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        'Panggilan video dari langkah 2. Penunjuk mengklik kanan, membuka menu TypeTarget, lalu mengklik "{typeToNewFile}". Kotak teks dengan garis tepi hijau dan pengatur waktu terbuka di bagian bawah halaman, dan ucapan yang ditranskripsi diketik ke dalamnya. Penunjuk mengklik tombol "Buka di tab baru" pada kotak itu, dan teks terus diketik di kotak satu halaman penuh di tab baru.',
    },
  },
  chromeMenu: {
    back: "Kembali",
    forward: "Maju",
    reload: "Muat ulang",
    saveAs: "Simpan sebagai…",
    print: "Cetak…",
    cast: "Transmisi…",
    qrCode: "Buat Kode QR untuk halaman ini",
    translate: "Terjemahkan ke français",
    viewSource: "Lihat sumber halaman",
    blockElements: "Blokir elemen",
    inspect: "Periksa",
    ctrl: "Ctrl",
    altLeft: "Alt+Panah Kiri",
    altRight: "Alt+Panah Kanan",
  },
  useCases: {
    heading: "Catatan Anda milik Anda. Kirim dan simpan di mana saja.",
    intro:
      "TypeTarget tidak menyimpan catatan Anda. Sebaliknya, Anda yang memberi tahu di mana catatan itu harus ditulis.",
    notes: {
      heading: "Catatan yang Anda simpan",
      intro: "Gunakan tab browser mana pun sebagai sumber audio.",
      items: [
        {
          title: "Kuliah dan kursus",
          body: "Setiap kata dari kelas rekaman atau langsung, langsung masuk ke catatan belajar Anda.",
        },
        {
          title: "Wawancara dan riset pengguna",
          body: "Transkripsi sesi rekaman sambil Anda menontonnya kembali.",
        },
        {
          title: "Podcast dan media sosial",
          body: "Simpan transkrip seluruh video untuk catatan episode, draf blog, atau kutipan yang Anda butuhkan.",
        },
        {
          title: "Catatan panggilan ke CRM",
          body: "Panggilan penjualan atau dukungan, diketik langsung ke kolom catatan pada data pelanggan.",
        },
      ],
    },
    captions: {
      heading: "Teks",
      intro: "Baca apa yang dikatakan sebuah tab, saat sedang dikatakan.",
      items: [
        {
          title: "Teks di tempat yang tidak punya teks",
          body: "Siaran langsung, pemutar tersemat, dan rekaman lama yang tidak pernah punya subtitle.",
        },
        {
          title: "Webinar dan konferensi langsung",
          body: "Simpan seluruh transkrip, bukan hanya slide yang sempat Anda foto.",
        },
        {
          title: "Catatan rapat",
          body: "Panggilan web di satu tab, transkripnya di dokumen atau aplikasi catatan Anda di tab sebelahnya.",
        },
        {
          title: "Akses bagi tunarungu dan orang dengan gangguan pendengaran",
          body: "Versi teks yang terus berjalan dari panggilan atau video apa pun, di kotak yang bisa Anda gulir kembali.",
        },
      ],
    },
    llm: {
      heading: "Ke chat AI apa pun",
      intro:
        "TypeTarget dapat mengetik ke kotak prompt antarmuka web LLM mana pun. Beri AI instruksinya, dan setiap pesan yang Anda kirim akan ditangani sesuai permintaan Anda.",
      items: [
        {
          title: "Roleplay langsung",
          body: "Jadikan AI sebuah karakter. Apa yang dikatakan pihak lain masuk ke kotak chatnya sebagai dialog Anda.",
        },
        {
          title: "Kopilot rapat",
          body: "Minta pertanyaan lanjutan, daftar tindakan, atau penjelasan sederhana dari istilah teknis.",
        },
        {
          title: "Latihan bahasa",
          body: "Tutor yang mengoreksi, menjelaskan, atau mengujimu tentang audio yang sedang Anda dengarkan.",
        },
        {
          title: "Bantuan belajar",
          body: "Ubah kuliah menjadi kartu belajar, ringkasan, atau soal latihan saat kuliah berlangsung.",
        },
        {
          title: "Komentar langsung",
          body: "Beri anotasi pada klaim dalam debat, pitch, atau keynote selagi masih berlangsung.",
        },
      ],
    },
    examplePrompt:
      "Kamu adalah teman bercakap-cakapku dalam bahasa Spanyol. Semua yang kukirim adalah ucapan seseorang barusan dalam video berbahasa Inggris. Balas dalam bahasa Spanyol sederhana, seolah-olah kamu menjawab orang itu, lalu beri aku satu kata dari situ untuk dipelajari.",
    exampleCaption:
      "Contoh prompt. Tempel prompt Anda sendiri ke chat AI apa pun sebelum mulai mendengarkan.",
  },
  spec: {
    heading: "Gratis selamanya.",
    intro:
      "Tidak ada argo berjalan, tidak ada batas untuk apa yang Anda simpan. Rekam sebanyak yang Anda mau, selama yang Anda mau.",
    recording: {
      label: "Tanpa batas rekaman.",
      value:
        "Biarkan berjalan selama konferensi seharian penuh. TypeTarget tidak membatasi berapa lama sebuah sesi bisa berlangsung.",
    },
    storage: {
      label: "Tanpa batas penyimpanan.",
      value:
        "TypeTarget tidak menyimpan transkrip, jadi tidak ada yang bisa penuh. Setiap kata langsung masuk ke kolom yang Anda pilih, dan Anda bisa menyimpannya sebagai file .txt di komputer sendiri. Tanpa server, tanpa akun, tanpa log.",
    },
    account: {
      label: "Tidak perlu akun.",
      value:
        "Gratis dan open source dengan lisensi MIT. Tanpa uji coba, tanpa paket berbayar, tanpa akun yang perlu dibuat. Model transkripsi yang dihosting di cloud berjalan dengan akun Google atau Groq Anda sendiri, dan keduanya menawarkan paket gratis.",
    },
    limitsNoteLink: "Lihat catatan tentang batas penyedia",
    limitsNote:
      "* TypeTarget tidak menetapkan batas sendiri. Model yang dihosting (Gemini, Groq) menerapkan kuota paket gratisnya sendiri, yang ditetapkan Google dan Groq dan dapat berubah kapan saja. Whisper lokal tidak memiliki kuota.",
  },
  faq: {
    heading: "Pertanyaan umum.",
    microphone: {
      q: "Apakah ini mentranskripsi suara saya sendiri?",
      a: "Tidak. TypeTarget mendengar apa yang Anda dengar, bukan apa yang Anda ucapkan. Ia tidak memakai mikrofon Anda.",
    },
    needKey: {
      q: "Apakah saya perlu kunci API?",
      a: "Tidak untuk memulai. Whisper lokal tidak butuh kunci, tetapi performanya bergantung pada perangkat keras Anda. Kunci Gemini atau Groq, yang bisa Anda dapatkan gratis dari penyedia tersebut, memberi transkripsi langsung di komputer mana pun.",
    },
    getKey: {
      q: "Bagaimana cara mendapatkan kunci API?",
      gemini:
        "<b>Gemini.</b> Buka <link>aistudio.google.com/api-keys</link> dan klik tombol <code>Create API key</code> di kanan atas.",
      geminiSteps: [
        "Beri nama apa saja untuk kunci Anda.",
        "Pilih <code>Create new project</code>, dan beri nama apa saja juga untuk proyeknya.",
        "Klik <code>Create key</code>.",
        "Salin kunci yang diberikan dan tempel ke kolom kunci API di TypeTarget.",
      ],
      groq: "<b>Groq.</b> Buka <link>console.groq.com/keys</link> dan klik tombol <code>Create API Key</code>.",
      groqSteps: [
        "Isi Display Name dengan apa saja.",
        "Salin Secret Key Anda dan tempel ke kolom kunci API Groq di TypeTarget.",
      ],
      aiStudioImage:
        'Pojok kanan atas halaman kunci API Google AI Studio, dengan tautan "API quickstart", tombol "Create API key", dan menu tarik-turun "Filter by All projects" di bawahnya.',
      groqImage:
        'Tombol "Create API Key" GroqCloud, dengan tanda plus sebelum labelnya.',
    },
    slow: {
      q: "Kenapa transkripsi saya lambat?",
      a: "Kemungkinan besar Anda memakai Whisper lokal, yang berjalan di dalam browser, jadi kecepatannya bergantung pada perangkat keras Anda. Di komputer lama atau yang kurang bertenaga, ia bisa tertinggal dari audio. Untuk transkripsi langsung yang cepat di komputer mana pun, beralihlah ke kunci Gemini atau Groq gratis.",
    },
    wrongLanguage: {
      q: "Mengapa transkripsinya dalam bahasa yang salah?",
      a: "Coba model lain di <code>{model}</code>: model yang lebih besar lebih baik dalam membedakan bahasa. Jika Anda tahu bahasa yang diucapkan, pilih bahasa itu di <code>{spokenLanguage}</code> alih-alih membiarkannya di <code>{auto}</code>. Anda juga bisa menaikkan <code>{chunkLength}</code>, sehingga model mendapat lebih banyak ucapan untuk mengenali bahasanya.",
    },
    audio: {
      q: "Ke mana audio saya dikirim?",
      a: "Dengan Whisper lokal, tidak ke mana-mana: audio ditranskripsi di dalam browser Anda. Dengan Gemini atau Groq, audio hanya dikirim ke penyedia itu, memakai kunci Anda sendiri. Audio tidak pernah dikirim ke TypeTarget.",
    },
    languages: {
      q: "Bahasa apa saja yang didukung?",
      transcription:
        "<b>Transkripsi.</b> Model Whisper dari OpenAI, lokal maupun di Groq, mendukung <whisper>99 bahasa</whisper>. Gemini Transcribe punya <gemini>daftar bahasa yang didukung</gemini> sendiri.",
      interface:
        "<b>Antarmuka.</b> Antarmuka TypeTarget tersedia dalam bahasa Arab, Bengali, Ceko, Filipino, Hindi, Indonesia, Inggris, Italia, Jepang, Jerman, Korea, Marathi, Mandarin (Sederhana dan Tradisional), Polandia, Portugis (Brasil dan Portugal), Prancis, Rusia, Spanyol, Telugu, Thai, Turki, Ukraina, Urdu, dan Vietnam, mengikuti bahasa sistem dan browser Anda.",
    },
    browsers: {
      q: "Di browser apa saja ini berfungsi?",
      a: "Chrome 116 atau yang lebih baru, dipasang dari Chrome Web Store. Browser berbasis Chromium seperti Edge dan Brave dapat menambahkannya dari halaman yang sama.",
    },
    unpacked: {
      q: "Bisakah saya memuatnya tanpa Chrome Web Store?",
      a: "Bisa. <download>Unduh file zip</download> dan ekstrak untuk mendapatkan folder bernama <code>typetarget</code>. Buka <code>chrome://extensions</code> dengan menempelkannya ke bilah alamat, karena halaman web tidak bisa menautkannya (di Edge alamatnya <code>edge://extensions</code>, di Brave <code>brave://extensions</code>). Aktifkan Mode developer di pojok kanan atas, klik <code>Muat yang belum dikemas</code>, lalu pilih folder hasil ekstrak. Untuk memperbarui nanti, unduh zip baru, ganti foldernya, dan tekan panah muat ulang pada kartu TypeTarget.",
    },
    contact: {
      q: "Apa informasi kontak Anda?",
      a: "Kirim pesan lewat <contact>formulir ini</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratis dan open source dengan lisensi MIT; <source>kode sumber di GitHub</source>. Transkripsi oleh Whisper (whisper.cpp, di browser Anda), Google Gemini, atau Groq, dengan kunci Anda sendiri. TypeTarget tidak berafiliasi dengan Google atau Groq. Tanpa server, tanpa akun, tanpa analitik, termasuk di halaman ini. <privacy>Kebijakan privasi</privacy>. <issues>Laporkan masalah</issues>. <contact>Kontak</contact>.",
  },
}
