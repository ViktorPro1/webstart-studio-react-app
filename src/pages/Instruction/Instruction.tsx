import React, { useState } from 'react';
import SEO from '../../SEO/SEO';
import './Instruction.css';
import './Instruction.mobile.css';

const Instruction: React.FC = () => {
  const tabs = ['registration', 'deployment', 'settings'] as const;
  type TabType = typeof tabs[number];
  const [activeTab, setActiveTab] = useState<TabType>('registration');
  
  const progress = ((tabs.indexOf(activeTab) + 1) / tabs.length) * 100;

  const [expandedSteps, setExpandedSteps] = useState<Record<string, boolean>>({});
  const toggleStep = (tab: string, step: number): void => {
    setExpandedSteps(prev => ({
      ...prev,
      [`${tab}-${step}`]: !prev[`${tab}-${step}`]
    }));
  };

  const checklistItems: string[] = [
    'Є головний файл index.html',
    'Всі CSS та JS файли на місці',
    'Зображення оптимізовані',
    'Шляхи до файлів коректні'
  ];
  
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  const toggleCheck = (item: string): void => {
    setCheckedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  return (
    <>
      <SEO
        title="Інструкція: Як зареєструватися на Netlify"
        description="Покрокова інструкція, як зареєструватися на Netlify та почати розміщувати свої веб-проекти онлайн"
        keywords="Netlify, реєстрація, інструкція, хостинг, веб-проекти"
      />

      <div className="instruction-root">
        <div className="container">
          {/* Header */}
          <div className="instruction-header">
            <h1>🚀 Інструкція: Netlify</h1>
            <p>Покроковий гід для початківців та професіоналів</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'registration' ? 'active' : ''}`}
              onClick={() => setActiveTab('registration')}
            >
              <span className="tab-icon">📝</span>
              <span className="tab-text">Реєстрація</span>
            </button>
            <button
              className={`tab ${activeTab === 'deployment' ? 'active' : ''}`}
              onClick={() => setActiveTab('deployment')}
            >
              <span className="tab-icon">🚀</span>
              <span className="tab-text">Публікація</span>
            </button>
            <button
              className={`tab ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => setActiveTab('settings')}
            >
              <span className="tab-icon">⚙️</span>
              <span className="tab-text">Налаштування</span>
            </button>
          </div>

          {/* Content */}
          <div className="content">

            {/* Registration */}
            {activeTab === 'registration' && (
              <div className="tab-content active">
                <h2>Реєстрація на Netlify</h2>

                {/* 1 */}
                <div
                  className={`step ${expandedSteps['registration-1'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('registration', 1)}
                >
                  <div className="step-header">
                    <div className="step-number">1</div>
                    <span>Перейдіть на офіційний сайт</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Відкрийте браузер і перейдіть за адресою <strong>www.netlify.com</strong></p>
                    <p>Netlify — це безкоштовна платформа для хостингу статичних сайтів з автоматичним деплоєм.</p>
                  </div>
                </div>

                {/* 2 */}
                <div
                  className={`step ${expandedSteps['registration-2'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('registration', 2)}
                >
                  <div className="step-header">
                    <div className="step-number">2</div>
                    <span>Натисніть "Sign up"</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Знайдіть кнопку <strong>"Sign up"</strong> у верхньому правому куті сторінки та натисніть на неї.</p>
                  </div>
                </div>

                {/* 3 */}
                <div
                  className={`step ${expandedSteps['registration-3'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('registration', 3)}
                >
                  <div className="step-header">
                    <div className="step-number">3</div>
                    <span>Оберіть спосіб реєстрації</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Ви можете зареєструватися через:</p>
                    <ul>
                      <li>📧 <strong>Email</strong> — натисніть "Continue with email"</li>
                      <li>🔗 <strong>GitHub</strong> — для розробників</li>
                      <li>🔗 <strong>GitLab</strong> — альтернатива GitHub</li>
                      <li>🔗 <strong>Bitbucket</strong> — ще один Git-сервіс</li>
                    </ul>
                    <div className="tip-box">
                      <strong>💡 Порада:</strong>
                      <p>Для початківців рекомендуємо реєстрацію через email — це найпростіший спосіб.</p>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div
                  className={`step ${expandedSteps['registration-4'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('registration', 4)}
                >
                  <div className="step-header">
                    <div className="step-number">4</div>
                    <span>Заповніть дані</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Введіть:</p>
                    <ul>
                      <li>Вашу електронну пошту</li>
                      <li>Надійний пароль (мінімум 8 символів)</li>
                    </ul>
                  </div>
                </div>

                {/* 5 */}
                <div
                  className={`step ${expandedSteps['registration-5'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('registration', 5)}
                >
                  <div className="step-header">
                    <div className="step-number">5</div>
                    <span>Підтвердіть email</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Перевірте вашу поштову скриньку та підтвердіть реєстрацію, натиснувши на посилання в листі від Netlify.</p>
                    <div className="tip-box">
                      <strong>💡 Не отримали лист?</strong>
                      <p>Перевірте папку "Спам" або "Промоакції".</p>
                    </div>
                  </div>
                </div>

                <div className="navigation-buttons">
                  <button className="nav-btn" disabled>← Назад</button>
                  <button className="nav-btn" onClick={() => setActiveTab('deployment')}>Далі →</button>
                </div>
              </div>
            )}

            {/* Deployment */}
            {activeTab === 'deployment' && (
              <div className="tab-content active">
                <h2>Публікація вашого проекту</h2>

                {/* Deployment step 1 with checklist */}
                <div
                  className={`step ${expandedSteps['deployment-1'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 1)}
                >
                  <div className="step-header">
                    <div className="step-number">1</div>
                    <span>Підготуйте файли</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Переконайтеся, що ваші файли готові до публікації:</p>
                    <ul className="checklist">
                      {checklistItems.map(item => (
                        <li
                          key={item}
                          className={checkedItems.includes(item) ? 'checked' : ''}
                          onClick={(e: React.MouseEvent) => { 
                            e.stopPropagation(); 
                            toggleCheck(item); 
                          }}
                        >
                          <div className="checkbox"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Deployment steps 2–6 */}
                <div
                  className={`step ${expandedSteps['deployment-2'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 2)}
                >
                  <div className="step-header">
                    <div className="step-number">2</div>
                    <span>Увійдіть в акаунт Netlify</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Перейдіть на <strong>app.netlify.com</strong> та увійдіть у ваш акаунт.</p>
                  </div>
                </div>

                <div
                  className={`step ${expandedSteps['deployment-3'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 3)}
                >
                  <div className="step-header">
                    <div className="step-number">3</div>
                    <span>Створіть новий сайт</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Натисніть кнопку <strong>"Add new site"</strong> або <strong>"Deploy manually"</strong>.</p>
                  </div>
                </div>

                <div
                  className={`step ${expandedSteps['deployment-4'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 4)}
                >
                  <div className="step-header">
                    <div className="step-number">4</div>
                    <span>Завантажте файли</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Є два способи завантаження:</p>
                    <ul>
                      <li><strong>Drag & Drop</strong> — перетягніть ZIP-архів або папку з файлами</li>
                      <li><strong>Вибір файлу</strong> — натисніть "Choose file" та оберіть архів</li>
                    </ul>
                    <div className="tip-box">
                      <strong>💡 Важливо:</strong>
                      <p>Файл <strong>index.html</strong> повинен бути в корені архіву, а не у вкладеній папці!</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`step ${expandedSteps['deployment-5'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 5)}
                >
                  <div className="step-header">
                    <div className="step-number">5</div>
                    <span>Дочекайтесь завершення</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Netlify автоматично обробить та опублікує ваш сайт. Зазвичай це займає 10–30 секунд.</p>
                  </div>
                </div>

                <div
                  className={`step ${expandedSteps['deployment-6'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('deployment', 6)}
                >
                  <div className="step-header">
                    <div className="step-number">6</div>
                    <span>Отримайте посилання</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Після успішної публікації Netlify надасть вам унікальне посилання:</p>
                    <p><strong>https://random-name-1234.netlify.app</strong></p>
                    <p>За цим посиланням вже можна переглянути ваш сайт!</p>
                  </div>
                </div>

                <div className="navigation-buttons">
                  <button className="nav-btn" onClick={() => setActiveTab('registration')}>← Назад</button>
                  <button className="nav-btn" onClick={() => setActiveTab('settings')}>Далі →</button>
                </div>
              </div>
            )}

            {/* Settings */}
            {activeTab === 'settings' && (
              <div className="tab-content active">
                <h2>Налаштування сайту</h2>

                {/* 1 */}
                <div
                  className={`step ${expandedSteps['settings-1'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('settings', 1)}
                >
                  <div className="step-header">
                    <div className="step-number">1</div>
                    <span>Зміна назви сайту</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Змініть автоматично згенеровану назву на свою власну:</p>
                    <ul>
                      <li>Перейдіть до <strong>"Site settings"</strong></li>
                      <li>Знайдіть розділ <strong>"Site information"</strong></li>
                      <li>Натисніть <strong>"Change site name"</strong></li>
                      <li>Введіть нову назву (наприклад: <em>viktor-portfolio</em>)</li>
                    </ul>
                    <div className="tip-box">
                      <strong>💡 Порада:</strong>
                      <p>Використовуйте просту та зрозумілу назву без спецсимволів.</p>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div
                  className={`step ${expandedSteps['settings-2'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('settings', 2)}
                >
                  <div className="step-header">
                    <div className="step-number">2</div>
                    <span>Власний домен (необов'язково)</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Якщо у вас є власний домен:</p>
                    <ul>
                      <li>Перейдіть у <strong>"Domain settings"</strong></li>
                      <li>Натисніть <strong>"Add custom domain"</strong></li>
                      <li>Введіть ваш домен</li>
                      <li>Налаштуйте DNS записи</li>
                    </ul>
                  </div>
                </div>

                {/* 3 */}
                <div
                  className={`step ${expandedSteps['settings-3'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('settings', 3)}
                >
                  <div className="step-header">
                    <div className="step-number">3</div>
                    <span>HTTPS та безпека</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Netlify автоматично надає безкоштовний SSL-сертифікат.</p>
                    <div className="success-box">
                      <strong>✅ Автоматично активовано</strong>
                      <p>HTTPS працює одразу!</p>
                    </div>
                  </div>
                </div>

                {/* 4 */}
                <div
                  className={`step ${expandedSteps['settings-4'] ? 'expanded' : ''}`}
                  onClick={() => toggleStep('settings', 4)}
                >
                  <div className="step-header">
                    <div className="step-number">4</div>
                    <span>Оновлення сайту</span>
                    <span className="step-arrow">▼</span>
                  </div>
                  <div className="step-details">
                    <p>Щоб оновити ваш сайт:</p>
                    <ul>
                      <li>Перейдіть на вкладку <strong>"Deploys"</strong></li>
                      <li>Перетягніть нову папку або завантажте архів</li>
                      <li>Дочекайтесь завершення</li>
                    </ul>
                  </div>
                </div>

                <div className="navigation-buttons">
                  <button className="nav-btn" onClick={() => setActiveTab('deployment')}>← Назад</button>
                  <button className="nav-btn" disabled>Далі →</button>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="button-group">
              <a href="/documents/Netlify_registration_instructions.docx" download className="btn btn-primary">
                <span>⬇</span> Завантажити інструкцію
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Instruction;