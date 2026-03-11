import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./WordPressFAQ.css";
import "./WordPressFAQ.mobile.css";

const faqs = [
  {
    q: "WordPress — це безкоштовно?",
    a: "Сам WordPress як програма — так, безкоштовний. Але для роботи сайту потрібен хостинг і домен — а це вже щомісячні/щорічні витрати. Думайте про це як про безкоштовний рецепт, але за інгредієнти все одно платити.",
  },
  {
    q: "Чи зможу я сам оновлювати сайт без програміста?",
    a: "Так — саме для цього і створений WordPress. Ви заходите в адмін-панель (звичайний браузер), натискаєте 'Додати запис' або 'Редагувати сторінку', пишете текст як у Word, і натискаєте 'Опублікувати'. Без коду.",
  },
  {
    q: "Що буде якщо я не заплачу за хостинг?",
    a: "Сайт просто перестане відкриватися. Хостинг-провайдер зазвичай дає 7-14 днів на оплату, після — сайт вимикається. Дані зберігаються ще якийсь час, але сайт недоступний.",
  },
  {
    q: "Чи можна перенести сайт з WordPress на інший хостинг?",
    a: "Так, це стандартна процедура. WordPress дозволяє зробити повний бекап (резервну копію) і відновити його на іншому хостингу. Ми можемо допомогти з цим.",
  },
  {
    q: "WordPress і wordpress.com — це одне і те саме?",
    a: "Ні! WordPress.com — це хостинг-сервіс від творців WordPress, де є свої обмеження і свої тарифи. WordPress.org — це безкоштовна програма, яку встановлюєте на будь-який хостинг самі. Ми працюємо з wordpress.org.",
  },
  {
    q: "Чи може WordPress зламати хакер?",
    a: "Будь-який сайт може бути атакований — це реальність інтернету. WordPress популярний, тому є ціллю. Але з правильними налаштуваннями і плагіном безпеки (наприклад Wordfence) ризик мінімальний. Ми завжди налаштовуємо базовий захист.",
  },
  {
    q: "Скільки часу займає зробити WordPress-сайт?",
    a: "Залежить від складності. Простий сайт з готовою темою — 1-2 тижні. Інтернет-магазин з індивідуальним дизайном — 4-8 тижнів. Лендінг для порівняння — 3-7 днів.",
  },
  {
    q: "Чи потрібно регулярно щось оновлювати?",
    a: "Так. WordPress, теми і плагіни виходять оновлення — їх треба встановлювати. Зазвичай це кнопка 'Оновити' в адмін-панелі. Якщо ігнорувати довго — можуть бути проблеми з безпекою або сумісністю. Раз на місяць — достатньо.",
  },
  {
    q: "Ви робите супровід WordPress-сайтів?",
    a: "Так, ми можемо взяти сайт на технічний супровід: оновлення, бекапи, дрібні правки. Це обговорюється окремо після розробки.",
  },
];

const WordPressFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="wp-page">
      <div className="wp-hero wp-hero--purple">
        <div className="wp-hero__badge">FAQ</div>
        <h1 className="wp-hero__title">Часті питання про WordPress</h1>
        <p className="wp-hero__subtitle">
          Відповідаємо чесно — без рекламних обіцянок
        </p>
      </div>

      <div className="wp-container">
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">💬</div>
          <h2 className="wp-card__title">Не знайшли відповіді?</h2>
          <p className="wp-card__text">
            Напишіть нам напряму — у чаті або через контакти. Ми відповімо
            протягом доби і підберемо рішення саме для вас.
          </p>
        </section>

        <section className="wp-section">
          <h2 className="wp-section__title">Питання і відповіді</h2>
          <div className="wp-faq-list">
            {faqs.map((item, i) => (
              <div
                key={i}
                className={`wp-faq-item ${openIndex === i ? "wp-faq-item--open" : ""}`}
              >
                <div
                  className="wp-faq-item__question"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="wp-faq-item__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="wp-faq-item__text">{item.q}</span>
                  <span className="wp-faq-item__icon">
                    {openIndex === i ? "▲" : "▼"}
                  </span>
                </div>
                {openIndex === i && (
                  <div className="wp-faq-item__answer">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="wp-section wp-cta">
          <h2 className="wp-cta__title">Готові обговорити ваш проєкт?</h2>
          <p className="wp-cta__text">
            Розкажіть нам про вашу ідею — ми підберемо найкраще рішення:
            WordPress, лендінг чи щось інше.
          </p>
          <div className="wp-cta__buttons">
            <Link to="/contact" className="wp-btn wp-btn--primary">
              📩 Написати нам
            </Link>
            <Link to="/messages" className="wp-btn wp-btn--secondary">
              💬 Відкрити чат
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WordPressFAQ;
