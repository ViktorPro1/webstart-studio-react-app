import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 👈 ДОДАЙ ЦЕЙ ІМПОРТ
import CookieSettings from './CookieSettings';
import './CookieConsent.css';

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        const settings = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true
        };
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setIsVisible(false);
    };

    const handleReject = () => {
        const settings = {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false
        };
        localStorage.setItem('cookieConsent', 'rejected');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setIsVisible(false);
    };

    const handleManage = () => {
        setShowSettings(true);
    };

    const handleSaveSettings = (settings) => {
        localStorage.setItem('cookieConsent', 'custom');
        localStorage.setItem('cookieSettings', JSON.stringify(settings));
        setShowSettings(false);
        setIsVisible(false);
    };

    const handleCloseSettings = () => {
        setShowSettings(false);
    };

    if (showSettings) {
        return <CookieSettings onSave={handleSaveSettings} onClose={handleCloseSettings} />;
    }

    if (!isVisible) return null;

    return (
        <>
            <div className="cookie-overlay" />

            <div className="cookie-modal">
                <div className="cookie-container">
                    <div className="cookie-content">
                        <div className="cookie-icon">
                            <div className="info-circle">
                                <span className="info-text">i</span>
                            </div>
                        </div>

                        <div className="cookie-body">
                            <p className="cookie-text">
                                Ми використовуємо необов'язкові файли cookie, щоб удосконалювати наші веб-сайти,
                                наприклад через зв'язки із соцмережами, і показувати персоналізовану рекламу залежно
                                від ваших дій в Інтернеті. Якщо ви відхилите необов'язкові файли cookie,
                                використовуватимуться лише файли cookie, необхідні для надання вам послуг.
                                Ви можете змінити свій вибір, натиснувши 'Керування файлами cookie' в нижній частині
                                сторінки.{' '}
                                {/* 👇 ЗАМІНЕНО <a> на <Link> */}
                                <Link to="/legal/privacy-policy" className="cookie-link">
                                    Декларація про конфіденційність
                                </Link>
                                {' '}
                                <Link to="/legal/third-party-cookies" className="cookie-link">
                                    Сторонні файли cookie
                                </Link>
                            </p>

                            <div className="cookie-buttons">
                                <button onClick={handleAccept} className="cookie-btn">
                                    Прийняти
                                </button>

                                <button onClick={handleReject} className="cookie-btn">
                                    Відхилити
                                </button>

                                <button onClick={handleManage} className="cookie-btn">
                                    Керування файлами cookie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}