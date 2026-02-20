import React, { useState, useEffect } from 'react';
import SEO from '../../SEO/SEO';
import { Zap } from 'lucide-react';
import promoConfig from '../../config/promoConfig';
import './Promo.css';
import './Promo.mobile.css';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Promo: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEnded, setIsEnded] = useState<boolean>(false);

  useEffect(() => {
    const updateCountdown = () => {
      // Безпечне перетворення endDate в Date
      const endDate = new Date(promoConfig.endDate);
      const now = new Date();
      const diff = endDate.getTime() - now.getTime();

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
        title={promoConfig.seo.title}
        description={promoConfig.seo.description}
        keywords={promoConfig.seo.keywords}
      />

      <div className="promo-page">
        <section className="promo">
          <div className="promo-container">
            <div className="promo-icon">
              <Zap size={60} />
            </div>

            <h2>{promoConfig.title}</h2>

            <p className="promo-date"><strong>{promoConfig.dateRange}</strong></p>

            <p className="promo-intro">{promoConfig.intro}</p>

            <div className="promo-offers">
              {promoConfig.offers.map((offer, index) => (
                <p key={index}>
                  {offer.emoji} <strong>{offer.title}</strong> — {offer.description}
                </p>
              ))}
            </div>

            <div className="promo-gift">
              <p>{promoConfig.gift.intro}</p>
              <p>{promoConfig.gift.description}</p>
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
              href={promoConfig.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="promo-btn"
            >
              {promoConfig.ctaText}
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default Promo;

