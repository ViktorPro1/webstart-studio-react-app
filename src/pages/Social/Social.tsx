import React from "react";
import SEO from '../../SEO/SEO';
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
      <div className="social-page">
        {/* Соцмережі */}
        <section className="social-networks">
          <h2>Ми в соцмережах</h2>
          <div className="social-links">
            <a href="https://t.me/webstartstudio" target="_blank" rel="noopener noreferrer" className="social-link telegram">
              📱 Telegram
            </a>
            <a href="https://viber.com/webstartstudio" target="_blank" rel="noopener noreferrer" className="social-link viber">
              💬 Viber
            </a>
            <a href="https://facebook.com/webstartstudio" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              📘 Facebook
            </a>
            <a href="https://wa.me/380..." target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
              💚 WhatsApp
            </a>
          </div>
          <div className="social-subscribe">
            <a href="https://instagram.com/webstartstudio" target="_blank" rel="noopener noreferrer" className="subscribe-btn instagram">
              Підписатися в Instagram
            </a>
            <a href="https://tiktok.com/@webstartstudio" target="_blank" rel="noopener noreferrer" className="subscribe-btn tiktok">
              Підписатися в TikTok
            </a>
          </div>
        </section>

        {/* Поділитися платформою */}
        <section className="share-section">
          <h2>Розкажіть про нашу платформу у своїх соцмережах</h2>
          <div className="share-buttons">
            <button 
              className="share-btn facebook" 
              onClick={() => share('facebook')}
            >
              📘 Facebook
            </button>
            <button 
              className="share-btn telegram" 
              onClick={() => share('telegram')}
            >
              📱 Telegram
            </button>
            <button 
              className="share-btn messenger" 
              onClick={() => share('messenger')}
            >
              💬 Messenger
            </button>
            <button 
              className="share-btn viber" 
              onClick={() => share('viber')}
            >
              💚 Viber
            </button>
            <button 
              className="share-btn linkedin" 
              onClick={() => share('linkedin')}
            >
              💼 LinkedIn
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Social;
