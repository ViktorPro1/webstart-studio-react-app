import React from 'react';
import './CertificateGift.css';
import './CertificateGift.mobile.css';

const CertificateGift = () => {
    return (
        <section id="certificate-gift" className="certificate-gift-section">
            <div className="certificate-gift-container">
                <div className="certificate-image-wrapper">
                    <img
                        src="certificates/cert-targeting-canva.webp"
                        alt="Сертифікат-сувенір від WebStart Studio"
                        className="certificate-image"
                        loading="lazy"
                    />
                    <div className="certificate-badge">🎁 Сувенір</div>
                </div>
                <div className="certificate-content">
                    <h2 className="certificate-title">
                        Отримайте сертифікат-сувенір від Web<span style={{ color: '#8B0000' }}>Start</span> Studio
                    </h2>
                    <p className="certificate-description">
                        Переглянули наші безкоштовні мінікурси?
                        Ми з радістю надішлемо вам <strong>персоналізований сертифікат</strong> як знак вдячності за вашу увагу! 💙💛
                    </p>

                    <p className="certificate-description">
                        Це приємна пам'ятка, якою можна поділитися у соцмережах або додати до портфоліо.
                    </p>
                    <div className="certificate-cta-buttons">
                        <a
                            href="https://t.me/Viktor_freelancer_recruiting_pit"
                            target="_blank"
                            rel="noreferrer"
                            className="certificate-btn certificate-btn-primary"
                        >
                            💬 Написати у Telegram
                        </a>
                        <a
                            href="viber://chat?number=+380661391932"
                            className="certificate-btn certificate-btn-secondary"
                        >
                            📱 Написати у Viber
                        </a>
                    </div>
                    <p className="certificate-note">
                        <em>* Безкоштовно. Просто напишіть своє ім'я та який курс переглянули!</em>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertificateGift;
