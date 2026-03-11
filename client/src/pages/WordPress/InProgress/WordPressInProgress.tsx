import React from "react";
import { Link } from "react-router-dom";
import "./WordPressInProgress.css";
import "./WordPressInProgress.mobile.css";

const steps = [
  {
    emoji: "📚",
    title: "Проходимо курси",
    text: "Команда активно вивчає WordPress — від базового налаштування до розробки кастомних тем і плагінів. Вивчаємо як правильно структурувати сайт, налаштовувати SEO, підключати плагіни та забезпечувати безпеку.",
    status: "В процесі",
    color: "#f39c12",
  },
  {
    emoji: "🧪",
    title: "Тестуємо проєкти",
    text: "Паралельно з навчанням ми збираємо тестові сайти, перевіряємо різні теми, плагіни та конфігурації хостингів. Кожен тестовий проєкт — це крок до того, щоб впевнено братись за реальні завдання.",
    status: "В процесі",
    color: "#f39c12",
  },
  {
    emoji: "🔍",
    title: "Вивчаємо ринок",
    text: "Аналізуємо що потрібно користувачам, які типи WordPress-сайтів найзатребуваніші і як правильно формувати підхід до розробки. Порівнюємо рішення, вивчаємо досвід інших студій і формуємо власний стиль роботи.",
    status: "Виконано",
    color: "#2ecc71",
  },
  {
    emoji: "🚀",
    title: "Запуск послуги",
    text: "Після завершення навчання і тестування — офіційно відкриємо WordPress-розробку як повноцінну послугу з прикладами робіт, чіткими умовами співпраці та прозорою вартістю.",
    status: "Скоро",
    color: "#6c63ff",
  },
];

const WordPressInProgress: React.FC = () => {
  return (
    <div className="wp-page">
      <div className="wp-hero wp-hero--dark">
        <div className="wp-hero__badge">Статус</div>
        <h1 className="wp-hero__title">Ми в процесі 🛠</h1>
        <p className="wp-hero__subtitle">
          Чесно про те, де ми зараз знаходимось з WordPress
        </p>
      </div>

      <div className="wp-container">
        {/* Головне повідомлення */}
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">💬</div>
          <h2 className="wp-card__title">Чому ми говоримо про це відкрито?</h2>
          <p className="wp-card__text">
            Ми не хочемо обіцяти те, чого ще не вміємо на достатньому рівні.
            WordPress — це серйозний інструмент, і ми підходимо до нього
            відповідально. Зараз ми навчаємось, тестуємо і готуємось — щоб коли
            прийде ваш запит, зробити його якісно і без зайвих помилок. Вважаємо
            що чесність важливіша за гарні обіцянки.
          </p>
        </section>

        {/* Кроки */}
        <section className="wp-section">
          <h2 className="wp-section__title">Де ми зараз?</h2>
          <div className="wip-steps">
            {steps.map((step, i) => (
              <div key={i} className="wip-step">
                <div className="wip-step__left">
                  <span className="wip-step__emoji">{step.emoji}</span>
                  <div className="wip-step__line"></div>
                </div>
                <div className="wip-step__body">
                  <div className="wip-step__top">
                    <h3 className="wip-step__title">{step.title}</h3>
                    <span
                      className="wip-step__badge"
                      style={{
                        background: step.color + "22",
                        color: step.color,
                        border: `1px solid ${step.color}44`,
                      }}
                    >
                      {step.status}
                    </span>
                  </div>
                  <p className="wip-step__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Що можна зробити вже зараз */}
        <section className="wp-section wp-card wp-card--warning">
          <div className="wp-card__icon">🤝</div>
          <h2 className="wp-card__title">Що можна зробити вже зараз?</h2>
          <p className="wp-card__text">
            Якщо вам цікавий WordPress-сайт — напишіть нам. Ми занесемо вас у
            список перших користувачів, проконсультуємо безкоштовно і
            запропонуємо особливі умови співпраці за те, що ви довіряєте нам на
            старті. Ваш запит не загубиться — ми зв'яжемось щойно будемо готові
            братись за WordPress-проєкти.
          </p>
        </section>

        {/* Поки що пропонуємо */}
        <section className="wp-section">
          <h2 className="wp-section__title">Поки що ми вже вміємо</h2>
          <p className="wip-services-desc">
            Поки WordPress-напрямок у розробці — ми вже успішно реалізовуємо
            інші типи лендінгів-сайтів. Можливо саме один з них підійде для
            вашої задачі.
          </p>
          <div className="wip-services">
            <Link to="/templates/landing" className="wip-service">
              <span className="wip-service__emoji">🎯</span>
              <div>
                <div className="wip-service__title">Лендінг</div>
                <div className="wip-service__sub">
                  Односторінковий сайт для реклами послуги або продукту
                </div>
              </div>
              <span className="wip-service__arrow">→</span>
            </Link>
            <Link to="/templates/portfolio" className="wip-service">
              <span className="wip-service__emoji">🖼</span>
              <div>
                <div className="wip-service__title">Портфоліо</div>
                <div className="wip-service__sub">
                  Особистий сайт для демонстрації робіт і досвіду
                </div>
              </div>
              <span className="wip-service__arrow">→</span>
            </Link>
            <Link to="/templates/resume" className="wip-service">
              <span className="wip-service__emoji">📄</span>
              <div>
                <div className="wip-service__title">Резюме-сайт</div>
                <div className="wip-service__sub">
                  Онлайн-резюме для пошуку роботи або замовників
                </div>
              </div>
              <span className="wip-service__arrow">→</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="wp-section wp-cta">
          <h2 className="wp-cta__title">Залишити запит на WordPress?</h2>
          <p className="wp-cta__text">
            Запишемо вас першими серед користувачів і зв'яжемось щойно будемо
            готові. Жодного спаму — тільки повідомлення про старт продукту.
          </p>
          <div className="wp-cta__buttons">
            <Link to="/contact" className="wp-btn wp-btn--primary">
              📩 Залишити запит
            </Link>
            <Link to="/messages" className="wp-btn wp-btn--secondary">
              💬 Поговорити в чаті
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WordPressInProgress;
