import React from "react";
import { Link2, Monitor, Server, Database, ArrowDown } from "lucide-react";
import "./HowItWorks.css";

const HowItWorks: React.FC = () => {
  return (
    <div className="how-it-works">
      <div className="hiw-hero">
        <div className="hiw-hero-icon">
          <Link2 size={40} />
        </div>
        <h1 className="hiw-title">Як вони працюють разом?</h1>
        <p className="hiw-subtitle">
          Фронтенд, бекенд і база даних — одна команда
        </p>
      </div>

      <div className="hiw-content">
        <section className="hiw-section hiw-analogy">
          <h2 className="hiw-section-title">🍕 Аналогія: піцерія</h2>
          <p>
            Уяви піцерію. Ти сидиш за столом і робиш замовлення офіціанту — це{" "}
            <strong>фронтенд</strong>. Офіціант передає замовлення на кухню — це{" "}
            <strong>бекенд</strong>. Кухар бере інгредієнти з комори — це{" "}
            <strong>база даних</strong>. Готова піца повертається до тебе — це
            відповідь сервера.
          </p>
        </section>

        <section className="hiw-section">
          <h2 className="hiw-section-title">
            🔄 Як це відбувається на практиці?
          </h2>
          <p>
            Розглянемо простий приклад:{" "}
            <strong>користувач входить на сайт</strong>.
          </p>

          <div className="hiw-flow">
            <div className="hiw-step">
              <div className="hiw-step-icon hiw-icon-front">
                <Monitor size={24} />
              </div>
              <div className="hiw-step-content">
                <span className="hiw-step-num">1</span>
                <h4>Користувач вводить логін і пароль</h4>
                <p>
                  Браузер (фронтенд) збирає дані з форми і надсилає запит на
                  сервер
                </p>
              </div>
            </div>

            <div className="hiw-arrow">
              <ArrowDown size={20} />
            </div>

            <div className="hiw-step">
              <div className="hiw-step-icon hiw-icon-back">
                <Server size={24} />
              </div>
              <div className="hiw-step-content">
                <span className="hiw-step-num">2</span>
                <h4>Бекенд отримує запит</h4>
                <p>
                  Сервер перевіряє: правильно чи заповнені поля, і звертається
                  до бази даних
                </p>
              </div>
            </div>

            <div className="hiw-arrow">
              <ArrowDown size={20} />
            </div>

            <div className="hiw-step">
              <div className="hiw-step-icon hiw-icon-db">
                <Database size={24} />
              </div>
              <div className="hiw-step-content">
                <span className="hiw-step-num">3</span>
                <h4>База даних знаходить користувача</h4>
                <p>
                  БД шукає запис з таким email, перевіряє пароль і повертає
                  результат
                </p>
              </div>
            </div>

            <div className="hiw-arrow">
              <ArrowDown size={20} />
            </div>

            <div className="hiw-step">
              <div className="hiw-step-icon hiw-icon-back">
                <Server size={24} />
              </div>
              <div className="hiw-step-content">
                <span className="hiw-step-num">4</span>
                <h4>Бекенд формує відповідь</h4>
                <p>
                  Якщо все ок — сервер видає токен доступу. Якщо ні — повертає
                  помилку
                </p>
              </div>
            </div>

            <div className="hiw-arrow">
              <ArrowDown size={20} />
            </div>

            <div className="hiw-step">
              <div className="hiw-step-icon hiw-icon-front">
                <Monitor size={24} />
              </div>
              <div className="hiw-step-content">
                <span className="hiw-step-num">5</span>
                <h4>Фронтенд показує результат</h4>
                <p>
                  Браузер отримує відповідь і або відкриває особистий кабінет,
                  або показує помилку
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="hiw-section">
          <h2 className="hiw-section-title">📡 Що таке API?</h2>
          <div className="hiw-api-box">
            <p>
              Між фронтендом і бекендом є <strong>API</strong> (Application
              Programming Interface) — це як меню в ресторані. Фронтенд дивиться
              у «меню» і робить запит: «дай мені список товарів» або «збережи це
              замовлення».
            </p>
            <p>
              Бекенд виконує запит і повертає дані у форматі{" "}
              <strong>JSON</strong> — це простий текстовий формат, який
              розуміють обидві сторони.
            </p>
          </div>
        </section>

        <section className="hiw-section">
          <h2 className="hiw-section-title">🧩 Три рівні = один сайт</h2>
          <div className="hiw-layers">
            <div className="hiw-layer hiw-layer-1">
              <Monitor size={20} />
              <div>
                <strong>Фронтенд</strong>
                <span>Що бачить користувач (React, HTML, CSS)</span>
              </div>
            </div>
            <div className="hiw-layer-connector"></div>
            <div className="hiw-layer hiw-layer-2">
              <Server size={20} />
              <div>
                <strong>Бекенд</strong>
                <span>Логіка та обробка (Node.js, Express)</span>
              </div>
            </div>
            <div className="hiw-layer-connector"></div>
            <div className="hiw-layer hiw-layer-3">
              <Database size={20} />
              <div>
                <strong>База даних</strong>
                <span>Зберігання інформації (MySQL)</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
