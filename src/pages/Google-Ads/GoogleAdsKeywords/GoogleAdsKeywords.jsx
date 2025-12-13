import React, { useState } from 'react';
import './GoogleAdsKeywords.css';
import './GoogleAdsKeywords.mobile.css';

const GoogleAdsKeywords = () => {
    const [seedKeyword, setSeedKeyword] = useState('');
    const [location, setLocation] = useState('');
    const [modifiers, setModifiers] = useState(['купити', 'замовити']);
    const [keywords, setKeywords] = useState(null);

    const modifierOptions = [
        'купити', 'замовити', 'ціна', 'вартість',
        'недорого', 'швидко', 'терміново', 'доставка'
    ];

    const toggleModifier = (modifier) => {
        if (modifiers.includes(modifier)) {
            setModifiers(modifiers.filter(m => m !== modifier));
        } else {
            setModifiers([...modifiers, modifier]);
        }
    };

    const generateKeywords = () => {
        if (!seedKeyword) {
            alert('Будь ласка, введіть основне ключове слово');
            return;
        }

        const generated = {
            broad: [],
            phrase: [],
            exact: []
        };

        generated.broad.push(seedKeyword);
        generated.phrase.push(`"${seedKeyword}"`);
        generated.exact.push(`[${seedKeyword}]`);

        if (location) {
            generated.broad.push(`${seedKeyword} ${location}`);
            generated.phrase.push(`"${seedKeyword} ${location}"`);
            generated.exact.push(`[${seedKeyword} ${location}]`);

            generated.broad.push(`${location} ${seedKeyword}`);
            generated.phrase.push(`"${location} ${seedKeyword}"`);
            generated.exact.push(`[${location} ${seedKeyword}]`);
        }

        modifiers.forEach(modifier => {
            generated.broad.push(`${modifier} ${seedKeyword}`);
            generated.phrase.push(`"${modifier} ${seedKeyword}"`);
            generated.exact.push(`[${modifier} ${seedKeyword}]`);

            if (location) {
                generated.broad.push(`${modifier} ${seedKeyword} ${location}`);
                generated.phrase.push(`"${modifier} ${seedKeyword} ${location}"`);
                generated.exact.push(`[${modifier} ${seedKeyword} ${location}]`);
            }
        });

        setKeywords(generated);
    };

    const copyAllKeywords = () => {
        if (!keywords) return;

        const all = [
            ...keywords.broad,
            ...keywords.phrase,
            ...keywords.exact
        ].join('\n');

        navigator.clipboard.writeText(all);
        alert('Ключові слова скопійовано!');
    };

    return (
        <div className="google-ads-keywords">
            <div className="google-ads-keywords__container">
                <div className="google-ads-keywords__header">
                    <h1>🔑 Підбір ключових слів</h1>
                    <p>Створіть ефективний список ключових слів для вашої кампанії</p>
                </div>

                <div className="google-ads-keywords__content">
                    <div className="google-ads-keywords__generator-section">
                        <h2>🚀 Генератор ключових слів</h2>

                        <div className="google-ads-keywords__form-group">
                            <label htmlFor="seedKeyword">Основне ключове слово</label>
                            <input
                                type="text"
                                id="seedKeyword"
                                placeholder="Наприклад: ремонт телефонів"
                                value={seedKeyword}
                                onChange={(e) => setSeedKeyword(e.target.value)}
                            />
                        </div>

                        <div className="google-ads-keywords__form-group">
                            <label htmlFor="location">Місцезнаходження</label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Наприклад: Київ"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div className="google-ads-keywords__form-group">
                            <label>Модифікатори (оберіть кілька)</label>
                            <div className="google-ads-keywords__checkbox-group">
                                {modifierOptions.map(modifier => (
                                    <label key={modifier} className="google-ads-keywords__checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={modifiers.includes(modifier)}
                                            onChange={() => toggleModifier(modifier)}
                                        />
                                        {modifier}
                                    </label>
                                ))}
                            </div>
                        </div>

                        <button
                            className="google-ads-keywords__generate-btn"
                            onClick={generateKeywords}
                        >
                            🔍 Згенерувати ключові слова
                        </button>
                    </div>

                    {keywords && (
                        <div className="google-ads-keywords__results">
                            <h3>📋 Згенеровані ключові слова</h3>

                            <div className="google-ads-keywords__results-grid">
                                <div className="google-ads-keywords__result-group">
                                    <h4>Широка відповідність</h4>
                                    {keywords.broad.map((kw, index) => (
                                        <div key={index} className="google-ads-keywords__keyword-item">
                                            {kw}
                                        </div>
                                    ))}
                                </div>

                                <div className="google-ads-keywords__result-group">
                                    <h4>Фразова відповідність</h4>
                                    {keywords.phrase.map((kw, index) => (
                                        <div key={index} className="google-ads-keywords__keyword-item">
                                            {kw}
                                        </div>
                                    ))}
                                </div>

                                <div className="google-ads-keywords__result-group">
                                    <h4>Точна відповідність</h4>
                                    {keywords.exact.map((kw, index) => (
                                        <div key={index} className="google-ads-keywords__keyword-item">
                                            {kw}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="google-ads-keywords__copy-btn"
                                onClick={copyAllKeywords}
                            >
                                📋 Копіювати всі ключові слова
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsKeywords;