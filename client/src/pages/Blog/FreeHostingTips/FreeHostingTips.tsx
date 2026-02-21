import React from "react";
import { Link } from "react-router-dom";
import "./FreeHostingTips.css";
import "./FreeHostingTips.mobile.css";

const FreeHostingTips = () => {
  const services = [
    {
      name: "Netlify",
      desc: "Швидке розгортання та інтеграція з GitHub",
      link: "https://www.netlify.com/",
    },
    {
      name: "Vercel",
      desc: "Оптимально для React та Next.js",
      link: "https://vercel.com/",
    },
    {
      name: "GitHub Pages",
      desc: "Простий статичний хостинг",
      link: "https://pages.github.com/",
    },
    {
      name: "Render",
      desc: "Безкоштовні плани для простих проектів",
      link: "https://render.com/",
    },
  ];

  return (
    <div className="FreeHostingTips">
      <header className="FreeHostingTips-header">
        <h1 className="FreeHostingTips-h1">
          🌐 Розміщуйте проекти безкоштовно у 2026 році
        </h1>
      </header>

      <article className="FreeHostingTips-article">
        <h2 className="FreeHostingTips-h2">Вступ</h2>
        <p className="FreeHostingTips-p">
          Багато початківців бояться запускати проекти через платні плани
          хостингу. Насправді є безкоштовні сервіси, які дозволяють тестувати та
          запускати проекти без фінансових ризиків. Головне — пробувати і
          експериментувати.
        </p>

        <h2 className="FreeHostingTips-h2">
          Популярні сервіси з безкоштовними планами
        </h2>
        <div className="FreeHostingTips-services">
          {services.map((service, idx) => (
            <a
              key={idx}
              className="FreeHostingTips-service-card"
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="FreeHostingTips-service-name">{service.name}</h3>
              <p className="FreeHostingTips-service-desc">{service.desc}</p>
            </a>
          ))}
        </div>

        <h2 className="FreeHostingTips-h2">Поради для початку</h2>
        <ul className="FreeHostingTips-ul">
          <li className="FreeHostingTips-li">
            Починайте з простих проектів та безкоштовних планів.
          </li>
          <li className="FreeHostingTips-li">
            Тестуйте всі функції та можливості сервісу.
          </li>
          <li className="FreeHostingTips-li">
            Зберігайте досвід: пізніше легше буде перейти на платні плани.
          </li>
          <li className="FreeHostingTips-li">
            Не бійтеся експериментувати з дизайном та функціоналом.
          </li>
        </ul>

        {/* Новий блок пояснення щодо готових проектів */}
        <div className="FreeHostingTips-note">
          <h3 className="FreeHostingTips-note-title">
            Що важливо знати про готові проекти
          </h3>
          <p className="FreeHostingTips-note-text">
            Коли ми надсилаємо вам готовий проект у ZIP-папці (портфоліо, резюме
            або лендінг), часто виникає питання: «А чи треба ще платити за
            розміщення?» Відповідь — ні, ви можете розмістити його безкоштовно
            на популярних сервісах хостингу, таких як Netlify, Vercel, GitHub
            Pages чи Render.
          </p>
        </div>

        {/* CTA */}
        <div className="FreeHostingTips-cta">
          <h3 className="FreeHostingTips-cta-text">
            Готові запустити свій проект?
          </h3>
          <p className="FreeHostingTips-cta-note">
            Всі наші проекти можна відразу розмістити безкоштовно на хостингах,
            про які ми розповіли вище.
          </p>
          <Link className="FreeHostingTips-cta-btn" to="/briefs">
            Отримати проект 🚀
          </Link>
        </div>

        <h2 className="FreeHostingTips-h2">Висновок</h2>
        <p className="FreeHostingTips-p">
          Безкоштовні сервіси дозволяють навчатися, тестувати і запускати
          проекти без фінансових ризиків. Не чекайте, починайте прямо зараз!
        </p>
      </article>
    </div>
  );
};

export default FreeHostingTips;
