import React, { useState } from 'react';
import './LandingTemplates.css';
import './LandingTemplates.mobile.css';

interface Template {
  id: string;
  name: string;
  url: string;
  color: string;
  gradient: string;
  icon: string;
  category: string;
  description: string;
  features: string[];
  conversions: string;
}

interface Category {
  id: string;
  label: string;
  icon: string;
}

const LandingTemplates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const templates: Template[] = [
    {
      id: 'recruiter',
      name: 'Landing Recruiter',
      url: 'https://sage-naiad-50b7a5.netlify.app/',
      color: '#06b6d4',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      icon: '💼',
      category: 'business',
      description: 'Стильний лендінг для HR та рекрутингових агентств',
      features: ['Форма заявок', 'Вакансії', 'Відгуки клієнтів', 'Калькулятор'],
      conversions: '18%'
    },
    {
      id: 'taplink',
      name: 'Instagram "Taplink"',
      url: 'https://clinquant-melomakarona-a088a5.netlify.app/',
      color: '#e11d48',
      gradient: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)',
      icon: '📱',
      category: 'social',
      description: 'Багатофункціональна сторінка для Instagram Bio',
      features: ['Соц.мережі', 'Продукти', 'Контакти', 'Аналітика'],
      conversions: '25%'
    },
    {
      id: 'microlending',
      name: 'Microlending Promotion',
      url: 'https://celebrated-faun-808026.netlify.app/',
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      icon: '💰',
      category: 'finance',
      description: 'Конверсійний лендінг для фінансових послуг',
      features: ['Швидка заявка', 'Калькулятор', 'Довіра', 'Chat-bot'],
      conversions: '22%'
    },
    {
      id: 'transport',
      name: 'EU Passenger Transport',
      url: 'https://shimmering-tulumba-a21566.netlify.app/',
      color: '#6366f1',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
      icon: '🚌',
      category: 'service',
      description: 'Сайт для пасажирських перевезень по Європі',
      features: ['Бронювання', 'Маршрути', 'Розклад', 'Оплата онлайн'],
      conversions: '15%'
    },
    {
      id: 'gift',
      name: '🎁 ПодаруйСвято',
      url: 'https://give-a-giftholiday.netlify.app/',
      color: '#ff7f50',
      gradient: 'linear-gradient(135deg, #ff7f50 0%, #ff6347 100%)',
      icon: '🎁',
      category: 'event',
      description: 'Святковий лендінг для event-агентства',
      features: ['Галерея', 'Пакети послуг', 'Календар', 'Відгуки'],
      conversions: '20%'
    },
    {
      id: 'winxp',
      name: '🖥️ Windows XP Style',
      url: 'https://landing-page-in-windows-xp.netlify.app/',
      color: '#0078d7',
      gradient: 'linear-gradient(135deg, #0078d7 0%, #0063b1 100%)',
      icon: '🖥️',
      category: 'creative',
      description: 'Ностальгічний дизайн у стилі Windows XP',
      features: ['Ретро-дизайн', 'Інтерактив', 'Геймифікація', 'Вірусність'],
      conversions: '30%'
    }
  ];

  const categories: Category[] = [
    { id: 'all', label: 'Всі', icon: '🌟' },
    { id: 'business', label: 'Бізнес', icon: '💼' },
    { id: 'social', label: 'Соцмережі', icon: '📱' },
    { id: 'finance', label: 'Фінанси', icon: '💰' },
    { id: 'service', label: 'Сервіси', icon: '🚌' },
    { id: 'event', label: 'Події', icon: '🎁' },
    { id: 'creative', label: 'Креатив', icon: '🎨' }
  ];

  const filteredTemplates: Template[] = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  const handleCategoryChange = (categoryId: string): void => {
    setSelectedCategory(categoryId);
  };

  return (
    <div className="landing-templates">
      <div className="landing-templates__wrapper">
        <section className="landing-templates__hero">
          <div className="landing-templates__hero-content">
            <div className="landing-templates__hero-badge">🚀 Лендінги 2025</div>
            <h1 className="landing-templates__hero-title">
              Односторінкові сайти, <br />
              які <span className="landing-templates__highlight">конвертують</span>
            </h1>
            <p className="landing-templates__hero-description">
              Лендінги для будь-яких цілей: від Instagram taplink до
              корпоративних сторінок. Кожен шаблон оптимізований під конверсію,
              має швидке завантаження та інтеграції з популярними сервісами.
            </p>
            <div className="landing-templates__hero-stats">
              <div className="landing-templates__stat-item">
                <div className="landing-templates__stat-number">6</div>
                <div className="landing-templates__stat-label">Готових шаблонів</div>
              </div>
              <div className="landing-templates__stat-item">
                <div className="landing-templates__stat-number">30%</div>
                <div className="landing-templates__stat-label">Середня конверсія</div>
              </div>
              <div className="landing-templates__stat-item">
                <div className="landing-templates__stat-number">2.5s</div>
                <div className="landing-templates__stat-label">Швидкість завантаження</div>
              </div>
            </div>
          </div>
        </section>

        <section className="landing-templates__info">
          <h2 className="landing-templates__section-title">Що таке landing page?</h2>
          <div className="landing-templates__info-grid">
            <div className="landing-templates__info-card">
              <div className="landing-templates__info-icon">🎯</div>
              <h3>Одна мета</h3>
              <p>Лендінг створений для однієї конкретної дії: купівля, реєстрація, дзвінок. Це фокусує увагу відвідувача.</p>
            </div>
            <div className="landing-templates__info-card">
              <div className="landing-templates__info-icon">⚡</div>
              <h3>Швидка конверсія</h3>
              <p>Мінімум відволікань, максимум переконливості. Користувач швидко розуміє цінність пропозиції.</p>
            </div>
            <div className="landing-templates__info-card">
              <div className="landing-templates__info-icon">📊</div>
              <h3>Вимірюваність</h3>
              <p>Легко відстежити ефективність рекламних кампаній та A/B тестувати елементи.</p>
            </div>
            <div className="landing-templates__info-card">
              <div className="landing-templates__info-icon">💡</div>
              <h3>Простота запуску</h3>
              <p>Не потрібен великий сайт - одна сторінка може принести більше лідів, ніж складний портал.</p>
            </div>
          </div>
        </section>

        <section className="landing-templates__templates">
          <h2 className="landing-templates__section-title">Наші лендінги</h2>

          <div className="landing-templates__categories-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`landing-templates__category-btn ${selectedCategory === cat.id ? 'landing-templates__category-btn--active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                <span className="landing-templates__cat-icon">{cat.icon}</span>
                <span className="landing-templates__cat-label">{cat.label}</span>
              </button>
            ))}
          </div>

          <div className="landing-templates__grid">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="landing-templates__card"
                style={{ '--card-color': template.color } as React.CSSProperties}
              >
                <div className="landing-templates__card-visual">
                  <div className="landing-templates__card-icon" style={{ background: template.gradient }}>
                    {template.icon}
                  </div>
                  <div className="landing-templates__conversion-badge">
                    <span className="landing-templates__conversion-icon">📈</span>
                    {template.conversions} конверсія
                  </div>
                </div>

                <div className="landing-templates__card-content">
                  <h3 className="landing-templates__card-name">{template.name}</h3>
                  <p className="landing-templates__card-description">{template.description}</p>

                  <div className="landing-templates__card-features">
                    <div className="landing-templates__features-label">Функціонал:</div>
                    <div className="landing-templates__features-tags">
                      {template.features.map((feature, idx) => (
                        <span key={idx} className="landing-templates__feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={template.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="landing-templates__card-link"
                    style={{ background: template.gradient }}
                  >
                    <span>Відкрити демо</span>
                    <span className="landing-templates__link-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="landing-templates__cta">
          <div className="landing-templates__cta-content">
            <h2 className="landing-templates__cta-title">Готові створити свій лендінг?</h2>
            <p className="landing-templates__cta-description">
              Оберіть підхожий пакет або отримайте індивідуальний проект
              під ваші потреби
            </p>
            <div className="landing-templates__cta-buttons">
              <button
                className="landing-templates__cta-btn landing-templates__cta-btn--primary"
                onClick={() => window.location.href = '/briefs'}
              >
                Отримати проект
              </button>
              <button
                className="landing-templates__cta-btn landing-templates__cta-btn--secondary"
                onClick={() => window.location.href = '/pricing'}
              >
                Пакети
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingTemplates;