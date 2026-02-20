import React, { useState } from 'react';
import './TechnicalDetails.css';
import './TechnicalDetails.mobile.css';

const TechnicalDetails = () => {
  const [isCostOpen, setIsCostOpen] = useState(false);

  const toggleCost = () => {
    setIsCostOpen(!isCostOpen);
  };

  return (
    <>

      <div className="technical-details-page">
        <header className="tech-header">
          <h1>Технічні можливості для вашого лендінгу</h1>
        </header>

        <main className="tech-main">
          <p className="tech-highlight">
            Ми можемо додати до створеного для вас сайту дві корисні функції —
            <strong> CSP</strong> та <strong>PWA</strong>. Вони роблять сайт більш 
            захищеним та зручним для користувачів.
          </p>

          {/* Ілюстрації */}
          <div className="tech-illustrations">
            <div className="tech-box">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="#0056b3" strokeWidth="3" fill="none" />
                <path d="M16 32l12 12 20-20" stroke="#0056b3" strokeWidth="4" fill="none" 
                      strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2>Content Security Policy (CSP)</h2>
              <p>
                Це набір правил, що захищають ваш сайт від шкідливих скриптів і 
                контролюють, які ресурси можна завантажувати.
              </p>
            </div>

            <div className="tech-box">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect x="12" y="16" width="40" height="32" rx="4" ry="4" 
                      stroke="#0056b3" strokeWidth="3" fill="none" />
                <circle cx="32" cy="32" r="10" stroke="#0056b3" strokeWidth="3" fill="none" />
                <path d="M32 22v20M22 32h20" stroke="#0056b3" strokeWidth="3" strokeLinecap="round" />
              </svg>
              <h2>Progressive Web Application (PWA)</h2>
              <p>
                Технологія, що дозволяє сайту працювати як мобільний додаток з 
                офлайн-доступом і швидким завантаженням.
              </p>
            </div>
          </div>

          {/* CSP Секція */}
          <section>
            <h2>1. Що таке Content Security Policy (CSP)</h2>
            <p>
              Content Security Policy — це «правила безпеки» для вашого сайту. Вони 
              дозволяють вказати, звідки можна завантажувати зображення, шрифти, відео 
              та інші ресурси. Завдяки цьому зменшується ризик атак і зараження сайту 
              шкідливим кодом.
            </p>
            <p>
              Простими словами: CSP працює як охоронець, який перевіряє кожен файл перед 
              тим, як пустити його на сайт.
            </p>

            <h3>Переваги CSP:</h3>
            <ul>
              <li>Захист від шкідливих скриптів (XSS-атак).</li>
              <li>Зменшення ризику витоку даних.</li>
              <li>Контроль над тим, які ресурси можна завантажувати.</li>
            </ul>
          </section>

          {/* PWA Секція */}
          <section>
            <h2>2. Що таке Progressive Web Application (PWA)</h2>
            <p>
              Progressive Web Application — це технологія, яка робить сайт схожим на 
              мобільний додаток. Користувач може додати його на головний екран смартфона 
              або комп'ютера, і відкривати його як звичайний застосунок.
            </p>
            <p>
              Наприклад, навіть якщо інтернет зник — сайт, налаштований як PWA, все одно 
              зможе показати частину контенту завдяки кешуванню.
            </p>

            <h3>Переваги PWA:</h3>
            <ul>
              <li>Можливість встановити сайт на телефон чи комп'ютер.</li>
              <li>Робота офлайн або при слабкому інтернеті.</li>
              <li>Швидке завантаження завдяки кешуванню.</li>
              <li>Зручність, як у мобільному додатку.</li>
            </ul>
          </section>

          {/* Перевірка CSP */}
          <section>
            <h2>3. Як перевірити правильність налаштувань CSP</h2>
            <p>
              Існують онлайн-сервіси, які допоможуть швидко перевірити, чи правильно 
              налаштована Content Security Policy на вашому сайті. Вони проаналізують 
              заголовки безпеки та покажуть рекомендації для покращення.
            </p>

            <div className="tech-checklist">
              <h3>Відомі ресурси для перевірки CSP:</h3>
              <ul>
                <li>
                  <a href="https://securityheaders.com/" target="_blank" rel="noopener noreferrer">
                    securityheaders.com
                  </a> — швидка перевірка заголовків безпеки, включно з CSP.
                </li>
                <li>
                  <a href="https://csp-evaluator.withgoogle.com/" target="_blank" rel="noopener noreferrer">
                    Google CSP Evaluator
                  </a> — інструмент для аналізу CSP на наявність потенційних вразливостей.
                </li>
                <li>
                  <a href="https://observatory.mozilla.org/" target="_blank" rel="noopener noreferrer">
                    Mozilla Observatory
                  </a> — комплексна перевірка безпеки сайту, включно з CSP.
                </li>
              </ul>
            </div>
          </section>

          {/* Бюджет */}
          <section>
            <h2>4. Орієнтовні бюджети у впровадження</h2>
            <button 
              className="toggle-cost-btn"
              onClick={toggleCost}
              aria-expanded={isCostOpen}
            >
              {isCostOpen ? 'Приховати ▲' : 'Переглянути ▼'}
            </button>

            <div className={`cost-details ${isCostOpen ? 'open' : ''}`}>
              <p>
                Приблизні рекомендації щодо бюджету на технічні доповнення, які можуть 
                варіюватися залежно від складності вашого проєкту.
              </p>
              <ul>
                <li>
                  <strong>Налаштування Content Security Policy (CSP):</strong> від 1500 
                  до 2000 грн — залежно від складності правил безпеки.
                </li>
                <li>
                  <strong>Інтеграція Progressive Web Application (PWA):</strong> від 2500 
                  до 3500 грн — включає кешування, офлайн-доступ, додавання на головний 
                  екран та базове тестування.
                </li>
                <li>
                  <strong>Комплексне впровадження CSP + PWA:</strong> від 3500 до 5000 грн 
                  — з урахуванням синергії процесу.
                </li>
              </ul>
              <p>Конкретні затрати обговорюються індивідуально після аналізу вашого проєкту.</p>
            </div>
          </section>
        </main>

        <footer className="tech-footer">
          &copy; 2025 WebStart Studio.
        </footer>
      </div>
    </>
  );
};

export default TechnicalDetails;