import React from "react";
import { Cpu, CheckCircle, XCircle } from "lucide-react";
import "./WhenNeeded.css";

const WhenNeeded: React.FC = () => {
  const needsBackend = [
    {
      emoji: "🔐",
      title: "Є реєстрація і особистий кабінет",
      desc: "Якщо користувачі логіняться — потрібен бекенд для перевірки і зберігання даних",
    },
    {
      emoji: "🛒",
      title: "Інтернет-магазин з замовленнями",
      desc: "Кошик, оплата, статус замовлення — все це вимагає серверної логіки",
    },
    {
      emoji: "💬",
      title: "Форма зворотного зв'язку або чат",
      desc: "Повідомлення потрібно зберігати і надсилати — без бекенду не обійтись",
    },
    {
      emoji: "📊",
      title: "Адмін-панель або дашборд",
      desc: "Якщо потрібно керувати контентом, переглядати статистику — потрібен сервер",
    },
    {
      emoji: "🔗",
      title: "Інтеграція з платіжними системами",
      desc: "Stripe, LiqPay, PayPal — всі вони працюють через серверні запити",
    },
    {
      emoji: "📱",
      title: "Мобільний застосунок + сайт разом",
      desc: "Бекенд виступає спільним API для і сайту, і мобільного додатку",
    },
  ];

  const noBackendNeeded = [
    {
      emoji: "🖼",
      title: "Проста лендінг-сторінка",
      desc: "Якщо сайт тільки показує інформацію і не зберігає нічого — бекенд не потрібен",
    },
    {
      emoji: "📄",
      title: "Портфоліо або резюме",
      desc: "Статичний сайт-візитка відмінно живе без сервера",
    },
    {
      emoji: "📝",
      title: "Блог на статичному генераторі",
      desc: "Gatsby, Next.js (static) — публікуєш статті через файли, без БД",
    },
  ];

  return (
    <div className="when-needed">
      <div className="wn-hero">
        <div className="wn-hero-icon">
          <Cpu size={40} />
        </div>
        <h1 className="wn-title">Коли сайту потрібен бекенд?</h1>
        <p className="wn-subtitle">
          Не кожному сайту потрібен сервер — розбираємось коли так, а коли ні
        </p>
      </div>

      <div className="wn-content">
        <section className="wn-section">
          <h2 className="wn-section-title">
            <CheckCircle size={20} className="wn-icon-yes" />
            Бекенд потрібен, якщо...
          </h2>
          <div className="wn-cards">
            {needsBackend.map((item, i) => (
              <div className="wn-card wn-card-yes" key={i}>
                <span className="wn-card-emoji">{item.emoji}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="wn-section">
          <h2 className="wn-section-title">
            <XCircle size={20} className="wn-icon-no" />
            Бекенд НЕ потрібен, якщо...
          </h2>
          <div className="wn-cards">
            {noBackendNeeded.map((item, i) => (
              <div className="wn-card wn-card-no" key={i}>
                <span className="wn-card-emoji">{item.emoji}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="wn-section">
          <h2 className="wn-section-title">🤔 Не впевнені — запитайте нас</h2>
          <div className="wn-cta-box">
            <p>
              Якщо Ви не знаєте чи потрібен бекенд для вашого проєкту — ми
              безкоштовно проконсультуємо і підберемо оптимальне рішення. Іноді
              простий лендінг вирішує завдання без жодного сервера.
            </p>
            <div className="wn-cta-badges">
              <span className="wn-badge">💬 Безкоштовна консультація</span>
              <span className="wn-badge">⚡ Відповідь за 24 години</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhenNeeded;
