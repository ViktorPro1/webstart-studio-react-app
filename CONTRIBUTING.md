# Гайд по внесках у WebStart Studio React TypeScript App

Дякуємо за ваш інтерес до проєкту! Ми раді кожному внеску.

## 📋 Зміст

- [Кодекс поведінки](#кодекс-поведінки)
- [Як я можу допомогти](#як-я-можу-допомогти)
- [Процес розробки](#процес-розробки)
- [Структура компонентів](#структура-компонентів)
- [TypeScript гайдлайни](#typescript-гайдлайни)
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
- Повідомленнями про помилки TypeScript (якщо застосовно)

### ✨ Пропозиції функцій

Маєте ідею? Створіть issue з міткою `enhancement`:

- Опишіть функцію
- Поясніть, чому вона потрібна
- Наведіть приклади використання
- Включіть приклади TypeScript типів (якщо релевантно)

### 📖 Покращення документації

- Виправляйте помилки
- Додавайте приклади (включаючи TypeScript приклади)
- Покращуйте пояснення
- Перекладайте на інші мови
- Оновлюйте JSDoc коментарі

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
- `types/` - оновлення типів TypeScript

### 3. Налаштування середовища

```bash
# Встановіть залежності
npm install

# Запустіть dev сервер
npm start
```

### 4. Внесення змін

Вносьте зміни, дотримуючись стандартів проєкту та TypeScript best practices.

### 5. Тестування

```bash
# Запустіть тести
npm test

# Перевірте TypeScript типи
npx tsc --noEmit

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
- `types:` - оновлення типів

### 7. Push та PR

```bash
git push origin feature/your-feature-name
```

Створіть Pull Request через GitHub UI.

---

## Структура компонентів

### Організація файлів

Кожен компонент повинен мати власну папку з TypeScript файлами:

```
src/
└── components/
    └── ComponentName/
        ├── ComponentName.tsx       # Компонент
        ├── ComponentName.types.ts  # TypeScript типи/інтерфейси
        ├── ComponentName.css       # Стилі
        └── index.ts                # Re-export
```

### Приклад компонента з TypeScript

```typescript
// src/components/Button/Button.types.ts
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

export type ButtonVariant = ButtonProps["variant"];
export type ButtonSize = ButtonProps["size"];
```

```typescript
// src/components/Button/Button.tsx
import React from "react";
import type { ButtonProps } from "./Button.types";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  size = "medium",
  className = "",
}) => {
  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
```

```typescript
// src/components/Button/index.ts
export { default } from "./Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./Button.types";
```

```css
/* src/components/Button/Button.css */
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
}

.button--primary {
  background-color: #007bff;
  color: white;
}

.button--secondary {
  background-color: #6c757d;
  color: white;
}

.button--danger {
  background-color: #dc3545;
  color: white;
}

.button--small {
  padding: 5px 10px;
  font-size: 14px;
}

.button--medium {
  padding: 10px 20px;
  font-size: 16px;
}

.button--large {
  padding: 15px 30px;
  font-size: 18px;
}

.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

---

## TypeScript гайдлайни

### Основні правила

#### 1. Завжди використовуйте явні типи

```typescript
// Добре ✅
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
  isActive: true,
};

// Уникайте ❌
const user = {
  id: 1,
  name: "John",
  email: "john@example.com",
  isActive: true,
};
```

#### 2. Використовуйте `interface` для об'єктів, `type` для союзів

```typescript
// Добре ✅
interface User {
  id: number;
  name: string;
}

type Status = "active" | "inactive" | "pending";
type ID = string | number;

// Уникайте ❌
type User = {
  id: number;
  name: string;
};

interface Status {
  // не можна використати для союзів
}
```

#### 3. Використовуйте `React.FC` для функціональних компонентів

```typescript
// Добре ✅
interface Props {
  title: string;
  count: number;
}

const MyComponent: React.FC<Props> = ({ title, count }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};

// Також добре ✅
const MyComponent = ({ title, count }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>Count: {count}</p>
    </div>
  );
};
```

#### 4. Типізуйте hooks

```typescript
// useState
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);

// useRef
const inputRef = useRef<HTMLInputElement>(null);

// useCallback
const handleClick = useCallback(
  (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked");
  },
  []
);

// Custom hooks
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
```

#### 5. Використовуйте generics для переповторюваних компонентів

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item) => (
        <li key={keyExtractor(item)}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Використання
<List
  items={users}
  renderItem={(user) => <div>{user.name}</div>}
  keyExtractor={(user) => user.id}
/>;
```

#### 6. Типізуйте події

```typescript
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  console.log("Clicked");
};
```

#### 7. Використовуйте utility types

```typescript
// Partial - всі поля опціональні
type PartialUser = Partial<User>;

// Required - всі поля обов'язкові
type RequiredUser = Required<PartialUser>;

// Pick - вибрати певні поля
type UserPreview = Pick<User, "id" | "name">;

// Omit - виключити певні поля
type UserWithoutEmail = Omit<User, "email">;

// Record - створити об'єкт з ключами
type UserRoles = Record<string, User>;
```

#### 8. Додавайте JSDoc коментарі

```typescript
/**
 * Компонент для відображення карточки користувача
 * @param {UserCardProps} props - Props компонента
 * @returns {JSX.Element} React компонент
 * @example
 * <UserCard
 *   user={user}
 *   onEdit={handleEdit}
 *   onDelete={handleDelete}
 * />
 */
interface UserCardProps {
  /** Об'єкт користувача */
  user: User;
  /** Callback для редагування */
  onEdit?: (user: User) => void;
  /** Callback для видалення */
  onDelete?: (userId: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
  // ...
};
```

---

## Додавання нових сторінок

### 1. Створіть структуру файлів

```bash
src/pages/
└── NewPage/
    ├── NewPage.tsx
    ├── NewPage.types.ts
    ├── NewPage.css
    └── index.ts
```

### 2. Створіть типи

```typescript
// src/pages/NewPage/NewPage.types.ts
export interface NewPageProps {
  title?: string;
}

export interface NewPageData {
  id: number;
  content: string;
}
```

### 3. Напишіть компонент

```typescript
// src/pages/NewPage/NewPage.tsx
import React, { useState, useEffect } from "react";
import type { NewPageProps, NewPageData } from "./NewPage.types";
import "./NewPage.css";

const NewPage: React.FC<NewPageProps> = ({ title = "New Page" }) => {
  const [data, setData] = useState<NewPageData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data
    const fetchData = async () => {
      try {
        setIsLoading(true);
        // API call here
        const response = await fetch("/api/data");
        const result: NewPageData = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="new-page">
      <h1>{title}</h1>
      {data && <p>{data.content}</p>}
    </div>
  );
};

export default NewPage;
```

### 4. Створіть index файл

```typescript
// src/pages/NewPage/index.ts
export { default } from "./NewPage";
export type { NewPageProps, NewPageData } from "./NewPage.types";
```

### 5. Додайте маршрут в App.tsx

```typescript
// src/App.tsx
import NewPage from "./pages/NewPage";

// В компоненті
<Routes>
  {/* Існуючі маршрути */}
  <Route path="/new-page" element={<NewPage />} />
</Routes>;
```

### 6. Додайте посилання в навігацію

```typescript
// src/components/Sidebar/Sidebar.tsx
<Link to="/new-page">New Page</Link>
```

---

## Стиль коду

### TypeScript/TSX

#### Використовуйте функціональні компоненти з TypeScript

```typescript
// Добре ✅
interface MyComponentProps {
  prop1: string;
  prop2: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ prop1, prop2 }) => {
  return (
    <div>
      {prop1}: {prop2}
    </div>
  );
};

// Уникайте ❌
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.prop1}</div>;
  }
}
```

#### Деструктуризація props

```typescript
// Добре ✅
interface UserProps {
  name: string;
  email: string;
}

