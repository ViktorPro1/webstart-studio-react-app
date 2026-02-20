import React from 'react';
import { MessageCircle, Zap, Clock, Shield, Heart, Compass } from 'lucide-react';
import './Assistant.css';
import './Assistant.mobile.css';

const Assistant = () => {
    return (
        <div className="assistant-page">
            <section className="assistant-hero">
                <div className="assistant-hero-content">
                    <div className="assistant-hero-text">
                        <h1 className="assistant-title">
                            Привіт! Я — <span className="highlight">Djon</span> 👋
                        </h1>
                        <p className="assistant-subtitle">
                            Твій особистий гід у WebStart Studio
                        </p>
                        <p className="assistant-description">
                            Я тут, щоб допомогти тобі зорієнтуватися на нашому сайті!
                            Маєш питання про послуги? Не знаєш, куди звернутися? Хочеш дізнатися про ціни?
                            Я з радістю підкажу і направлю в потрібне місце!
                        </p>
                    </div>
                    <div className="assistant-hero-image">
                        <img src="/nasha_komanda/assistant.webp" alt="Djon - Твій гід" />
                        <div className="assistant-badge">
                            <Compass size={20} />
                            <span>Завжди допоможу</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="assistant-features">
                <h2 className="section-title">Чим я можу допомогти?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">
                            <MessageCircle size={32} />
                        </div>
                        <h3>Швидкі підказки</h3>
                        <p>Підкажу, де знайти потрібну інформацію на сайті. Просто запитай!</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Zap size={32} />
                        </div>
                        <h3>Про послуги</h3>
                        <p>Розповім про наші послуги, пакети та ціни. Допоможу обрати!</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Clock size={32} />
                        </div>
                        <h3>Зв'язок з командою</h3>
                        <p>Направлю до потрібного спеціаліста або допоможу залишити заявку.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Shield size={32} />
                        </div>
                        <h3>Цікаві факти</h3>
                        <p>Поділюся корисними фактами про веб-розробку та наші переваги.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Heart size={32} />
                        </div>
                        <h3>Дружнє спілкування</h3>
                        <p>Спілкуюся простою мовою, без складних термінів. Ми на одній хвилі!</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <Compass size={32} />
                        </div>
                        <h3>Навігація сайтом</h3>
                        <p>Допоможу знайти потрібну сторінку - контакти, портфоліо, блог.</p>
                    </div>
                </div>
            </section>

            <section className="assistant-how-it-works">
                <h2 className="section-title">Як зі мною зв'язатися?</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h3>Натисни на іконку</h3>
                        <p>Знайди мою іконку чату в правому нижньому куті будь-якої сторінки</p>
                    </div>

                    <div className="step">
                        <div className="step-number">2</div>
                        <h3>Напиши мені</h3>
                        <p>Опиши, що тебе цікавить або задай питання простими словами</p>
                    </div>

                    <div className="step">
                        <div className="step-number">3</div>
                        <h3>Отримай підказку</h3>
                        <p>Я швидко відповім та підкажу, куди звернутися або що подивитися</p>
                    </div>
                </div>
            </section>

            <section className="assistant-faq">
                <h2 className="section-title">Питання про мене</h2>
                <div className="faq-list">
                    <div className="faq-item">
                        <h3>Хто ти, Djon?</h3>
                        <p>
                            Я — віртуальний асистент та гід на сайті WebStart Studio.
                            Моя роль — допомагати відвідувачам швидко знаходити потрібну
                            інформацію про наші послуги та направляти до потрібних розділів.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>Ти можеш відповісти на будь-яке питання?</h3>
                        <p>
                            Я знаю багато про наші послуги, ціни та структуру сайту.
                            Якщо питання складне або специфічне, я з радістю направлю
                            тебе до наших живих спеціалістів через Viber, Telegram або форму зв'язку.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>Як швидко ти відповідаєш?</h3>
                        <p>
                            Я намагаюся відповідати миттєво! Пишу підказки за кілька секунд.
                            Але пам'ятай, що для детальної консультації краще звернутися
                            до наших спеціалістів напряму.
                        </p>
                    </div>

                    <div className="faq-item">
                        <h3>Що робити, якщо ти не знаєш відповіді?</h3>
                        <p>
                            У такому разі я підкажу контакти наших спеціалістів!
                            Можеш написати в Viber, Telegram або заповнити форму
                            зворотного зв'язку. Команда WebStart Studio завжди на зв'язку!
                        </p>
                    </div>
                </div>
            </section>

            <section className="assistant-cta">
                <div className="cta-content">
                    <h2>Готовий поспілкуватися?</h2>
                    <p>Натисни на іконку чату в правому нижньому куті екрана і напиши мені!</p>
                    <div className="cta-buttons">
                        <a href="viber://chat?number=+380661391932" className="cta-button viber">
                            Viber 📱
                        </a>
                        <a href="https://t.me/Viktor_freelancer_recruiting_pit" className="cta-button telegram">
                            Telegram 💬
                        </a>
                        <a href="/contact" className="cta-button contact">
                            Форма зв'язку ✉️
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Assistant;