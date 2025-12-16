import React, { useState } from 'react';
import './TargetAdvertising.css';
import './TargetAdvertising.mobile.css';

const TargetAdvertising = () => {
    const [showExamples, setShowExamples] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const examples = [
        { id: 1, alt: 'Результат кампанії 1 – зростання звернень на 15%', src: '/facebook-ads/target1.webp' },
        { id: 2, alt: 'Результат кампанії 2 – зниження ціни за клік до 0.12$', src: '/facebook-ads/target2.webp' },
        { id: 3, alt: 'Результат кампанії 3 – збільшення кількості лідів у 2.4 раза', src: '/facebook-ads/target3.webp' },
        { id: 4, alt: 'Результат кампанії 4 – стабільна конверсія протягом 30 днів', src: '/facebook-ads/target4.webp' },
        { id: 5, alt: 'Результат кампанії 5 – оптимізована аудиторія та нижча вартість ліда', src: '/facebook-ads/target5.webp' },
        { id: 6, alt: 'Результат кампанії 6 – реклама на теплу аудиторію дала найвищу ефективність', src: '/facebook-ads/target6.webp' }
    ];

    const services = [
        {
            icon: '📱',
            title: 'Facebook & Instagram',
            description: 'Таргетована реклама у найпопулярніших соцмережах для залучення вашої цільової аудиторії'
        },
        {
            icon: '🎯',
            title: 'Налаштування кампаній',
            description: 'Професійне налаштування рекламних кампаній з оптимізацією під ваші цілі'
        },
        {
            icon: '📊',
            title: 'Аналітика результатів',
            description: 'Детальний аналіз ефективності кампаній та регулярні звіти'
        },
        {
            icon: '💰',
            title: 'Оптимізація бюджету',
            description: 'Максимальна віддача від рекламного бюджету через постійну оптимізацію'
        }
    ];

    const niches = [
        { icon: '💼', title: 'Робота за кордоном', description: 'Реклама вакансій для працевлаштування за кордоном' },
        { icon: '🚌', title: 'Пасажирські перевезення', description: 'Промо маршрутів та послуг перевезень до ЄС' }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % examples.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + examples.length) % examples.length);
    };

    return (
        <div className="target-advertising">
            <div className="target-advertising-container">
                {/* Hero Section */}
                <section className="target-advertising-hero">
                    <div className="hero-icon">🎯</div>
                    <h1 className="target-advertising-title">Таргетована реклама</h1>
                    <p className="target-advertising-description">
                        Запускаємо ефективну рекламу у Facebook та Instagram, щоб допомогти вам залучати більше клієнтів
                    </p>
                </section>

                {/* Niches Section */}
                <section className="target-advertising-niches">
                    <h2 className="section-title">Наші ніші</h2>
                    <div className="niches-grid">
                        {niches.map((niche, index) => (
                            <div key={index} className="niche-card">
                                <div className="niche-icon">{niche.icon}</div>
                                <h3 className="niche-title">{niche.title}</h3>
                                <p className="niche-description">{niche.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Services Section */}
                <section className="target-advertising-services">
                    <h2 className="section-title">Що ми пропонуємо</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools Section */}
                <section className="target-advertising-tools">
                    <h2 className="section-title">Корисні інструменти</h2>
                    <div className="tools-grid">

                        <a
                            href="https://target-and-design-a-simple-start.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tool-card"
                        >
                            <div className="tool-icon">🎓</div>
                            <h3 className="tool-title">Мінікурс: простий старт</h3>
                            <p className="tool-description">Навчіться основам таргетованої реклами</p>
                        </a>

                    </div>
                </section>

                {/* Results Section */}
                <section className="target-advertising-results">
                    <button
                        className="show-results-btn"
                        onClick={() => setShowExamples(!showExamples)}
                    >
                        <span>Результати кампаній</span>
                        <span className={`arrow ${showExamples ? 'open' : ''}`}>▼</span>
                    </button>

                    {showExamples && (
                        <div className="results-slider">
                            <button className="slider-btn prev" onClick={prevSlide}>‹</button>

                            <div className="slider-wrapper">
                                <div
                                    className="slider-track"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {examples.map((example) => (
                                        <div key={example.id} className="slider-item">
                                            <img
                                                src={example.src}
                                                alt={example.alt}
                                                loading="lazy"
                                                className="slider-image"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button className="slider-btn next" onClick={nextSlide}>›</button>

                            <div className="slider-dots">
                                {examples.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* Why Us Section */}
                <section className="target-advertising-why">
                    <h2 className="section-title">Чому обирають нас?</h2>
                    <div className="why-grid">
                        <div className="why-card">
                            <div className="why-icon">✅</div>
                            <h3 className="why-title">Досвід</h3>
                            <p className="why-text">Працюємо з рекламою у Facebook та Instagram понад 3 роки</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">📈</div>
                            <h3 className="why-title">Результати</h3>
                            <p className="why-text">Доведена ефективність кампаній з реальними метриками</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">💬</div>
                            <h3 className="why-title">Підтримка</h3>
                            <p className="why-text">Постійний зв'язок та консультації на всіх етапах</p>
                        </div>
                        <div className="why-card">
                            <div className="why-icon">🎯</div>
                            <h3 className="why-title">Точність</h3>
                            <p className="why-text">Детальне таргетування на вашу цільову аудиторію</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TargetAdvertising;