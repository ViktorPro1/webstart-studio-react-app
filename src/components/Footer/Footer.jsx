import React from 'react';
import { Facebook, Send, } from 'lucide-react';
import { SiViber } from 'react-icons/si';
import './Footer.css';
import './Footer.mobile.css';

const Footer = ({ isSidebarOpen }) => {
  return (
    <footer className={`footer ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="footer-content">
        <div className="footer-text">
          <p>
            © 2025 Web<span className="highlight-footer">Start</span> Studio.
          </p>
          <p className="footer-subtitle">Створюємо веб-рішення для вашого успіху</p>
        </div>

        <div className="social-links">
          <a
            href="https://t.me/+IleSiwteF2NlOWVi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Відкрити наш Telegram канал у новому вікні"
            className="social-link telegram"
          >
            <Send size={20} />
          </a>

          <a
            href="https://invite.viber.com/?g2=AQB%2FfR4KvKip91SwMbV0bYMLZbEbchx7bj7gNYwkp7xEy3eZ8%2BIvyHL9YpqymDtE"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Відкрити нашу Viber спільноту у новому вікні"
            className="social-link viber"
          >
            <SiViber size={20} color="white" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61575866647011"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Відвідати нашу сторінку на Facebook у новому вікні"
            className="social-link facebook"
          >
            <Facebook size={20} />
          </a>

          {/* WhatsApp SVG */}
          <a
            href="https://chat.whatsapp.com/H5Mz1CTwCwDJAXvyhPKUka"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Відкрити нашу WhatsApp групу у новому вікні"
            className="social-link whatsapp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.932 11.932 0 0012 0C5.373 0 0 5.373 0 12a11.9 11.9 0 001.71 6.05L0 24l5.95-1.7A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.21-3.48-8.52zm-8.52 17c-2.2 0-4.2-.58-5.95-1.58l-.42-.25-3.54 1.01 1.01-3.54-.26-.42A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10 2.66 0 5.16 1.04 7.05 2.93A9.937 9.937 0 0122 12c0 5.52-4.48 10-10 10zm5.2-7.77c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.16.19-.32.21-.6.07-.28-.14-1.18-.43-2.24-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.04-.35-.02-.49-.06-.14-.64-1.54-.88-2.12-.23-.55-.47-.47-.64-.48-.16-.01-.35-.01-.54-.01s-.49.07-.75.35c-.26.28-1 1.02-1 2.48s1.03 2.87 1.17 3.07c.14.19 2.02 3.09 4.9 4.33.68.29 1.21.46 1.62.59.68.21 1.3.18 1.79.11.55-.08 1.66-.68 1.9-1.33.23-.64.23-1.19.16-1.33-.08-.14-.27-.23-.55-.37z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



