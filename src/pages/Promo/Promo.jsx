import React, { useState, useEffect } from 'react';
import SEO from '../../SEO/SEO';
import { Zap } from 'lucide-react';
import './Promo.css';
import './Promo.mobile.css';

const Promo = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isEnded, setIsEnded] = useState(false);

    useEffect(() => {
        const deadline = new Date(2025, 10, 30, 23, 59, 59);

        const updateCountdown = () => {
            const diff = deadline - new Date();

            if (diff <= 0) {
                setIsEnded(true);
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <SEO
                title="🔥 Чорна П'ятниця - Знижки до 50%"
                description="Акція Чорна П'ятниця! Знижки до 50% на резюме, портфоліо та лендінги. Подарунок кожному учаснику!"
                keywords="чорна п'ятниця, акція, знижки, резюме, портфоліо, лендінг, веб-дизайн"
            />

            <div className="promo-page">
                <section className="promo">
                    <div className="promo-container">
                        <div className="promo-icon">
                            <Zap size={60} />
                        </div>

                        <h2>🔥 Чорна П'ятниця: <br />час оновити себе і свій бренд</h2>

                        <p className="promo-date"><strong>14.11 — 30.11</strong></p>

                        <p className="promo-intro">💸 Знижки до –50% на ключові пропозиції, які працюють на вас:</p>

                        <div className="promo-offers">
                            <p>📄 <strong>Резюме та CV</strong> — сильна структура, сучасний вигляд.</p>
                            <p>📁 <strong>Портфоліо</strong> — професійна подача вашого досвіду.</p>
                            <p>🌐 <strong>Лендінги</strong> — дизайн + текст, що продає.</p>
                        </div>

                        <div className="promo-gift">
                            <p>🎁 Подарунок кожному <strong>учаснику, який звернеться до нас</strong>:</p>
                            <p>✨ Соцбанер із QR-кодом у бренд-стилі — для постів, сторіс і реклами.</p>
                        </div>

                        <div className="countdown">
                            {isEnded ? (
                                <span className="countdown-ended">Час вийшов!</span>
                            ) : (
                                <span>
                                    До кінця акції: {timeLeft.days}д {timeLeft.hours}г {timeLeft.minutes}хв {timeLeft.seconds}сек
                                </span>
                            )}
                        </div>

                        <a
                            href="https://t.me/Viktor_freelancer_recruiting_pit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="promo-btn"
                        >
                            Скористатися пропозицією
                        </a>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Promo;