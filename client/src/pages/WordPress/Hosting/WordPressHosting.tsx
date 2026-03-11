import React, { useState } from "react";
import "./WordPressHosting.css";
import "./WordPressHosting.mobile.css";

const costs = [
  {
    icon: "🏠",
    title: "Хостинг",
    what: "Це місце де «живе» ваш сайт. Як оренда квартири для сайту.",
    analogy:
      "Уявіть, що сайт — це меблі. Хостинг — це квартира, де ці меблі стоять. Без квартири меблі нема де поставити.",
    price: "від $3 до $15/місяць",
    examples: "Hostinger, SiteGround, Bluehost",
    isRecurring: true,
    color: "#6c63ff",
  },
  {
    icon: "🔤",
    title: "Домен",
    what: "Це ваша адреса в інтернеті. Наприклад: myshop.com або myblog.ua",
    analogy:
      "Як вулиця і номер будинку. Щоб люди могли знайти вашу «квартиру» (хостинг) — їм потрібна адреса (домен).",
    price: "від $10 до $20/рік",
    examples: "Namecheap, GoDaddy, або через хостинг-провайдера",
    isRecurring: true,
    color: "#2ecc71",
  },
  {
    icon: "🎨",
    title: "Тема (шаблон)",
    what: "Зовнішній вигляд вашого сайту. Як ремонт і дизайн інтер'єру.",
    analogy:
      "Є безкоштовні теми — як IKEA. Є преміум — як дизайнерський ремонт. Обидва варіанти робочі.",
    price: "Від $0 (безкоштовні) до $60 (разова оплата)",
    examples: "Astra, OceanWP, Divi, Hello Elementor",
    isRecurring: false,
    color: "#ff7a30",
  },
  {
    icon: "🔌",
    title: "Плагіни",
    what: "Додаткові функції: магазин, форми, SEO, безпека, кешування.",
    analogy:
      "Як додатки на смартфоні. Більшість безкоштовні, але деякі преміум-функції потребують підписки.",
    price: "Від $0 до $10-20/місяць (тільки якщо потрібні платні)",
    examples: "WooCommerce, Yoast SEO, Elementor, Wordfence",
    isRecurring: false,
    color: "#e74c3c",
  },
];

const WordPressHosting: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="wp-page">
      <div className="wp-hero wp-hero--teal">
        <div className="wp-hero__badge">Технічна сторона</div>
        <h1 className="wp-hero__title">Серверна частина WordPress</h1>
        <p className="wp-hero__subtitle">
          Хостинг, домен, теми — пояснюємо просто і чесно
        </p>
      </div>

      <div className="wp-container">
        {/* Головна відмінність від Netlify */}
        <section className="wp-section wp-card wp-card--warning">
          <div className="wp-card__icon">⚡</div>
          <h2 className="wp-card__title">
            Чому лендінг на Netlify — безкоштовно, а WordPress — ні?
          </h2>
          <p className="wp-card__text">
            Лендінги та резюме, які ми робимо — це статичні файли. Netlify
            просто роздає їх як файли з сервера, і це безкоштовно. WordPress —
            це <strong>програма, яка постійно працює на сервері</strong>,
            виконує код, звертається до бази даних. Такий сервер коштує грошей.
            Щомісяця.
          </p>
        </section>

        {/* Порівняння з Netlify */}
        <section className="wp-section">
          <h2 className="wp-section__title">Netlify vs WordPress-хостинг</h2>
          <div className="wp-compare">
            <div className="wp-compare__col wp-compare__col--netlify">
              <div className="wp-compare__header">⚡ Лендінг на Netlify</div>
              <ul className="wp-compare__list">
                <li>
                  ✅ Хостинг — <strong>безкоштовно</strong>
                </li>
                <li>✅ Домен — можна піддомен безкоштовно</li>
                <li>✅ Нема щомісячних витрат</li>
                <li>⚠️ Контент змінюємо через код</li>
                <li>⚠️ Одна або кілька сторінок</li>
              </ul>
            </div>
            <div className="wp-compare__col wp-compare__col--wp">
              <div className="wp-compare__header">🌐 WordPress-сайт</div>
              <ul className="wp-compare__list">
                <li>
                  💳 Хостинг — <strong>від $3/місяць</strong>
                </li>
                <li>💳 Домен — від $10/рік</li>
                <li>💳 Є щомісячні витрати</li>
                <li>✅ Контент змінюєте самі</li>
                <li>✅ Необмежена кількість сторінок</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Що саме потрібно купити */}
        <section className="wp-section">
          <h2 className="wp-section__title">
            Що саме потрібно і скільки це коштує?
          </h2>
          <div className="wp-costs">
            {costs.map((item, i) => (
              <div key={i} className="wp-cost-item">
                <div
                  className="wp-cost-item__header"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  style={{ borderLeft: `4px solid ${item.color}` }}
                >
                  <div className="wp-cost-item__left">
                    <span className="wp-cost-item__emoji">{item.icon}</span>
                    <div>
                      <div className="wp-cost-item__title">{item.title}</div>
                      <div className="wp-cost-item__price">{item.price}</div>
                    </div>
                  </div>
                  <div className="wp-cost-item__right">
                    {item.isRecurring && (
                      <span className="wp-badge wp-badge--recurring">
                        Регулярна оплата
                      </span>
                    )}
                    <span className="wp-cost-item__toggle">
                      {expanded === i ? "▲" : "▼"}
                    </span>
                  </div>
                </div>
                {expanded === i && (
                  <div className="wp-cost-item__body">
                    <p>
                      <strong>Що це:</strong> {item.what}
                    </p>
                    <div className="wp-analogy-box">
                      💡 <em>{item.analogy}</em>
                    </div>
                    <p>
                      <strong>Приклади сервісів:</strong> {item.examples}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Підсумок витрат */}
        <section className="wp-section wp-card wp-card--highlight">
          <div className="wp-card__icon">🧮</div>
          <h2 className="wp-card__title">
            Орієнтовний мінімальний бюджет на рік
          </h2>
          <div className="wp-budget">
            <div className="wp-budget__row">
              <span>🏠 Хостинг (12 місяців × $5)</span>
              <strong>~$60/рік</strong>
            </div>
            <div className="wp-budget__row">
              <span>🔤 Домен</span>
              <strong>~$15/рік</strong>
            </div>
            <div className="wp-budget__row">
              <span>🎨 Безкоштовна тема</span>
              <strong>$0</strong>
            </div>
            <div className="wp-budget__row wp-budget__row--total">
              <span>💰 Разом на рік (мінімум)</span>
              <strong>~$75/рік</strong>
            </div>
          </div>
          <p className="wp-card__text" style={{ marginTop: 12 }}>
            Це <strong>ваші витрати на інфраструктуру</strong> — окремо від
            вартості розробки. Оплата йде напряму провайдеру хостингу і домену,
            не нам.
          </p>
        </section>
      </div>
    </div>
  );
};

export default WordPressHosting;
