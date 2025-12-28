import React from 'react';
import { Share2, RefreshCw, Smartphone, Radio } from 'lucide-react';
import './SocialMedia.css';
import './SocialMedia.mobile.css';

const SocialMedia = () => {
    return (
        <>

            <div className="social-media-page">
                <div className="social-media-container">
                    <div className="social-media-header">
                        <div className="social-media-icon-large">
                            <Share2 size={60} />
                        </div>
                        <h2>📱 Що таке інтеграція з соцмережами?</h2>
                    </div>

                    <p className="social-media-intro">
                        <strong>Інтеграція з соцмережами</strong> — це можливість автоматично публікувати
                        контент з вашого сайту на Facebook, Instagram або інших соціальних платформах.
                    </p>

                    <section className="social-media-features">
                        <h3>🌍 Як це працює?</h3>
                        <div className="features-grid">
                            <div className="feature-card">
                                <RefreshCw size={40} />
                                <p>Публікація новин та оновлень на вашому сайті на сторінках соцмереж</p>
                            </div>
                            <div className="feature-card">
                                <Smartphone size={40} />
                                <p>Додавання віджетів для відображення ваших постів на сайті</p>
                            </div>
                            <div className="feature-card">
                                <Radio size={40} />
                                <p>Автоматична синхронізація контенту між сайтом і соцмережами</p>
                            </div>
                        </div>
                    </section>

                    <section className="social-media-benefits">
                        <h3>💡 Навіщо це потрібно?</h3>
                        <ul>
                            <li>✅ Для збільшення вашої онлайн-присутності</li>
                            <li>✅ Для підвищення взаємодії з вашими підписниками</li>
                            <li>✅ Для легкого управління контентом через єдиний інтерфейс</li>
                        </ul>
                    </section>

                    <section className="social-media-summary">
                        <h3>🌟 Простими словами:</h3>
                        <p>
                            <strong>Інтеграція з соцмережами</strong> дозволяє зручно поширювати ваш контент
                            на різних платформах, що сприяє кращому охопленню аудиторії.
                        </p>
                    </section>
                </div>
            </div>
        </>
    );
};

export default SocialMedia;