import React from "react";
import { FaFacebookF, FaTelegramPlane, FaFacebookMessenger, FaViber, FaLinkedinIn } from 'react-icons/fa';
import "./Social.css";
import "./Social.mobile.css";

const Social = () => {
    const share = (platform) => {
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
            {/* Соцмережі */}
            <section id="social" className="socials">
                <h3>Ми в соцмережах</h3>
                <ul className="social-list">
                    <li><a href="https://t.me/+IleSiwteF2NlOWVi" target="_blank" className="telegram" rel="noopener noreferrer">Telegram</a></li>
                    <li><a href="https://invite.viber.com/?g2=AQB%2FfR4KvKip91SwMbV0bYMLZbEbchx7bj7gNYwkp7xEy3eZ8%2BIvyHL9YpqymDtE" target="_blank" className="viber" rel="noopener noreferrer">Viber</a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=61575866647011" target="_blank" className="facebook" rel="noopener noreferrer">Facebook</a></li>
                    <li><a href="https://chat.whatsapp.com/H5Mz1CTwCwDJAXvyhPKUka" target="_blank" className="whatsapp" rel="noopener noreferrer">WhatsApp</a></li>
                </ul>

                <ul className="social-subscribe">
                    <li><a href="https://www.instagram.com/freelancer_pit_frontend?igsh=dHJrc3BhcHU5bXp6" target="_blank" rel="noreferrer" className="instagram-subscribe">Підписатися в Instagram</a></li>
                    <li><a href="https://www.tiktok.com/@freelancer_pit_frontend?_t=ZM-8zdhuJlVwCU&_r=1" target="_blank" rel="noreferrer" className="tiktok-subscribe">Підписатися в TikTok</a></li>
                </ul>
            </section>

            {/* Поділитися платформою */}
            <section className="share-platform">
                <h3>Розкажіть про нашу платформу у своїх соцмережах</h3>
                <div className="share-buttons">
                    <button className="share-btn facebook" style={{ color: '#3b5998' }} onClick={() => share('facebook')}>
                        <FaFacebookF size={24} /> Facebook
                    </button>
                    <button className="share-btn telegram" style={{ color: '#0088cc' }} onClick={() => share('telegram')}>
                        <FaTelegramPlane size={24} /> Telegram
                    </button>
                    <button className="share-btn messenger" style={{ color: '#0084ff' }} onClick={() => share('messenger')}>
                        <FaFacebookMessenger size={24} /> Messenger
                    </button>
                    <button className="share-btn viber" style={{ color: '#7360f2' }} onClick={() => share('viber')}>
                        <FaViber size={24} /> Viber
                    </button>
                    <button className="share-btn linkedin" style={{ color: '#0077b5' }} onClick={() => share('linkedin')}>
                        <FaLinkedinIn size={24} /> LinkedIn
                    </button>

                </div>



            </section>
        </>
    );
};

export default Social;
