import React from 'react';
import './About.css';
import './About.mobile.css';

const About = () => {
  return (
    <>
      <div className="about-page">
        <section className="about-section">
          <h2 className="about-centered">Про нас</h2>

          <p className="about-centered">
            Web<span style={{ color: '#B00000' }}>Start</span> Studio — це невелика творча команда, яка працює для того,
            щоб у кожної людини була своя сучасна онлайн-візитка. Ми робимо прості та зрозумілі лендінги, портфоліо та резюме, які
            легко сприймаються і добре виглядають на будь-якому пристрої.
          </p>

          <p className="about-centered">
            Наш підхід — "менше слів, більше результату": компактний дизайн, зрозуміла структура, зручний доступ до
            всієї потрібної інформації. Ми прагнемо, щоб кожен лендінг, портфоліо та резюме був водночас красивим і практичним.
          </p>

          <p className="about-centered">
            Крім того, ми допомагаємо людям просувати свої послуги та продукти у соцмережах, налаштовуємо рекламу
            та створюємо прості, але ефективні візуальні матеріали.
          </p>

          <div className="about-history-section">
            <h2 className="about-centered">Історія платформи</h2>
            <p className="about-centered">
              Ідея Web<span style={{ color: '#B00000' }}>Start</span> Studio народилася з бажання зробити запуск у
              digital-простір доступним для кожного. У 2025 році ми вирішили об'єднати досвід веброзробки, дизайну та маркетингу в одну просту платформу.
            </p>
            <p className="about-centered">
              Наш перший проєкт був створений для знайомих, які потребували швидкого сайту для презентації своїх справ. Він
              виявився настільки успішним, що надихнув нас рухатися далі.
            </p>
            <p className="about-centered">
              Сьогодні ми зростаємо разом із нововведеннями в світі ІТ, приймаючи нові виклики та постійно шукаючи свіжі ідеї, щоб
              зробити онлайн-простір ще цікавішим і ближчим для кожного.
            </p>
          </div>

          <div className="about-team-section">
            <h2 className="about-centered">Наша команда</h2>
            <div className="about-team-container">
              <div className="about-team-member">
                <img
                  src="nasha_komanda/member1.webp"
                  alt="Dima Sviy - Веб-розробник та UI/UX дизайнер"
                  loading="lazy"
                />
                <h3>Dima Sviy</h3>
                <p>Майбутній веброзробник та UI/UX дизайнер, продовжує навчання</p>
                <a href="https://www.facebook.com/dima.sviy/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>

              <div className="about-team-member">
                <img
                  src="nasha_komanda/member2.webp"
                  alt="Mr. Victor - маркетолог та таргетинг Facebook/Instagram"
                  loading="lazy"
                />
                <h3>Mr. Victor</h3>
                <p>Маркетолог, таргетинг Facebook/Instagram.</p>
                <a href="https://www.facebook.com/VictorAbroadPro/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>

              <div className="about-team-member">
                <img
                  src="nasha_komanda/assistant.webp"
                  alt="Асистент Djon - ваш гід та помічник на платформі"
                  loading="lazy"
                />
                <h3>Гід та Асистент Djon</h3>
                <p>Допомагає орієнтуватися на сайті, підказує потрібну інформацію та направляє до спеціалістів.</p>
                <a href="/assistant">Деталі</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;


