# 🗂️ Структура проекту

Детальний опис структури файлів та папок проекту.

```
├── .github/                    # Конфігурація GitHub (Actions, Workflows)
├── .vscode/                    # Налаштування VS Code для проекту
├── build/                      # Скомпільована версія для production (автогенерація)
├── public/                     # Статичні файли (favicon, зображення, robots.txt)
│
├── server/                     # 🆕 Node.js + Express бекенд (v4.0.0)
│   ├── db/
│   │   └── connection.js       # Підключення до MySQL (mysql2)
│   ├── middleware/
│   │   └── auth.js             # authMiddleware + adminMiddleware (JWT)
│   ├── routes/
│   │   ├── auth.js             # Реєстрація та вхід (/api/auth)
│   │   ├── client.js           # Роути клієнта (/api/client)
│   │   ├── admin.js            # Роути адміна (/api/admin)
│   │   └── forum.js            # Повний CRUD форуму (/api/forum)
│   ├── .env                    # Змінні середовища (DB, JWT_SECRET)
│   ├── package.json            # Залежності бекенду
│   └── server.js               # Головний файл Express сервера
│
├── src/                        # Вихідний код React застосунку
│   ├── SEO/                    # Модуль SEO оптимізації
│   │   ├── utils/              # Утиліти для SEO (генератори sitemap, robots, schema)
│   │   ├── DynamicMeta.tsx     # Компонент для динамічних мета-тегів
│   │   ├── MetaTags.ts         # Статичні мета-теги
│   │   ├── SEO.tsx             # Головний SEO компонент
│   │   ├── index.ts            # Експорти модуля SEO
│   │   └── seoData.ts          # База даних SEO інформації для всіх сторінок
│   │
│   ├── api/
│   │   └── api.ts              # 🆕 Axios інстанс з Bearer токеном
│   │
│   ├── components/             # Багаторазові React компоненти
│   │   ├── Breadcrumbs/        # Хлібні крихти (навігаційний шлях)
│   │   ├── CookieConsent/      # Повідомлення про Cookie
│   │   ├── DjonAssistant/      # Віртуальний асистент Djon
│   │   ├── Footer/             # Підвал сайту
│   │   ├── Header/             # 🔄 Шапка сайту — попап авторизації, ролі admin/client
│   │   ├── Layout/             # Загальний макет сторінок
│   │   ├── NewYear/            # Новорічне оформлення (сезонне)
│   │   ├── PrivacyPolicy/      # Політика конфіденційності
│   │   ├── Sidebar/            # 🔄 Бічна панель — посилання на форум та чат
│   │   ├── TermsOfUse/         # Умови використання
│   │   ├── UI/                 # Готові елементи інтерфейсу
│   │   └── UpdateNotification/ # Повідомлення про оновлення
│   │
│   ├── config/                 # Конфігураційні файли
│   │   └── promoConfig.ts      # Налаштування промо-акцій та знижок
│   │
│   ├── contexts/               # React Context API
│   │   ├── ThemeContext.tsx    # Контекст теми (світла/темна)
│   │   └── AuthContext.tsx     # 🆕 Глобальний стан авторизації (user, token, role)
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
│   │   ├── CommonMistakes/     # Поширені помилки
│   │   ├── Contact/            # Контакти
│   │   ├── DataAnalytics/      # Аналітика даних
│   │   ├── DiyVsUs/            # Порівняння DIY vs професійні послуги
│   │   ├── EditInstruction/    # Інструкції з редагування
│   │   ├── FAQ/                # Часті питання
│   │   ├── Facebook-Ads/       # Facebook реклама
│   │   ├── ForWhom/            # Для кого наші послуги
│   │   ├── Forum/              # 🆕 Форум спільноти (/user-permissions)
│   │   │   ├── Forum.tsx       #     Головний компонент форуму
│   │   │   ├── Forum.css       #     Всі стилі форуму
│   │   │   └── Forum.mobile.css#     Адаптив для 768px та 480px
│   │   ├── Generators/         # Генератори (інструменти)
│   │   ├── Google-Ads/         # Google реклама
│   │   ├── Home/               # Головна сторінка
│   │   ├── Innovations/        # Інновації
│   │   ├── Instruction/        # Інструкції
│   │   ├── InteractiveQuiz/    # Інтерактивна вікторина
│   │   ├── Legal/              # Юридична інформація
│   │   ├── Messages/           # 🆕 Чат з командою (/messages)
│   │   │   └── Messages.tsx    #     Клієнт: чат; Адмін: список клієнтів + розмови
│   │   ├── MyAccount/          # 🆕 Особистий кабінет клієнта (/my-account)
│   │   │   └── MyAccount.tsx   #     Замовлення, статуси, завантаження файлів
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
│   │   ├── Updates/            # 🔄 Оновлення платформи (включає v4.0.0)
│   │   ├── WebStartLab/        # Web Start Lab
│   │   ├── YouTubeChannel/     # YouTube канал
│   │   └── international/      # Міжнародні версії сторінок
│   │
│   ├── routes/                 # Налаштування маршрутизації
│   │   ├── AppRoutes.tsx       # 🔄 Основні маршрути (додано /messages, /my-account, /user-permissions)
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
│   ├── App.css                 # Глобальні стилі додатку
│   ├── App.tsx                 # Головний компонент React
│   ├── i18n.ts                 # Конфігурація інтернаціоналізації
│   ├── index.css               # Базові стилі
│   ├── index.tsx               # Точка входу React додатку
│   └── vite-env.d.ts           # TypeScript декларації для Vite
│
├── .env.example                # Приклад файлу змінних середовища
├── .gitignore                  # Файли та папки, які ігнорує Git
├── CHANGELOG.md                # 🔄 Історія змін (включає v4.0.0)
├── CODE_OF_CONDUCT.md          # Кодекс поведінки
├── CONTRIBUTING.md             # Інструкції для контриб'юторів
├── LICENSE                     # Ліцензія проекту
├── README.md                   # Документація проекту
├── SECURITY.md                 # 🔄 Політика безпеки (включає JWT, bcrypt, SQL)
├── package.json                # Залежності та скрипти npm (фронтенд)
├── tsconfig.json               # Конфігурація TypeScript
└── vite.config.ts              # Конфігурація Vite (збірка проекту)
```

