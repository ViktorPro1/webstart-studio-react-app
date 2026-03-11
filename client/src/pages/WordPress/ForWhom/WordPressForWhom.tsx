import React, { useState } from "react";
import "./WordPressForWhom.css";
import "./WordPressForWhom.mobile.css";

const personas = [
  {
    emoji: "🛍",
    title: "Власник магазину",
    description:
      "Хочете продавати товари онлайн? WordPress з плагіном WooCommerce — одне з найпопулярніших рішень для інтернет-магазину. Можна додавати товари, приймати оплату, керувати замовленнями.",
    fits: true,
  },
  {
    emoji: "✍️",
    title: "Блогер або журналіст",
    description:
      "Пишете статті, ведете рубрику, публікуєте новини? WordPress створювався саме як платформа для блогів. Зручний редактор, категорії, теги — все є з коробки.",
    fits: true,
  },
  {
    emoji: "🏢",
    title: "Власник бізнесу",
    description:
      "Потрібен повноцінний корпоративний сайт з кількома сторінками, формами, описом послуг? WordPress дозволяє створити і підтримувати такий сайт без програміста.",
    fits: true,
  },
  {
    emoji: "🎓",
    title: "Освітній проєкт",
    description:
      "Курси, уроки, навчальні матеріали? Плагіни типу LearnDash або Tutor LMS перетворять WordPress на повноцінну освітню платформу.",
    fits: true,
  },
  {
    emoji: "🎯",
    title: "Одна рекламна акція",
    description:
      "Проводите акцію, захід або рекламуєте один продукт? WordPress надмірний для цього. Краще підійде простий лендінг — швидко, дешево, ефективно.",
    fits: false,
  },
  {
    emoji: "👨‍💼",
    title: "Пошук роботи",
    description:
      "Шукаєте першу роботу або замовника? Резюме-сайт буде більш доречним. WordPress для цього — це як орати город екскаватором.",
    fits: false,
  },
];

const WordPressForWhom: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "fits" | "notfits">("all");

  const filtered = personas.filter((p) => {
    if (filter === "fits") return p.fits;
    if (filter === "notfits") return !p.fits;
    return true;
  });

  return (
    <div className="wp-page">
      <div className="wp-hero wp-hero--orange">
        <div className="wp-hero__badge">Аудиторія</div>
        <h1 className="wp-hero__title">Для кого підходить WordPress?</h1>
        <p className="wp-hero__subtitle">
          Не для всіх — і це нормально. Розберемось разом
        </p>
      </div>

      <div className="wp-container">
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">🎯</div>
          <h2 className="wp-card__title">WordPress — це не для всіх</h2>
          <p className="wp-card__text">
            WordPress чудовий інструмент, але тільки коли він підходить до
            задачі. Нижче — чесний список хто виграє від WordPress, а кому краще
            обрати щось простіше.
          </p>
        </section>

        {/* Фільтр */}
        <section className="wp-section">
          <div className="wp-filter">
            <button
              className={`wp-filter__btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Всі варіанти
            </button>
            <button
              className={`wp-filter__btn wp-filter__btn--yes ${filter === "fits" ? "active" : ""}`}
              onClick={() => setFilter("fits")}
            >
              ✅ Підходить
            </button>
            <button
              className={`wp-filter__btn wp-filter__btn--no ${filter === "notfits" ? "active" : ""}`}
              onClick={() => setFilter("notfits")}
            >
              ❌ Не підходить
            </button>
          </div>

          <div className="wp-persona-grid">
            {filtered.map((p, i) => (
              <div
                key={i}
                className={`wp-persona ${p.fits ? "wp-persona--fits" : "wp-persona--not"}`}
              >
                <div className="wp-persona__top">
                  <span className="wp-persona__emoji">{p.emoji}</span>
                  <span
                    className={`wp-persona__badge ${p.fits ? "wp-persona__badge--yes" : "wp-persona__badge--no"}`}
                  >
                    {p.fits ? "✅ Підходить" : "❌ Краще інше"}
                  </span>
                </div>
                <h3 className="wp-persona__title">{p.title}</h3>
                <p className="wp-persona__text">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Підказка */}
        <section className="wp-section wp-card wp-card--warning">
          <div className="wp-card__icon">🤔</div>
          <h2 className="wp-card__title">Не впевнені що обрати?</h2>
          <p className="wp-card__text">
            Напишіть нам — ми безкоштовно проконсультуємо і підберемо рішення
            саме під вашу задачу. Інколи лендінг за 3 дні вирішує те, на що
            WordPress потребує 3 тижні.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WordPressForWhom;
