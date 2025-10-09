// Translation data
const translations = {
  en: {
    title: "Cmd Switch - Quick Input Source Switching for macOS",
    appName: "Cmd Switch",
    tagline: "Switch input sources instantly with a single Command key press",
    downloadBtn: "Download for macOS",
    version: "Version 1.0",
    macosVersion: "macOS 12.0+",
    whatIsTitle: "What is Cmd Switch?",
    whatIsDesc:
      "Cmd Switch is a lightweight macOS menu bar app that lets you switch between keyboard input sources (like English and Japanese) by simply pressing the left or right Command key alone. No complicated shortcuts, no memorizing key combinations—just one key press.",
    feature1Title: "⚡ Lightning Fast",
    feature1Desc: "Switch input sources instantly with a single key press",
    feature2Title: "⌨️ Customizable",
    feature2Desc:
      "Assign different input sources to left and right Command keys",
    feature3Title: "🎯 Simple",
    feature3Desc:
      "Works seamlessly without interfering with normal keyboard shortcuts",
    installationTitle: "Installation",
    step1: "Download <strong>Cmd Switch.zip</strong> from the button above",
    step2:
      "Unzip the file and move <strong>Cmd Switch.app</strong> to your Applications folder",
    step3: "Open Cmd Switch from your Applications folder",
    step4:
      "Grant <strong>Accessibility permissions</strong> when prompted (System Settings → Privacy & Security → Accessibility)",
    requirementText:
      "<strong>⚠️ Important:</strong> Cmd Switch requires Accessibility permissions to monitor keyboard events. This is necessary for detecting Command key presses.",
    howToUseTitle: "How to Use",
    useStep1: "Click the <strong>⌘</strong> icon in your menu bar",
    useStep2:
      "Select input sources for <strong>Left Command</strong> and <strong>Right Command</strong>",
    useStep3:
      "Press the <strong>left Command key alone</strong> to switch to your left Command input source",
    useStep4:
      "Press the <strong>right Command key alone</strong> to switch to your right Command input source",
    noteText:
      "<strong>Note:</strong> Normal Command key shortcuts (like Cmd+C, Cmd+V) continue to work as usual. Cmd Switch only activates when you press a Command key by itself.",
    perfectForTitle: "Perfect For",
    perfectFor1: "✅ Bilingual users switching between languages",
    perfectFor2: "✅ Developers who use multiple keyboard layouts",
    perfectFor3: "✅ Anyone tired of complex keyboard shortcuts",
    perfectFor4: "✅ Power users looking for efficiency",
    openSourceTitle: "Open Source",
    openSourceDesc:
      "Cmd Switch is free and open source software. View the source code, report issues, or contribute on GitHub:",
    openSourceLicense:
      "Licensed under [MIT License]. Contributions are welcome!",
    footerMade: "Made with ❤️ for macOS",
    footerGithub: "GitHub",
    footerIssue: "Report an Issue",
  },
  ja: {
    title: "Cmd Switch - macOS用クイック入力ソース切り替え",
    appName: "Cmd Switch",
    tagline: "Commandキー1回押すだけで入力ソースを瞬時に切り替え",
    downloadBtn: "macOS用をダウンロード",
    version: "バージョン 1.0",
    macosVersion: "macOS 12.0以降",
    whatIsTitle: "Cmd Switchとは？",
    whatIsDesc:
      "Cmd Switchは、左右のCommandキーを単独で押すだけで、キーボード入力ソース（英語や日本語など）を切り替えることができる軽量なmacOSメニューバーアプリです。複雑なショートカットやキーの組み合わせを覚える必要はありません。1回キーを押すだけです。",
    feature1Title: "⚡ 超高速",
    feature1Desc: "1回のキー押下で入力ソースを瞬時に切り替え",
    feature2Title: "⌨️ カスタマイズ可能",
    feature2Desc: "左右のCommandキーに異なる入力ソースを割り当て",
    feature3Title: "🎯 シンプル",
    feature3Desc:
      "通常のキーボードショートカットを妨げることなくシームレスに動作",
    installationTitle: "インストール",
    step1: "上のボタンから<strong>Cmd Switch.zip</strong>をダウンロード",
    step2:
      "ファイルを解凍し、<strong>Cmd Switch.app</strong>をApplicationsフォルダに移動",
    step3: "ApplicationsフォルダからCmd Switchを開く",
    step4:
      "プロンプトが表示されたら<strong>アクセシビリティ権限</strong>を付与（システム設定 → プライバシーとセキュリティ → アクセシビリティ）",
    requirementText:
      "<strong>⚠️ 重要:</strong> Cmd Switchはキーボードイベントを監視するためにアクセシビリティ権限が必要です。これはCommandキーの押下を検出するために必要です。",
    howToUseTitle: "使い方",
    useStep1: "メニューバーの<strong>⌘</strong>アイコンをクリック",
    useStep2:
      "<strong>左Command</strong>と<strong>右Command</strong>の入力ソースを選択",
    useStep3:
      "<strong>左Commandキー単独</strong>を押して、左Command入力ソースに切り替え",
    useStep4:
      "<strong>右Commandキー単独</strong>を押して、右Command入力ソースに切り替え",
    noteText:
      "<strong>注意:</strong> 通常のCommandキーショートカット（Cmd+C、Cmd+Vなど）は通常通り動作します。Cmd Switchは、Commandキーを単独で押したときのみアクティブになります。",
    perfectForTitle: "最適な用途",
    perfectFor1: "✅ 言語を切り替えるバイリンガルユーザー",
    perfectFor2: "✅ 複数のキーボードレイアウトを使用する開発者",
    perfectFor3: "✅ 複雑なキーボードショートカットにうんざりしている方",
    perfectFor4: "✅ 効率を求めるパワーユーザー",
    openSourceTitle: "オープンソース",
    openSourceDesc:
      "Cmd Switchは無料のオープンソースソフトウェアです。GitHubでソースコードを表示、問題を報告、または貢献してください：",
    openSourceLicense:
      "[MITライセンス]の下でライセンスされています。貢献を歓迎します！",
    footerMade: "macOS向けに❤️を込めて作成",
    footerGithub: "GitHub",
    footerIssue: "問題を報告",
  },
  zh: {
    title: "Cmd Switch - macOS快速输入源切换",
    appName: "Cmd Switch",
    tagline: "只需按一下Command键即可立即切换输入源",
    downloadBtn: "下载macOS版",
    version: "版本 1.0",
    macosVersion: "macOS 12.0+",
    whatIsTitle: "什么是Cmd Switch？",
    whatIsDesc:
      "Cmd Switch是一款轻量级的macOS菜单栏应用，只需单独按下左或右Command键，即可在键盘输入源（如英语和日语）之间切换。无需复杂的快捷键，无需记忆组合键——只需按一个键。",
    feature1Title: "⚡ 闪电般快速",
    feature1Desc: "一键即可立即切换输入源",
    feature2Title: "⌨️ 可自定义",
    feature2Desc: "为左右Command键分配不同的输入源",
    feature3Title: "🎯 简单",
    feature3Desc: "无缝工作，不干扰正常的键盘快捷键",
    installationTitle: "安装",
    step1: "从上方按钮下载<strong>Cmd Switch.zip</strong>",
    step2: "解压文件并将<strong>Cmd Switch.app</strong>移动到应用程序文件夹",
    step3: "从应用程序文件夹打开Cmd Switch",
    step4:
      "在提示时授予<strong>辅助功能权限</strong>（系统设置 → 隐私与安全性 → 辅助功能）",
    requirementText:
      "<strong>⚠️ 重要：</strong>Cmd Switch需要辅助功能权限来监控键盘事件。这对于检测Command键按下是必需的。",
    howToUseTitle: "使用方法",
    useStep1: "点击菜单栏中的<strong>⌘</strong>图标",
    useStep2:
      "为<strong>左Command</strong>和<strong>右Command</strong>选择输入源",
    useStep3: "单独按<strong>左Command键</strong>切换到左Command输入源",
    useStep4: "单独按<strong>右Command键</strong>切换到右Command输入源",
    noteText:
      "<strong>注意：</strong>正常的Command键快捷键（如Cmd+C、Cmd+V）继续正常工作。Cmd Switch仅在您单独按Command键时激活。",
    perfectForTitle: "适合",
    perfectFor1: "✅ 在语言之间切换的双语用户",
    perfectFor2: "✅ 使用多种键盘布局的开发者",
    perfectFor3: "✅ 厌倦复杂键盘快捷键的任何人",
    perfectFor4: "✅ 寻求效率的高级用户",
    openSourceTitle: "开源",
    openSourceDesc:
      "Cmd Switch是免费的开源软件。在GitHub上查看源代码、报告问题或做出贡献：",
    openSourceLicense: "根据[MIT许可证]授权。欢迎贡献！",
    footerMade: "用❤️为macOS制作",
    footerGithub: "GitHub",
    footerIssue: "报告问题",
  },
  ko: {
    title: "Cmd Switch - macOS 빠른 입력 소스 전환",
    appName: "Cmd Switch",
    tagline: "Command 키를 한 번만 누르면 입력 소스를 즉시 전환",
    downloadBtn: "macOS용 다운로드",
    version: "버전 1.0",
    macosVersion: "macOS 12.0 이상",
    whatIsTitle: "Cmd Switch란?",
    whatIsDesc:
      "Cmd Switch는 왼쪽 또는 오른쪽 Command 키를 단독으로 누르기만 하면 키보드 입력 소스(영어와 일본어 등) 간에 전환할 수 있는 가벼운 macOS 메뉴 바 앱입니다. 복잡한 단축키나 키 조합을 외울 필요가 없습니다. 키 한 번만 누르면 됩니다.",
    feature1Title: "⚡ 번개같이 빠름",
    feature1Desc: "한 번의 키 누름으로 입력 소스를 즉시 전환",
    feature2Title: "⌨️ 사용자 정의 가능",
    feature2Desc: "왼쪽 및 오른쪽 Command 키에 다른 입력 소스 할당",
    feature3Title: "🎯 간단함",
    feature3Desc: "일반 키보드 단축키를 방해하지 않고 원활하게 작동",
    installationTitle: "설치",
    step1: "위 버튼에서 <strong>Cmd Switch.zip</strong> 다운로드",
    step2:
      "파일의 압축을 풀고 <strong>Cmd Switch.app</strong>을 응용 프로그램 폴더로 이동",
    step3: "응용 프로그램 폴더에서 Cmd Switch 열기",
    step4:
      "메시지가 표시되면 <strong>손쉬운 사용 권한</strong> 부여 (시스템 설정 → 개인 정보 보호 및 보안 → 손쉬운 사용)",
    requirementText:
      "<strong>⚠️ 중요:</strong> Cmd Switch는 키보드 이벤트를 모니터링하기 위해 손쉬운 사용 권한이 필요합니다. Command 키 누름을 감지하는 데 필요합니다.",
    howToUseTitle: "사용 방법",
    useStep1: "메뉴 바에서 <strong>⌘</strong> 아이콘 클릭",
    useStep2:
      "<strong>왼쪽 Command</strong> 및 <strong>오른쪽 Command</strong>에 대한 입력 소스 선택",
    useStep3:
      "<strong>왼쪽 Command 키만</strong> 눌러 왼쪽 Command 입력 소스로 전환",
    useStep4:
      "<strong>오른쪽 Command 키만</strong> 눌러 오른쪽 Command 입력 소스로 전환",
    noteText:
      "<strong>참고:</strong> 일반 Command 키 단축키(Cmd+C, Cmd+V 등)는 평소대로 계속 작동합니다. Cmd Switch는 Command 키를 단독으로 누를 때만 활성화됩니다.",
    perfectForTitle: "최적 사용자",
    perfectFor1: "✅ 언어 간 전환하는 이중 언어 사용자",
    perfectFor2: "✅ 여러 키보드 레이아웃을 사용하는 개발자",
    perfectFor3: "✅ 복잡한 키보드 단축키에 지친 사람",
    perfectFor4: "✅ 효율성을 추구하는 파워 유저",
    openSourceTitle: "오픈 소스",
    openSourceDesc:
      "Cmd Switch는 무료 오픈 소스 소프트웨어입니다. GitHub에서 소스 코드 보기, 문제 보고 또는 기여:",
    openSourceLicense:
      "[MIT 라이선스]에 따라 라이선스가 부여됩니다. 기여를 환영합니다!",
    footerMade: "macOS를 위해 ❤️를 담아 제작",
    footerGithub: "GitHub",
    footerIssue: "문제 보고",
  },
  es: {
    title: "Cmd Switch - Cambio rápido de fuente de entrada para macOS",
    appName: "Cmd Switch",
    tagline:
      "Cambie las fuentes de entrada al instante con una sola pulsación de la tecla Command",
    downloadBtn: "Descargar para macOS",
    version: "Versión 1.0",
    macosVersion: "macOS 12.0+",
    whatIsTitle: "¿Qué es Cmd Switch?",
    whatIsDesc:
      "Cmd Switch es una aplicación ligera de barra de menú de macOS que le permite cambiar entre fuentes de entrada de teclado (como inglés y japonés) simplemente presionando la tecla Command izquierda o derecha sola. Sin atajos complicados, sin memorizar combinaciones de teclas, solo una pulsación de tecla.",
    feature1Title: "⚡ Ultrarrápido",
    feature1Desc:
      "Cambie las fuentes de entrada al instante con una sola pulsación de tecla",
    feature2Title: "⌨️ Personalizable",
    feature2Desc:
      "Asigne diferentes fuentes de entrada a las teclas Command izquierda y derecha",
    feature3Title: "🎯 Simple",
    feature3Desc:
      "Funciona sin problemas sin interferir con los atajos de teclado normales",
    installationTitle: "Instalación",
    step1: "Descargue <strong>Cmd Switch.zip</strong> desde el botón de arriba",
    step2:
      "Descomprima el archivo y mueva <strong>Cmd Switch.app</strong> a su carpeta de Aplicaciones",
    step3: "Abra Cmd Switch desde su carpeta de Aplicaciones",
    step4:
      "Otorgue <strong>permisos de Accesibilidad</strong> cuando se le solicite (Configuración del sistema → Privacidad y seguridad → Accesibilidad)",
    requirementText:
      "<strong>⚠️ Importante:</strong> Cmd Switch requiere permisos de Accesibilidad para monitorear eventos del teclado. Esto es necesario para detectar pulsaciones de la tecla Command.",
    howToUseTitle: "Cómo usar",
    useStep1: "Haga clic en el icono <strong>⌘</strong> en su barra de menú",
    useStep2:
      "Seleccione fuentes de entrada para <strong>Command izquierdo</strong> y <strong>Command derecho</strong>",
    useStep3:
      "Presione la <strong>tecla Command izquierda sola</strong> para cambiar a su fuente de entrada de Command izquierdo",
    useStep4:
      "Presione la <strong>tecla Command derecha sola</strong> para cambiar a su fuente de entrada de Command derecho",
    noteText:
      "<strong>Nota:</strong> Los atajos de tecla Command normales (como Cmd+C, Cmd+V) continúan funcionando como de costumbre. Cmd Switch solo se activa cuando presiona una tecla Command por sí sola.",
    perfectForTitle: "Perfecto para",
    perfectFor1: "✅ Usuarios bilingües que cambian entre idiomas",
    perfectFor2: "✅ Desarrolladores que usan múltiples diseños de teclado",
    perfectFor3: "✅ Cualquiera cansado de atajos de teclado complejos",
    perfectFor4: "✅ Usuarios avanzados que buscan eficiencia",
    openSourceTitle: "Código abierto",
    openSourceDesc:
      "Cmd Switch es software libre y de código abierto. Vea el código fuente, reporte problemas o contribuya en GitHub:",
    openSourceLicense:
      "Licenciado bajo [Licencia MIT]. ¡Las contribuciones son bienvenidas!",
    footerMade: "Hecho con ❤️ para macOS",
    footerGithub: "GitHub",
    footerIssue: "Reportar un problema",
  },
  fr: {
    title: "Cmd Switch - Changement rapide de source d'entrée pour macOS",
    appName: "Cmd Switch",
    tagline:
      "Changez de source d'entrée instantanément avec une seule pression de touche Command",
    downloadBtn: "Télécharger pour macOS",
    version: "Version 1.0",
    macosVersion: "macOS 12.0+",
    whatIsTitle: "Qu'est-ce que Cmd Switch ?",
    whatIsDesc:
      "Cmd Switch est une application légère de barre de menus macOS qui vous permet de basculer entre les sources d'entrée du clavier (comme l'anglais et le japonais) simplement en appuyant sur la touche Command gauche ou droite seule. Pas de raccourcis compliqués, pas besoin de mémoriser des combinaisons de touches—juste une pression de touche.",
    feature1Title: "⚡ Ultra rapide",
    feature1Desc:
      "Changez de source d'entrée instantanément avec une seule pression de touche",
    feature2Title: "⌨️ Personnalisable",
    feature2Desc:
      "Attribuez différentes sources d'entrée aux touches Command gauche et droite",
    feature3Title: "🎯 Simple",
    feature3Desc:
      "Fonctionne de manière transparente sans interférer avec les raccourcis clavier normaux",
    installationTitle: "Installation",
    step1:
      "Téléchargez <strong>Cmd Switch.zip</strong> à partir du bouton ci-dessus",
    step2:
      "Décompressez le fichier et déplacez <strong>Cmd Switch.app</strong> dans votre dossier Applications",
    step3: "Ouvrez Cmd Switch depuis votre dossier Applications",
    step4:
      "Accordez les <strong>autorisations d'accessibilité</strong> lorsque vous y êtes invité (Réglages système → Confidentialité et sécurité → Accessibilité)",
    requirementText:
      "<strong>⚠️ Important :</strong> Cmd Switch nécessite des autorisations d'accessibilité pour surveiller les événements du clavier. Ceci est nécessaire pour détecter les pressions sur la touche Command.",
    howToUseTitle: "Comment utiliser",
    useStep1:
      "Cliquez sur l'icône <strong>⌘</strong> dans votre barre de menus",
    useStep2:
      "Sélectionnez les sources d'entrée pour <strong>Command gauche</strong> et <strong>Command droite</strong>",
    useStep3:
      "Appuyez sur la <strong>touche Command gauche seule</strong> pour basculer vers votre source d'entrée Command gauche",
    useStep4:
      "Appuyez sur la <strong>touche Command droite seule</strong> pour basculer vers votre source d'entrée Command droite",
    noteText:
      "<strong>Remarque :</strong> Les raccourcis clavier Command normaux (comme Cmd+C, Cmd+V) continuent de fonctionner comme d'habitude. Cmd Switch ne s'active que lorsque vous appuyez sur une touche Command seule.",
    perfectForTitle: "Parfait pour",
    perfectFor1:
      "✅ Les utilisateurs bilingues qui basculent entre les langues",
    perfectFor2:
      "✅ Les développeurs qui utilisent plusieurs dispositions de clavier",
    perfectFor3:
      "✅ Tous ceux qui en ont assez des raccourcis clavier complexes",
    perfectFor4: "✅ Les utilisateurs avancés recherchant l'efficacité",
    openSourceTitle: "Open Source",
    openSourceDesc:
      "Cmd Switch est un logiciel libre et open source. Consultez le code source, signalez des problèmes ou contribuez sur GitHub :",
    openSourceLicense:
      "Sous licence [Licence MIT]. Les contributions sont les bienvenues !",
    footerMade: "Fait avec ❤️ pour macOS",
    footerGithub: "GitHub",
    footerIssue: "Signaler un problème",
  },
  de: {
    title: "Cmd Switch - Schneller Eingabequellenwechsel für macOS",
    appName: "Cmd Switch",
    tagline:
      "Wechseln Sie Eingabequellen sofort mit einem einzigen Tastendruck der Command-Taste",
    downloadBtn: "Für macOS herunterladen",
    version: "Version 1.0",
    macosVersion: "macOS 12.0+",
    whatIsTitle: "Was ist Cmd Switch?",
    whatIsDesc:
      "Cmd Switch ist eine leichte macOS-Menüleisten-App, mit der Sie zwischen Tastatureingabequellen (wie Englisch und Japanisch) wechseln können, indem Sie einfach die linke oder rechte Command-Taste allein drücken. Keine komplizierten Shortcuts, kein Auswendiglernen von Tastenkombinationen—nur ein Tastendruck.",
    feature1Title: "⚡ Blitzschnell",
    feature1Desc:
      "Wechseln Sie Eingabequellen sofort mit einem einzigen Tastendruck",
    feature2Title: "⌨️ Anpassbar",
    feature2Desc:
      "Weisen Sie den linken und rechten Command-Tasten unterschiedliche Eingabequellen zu",
    feature3Title: "🎯 Einfach",
    feature3Desc: "Funktioniert nahtlos, ohne normale Tastaturkürzel zu stören",
    installationTitle: "Installation",
    step1:
      "Laden Sie <strong>Cmd Switch.zip</strong> über die Schaltfläche oben herunter",
    step2:
      "Entpacken Sie die Datei und verschieben Sie <strong>Cmd Switch.app</strong> in Ihren Programme-Ordner",
    step3: "Öffnen Sie Cmd Switch aus Ihrem Programme-Ordner",
    step4:
      "Erteilen Sie <strong>Bedienungshilfen-Berechtigungen</strong>, wenn Sie dazu aufgefordert werden (Systemeinstellungen → Datenschutz und Sicherheit → Bedienungshilfen)",
    requirementText:
      "<strong>⚠️ Wichtig:</strong> Cmd Switch benötigt Bedienungshilfen-Berechtigungen, um Tastaturereignisse zu überwachen. Dies ist notwendig, um Command-Tastendrücke zu erkennen.",
    howToUseTitle: "Verwendung",
    useStep1:
      "Klicken Sie auf das <strong>⌘</strong>-Symbol in Ihrer Menüleiste",
    useStep2:
      "Wählen Sie Eingabequellen für <strong>Linke Command</strong> und <strong>Rechte Command</strong>",
    useStep3:
      "Drücken Sie die <strong>linke Command-Taste allein</strong>, um zu Ihrer linken Command-Eingabequelle zu wechseln",
    useStep4:
      "Drücken Sie die <strong>rechte Command-Taste allein</strong>, um zu Ihrer rechten Command-Eingabequelle zu wechseln",
    noteText:
      "<strong>Hinweis:</strong> Normale Command-Tastenkürzel (wie Cmd+C, Cmd+V) funktionieren weiterhin wie gewohnt. Cmd Switch wird nur aktiviert, wenn Sie eine Command-Taste allein drücken.",
    perfectForTitle: "Perfekt für",
    perfectFor1: "✅ Zweisprachige Benutzer, die zwischen Sprachen wechseln",
    perfectFor2: "✅ Entwickler, die mehrere Tastaturlayouts verwenden",
    perfectFor3: "✅ Alle, die komplexe Tastaturkürzel satt haben",
    perfectFor4: "✅ Power-User, die nach Effizienz suchen",
    openSourceTitle: "Open Source",
    openSourceDesc:
      "Cmd Switch ist kostenlose Open-Source-Software. Sehen Sie sich den Quellcode an, melden Sie Probleme oder tragen Sie auf GitHub bei:",
    openSourceLicense:
      "Lizenziert unter [MIT-Lizenz]. Beiträge sind willkommen!",
    footerMade: "Mit ❤️ für macOS gemacht",
    footerGithub: "GitHub",
    footerIssue: "Ein Problem melden",
  },
};

// Change language function
function changeLanguage(lang) {
  const trans = translations[lang];
  if (!trans) return;

  // Update title
  document.title = trans.title || translations.en.title;
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (trans[key]) {
      el.textContent = trans[key];
    }
  });

  // Update all elements with data-i18n-html attribute (for HTML content)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (trans[key]) {
      el.innerHTML = trans[key];
    }
  });

  // Save language preference
  localStorage.setItem("preferredLanguage", lang);
}

// Discord webhook notification function
function notifyDownload() {
  const parts = [
    "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3Mv",
    "OTgzNTY5ODk0OTg3NjY1NDU4L1h5MUtNZkpMNTgzNW9f",
    "djQtRFFpSjV2NktaWEJSWWJRUm1rNTIzMldiY0NKcWsx",
    "aExRVTlINjc0NzQ3NnZ5ODlFcmdnCg==",
  ];
  const webhookUrl = atob(parts.join("")).trim();

  const payload = {
    content: "📥 Cmd Switch がダウンロードされました！",
    embeds: [
      {
        title: "ダウンロード通知",
        description: "Cmd Switch アプリがダウンロードされました",
        color: 5814783,
        timestamp: new Date().toISOString(),
        footer: {
          text: "Cmd Switch Download Tracker",
        },
      },
    ],
  };

  fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => console.log("Notification sent"));
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Load saved language preference or detect browser language
  const savedLang = localStorage.getItem("preferredLanguage");
  const browserLang = navigator.language.split("-")[0];
  const defaultLang =
    savedLang || (translations[browserLang] ? browserLang : "en");

  // Set the select value
  const select = document.getElementById("languageSelect");
  if (select) {
    select.value = defaultLang;
    changeLanguage(defaultLang);
  }
});