const User: React.FC<UserProps> = ({ name, email }) => {
  return (
    <div>
      {name}: {email}
    </div>
  );
};

// Уникайте ❌
const User: React.FC<UserProps> = (props) => {
  return (
    <div>
      {props.name}: {props.email}
    </div>
  );
};
```

#### Іменування

- Компоненти: `PascalCase` (UserProfile, NavigationBar)
- Функції: `camelCase` (getUserData, handleClick)
- Константи: `UPPER_SNAKE_CASE` (API_URL, MAX_COUNT)
- CSS класи: `kebab-case` (user-profile, nav-bar)
- Інтерфейси: `PascalCase` з префіксом `I` опціонально (IUser, UserProps)
- Types: `PascalCase` (Status, ID)

### CSS / Tailwind

#### Використовуйте Tailwind класи де можливо

```tsx
// Добре ✅
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 className="text-xl font-bold text-gray-800">{title}</h2>
</div>;

// Для складних стилів використовуйте CSS модулі
import styles from "./Component.module.css";

<div className={styles.customComponent}>...</div>;
```

#### Структура CSS

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

### Коментарі та документація

```typescript
/**
 * Хук для роботи з localStorage з TypeScript підтримкою
 * @template T - Тип даних, що зберігаються
 * @param {string} key - Ключ localStorage
 * @param {T} initialValue - Початкове значення
 * @returns {[T, (value: T) => void]} Tuple з значенням та setter функцією
 * @example
 * const [user, setUser] = useLocalStorage<User>('user', { id: 1, name: 'John' });
 */
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  // Отримання збереженого значення
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Збереження значення
  const setValue = (value: T) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}
