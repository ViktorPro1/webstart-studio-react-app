import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);


// Реєстрація Service Worker для PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((reg) => console.log('Service Worker зареєстровано:', reg))
      .catch((err) => console.log('Помилка реєстрації SW:', err));
  });
}