---

## 📝 Короткий опис основних директорій

| Папка                    | Призначення                                                    |
| ------------------------ | -------------------------------------------------------------- |
| **server/**              | 🆕 Node.js + Express бекенд, MySQL, JWT авторизація            |
| **server/routes/**       | 🆕 REST API: auth, client, admin, forum                        |
| **server/middleware/**   | 🆕 authMiddleware, adminMiddleware                             |
| **src/api/**             | 🆕 Axios інстанс з автоматичним Bearer токеном                 |
| **src/contexts/**        | 🔄 AuthContext (авторизація) + ThemeContext (тема)             |
| **src/SEO/**             | Все для пошукової оптимізації (мета-теги, sitemap, schema.org) |
| **src/components/**      | Reusable UI компоненти (Header, Footer, Sidebar)               |
| **src/pages/**           | Всі сторінки сайту — кожна папка це окрема сторінка            |
| **src/pages/Forum/**     | 🆕 Форум спільноти з темами, коментарями та 3 типами реакцій   |
| **src/pages/Messages/**  | 🆕 Чат клієнта з командою + адмін-вид усіх розмов              |
| **src/pages/MyAccount/** | 🆕 Особистий кабінет клієнта — замовлення та файли             |
| **src/locales/**         | Переклади на 6 мов (ua, en, cs, de, fr, pl)                    |
| **src/data/**            | Статичні дані (меню, індекс пошуку)                            |
| **src/utils/**           | Допоміжні функції (аналітика, константи, responsive)           |
| **src/routes/**          | 🔄 React Router — додано нові роути v4.0.0                     |
| **public/**              | Статичні файли (favicon, зображення)                           |

---

## 🗄️ База даних MySQL (v4.0.0+)

| Таблиця             | Призначення                                   |
| ------------------- | --------------------------------------------- |
| **users**           | Користувачі з ролями: `admin` / `client`      |
| **orders**          | Замовлення клієнтів зі статусами та нотатками |
| **messages**        | Повідомлення між клієнтами та командою        |
| **forum_topics**    | Теми форуму                                   |
| **forum_comments**  | Коментарі до тем                              |
| **forum_reactions** | Реакції: `heart` / `thumbsup` / `handshake`   |

---

## 🔐 Нові роути (v4.0.0+)

| Роут                | Сторінка                  | Доступ                              |
| ------------------- | ------------------------- | ----------------------------------- |
| `/my-account`       | Особистий кабінет         | Тільки авторизовані                 |
| `/messages`         | Чат з командою            | Тільки авторизовані                 |
| `/user-permissions` | Форум спільноти           | Всі (читання); авторизовані (запис) |
| `/privacy-policy`   | Політика конфіденційності | Всі                                 |
| `/terms-of-use`     | Умови використання        | Всі                                 |

---

## 🚀 Технології

### Фронтенд

- **React 18** + **TypeScript**
- **Vite** (швидка збірка)
- **React Router** (маршрутизація)
- **Axios** (HTTP клієнт)
- **i18next** (мультимовність)
- **CSS Modules** (стилізація)

### Бекенд (v4.0.0+)

- **Node.js** + **Express**
- **MySQL** + **mysql2**
- **JWT** (jsonwebtoken)
- **bcrypt** (хешування паролів)
- **dotenv** (змінні середовища)
- **nodemon** (dev режим)
- **CORS** (крос-доменні запити)
