import React from 'react';
import './Innovations.css';
import './Innovations.mobile.css';

const Innovations = () => {
    return (
        <div className="innovations">
            <div className="innovations-container">
                <header className="innovations-header">
                    <h1>Новації та Еволюція</h1>
                    <p className="innovations-subtitle">Від класичного HTML до сучасного React</p>
                </header>

                <section className="innovations-content">
                    <div className="innovations-text">
                        <h2>Початок шляху</h2>
                        <p>
                            WebStart Studio розпочинала свій шлях як проста платформа, побудована
                            на класичних веб-технологіях: HTML, CSS та JavaScript. Це була перша
                            версія нашої студії, яка закладала фундамент для всього, що ми маємо сьогодні.
                        </p>

                        <h3>Класична версія платформи</h3>
                        <p>
                            Оригінальна версія платформи була створена з використанням простих,
                            але ефективних технологій. Вона включала базовий інтерфейс, систему
                            навігації та основний функціонал для роботи зі студією.
                        </p>

                        <div className="innovations-feature-list">
                            <h4>Основні елементи початкової версії:</h4>
                            <ul>
                                <li>Чистий HTML-розмітка без фреймворків</li>
                                <li>Нативний CSS для стилізації</li>
                                <li>Vanilla JavaScript для інтерактивності</li>
                                <li>Проста структура файлів</li>
                                <li>Швидке завантаження сторінок</li>
                            </ul>
                        </div>

                        <div className="innovations-migration-info">
                            <h3>Міграція на React</h3>
                            <p>
                                З розвитком проекту та зростанням функціоналу, ми прийняли рішення
                                мігрувати платформу на React. Це дозволило нам створити більш
                                структурований, масштабований та підтримуваний код. Сучасна версія
                                WebStart Studio — це еволюція тієї самої ідеї, яка народилася в
                                класичній веб-розробці.
                            </p>
                        </div>

                        <div className="innovations-link-section">
                            <h4>Подивитися оригінальну версію:</h4>
                            <a
                                href="https://scintillating-sunshine-94e986.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="innovations-original-link"
                            >
                                Відкрити класичну платформу →
                            </a>
                        </div>
                    </div>

                    <div className="innovations-image">
                        <div className="innovations-image-wrapper">
                            <img
                                src="/assets/original_version.webp"
                                alt="WebStart Studio - Оригінальна версія"
                            />
                            <p className="innovations-image-caption">
                                Інтерфейс оригінальної версії WebStart Studio
                            </p>
                        </div>
                    </div>
                </section>

                <section className="innovations-evolution-timeline">
                    <h2>Еволюція платформи</h2>
                    <div className="innovations-timeline">
                        <div className="innovations-timeline-item">
                            <div className="innovations-timeline-marker"></div>
                            <div className="innovations-timeline-content">
                                <h4>Версія 1.0 - HTML/CSS/JS</h4>
                                <p>Початкова версія з базовим функціоналом</p>
                            </div>
                        </div>
                        <div className="innovations-timeline-item">
                            <div className="innovations-timeline-marker"></div>
                            <div className="innovations-timeline-content">
                                <h4>Версія 2.0 - React</h4>
                                <p>Повна міграція на React з компонентною архітектурою</p>
                            </div>
                        </div>
                        <div className="innovations-timeline-item">
                            <div className="innovations-timeline-marker"></div>
                            <div className="innovations-timeline-content">
                                <h4>Майбутнє</h4>
                                <p>Постійний розвиток та нові можливості</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Innovations;