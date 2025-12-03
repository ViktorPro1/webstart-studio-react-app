import React from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import './Header.css';
import './Header.mobile.css';

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <header className={`header ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="header-left">
        <button className="burger-menu" onClick={toggleSidebar}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="search-bar">
          <Search size={20} color="#667eea" />
          <input type="text" placeholder="Пошук..." />
        </div>
      </div>
      <div className="header-right">
        <button className="header-btn">Замовити проект</button>
        <div className="user-icon">
          <User size={20} />
        </div>
      </div>
    </header>
  );
};

export default Header;