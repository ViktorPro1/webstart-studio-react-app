import React from "react";
import SEO from '../../SEO/SEO';
import { MessageCircle, Send, Facebook, Linkedin } from 'lucide-react';
import './Social.css';
import './Social.mobile.css';

type SharePlatform = "facebook" | "telegram" | "messenger" | "viber" | "linkedin";

const Social: React.FC = () => {
  const share = (platform: SharePlatform): void => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Перегляньте цю платформу!");

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "telegram":
        shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
        break;
      case "messenger":
        shareUrl = `fb-messenger://share?link=${url}`;
        break;
      case "viber":
        shareUrl = `viber://forward?text=${text}%20${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <>
      <SEO 
        title="Соціальні мережі"
        description="Підписуйтесь на нас у соцмережах"
        keywords="соцмережі, telegram, viber, facebook, instagram"
      />
      <div className="socials">
        <h3>Ми в соцмережах</h3>
        
        {/* Основні соцмережі */}
        <ul className="social-list">
          <li>
            <a href="https://t.me/webstartstudio" target="_blank" rel="noopener noreferrer" className="telegram">
              <Send size={24} />
              <span>Telegram</span>
            </a>
          </li>
          <li>
            <a href="viber://chat?number=%2B380..." target="_blank" rel="noopener noreferrer" className="viber">
              <MessageCircle size={24} />
              <span>Viber</span>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/webstartstudio" target="_blank" rel="noopener noreferrer" className="facebook">
              <Facebook size={24} />
              <span>Facebook</span>
            </a>
          </li>
          <li>
            <a href="https://wa.me/380..." target="_blank" rel="noopener noreferrer" className="whatsapp">
              <MessageCircle size={24} />
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>

        {/* Підписки */}
        <ul className="social-subscribe">
          <li>
            <a href="https://instagram.com/webstartstudio" target="_blank" rel="noopener noreferrer" className="instagram-subscribe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Підписатися в Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com/@webstartstudio" target="_blank" rel="noopener noreferrer" className="tiktok-subscribe">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
              <span>Підписатися в TikTok</span>
            </a>
          </li>
        </ul>

        {/* Поділитися */}
        <div className="share-platform">
          <h3>Розкажіть про нашу платформу</h3>
          <div className="share-buttons">
            <button className="share-btn" onClick={() => share('facebook')}>
              <Facebook size={32} />
              <span>Facebook</span>
            </button>
            <button className="share-btn" onClick={() => share('telegram')}>
              <Send size={32} />
              <span>Telegram</span>
            </button>
            <button className="share-btn" onClick={() => share('messenger')}>
              <MessageCircle size={32} />
              <span>Messenger</span>
            </button>
            <button className="share-btn" onClick={() => share('viber')}>
              <MessageCircle size={32} />
              <span>Viber</span>
            </button>
            <button className="share-btn" onClick={() => share('linkedin')}>
              <Linkedin size={32} />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;