import React, { useState } from 'react';
import './CanvaServices.css';
import './CanvaServices.mobile.css';

const CanvaServices = () => {
    const [showExamples, setShowExamples] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const examples = [
        { id: 1, alt: 'Приклад банера 1', src: '/canva/canva1.webp' },
        { id: 2, alt: 'Приклад банера 2', src: '/canva/canva2.webp' },
        { id: 3, alt: 'Приклад банера 3', src: '/canva/canva3.webp' },
        { id: 4, alt: 'Приклад банера 4', src: '/canva/canva4.webp' },
        { id: 5, alt: 'Приклад банера 5', src: '/canva/canva5.webp' },
        { id: 6, alt: 'Приклад банера 6', src: '/canva/canva6.webp' }
    ];

    const services = [
        {
            icon: '🎨',
            title: 'Дизайн банерів',
            description: 'Створюємо яскраві та ефективні банери для реклами у соцмережах, Google Ads та інших платформах'
        },
        {
            icon: '📱',
            title: 'Шаблони для соцмереж',
            description: 'Готові шаблони для Instagram, Facebook, LinkedIn з вашим брендингом та стилем'
        },
        {
            icon: '🔲',
            title: 'QR-коди',
            description: 'Генеруємо та інтегруємо QR-коди у ваші матеріали для швидкого доступу до інформації'
        },
        {
            icon: '🤖',
            title: 'AI генерація',
            description: 'Використовуємо штучний інтелект для створення унікальних зображень та графіки'
        }
    ];

    const pricing = [
        {
            service: 'Простий банер (фото + текст + телефон + пошта)',
            price: '300 грн'
        },
        {
            service: 'Додавання QR-коду',
            price: '100 грн'
        },
        {
            service: 'Генерація фото штучним інтелектом',
            price: '100 грн'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % examples.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + examples.length) % examples.length);
    };

    return (
        <div className="canva">
            <div className="canva-container">
                {/* Hero Section */}
                <section className="canva-hero">
                    <div className="canva-hero-icon">🖼️</div>
                    <h1 className="canva-title">Банери та Шаблони</h1>
                    <p className="canva-description">
                        Створюємо банери, шаблони та креативи для реклами, соцмереж і сайтів за допомогою Canva.
                        Можемо додати QR-коди, згенерувати фото штучним інтелектом та інші елементи для максимального
                        візуального ефекту.
                    </p>
                </section>

                {/* Services Grid */}
                <section className="canva-grid">
                    <h2 className="canva-section-title">Що ми створюємо</h2>
                    <div className="canva-services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="canva-service-card">
                                <div className="canva-service-icon">{service.icon}</div>
                                <h3 className="canva-service-title">{service.title}</h3>
                                <p className="canva-service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="canva-pricing">
                    <h2 className="canva-section-title">Оптимальний вибір</h2>
                    <div className="canva-pricing-table-wrapper">
                        <table className="canva-pricing-table">
                            <thead>
                                <tr>
                                    <th>Пропонуємо</th>
                                    <th>Просимо</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricing.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.service}</td>
                                        <td className="canva-price-cell">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Mini Course CTA */}
                <section className="canva-cta">
                    <div className="canva-cta-card">
                        <h2 className="canva-cta-title">Хочете навчитися самому у Canva?</h2>
                        <p className="canva-cta-text">
                            Пройдіть наш безкоштовний мінікурс "Простий старт у Canva" та дізнайтеся,
                            як створювати професійні дизайни самостійно
                        </p>
                        <a
                            href="https://target-and-design-a-simple-start.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="canva-cta-button"
                        >
                            <span className="canva-button-icon">🎨</span>
                            <span className="button-text">Мінікурс: простий старт у Canva</span>
                        </a>
                    </div>
                </section>

                {/* Examples Section */}
                <section className="canva-examples">
                    <button
                        className="canva-show-examples-btn"
                        onClick={() => setShowExamples(!showExamples)}
                    >
                        <span>Приклади креативів</span>
                        <span className={`canva-arrow ${showExamples ? 'open' : ''}`}>▼</span>
                    </button>

                    {showExamples && (
                        <div className="canva-examples-slider">
                            <button className="canva-slider-btn prev" onClick={prevSlide}>
                                ‹
                            </button>

                            <div className="canva-slider-wrapper">
                                <div
                                    className="canva-slider-track"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {examples.map((example) => (
                                        <div key={example.id} className="canva-slider-item">
                                            <img
                                                src={example.src}
                                                alt={example.alt}
                                                loading="lazy"
                                                className="canva-slider-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="canva-slider-btn next" onClick={nextSlide}>
                                ›
                            </button>

                            <div className="canva-slider-dots">
                                {examples.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`canva-dot ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Features Section */}
                <section className="canva-features">
                    <h2 className="canva-section-title">Чому обирають нас?</h2>
                    <div className="canva-features-grid">
                        <div className="canva-feature-item">
                            <div className="canva-feature-icon">⚡</div>
                            <h3 className="canva-feature-title">Швидко</h3>
                            <p className="canva-feature-text">Створюємо банери та шаблони за 1-2 дні</p>
                        </div>
                        <div className="canva-feature-item">
                            <div className="canva-feature-icon">💎</div>
                            <h3 className="canva-feature-title">Якісно</h3>
                            <p className="canva-feature-text">Дизайн, що привертає увагу</p>
                        </div>
                        <div className="canva-feature-item">
                            <div className="canva-feature-icon">🎯</div>
                            <h3 className="canva-feature-title">Ефективно</h3>
                            <p className="canva-feature-text">Креативи, що конвертують відвідувачів у клієнтів</p>
                        </div>
                        <div className="canva-feature-item">
                            <div className="canva-feature-icon">💰</div>
                            <h3 className="canva-feature-title">Доступно</h3>
                            <p className="canva-feature-text">Без прихованих витрат</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CanvaServices;