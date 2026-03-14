import React from "react";
import {
  BookOpen,
  Code,
  Server,
  Database,
  Layers,
  Youtube,
} from "lucide-react";
import "./BackendLearning.css";
import "./BackendLearning.mobile.css";

const BackendLearning: React.FC = () => {
  return (
    <div className="backend-learning">
      <div className="bl-hero">
        <div className="bl-hero-icon">
          <BookOpen size={40} />
        </div>
        <h1 className="bl-title">Ми вивчаємо бекенд</h1>
        <p className="bl-subtitle">
          Відкрито про наш шлях — від фронтенду до повного стеку
        </p>
      </div>

      <div className="bl-content">
        <section className="bl-section bl-intro">
          <h2 className="bl-section-title">💬 Чому ми це робимо?</h2>
          <p>
            Web<span className="bl-accent">Start</span> Studio починалась як
            платформа для створення сайтів — лендінгів, портфоліо, резюме. Але з
            часом ми зрозуміли: щоб будувати{" "}
            <strong>повноцінні продукти</strong>, потрібно розуміти не лише
            фронтенд, а й те що відбувається «за лаштунками».
          </p>
          <p>
            Тому ми свідомо пішли вивчати бекенд — і ця платформа, яку Ви зараз
            бачите, є живим доказом цього шляху.
          </p>
        </section>

        <section className="bl-section">
          <h2 className="bl-section-title">🛠 Що ми вже освоїли?</h2>
          <div className="bl-skills">
            <div className="bl-skill bl-skill-done">
              <div className="bl-skill-icon">
                <Server size={22} />
              </div>
              <div>
                <h4>Node.js + Express</h4>
                <p>Побудова REST API, маршрутизація, middleware</p>
              </div>
              <span className="bl-badge bl-badge-done">✓ Готово</span>
            </div>
            <div className="bl-skill bl-skill-done">
              <div className="bl-skill-icon">
                <Database size={22} />
              </div>
              <div>
                <h4>MySQL</h4>
                <p>Проектування таблиць, запити, зв'язки між даними</p>
              </div>
              <span className="bl-badge bl-badge-done">✓ Готово</span>
            </div>
            <div className="bl-skill bl-skill-done">
              <div className="bl-skill-icon">
                <Code size={22} />
              </div>
              <div>
                <h4>REST API</h4>
                <p>
                  24 ендпоінти: авторизація, замовлення, повідомлення, адмін
                </p>
              </div>
              <span className="bl-badge bl-badge-done">✓ Готово</span>
            </div>
            <div className="bl-skill bl-skill-done">
              <div className="bl-skill-icon">
                <Layers size={22} />
              </div>
              <div>
                <h4>Деплой на Railway</h4>
                <p>Бекенд і база даних розгорнуті на хмарному хостингу</p>
              </div>
              <span className="bl-badge bl-badge-done">✓ Готово</span>
            </div>
            <div className="bl-skill bl-skill-progress">
              <div className="bl-skill-icon">
                <Server size={22} />
              </div>
              <div>
                <h4>Авторизація та безпека</h4>
                <p>JWT токени, захист маршрутів, ролі користувачів</p>
              </div>
              <span className="bl-badge bl-badge-progress">⚙ В процесі</span>
            </div>
            <div className="bl-skill bl-skill-progress">
              <div className="bl-skill-icon">
                <Database size={22} />
              </div>
              <div>
                <h4>Складні SQL запити</h4>
                <p>JOIN, агрегація, оптимізація запитів</p>
              </div>
              <span className="bl-badge bl-badge-progress">⚙ В процесі</span>
            </div>
          </div>
        </section>

        <section className="bl-section">
          <h2 className="bl-section-title">
            <Youtube size={20} /> Де вчимось?
          </h2>
          <div className="bl-resources">
            <div className="bl-resource">
              <span>🎥</span>
              <div>
                <strong>YouTube</strong>
                <p>Практичні відео по Node.js, Express, MySQL</p>
              </div>
            </div>
            <div className="bl-resource">
              <span>📖</span>
              <div>
                <strong>Документація</strong>
                <p>Офіційні docs — найточніше джерело</p>
              </div>
            </div>
            <div className="bl-resource">
              <span>🤖</span>
              <div>
                <strong>AI як ментор</strong>
                <p>Пояснення складних концепцій і допомога з кодом</p>
              </div>
            </div>
            <div className="bl-resource">
              <span>💻</span>
              <div>
                <strong>Практика</strong>
                <p>Ця платформа — наш головний навчальний проєкт</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bl-section">
          <div className="bl-summary">
            <p>
              🚀 <strong>Наша мета</strong> — стати повноцінною fullstack
              командою, яка будує не просто сайти, а продукти. І ми вже на цьому
              шляху.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BackendLearning;
