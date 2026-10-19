import type { Messages } from "./en"

export const ptPT: Messages = {
  meta: {
    title: "TypeTarget: de voz para texto, em qualquer campo de texto",
    description:
      "Uma extensão de navegador gratuita e de código aberto que transcreve o áudio de qualquer separador e o escreve, em direto, em qualquer campo de texto de qualquer separador. Notas de reuniões, legendas e introdução de texto em direto para qualquer chat de IA.",
  },
  header: {
    addTo: "Adicionar ao {browser}",
    language: "Idioma",
  },
  hero: {
    headline: "De voz para texto, escrito em qualquer lado.",
    intro:
      "O TypeTarget é uma extensão de navegador gratuita que transcreve o seu áudio diretamente no campo de texto que lhe indicar.",
    note: "Gratuito · Licença MIT · Chrome 116+",
    availableOn: "Disponível na",
    chromeWebStore: "Chrome Web Store",
    githubLabel: "Código-fonte do TypeTarget no GitHub",
    githubTitle: "Código-fonte no GitHub",
    howItWorks: "Como funciona",
  },
  steps: {
    carouselLabel: "Passos de configuração",
    slideLabel: "{n} de {total}",
    step: "Passo {n}",
    optional: "(opcional)",
    pause: "Pausar apresentação",
    play: "Reproduzir apresentação",
    mute: "Desativar o som do vídeo",
    unmute: "Ativar o som do vídeo",
    pickModel: {
      title: "Escolha um modelo e/ou um idioma.",
      body: "Escolha um modelo de IA que transcreve localmente no seu computador ou deixe um fornecedor na nuvem tratar do processamento por si. Juntos, compreendem mais de <languages>100 idiomas humanos</languages>.",
      animation:
        "A janela do TypeTarget. O ponteiro percorre a lista de modelos e escolhe Whisper Large v3 Q5, depois percorre a lista de idiomas falados e escolhe inglês.",
    },
    selectInput: {
      title: "Escolha uma entrada.",
      body: "Clique no botão <code>{startListening}</code> no painel do TypeTarget ou clique com o botão direito em qualquer página. Escolha <code>TypeTarget</code> → <code>{listenToTab}</code>.",
      animation:
        "Uma videochamada num separador do navegador. O ponteiro clica com o botão direito, abre o menu do TypeTarget e clica em {listenToTab}.",
    },
    chooseOutput: {
      title: "Escolha uma saída.",
      body: "Clique no botão <code>{startTyping}</code> no painel do TypeTarget ou clique com o botão direito no campo de texto de qualquer página web e selecione <code>TypeTarget</code> → <code>{typeToField}</code>.",
      animation:
        'A videochamada do passo 2. O ponteiro clica com o botão direito, abre o menu do TypeTarget e clica em {typeToNewFile}. Abre-se uma caixa de texto com contorno verde e um temporizador na parte de baixo da página, e a fala transcrita vai sendo escrita nela. O ponteiro clica no botão "Abrir num novo separador" da caixa, e o texto continua a ser escrito numa caixa de página inteira num novo separador.',
    },
  },
  chromeMenu: {
    back: "Retroceder",
    forward: "Avançar",
    reload: "Recarregar",
    saveAs: "Guardar como…",
    print: "Imprimir…",
    cast: "Transmitir…",
    qrCode: "Criar código QR para esta página",
    translate: "Traduzir para français",
    viewSource: "Ver código-fonte da página",
    blockElements: "Bloquear elementos",
    inspect: "Inspecionar",
    ctrl: "Ctrl",
    altLeft: "Alt+Seta para a esquerda",
    altRight: "Alt+Seta para a direita",
  },
  useCases: {
    heading: "As suas notas são suas. Envie e guarde onde quiser.",
    intro:
      "O TypeTarget não guarda as suas notas. Em vez disso, é o utilizador que lhe diz onde as deve escrever.",
    notes: {
      heading: "Notas que guarda",
      intro: "Use qualquer separador do navegador como fonte de áudio.",
      items: [
        {
          title: "Aulas e cursos",
          body: "Cada palavra de uma aula gravada ou em direto, diretamente nas suas notas de estudo.",
        },
        {
          title: "Entrevistas e investigação com utilizadores",
          body: "Transcreva uma sessão gravada enquanto a revê.",
        },
        {
          title: "Podcasts e redes sociais",
          body: "Guarde a transcrição de um vídeo inteiro para notas do episódio, um rascunho de blogue ou uma citação de que precise.",
        },
        {
          title: "Notas de chamadas num CRM",
          body: "Chamadas de vendas ou de apoio, escritas diretamente no campo de notas do registo.",
        },
      ],
    },
    captions: {
      heading: "Legendas",
      intro: "Leia o que um separador está a dizer, enquanto o diz.",
      items: [
        {
          title: "Legendas onde não existem",
          body: "Transmissões, leitores incorporados e gravações antigas que nunca tiveram legendas.",
        },
        {
          title: "Webinars e conferências em direto",
          body: "Fique com a transcrição completa, não apenas com o diapositivo que fotografou.",
        },
        {
          title: "Notas de reuniões",
          body: "Uma chamada web num separador e a transcrição no seu documento ou app de notas no seguinte.",
        },
        {
          title:
            "Acessibilidade para pessoas surdas e com deficiência auditiva",
          body: "Uma versão em texto contínua de qualquer chamada ou vídeo, numa caixa onde pode voltar atrás.",
        },
      ],
    },
    llm: {
      heading: "Em qualquer chat de IA",
      intro:
        "O TypeTarget pode escrever na caixa de prompt de qualquer interface web de um LLM. Dê as instruções à IA, e cada mensagem que lhe enviar será tratada como pediu.",
      items: [
        {
          title: "Roleplay em direto",
          body: "Dê uma personagem à IA. O que o outro lado diz chega à caixa de chat dela como as suas falas.",
        },
        {
          title: "Copiloto de reuniões",
          body: "Peça perguntas de seguimento, ações a tomar ou uma versão em linguagem simples do jargão.",
        },
        {
          title: "Prática de línguas",
          body: "Um tutor que corrige, explica ou o testa sobre o áudio que está a ouvir.",
        },
        {
          title: "Apoio ao estudo",
          body: "Transforme uma aula em cartões de estudo, num resumo ou em perguntas de prática à medida que decorre.",
        },
        {
          title: "Comentário em direto",
          body: "Anote as afirmações de um debate, de um pitch ou de uma keynote enquanto ainda decorre.",
        },
      ],
    },
    examplePrompt:
      "És o meu parceiro de conversação em espanhol. Tudo o que te envio é o que alguém acabou de dizer num vídeo em inglês. Responde em espanhol simples, como se estivesses a responder-lhe, e depois dá-me uma palavra para aprender.",
    exampleCaption:
      "Um exemplo de prompt. Cole o seu em qualquer chat de IA antes de começar a ouvir.",
  },
  spec: {
    heading: "Gratuito para sempre.",
    intro:
      "Nenhum contador a correr, nenhum limite para o que guarda. Grave o que quiser, durante o tempo que quiser.",
    recording: {
      label: "Sem limites de gravação.",
      value:
        "Deixe-o a funcionar durante uma conferência de um dia inteiro. O TypeTarget não limita a duração de uma sessão.",
    },
    storage: {
      label: "Sem limites de armazenamento.",
      value:
        "O TypeTarget não guarda transcrições, por isso não há nada para encher. Cada palavra vai diretamente para o campo que escolheu, e pode guardá-la como ficheiro .txt no seu próprio computador. Sem servidores, sem contas, sem registos.",
    },
    account: {
      label: "Sem necessidade de conta.",
      value:
        "Gratuito e de código aberto ao abrigo da licença MIT. Sem período de teste, sem plano pago, sem conta para criar. Os modelos de transcrição alojados na nuvem funcionam com a sua própria conta Google ou Groq, e ambos oferecem um escalão gratuito.",
    },
    limitsNoteLink: "Ver nota sobre os limites dos fornecedores",
    limitsNote:
      "* O TypeTarget não impõe nenhum limite próprio. Os modelos alojados (Gemini, Groq) aplicam as suas próprias quotas gratuitas, que a Google e a Groq definem e podem alterar a qualquer momento. O Whisper local não tem quota.",
  },
  faq: {
    heading: "Perguntas frequentes.",
    microphone: {
      q: "Transcreve a minha própria voz?",
      a: "Não. O TypeTarget ouve o que o utilizador ouve, não o que diz. Não usa o seu microfone.",
    },
    needKey: {
      q: "Preciso de uma chave de API?",
      a: "Não para começar. O Whisper local não precisa de chave, mas o desempenho depende do seu hardware. Uma chave Gemini ou Groq, que obtém gratuitamente desses fornecedores, permite transcrição em direto em qualquer computador.",
    },
    getKey: {
      q: "Como obtenho uma chave de API?",
      gemini:
        "<b>Gemini.</b> Aceda a <link>aistudio.google.com/api-keys</link> e clique no botão <code>Create API key</code> no canto superior direito.",
      geminiSteps: [
        "Dê qualquer nome à sua chave.",
        "Escolha <code>Create new project</code> e dê também qualquer nome ao projeto.",
        "Clique em <code>Create key</code>.",
        "Copie a chave que lhe é dada e cole-a no campo da chave de API do TypeTarget.",
      ],
      groq: "<b>Groq.</b> Aceda a <link>console.groq.com/keys</link> e clique no botão <code>Create API Key</code>.",
      groqSteps: [
        "Dê-lhe o Display Name que quiser.",
        "Copie a sua Secret Key e cole-a no campo da chave de API da Groq no TypeTarget.",
      ],
      aiStudioImage:
        'O canto superior direito da página de chaves de API do Google AI Studio, com uma ligação "API quickstart", um botão "Create API key" e, por baixo, um menu pendente "Filter by All projects".',
      groqImage:
        'O botão "Create API Key" do GroqCloud, com um sinal de mais antes do texto.',
    },
    slow: {
      q: "Porque é que a minha transcrição está lenta?",
      a: "Muito provavelmente está a usar o Whisper local, que funciona dentro do navegador, pelo que a velocidade depende do seu hardware. Num computador mais antigo ou menos potente pode ficar atrasado em relação ao áudio. Para uma transcrição rápida em direto em qualquer computador, mude para uma chave gratuita da Gemini ou da Groq.",
    },
    wrongLanguage: {
      q: "Está a transcrever no idioma errado.",
      a: "Experimente outro modelo em <code>{model}</code>: os modelos maiores distinguem melhor os idiomas. Se souber que idioma está a ser falado, escolha-o em <code>{spokenLanguage}</code> em vez de o deixar em <code>{auto}</code>. Também pode aumentar a <code>{chunkLength}</code>, o que dá ao modelo mais fala para reconhecer o idioma.",
    },
    audio: {
      q: "Para onde vai o meu áudio?",
      a: "Com o Whisper local, para lado nenhum: é transcrito dentro do seu navegador. Com a Gemini ou a Groq, vai apenas para esse fornecedor, com a sua própria chave. Nunca vai para o TypeTarget.",
    },
    languages: {
      q: "Que idiomas são suportados?",
      transcription:
        "<b>Transcrição.</b> Os modelos Whisper da OpenAI, locais ou na Groq, suportam <whisper>99 idiomas</whisper>. O Gemini Transcribe tem a sua própria <gemini>lista de idiomas suportados</gemini>.",
      interface:
        "<b>Interface.</b> A interface do TypeTarget está disponível em alemão, árabe, bengali, checo, chinês (simplificado e tradicional), coreano, espanhol, filipino, francês, hindi, indonésio, inglês, italiano, japonês, marata, polaco, português (Brasil e Portugal), russo, tailandês, télugo, turco, ucraniano, urdu e vietnamita, de acordo com o idioma do seu sistema e do seu navegador.",
    },
    browsers: {
      q: "Em que navegadores funciona?",
      a: "Chrome 116 ou mais recente, instalado a partir da Chrome Web Store. Os navegadores baseados no Chromium, como o Edge e o Brave, podem adicioná-lo a partir da mesma página.",
    },
    unpacked: {
      q: "Posso carregá-lo sem a Chrome Web Store?",
      a: "Sim. <download>Transfira o zip</download> e extraia-o para obter uma pasta chamada <code>typetarget</code>. Abra <code>chrome://extensions</code> colando o endereço na barra de endereço, porque as páginas web não podem criar ligações para ele (no Edge é <code>edge://extensions</code>, no Brave <code>brave://extensions</code>). Ative o Modo de programador no canto superior direito, clique em <code>Carregar expandida</code> e selecione a pasta extraída. Para atualizar mais tarde, transfira o novo zip, substitua a pasta e clique na seta de recarregar no cartão do TypeTarget.",
    },
  },
  footer: {
    text: "TypeTarget {version}. Gratuito e de código aberto ao abrigo da licença MIT; <source>código-fonte no GitHub</source>. Transcrição pelo Whisper (whisper.cpp, no seu navegador), Google Gemini ou Groq, com a sua própria chave. O TypeTarget não é afiliado à Google nem à Groq. Sem servidores, sem contas, sem estatísticas, incluindo nesta página. <privacy>Política de privacidade</privacy>. <issues>Comunicar um problema</issues>. <contact>Contacto</contact>.",
  },
}
