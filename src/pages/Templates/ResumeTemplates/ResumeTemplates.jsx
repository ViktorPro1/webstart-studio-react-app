import React, { useState } from 'react';
import './ResumeTemplates.css';

const ResumeTemplates = () => {
    const [activeTemplate, setActiveTemplate] = useState(null);

    const templates = [
        {
            id: 'classic',
            name: 'Classic',
            url: 'https://cute-eclair-b92b0f.netlify.app/',
            color: '#3b82f6',
            gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
            icon: '📄',
            description: 'Перевірений часом формат для консервативних галузей',
            features: ['Чітка структура', 'Традиційна типографіка', 'PDF експорт', 'ATS-friendly'],
            bestFor: 'Фінанси, право, медицина, державний сектор',
            popularity: '85%'
        },
        {
            id: 'creative',
            name: 'Creative',
            url: 'https://resonant-fudge-055f66.netlify.app/',
            color: '#f43f5e',
            gradient: 'linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)',
            icon: '🎨',
            description: 'Сміливий дизайн для творчих професій',
            features: ['Унікальна верстка', 'Інтерактивні елементи', 'Портфоліо галерея', 'Анімації'],
            bestFor: 'Дизайнери, маркетологи, креативні директори',
            popularity: '92%'
        },
        {
            id: 'minimal',
            name: 'Minimal',
            url: 'https://frolicking-sunflower-90993f.netlify.app/',
            color: '#64748b',
            gradient: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
            icon: '✨',
            description: 'Мінімалізм, що привертає увагу до змісту',
            features: ['Чистий дизайн', 'Акцент на досвід', 'Швидке завантаження', 'Елегантність'],
            bestFor: 'Архітектори, письменники, консультанти',
            popularity: '78%'
        },
        {
            id: 'premium',
            name: 'Premium',
            url: 'https://fluffy-sawine-100fa8.netlify.app/',
            color: '#eab308',
            gradient: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)',
            icon: '👑',
            description: 'Ексклюзивний формат для топових позицій',
            features: ['Розкішний вигляд', 'Відео-презентація', 'Інтеграції', 'VIP досвід'],
            bestFor: 'C-level, топ-менеджери, експерти світового рівня',
            popularity: '95%'
        }
    ];

    return (
        <div className="resume-templates">
            <div className="templates-wrapper">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-content">
                        <div className="hero-badge">📝 Резюме 2025</div>
                        <h1 className="hero-title">
                            Резюме, яке <br />
                            <span className="highlight">відкриває двері</span>
                        </h1>
                        <p className="hero-description">
                            Електронні резюме нового покоління. Ми поєднуємо професійний дизайн з
                            психологією сприйняття, щоб ваше CV виділялося серед сотень інших.
                            Готові шаблони з інтерактивними блоками навичок та адаптивним дизайном.
                        </p>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <div className="stat-number">4</div>
                                <div className="stat-label">Професійних стилів</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">95%</div>
                                <div className="stat-label">Успішних відгуків</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number">∞</div>
                                <div className="stat-label">Можливостей</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="benefits-section">
                    <h2 className="section-title">Переваги електронного резюме</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <div className="benefit-icon">🚀</div>
                            <h3>Швидке оновлення</h3>
                            <p>Змінюйте інформацію в реальному часі без необхідності перевідправляти файли</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">📊</div>
                            <h3>Аналітика переглядів</h3>
                            <p>Відстежуйте, хто і коли переглядав ваше резюме, отримуйте статистику</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🎯</div>
                            <h3>Інтерактивність</h3>
                            <p>Додавайте відео-презентації, живі посилання на проєкти та портфоліо</p>
                        </div>
                        <div className="benefit-card">
                            <div className="benefit-icon">🔗</div>
                            <h3>Просте поширення</h3>
                            <p>Одне посилання замість десятків файлів - діліться в один клік</p>
                        </div>
                    </div>
                </section>

                {/* Templates Grid */}
                <section className="templates-section">
                    <h2 className="section-title">Виберіть формат резюме</h2>
                    <p className="section-subtitle">
                        Кожен шаблон адаптований під конкретну галузь та рівень позиції
                    </p>

                    <div className="templates-grid">
                        {templates.map((template) => (
                            <div
                                key={template.id}
                                className={`template-card ${activeTemplate === template.id ? 'active' : ''}`}
                                onMouseEnter={() => setActiveTemplate(template.id)}
                                onMouseLeave={() => setActiveTemplate(null)}
                                style={{ '--card-color': template.color }}
                            >
                                <div className="template-header">
                                    <div className="template-icon" style={{ background: template.gradient }}>
                                        {template.icon}
                                    </div>
                                    <div className="popularity-badge">
                                        <span className="popularity-star">⭐</span>
                                        {template.popularity}
                                    </div>
                                </div>

                                <h3 className="template-name">{template.name}</h3>
                                <p className="template-description">{template.description}</p>

                                <div className="template-features">
                                    <div className="features-label">Ключові особливості:</div>
                                    <ul className="features-list">
                                        {template.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="template-best-for">
                                    <div className="best-for-label">💼 Ідеально для:</div>
                                    <div className="best-for-text">{template.bestFor}</div>
                                </div>

                                <a
                                    href={template.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="template-link"
                                    style={{ background: template.gradient }}
                                >
                                    <span>Переглянути приклад</span>
                                    <span className="link-arrow">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tips Section */}
                <section className="tips-section">
                    <h2 className="section-title">Як створити ідеальне резюме?</h2>
                    <div className="tips-grid">
                        <div className="tip-card">
                            <div className="tip-number">01</div>
                            <h3>Чіткість та структура</h3>
                            <p>Використовуйте зрозумілі заголовки та логічну послідовність розділів. Рекрутер має знайти потрібну інформацію за 10 секунд.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-number">02</div>
                            <h3>Конкретні досягнення</h3>
                            <p>Замість "керував командою" пишіть "керував командою з 15 осіб, збільшив продуктивність на 40%". Цифри працюють.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-number">03</div>
                            <h3>Адаптація під вакансію</h3>
                            <p>Кожне резюме має бути персоналізоване під конкретну позицію. Використовуйте ключові слова з опису вакансії.</p>
                        </div>
                        <div className="tip-card">
                            <div className="tip-number">04</div>
                            <h3>Візуальна привабливість</h3>
                            <p>Дизайн має відповідати вашій галузі. Креативні професії можуть дозволити сміливість, консервативні - стриманість.</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="cta-content">
                        <h2 className="cta-title">Готові до наступного кроку в кар'єрі?</h2>
                        <p className="cta-description">
                            Замовте індивідуальну консультацію та отримайте резюме, яке підкреслює
                            ваші сильні сторони та відповідає трендам ринку праці 2025 року
                        </p>
                        <div className="cta-buttons">
                            <button className="cta-btn primary">
                                Створити резюме
                            </button>
                            <button className="cta-btn secondary">
                                Консультація HR-експерта
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ResumeTemplates;