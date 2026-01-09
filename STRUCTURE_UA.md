# 🗂️ Структура проекту

Детальний опис структури файлів та папок проекту.

```
├── .github/                    # Конфігурація GitHub (Actions, Workflows)
├── .vscode/                    # Налаштування VS Code для проекту
├── build/                      # Скомпільована версія для production (автогенерація)
├── public/                     # Статичні файли (favicon, зображення, robots.txt)
├── src/                        # Вихідний код проекту
│   ├── SEO/                    # Модуль SEO оптимізації
│   │   ├── utils/              # Утиліти для SEO (генератори sitemap, robots, schema)
│   │   ├── DynamicMeta.tsx     # Компонент для динамічних мета-тегів
│   │   ├── MetaTags.ts         # Статичні мета-теги
│   │   ├── SEO.tsx             # Головний SEO компонент
│   │   ├── index.ts            # Експорти модуля SEO
│   │   └── seoData.ts          # База даних SEO інформації для всіх сторінок
│   │
│   ├── components/             # Багаторазові React компоненти
│   │   ├── Breadcrumbs/        # Хлібні крихти (навігаційний шлях)
│   │   ├── CookieConsent/      # Повідомлення про Cookie
│   │   ├── DjonAssistant/      # Віртуальний асистент Djon
│   │   ├── Footer/             # Підвал сайту
│   │   ├── Header/             # Шапка сайту з навігацією
│   │   ├── Layout/             # Загальний макет сторінок
│   │   ├── NewYear/            # Новорічне оформлення (сезонне)
│   │   ├── PrivacyPolicy/      # Політика конфіденційності
│   │   ├── Sidebar/            # Бічна панель
│   │   ├── TermsOfUse/         # Умови використання
│   │   ├── UI                  # Готові елементи інтерфейсу з мінімальною,
│   │   │                         але реальною поведінкою
│   │   └── UpdateNotification/ # Повідомлення про оновлення
│   │
│   ├── config/                 # Конфігураційні файли
│   │   └── promoConfig.ts      # Налаштування промо-акцій та знижок
│   │
│   ├── contexts/               # React Context API
│   │   └── ThemeContext.tsx    # Контекст теми (світла/темна)
│   │
│   ├── data/                   # Статичні дані проекту
│   │   ├── menuData.ts         # Структура меню навігації
│   │   └── searchIndex.ts      # Індекс для пошуку по сайту
│   │
│   ├── locales/                # Файли перекладів (i18n)
│   │   ├── cs.json             # Чеська мова
│   │   ├── de.json             # Німецька мова
│   │   ├── en.json             # Англійська мова
│   │   ├── fr.json             # Французька мова
│   │   ├── pl.json             # Польська мова
│   │   └── ua.json             # Українська мова
│   │
│   ├── pages/                  # Сторінки сайту (роути)
│   │   ├── AIServices/         # Сторінка AI сервісів
│   │   ├── About/              # Про нас
│   │   ├── Achievements/       # Досягнення
│   │   ├── Assistant/          # Сторінка асистента
│   │   ├── Blog/               # Блог
│   │   ├── Bonus/              # Бонусна програма
│   │   ├── Briefs/             # Брифи
│   │   ├── CanvaServices/      # Послуги Canva
│   │   ├── CertificateGift/    # Подарункові сертифікати
│   │   ├── ClientPortal/       # Клієнтський портал
│   │   ├── CommonMistakes/     # Поширені помилки
│   │   ├── Contact/            # Контакти
│   │   ├── DataAnalytics/      # Аналітика даних
│   │   ├── DiyVsUs/            # Порівняння DIY vs професійні послуги
│   │   ├── EditInstruction/    # Інструкції з редагування
│   │   ├── FAQ/                # Часті питання
│   │   ├── Facebook-Ads/       # Facebook реклама
│   │   ├── ForWhom/            # Для кого наші послуги
│   │   ├── Generators/         # Генератори (інструменти)
│   │   ├── Google-Ads/         # Google реклама
│   │   ├── Home/               # Головна сторінка
│   │   ├── Innovations/        # Інновації
│   │   ├── Instruction/        # Інструкції
│   │   ├── InteractiveQuiz/    # Інтерактивна вікторина
│   │   ├── Legal/              # Юридична інформація
│   │   ├── NotFound/           # 404 - сторінка не знайдена
│   │   ├── PcService/          # Комп'ютерні послуги
│   │   ├── PlatformComparison/ # Порівняння платформ
│   │   ├── PolandTax/          # Податки в Польщі
│   │   ├── Pricing/            # Ціни
│   │   ├── Promo/              # Промо-акції
│   │   ├── SecurityTips/       # Поради з безпеки
│   │   ├── Services/           # Послуги
│   │   ├── Skills/             # Навички
│   │   ├── Social/             # Соціальні мережі
│   │   ├── SurveyPage/         # Опитування (Як тобі ми?)
│   │   ├── TechnicalDetails/   # Технічні деталі
│   │   ├── Templates/          # Шаблони
│   │   ├── Testimonials/       # Відгуки клієнтів
│   │   ├── WebStartLab/        # Web Start Lab
│   │   ├── YouTubeChannel/     # YouTube канал
│   │   └── international/      # Міжнародні версії сторінок
│   │
│   ├── routes/                 # Налаштування маршрутизації
│   │   ├── AppRoutes.tsx       # Основні маршрути додатку
│   │   └── AppRoutesWrapper.tsx # Обгортка для маршрутів (з Layout)
│   │
│   ├── scripts/                # Скрипти для автоматизації
│   │   └── generate-seo.ts     # Генерація SEO файлів (sitemap, robots)
│   │
│   ├── types/                  # TypeScript типи та інтерфейси
│   │   └── service-worker.d.ts # Типи для Service Worker
│   │
│   ├── utils/                  # Допоміжні функції та утиліти
│   │   ├── analytics.ts        # Інтеграція аналітики (Google Analytics)
│   │   ├── clarity.ts          # Microsoft Clarity
│   │   ├── constants.ts        # Глобальні константи
│   │   └── responsive.ts       # Утиліти для адаптивного дизайну
│   │
│   ├── .nvmrc                  # Версія Node.js для проекту
│   ├── App.css                 # Глобальні стилі додатку
│   ├── App.tsx                 # Головний компонент React
│   ├── i18n.ts                 # Конфігурація інтернаціоналізації
│   ├── index.css               # Базові стилі
│   ├── index.tsx               # Точка входу React додатку
│   └── vite-env.d.ts           # TypeScript декларації для Vite
│
├── .env.example                # Приклад файлу змінних середовища
├── .gitignore                  # Файли та папки, які ігнорує Git
├── CHANGELOG.md                # Історія змін проекту
├── CODE_OF_CONDUCT.md          # Кодекс поведінки
├── CONTRIBUTING.md             # Інструкції для контриб'юторів
├── LICENSE                     # Ліцензія проекту
├── LICENSE_UA.md               # Ліцензія українською
├── PULL_REQUEST_TEMPLATE.md    # Шаблон для Pull Request
├── README.md                   # Документація проекту
├── package.json                # Залежності та скрипти npm
├── tsconfig.json               # Конфігурація TypeScript
└── vite.config.ts              # Конфігурація Vite (збірка проекту)
```

---

## 📝 Короткий опис основних директорій

| Папка               | Призначення                                                    |
| ------------------- | -------------------------------------------------------------- |
| **src/SEO/**        | Все для пошукової оптимізації (мета-теги, sitemap, schema.org) |
| **src/components/** | Переusable UI компоненти (Header, Footer, Sidebar)             |
| **src/pages/**      | Всі сторінки сайту - кожна папка це окрема сторінка            |
| **src/locales/**    | Переклади на 6 мов (ua, en, cs, de, fr, pl)                    |
| **src/data/**       | Статичні дані (меню, індекс пошуку)                            |
| **src/utils/**      | Допоміжні функції (аналітика, константи, responsive)           |
| **src/routes/**     | Налаштування React Router                                      |
| **src/config/**     | Конфігурації (промо-акції, налаштування)                       |
| **public/**         | Статичні файли (favicon, зображення)                           |

---

## 🚀 Технології

- **React 18** + **TypeScript**
- **Vite** (швидка збірка)
- **React Router** (маршрутизація)
- **i18next** (мультимовність)
- **CSS Modules** (стилізація)
