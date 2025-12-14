import { useState } from 'react';
import './CookieConsent.css';

export default function CookieSettings({ onSave, onClose }) {
    const [settings, setSettings] = useState({
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false
    });

    const handleToggle = (key) => {
        if (key === 'necessary') return; // Необхідні cookie завжди ввімкнені

        setSettings(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true
        };
        onSave(allAccepted);
    };

    const handleSave = () => {
        onSave(settings);
    };

    return (
        <>
            <div className="cookie-overlay" onClick={onClose} />

            <div className="cookie-settings-modal">
                <div className="cookie-settings-container">
                    <div className="cookie-settings-header">
                        <h2 className="cookie-settings-title">Налаштування файлів cookie</h2>
                        <button onClick={onClose} className="cookie-close-btn">✕</button>
                    </div>

                    <div className="cookie-settings-content">
                        <p className="cookie-settings-description">
                            Ми використовуємо файли cookie для покращення вашого досвіду.
                            Ви можете обрати, які типи cookie ви хочете дозволити.
                        </p>

                        {/* Необхідні cookie */}
                        <div className="cookie-category">
                            <div className="cookie-category-header">
                                <div className="cookie-category-info">
                                    <h3 className="cookie-category-title">Необхідні cookie</h3>
                                    <p className="cookie-category-desc">
                                        Ці файли cookie необхідні для роботи сайту і не можуть бути вимкнені.
                                    </p>
                                </div>
                                <label className="cookie-toggle disabled">
                                    <input
                                        type="checkbox"
                                        checked={settings.necessary}
                                        disabled
                                    />
                                    <span className="cookie-toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        {/* Аналітичні cookie */}
                        <div className="cookie-category">
                            <div className="cookie-category-header">
                                <div className="cookie-category-info">
                                    <h3 className="cookie-category-title">Аналітичні cookie</h3>
                                    <p className="cookie-category-desc">
                                        Допомагають нам зрозуміти, як відвідувачі взаємодіють з сайтом.
                                    </p>
                                </div>
                                <label className="cookie-toggle">
                                    <input
                                        type="checkbox"
                                        checked={settings.analytics}
                                        onChange={() => handleToggle('analytics')}
                                    />
                                    <span className="cookie-toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        {/* Маркетингові cookie */}
                        <div className="cookie-category">
                            <div className="cookie-category-header">
                                <div className="cookie-category-info">
                                    <h3 className="cookie-category-title">Маркетингові cookie</h3>
                                    <p className="cookie-category-desc">
                                        Використовуються для показу персоналізованої реклами.
                                    </p>
                                </div>
                                <label className="cookie-toggle">
                                    <input
                                        type="checkbox"
                                        checked={settings.marketing}
                                        onChange={() => handleToggle('marketing')}
                                    />
                                    <span className="cookie-toggle-slider"></span>
                                </label>
                            </div>
                        </div>

                        {/* Налаштування cookie */}
                        <div className="cookie-category">
                            <div className="cookie-category-header">
                                <div className="cookie-category-info">
                                    <h3 className="cookie-category-title">Налаштування cookie</h3>
                                    <p className="cookie-category-desc">
                                        Зберігають ваші уподобання, такі як мова та регіон.
                                    </p>
                                </div>
                                <label className="cookie-toggle">
                                    <input
                                        type="checkbox"
                                        checked={settings.preferences}
                                        onChange={() => handleToggle('preferences')}
                                    />
                                    <span className="cookie-toggle-slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="cookie-settings-footer">
                        <button onClick={handleSave} className="cookie-settings-btn primary">
                            Зберегти налаштування
                        </button>
                        <button onClick={handleAcceptAll} className="cookie-settings-btn secondary">
                            Прийняти всі
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}