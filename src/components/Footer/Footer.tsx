import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Send } from 'lucide-react';
import './Footer.css';
import './Footer.mobile.css';

interface FooterProps {
  isSidebarOpen: boolean;
}

const Footer: React.FC<FooterProps> = ({ isSidebarOpen }) => {
  const { t } = useTranslation();

  return (
    <footer className={`footer ${isSidebarOpen ? '' : 'full-width'}`}>
      <div className="footer-content">
        <div className="footer-text">
          <p>
            © 2025 Web<span className="highlight-footer">Start</span> Studio.
          </p>
          <p className="footer-subtitle">
            {t('footer.subtitle', {
              defaultValue: 'Створюємо веб-рішення для вашого успіху',
            })}
          </p>

          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">
              {t('footer.privacyPolicy', {
                defaultValue: 'Політика конфіденційності',
              })}
            </Link>
            <span className="footer-separator">|</span>
            <Link to="/terms-of-use" className="footer-link">
              {t('footer.termsOfUse', {
                defaultValue: 'Умови використання',
              })}
            </Link>
          </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
              style={{ minWidth: '20px', minHeight: '20px' }}
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 1.78.42 3.46 1.18 4.97L0 24l6.99-1.84C9.47 22.86 10.79 23.24 12 23.24c6.63 0 12-5.37 12-12S18.63 0 12 0zm5.47 15.11c-.42.21-2.38.95-2.75 1.07-.37.12-.62.09-.84-.12-.22-.21-.86 0-1.66.48-1.24.74-2.08 1.14-2.3 1.26-.22.12-.13.06-.24-.12-.11-.18-.5-.6-.94-1.22-2.69-3.78-4.1-6.12-4.2-6.44-.1-.32.05-.5.22-.66.17-.16.39-.48.58-.7.19-.22.24-.4.28-.6.04-.2-.02-.46-.14-.62-.6-.78-1.24-1.56-1.32-1.66-.08-.1-.14-.04-.2 0-.06 0-.15.08-.24.23-.09.15-.84 1.65-.84 1.65-.47.9-.72 1.93-.72 2.95 0 .98.35 2.09 1.01 3.36 1.02 1.93 2.58 3.35 4.48 4.37 1.82 1 3.53 1.38 4.27 1.55.74.17 1.36.1 1.85-.2.49-.3 1.32-1.17 1.5-1.3.18-.13.18-.2.12-.32-.06-.12-.27-.21-.54-.37z"/>
            </svg>
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
              style={{ minWidth: '20px', minHeight: '20px' }}
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