```

---

## Pull Requests

### Контрольний список

Перед відправкою PR переконайтеся:

- [ ] Код відповідає style guide
- [ ] Всі типи TypeScript коректні
- [ ] Додано/оновлено типи та інтерфейси
- [ ] Додано/оновлено JSDoc коментарі
- [ ] `npm test` проходить успішно
- [ ] `npx tsc --noEmit` без помилок
- [ ] `npm run build` працює без помилок
- [ ] Протестовано в різних браузерах
- [ ] Протестовано на мобільних пристроях
- [ ] Оновлено документацію (якщо потрібно)
- [ ] Немає console.log у production коді
- [ ] Коміти мають зрозумілі повідомлення
- [ ] Немає TypeScript `any` типів без поважної причини

### Шаблон PR

```markdown
## Опис

Коротко опишіть зміни в цьому PR.

## Тип змін

- [ ] Виправлення бага
- [ ] Нова функція
- [ ] Критичні зміни
- [ ] Оновлення документації
- [ ] Оновлення типів TypeScript

## Пов'язані Issues

Closes #123

## Тестування

Опишіть, як тестували зміни.

## TypeScript

- [ ] Додано нові типи/інтерфейси
- [ ] Оновлено існуючі типи
- [ ] Всі типи коректні (перевірено з `npx tsc --noEmit`)

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

# Перевірка TypeScript типів
npx tsc --noEmit
```

### Написання тестів з TypeScript

```typescript
// src/components/Button/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";
import type { ButtonProps } from "./Button.types";

describe("Button Component", () => {
  const defaultProps: ButtonProps = {
    children: "Click me",
    onClick: jest.fn(),
  };

  it("renders button with text", () => {
    render(<Button {...defaultProps} />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button {...defaultProps} onClick={handleClick} />);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct variant class", () => {
    render(<Button {...defaultProps} variant="secondary" />);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("button--secondary");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByText("Click me");
    expect(button).toBeDisabled();
  });
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
- Допомагайте новачкам з TypeScript

---

## TypeScript Resources

### Корисні посилання

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Total TypeScript](https://www.totaltypescript.com/)

---

## Подяки

Всі контрибʼютори згадуються в релізних нотатках.

Дякуємо за ваш внесок у розвиток TypeScript екосистеми! 🎉
