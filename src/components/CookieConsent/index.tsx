import { useState } from 'react';
import { Link } from 'react-router-dom';
import CookieSettings, { type CookieSettingsState } from './CookieSettings';
import './CookieConsent.css';

export default function CookieConsent() {
  // Тільки виправлення ініціалізації стейту, без useEffect
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      return !consent;
    }
    return false;
  });

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const handleAccept = () => {
    const settings: CookieSettingsState = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setIsVisible(false);
  };

  const handleReject = () => {
    const settings: CookieSettingsState = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    localStorage.setItem('cookieConsent', 'rejected');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setIsVisible(false);
  };

  const handleManage = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = (settings: CookieSettingsState) => {
    localStorage.setItem('cookieConsent', 'custom');
    localStorage.setItem('cookieSettings', JSON.stringify(settings));
    setShowSettings(false);
    setIsVisible(false);
  };

  const handleCloseSettings = () => {
    setShowSettings(false);
  };

  if (showSettings) {
    return (
      <CookieSettings
        onSave={handleSaveSettings}
        onClose={handleCloseSettings}
      />
    );
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
                Ви можете змінити свій вибір, натиснувши &quot;Керування файлами cookie&quot; в нижній частині
                сторінки.{' '}
                <Link to="/legal/privacy-policy" className="cookie-link">
                  Декларація про конфіденційність
                </Link>{' '}
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