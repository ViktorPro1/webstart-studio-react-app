import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, GitCompare, Book, Sparkles, Search, ArrowRight, GraduationCap, Target, TrendingUp, Zap } from 'lucide-react';
import './GoogleAdsLearning.css';
import './GoogleAdsLearning.mobile.css';

interface Tool {
    path: string;
    icon: React.ElementType;
    title: string;
    description: string;
    color: string;
}

interface Benefit {
    icon: React.ElementType;
    title: string;
    description: string;
}

const GoogleAdsLearning: React.FC = () => {
    const tools: Tool[] = [
        {
            path: '/google-ads/calculator',
            icon: Calculator,
            title: 'Калькулятор бюджету',
            description: 'Розрахуйте оптимальний бюджет для вашої рекламної кампанії та спрогнозуйте результати',
            color: '#4285f4'
        },
        {
            path: '/google-ads/comparison',
            icon: GitCompare,
            title: 'Порівняння платформ',
            description: 'Порівняйте Google Ads з Facebook/Instagram Ads та оберіть найкращу стратегію',
            color: '#ea4335'
        },
        {
            path: '/google-ads/glossary',
            icon: Book,
            title: 'Глосарій термінів',
            description: 'Всі важливі терміни та поняття контекстної реклами в одному місці',
            color: '#fbbc04'
        },
        {
            path: '/google-ads/generator',
            icon: Sparkles,
            title: 'Генератор оголошень',
            description: 'Створюйте ефективні рекламні оголошення за допомогою AI та перевірених шаблонів',
            color: '#34a853'
        },
        {
            path: '/google-ads/keywords',
            icon: Search,
            title: 'Ключові слова',
            description: 'Підбирайте, аналізуйте та оптимізуйте ключові слова для максимальної ефективності',
            color: '#4285f4'
        }
    ];

    const benefits: Benefit[] = [
        {
            icon: Target,
            title: 'Точне таргетування',
            description: 'Досягайте саме тих клієнтів, які шукають ваші товари чи послуги'
        },
        {
            icon: TrendingUp,
            title: 'Вимірювані результати',
            description: 'Відстежуйте кожну копійку та оптимізуйте кампанії в реальному часі'
        },
        {
            icon: Zap,
            title: 'Швидкий старт',
            description: 'Запустіть рекламу за лічені години та отримайте перші результати'
        },
        {
            icon: GraduationCap,
            title: 'Навчання та підтримка',
            description: 'Використовуйте інструменти для швидкого освоєння Google Ads'
        }
    ];

    return (
        <div className="google-ads-learning">
            <div className="google-ads-learning__hero">
                <div className="google-ads-learning__hero-content">
                    <div className="google-ads-learning__hero-badge">
                        <GraduationCap size={20} />
                        <span>Інформація</span>
                    </div>
                    <h1 className="google-ads-learning__hero-title">
                        Ми вивчаємо Google Ads
                    </h1>
                    <p className="google-ads-learning__hero-description">
                        Наша команда активно вивчає рекламу в Google Ads, тому на даний момент ми не запускаємо
                        рекламні кампанії. Поки ми освоюємо всі можливості платформи, ви можете скористатися
                        корисними інструментами, які ми додали в цьому розділі.
                    </p>
                    <div className="google-ads-learning__hero-stats">
                        <div className="google-ads-learning__stat-item">
                            <div className="google-ads-learning__stat-number">5</div>
                            <div className="google-ads-learning__stat-label">Доступних інструментів</div>
                        </div>
                        <div className="google-ads-learning__stat-item">
                            <div className="google-ads-learning__stat-number">100%</div>
                            <div className="google-ads-learning__stat-label">Безкоштовно</div>
                        </div>
                        <div className="google-ads-learning__stat-item">
                            <div className="google-ads-learning__stat-number">24/7</div>
                            <div className="google-ads-learning__stat-label">Доступ</div>
                        </div>
                    </div>
                </div>
                <div className="google-ads-learning__hero-decoration">
                    <div className="google-ads-learning__decoration-circle google-ads-learning__decoration-circle--1"></div>
                    <div className="google-ads-learning__decoration-circle google-ads-learning__decoration-circle--2"></div>
                    <div className="google-ads-learning__decoration-circle google-ads-learning__decoration-circle--3"></div>
                </div>
            </div>

            <section className="google-ads-learning__benefits-section">
                <h2 className="google-ads-learning__section-title">Чому Google Ads?</h2>
                <div className="google-ads-learning__benefits-grid">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="google-ads-learning__benefit-card">
                            <div className="google-ads-learning__benefit-icon">
                                <benefit.icon size={28} />
                            </div>
                            <h3 className="google-ads-learning__benefit-title">{benefit.title}</h3>
                            <p className="google-ads-learning__benefit-description">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="google-ads-learning__tools-section">
                <div className="google-ads-learning__tools-header">
                    <h2 className="google-ads-learning__section-title">Доступні інструменти</h2>
                    <p className="google-ads-learning__section-subtitle">
                        Поки ми вивчаємо Google Ads, скористайтеся інструментами в цьому розділі.
                        Вони допоможуть вам у роботі з контекстною рекламою.
                    </p>
                </div>
                <div className="google-ads-learning__tools-grid">
                    {tools.map((tool, index) => {
                        const Icon = tool.icon;
                        return (
                            <Link
                                key={index}
                                to={tool.path}
                                className="google-ads-learning__tool-card"
                                style={{ '--tool-color': tool.color } as React.CSSProperties}
                            >
                                <div className="google-ads-learning__tool-icon" style={{ backgroundColor: `${tool.color}15` }}>
                                    <Icon size={32} style={{ color: tool.color }} />
                                </div>
                                <div className="google-ads-learning__tool-content">
                                    <h3 className="google-ads-learning__tool-title">{tool.title}</h3>
                                    <p className="google-ads-learning__tool-description">{tool.description}</p>
                                </div>
                                <div className="google-ads-learning__tool-arrow">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            <section className="google-ads-learning__cta-section">
                <div className="google-ads-learning__cta-content">
                    <BookOpen size={48} className="google-ads-learning__cta-icon" />
                    <h2 className="google-ads-learning__cta-title">Оберіть інструмент</h2>
                    <p className="google-ads-learning__cta-description">
                        Виберіть будь-який інструмент вище та використовуйте його для роботи з контекстною рекламою.
                        Ми продовжуємо вивчати Google Ads та незабаром зможемо запускати рекламні кампанії.
                    </p>
                    <div className="google-ads-learning__cta-badge">
                        <Sparkles size={16} />
                        <span>Ми працюємо над освоєнням Google Ads</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GoogleAdsLearning;