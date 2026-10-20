import type { Messages } from "./en"

export const es: Messages = {
  meta: {
    title: "TypeTarget: de voz a texto, en cualquier campo de texto",
    description:
      "Una extensión de navegador gratuita y de código abierto que transcribe el audio de cualquier pestaña y lo escribe, en directo, en cualquier campo de texto de cualquier pestaña. Notas de reuniones, subtítulos y entrada en directo para cualquier chat de IA.",
  },
  header: {
    addTo: "Añadir a {browser}",
    language: "Idioma",
  },
  hero: {
    headline: "De voz a texto, escrito en cualquier sitio.",
    intro:
      "TypeTarget es una extensión de navegador gratuita que transcribe tu audio directamente en el campo de texto que le indiques.",
    note: "Gratis · Licencia MIT · Chrome 116+",
    availableOn: "Disponible en",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Código fuente de TypeTarget en GitHub",
    githubTitle: "Código fuente en GitHub",
    howItWorks: "Cómo funciona",
  },
  steps: {
    carouselLabel: "Pasos de configuración",
    slideLabel: "{n} de {total}",
    step: "Paso {n}",
    optional: "(opcional)",
    pause: "Pausar la presentación",
    play: "Reproducir la presentación",
    mute: "Silenciar el vídeo",
    unmute: "Activar el sonido del vídeo",
    pickModel: {
      title: "Elige un modelo y/o un idioma.",
      body: "Elige un modelo de IA que transcriba localmente en tu ordenador o deja que un proveedor en la nube haga los cálculos por ti. Entre todos entienden más de <languages>100 idiomas humanos</languages>.",
      animation:
        "La ventana de TypeTarget. El puntero recorre la lista de modelos y elige Whisper Large v3 Q5; después recorre la lista de idiomas hablados y elige inglés.",
    },
    selectInput: {
      title: "Elige una entrada.",
      body: "Haz clic en el botón <code>{startListening}</code> del panel de TypeTarget, o haz clic derecho en cualquier página. Elige <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Una videollamada en una pestaña del navegador. El puntero hace clic derecho, abre el menú de TypeTarget y hace clic en {listenToTab}.",
    },
    chooseOutput: {
      title: "Elige una salida.",
      body: "Haz clic en el botón <code>{startTyping}</code> del panel de TypeTarget, o haz clic derecho en el campo de texto de cualquier página web y selecciona <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        "La videollamada del paso 2. El puntero hace clic derecho, abre el menú de TypeTarget y hace clic en {typeToNewFile}. Se abre un cuadro de texto con un contorno verde y un temporizador en la parte inferior de la página, y la voz transcrita se va escribiendo en él. El puntero hace clic en el botón «Abrir en una pestaña nueva» del cuadro, y el texto sigue escribiéndose en un cuadro a página completa en una pestaña nueva.",
    },
  },
  chromeMenu: {
    back: "Atrás",
    forward: "Adelante",
    reload: "Volver a cargar",
    saveAs: "Guardar como…",
    print: "Imprimir…",
    cast: "Enviar…",
    qrCode: "Crear código QR para esta página",
    translate: "Traducir a français",
    viewSource: "Ver código fuente de la página",
    blockElements: "Bloquear elementos",
    inspect: "Inspeccionar",
    ctrl: "Ctrl",
    altLeft: "Alt+Flecha izquierda",
    altRight: "Alt+Flecha derecha",
  },
  useCases: {
    heading: "Tus notas son tuyas. Envíalas y guárdalas donde quieras.",
    intro:
      "TypeTarget no guarda tus notas. En su lugar, tú le dices dónde quieres que las escriba.",
    notes: {
      heading: "Notas que conservas",
      intro: "Usa cualquier pestaña del navegador como fuente de audio.",
      items: [
        {
          title: "Clases y cursos",
          body: "Cada palabra de una clase grabada o en directo, directamente en tus apuntes.",
        },
        {
          title: "Entrevistas e investigación de usuarios",
          body: "Transcribe una sesión grabada mientras la vuelves a ver.",
        },
        {
          title: "Pódcasts y redes sociales",
          body: "Guarda la transcripción de un vídeo entero para las notas del episodio, un borrador de blog o una cita que necesites.",
        },
        {
          title: "Notas de llamadas en un CRM",
          body: "Llamadas de ventas o de soporte, escritas directamente en el campo de notas del registro.",
        },
      ],
    },
    captions: {
      heading: "Subtítulos",
      intro: "Lee lo que dice una pestaña mientras lo dice.",
      items: [
        {
          title: "Subtítulos donde no los hay",
          body: "Streams, reproductores integrados y grabaciones antiguas que nunca tuvieron subtítulos.",
        },
        {
          title: "Seminarios web y conferencias en directo",
          body: "Quédate con toda la transcripción, no solo con la diapositiva que fotografiaste.",
        },
        {
          title: "Notas de reuniones",
          body: "Una llamada web en una pestaña y la transcripción en tu documento o app de notas en la siguiente.",
        },
        {
          title: "Accesibilidad para personas sordas o con pérdida auditiva",
          body: "Una versión en texto continua de cualquier llamada o vídeo, en un cuadro por el que puedes desplazarte hacia atrás.",
        },
      ],
    },
    llm: {
      heading: "En cualquier chat de IA",
      intro:
        "TypeTarget puede escribir en el cuadro de mensajes de cualquier interfaz web de un LLM. Dale a la IA sus instrucciones y cada mensaje que le envíes se tratará como le pediste.",
      items: [
        {
          title: "Juego de rol en directo",
          body: "Dale un personaje a la IA. Lo que dice la otra parte llega a su chat como tus frases.",
        },
        {
          title: "Copiloto de reuniones",
          body: "Pide preguntas de seguimiento, tareas pendientes o una versión en lenguaje sencillo de la jerga.",
        },
        {
          title: "Práctica de idiomas",
          body: "Un tutor que te corrige, te explica o te pone a prueba con el audio que estás escuchando.",
        },
        {
          title: "Ayuda para estudiar",
          body: "Convierte una clase en tarjetas, un resumen o preguntas de práctica mientras sucede.",
        },
        {
          title: "Comentario en directo",
          body: "Anota las afirmaciones de un debate, un pitch o una keynote mientras sigue en marcha.",
        },
      ],
    },
    examplePrompt:
      "Eres mi compañero de conversación en francés. Todo lo que te envío es lo que alguien acaba de decir en un vídeo en inglés. Responde en francés sencillo, como si le contestaras, y luego dame una palabra para aprender.",
    exampleCaption:
      "Un ejemplo de prompt. Pega el tuyo en cualquier chat de IA antes de empezar a escuchar.",
  },
  spec: {
    heading: "Gratis para siempre.",
    intro:
      "Sin contador corriendo, sin límite en lo que guardas. Graba todo lo que quieras, durante todo el tiempo que quieras.",
    recording: {
      label: "Sin límites de grabación.",
      value:
        "Déjalo funcionando durante una conferencia de un día entero. TypeTarget no limita cuánto puede durar una sesión.",
    },
    storage: {
      label: "Sin límites de almacenamiento.",
      value:
        "TypeTarget no guarda transcripciones, así que no hay nada que se llene. Cada palabra va directamente al campo que elegiste, y puedes guardarla como archivo .txt en tu propio ordenador. Sin servidores, sin cuentas, sin registros.",
    },
    account: {
      label: "Sin necesidad de cuenta.",
      value:
        "Gratis y de código abierto con licencia MIT. Sin prueba, sin plan de pago, sin cuenta que crear. Los modelos de transcripción alojados en la nube funcionan con tu propia cuenta de Google o Groq, y ambos ofrecen un nivel gratuito.",
    },
    limitsNoteLink: "Ver nota sobre los límites de los proveedores",
    limitsNote:
      "* TypeTarget no pone ningún límite propio. Los modelos alojados (Gemini, Groq) aplican sus propias cuotas gratuitas, que Google y Groq fijan y pueden cambiar en cualquier momento. Whisper local no tiene cuota.",
  },
  faq: {
    heading: "Preguntas frecuentes.",
    microphone: {
      q: "¿Transcribe mi propia voz?",
      a: "No. TypeTarget oye lo que tú oyes, no lo que dices. No usa tu micrófono.",
    },
    needKey: {
      q: "¿Necesito una clave de API?",
      a: "No para empezar. Whisper local no necesita clave, pero su rendimiento depende de tu hardware. Una clave de Gemini o Groq, que esos proveedores dan gratis, te da transcripción en directo en cualquier equipo.",
    },
    getKey: {
      q: "¿Cómo consigo una clave de API?",
      gemini:
        "<b>Gemini.</b> Ve a <link>aistudio.google.com/api-keys</link> y haz clic en el botón <code>Create API key</code> arriba a la derecha.",
      geminiSteps: [
        "Ponle a tu clave el nombre que quieras.",
        "Elige <code>Create new project</code> y ponle también al proyecto el nombre que quieras.",
        "Haz clic en <code>Create key</code>.",
        "Copia la clave que te da y pégala en el campo de la clave de API de TypeTarget.",
      ],
      groq: "<b>Groq.</b> Ve a <link>console.groq.com/keys</link> y haz clic en el botón <code>Create API Key</code>.",
      groqSteps: [
        "Ponle el Display Name que quieras.",
        "Copia tu Secret Key y pégala en el campo de la clave de API de Groq en TypeTarget.",
      ],
      aiStudioImage:
        "La esquina superior derecha de la página de claves de API de Google AI Studio, con un enlace «API quickstart», un botón «Create API key» y, debajo, un desplegable «Filter by All projects».",
      groqImage:
        "El botón «Create API Key» de GroqCloud, con un signo más delante del texto.",
    },
    slow: {
      q: "¿Por qué mi transcripción es lenta?",
      a: "Lo más probable es que uses Whisper local, que se ejecuta dentro de tu navegador, así que su velocidad depende de tu hardware. En un equipo antiguo o menos potente puede quedarse atrás respecto al audio. Para una transcripción rápida en directo en cualquier equipo, cambia a una clave gratuita de Gemini o Groq.",
    },
    wrongLanguage: {
      q: "¿Por qué transcribe en el idioma equivocado?",
      a: "Prueba otro modelo en <code>{model}</code>: los modelos más grandes distinguen mejor los idiomas. Si sabes qué idioma se habla, elígelo en <code>{spokenLanguage}</code> en lugar de dejarlo en <code>{auto}</code>. También puedes aumentar <code>{chunkLength}</code>, para que el modelo tenga más voz con la que reconocer el idioma.",
    },
    audio: {
      q: "¿Adónde va mi audio?",
      a: "Con Whisper local, a ninguna parte: se transcribe dentro de tu navegador. Con Gemini o Groq, va solo a ese proveedor, usando tu propia clave. Nunca va a TypeTarget.",
    },
    languages: {
      q: "¿Qué idiomas admitís?",
      transcription:
        "<b>Transcripción.</b> Los modelos Whisper de OpenAI, en local o en Groq, admiten <whisper>99 idiomas</whisper>. Gemini Transcribe tiene su propia <gemini>lista de idiomas admitidos</gemini>.",
      interface:
        "<b>Interfaz.</b> La interfaz de TypeTarget está disponible en alemán, árabe, bengalí, checo, chino (simplificado y tradicional), coreano, español, filipino, francés, hindi, indonesio, inglés, italiano, japonés, maratí, polaco, portugués (Brasil y Portugal), ruso, tailandés, telugu, turco, ucraniano, urdu y vietnamita, según el idioma de tu sistema y de tu navegador.",
    },
    browsers: {
      q: "¿En qué navegadores funciona?",
      a: "Chrome 116 o posterior, instalado desde Chrome Web Store. Los navegadores basados en Chromium, como Edge y Brave, pueden añadirlo desde la misma ficha.",
    },
    unpacked: {
      q: "¿Puedo cargarlo sin Chrome Web Store?",
      a: "Sí. <download>Descarga el zip</download> y extráelo para obtener una carpeta llamada <code>typetarget</code>. Abre <code>chrome://extensions</code> pegándolo en la barra de direcciones, ya que las páginas web no pueden enlazar a ella (en Edge es <code>edge://extensions</code>, en Brave <code>brave://extensions</code>). Activa el Modo de desarrollador en la esquina superior derecha, haz clic en <code>Cargar descomprimida</code> y selecciona la carpeta extraída. Para actualizarlo más adelante, descarga el nuevo zip, sustituye la carpeta y pulsa la flecha de recargar en la tarjeta de TypeTarget.",
    },
    contact: {
      q: "¿Cómo puedo contactar con TypeTarget?",
      a: "Escríbenos a través de <contact>este formulario</contact>.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratis y de código abierto con licencia MIT; <source>código fuente en GitHub</source>. Transcripción con Whisper (whisper.cpp, en tu navegador), Google Gemini o Groq, con tu propia clave. TypeTarget no está afiliado a Google ni a Groq. Sin servidores, sin cuentas, sin analíticas, y eso incluye esta página. <privacy>Política de privacidad</privacy>. <issues>Informar de un problema</issues>. <contact>Contacto</contact>.",
  },
}
