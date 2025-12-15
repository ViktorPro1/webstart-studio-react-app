import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Search, Moon, Check } from 'lucide-react';
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

  return (
    <header className={`header ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="header-left">
        <button className="burger-menu" onClick={toggleSidebar}>
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

        {/* Кнопка переходу на контакти */}
        <button className="header-btn" onClick={goToContact}>
          {t('header.orderProject')}
        </button>

        {/* Кнопка перемикання теми */}
        <button className="header-theme-btn" onClick={toggleTheme}>
          {darkMode ? <Check size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;

