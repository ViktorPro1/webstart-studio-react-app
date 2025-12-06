import React, { useState, useEffect, useRef, useCallback } from 'react';
import SEO from '../../SEO/SEO';
import './Achievements.css';
import './Achievements.mobile.css';

// Виносимо stats за межі компонента
const stats = [
  {
    icon: '📊',
    target: 131,
    label: 'Проєктів',
    sublabel: 'виконано з 2025 року',
    progress: 75
  },
  {
    icon: '👥',
    target: 37,
    label: 'Учасників',
    sublabel: 'задоволених результатом',
    progress: 95
  },
  {
    icon: '⚡',
    target: 48,
    label: 'Годин',
    sublabel: 'середній час виконання',
    progress: 0
  },
  {
    icon: '🌍',
    target: 3,
    label: 'Країн',
    sublabel: 'звідки звертаються учасники',
    progress: 0
  },
  {
    icon: '⭐',
    target: 87,
    label: '% Успіху',
    sublabel: 'позитивних відгуків',
    progress: 98
  }
];

const Achievements = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const [counts, setCounts] = useState(stats.map(() => 0));

  const animateCounters = useCallback(() => {
    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;

    stats.forEach((stat, index) => {
      let frame = 0;
      const increment = stat.target / totalFrames;

      const timer = setInterval(() => {
        frame++;
        const currentValue = Math.min(Math.floor(increment * frame), stat.target);
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = currentValue;
          return newCounts;
        });

        if (frame >= totalFrames) {
          clearInterval(timer);
        }
      }, 1000 / fps);
    });
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          animateCounters();
        }
      });
    }, observerOptions);

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animated, animateCounters]);

  return (
    <>
      <SEO 
        title="Наші досягнення"
        description="Переглянь досягнення WebStart Studio — успішні кейси, реалізовані проєкти та результати співпраці з клієнтами"
        keywords="досягнення, WebStart Studio, портфоліо, веброзробка, кейси, проєкти"
      />
      
      <div className="achievements-page">
        <section 
          className="achievement-stats-section" 
          ref={sectionRef}
        >
          <h2 className="achievement-title">
            Наші <span className="achievement-highlight">досягнення</span>
          </h2>
          <p className="achievement-intro">
            Кожна цифра — це ваша довіра до нас. Ми пишаємося результатами
            та продовжуємо рости разом з вами! 🚀
          </p>

          <div className="achievement-stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`achievement-stat-card ${animated ? 'achievement-animated' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="achievement-stat-icon">{stat.icon}</span>
                <div className="achievement-stat-number">
                  {counts[index]}
                </div>
                <div className="achievement-stat-label">{stat.label}</div>
                <div className="achievement-stat-sublabel">{stat.sublabel}</div>
                
                {stat.progress > 0 && (
                  <div className="achievement-stat-progress">
                    <div 
                      className="achievement-stat-progress-bar"
                      style={{ 
                        width: animated ? `${stat.progress}%` : '0%',
                        transition: 'width 2s ease'
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Achievements;