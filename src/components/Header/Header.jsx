import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, Moon, Check, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { searchIndex } from '../../data/searchIndex';
import './Header.css';
import './Header.mobile.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [showPortalPopup, setShowPortalPopup] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleSearch = (e) => {
    if (e.key !== 'Enter') return;
    const value = query.trim().toLowerCase();
    if (!value) return;
    const result = searchIndex.find((item) =>
      item.label.toLowerCase().includes(value)
    );
    if (result) {
      navigate(result.path);
      setQuery('');
    }
  };

  const goToContact = () => {
    navigate('/contact');
  };

  const togglePortalPopup = () => {
    setShowPortalPopup(!showPortalPopup);
  };

  const handleOrderProject = () => {
    setShowPortalPopup(false);
    navigate('/briefs');
  };

  const handleContactUs = () => {
    setShowPortalPopup(false);
    navigate('/contact');
  };

  return (
    <>
      <header className={`header ${isSidebarOpen ? '' : 'full-width'}`}>
        <div className="header-left">
          <button
            className="burger-menu"
            onClick={toggleSidebar}
            aria-label={isSidebarOpen ? t('header.closeMenu') : t('header.openMenu')}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="search-bar">
            <Search size={20} color="#667eea" />
            <input
              type="text"
              placeholder={t('header.search')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="header-right">
          <select
            value={i18n.language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="language-selector"
            aria-label={t('header.selectLanguage')}
          >
            <option value="ua">🇺🇦 UA</option>
            <option value="en">🇬🇧 EN</option>
            <option value="pl">🇵🇱 PL</option>
            <option value="cs">🇨🇿 CS</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="de">🇩🇪 DE</option>
          </select>

          <button className="header-btn" onClick={goToContact}>
            {t('header.orderProject')}
          </button>

          {/* Іконка особистого кабінету */}
          <button
            className="header-theme-btn"
            onClick={togglePortalPopup}
            aria-label="Особистий кабінет"
            style={{ position: 'relative' }}
          >
            <User size={20} />
          </button>

          <button
            className="header-theme-btn"
            onClick={toggleTheme}
            aria-label={darkMode ? t('header.switchToLight') : t('header.switchToDark')}
          >
            {darkMode ? <Check size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Popup особистого кабінету */}
      {showPortalPopup && (
        <>
          <div
            className="portal-popup-overlay"
            onClick={() => setShowPortalPopup(false)}
          ></div>
          <div className="portal-popup">
            <button
              className="portal-popup-close"
              onClick={() => setShowPortalPopup(false)}
              aria-label="Закрити"
            >
              <X size={20} />
            </button>

            <div className="portal-popup-content">
              <div className="portal-popup-icon">
                <User size={40} />
              </div>

              <h2 className="portal-popup-title">🔐 Особистий кабінет</h2>

              <div className="portal-popup-section">
                <h3>Вже з нами?</h3>
                <p>Шукай посилання у своїх повідомленнях — ми надсилали!</p>
              </div>

              <div className="portal-popup-section">
                <h3>Тільки плануєш сайт?</h3>
                <p>Після оформлення ти зможеш:</p>
                <ul className="portal-popup-features">
                  <li>✅ Дивитись прогрес в реальному часі</li>
                  <li>✅ Скачувати файли</li>
                  <li>✅ Бачити всі етапи</li>
                </ul>
              </div>

              <div className="portal-popup-buttons">
                <button
                  className="portal-popup-btn primary"
                  onClick={handleOrderProject}
                >
                  🚀 Замовити
                </button>
                <button
                  className="portal-popup-btn secondary"
                  onClick={handleContactUs}
                >
                  💬 Написати нам
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;