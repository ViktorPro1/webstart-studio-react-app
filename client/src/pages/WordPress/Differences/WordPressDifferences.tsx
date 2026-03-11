import React, { useState } from "react";
import "./WordPressDifferences.css";
import "./WordPressDifferences.mobile.css";

const tabs = [
  { id: "landing", label: "🎯 Лендінг", emoji: "🎯" },
  { id: "portfolio", label: "🖼 Портфоліо", emoji: "🖼" },
  { id: "resume", label: "📄 Резюме", emoji: "📄" },
];

const comparisons: Record<
  string,
  { param: string; other: string; wp: string }[]
> = {
  landing: [
    {
      param: "Мета",
      other: "Одна дія: купити, записатись, зв'язатись",
      wp: "Може мати кілька цілей і десятки сторінок",
    },
    {
      param: "Обсяг",
      other: "Одна сторінка",
      wp: "Необмежена кількість сторінок",
    },
    {
      param: "Хостинг",
      other: "Netlify — безкоштовно",
      wp: "Платний хостинг щомісяця",
    },
    {
      param: "Оновлення",
      other: "Через код або нас",
      wp: "Самостійно через зручну панель",
    },
    {
      param: "Швидкість",
      other: "Дуже швидкий",
      wp: "Залежить від плагінів та хостингу",
    },
    {
      param: "Підходить для",
      other: "Акція, продукт, захід",
      wp: "Бізнес з постійним оновленням контенту",
    },
  ],
  portfolio: [
    {
      param: "Мета",
      other: "Показати роботи",
      wp: "Показати роботи + блог + магазин",
    },
    {
      param: "Обсяг",
      other: "Фіксований набір секцій",
      wp: "Розширюється як завгодно",
    },
    {
      param: "Хостинг",
      other: "Netlify — безкоштовно",
      wp: "Платний хостинг щомісяця",
    },
    {
      param: "Оновлення",
      other: "Через нас або код",
      wp: "Самостійно без програмування",
    },
    {
      param: "Домен",
      other: "Можна безкоштовний піддомен",
      wp: "Потрібен платний домен",
    },
    {
      param: "Підходить для",
      other: "Фрілансер, дизайнер, фотограф",
      wp: "Агенція, студія з великим контентом",
    },
  ],
  resume: [
    {
      param: "Мета",
      other: "Знайти роботу / замовника",
      wp: "Персональний бренд + блог + резюме",
    },
    { param: "Обсяг", other: "Одна сторінка", wp: "Повноцінний сайт" },
    {
      param: "Хостинг",
      other: "Netlify — безкоштовно",
      wp: "Платний хостинг щомісяця",
    },
    {
      param: "Складність",
      other: "Готово за день",
      wp: "Потребує налаштування і часу",
    },
    {
      param: "Підтримка",
      other: "Мінімальна",
      wp: "Регулярні оновлення плагінів/теми",
    },
    {
      param: "Підходить для",
      other: "Пошук роботи, нетворкінг",
      wp: "Публічна особа, блогер, експерт",
    },
  ],
};

const WordPressDifferences: React.FC = () => {
  const [activeTab, setActiveTab] = useState("landing");

  return (
    <div className="wp-page">
      <div className="wp-hero wp-hero--green">
        <div className="wp-hero__badge">Порівняння</div>
        <h1 className="wp-hero__title">Чим відрізняється WordPress?</h1>
        <p className="wp-hero__subtitle">
          Порівнюємо з тим, що ми вже робимо — чесно і зрозуміло
        </p>
      </div>

      <div className="wp-container">
        {/* Головна думка */}
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">💡</div>
          <h2 className="wp-card__title">Головна різниця — одним реченням</h2>
          <p className="wp-card__text">
            Лендінг, резюме і портфоліо — це <strong>готовий продукт</strong>,
            який ми зробили і здали. WordPress — це <strong>платформа</strong>,
            якою ви керуєте самі щодня. Різні інструменти для різних задач.
          </p>
        </section>

        {/* Таблиця порівняння */}
        <section className="wp-section">
          <h2 className="wp-section__title">Детальне порівняння</h2>

          <div className="wp-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`wp-tab ${activeTab === tab.id ? "wp-tab--active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="wp-table">
            <div className="wp-table__header">
              <div className="wp-table__cell wp-table__cell--param">
                Параметр
              </div>
              <div className="wp-table__cell wp-table__cell--other">
                {tabs.find((t) => t.id === activeTab)?.label} від WebStart
              </div>
              <div className="wp-table__cell wp-table__cell--wp">
                🌐 WordPress
              </div>
            </div>
            {comparisons[activeTab].map((row, i) => (
              <div
                key={i}
                className={`wp-table__row ${i % 2 === 0 ? "wp-table__row--even" : ""}`}
              >
                <div className="wp-table__cell wp-table__cell--param">
                  <strong>{row.param}</strong>
                </div>
                <div className="wp-table__cell">{row.other}</div>
                <div className="wp-table__cell wp-table__cell--wp-val">
                  {row.wp}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Висновок */}
        <section className="wp-section">
          <h2 className="wp-section__title">Коли що обирати?</h2>
          <div className="wp-cards-grid">
            <div className="wp-card">
              <div className="wp-card__icon">⚡</div>
              <h3 className="wp-card__title">
                Обирайте лендінг / резюме / портфоліо
              </h3>
              <p className="wp-card__text">
                Якщо потрібно швидко, недорого, і контент змінюється рідко.
                Ідеально для старту або конкретної задачі.
              </p>
            </div>
            <div className="wp-card">
              <div className="wp-card__icon">🚀</div>
              <h3 className="wp-card__title">Обирайте WordPress</h3>
              <p className="wp-card__text">
                Якщо плануєте блог, магазин, або сайт з великою кількістю
                сторінок, які ви хочете оновлювати самостійно.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WordPressDifferences;
