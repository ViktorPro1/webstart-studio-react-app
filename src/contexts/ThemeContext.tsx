import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextValue {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  darkMode: false,
  // дефолтна реалізація, щоб не було undefined
  toggleTheme: () => {},
});

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

