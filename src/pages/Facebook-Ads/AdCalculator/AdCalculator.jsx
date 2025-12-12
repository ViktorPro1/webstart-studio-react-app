import React, { useState } from 'react';
import './AdCalculator.css';

const AdCalculator = () => {
    const [days, setDays] = useState(5);
    const [adBudget, setAdBudget] = useState(100);
    const [myFee, setMyFee] = useState('');
    const [total, setTotal] = useState('');

    const calculate = () => {
        const daysNum = parseInt(days);
        const adBudgetNum = parseFloat(adBudget);

        if (isNaN(daysNum) || isNaN(adBudgetNum) || daysNum < 1 || adBudgetNum < 0) {
            alert('Введіть коректні значення.');
            return;
        }

        let calculatedFee = 500;
        if (daysNum > 5) {
            calculatedFee += (daysNum - 5) * 50;
        }

        const totalAdBudget = daysNum * adBudgetNum;
        const totalAmount = calculatedFee + totalAdBudget;

        setMyFee(calculatedFee.toFixed(2));
        setTotal(totalAmount.toFixed(2));
    };

    return (
        <div className="ad-calculator">
            <div className="ad-calculator-container">
                <h1 className="ad-calculator-title">
                    Розрахунок вартості реклами <br />
                    <span className="ad-calculator-subtitle">(нашими сторінками)</span>
                </h1>

                <div className="ad-calculator-form">
                    <div className="ad-calculator-form-group">
                        <label htmlFor="days" className="ad-calculator-label">
                            Кількість днів реклами:
                        </label>
                        <input
                            type="number"
                            id="days"
                            className="ad-calculator-input"
                            value={days}
                            min="1"
                            onChange={(e) => setDays(e.target.value)}
                        />
                    </div>

                    <div className="ad-calculator-form-group">
                        <label htmlFor="ad-budget" className="ad-calculator-label">
                            Бюджет на рекламу (грн за день):
                        </label>
                        <input
                            type="number"
                            id="ad-budget"
                            className="ad-calculator-input"
                            value={adBudget}
                            min="0"
                            onChange={(e) => setAdBudget(e.target.value)}
                        />
                        <div className="ad-calculator-note">* Рекомендуємо від 100 грн на день</div>
                    </div>

                    <div className="ad-calculator-form-group">
                        <label htmlFor="my-fee" className="ad-calculator-label">
                            Вартість за наші послуги (грн):
                        </label>
                        <input
                            type="text"
                            id="my-fee"
                            className="ad-calculator-input"
                            value={myFee}
                            disabled
                        />
                    </div>

                    <div className="ad-calculator-form-group">
                        <label htmlFor="total" className="ad-calculator-label">
                            Загальна сума до сплати (грн):
                        </label>
                        <input
                            type="text"
                            id="total"
                            className="ad-calculator-input ad-calculator-total"
                            value={total}
                            disabled
                        />
                    </div>

                    <div className="ad-calculator-buttons">
                        <button
                            type="button"
                            className="ad-calculator-button primary"
                            onClick={calculate}
                        >
                            Розрахувати
                        </button>
                    </div>
                </div>

                {/* Info Section */}
                <div className="ad-calculator-info">
                    <h2 className="ad-calculator-info-title">Як розраховується вартість?</h2>
                    <div className="ad-calculator-info-grid">
                        <div className="ad-calculator-info-card">
                            <div className="info-icon">📅</div>
                            <h3>Базова вартість</h3>
                            <p>500 грн за перші 5 днів реклами</p>
                        </div>
                        <div className="ad-calculator-info-card">
                            <div className="info-icon">➕</div>
                            <h3>Додаткові дні</h3>
                            <p>+50 грн за кожен день понад 5 днів</p>
                        </div>
                        <div className="ad-calculator-info-card">
                            <div className="info-icon">💰</div>
                            <h3>Рекламний бюджет</h3>
                            <p>Ваш денний бюджет × кількість днів</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdCalculator;