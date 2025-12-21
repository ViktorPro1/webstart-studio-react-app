import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import promoConfig from '../../config/promoConfig';
import './PromoPopup.css';
import './PromoPopup.mobile.css';

const PromoPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0
    });

    useEffect(() => {
        // Перевірка чи акція активна
        const now = new Date();
        if (!promoConfig.isActive || now < promoConfig.startDate || now > promoConfig.endDate) {
            return;
        }

        // Перевірка чи вже показували попап в цій сесії
        const popupShown = sessionStorage.getItem('promoPopupShown');
        if (popupShown) {
            return;
        }

        // Показуємо попап через 5 секунди
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        const updateCountdown = () => {
            const diff = promoConfig.endDate - new Date();

            if (diff <= 0) {
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

            setTimeLeft({ days, hours });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 60000);

        return () => clearInterval(interval);
    }, [isVisible]);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('promoPopupShown', 'true');
    };

    if (!isVisible) return null;

    return (
        <div className="promo-popup-compact">
            <button className="promo-popup-close-compact" onClick={handleClose} aria-label="Закрити акційне вікно">
                <X size={20} />
            </button>

            <Link
                to="/promo"
                className="promo-popup-circle"
                onClick={handleClose}
            >
                <div className="promo-popup-content">
                    <div className="promo-popup-emoji">🎆</div>
                    <div className="promo-popup-title">Відкрий 2026</div>
                    <div className="promo-popup-subtitle">{promoConfig.popup.subtitle}</div>
                    <div className="promo-popup-validity">
                        ⏰ {timeLeft.days} дн {timeLeft.hours} год
                    </div>
                    <div className="promo-popup-hand">👆</div>
                </div>
                <div className="promo-popup-decoration"></div>
            </Link>
        </div>
    );
};

export default PromoPopup;