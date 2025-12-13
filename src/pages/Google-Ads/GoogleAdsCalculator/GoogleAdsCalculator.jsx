import React, { useState } from 'react';
import './GoogleAdsCalculator.css';
import './GoogleAdsCalculator.mobile.css';

const GoogleAdsCalculator = () => {
    const [formData, setFormData] = useState({
        businessType: '',
        clicksPerDay: '',
        campaignDuration: 30,
        conversionRate: 2,
        avgOrderValue: ''
    });

    const [results, setResults] = useState(null);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const calculateBudget = (e) => {
        e.preventDefault();

        const businessType = parseFloat(formData.businessType);
        const clicksPerDay = parseInt(formData.clicksPerDay);
        const campaignDuration = parseInt(formData.campaignDuration);
        const conversionRate = parseFloat(formData.conversionRate);
        const avgOrderValue = parseFloat(formData.avgOrderValue);

        // Розрахунки
        const baseCPC = businessType;
        const cpcUAH = baseCPC * 41;
        const dailyBudget = clicksPerDay * cpcUAH;
        const monthlyBudget = dailyBudget * 30;
        const totalBudget = dailyBudget * campaignDuration;
        const totalClicks = clicksPerDay * campaignDuration;
        const conversions = (totalClicks * conversionRate) / 100;
        const revenue = conversions * avgOrderValue;
        const roas = revenue / totalBudget;

        // Рекомендації
        const recommendations = [];

        if (roas < 2) {
            recommendations.push('ROAS нижче 2x - рекомендуємо збільшити коефіцієнт конверсії або середній чек');
        } else if (roas >= 2 && roas < 4) {
            recommendations.push('Хороший ROAS! Кампанія має потенціал бути прибутковою');
        } else {
            recommendations.push('Відмінний ROAS! Це дуже перспективна кампанія');
        }

        if (dailyBudget < 200) {
            recommendations.push('Низький денний бюджет може обмежити охоплення. Рекомендуємо мінімум 300-500 грн/день');
        }

        if (campaignDuration < 30) {
            recommendations.push('Для якісної оптимізації рекомендуємо кампанії від 30 днів');
        } else {
            recommendations.push('Тривалість кампанії оптимальна для збору даних та оптимізації');
        }

        if (conversionRate < 2) {
            recommendations.push('Низький коефіцієнт конверсії. Попрацюйте над якістю посадкової сторінки');
        }

        recommendations.push('Використовуйте A/B тестування оголошень для покращення результатів');
        recommendations.push('Регулярно додавайте мінус-слова для оптимізації витрат');

        setResults({
            cpcUAH: cpcUAH.toFixed(2),
            dailyBudget: dailyBudget.toFixed(2),
            monthlyBudget: monthlyBudget.toFixed(2),
            totalBudget: totalBudget.toFixed(2),
            totalClicks: totalClicks.toLocaleString(),
            conversions: conversions.toFixed(0),
            revenue: revenue.toFixed(2),
            roas: roas.toFixed(2),
            recommendations
        });
    };

    return (
        <div className="google-ads-calculator">
            <div className="google-ads-calculator__container">
                <div className="google-ads-calculator__header">
                    <h1>🔍 Калькулятор Google Ads</h1>
                    <p>Розрахуйте орієнтовний бюджет для вашої рекламної кампанії</p>
                </div>

                <div className="google-ads-calculator__content">
                    <form className="google-ads-calculator__form" onSubmit={calculateBudget}>
                        <div className="google-ads-calculator__form-group">
                            <label htmlFor="businessType">Тип бізнесу</label>
                            <select
                                id="businessType"
                                value={formData.businessType}
                                onChange={handleInputChange}
                                required
                            >
                                <option value="">Оберіть тип</option>
                                <option value="0.5">Локальні послуги (низька конкуренція)</option>
                                <option value="1.5">Малий бізнес (середня конкуренція)</option>
                                <option value="3">E-commerce (висока конкуренція)</option>
                                <option value="5">Фінанси/Страхування (дуже висока)</option>
                            </select>
                        </div>

                        <div className="google-ads-calculator__form-group">
                            <label htmlFor="clicksPerDay">Бажана кількість кліків на день</label>
                            <input
                                type="number"
                                id="clicksPerDay"
                                min="1"
                                max="1000"
                                placeholder="Наприклад: 20"
                                value={formData.clicksPerDay}
                                onChange={handleInputChange}
                                required
                            />
                            <p className="google-ads-calculator__info-text">
                                Скільки потенційних клієнтів ви хочете отримати щодня?
                            </p>
                        </div>

                        <div className="google-ads-calculator__form-group">
                            <label htmlFor="campaignDuration">Тривалість кампанії (днів)</label>
                            <input
                                type="number"
                                id="campaignDuration"
                                min="1"
                                max="365"
                                value={formData.campaignDuration}
                                onChange={handleInputChange}
                                required
                            />
                            <p className="google-ads-calculator__info-text">
                                Рекомендуємо мінімум 30 днів для оптимізації
                            </p>
                        </div>

                        <div className="google-ads-calculator__form-group">
                            <label htmlFor="conversionRate">Очікуваний коефіцієнт конверсії (%)</label>
                            <input
                                type="number"
                                id="conversionRate"
                                min="0.1"
                                max="100"
                                step="0.1"
                                value={formData.conversionRate}
                                onChange={handleInputChange}
                                required
                            />
                            <p className="google-ads-calculator__info-text">
                                Середній показник: 2-5%. Якщо не знаєте - залиште 2%
                            </p>
                        </div>

                        <div className="google-ads-calculator__form-group">
                            <label htmlFor="avgOrderValue">Середній чек (грн)</label>
                            <input
                                type="number"
                                id="avgOrderValue"
                                min="1"
                                placeholder="Наприклад: 1500"
                                value={formData.avgOrderValue}
                                onChange={handleInputChange}
                                required
                            />
                            <p className="google-ads-calculator__info-text">
                                Скільки в середньому витрачає один клієнт?
                            </p>
                        </div>

                        <button type="submit" className="google-ads-calculator__calculate-btn">
                            Розрахувати бюджет
                        </button>
                    </form>

                    {results && (
                        <div className="google-ads-calculator__results">
                            <h2>📊 Результати розрахунку</h2>

                            <div className="google-ads-calculator__result-grid">
                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Орієнтовна ціна кліку</div>
                                    <div className="google-ads-calculator__result-value">{results.cpcUAH} грн</div>
                                </div>

                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Денний бюджет</div>
                                    <div className="google-ads-calculator__result-value">{results.dailyBudget} грн</div>
                                </div>

                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Місячний бюджет</div>
                                    <div className="google-ads-calculator__result-value google-ads-calculator__result-value--highlight">
                                        {results.monthlyBudget} грн
                                    </div>
                                </div>

                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Загальний бюджет кампанії</div>
                                    <div className="google-ads-calculator__result-value">{results.totalBudget} грн</div>
                                </div>

                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Очікувана к-ть кліків</div>
                                    <div className="google-ads-calculator__result-value">{results.totalClicks}</div>
                                </div>

                                <div className="google-ads-calculator__result-card">
                                    <div className="google-ads-calculator__result-label">Очікувані конверсії</div>
                                    <div className="google-ads-calculator__result-value">{results.conversions}</div>
                                </div>

                                <div className="google-ads-calculator__result-card google-ads-calculator__result-card--full-width">
                                    <div className="google-ads-calculator__result-label">Прогнозований дохід</div>
                                    <div className="google-ads-calculator__result-value google-ads-calculator__result-value--success">
                                        {results.revenue} грн
                                    </div>
                                </div>

                                <div className="google-ads-calculator__result-card google-ads-calculator__result-card--full-width">
                                    <div className="google-ads-calculator__result-label">Очікуваний ROAS</div>
                                    <div className="google-ads-calculator__result-value">{results.roas}x</div>
                                    <p className="google-ads-calculator__roas-explanation">
                                        ROAS (Return on Ad Spend) - скільки гривень ви отримаєте з кожної гривні витраченої на рекламу
                                    </p>
                                </div>
                            </div>

                            <div className="google-ads-calculator__recommendations">
                                <h3>💡 Рекомендації</h3>
                                <ul>
                                    {results.recommendations.map((rec, index) => (
                                        <li key={index}>{rec}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsCalculator;