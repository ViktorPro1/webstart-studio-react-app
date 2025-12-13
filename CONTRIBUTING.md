# Гайд по внесках у WebStart Studio React App

Дякуємо за ваш інтерес до проєкту! Ми раді кожному внеску.

## 📋 Зміст

- [Кодекс поведінки](#кодекс-поведінки)
- [Як я можу допомогти](#як-я-можу-допомогти)
- [Процес розробки](#процес-розробки)
- [Структура компонентів](#структура-компонентів)
- [Додавання нових сторінок](#додавання-нових-сторінок)
- [Стиль коду](#стиль-коду)
- [Pull Requests](#pull-requests)
- [Тестування](#тестування)

---

## Кодекс поведінки

Цей проєкт дотримується [Кодексу поведінки](CODE_OF_CONDUCT.md). Беручи участь, ви погоджуєтесь дотримуватися його положень.

---

## Як я можу допомогти

### 🐛 Повідомлення про баги

Знайшли баг? Створіть [issue](https://github.com/ViktorPro1/webstart-studio-react-app/issues/new) з:

- Чітким описом проблеми
- Кроками для відтворення
- Очікуваною та фактичною поведінкою
- Скріншотами (якщо можливо)
- Інформацією про середовище (браузер, ОС)

### ✨ Пропозиції функцій

Маєте ідею? Створіть issue з міткою `enhancement`:

- Опишіть функцію
- Поясніть, чому вона потрібна
- Наведіть приклади використання

### 📖 Покращення документації

- Виправляйте помилки
- Додавайте приклади
- Покращуйте пояснення
- Перекладайте на інші мови

### 💻 Написання коду

Працюйте над [відкритими issues](https://github.com/ViktorPro1/webstart-studio-react-app/issues) або пропонуйте нові функції.

---

## Процес розробки

### 1. Форк та клонування

```bash
# Форкніть репозиторій через GitHub UI

# Клонуйте ваш форк
git clone https://github.com/YOUR-USERNAME/webstart-studio-react-app.git
cd webstart-studio-react-app

# Додайте upstream
git remote add upstream https://github.com/ViktorPro1/webstart-studio-react-app.git
```

### 2. Створення гілки

```bash
# Оновіть main
git checkout main
git pull upstream main

# Створіть feature гілку
git checkout -b feature/your-feature-name
# або
git checkout -b fix/bug-description
```

**Конвенція назв гілок:**

- `feature/` - нові функції
- `fix/` - виправлення багів
- `docs/` - зміни в документації
- `refactor/` - рефакторинг коду
- `style/` - форматування, стилі

### 3. Налаштування середовища

```bash
# Встановіть залежності
npm install

# Запустіть dev сервер
npm start
```

### 4. Внесення змін

Вносьте зміни, дотримуючись стандартів проєкту.

### 5. Тестування

```bash
# Запустіть тести
npm test

# Перевірте build
npm run build
```

### 6. Коміт змін

```bash
git add .
git commit -m "feat: add new navigation component"
```

**Конвенція комітів:**

- `feat:` - нова функція
- `fix:` - виправлення бага
- `docs:` - документація
- `style:` - форматування
- `refactor:` - рефакторинг
- `test:` - тести
- `chore:` - інше

### 7. Push та PR

```bash
git push origin feature/your-feature-name
```

Створіть Pull Request через GitHub UI.

---

## Структура компонентів

### Організація файлів

Кожен компонент повинен мати власну папку:

```
src/
└── components/
    └── ComponentName/
        ├── ComponentName.jsx    # Компонент
        ├── ComponentName.css    # Стилі
        └── index.js             # (опціонально) Re-export
```

### Приклад компонента

```jsx
// src/components/Button/Button.jsx
import React from "react";
import "./Button.css";

function Button({ children, onClick, variant = "primary" }) {
  return (
    <button className={`button button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

```css
/* src/components/Button/Button.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.button--primary {
  background-color: #007bff;
  color: white;
}

.button--secondary {
  background-color: #6c757d;
  color: white;
}
```

---

## Додавання нових сторінок

### 1. Створіть компонент сторінки

```bash
src/pages/
└── NewPage/
    ├── NewPage.jsx
    └── NewPage.css
```

### 2. Напишіть компонент

```jsx
// src/pages/NewPage/NewPage.jsx
import React from "react";
import "./NewPage.css";

function NewPage() {
  return (
    <div className="new-page">
      <h1>New Page</h1>
      <p>Content goes here</p>
    </div>
  );
}

export default NewPage;
```

### 3. Додайте маршрут в App.js

```jsx
// src/App.js
import NewPage from "./pages/NewPage/NewPage";

// В компоненті
<Routes>
  {/* Існуючі маршрути */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>;
```

### 4. Додайте посилання в навігацію

```jsx
// src/components/Sidebar/Sidebar.jsx
<Link to="/new-page">New Page</Link>
```

---

## Стиль коду

### JavaScript/JSX

#### Використовуйте функціональні компоненти

```jsx
// Добре ✅
function MyComponent({ prop1, prop2 }) {
  return <div>{prop1}</div>;
}

// Уникайте ❌
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.prop1}</div>;
  }
}
```

#### Деструктуризація props

```jsx
// Добре ✅
function User({ name, email }) {
  return (
    <div>
      {name}: {email}
    </div>
  );
}

// Уникайте ❌
function User(props) {
  return (
    <div>
      {props.name}: {props.email}
    </div>
  );
}
```

#### Іменування

- Компоненти: `PascalCase` (UserProfile, NavigationBar)
- Функції: `camelCase` (getUserData, handleClick)
- Константи: `UPPER_SNAKE_CASE` (API_URL, MAX_COUNT)
- CSS класи: `kebab-case` (user-profile, nav-bar)

### CSS

#### Структура

```css
/* Групуйте властивості */
.component {
  /* Позиціонування */
  position: relative;
  display: flex;

  /* Box model */
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  /* Візуальні властивості */
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;

  /* Типографіка */
  font-size: 16px;
  line-height: 1.5;

  /* Інше */
  cursor: pointer;
  transition: all 0.3s ease;
}
```

#### Селектори

```css
/* Добре ✅ - специфічні селектори */
.header__logo {
}
.button--primary {
}

/* Уникайте ❌ - занадто загальні */
div {
}
.logo {
}
```

### Коментарі

```jsx
/**
 * Компонент для відображення карточки користувача
 * @param {string} name - Ім'я користувача
 * @param {string} email - Email користувача
 * @param {string} avatar - URL аватара
 */
function UserCard({ name, email, avatar }) {
  // Обробка відсутнього аватара
  const displayAvatar = avatar || "/default-avatar.png";

  return (
    <div className="user-card">
      <img src={displayAvatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}
```

---

## Pull Requests

### Контрольний список

Перед відправкою PR переконайтеся:

- [ ] Код відповідає style guide
- [ ] Додано/оновлено коментарі
- [ ] `npm test` проходить успішно
- [ ] `npm run build` працює без помилок
- [ ] Протестовано в різних браузерах
- [ ] Протестовано на мобільних пристроях
- [ ] Оновлено документацію (якщо потрібно)
- [ ] Немає console.log у production коді
- [ ] Коміти мають зрозумілі повідомлення

### Шаблон PR

```markdown
## Опис

Коротко опишіть зміни в цьому PR.

## Тип змін

- [ ] Виправлення бага
- [ ] Нова функція
- [ ] Критичні зміни
- [ ] Оновлення документації

## Пов'язані Issues

Closes #123

## Тестування

Опишіть, як тестували зміни.

## Скріншоти

Додайте скріншоти для візуальних змін.

## Додаткові примітки

Будь-яка додаткова інформація.
```

---

## Тестування

### Запуск тестів

```bash
# Запустити всі тести
npm test

# Watch режим
npm test -- --watch

# Coverage
npm test -- --coverage
```

### Написання тестів

```jsx
// src/components/Button/Button.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

test("renders button with text", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

test("calls onClick when clicked", () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click</Button>);

  fireEvent.click(screen.getByText("Click"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## Комунікація

### Де отримати допомогу

- 💬 [GitHub Discussions](https://github.com/ViktorPro1/webstart-studio-react-app/discussions)
- 🐛 [Issues](https://github.com/ViktorPro1/webstart-studio-react-app/issues)
- 📧 Email: viktor@webstart.studio

### Будьте ввічливими

- Поважайте час інших
- Надавайте конструктивну критику
- Будьте терплячими

---

## Подяки

Всі контрибʼютори згадуються в релізних нотатках.

Дякуємо за ваш внесок! 🎉
