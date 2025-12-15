import React, { useState } from 'react';
import './PortfolioTemplates.css';

const PortfolioTemplates = () => {
    const [activeTemplate, setActiveTemplate] = useState(null);

    const templates = [
        {
            id: 'developer',
            name: 'Developer Style',
            url: 'https://benevolent-naiad-cb3a58.netlify.app/',
            color: '#2dd4bf',
            gradient: 'linear-gradient(135deg, #2dd4bf 0%, #14b8a6 100%)',
            icon: '💻',
            description: 'Мінімалістичний дизайн для розробників',
            features: ['Темна тема', 'Code snippets', 'GitHub інтеграція', 'Технічний стек'],
            bestFor: 'Frontend/Backend розробники, DevOps інженери'
        },
        {
            id: 'minimal',
            name: 'Minimal Style',
            url: 'https://dashing-tanuki-7f8fb0.netlify.app/',
            color: '#8b5cf6',
            gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
            icon: '✨',
            description: 'Елегантність у простоті',
            features: ['Чистий дизайн', 'Швидке завантаження', 'Акцент на контент', 'Типографіка'],
            bestFor: 'Дизайнери, письменники, фотографи'
        },
        {
            id: 'gradient',
            name: 'Modern Gradient',
            url: 'https://fantastic-parfait-65ff15.netlify.app/',
            color: '#ec4899',
            gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
            icon: '🎨',
            description: 'Яскраві градієнти та сміливі рішення',
            features: ['Анімовані градієнти', 'Smooth scrolling', '3D ефекти', 'Інтерактивність'],
            bestFor: 'Креативні професії, UI/UX дизайнери, ілюстратори'
        },
        {
            id: 'premium',
            name: 'Premium',
            url: 'https://starlit-tapioca-5f8da4.netlify.app/',
            color: '#f59e0b',
            gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
            icon: '👑',
            description: 'Преміальний досвід для топових фахівців',
            features: ['Розкішний дизайн', 'Відео-презентації', 'Анімації премієм', 'Ексклюзивність'],
            bestFor: 'Топ-менеджери, консультанти, бізнес-тренери'
        }
    ];

    return (
        <div className="portfolio-templates">
            <div className="portfolio-templates__wrapper">
                {/* Hero Section */}
                <section className="portfolio-templates__hero">
                    <div className="portfolio-templates__hero-content">
                        <div className="portfolio-templates__hero-badge">🎨 Портфоліо 2025</div>
                        <h1 className="portfolio-templates__hero-title">
                            Дизайн портфоліо, <br />
                            який <span className="portfolio-templates__highlight">продає</span>
                        </h1>
                        <p className="portfolio-templates__hero-description">
                            Професійні шаблони портфоліо, створені за останніми трендами веб-дизайну.
                            Кожен макет оптимізований для швидкого завантаження, адаптивний під всі
                            пристрої та готовий до персоналізації під ваші потреби.
                        </p>
                        <div className="portfolio-templates__hero-stats">
                            <div className="portfolio-templates__stat-item">
                                <div className="portfolio-templates__stat-number">4</div>
                                <div className="portfolio-templates__stat-label">Унікальних стилів</div>
                            </div>
                            <div className="portfolio-templates__stat-item">
                                <div className="portfolio-templates__stat-number">100%</div>
                                <div className="portfolio-templates__stat-label">Адаптивність</div>
                            </div>
                            <div className="portfolio-templates__stat-item">
                                <div className="portfolio-templates__stat-number">24/7</div>
                                <div className="portfolio-templates__stat-label">Підтримка</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="portfolio-templates__features">
                    <h2 className="portfolio-templates__section-title">Чому наші портфоліо особливі?</h2>
                    <div className="portfolio-templates__features-grid">
                        <div className="portfolio-templates__feature-card">
                            <div className="portfolio-templates__feature-icon">⚡</div>
                            <h3>Блискавична швидкість</h3>
                            <p>Оптимізовані під Core Web Vitals для ідеальної продуктивності</p>
                        </div>
                        <div className="portfolio-templates__feature-card">
                            <div className="portfolio-templates__feature-icon">📱</div>
                            <h3>Адаптивний дизайн</h3>
                            <p>Ідеально виглядають на всіх пристроях - від смартфонів до 4K моніторів</p>
                        </div>
                        <div className="portfolio-templates__feature-card">
                            <div className="portfolio-templates__feature-icon">🎯</div>
                            <h3>SEO-оптимізація</h3>
                            <p>Вбудовані мета-теги та структура для кращого ранжування в пошуку</p>
                        </div>
                        <div className="portfolio-templates__feature-card">
                            <div className="portfolio-templates__feature-icon">🎨</div>
                            <h3>Сучасний дизайн</h3>
                            <p>Тренди 2025: glassmorphism, micro-interactions, bold typography</p>
                        </div>
                    </div>
                </section>

                {/* Templates Grid */}
                <section className="portfolio-templates__templates">
                    <h2 className="portfolio-templates__section-title">Оберіть свій стиль</h2>
                    <p className="portfolio-templates__section-subtitle">
                        Кожен шаблон розроблений з увагою до деталей та готовий до використання
                    </p>

                    <div className="portfolio-templates__grid">
                        {templates.map((template, index) => (
                            <div
                                key={template.id}
                                className={`portfolio-templates__card ${activeTemplate === template.id ? 'portfolio-templates__card--active' : ''
                                    }`}
                                onMouseEnter={() => setActiveTemplate(template.id)}
                                onMouseLeave={() => setActiveTemplate(null)}
                                style={{ '--card-color': template.color }}
                            >
                                <div className="portfolio-templates__card-header">
                                    <div className="portfolio-templates__card-icon" style={{ background: template.gradient }}>
                                        {template.icon}
                                    </div>
                                    <div className="portfolio-templates__card-badge">Популярний</div>
                                </div>

                                <h3 className="portfolio-templates__card-name">{template.name}</h3>
                                <p className="portfolio-templates__card-description">{template.description}</p>

                                <div className="portfolio-templates__card-features">
                                    <div className="portfolio-templates__features-label">Що включено:</div>
                                    <ul className="portfolio-templates__features-list">
                                        {template.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <span className="portfolio-templates__feature-check">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="portfolio-templates__card-best-for">
                                    <strong>Підходить для:</strong> {template.bestFor}
                                </div>

                                <a
                                    href={template.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="portfolio-templates__card-link"
                                    style={{ background: template.gradient }}
                                >
                                    <span>Переглянути демо</span>
                                    <span className="portfolio-templates__link-arrow">→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="portfolio-templates__cta">
                    <div className="portfolio-templates__cta-content">
                        <h2 className="portfolio-templates__cta-title">Готові створити своє портфоліо?</h2>
                        <p className="portfolio-templates__cta-description">
                            Зв'яжіться з нами для індивідуальної консультації та отримайте
                            персоналізований дизайн, який ідеально підходить під ваші цілі
                        </p>
                        <div className="portfolio-templates__cta-buttons">
                            <button className="portfolio-templates__cta-btn portfolio-templates__cta-btn--primary">
                                Замовити портфоліо
                            </button>
                            <button className="portfolio-templates__cta-btn portfolio-templates__cta-btn--secondary">
                                Безкоштовна консультація
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PortfolioTemplates;