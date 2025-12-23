import React, { useState, ChangeEvent } from 'react';
import './PortfolioTextGenerator.css';
import './PortfolioTextGenerator.mobile.css';

interface Output {
    variant1: string;
    variant2: string;
}

const PortfolioTextGenerator = () => {
    const [field, setField] = useState('');
    const [achievements, setAchievements] = useState('');
    const [output, setOutput] = useState<Output | null>(null);
    const [error, setError] = useState('');

    const templates = [
        (f: string, a: string) => `Фахівець у сфері <strong>${f}</strong>, який досяг <strong>${a}</strong>.`,
        (f: string, a: string) => `Маю досвід у <strong>${f}</strong> та реалізував(ла) <strong>${a}</strong>.`,
        (f: string, a: string) => `Професіонал у <strong>${f}</strong> з досягненнями: <strong>${a}</strong>.`,
        (f: string, a: string) => `Експерт у <strong>${f}</strong> з практичними результатами: <strong>${a}</strong>.`
    ] as ((field: string, achievements: string) => string)[];

    const handleGenerate = () => {
        setError('');
        setOutput(null);

        if (!field.trim() || !achievements.trim()) {
            setError('Будь ласка, заповніть обидва поля.');
            return;
        }

        const firstIndex = Math.floor(Math.random() * templates.length);
        let secondIndex: number;
        do {
            secondIndex = Math.floor(Math.random() * templates.length);
        } while (secondIndex === firstIndex);

        setOutput({
            variant1: templates[firstIndex](field, achievements),
            variant2: templates[secondIndex](field, achievements)
        });
    };

    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
        setField(e.target.value);
    };

    const handleAchievementsChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAchievements(e.target.value);
    };

    return (
        <div className="portfolio-generator">
            <div className="generator-container">
                <div className="generator-header">
                    <h1 className="generator-title">Генератор заголовків та описів</h1>
                    <p className="generator-subtitle">
                        Введи сферу діяльності та твої досягнення. Отримай готові тексти для резюме або портфоліо.
                    </p>
                </div>

                <div className="generator-form">
                    <div className="form-group">
                        <label htmlFor="field-input" className="form-label">
                            Сфера діяльності
                        </label>
                        <input
                            type="text"
                            id="field-input"
                            className="form-input"
                            placeholder="наприклад: веб-дизайн"
                            value={field}
                            onChange={handleFieldChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="achievements-input" className="form-label">
                            Досягнення або ключові навички
                        </label>
                        <input
                            type="text"
                            id="achievements-input"
                            className="form-input"
                            placeholder="наприклад: 20+ успішних проєктів"
                            value={achievements}
                            onChange={handleAchievementsChange}
                        />
                    </div>

                    <button
                        className="generate-btn"
                        onClick={handleGenerate}
                    >
                        <span className="btn-icon">✨</span>
                        Згенерувати текст
                    </button>
                </div>

                {error && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        {error}
                    </div>
                )}

                {output && (
                    <div className="output-container">
                        <div className="output-card">
                            <div className="variant-badge">Варіант 1</div>
                            <p
                                className="variant-text"
                                dangerouslySetInnerHTML={{ __html: output.variant1 }}
                            />
                        </div>

                        <div className="output-card">
                            <div className="variant-badge">Варіант 2</div>
                            <p
                                className="variant-text"
                                dangerouslySetInnerHTML={{ __html: output.variant2 }}
                            />
                        </div>

                        <div className="suggestion-card">
                            <div className="suggestion-icon">💡</div>
                            <div className="suggestion-content">
                                <strong>Порада:</strong> додайте конкретні цифри, результати або кількість проєктів,
                                щоб зробити текст більш переконливим і наочним.
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PortfolioTextGenerator;
