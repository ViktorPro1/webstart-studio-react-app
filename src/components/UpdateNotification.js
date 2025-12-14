import React, { useEffect, useState } from 'react';
import './UpdateNotification.css';

function UpdateNotification() {
    const [showUpdate, setShowUpdate] = useState(false);
    const [registration, setRegistration] = useState(null);

    useEffect(() => {
        // Перевіряємо чи є Service Worker
        if ('serviceWorker' in navigator) {
            // Отримуємо реєстрацію SW
            navigator.serviceWorker.ready.then(reg => {
                setRegistration(reg);

                // Слухаємо оновлення SW
                reg.addEventListener('updatefound', () => {
                    const newWorker = reg.installing;

                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // Нова версія доступна!
                            setShowUpdate(true);
                        }
                    });
                });
            });

            // Слухаємо повідомлення від SW
            navigator.serviceWorker.addEventListener('message', (event) => {
                if (event.data && event.data.type === 'UPDATE_AVAILABLE') {
                    setShowUpdate(true);
                }
            });

            // Перевірка оновлень кожні 60 секунд
            const interval = setInterval(() => {
                navigator.serviceWorker.getRegistration().then(reg => {
                    if (reg) reg.update();
                });
            }, 60000);

            return () => clearInterval(interval);
        }
    }, []);

    const handleUpdate = () => {
        if (registration && registration.waiting) {
            // Відправляємо повідомлення новому SW для активації
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });

            // Перезавантажуємо сторінку після активації
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                window.location.reload();
            });
        } else {
            // Якщо немає waiting worker - просто перезавантажуємо
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
}

export default UpdateNotification;