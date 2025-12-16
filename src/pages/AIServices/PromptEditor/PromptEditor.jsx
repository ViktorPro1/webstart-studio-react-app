import React, { useState } from 'react';
import './PromptEditor.css';
import './PromptEditor.mobile.css';

const PromptEditor = () => {
    const [openSection, setOpenSection] = useState(null);

    const sections = [
        {
            id: 'general',
            title: 'Загальний набір інструментів для ваших цілей',
            items: [
                'Аналіз конкурентів',
                'Створення плану',
                'Складання пропозицій для клієнтів',
                'Генерація ідей',
                'Найм і лідерство',
                'Написання резюме зустрічі'
            ]
        },
        {
            id: 'funnels',
            title: 'Створення онлайн-воронок',
            items: [
                'Генерація ідей продуктів',
                'Генерація ідей для воронки',
                'Вибір ніші',
                'Продаюча сторінка',
                'Сторінка вебінару',
                'Рекламний текст',
                'Сторінка подяки'
            ]
        },
        {
            id: 'smm',
            title: 'SMM',
            items: [
                'Мозковий штурм тем',
                'Заголовки для контенту',
                'Ідеї для зображень',
                'Mood board ідей',
                'Підбір хештегів для Instagram'
            ]
        },
        {
            id: 'facebook',
            title: 'Facebook маркетинг',
            items: [
                'Рекламні тексти',
                'Ідеї для креативів',
                'Заголовки оголошень',
                'Сценарії відео',
                'Зображення, що привертають увагу',
                'A/B тестування копірайту',
                'Аналіз болючих точок клієнта'
            ]
        },
        {
            id: 'copywriting',
            title: 'Помічник з копірайтингу',
            items: [
                'Покращення копірайтингу',
                'Визначення тону бренду',
                'Просунуті методи копірайтингу',
                'Вичитування та покращення текстів'
            ]
        },
        {
            id: 'ecommerce',
            title: 'Сайти та Ecommerce',
            items: [
                'Опис товарів',
                'Рекламні матеріали',
                'SEO оптимізація сайту',
                'Відгуки клієнтів',
                'Заклики до дії (CTA)'
            ]
        },
        {
            id: 'linkedin',
            title: 'LinkedIn',
            items: [
                'Автоматизація та розвиток бізнесу',
                'Використання груп для розширення впливу',
                'Генерація ідей для постів',
                'Підбір хештегів для максимального охоплення',
                'Контент-стратегія',
                'Оптимізація профілю'
            ]
        },
        {
            id: 'support',
            title: 'Обслуговування клієнтів',
            items: [
                'Відповіді на коментарі та відгуки',
                'Ефективна комунікація з клієнтами',
                'Опитування клієнтів',
                'Підвищення рівня утримання клієнтів',
                'FAQ для клієнтів',
                'Управління комунікацією'
            ]
        }
    ];

    const toggleSection = (id) => {
        setOpenSection(openSection === id ? null : id);
    };

    return (
        <div className="prompt-editor">
            <div className="prompt-editor-container">
                <h1 className="prompt-editor-title">AI Studio <br />Промпти для ваших потреб</h1>

                <div className="prompt-editor-sections">
                    {sections.map((section) => (
                        <section key={section.id} className="prompt-editor-block">
                            <button
                                className="prompt-editor-header"
                                onClick={() => toggleSection(section.id)}
                            >
                                <h2 className="prompt-editor-subtitle">{section.title}</h2>
                                <span className={`prompt-editor-icon ${openSection === section.id ? 'open' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            {openSection === section.id && (
                                <ul className="prompt-editor-list">
                                    {section.items.map((item, index) => (
                                        <li key={index} className="prompt-editor-item">{item}</li>
                                    ))}
                                </ul>
                            )}
                        </section>
                    ))}
                </div>

                <section className="prompt-editor-contacts">
                    <h2 className="prompt-editor-subtitle">Отримати промпт</h2>
                    <details className="prompt-editor-details">
                        <summary className="prompt-editor-summary">
                            Натисніть, щоб побачити контакти та вартість
                        </summary>
                        <div className="prompt-editor-contacts-content">
                            <p className="prompt-editor-price">
                                Просимо за один промпт: <strong>від 30 грн</strong>. <br />
                                Будь ласка, у повідомленні в Telegram або Viber вкажіть, який
                                саме промпт вам потрібен, з якого розділу та для якої мети.
                            </p>
                            <div className="prompt-editor-links">
                                <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noopener noreferrer" className="prompt-editor-link">
                                    📱 Telegram
                                </a>
                                <a href="viber://chat?number=%2B380661391932" target="_blank" rel="noopener noreferrer" className="prompt-editor-link">
                                    💬 Viber
                                </a>
                            </div>
                        </div>
                    </details>
                </section>
            </div>
        </div>
    );
};

export default PromptEditor;