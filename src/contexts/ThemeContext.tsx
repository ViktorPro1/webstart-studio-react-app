/**
 * ThemeContext.tsx
 * 
 * Контекст темної/світлої теми для React.
 * 
 * ThemeContext:
 * - darkMode: поточна тема (true = темна, false = світла)
 * - toggleTheme: функція для перемикання теми
 * 
 * ThemeProvider:
 * - Обгортає компонентну структуру і надає доступ до теми через контекст
 * - При зміні darkMode автоматично додає/видаляє клас 'dark-theme' на body
 */


import React, { createContext, useState, useEffect, type ReactNode } from 'react';

interface ThemeContextValue {
  darkMode: boolean;
  toggleTheme: () => void;
}

// Прибираємо export звідси, щоб не сварився react-refresh
const ThemeContext = createContext<ThemeContextValue>({
  darkMode: false,
  toggleTheme: () => {},
});

// Експортуємо сам контекст окремо в кінці, або використовуй цей експорт
export { ThemeContext };

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!document.body) return;

    document.body.classList.toggle('dark-theme', darkMode);
  }, [darkMode]);

  const toggleTheme = (): void => {
    setDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
