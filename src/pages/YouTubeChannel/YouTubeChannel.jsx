import React from 'react';
import './YouTubeChannel.css';
import './YouTubeChannel.mobile.css';

const YouTubeChannel = () => {
    const videos = [
        {
            id: 1,
            title: 'Як створюється платформа',
            description: 'Покроковий процес розробки веб-платформи з нуля',
            icon: '🏗️',
            duration: '15:30'
        },
        {
            id: 2,
            title: 'Робота у VS Code',
            description: 'Налаштування середовища та корисні плагіни',
            icon: '💻',
            duration: '12:45'
        },
        {
            id: 3,
            title: 'Написання коду',
            description: 'Практичні приклади розробки функціоналу',
            icon: '⚡',
            duration: '20:15'
        },
        {
            id: 4,
            title: 'За лаштунками',
            description: 'Як влаштована архітектура проєкту',
            icon: '🔧',
            duration: '18:00'
        }
    ];

    const features = [
        {
            icon: '🎓',
            title: 'Навчальні туторіали',
            description: 'Від основ до просунутих концепцій веб-розробки'
        },
        {
            icon: '🛠️',
            title: 'Реальні проєкти',
            description: 'Дивіться, як створюються справжні веб-додатки'
        },
        {
            icon: '💡',
            title: 'Корисні поради',
            description: 'Лайфхаки та best practices від професіоналів'
        },
        {
            icon: '🚀',
            title: 'Новітні технології',
            description: 'React, Node.js, AI інтеграції та багато іншого'
        }
    ];

    return (
        <div className="YouTubeChannel">
            <div className="YouTubeChannel-container">
                {/* Hero Section */}
                <section className="YouTubeChannel-hero">
                    <div className="YouTubeChannel-badge">
                        <span className="YouTubeChannel-badge-icon">📺</span>
                        <span className="YouTubeChannel-badge-text">YouTube Channel</span>
                    </div>

                    <h1 className="YouTubeChannel-title">
                        WebStart Studio
                        <span className="YouTubeChannel-title-accent">YouTube</span>
                    </h1>

                    <p className="YouTubeChannel-description">
                        Занурюйтесь у світ веб-розробки разом з нами! На нашому каналі ви побачите,
                        як насправді створюються сучасні веб-платформи, як працює код у VS Code,
                        та що відбувається за лаштунками професійної розробки.
                    </p>

                    <a
                        href="https://www.youtube.com/@WebStart_Studio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="YouTubeChannel-cta"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                            alt="YouTube"
                            className="YouTubeChannel-logo"
                        />
                        <span className="YouTubeChannel-cta-text">Підписатися на канал</span>
                        <span className="YouTubeChannel-cta-arrow">→</span>
                    </a>
                </section>

                {/* Stats Section */}
                <section className="YouTubeChannel-stats">
                    <div className="YouTubeChannel-stat-card">
                        <div className="YouTubeChannel-stat-icon">🎬</div>
                        <div className="YouTubeChannel-stat-number">50+</div>
                        <div className="YouTubeChannel-stat-label">Відео</div>
                    </div>
                    <div className="YouTubeChannel-stat-card">
                        <div className="YouTubeChannel-stat-icon">👥</div>
                        <div className="YouTubeChannel-stat-number">1K+</div>
                        <div className="YouTubeChannel-stat-label">Підписників</div>
                    </div>
                    <div className="YouTubeChannel-stat-card">
                        <div className="YouTubeChannel-stat-icon">⏱️</div>
                        <div className="YouTubeChannel-stat-number">100+</div>
                        <div className="YouTubeChannel-stat-label">Годин контенту</div>
                    </div>
                </section>

                {/* What You'll Find Section */}
                <section className="YouTubeChannel-content">
                    <h2 className="YouTubeChannel-section-title">Що ви знайдете на каналі?</h2>

                    <div className="YouTubeChannel-content-grid">
                        {videos.map((video) => (
                            <div key={video.id} className="YouTubeChannel-content-card">
                                <div className="YouTubeChannel-card-icon">{video.icon}</div>
                                <h3 className="YouTubeChannel-card-title">{video.title}</h3>
                                <p className="YouTubeChannel-card-description">{video.description}</p>
                                <div className="YouTubeChannel-card-duration">
                                    <span className="YouTubeChannel-duration-icon">🕐</span>
                                    <span className="YouTubeChannel-duration-text">{video.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Features Section */}
                <section className="YouTubeChannel-features">
                    <h2 className="YouTubeChannel-section-title">Чому варто підписатися?</h2>

                    <div className="YouTubeChannel-features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="YouTubeChannel-feature-item">
                                <div className="YouTubeChannel-feature-icon">{feature.icon}</div>
                                <h3 className="YouTubeChannel-feature-title">{feature.title}</h3>
                                <p className="YouTubeChannel-feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Behind the Scenes Section */}
                <section className="YouTubeChannel-behind">
                    <div className="YouTubeChannel-behind-content">
                        <h2 className="YouTubeChannel-behind-title">За лаштунками розробки</h2>
                        <p className="YouTubeChannel-behind-text">
                            Ми показуємо реальний процес створення веб-платформ: від першого рядка коду
                            до фінального деплою. Дивіться, як пишеться чистий код, як налаштовується
                            VS Code, які інструменти використовують професіонали, та як вирішуються
                            реальні задачі у веб-розробці.
                        </p>

                        <div className="YouTubeChannel-behind-topics">
                            <div className="YouTubeChannel-topic-tag">React Development</div>
                            <div className="YouTubeChannel-topic-tag">VS Code Setup</div>
                            <div className="YouTubeChannel-topic-tag">Code Review</div>
                            <div className="YouTubeChannel-topic-tag">Best Practices</div>
                            <div className="YouTubeChannel-topic-tag">AI Integration</div>
                            <div className="YouTubeChannel-topic-tag">UI/UX Design</div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="YouTubeChannel-final-cta">
                    <div className="YouTubeChannel-final-cta-content">
                        <h2 className="YouTubeChannel-final-cta-title">Готові почати навчання?</h2>
                        <p className="YouTubeChannel-final-cta-text">
                            Приєднуйтесь до нашої спільноти розробників та отримайте доступ до
                            ексклюзивного контенту про веб-розробку
                        </p>
                        <a
                            href="https://www.youtube.com/@WebStart_Studio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="YouTubeChannel-final-cta-button"
                        >
                            <span className="YouTubeChannel-button-icon">▶️</span>
                            <span className="YouTubeChannel-button-text">Дивитися зараз</span>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default YouTubeChannel;
