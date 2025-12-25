import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// ----------------------
// Chunk load fallback
// ----------------------
window.addEventListener('error', (e: ErrorEvent) => {
  if (/Loading chunk \d+ failed/.test(e.message)) {
    console.log('Chunk load failed, перезавантаження сторінки...');
    window.location.reload();
  }
});

// ----------------------
// Root rendering з перевіркою
// ----------------------
const container = document.getElementById('root');
if (container != null) {
  const root = ReactDOM.createRoot(container); // ✅ Тепер TypeScript знає, що container не null
  
  root.render(
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  );
} else {
  console.error('Root element не знайдено!');
}

// ----------------------
// Service Worker
// ----------------------
if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    const swUrl = '/service-worker.js';

    navigator.serviceWorker.register(swUrl)
      .then(registration => {
        console.log('Service Worker зареєстровано:', registration);

        if (registration.waiting) {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        }

        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('Нова версія доступна!');
                newWorker.postMessage({ type: 'SKIP_WAITING' });
              }
            });
          }
        });
      })
      .catch(err => console.error('SW помилка:', err));

    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
  });
}
