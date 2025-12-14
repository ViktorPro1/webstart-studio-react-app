import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// Service Worker
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    const event = new CustomEvent('swUpdate', { detail: registration });
    window.dispatchEvent(event);
  }
});
