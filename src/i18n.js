const LANG_KEY = 'bocchisad-bio-lang'

export function loadLang() {
  try {
    const stored = localStorage.getItem(LANG_KEY)
    if (stored === 'en' || stored === 'ru') return stored
  } catch {
    /* ignore */
  }
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang)
  } catch {
    /* ignore */
  }
}

export const links = {
  github: 'https://github.com/bocchisad',
  telegram: 'https://t.me/gothscum',
  email: 'mailto:vasylia4@gmail.com',
  cvDesk: 'https://github.com/bocchisad/cv-desk',
  bin2img: 'https://github.com/bocchisad/bin2img-classifier',
  handDraw: 'https://github.com/bocchisad/hand-draw',
  handDrawDemo: 'https://bocchisad.github.io/hand-draw/',
  cipher: 'https://github.com/bocchisad/Cipher',
  minelink: 'https://github.com/bocchisad/Minelink',
  videoDownloader: 'https://github.com/bocchisad/video-downloader',
  steamPrice: 'https://github.com/bocchisad/steam-price-parcer-api',
}

export const copy = {
  en: {
    htmlLang: 'en',
    nav: { work: 'Work', stack: 'Stack', contact: 'Contact' },
    hero: {
      kicker: 'ML / CV · Software',
      title: 'bocchisad',
      lead:
        'Student building real-time computer vision, binary visualization tooling, and small full-stack products.',
      ctaGithub: 'GitHub',
      ctaTelegram: 'Telegram',
      ctaEmail: 'Email',
    },
    about: {
      index: '01',
      title: 'What I work on',
      body:
        'Real-time CV with MediaPipe and OpenCV, Python services with FastAPI, and networking toys in Go and WebRTC. Participant in the Main Stage of the international youth AI Challenge.',
    },
    flagships: [
      {
        id: 'cv-desk',
        index: '02',
        kicker: 'Flagship · macOS',
        title: 'cv-desk',
        lead:
          'Control your Mac desk with hand gestures — a menu-bar app that maps a small deliberate gesture set to play/pause, volume, Spaces, Mission Control, App Exposé, and screenshots.',
        problemTitle: 'Why it exists',
        problem:
          'Keyboard shortcuts and trackpad gymnastics get in the way when your hands are already in the air for demos or desk work. cv-desk turns a webcam + MediaPipe Hands into per-app desk control without fighting the OS.',
        pointsTitle: 'What it covers',
        points: [
          'MediaPipe Hands pipeline tuned for stable, intentional gestures',
          'System actions: media, volume, Spaces, Mission Control, screenshots',
          'Per-app profiles so the same gesture can mean different things',
          'macOS 13+ menu-bar presence — always available, never in the way',
        ],
        stack: ['Python', 'MediaPipe', 'OpenCV', 'macOS'],
        href: links.cvDesk,
        hrefLabel: 'github.com/bocchisad/cv-desk',
      },
      {
        id: 'bin2img',
        index: '03',
        kicker: 'Flagship · ML',
        title: 'bin2img-classifier',
        lead:
          'Turns executables into grayscale byteplots and thermal entropy heatmaps, extracts GLCM/LBP + section features, and classifies malware families with CatBoost — FastAPI UI, risk score, history, Docker & CI.',
        problemTitle: 'Why it exists',
        problem:
          'Raw binaries are hard to reason about. Visualizing byte layout and entropy makes packing, encryption, and family structure readable — then classical + gradient-boosted features turn that signal into a family label and risk score.',
        pointsTitle: 'What it covers',
        points: [
          'Byteplot and thermal entropy heatmap generation',
          'Texture features (GLCM / LBP) plus PE section stats',
          'CatBoost family classification with risk rules',
          'FastAPI UI with history, Docker image, and CI',
        ],
        stack: ['Python', 'OpenCV', 'CatBoost', 'FastAPI', 'Docker'],
        href: links.bin2img,
        hrefLabel: 'github.com/bocchisad/bin2img-classifier',
      },
    ],
    also: {
      index: '04',
      title: 'Also building',
      items: [
        {
          name: 'hand-draw',
          text: 'Air-draw with webcam: MediaPipe Hands + Face, brushes, dual-hand palette, voice, symmetry.',
          href: links.handDraw,
          extra: { label: 'Live demo', href: links.handDrawDemo },
        },
        {
          name: 'Cipher',
          text: 'Serverless P2P messenger: WebRTC, AES-GCM E2EE, calls, encrypted history export.',
          href: links.cipher,
        },
        {
          name: 'Minelink',
          text: 'Minecraft LAN tunnel over the internet — Go + WebRTC, WS relay fallback.',
          href: links.minelink,
        },
        {
          name: 'video-downloader',
          text: 'Web video downloader — Express + yt-dlp backend, static frontend.',
          href: links.videoDownloader,
        },
        {
          name: 'steam-price-parcer-api',
          text: 'FastAPI Steam price tracker / history API.',
          href: links.steamPrice,
        },
      ],
    },
    stack: {
      index: '05',
      title: 'Stack',
      lead: 'Tools I reach for across CV, ML, and small products.',
      items: [
        ['Python', 'Scripts, CV, training, APIs'],
        ['Go', 'Networking, tunnels, services'],
        ['JavaScript', 'Frontends and Node tooling'],
        ['MediaPipe', 'Hands / Face real-time tracking'],
        ['OpenCV', 'Vision pipelines and heatmaps'],
        ['CatBoost', 'Tabular / feature classification'],
        ['scikit-learn', 'Classical ML baselines'],
        ['NumPy', 'Arrays and feature tensors'],
        ['FastAPI', 'Python HTTP services and UIs'],
        ['WebRTC', 'P2P media and data channels'],
        ['Node.js', 'Express backends'],
        ['Docker', 'Reproducible runs and deploy'],
      ],
    },
    contact: {
      index: '06',
      title: 'Contact',
      lead: 'GitHub for code, Telegram for chat, email for longer notes.',
      labels: {
        github: 'github.com/bocchisad',
        telegram: 't.me/gothscum',
        email: 'vasylia4@gmail.com',
      },
    },
  },
  ru: {
    htmlLang: 'ru',
    nav: { work: 'Работы', stack: 'Стек', contact: 'Связь' },
    hero: {
      kicker: 'ML / CV · Software',
      title: 'bocchisad',
      lead:
        'Студент: real-time компьютерное зрение, визуализация бинарников и небольшие full-stack продукты.',
      ctaGithub: 'GitHub',
      ctaTelegram: 'Telegram',
      ctaEmail: 'Email',
    },
    about: {
      index: '01',
      title: 'Чем занимаюсь',
      body:
        'Real-time CV на MediaPipe и OpenCV, Python-сервисы на FastAPI, сетевые штуки на Go и WebRTC. Участник Main Stage международного молодёжного AI Challenge.',
    },
    flagships: [
      {
        id: 'cv-desk',
        index: '02',
        kicker: 'Флагман · macOS',
        title: 'cv-desk',
        lead:
          'Управление Mac жестами рук — menu-bar приложение: play/pause, громкость, Spaces, Mission Control, App Exposé и скриншоты из небольшого набора намеренных жестов.',
        problemTitle: 'Зачем',
        problem:
          'Хоткеи и трекпад мешают, когда руки уже в воздухе на демо или за столом. cv-desk превращает веб-камеру и MediaPipe Hands в desk-control с профилями по приложениям.',
        pointsTitle: 'Что закрывает',
        points: [
          'Пайплайн MediaPipe Hands под стабильные, осознанные жесты',
          'Системные действия: медиа, громкость, Spaces, Mission Control, скриншоты',
          'Профили на приложение — один жест, разный смысл',
          'macOS 13+: иконка в menu bar, всегда под рукой',
        ],
        stack: ['Python', 'MediaPipe', 'OpenCV', 'macOS'],
        href: links.cvDesk,
        hrefLabel: 'github.com/bocchisad/cv-desk',
      },
      {
        id: 'bin2img',
        index: '03',
        kicker: 'Флагман · ML',
        title: 'bin2img-classifier',
        lead:
          'Исполняемые файлы → grayscale byteplot и thermal entropy heatmap; GLCM/LBP и section-фичи; классификация семейств malware через CatBoost — FastAPI UI, risk score, история, Docker и CI.',
        problemTitle: 'Зачем',
        problem:
          'Сырой бинарник сложно читать. Визуализация байтовой раскладки и энтропии делает packing и структуру семейства заметными — дальше фичи и CatBoost дают метку семейства и risk score.',
        pointsTitle: 'Что закрывает',
        points: [
          'Генерация byteplot и thermal entropy heatmap',
          'Текстурные фичи (GLCM / LBP) и статистика PE-секций',
          'Классификация семейств CatBoost + правила риска',
          'FastAPI UI, история, Docker-образ и CI',
        ],
        stack: ['Python', 'OpenCV', 'CatBoost', 'FastAPI', 'Docker'],
        href: links.bin2img,
        hrefLabel: 'github.com/bocchisad/bin2img-classifier',
      },
    ],
    also: {
      index: '04',
      title: 'Ещё',
      items: [
        {
          name: 'hand-draw',
          text: 'Рисование в воздухе с веб-камеры: MediaPipe Hands + Face, кисти, палитра двумя руками, голос, симметрия.',
          href: links.handDraw,
          extra: { label: 'Демо', href: links.handDrawDemo },
        },
        {
          name: 'Cipher',
          text: 'Serverless P2P-мессенджер: WebRTC, AES-GCM E2EE, звонки, экспорт зашифрованной истории.',
          href: links.cipher,
        },
        {
          name: 'Minelink',
          text: 'Туннель Minecraft LAN через интернет — Go + WebRTC, fallback на WS relay.',
          href: links.minelink,
        },
        {
          name: 'video-downloader',
          text: 'Веб-загрузчик видео — Express + yt-dlp, статичный фронт.',
          href: links.videoDownloader,
        },
        {
          name: 'steam-price-parcer-api',
          text: 'FastAPI-трекер цен Steam / история.',
          href: links.steamPrice,
        },
      ],
    },
    stack: {
      index: '05',
      title: 'Стек',
      lead: 'Инструменты для CV, ML и небольших продуктов.',
      items: [
        ['Python', 'Скрипты, CV, обучение, API'],
        ['Go', 'Сеть, туннели, сервисы'],
        ['JavaScript', 'Фронт и Node-утилиты'],
        ['MediaPipe', 'Hands / Face в реальном времени'],
        ['OpenCV', 'Vision-пайплайны и теплокарты'],
        ['CatBoost', 'Классификация по фичам'],
        ['scikit-learn', 'Классический ML'],
        ['NumPy', 'Массивы и тензоры фич'],
        ['FastAPI', 'HTTP-сервисы и UI на Python'],
        ['WebRTC', 'P2P медиа и data channels'],
        ['Node.js', 'Express-бэкенды'],
        ['Docker', 'Воспроизводимые запуски'],
      ],
    },
    contact: {
      index: '06',
      title: 'Связь',
      lead: 'GitHub — код, Telegram — быстро, email — длиннее.',
      labels: {
        github: 'github.com/bocchisad',
        telegram: 't.me/gothscum',
        email: 'vasylia4@gmail.com',
      },
    },
  },
}
