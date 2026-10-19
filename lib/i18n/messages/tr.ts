import type { Messages } from "./en"

export const tr: Messages = {
  meta: {
    title: "TypeTarget: Konuşmayı metne, herhangi bir metin alanına",
    description:
      "Herhangi bir sekmenin sesini metne döken ve canlı olarak herhangi bir sekmedeki herhangi bir metin alanına yazan ücretsiz, açık kaynaklı bir tarayıcı uzantısı. Toplantı notları, altyazılar ve her yapay zekâ sohbeti için canlı giriş.",
  },
  header: {
    addTo: "{browser} tarayıcısına ekle",
    language: "Dil",
  },
  hero: {
    headline: "Konuşmayı metne, her yere yazılı.",
    intro:
      "TypeTarget, sesinizi doğrudan söylediğiniz metin alanına döken ücretsiz bir tarayıcı uzantısıdır.",
    note: "Ücretsiz · MIT lisanslı · Chrome 116+",
    availableOn: "Şurada mevcut:",
    chromeWebStore: "Chrome Web Mağazası",
    githubLabel: "GitHub'da TypeTarget kaynak kodu",
    githubTitle: "GitHub'da kaynak kodu",
    howItWorks: "Nasıl çalışır",
  },
  steps: {
    carouselLabel: "Kurulum adımları",
    slideLabel: "{n} / {total}",
    step: "Adım {n}",
    optional: "(isteğe bağlı)",
    pause: "Slayt gösterisini duraklat",
    play: "Slayt gösterisini oynat",
    mute: "Videonun sesini kapat",
    unmute: "Videonun sesini aç",
    pickModel: {
      title: "Bir model ve/veya dil seçin.",
      body: "Bilgisayarınızda yerel olarak metne döken bir yapay zekâ modeli seçin ya da işlemi bir bulut sağlayıcıya bırakın. Hepsi birlikte <languages>100'den fazla insan dilini</languages> anlar.",
      animation:
        "TypeTarget açılır penceresi. İşaretçi model listesini kaydırıp Whisper Large v3 Q5'i seçiyor, ardından konuşma dili listesini kaydırıp İngilizceyi seçiyor.",
    },
    selectInput: {
      title: "Bir giriş seçin.",
      body: "TypeTarget panelindeki <code>{startListening}</code> düğmesine tıklayın ya da herhangi bir sayfaya sağ tıklayın. <code>TypeTarget</code> → <code>{listenToTab}</code> seçeneğini seçin.",
      animation:
        'Bir tarayıcı sekmesinde görüntülü görüşme. İşaretçi sağ tıklıyor, TypeTarget menüsünü açıyor ve "{listenToTab}" seçeneğine tıklıyor.',
    },
    chooseOutput: {
      title: "Bir çıkış seçin.",
      body: "TypeTarget panelindeki <code>{startTyping}</code> düğmesine tıklayın ya da herhangi bir web sayfasındaki metin alanına sağ tıklayıp <code>TypeTarget</code> → <code>{typeToField}</code> seçeneğini seçin.",
      animation:
        '2. adımdaki görüntülü görüşme. İşaretçi sağ tıklıyor, TypeTarget menüsünü açıyor ve "{typeToNewFile}" seçeneğine tıklıyor. Sayfanın altında yeşil çerçeveli ve zamanlayıcılı bir metin kutusu açılıyor ve metne dökülen konuşma içine yazılıyor. İşaretçi kutunun "Yeni sekmede aç" düğmesine tıklıyor ve metin, yeni bir sekmede tam sayfa bir kutuda yazılmaya devam ediyor.',
    },
  },
  chromeMenu: {
    back: "Geri",
    forward: "İleri",
    reload: "Yeniden yükle",
    saveAs: "Farklı kaydet…",
    print: "Yazdır…",
    cast: "Yayınla…",
    qrCode: "Bu sayfa için QR kodu oluştur",
    translate: "français diline çevir",
    viewSource: "Sayfa kaynağını görüntüle",
    blockElements: "Öğeleri engelle",
    inspect: "İncele",
    ctrl: "Ctrl",
    altLeft: "Alt+Sol Ok",
    altRight: "Alt+Sağ Ok",
  },
  useCases: {
    heading: "Notlarınız sizin. İstediğiniz yere gönderin ve kaydedin.",
    intro:
      "TypeTarget notlarınızı saklamaz. Bunun yerine onlara nereye yazacağını siz söylersiniz.",
    notes: {
      heading: "Saklayacağınız notlar",
      intro: "Herhangi bir tarayıcı sekmesini ses kaynağı olarak kullanın.",
      items: [
        {
          title: "Dersler ve kurslar",
          body: "Kayıtlı ya da canlı bir dersin her kelimesi, doğrudan ders notlarınıza.",
        },
        {
          title: "Röportajlar ve kullanıcı araştırması",
          body: "Kayıtlı bir oturumu yeniden izlerken metne dökün.",
        },
        {
          title: "Podcast'ler ve sosyal medya",
          body: "Bölüm notları, blog taslağı ya da ihtiyacınız olan bir alıntı için bütün bir videonun dökümünü kaydedin.",
        },
        {
          title: "CRM'e görüşme notları",
          body: "Satış ya da destek görüşmeleri, doğrudan kaydın not alanına yazılır.",
        },
      ],
    },
    captions: {
      heading: "Altyazılar",
      intro: "Bir sekmenin söylediklerini, söylediği anda okuyun.",
      items: [
        {
          title: "Altyazı olmayan yerlerde altyazı",
          body: "Hiç altyazıyla gelmemiş yayınlar, gömülü oynatıcılar ve eski kayıtlar.",
        },
        {
          title: "Canlı web seminerleri ve konferanslar",
          body: "Yalnızca fotoğrafını çektiğiniz slaytı değil, dökümün tamamını saklayın.",
        },
        {
          title: "Toplantı notları",
          body: "Bir sekmede web görüşmesi, yanındakinde belgenizde ya da not uygulamanızda dökümü.",
        },
        {
          title: "İşitme engelliler için erişilebilirlik",
          body: "Her görüşme ya da videonun, geriye kaydırabileceğiniz bir kutuda akan metin hâli.",
        },
      ],
    },
    llm: {
      heading: "Her yapay zekâ sohbetine",
      intro:
        "TypeTarget, herhangi bir LLM web arayüzünün istem kutusuna yazabilir. Yapay zekâya talimatlarını verin; gönderdiğiniz her mesaj istediğiniz şekilde işlenir.",
      items: [
        {
          title: "Canlı rol yapma",
          body: "Yapay zekâya bir karakter verin. Karşı tarafın söyledikleri, sizin replikleriniz olarak sohbet kutusuna düşer.",
        },
        {
          title: "Toplantı yardımcı pilotu",
          body: "Takip soruları, yapılacaklar ya da jargonun sade dille açıklamasını isteyin.",
        },
        {
          title: "Dil pratiği",
          body: "Dinlediğiniz ses üzerinden sizi düzelten, açıklayan ya da sınayan bir öğretmen.",
        },
        {
          title: "Ders yardımcısı",
          body: "Bir dersi, sürerken bilgi kartlarına, özete ya da alıştırma sorularına dönüştürün.",
        },
        {
          title: "Canlı yorum",
          body: "Bir tartışmadaki, sunumdaki ya da açılış konuşmasındaki iddiaları, devam ederken not alın.",
        },
      ],
    },
    examplePrompt:
      "Sen benim İspanyolca konuşma partnerimsin. Gönderdiğim her şey, İngilizce bir videoda birinin az önce söylediği şey. Ona cevap veriyormuş gibi basit İspanyolcayla yanıt ver, sonra bana öğrenmem için bir kelime söyle.",
    exampleCaption:
      "Örnek bir istem. Dinlemeye başlamadan önce kendi isteminizi herhangi bir yapay zekâ sohbetine yapıştırın.",
  },
  spec: {
    heading: "Sonsuza dek ücretsiz.",
    intro:
      "İşleyen bir sayaç yok, sakladıklarınıza sınır yok. İstediğiniz kadar, istediğiniz süre kaydedin.",
    recording: {
      label: "Kayıt sınırı yok.",
      value:
        "Tam günlük bir konferans boyunca açık bırakın. TypeTarget bir oturumun ne kadar sürebileceğine sınır koymaz.",
    },
    storage: {
      label: "Depolama sınırı yok.",
      value:
        "TypeTarget dökümleri saklamaz, yani dolacak bir şey yok. Her kelime doğrudan seçtiğiniz alana gider ve bunu kendi bilgisayarınıza .txt dosyası olarak kaydedebilirsiniz. Sunucu yok, hesap yok, kayıt yok.",
    },
    account: {
      label: "Hesap gerekmez.",
      value:
        "MIT lisansıyla ücretsiz ve açık kaynak. Deneme süresi yok, ücretli paket yok, açılacak hesap yok. Bulutta barındırılan döküm modelleri kendi Google ya da Groq hesabınızla çalışır ve ikisi de ücretsiz bir katman sunar.",
    },
    limitsNoteLink: "Sağlayıcı sınırlarıyla ilgili nota bakın",
    limitsNote:
      "* TypeTarget kendi başına hiçbir sınır koymaz. Barındırılan modeller (Gemini, Groq) kendi ücretsiz katman kotalarını uygular; bunları Google ve Groq belirler ve her an değiştirebilir. Yerel Whisper'ın kotası yoktur.",
  },
  faq: {
    heading: "Sık sorulan sorular.",
    microphone: {
      q: "Kendi sesimi de metne döker mi?",
      a: "Hayır. TypeTarget sizin duyduğunuzu duyar, söylediğinizi değil. Mikrofonunuzu kullanmaz.",
    },
    needKey: {
      q: "API anahtarına ihtiyacım var mı?",
      a: "Başlamak için hayır. Yerel Whisper anahtar gerektirmez ama performansı donanımınıza bağlıdır. Bu sağlayıcılardan ücretsiz alabileceğiniz bir Gemini ya da Groq anahtarı, her bilgisayarda canlı döküm sağlar.",
    },
    getKey: {
      q: "API anahtarını nasıl alırım?",
      gemini:
        "<b>Gemini.</b> <link>aistudio.google.com/api-keys</link> adresine gidin ve sağ üstteki <code>Create API key</code> düğmesine tıklayın.",
      geminiSteps: [
        "Anahtarınıza istediğiniz adı verin.",
        "<code>Create new project</code> seçeneğini seçin ve projeye de istediğiniz adı verin.",
        "<code>Create key</code> düğmesine tıklayın.",
        "Verilen anahtarı kopyalayıp TypeTarget'taki API anahtarı alanına yapıştırın.",
      ],
      groq: "<b>Groq.</b> <link>console.groq.com/keys</link> adresine gidin ve <code>Create API Key</code> düğmesine tıklayın.",
      groqSteps: [
        "Display Name olarak istediğiniz adı verin.",
        "Secret Key'inizi kopyalayıp TypeTarget'taki Groq API anahtarı alanına yapıştırın.",
      ],
      aiStudioImage:
        'Google AI Studio API anahtarları sayfasının sağ üst köşesi; bir "API quickstart" bağlantısı, bir "Create API key" düğmesi ve altlarında "Filter by All projects" açılır menüsü.',
      groqImage:
        'GroqCloud\'un "Create API Key" düğmesi; etiketin önünde bir artı işareti var.',
    },
    slow: {
      q: "Dökümüm neden yavaş?",
      a: "Büyük olasılıkla tarayıcınızın içinde çalışan yerel Whisper'ı kullanıyorsunuz, bu yüzden hızı donanımınıza bağlı. Eski ya da daha az güçlü bir bilgisayarda sesin gerisinde kalabilir. Her bilgisayarda hızlı ve canlı döküm için ücretsiz bir Gemini ya da Groq anahtarına geçin.",
    },
    wrongLanguage: {
      q: "Yanlış dilde metne döküyor.",
      a: "<code>{model}</code> altında başka bir model deneyin: büyük modeller dilleri daha iyi ayırt eder. Konuşulan dili biliyorsanız <code>{auto}</code> olarak bırakmak yerine <code>{spokenLanguage}</code> altında o dili seçin. <code>{chunkLength}</code> değerini de artırabilirsiniz; böylece model dili tanımak için daha fazla konuşma duyar.",
    },
    audio: {
      q: "Sesim nereye gidiyor?",
      a: "Yerel Whisper ile hiçbir yere: tarayıcınızın içinde metne dökülür. Gemini ya da Groq ile yalnızca o sağlayıcıya, kendi anahtarınızla gider. TypeTarget'a asla gitmez.",
    },
    languages: {
      q: "Hangi dilleri destekliyorsunuz?",
      transcription:
        "<b>Döküm.</b> OpenAI'ın Whisper modelleri, yerelde ya da Groq'ta, <whisper>99 dili</whisper> destekler. Gemini Transcribe'ın kendi <gemini>desteklenen diller listesi</gemini> vardır.",
      interface:
        "<b>Arayüz.</b> TypeTarget arayüzü Almanca, Arapça, Bengalce, Çekçe, Çince (Basitleştirilmiş ve Geleneksel), Endonezce, Filipince, Fransızca, Hintçe, İngilizce, İspanyolca, İtalyanca, Japonca, Korece, Lehçe, Marathi, Portekizce (Brezilya ve Portekiz), Rusça, Tayca, Telugu, Türkçe, Ukraynaca, Urduca ve Vietnamca dillerinde, sisteminizin ve tarayıcınızın diline uygun olarak sunulur.",
    },
    browsers: {
      q: "Hangi tarayıcılarda çalışır?",
      a: "Chrome Web Mağazası'ndan yüklenen Chrome 116 veya daha yeni sürümlerde. Edge ve Brave gibi Chromium tabanlı tarayıcılar da aynı sayfadan ekleyebilir.",
    },
    unpacked: {
      q: "Chrome Web Mağazası olmadan yükleyebilir miyim?",
      a: "Evet. <download>Zip dosyasını indirin</download> ve <code>typetarget</code> adlı bir klasör elde etmek için çıkarın. Web sayfaları bağlantı veremediği için <code>chrome://extensions</code> adresini adres çubuğuna yapıştırarak açın (Edge'de <code>edge://extensions</code>, Brave'de <code>brave://extensions</code>). Sağ üst köşedeki Geliştirici modunu açın, <code>Paketlenmemiş öğe yükle</code> düğmesine tıklayın ve çıkardığınız klasörü seçin. Daha sonra güncellemek için yeni zip dosyasını indirin, klasörü değiştirin ve TypeTarget kartındaki yeniden yükleme okuna basın.",
    },
  },
  footer: {
    text: "TypeTarget {version}. MIT lisansıyla ücretsiz ve açık kaynak; <source>GitHub'da kaynak kodu</source>. Döküm Whisper (whisper.cpp, tarayıcınızda), Google Gemini ya da Groq ile, kendi anahtarınızla yapılır. TypeTarget'ın Google ya da Groq ile bir bağlantısı yoktur. Sunucu yok, hesap yok, analiz yok; bu sayfa da dahil. <privacy>Gizlilik politikası</privacy>. <issues>Sorun bildir</issues>. <contact>İletişim</contact>.",
  },
}
