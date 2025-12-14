import React, { useEffect, useState } from 'react';
import './UpdateNotification.css';

function UpdateNotification() {
    const [showUpdate, setShowUpdate] = useState(false);
    const [registration, setRegistration] = useState(null);

    useEffect(() => {
        const handleSWUpdate = (event) => {
            setRegistration(event.detail);
            setShowUpdate(true);
        };

        window.addEventListener('swUpdate', handleSWUpdate);

        return () => {
            window.removeEventListener('swUpdate', handleSWUpdate);
        };
    }, []);

    const handleUpdate = () => {
        if (registration && registration.waiting) {
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
}

export default UpdateNotification;