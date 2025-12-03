import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import './Footer.css';
import './Footer.mobile.css';

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer className={`footer ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="footer-content">
        <div className="footer-text">
          <p>© 2025 WebStart Studio. Всі права захищені.</p>
          <p className="footer-subtitle">Створюємо веб-рішення для вашого успіху</p>
        </div>
 <div className="social-links">
  <button className="social-link" aria-label="Facebook">
    <Facebook size={20} />
  </button>
  <button className="social-link" aria-label="Instagram">
    <Instagram size={20} />
  </button>
  <button className="social-link" aria-label="LinkedIn">
    <Linkedin size={20} />
  </button>
  <button className="social-link" aria-label="Twitter">
    <Twitter size={20} />
  </button>
</div>

      </div>
    </footer>
  );
};

export default Footer;