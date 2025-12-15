import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, Moon, Check } from 'lucide-react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './Header.css';
import './Header.mobile.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useContext(ThemeContext); // беремо тему з контексту

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`header ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="header-left">
        <button className="burger-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="search-bar">
          <Search size={20} color="#667eea" />
          <input type="text" placeholder={t('header.search')} />
        </div>
      </div>

      <div className="header-right">
        {/* Селектор мови */}
        <select
          value={i18n.language}
          onChange={(e) => changeLanguage(e.target.value)}
          className="language-selector"
        >
          <option value="ua">🇺🇦 UA</option>
          <option value="en">🇬🇧 EN</option>
          <option value="pl">🇵🇱 PL</option>
          <option value="cs">🇨🇿 CS</option>
          <option value="fr">🇫🇷 FR</option>
          <option value="de">🇩🇪 DE</option>
        </select>

        <button className="header-btn">{t('header.orderProject')}</button>

        {/* Поки закоментував даний блок і видалив з імпорту - User, */}
        {/* <div className="user-icon">
          <User size={20} />
        </div> */}

        {/* Кнопка перемикання теми */}
        <button className="header-theme-btn" onClick={toggleTheme}>
          {darkMode ? <Check size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
