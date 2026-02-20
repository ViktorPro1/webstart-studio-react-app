import React, { useEffect, useState, useCallback } from 'react';
import './UpdateNotification.css';

interface ServiceWorkerRegistration {
  waiting?: ServiceWorker;
}

declare global {
  interface WindowEventMap {
    'swUpdate': CustomEvent<ServiceWorkerRegistration>;
  }
}

const UpdateNotification: React.FC = () => {
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  const handleSWUpdate = useCallback((event: CustomEvent<ServiceWorkerRegistration>) => {
    setRegistration(event.detail);
    setShowUpdate(true);
  }, []);

  useEffect(() => {
    window.addEventListener('swUpdate', handleSWUpdate as EventListener);

    return () => {
      window.removeEventListener('swUpdate', handleSWUpdate as EventListener);
    };
  }, [handleSWUpdate]);

  const handleUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    } else {
      window.location.reload();
    }
  };

  const handleDismiss = () => {
    setShowUpdate(false);
  };

  if (!showUpdate) return null;

  return (
    <div className="update-notification">
      <div className="update-notification-content">
        <div className="update-icon">🚀</div>
        <div className="update-text">
          <h3>Доступне оновлення!</h3>
          <p>Нова версія сайту готова. Оновіть для кращого досвіду.</p>
        </div>
        <div className="update-actions">
          <button onClick={handleUpdate} className="btn-update">
            Оновити зараз
          </button>
          <button onClick={handleDismiss} className="btn-dismiss">
            Пізніше
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNotification;
