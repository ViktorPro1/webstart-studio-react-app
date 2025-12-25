import React, { useState } from 'react';
import './GoogleAdsGlossary.css';
import './GoogleAdsGlossary.mobile.css';

const GoogleAdsGlossary = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const terms = [
        {
            id: 1,
            category: 'basic',
            title: 'Google Ads (раніше AdWords)',
            definition: 'Рекламна платформа Google, яка дозволяє показувати оголошення в пошуковій видачі, на партнерських сайтах, YouTube та інших місцях.',
            example: 'Коли ви вводите "купити ноутбук" в Google, перші результати з позначкою "Реклама" - це Google Ads оголошення.'
        },
        {
            id: 2,
            category: 'basic',
            title: 'Кампанія (Campaign)',
            definition: 'Верхній рівень структури облікового запису Google Ads. Включає налаштування бюджету, таргетингу та типу реклами.',
            example: 'Структура: Обліковий запис → Кампанії → Групи оголошень → Оголошення'
        },
        {
            id: 3,
            category: 'metrics',
            title: 'CPC (Cost Per Click)',
            definition: 'Вартість одного кліку по оголошенню. Основна модель оплати в Google Ads - ви платите тільки за кліки.',
            example: 'Витратили 1000 грн, отримали 50 кліків → CPC = 20 грн',
            formula: 'CPC = Загальні витрати / Кількість кліків'
        },
        {
            id: 4,
            category: 'metrics',
            title: 'CTR (Click-Through Rate)',
            definition: 'Відсоток користувачів, які клікнули на оголошення після того, як його побачили. Показник релевантності оголошення.',
            example: '1000 показів, 50 кліків → CTR = 5%. Норма: 3-5% для пошукових кампаній',
            formula: 'CTR = (Кліки / Покази) × 100%'
        },
        {
            id: 5,
            category: 'metrics',
            title: 'ROAS (Return on Ad Spend)',
            definition: 'Повернення інвестицій в рекламу. Показує, скільки гривень доходу ви отримуєте з кожної гривні витраченої на рекламу.',
            example: 'Витратили 10,000 грн, заробили 40,000 грн → ROAS = 4x. Норма: Мінімум 2-3x',
            formula: 'ROAS = Дохід від реклами / Витрати на рекламу'
        },
        {
            id: 6,
            category: 'targeting',
            title: 'Мінус-слова (Negative Keywords)',
            definition: 'Ключові слова, за якими ви НЕ хочете показувати оголошення. Допомагають виключити нерелевантний трафік.',
            example: 'Продаєте нові телефони? Додайте: -безкоштовно, -ремонт, -б/в, -вживані'
        }
    ];

    const filteredTerms = terms.filter(term => {
        const matchesSearch = term.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            term.definition.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="google-ads-glossary">
            <div className="google-ads-glossary__container">
                <div className="google-ads-glossary__header">
                    <h1>📚 Глосарій Google Ads</h1>
                    <p>Всі терміни контекстної реклами в одному місці</p>
                </div>

                <div className="google-ads-glossary__content">
                    <div className="google-ads-glossary__search-section">
                        <input
                            type="text"
                            className="google-ads-glossary__search-input"
                            placeholder="🔍 Шукати термін..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="google-ads-glossary__filter-section">
                        <button
                            className={`google-ads-glossary__filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('all')}
                        >
                            Всі терміни
                        </button>
                        <button
                            className={`google-ads-glossary__filter-btn ${selectedCategory === 'basic' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('basic')}
                        >
                            Базові
                        </button>
                        <button
                            className={`google-ads-glossary__filter-btn ${selectedCategory === 'metrics' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('metrics')}
                        >
                            Метрики
                        </button>
                        <button
                            className={`google-ads-glossary__filter-btn ${selectedCategory === 'targeting' ? 'active' : ''}`}
                            onClick={() => setSelectedCategory('targeting')}
                        >
                            Таргетинг
                        </button>
                    </div>

                    <div className="google-ads-glossary__list">
                        {filteredTerms.map(term => (
                            <div key={term.id} className="google-ads-glossary__term-card">
                                <div className="google-ads-glossary__term-header">
                                    <h3 className="google-ads-glossary__term-title">{term.title}</h3>
                                    <span className={`google-ads-glossary__term-badge google-ads-glossary__term-badge--${term.category}`}>
                                        {term.category === 'basic' && 'Базовий'}
                                        {term.category === 'metrics' && 'Метрика'}
                                        {term.category === 'targeting' && 'Таргетинг'}
                                    </span>
                                </div>
                                <p className="google-ads-glossary__term-definition">{term.definition}</p>
                                {term.formula && (
                                    <div className="google-ads-glossary__term-formula">
                                        <strong>Формула:</strong> {term.formula}
                                    </div>
                                )}
                                {term.example && (
                                    <div className="google-ads-glossary__term-example">
                                        <strong>Приклад:</strong> {term.example}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="google-ads-glossary__results-count">
                        Показано: <span>{filteredTerms.length}</span> термінів
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsGlossary;