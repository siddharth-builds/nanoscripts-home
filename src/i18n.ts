export type Language = 'en' | 'ru' | 'zh';

type Copy = {
	'nav.languageLabel': string;
	'nav.contact': string;
	'theme.toDark': string;
	'theme.toLight': string;
	'hero.eyebrow': string;
	'hero.title': string;
	'hero.description': string;
	'hero.cta': string;
	'hero.note': string;
	'hero.previewLabel': string;
	'hero.runLabel': string;
	'hero.runTitle': string;
	'hero.passed': string;
	'hero.testsPassed': string;
	'hero.testOne': string;
	'hero.testTwo': string;
	'hero.testThree': string;
	'hero.containerLabel': string;
	'proof.label': string;
	'proof.title': string;
	'proof.videoAlt': string;
	'proof.recording': string;
	'proof.caption': string;
	'process.label': string;
	'process.title': string;
	'process.intro': string;
	'process.stepOneTitle': string;
	'process.stepOneBody': string;
	'process.stepTwoTitle': string;
	'process.stepTwoBody': string;
	'process.stepThreeTitle': string;
	'process.stepThreeBody': string;
	'pricing.label': string;
	'pricing.title': string;
	'pricing.intro': string;
	'pricing.checkupTitle': string;
	'pricing.checkupDescription': string;
	'pricing.deliverables': string;
	'pricing.checkupItemOne': string;
	'pricing.checkupItemTwo': string;
	'pricing.checkupItemThree': string;
	'pricing.checkupItemFour': string;
	'pricing.askAbout': string;
	'pricing.managedPlan': string;
	'pricing.guardsTitle': string;
	'pricing.guardsDescription': string;
	'pricing.guardsItemOne': string;
	'pricing.guardsItemTwo': string;
	'pricing.note': string;
	'contact.label': string;
	'contact.title': string;
	'contact.description': string;
	'contact.cta': string;
	'footer.note': string;
	'footer.linksLabel': string;
};

export const translations = {
	en: {
		'nav.languageLabel': 'Choose language',
		'nav.contact': 'Contact',
		'theme.toDark': 'Switch to dark mode',
		'theme.toLight': 'Switch to light mode',
		'hero.eyebrow': 'Automated QA infrastructure',
		'hero.title': 'We build automated test suites for your web application.',
		'hero.description':
			'We write Playwright test scripts, containerize the environment with Docker, and integrate the execution into your GitHub Actions. Catch bugs before deployment without doing manual QA.',
		'hero.cta': 'Request a free visual QA audit',
		'hero.note': 'No obligation. A clear review of your staging workflows.',
		'hero.previewLabel': 'example test run / chromium',
		'hero.runLabel': 'EXAMPLE RUN',
		'hero.runTitle': 'Sample workflow',
		'hero.passed': 'Passed',
		'hero.testsPassed': 'tests passed',
		'hero.testOne': 'sign in with valid credentials',
		'hero.testTwo': 'complete checkout flow',
		'hero.testThree': 'update account settings',
		'hero.containerLabel': 'Executed in a Docker container',
		'proof.label': 'Proof of work',
		'proof.title': 'A test run, from start to finish.',
		'proof.videoAlt': 'Illustration of Playwright UI tests running through Docker',
		'proof.recording': 'UI preview · illustration',
		'proof.caption': 'Standard execution: Playwright UI tests running via Docker.',
		'process.label': 'How it works',
		'process.title': 'A straightforward setup, in three steps.',
		'process.intro': 'From choosing the right workflows to running tests on every pull request.',
		'process.stepOneTitle': 'Visual Audit',
		'process.stepOneBody': 'We review your staging environment and identify testable workflows.',
		'process.stepTwoTitle': 'Script & Containerize',
		'process.stepTwoBody': 'We write the Playwright code and package it in a Docker image.',
		'process.stepThreeTitle': 'CI/CD Integration',
		'process.stepThreeBody': 'We connect the tests to run automatically on your pull requests.',
		'pricing.label': 'Service tiers',
		'pricing.title': 'Choose how you want to maintain it.',
		'pricing.intro': 'Both options include a working test setup and full access to the code.',
		'pricing.checkupTitle': 'Nano CheckUp (Asset Handoff)',
		'pricing.checkupDescription': 'We build the infrastructure and hand it over to your team.',
		'pricing.deliverables': 'Deliverables',
		'pricing.checkupItemOne': '10 core automated tests',
		'pricing.checkupItemTwo': 'Dockerfile',
		'pricing.checkupItemThree': 'GitHub Actions configuration',
		'pricing.checkupItemFour': 'Full repository ownership',
		'pricing.askAbout': 'Ask about this service',
		'pricing.managedPlan': '02 / MAINTAINED',
		'pricing.guardsTitle': 'Nano Guards (Fully Managed)',
		'pricing.guardsDescription': 'We build the infrastructure and maintain it when your UI changes.',
		'pricing.guardsItemOne': 'Everything in CheckUp',
		'pricing.guardsItemTwo': 'We fix broken UI selectors within 24 hours of a test failure.',
		'pricing.note': 'Pricing depends on the application and the workflows to be covered. Contact us for a scoped estimate.',
		'contact.label': 'Get in touch',
		'contact.title': 'Start with a look at your staging environment.',
		'contact.description': 'Send a link and a short note about your application. We’ll review testable workflows and get back to you.',
		'contact.cta': 'Request a free visual QA audit',
		'footer.note': 'Automated QA infrastructure, set up for your team.',
		'footer.linksLabel': 'Social and contact links',
	},
	ru: {
		'nav.languageLabel': 'Выбрать язык',
		'nav.contact': 'Контакты',
		'theme.toDark': 'Включить тёмную тему',
		'theme.toLight': 'Включить светлую тему',
		'hero.eyebrow': 'Инфраструктура автоматизированного тестирования',
		'hero.title': 'Мы создаём автоматизированные тесты для вашего веб-приложения.',
		'hero.description':
			'Мы пишем тесты на Playwright, упаковываем среду в Docker и подключаем запуск к GitHub Actions. Находите ошибки до релиза без ручного тестирования.',
		'hero.cta': 'Запросить бесплатный визуальный аудит QA',
		'hero.note': 'Без обязательств. Разберём проверяемые сценарии в вашей тестовой среде.',
		'hero.previewLabel': 'пример запуска / chromium',
		'hero.runLabel': 'ПРИМЕР ЗАПУСКА',
		'hero.runTitle': 'Пример сценария',
		'hero.passed': 'Пройдено',
		'hero.testsPassed': 'тестов пройдено',
		'hero.testOne': 'вход с верными данными',
		'hero.testTwo': 'оформление заказа',
		'hero.testThree': 'изменение настроек аккаунта',
		'hero.containerLabel': 'Запуск в контейнере Docker',
		'proof.label': 'Пример работы',
		'proof.title': 'Запуск теста от начала до конца.',
		'proof.videoAlt': 'Иллюстрация запуска UI-тестов Playwright в Docker',
		'proof.recording': 'Иллюстрация интерфейса',
		'proof.caption': 'Стандартный запуск: UI-тесты Playwright в Docker.',
		'process.label': 'Как это работает',
		'process.title': 'Настройка в три понятных шага.',
		'process.intro': 'От выбора сценариев до запуска тестов при каждом pull request.',
		'process.stepOneTitle': 'Визуальный аудит',
		'process.stepOneBody': 'Мы проверяем тестовую среду и определяем сценарии для автоматизации.',
		'process.stepTwoTitle': 'Скрипты и контейнер',
		'process.stepTwoBody': 'Мы пишем код Playwright и упаковываем его в образ Docker.',
		'process.stepThreeTitle': 'Интеграция с CI/CD',
		'process.stepThreeBody': 'Мы настраиваем автоматический запуск тестов при создании pull request.',
		'pricing.label': 'Услуги',
		'pricing.title': 'Выберите подход к сопровождению.',
		'pricing.intro': 'В обоих вариантах вы получаете настроенные тесты и полный доступ к коду.',
		'pricing.checkupTitle': 'Nano CheckUp (передача проекта)',
		'pricing.checkupDescription': 'Мы настраиваем инфраструктуру и передаём её вашей команде.',
		'pricing.deliverables': 'Что входит',
		'pricing.checkupItemOne': '10 основных автоматизированных тестов',
		'pricing.checkupItemTwo': 'Dockerfile',
		'pricing.checkupItemThree': 'Конфигурация GitHub Actions',
		'pricing.checkupItemFour': 'Полное владение репозиторием',
		'pricing.askAbout': 'Узнать об услуге',
		'pricing.managedPlan': '02 / СОПРОВОЖДЕНИЕ',
		'pricing.guardsTitle': 'Nano Guards (полное сопровождение)',
		'pricing.guardsDescription': 'Мы настраиваем инфраструктуру и поддерживаем её при изменениях интерфейса.',
		'pricing.guardsItemOne': 'Всё, что входит в CheckUp',
		'pricing.guardsItemTwo': 'Исправляем сломанные UI-селекторы в течение 24 часов после сбоя теста.',
		'pricing.note': 'Стоимость зависит от приложения и проверяемых сценариев. Свяжитесь с нами, чтобы обсудить объём работ.',
		'contact.label': 'Связаться',
		'contact.title': 'Начнём с проверки вашей тестовой среды.',
		'contact.description': 'Отправьте ссылку и краткое описание приложения. Мы рассмотрим сценарии для тестирования и ответим вам.',
		'contact.cta': 'Запросить бесплатный визуальный аудит QA',
		'footer.note': 'Настраиваем инфраструктуру автоматизированного тестирования.',
		'footer.linksLabel': 'Ссылки на соцсети и контакты',
	},
	zh: {
		'nav.languageLabel': '选择语言',
		'nav.contact': '联系',
		'theme.toDark': '切换到深色模式',
		'theme.toLight': '切换到浅色模式',
		'hero.eyebrow': '自动化 QA 基础设施',
		'hero.title': '我们为您的 Web 应用构建自动化测试套件。',
		'hero.description':
			'我们编写 Playwright 测试脚本，使用 Docker 容器化测试环境，并将测试接入 GitHub Actions。在部署前发现问题，无需手动 QA。',
		'hero.cta': '申请免费的视觉 QA 审核',
		'hero.note': '无需承诺。我们会清晰地检查您在预发布环境中的工作流程。',
		'hero.previewLabel': '测试示例 / chromium',
		'hero.runLabel': '运行示例',
		'hero.runTitle': '示例工作流程',
		'hero.passed': '已通过',
		'hero.testsPassed': '项测试已通过',
		'hero.testOne': '使用有效凭据登录',
		'hero.testTwo': '完成结账流程',
		'hero.testThree': '更新账户设置',
		'hero.containerLabel': '在 Docker 容器中运行',
		'proof.label': '工作示例',
		'proof.title': '完整展示一次测试运行。',
		'proof.videoAlt': 'Playwright UI 测试通过 Docker 运行的示意图',
		'proof.recording': '界面示意图',
		'proof.caption': '标准运行方式：通过 Docker 运行 Playwright UI 测试。',
		'process.label': '工作流程',
		'process.title': '三个步骤完成基础设施配置。',
		'process.intro': '从选择合适的工作流程，到在每个 pull request 上运行测试。',
		'process.stepOneTitle': '视觉审核',
		'process.stepOneBody': '我们检查您的预发布环境，并确定适合自动化测试的流程。',
		'process.stepTwoTitle': '编写脚本并容器化',
		'process.stepTwoBody': '我们编写 Playwright 代码，并将其打包为 Docker 镜像。',
		'process.stepThreeTitle': '集成 CI/CD',
		'process.stepThreeBody': '我们配置测试，使其在您的 pull request 上自动运行。',
		'pricing.label': '服务方案',
		'pricing.title': '选择适合您的维护方式。',
		'pricing.intro': '两种方案都包含可运行的测试配置和完整的代码访问权限。',
		'pricing.checkupTitle': 'Nano CheckUp（交付资产）',
		'pricing.checkupDescription': '我们搭建基础设施，然后交付给您的团队。',
		'pricing.deliverables': '交付内容',
		'pricing.checkupItemOne': '10 项核心自动化测试',
		'pricing.checkupItemTwo': 'Dockerfile',
		'pricing.checkupItemThree': 'GitHub Actions 配置',
		'pricing.checkupItemFour': '完整的代码仓库所有权',
		'pricing.askAbout': '咨询此服务',
		'pricing.managedPlan': '02 / 持续维护',
		'pricing.guardsTitle': 'Nano Guards（全程维护）',
		'pricing.guardsDescription': '我们搭建基础设施，并在界面变更时进行维护。',
		'pricing.guardsItemOne': '包含 CheckUp 的全部内容',
		'pricing.guardsItemTwo': '测试失败后，我们会在 24 小时内修复失效的 UI 选择器。',
		'pricing.note': '价格取决于应用和需要覆盖的工作流程。请联系我们讨论具体范围。',
		'contact.label': '联系我们',
		'contact.title': '从检查您的预发布环境开始。',
		'contact.description': '发送应用链接和简短说明。我们会评估适合测试的工作流程并回复您。',
		'contact.cta': '申请免费的视觉 QA 审核',
		'footer.note': '为您的团队搭建自动化 QA 基础设施。',
		'footer.linksLabel': '社交媒体与联系链接',
	},
} satisfies Record<Language, Copy>;
