import React, { useState } from 'react';
import './ResumeTemplates.css';
import './ResumeTemplates.mobile.css';

interface Template {
  id: string;
  name: string;
  url: string;
  color: string;
  gradient: string;
  icon: string;
  description: string;
  features: string[];
  bestFor: string;
  popularity: number;
}

const ResumeTemplates: React.FC = () => {
  const [activeTemplate, setActiveTemplate] = useState<string | null>(null);

  const templates: Template[] = [
    {
      id: 'classic',
      name: 'Classic',
      url: 'https://cute-eclair-b92b0f.netlify.app',
      color: '#3b82f6',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      icon: '📄',
      description: 'Timeless and professional design for any industry.',
      features: ['PDF Export', 'ATS-friendly', 'One-page layout'],
      bestFor: 'Entry-level to mid-senior roles',
      popularity: 85
    },
    {
      id: 'creative',
      name: 'Creative',
      url: 'https://resonant-fudge-055f66.netlify.app',
      color: '#f43f5e',
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
      icon: '🎨',
      description: 'Bold colors and modern layout for creative fields.',
      features: ['Custom sections', 'Visual timeline', 'Portfolio integration'],
      bestFor: 'Designers & marketers',
      popularity: 92
    },
    {
      id: 'minimal',
      name: 'Minimal',
      url: 'https://frolicking-sunflower-90993f.netlify.app',
      color: '#64748b',
      gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
      icon: '✨',
      description: 'Clean and distraction-free design.',
      features: ['Single column', 'Maximum readability', 'Fast loading'],
      bestFor: 'Tech & engineering roles',
      popularity: 78
    },
    {
      id: 'premium',
      name: 'Premium',
      url: 'https://fluffy-sawine-100fa8.netlify.app',
      color: '#eab308',
      gradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
      icon: '⭐',
      description: 'Executive design with premium typography.',
      features: ['Two-page option', 'Custom icons', 'VIP typography'],
      bestFor: 'C-level & management',
      popularity: 95
    }
  ];

  return (
    <div className="resume-templates">
      <div className="resume-templates-templates-wrapper">
        {/* Hero Section */}
        <section className="resume-templates-hero-section">
          <div className="resume-templates-hero-content">
            <div className="resume-templates-hero-badge">📄 Резюме 2025</div>
            <h1 className="resume-templates-hero-title">
              Найкращі <br /> <span className="resume-templates-highlight">шаблони резюме</span>
            </h1>
            <p className="resume-templates-hero-description">
              Створюйте професійні CV за 5 хвилин. 4 готових шаблони, 100% оптимізовані під ATS-системи рекрутерів.
            </p>
            <div className="resume-templates-hero-stats">
              <div className="resume-templates-stat-item">
                <div className="resume-templates-stat-number">4</div>
                <div className="resume-templates-stat-label">шаблони</div>
              </div>
              <div className="resume-templates-stat-item">
                <div className="resume-templates-stat-number">95%</div>
                <div className="resume-templates-stat-label">ATS-сумісність</div>
              </div>
              <div className="resume-templates-stat-item">
                <div className="resume-templates-stat-number">10К+</div>
                <div className="resume-templates-stat-label">користувачів</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="resume-templates-benefits-section">
          <h2 className="resume-templates-section-title">Чому обирають наші шаблони?</h2>
          <div className="resume-templates-benefits-grid">
            <div className="resume-templates-benefit-card">
              <div className="resume-templates-benefit-icon">⚡</div>
              <h3>Швидко та просто</h3>
              <p>Заповни за 10 хвилин. Готовий PDF одразу.</p>
            </div>
            <div className="resume-templates-benefit-card">
              <div className="resume-templates-benefit-icon">🎯</div>
              <h3>100% ATS-сумісні</h3>
              <p>15+ ключових слів, 40+ оптимізацій для парсерів.</p>
            </div>
            <div className="resume-templates-benefit-card">
              <div className="resume-templates-benefit-icon">📱</div>
              <h3>Адаптивний дизайн</h3>
              <p>Ідеально виглядає на друці та в цифровому форматі.</p>
            </div>
            <div className="resume-templates-benefit-card">
              <div className="resume-templates-benefit-icon">⭐</div>
              <h3>Професійний вигляд</h3>
              <p>Рекрутери витрачають 7 сек на резюме. Зроби перше враження незабутнім.</p>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="resume-templates-templates-section">
          <h2 className="resume-templates-section-title">Оберіть свій шаблон</h2>
          <p className="resume-templates-section-subtitle">
            Кожен шаблон протестований на 50+ рекрутингових платформах
          </p>
          <div className="resume-templates-templates-grid">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`resume-templates-template-card ${activeTemplate === template.id ? 'active' : ''}`}
                onMouseEnter={() => setActiveTemplate(template.id)}
                onMouseLeave={() => setActiveTemplate(null)}
                style={{ 
                  ['--card-color' as any]: template.color 
                } as React.CSSProperties}
              >
                <div className="resume-templates-template-header">
                  <div
                    className="resume-templates-template-icon"
                    style={{ background: template.gradient }}
                  >
                    {template.icon}
                  </div>
                  <div className="resume-templates-popularity-badge">
                    <span className="resume-templates-popularity-star">⭐</span>
                    {template.popularity}%
                  </div>
                </div>
                <h3 className="resume-templates-template-name">{template.name}</h3>
                <p className="resume-templates-template-description">{template.description}</p>
                <div className="resume-templates-template-features">
                  <div className="resume-templates-features-label">Особливості:</div>
                  <ul className="resume-templates-features-list">
                    {template.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="resume-templates-feature-check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="resume-templates-template-best-for">
                  <div className="resume-templates-best-for-label">Найкраще для:</div>
                  <div className="resume-templates-best-for-text">{template.bestFor}</div>
                </div>
                <a
                  href={template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-templates-template-link"
                  style={{ background: template.gradient }}
                >
                  <span>Переглянути демо</span>
                  <span className="resume-templates-link-arrow">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="resume-templates-tips-section">
          <h2 className="resume-templates-section-title">4 ключові поради</h2>
          <div className="resume-templates-tips-grid">
            <div className="resume-templates-tip-card">
              <div className="resume-templates-tip-number">01</div>
              <h3>Ключові слова</h3>
              <p>Додай 10-15 слів з вакансії у резюме.</p>
            </div>
            <div className="resume-templates-tip-card">
              <div className="resume-templates-tip-number">02</div>
              <h3>Кількість</h3>
              <p>15 рядків досвіду, 40% на досягнення (цифри!).</p>
            </div>
            <div className="resume-templates-tip-card">
              <div className="resume-templates-tip-number">03</div>
              <h3>Формат</h3>
              <p>PDF, шрифт 10-12pt, без таблиць/графіки.</p>
            </div>
            <div className="resume-templates-tip-card">
              <div className="resume-templates-tip-number">04</div>
              <h3>Тестування</h3>
              <p>Перевір у Jobscan/Google for Jobs, адаптуй під парсери.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="resume-templates-cta-section">
          <div className="resume-templates-cta-content">
            <h2 className="resume-templates-cta-title">Готові створити своє резюме?</h2>
            <p className="resume-templates-cta-description">
              Оберіть підхожий пакет або отримайте індивідуальний проект
              під ваші потреби
            </p>
            <div className="resume-templates-cta-buttons">
              <button
                className="resume-templates-cta-btn resume-templates-cta-btn-primary"
                onClick={() => window.location.href = '/briefs'}
              >
                Отримати проект
              </button>
              <button
                className="resume-templates-cta-btn resume-templates-cta-btn-secondary"
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

export default ResumeTemplates;

