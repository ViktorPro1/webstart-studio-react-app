import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Реєструємо Service Worker
// serviceWorkerRegistration.register({
//   onUpdate: (registration) => {
//     // Коли є оновлення - диспатчимо подію
//     const event = new CustomEvent('swUpdate', { detail: registration });
//     window.dispatchEvent(event);
//   }
// });