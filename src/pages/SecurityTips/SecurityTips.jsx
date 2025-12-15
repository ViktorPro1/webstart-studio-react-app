import React, { useState, useEffect } from 'react';
import SEO from '../../SEO/SEO';
import './SecurityTips.css';
import './SecurityTips.mobile.css';

const SecurityTips = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Анімація при скролі
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
      '.security-tips-example-card, .security-tips-sign-card, .security-tips-protection-item, .security-tips-resource-card'
    );

    animatedElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const examples = [
    {
      type: 'telegram',
      icon: '💬',
      title: 'Telegram / Viber',
      message: 'Привіт, Діма! Хочу попросити тебе… У благодійному конкурсі бере участь дитина, натисни посилання і проголосуй...',
      explanation: 'Виглядає щиро, але це шахрайство. Посилання веде на фальшивий сайт.',
      risk: '100% ймовірність злому акаунта',
      level: 'high'
    },
    {
      type: 'email',
      icon: '📧',
      title: 'Email',
      message: 'Шановний клієнте! Ваш рахунок заблоковано через підозрілу активність. Натисніть для розблокування...',
      explanation: 'Банки ніколи не просять підтверджувати дані через посилання в листах.',
      risk: 'Крадіжка банківських даних',
      level: 'high'
    },
    {
      type: 'social',
      icon: '📱',
      title: 'Соціальні мережі',
      message: 'Вітаю! Подивись хто переглядає твій профіль 👀 [посилання]',
      explanation: 'Соцмережі не надають таку інформацію через сторонні посилання.',
      risk: 'Злом профілю, розсилка спаму',
      level: 'medium'
    }
  ];

  const signs = [
    {
      number: 1,
      title: 'Терміновість',
      description: '"Діяти потрібно негайно!", "Пропозиція діє 5 хвилин", "Ваш рахунок буде заблоковано"'
    },
    {
      number: 2,
      title: 'Підозріле посилання',
      description: 'Замість bank.com → bnk.com або bank-secure.xyz. Перевіряйте URL перед кліком!'
    },
    {
      number: 3,
      title: 'Прохання ввести дані',
      description: 'Паролі, PIN-коди, номери карток. Легальні компанії НІКОЛИ не просять це в листах.'
    },
    {
      number: 4,
      title: 'Занадто добра пропозиція',
      description: '"Виграй iPhone", "Отримай 10000 грн за клік", "Заробляй 500$ на день"'
    },
    {
      number: 5,
      title: 'Помилки в тексті',
      description: 'Граматичні помилки, дивне форматування, неправильні назви компаній'
    },
    {
      number: 6,
      title: 'Підозрілий відправник',
      description: 'Email: support@bankkk.com замість office@bank.com. Завжди перевіряйте адресу!'
    }
  ];

  const protectionTips = [
    {
      title: 'Перевіряй посилання',
      description: 'Наведи курсор, подивись справжню адресу. Або надішли нам для перевірки.'
    },
    {
      title: 'Двофакторна автентифікація',
      description: 'Увімкни 2FA на всіх важливих акаунтах (пошта, банки, соцмережі).'
    },
    {
      title: 'Унікальні паролі',
      description: 'Не використовуй один пароль для різних сайтів. Користуйся менеджером паролів.'
    },
    {
      title: 'Оновлюй програми',
      description: 'Тримай браузер, антивірус і систему актуальними.'
    },
    {
      title: 'Довіряй, але перевіряй',
      description: 'Навіть якщо повідомлення від "знайомого" — зателефонуй і уточни.'
    }
  ];

  const faqData = [
    {
      question: 'Що робити, якщо я вже натиснув на підозріле посилання?',
      answer: (
        <ol>
          <li>Негайно зміни паролі на всіх важливих акаунтах</li>
          <li>Увімкни 2FA, якщо ще не увімкнено</li>
          <li>Перевір виписки з банку на підозрілі операції</li>
          <li>Запусти антивірусну перевірку</li>
          <li>Повідом банк, якщо вводив фінансові дані</li>
        </ol>
      )
    },
    {
      question: 'Як відрізнити справжній лист від банку від фішингу?',
      answer: (
        <div>
          <p><strong>Справжній банк:</strong></p>
          <ul>
            <li>Використовує офіційну email-адресу (@bank.ua)</li>
            <li>Звертається до вас по імені</li>
            <li>НЕ просить вводити паролі або PIN в листі</li>
            <li>Має правильний логотип і дизайн</li>
          </ul>
          <p><strong>У разі сумнівів:</strong> зателефонуйте в банк за офіційним номером!</p>
        </div>
      )
    },
    {
      question: 'Чи можна довіряти посиланням у SMS?',
      answer: (
        <div>
          <p>SMS-фішинг (смішинг) — дуже поширений. Правила безпеки:</p>
          <ul>
            <li>Не клікай на посилання в SMS від невідомих</li>
            <li>Навіть якщо SMS начебто від банку — зайди в додаток банку окремо</li>
            <li>Банки рідко надсилають посилання в SMS</li>
            <li>Якщо сумніваєшся — зателефонуй в компанію</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Кібербезпека та захист від фішингу"
        description="Дізнайтесь, як захистити себе від фішингу, шахрайства та кіберзагроз. Безкоштовна перевірка посилань від WebStart Studio"
        keywords="кібербезпека, фішинг, шахрайство, кіберзагрози, безпека онлайн, перевірка посилань"
      />

      <div className="security-tips-page">
        <main className="security-tips-main-content">
          {/* Hero */}
          <section className="security-tips-hero">
            <div className="security-tips-container">
              <h1>🛡️ Не дай себе обманути</h1>
              <p className="security-tips-subtitle">Перевіряємо твої посилання і файли — швидко і зрозуміло</p>
            </div>
          </section>

          {/* Warning */}
          <section className="security-tips-warning-section">
            <div className="security-tips-container">
              <div className="security-tips-warning-card">
                <span className="security-tips-warning-icon">⚠️</span>
                <div>
                  <p><strong>У 2025 році кількість фішингових атак зросла на 47%</strong></p>
                  <p>Шахраї стають досконалішими — навчіться їх розпізнавати!</p>
                </div>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section className="security-tips-examples-section">
            <div className="security-tips-container">
              <h2>📱 Приклади з життя</h2>
              <div className="security-tips-example-grid">
                {examples.map((example, index) => (
                  <div key={index} className={`security-tips-example-card ${example.type}`}>
                    <div className="security-tips-example-header">
                      <span className="security-tips-icon">{example.icon}</span>
                      <h3>{example.title}</h3>
                    </div>
                    <div className="security-tips-example-body">
                      <div className="security-tips-message-box">
                        <p><em>{example.message}</em></p>
                      </div>
                      <div className="security-tips-danger-badge">🚨 Це фішинг!</div>
                      <p className="security-tips-explanation">{example.explanation}</p>
                      <div className={`security-tips-risk-level ${example.level}`}>
                        <strong>Ризик:</strong> {example.risk}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Signs */}
          <section className="security-tips-signs-section">
            <div className="security-tips-container">
              <h2>🔍 Як розпізнати шахрайство</h2>
              <div className="security-tips-signs-grid">
                {signs.map((sign, index) => (
                  <div key={index} className="security-tips-sign-card">
                    <span className="security-tips-sign-number">{sign.number}</span>
                    <h3>{sign.title}</h3>
                    <p>{sign.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Protection */}
          <section className="security-tips-protection-section">
            <div className="security-tips-container">
              <h2>🛡️ Як захиститися</h2>
              <div className="security-tips-protection-list">
                {protectionTips.map((tip, index) => (
                  <div key={index} className="security-tips-protection-item">
                    <span className="security-tips-check-icon">✓</span>
                    <div>
                      <h3>{tip.title}</h3>
                      <p>{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Service */}
          <section className="security-tips-check-service">
            <div className="security-tips-container">
              <div className="security-tips-service-card">
                <h2>🔬 Перевірка посилань та файлів</h2>
                <p className="security-tips-service-description">
                  Надішли нам посилання або файл — ми проведемо детальний аналіз і надамо висновок
                </p>

                <div className="security-tips-pricing-info">
                  <div className="security-tips-price-badge">
                    <span className="security-tips-price">від 50 грн</span>
                    <span className="security-tips-price-desc">за перевірку</span>
                  </div>
                </div>

                <div className="security-tips-service-features">
                  <div className="security-tips-feature">
                    <span>⚡</span>
                    <p>Швидко</p>
                    <small>до 30 хвилин</small>
                  </div>
                  <div className="security-tips-feature">
                    <span>🔒</span>
                    <p>Професійно</p>
                    <small>детальний звіт</small>
                  </div>
                  <div className="security-tips-feature">
                    <span>🛡️</span>
                    <p>Багаторівнево</p>
                    <small>кілька джерел</small>
                  </div>
                </div>

                <div className="security-tips-what-we-check">
                  <h3>Що ми перевіряємо:</h3>
                  <ul>
                    <li>✓ Посилання на фішинг і шахрайство</li>
                    <li>✓ Файли на віруси та шкідливий код</li>
                    <li>✓ Email-листи на достовірність відправника</li>
                    <li>✓ SMS-повідомлення на легітимність</li>
                  </ul>
                </div>

                <div className="security-tips-contact-buttons">
                  <a
                    href="https://t.me/Viktor_freelancer_recruiting_pit"
                    className="security-tips-btn security-tips-btn-telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>✈️</span> Telegram
                  </a>
                  <a href="viber://chat?number=+380661391932" className="security-tips-btn security-tips-btn-viber">
                    <span>📱</span> Viber
                  </a>
                </div>

                <p className="security-tips-note">* Для постійних учасників — знижки та пакетні пропозиції</p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="security-tips-faq-section">
            <div className="security-tips-container">
              <h2>❓ Часті запитання</h2>
              <div className="security-tips-faq-list">
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`security-tips-faq-item ${activeFaq === index ? 'active' : ''}`}
                  >
                    <button
                      className="security-tips-faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className="security-tips-arrow">▼</span>
                    </button>
                    <div className="security-tips-faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="security-tips-resources-section">
            <div className="security-tips-container">
              <h2>🌐 Самостійна перевірка</h2>
              <p className="security-tips-resources-intro">
                Якщо хочете перевірити посилання самостійно, рекомендуємо:
              </p>

              <div className="security-tips-resources-grid">
                <div className="security-tips-resource-card featured">
                  <h3>🔍 VirusTotal</h3>
                  <p className="security-tips-resource-desc">
                    Найпопулярніший сервіс для перевірки посилань та файлів. Аналізує за
                    допомогою десятків антивірусів одночасно.
                  </p>
                  <a
                    href="https://www.virustotal.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="security-tips-resource-link"
                  >
                    Перейти на VirusTotal →
                  </a>
                  <div className="security-tips-resource-tip">
                    <strong>💡 Порада:</strong> Завантажте файл або вставте посилання,
                    зачекайте результатів сканування від різних антивірусних движків.
                  </div>
                </div>

                <div className="security-tips-resource-card">
                  <h3>🔐 Менеджери паролів</h3>
                  <p className="security-tips-resource-desc">Для безпечного зберігання паролів:</p>
                  <ul>
                    <li>
                      <a href="https://bitwarden.com" target="_blank" rel="noopener noreferrer">
                        Bitwarden
                      </a> — безкоштовний і надійний
                    </li>
                    <li>
                      <a href="https://1password.com" target="_blank" rel="noopener noreferrer">
                        1Password
                      </a> — преміум варіант
                    </li>
                  </ul>
                </div>

                <div className="security-tips-resource-card">
                  <h3>🛡️ Антивірусний захист</h3>
                  <p className="security-tips-resource-desc">Рекомендовані антивіруси:</p>
                  <ul>
                    <li>
                      <a href="https://www.bitdefender.com" target="_blank" rel="noopener noreferrer">
                        Bitdefender
                      </a> — топовий рейтинг
                    </li>
                    <li>
                      <a href="https://www.eset.com" target="_blank" rel="noopener noreferrer">
                        ESET
                      </a> — швидкий і надійний
                    </li>
                    <li>Windows Defender — вбудований в Windows</li>
                  </ul>
                </div>
              </div>

              <div className="security-tips-professional-help">
                <h3>🎯 Потрібна допомога?</h3>
                <p>
                  Якщо ви не впевнені або потрібен детальний аналіз — ми можемо допомогти з
                  перевіркою. Ми використовуємо кілька професійних інструментів і надаємо
                  детальний звіт.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SecurityTips;