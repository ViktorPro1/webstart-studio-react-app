import React from "react";
import "./WhatIsWordPress.css";
import "./WhatIsWordPress.mobile.css";

const WhatIsWordPress: React.FC = () => {
  return (
    <div className="wp-page">
      <div className="wp-hero">
        <div className="wp-hero__badge">WordPress</div>
        <h1 className="wp-hero__title">Що таке WordPress?</h1>
        <p className="wp-hero__subtitle">
          Пояснюємо просто — без технічного жаргону
        </p>
      </div>

      <div className="wp-container">
        {/* Головне пояснення */}
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">🏠</div>
          <h2 className="wp-card__title">Уявіть собі будинок</h2>
          <p className="wp-card__text">
            WordPress — це як готовий фундамент і стіни для вашого сайту. Ви не
            будуєте все з нуля — ви обираєте дизайн, розставляєте меблі
            (контент) і живете в ньому. Все інше вже зроблено за вас.
          </p>
        </section>

        {/* Що це насправді */}
        <section className="wp-section">
          <h2 className="wp-section__title">Простими словами</h2>
          <div className="wp-cards-grid">
            <div className="wp-card">
              <div className="wp-card__icon">📝</div>
              <h3 className="wp-card__title">Система управління сайтом</h3>
              <p className="wp-card__text">
                WordPress дозволяє вам самостійно додавати статті, фото, товари
                — без знання програмування. Зайшли в панель, написали, натиснули
                "Опублікувати".
              </p>
            </div>
            <div className="wp-card">
              <div className="wp-card__icon">🌍</div>
              <h3 className="wp-card__title">
                Найпопулярніша платформа у світі
              </h3>
              <p className="wp-card__text">
                Кожен третій сайт у світі працює на WordPress. Це не нова
                технологія — вона перевірена роками і мільйонами користувачів.
              </p>
            </div>
            <div className="wp-card">
              <div className="wp-card__icon">🔌</div>
              <h3 className="wp-card__title">Плагіни — це як додатки</h3>
              <p className="wp-card__text">
                Хочете магазин? Встановіть плагін. Хочете форму зворотного
                зв'язку? Ще один плагін. Як App Store, тільки для сайту.
              </p>
            </div>
          </div>
        </section>

        {/* Аналогія */}
        <section className="wp-section wp-analogy">
          <h2 className="wp-section__title">Ще одна зрозуміла аналогія</h2>
          <div className="wp-analogy__grid">
            <div className="wp-analogy__item">
              <span className="wp-analogy__emoji">📱</span>
              <div>
                <strong>Смартфон</strong> — це як WordPress-сайт.
                <br />
                Базова система є, але ви самі встановлюєте потрібні додатки.
              </div>
            </div>
            <div className="wp-analogy__divider">VS</div>
            <div className="wp-analogy__item">
              <span className="wp-analogy__emoji">📟</span>
              <div>
                <strong>Кнопковий телефон</strong> — це як звичайний лендінг.
                <br />
                Робить одну річ, але робить її добре і без зайвого.
              </div>
            </div>
          </div>
        </section>

        {/* Що можна зробити */}
        <section className="wp-section">
          <h2 className="wp-section__title">Що можна зробити на WordPress?</h2>
          <ul className="wp-list">
            <li className="wp-list__item">
              <span className="wp-list__dot">✅</span>
              <span>
                Блог або новинний сайт — публікуєте статті коли хочете
              </span>
            </li>
            <li className="wp-list__item">
              <span className="wp-list__dot">✅</span>
              <span>Інтернет-магазин — продаєте товари онлайн</span>
            </li>
            <li className="wp-list__item">
              <span className="wp-list__dot">✅</span>
              <span>Корпоративний сайт — сторінка вашої компанії</span>
            </li>
            <li className="wp-list__item">
              <span className="wp-list__dot">✅</span>
              <span>Портфоліо — показуєте свої роботи</span>
            </li>
            <li className="wp-list__item">
              <span className="wp-list__dot">✅</span>
              <span>Освітній сайт — курси, уроки, матеріали</span>
            </li>
          </ul>
        </section>

        {/* Важливо */}
        <section className="wp-section wp-card wp-card--warning">
          <div className="wp-card__icon">⚠️</div>
          <h2 className="wp-card__title">Важливо знати одразу</h2>
          <p className="wp-card__text">
            WordPress — це{" "}
            <strong>не безкоштовне рішення в довгостроковій перспективі</strong>
            . Для роботи сайту потрібен хостинг (місце де живе сайт) і домен
            (ваша адреса в інтернеті). Це щомісячні або щорічні витрати.
            Детальніше — в розділі "Серверна частина".
          </p>
        </section>
      </div>
    </div>
  );
};

export default WhatIsWordPress;
