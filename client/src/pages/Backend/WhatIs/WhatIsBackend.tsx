import React from "react";
import { Server, ArrowRight, Eye, EyeOff, Cpu, Globe } from "lucide-react";
import "./WhatIsBackend.css";
import "./WhatIsBackend.mobile.css";

const WhatIsBackend: React.FC = () => {
  return (
    <div className="what-is-backend">
      <div className="wib-hero">
        <div className="wib-hero-icon">
          <Server size={40} />
        </div>
        <h1 className="wib-title">Що таке бекенд?</h1>
        <p className="wib-subtitle">Пояснюємо просто — без зайвих термінів</p>
      </div>

      <div className="wib-content">
        <section className="wib-section wib-analogy">
          <h2 className="wib-section-title">🏪 Уявімо кафе</h2>
          <p>
            Коли ти заходиш у кафе — ти бачиш <strong>зал, меню, касу</strong>.
            Це <em>фронтенд</em> — те, що видно.
          </p>
          <p>
            Але є ще <strong>кухня</strong>: там готують їжу, зберігають
            продукти, ведуть облік. Її ти не бачиш — але без неї нічого не
            працює. Це і є <em>бекенд</em>.
          </p>
        </section>

        <section className="wib-section">
          <h2 className="wib-section-title">👁 Видиме vs Невидиме</h2>
          <div className="wib-compare">
            <div className="wib-compare-card wib-front">
              <div className="wib-compare-icon">
                <Eye size={24} />
              </div>
              <h3>Фронтенд</h3>
              <p>Те, що бачить користувач: кнопки, картинки, текст, форми</p>
            </div>
            <div className="wib-compare-arrow">
              <ArrowRight size={24} />
            </div>
            <div className="wib-compare-card wib-back">
              <div className="wib-compare-icon">
                <EyeOff size={24} />
              </div>
              <h3>Бекенд</h3>
              <p>Те, що працює «за лаштунками»: логіка, дані, розрахунки</p>
            </div>
          </div>
        </section>

        <section className="wib-section">
          <h2 className="wib-section-title">⚙️ Що робить бекенд?</h2>
          <div className="wib-cards">
            <div className="wib-card">
              <span className="wib-card-emoji">🔐</span>
              <h4>Перевіряє логін</h4>
              <p>Коли ти вводиш пароль — бекенд перевіряє: це дійсно ти?</p>
            </div>
            <div className="wib-card">
              <span className="wib-card-emoji">💾</span>
              <h4>Зберігає дані</h4>
              <p>
                Твоє замовлення, повідомлення, профіль — все це зберігає бекенд
              </p>
            </div>
            <div className="wib-card">
              <span className="wib-card-emoji">📤</span>
              <h4>Відповідає на запити</h4>
              <p>
                Фронтенд питає — бекенд відповідає. Наприклад: «дай список
                товарів»
              </p>
            </div>
            <div className="wib-card">
              <span className="wib-card-emoji">🔗</span>
              <h4>З'єднує сервіси</h4>
              <p>Платіжні системи, пошта, SMS — бекенд це все «склеює»</p>
            </div>
          </div>
        </section>

        <section className="wib-section wib-tech">
          <h2 className="wib-section-title">
            <Cpu size={20} /> На чому пишуть бекенд?
          </h2>
          <div className="wib-tech-list">
            <span className="wib-tech-tag">Node.js</span>
            <span className="wib-tech-tag">Python</span>
            <span className="wib-tech-tag">PHP</span>
            <span className="wib-tech-tag">Java</span>
            <span className="wib-tech-tag">Ruby</span>
            <span className="wib-tech-tag">Go</span>
          </div>
          <p className="wib-tech-note">
            Ми в WebStart Studio використовуємо <strong>Node.js</strong> —
            швидкий і сучасний варіант.
          </p>
        </section>

        <section className="wib-section">
          <div className="wib-summary-box">
            <Globe size={22} />
            <p>
              <strong>Просто кажучи:</strong> бекенд — це «мозок» сайту. Він
              думає, рахує, зберігає і захищає. Без нього сайт — просто красива
              картинка.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIsBackend;
