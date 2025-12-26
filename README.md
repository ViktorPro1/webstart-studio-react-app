# WebStart Studio - React TypeScript App

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.0+-CA4245?style=flat&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

> Веб-додаток для WebStart Studio - платформи веб-розробки та цифрових послуг, побудований на React з TypeScript

🌐 **Live Demo:** [https://web-start-studio.netlify.app/](https://web-start-studio.netlify.app/)

---

## 📋 Зміст

- [Про проєкт](#-про-проєкт)
- [Технології](#-технології)
- [Встановлення та запуск](#-встановлення-та-запуск)
- [Структура проєкту](#-структура-проєкту)
- [Доступні скрипти](#-доступні-скрипти)
- [TypeScript конфігурація](#-typescript-конфігурація)
- [Деплой](#-деплой)
- [Внесок у проєкт](#-внесок-у-проєкт)
- [Ліцензія](#-ліцензія)

---

## 🎯 Про проєкт

WebStart Studio - це React додаток з TypeScript, створений за допомогою Create React App, який представляє платформу для надання послуг веб-розробки, дизайну та цифрового маркетингу.

### Основні функції:

- 📱 Повністю адаптивний дизайн
- ⚡ SPA (Single Page Application) з React Router
- 🎨 Сучасний UI з Tailwind CSS
- 🔄 Динамічна навігація з sidebar
- 📄 Багатосторінкова структура з роутингом
- 🌍 Мультимовність (українська/англійська) з i18next
- 🔒 TypeScript для типобезпеки

---

## 🛠 Технології

Проєкт побудований з використанням:

### Core

- **React** 18.2.0 - бібліотека для створення UI
- **TypeScript** 5.7.3 - типізована надбудова JavaScript
- **React DOM** 18.2.0 - рендеринг React компонентів
- **React Router DOM** 6.30.2 - маршрутизація для SPA

### Build Tool

- **Vite** 6.0.7 - надшвидкий build tool нового покоління
- **@vitejs/plugin-react** 4.3.4 - офіційний React плагін для Vite
- Швидкий Hot Module Replacement (HMR)
- Оптимізований production build

### Code Quality

- **ESLint** 9.39.2 - лінтер для JavaScript/TypeScript
- **typescript-eslint** 8.50.1 - ESLint правила для TypeScript
- **eslint-plugin-react** 7.37.5 - ESLint правила для React
- **eslint-plugin-react-hooks** 7.0.1 - правила для React Hooks
- **eslint-plugin-react-refresh** 0.4.26 - підтримка Fast Refresh

### Styling

- **Tailwind CSS** 4.1.17 - utility-first CSS фреймворк
- **PostCSS** 8.5.6 - обробка CSS
- **Autoprefixer** 10.4.22 - автоматичні vendor prefixes

### Internationalization

- **i18next** 23.15.1 - фреймворк для інтернаціоналізації
- **react-i18next** 14.1.3 - React інтеграція для i18next

### UI Components

- **React Icons** 5.5.0 - колекція іконок
- **Lucide React** 0.263.1 - красиві іконки
- **React Helmet Async** 2.0.5 - управління head документа

### Development

- **Node.js** >= 18.x (рекомендовано)
- **npm** або **yarn** - менеджер пакетів
- **TypeScript** типи для React, React DOM, React Router, Node.js

---

## 🚀 Встановлення та запуск

### Передумови

Переконайтеся, що у вас встановлено:

- **Node.js** версії 18.0 або вище (рекомендовано LTS)
- **npm** версії 9.0 або вище (або yarn/pnpm)

### Кроки встановлення

1. **Клонуйте репозиторій**

```bash
git clone https://github.com/ViktorPro1/webstart-studio-react-app.git
cd webstart-studio-react-app
```

2. **Встановіть залежності**

```bash
npm install
# або
yarn install
# або
pnpm install
```

3. **Запустіть Vite dev сервер**

```bash
npm run dev
# або
npm start
```

4. **Відкрийте браузер**

Додаток автоматично відкриється за адресою [http://localhost:5173](http://localhost:5173)

**Vite dev сервер надає:**

- ⚡ Миттєвий запуск (холодний старт < 1s)
- 🔥 Швидкий HMR (оновлення < 50ms)
- 🐛 Чіткі повідомлення про помилки
- 📊 Dev Dashboard з метриками

### Перевірка коду

```bash
# Перевірити TypeScript типи
npm run typecheck

# Перевірити код з ESLint
npm run lint

# Автоматично виправити ESLint помилки
npm run lint:fix
```

### Production build

```bash
# Створити production збірку
npm run build

# Переглянути production збірку локально
npm run preview
```

---

## 📁 Структура проєкту

```
webstart-studio-react-app/
│
├── public/                     # Статичні файли
│   ├── index.html             # HTML шаблон
│   ├── favicon.ico            # Іконка сайту
│   ├── locales/               # Файли перекладів
│   │   ├── en/
│   │   │   └── translation.json
│   │   └── uk/
│   │       └── translation.json
│   └── ...                    # Інші статичні файли
│
├── src/                        # Вихідний код
│   ├── components/            # React компоненти
│   │   ├── Header/           # Компонент шапки
│   │   │   ├── Header.tsx
│   │   │   └── Header.css
│   │   ├── Sidebar/          # Компонент бічної панелі
│   │   │   ├── Sidebar.tsx
│   │   │   └── Sidebar.css
│   │   └── Footer/           # Компонент підвалу
│   │       ├── Footer.tsx
│   │       └── Footer.css
│   │
│   ├── pages/                 # Компоненти сторінок
│   │   ├── Home/             # Головна сторінка
│   │   │   ├── Home.tsx
│   │   │   └── Home.css
│   │   │
│   │   ├── AIServices/        # AI сервіси
│   │   ├── WebDevelopment/    # Веб-розробка
│   │   ├── Design/            # Дизайн послуги
│   │   ├── Additional/        # Додаткові сервіси
│   │   ├── Blog/              # Блог розділ
│   │   └── ...                # Інші сторінки
│   │
│   ├── types/                 # TypeScript типи
│   │   └── index.ts          # Загальні типи
│   │
│   ├── contexts/              # React Context
│   │   └── ...               # Контексти
│   │
│   ├── utils/                 # Утиліти
│   │   └── ...               # Допоміжні функції
│   │
│   ├── config/                # Конфігурація
│   │   └── i18n.ts           # i18next конфігурація
│   │
│   ├── App.tsx                # Головний компонент
│   ├── App.css                # Стилі додатку
│   ├── index.tsx              # Точка входу
│   ├── index.css              # Глобальні стилі
│   └── i18n.ts                # i18n налаштування
│
├── build/                      # Production збірка (генерується)
├── node_modules/               # Залежності (генерується)
│
├── .gitignore                  # Git ignore файл
├── package.json                # Конфігурація npm
├── package-lock.json           # Lockfile залежностей
├── tsconfig.json               # TypeScript конфігурація
├── tailwind.config.js          # Tailwind CSS конфігурація
├── postcss.config.js           # PostCSS конфігурація
└── README.md                   # Документація
```

### Ключові директорії:

- **`/public`** - містить статичні файли, які копіюються в build без обробки
- **`/src/components`** - переповторювані компоненти (Header, Sidebar, Footer)
- **`/src/pages`** - компоненти сторінок з відповідними маршрутами
- **`/src/types`** - TypeScript типи та інтерфейси
- **`/src/contexts`** - React Context для глобального стану
- **`/src/utils`** - допоміжні функції та утиліти
- **`/build`** - оптимізована production збірка (створюється командою `npm run build`)

---

## 📜 Доступні скрипти

У директорії проєкту ви можете запускати:

### `npm run dev` або `npm start`

Запускає Vite dev сервер з Hot Module Replacement (HMR).  
Відкрийте [http://localhost:5173](http://localhost:5173) щоб переглянути в браузері.

Сторінка оновлюється миттєво при внесенні змін завдяки Vite HMR.  
Помилки ESLint та TypeScript відображаються в консолі та браузері.

**Переваги Vite:**

- ⚡ Миттєвий запуск сервера
- 🔥 Надшвидкий HMR
- 📦 Оптимізована збірка

### `npm run build`

Створює оптимізований production build у папці `dist`.  
Vite збирає та оптимізує код для production:

- Мінімізація JavaScript, CSS та HTML
- Tree-shaking для видалення невикористаного коду
- Code splitting для оптимального завантаження
- Хешування файлів для кешування

TypeScript код компілюється в JavaScript, імена файлів включають хеші для кешування.

### `npm run preview`

Локально переглядає production build.  
Запускає локальний сервер для тестування production збірки перед деплоєм.

```bash
npm run build
npm run preview
```

### `npm run typecheck`

Перевіряє TypeScript типи без створення файлів.  
Використовується для валідації типів у CI/CD pipeline.

```bash
npm run typecheck
```

### `npm run lint`

Запускає ESLint для перевірки коду на помилки та відповідність стандартам.

```bash
npm run lint
```

**Перевіряє:**

- React hooks правила
- TypeScript best practices
- Потенційні баги
- Code style

### `npm run lint:fix`

Автоматично виправляє ESLint помилки, які можна виправити.

```bash
npm run lint:fix
```

**Виправляє:**

- Форматування коду
- Невикористані імпорти
- Простір та відступи
- Інші автоматичні виправлення

---

## ⚙️ TypeScript конфігурація

### tsconfig.json

Проєкт використовує стандартну конфігурацію TypeScript для React додатків:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "checkJs": false,
    "outDir": "./build",
    "noEmit": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "build"]
}
```

### Робота з типами

```typescript
// Приклад типізованого компонента
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = "primary",
  disabled = false,
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

---

## ⚙️ Vite конфігурація

### vite.config.ts

Проєкт використовує Vite для швидкої розробки та оптимізованої збірки:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "terser",
  },
});
```

### Переваги Vite

- ⚡ **Швидкий старт** - dev сервер запускається миттєво
- 🔥 **HMR** - зміни відображаються без перезавантаження
- 📦 **Оптимізація** - автоматичне code splitting та tree-shaking
- 🎯 **ESM Native** - нативна підтримка ES модулів
- 🔧 **Проста конфігурація** - мінімальні налаштування

### Міграція з CRA на Vite

Ключові зміни після міграції:

1. **Dev сервер порт** - змінився з 3000 на 5173
2. **Build папка** - змінилася з `build/` на `dist/`
3. **Швидкість** - значно швидший startup та HMR
4. **Bundle size** - менший розмір production збірки

## 🔍 ESLint конфігурація

### eslint.config.js

Проєкт використовує ESLint 9 з flat config для забезпечення якості коду:

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
```

### Основні правила

- ✅ React Hooks rules - перевірка правильності використання hooks
- ✅ TypeScript recommended - рекомендовані правила TypeScript
- ✅ React Fast Refresh - підтримка швидкого оновлення
- ✅ No unused variables - видалення невикористаних змінних
- ✅ Code consistency - єдиний стиль коду

### Використання

```bash
# Перевірити код
npm run lint

# Автоматично виправити
npm run lint:fix
```

---

## 🌐 Деплой

Проєкт налаштований для автоматичного деплою на **Netlify** з Vite.

### Автоматичний деплой (Рекомендовано)

1. Підключіть ваш GitHub репозиторій до Netlify
2. Налаштуйте build команду: `npm run build`
3. Вкажіть publish директорію: `dist` (⚠️ не `build`)
4. При кожному push в main гілку відбувається автоматичний деплой

### Ручний деплой на Netlify

```bash
# Створіть production збірку з Vite
npm run build

# Встановіть Netlify CLI (якщо ще не встановлено)
npm install -g netlify-cli

# Деплой
netlify deploy --prod --dir=dist
```

### Інші платформи деплою

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

**Налаштування:**

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Cloudflare Pages

```bash
# Build налаштування
Build command: npm run build
Build output directory: /dist
```

#### GitHub Pages

```bash
# Додайте в package.json
"homepage": "https://viktorpro1.github.io/webstart-studio-react-app"

# Встановіть gh-pages
npm install --save-dev gh-pages

# Додайте скрипти в package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Деплой
npm run deploy
```

**Примітка:** Після міграції на Vite, build папка змінилася з `build/` на `dist/`

### Інші платформи деплою

#### Vercel

```bash
npm install -g vercel
vercel --prod
```

#### GitHub Pages

```bash
# Додайте в package.json
"homepage": "https://viktorpro1.github.io/webstart-studio-react-app"

# Встановіть gh-pages
npm install --save-dev gh-pages

# Додайте скрипти в package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Деплой
npm run deploy
```

---

## 🤝 Внесок у проєкт

Ми вітаємо внески від спільноти! Будь ласка, прочитайте наш [Contributing Guide](CONTRIBUTING.md) перед початком.

### Як долучитись:

1. Fork проєкту
2. Створіть feature гілку (`git checkout -b feature/AmazingFeature`)
3. Закомітьте зміни (`git commit -m 'Add some AmazingFeature'`)
4. Push в гілку (`git push origin feature/AmazingFeature`)
5. Відкрийте Pull Request

### Гайдлайни для розробників:

- Дотримуйтесь існуючої структури компонентів
- Використовуйте TypeScript для всіх нових компонентів
- Створюйте окремі папки для нових сторінок в `/src/pages`
- Додавайте відповідні CSS файли для кожного компонента
- Імпортуйте нові маршрути в `App.tsx`
- Тестуйте адаптивність на різних екранах
- Пишіть зрозумілі commit messages
- Додавайте типи для props та state

---

## 📝 Ліцензія

Цей проєкт ліцензовано під MIT License - дивіться файл [LICENSE](LICENSE) для деталей.

---

## 👨‍💻 Автор

**Viktor**

- GitHub: [@ViktorPro1](https://github.com/ViktorPro1)
- Email: webstartstudio978@gmail.com

---

## 🙏 Подяки

- [Create React App](https://create-react-app.dev/) - за чудовий starter kit
- [React](https://reactjs.org/) - за потужну бібліотеку
- [TypeScript](https://www.typescriptlang.org/) - за типобезпеку
- [React Router](https://reactrouter.com/) - за маршрутизацію
- [Tailwind CSS](https://tailwindcss.com/) - за utility-first CSS
- [i18next](https://www.i18next.com/) - за інтернаціоналізацію
- [Netlify](https://netlify.com/) - за безкоштовний хостинг

---

## 📞 Підтримка

Є питання чи пропозиції?

- 🐛 [Створити Issue](https://github.com/ViktorPro1/webstart-studio-react-app/issues)
- 💬 [Discussions](https://github.com/ViktorPro1/webstart-studio-react-app/discussions)
- 📧 Email: webstartstudio978@gmail.com

---

## 📚 Корисні посилання

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Router Documentation](https://reactrouter.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [i18next Documentation](https://www.i18next.com/)

---

**Зроблено з ❤️, React та TypeScript**

⭐ Якщо проєкт вам сподобався - поставте зірку на GitHub!

## 📝 Ліцензія

Цей проєкт ліцензовано під MIT License:

- 🇬🇧 [English version](LICENSE)
- 🇺🇦 [Українська версія](LICENSE_UA.md)
