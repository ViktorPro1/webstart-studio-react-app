import React, { useState } from 'react';
import './GoogleAdsComparison.css';
import './GoogleAdsComparison.mobile.css';

const GoogleAdsComparison = () => {
    const [quizAnswers, setQuizAnswers] = useState({
        q1: null,
        q2: null,
        q3: null,
        q4: null
    });
    const [quizResult, setQuizResult] = useState(null);

    const handleQuizChange = (question, value) => {
        setQuizAnswers(prev => ({
            ...prev,
            [question]: value
        }));
    };

    const getRecommendation = () => {
        const { q1, q2, q3, q4 } = quizAnswers;

        if (!q1 || !q2 || !q3 || !q4) {
            alert('Будь ласка, дайте відповідь на всі питання');
            return;
        }

        const googleScore = [q1, q2, q3, q4].filter(q => q === 'google').length;
        const facebookScore = 4 - googleScore;

        let recommendation = {};

        if (googleScore > facebookScore) {
            recommendation = {
                icon: '🔍',
                platform: 'Google Ads',
                why: 'Судячи з ваших відповідей, ваша аудиторія активно шукає рішення вашої проблеми. Google Ads допоможе вам з\'явитися саме в той момент, коли клієнт готовий до покупки. Це забезпечить вищу конверсію та швидкі результати.',
                steps: [
                    'Підготуйте список ключових слів',
                    'Створіть якісні посадкові сторінки',
                    'Виділіть тестовий бюджет мінімум $300-500',
                    'Налаштуйте відстеження конверсій'
                ]
            };
        } else if (facebookScore > googleScore) {
            recommendation = {
                icon: '🎯',
                platform: 'Facebook/Instagram',
                why: 'Ваш продукт потребує візуальної демонстрації та емоційного зв\'язку з аудиторією. Facebook та Instagram ідеально підходять для створення попиту та залучення нових клієнтів через якісний візуальний контент. Ви зможете почати з меншим бюджетом та масштабувати результати.',
                steps: [
                    'Підготуйте якісні фото/відео',
                    'Визначте портрет цільової аудиторії',
                    'Виділіть тестовий бюджет мінімум $150-300',
                    'Створіть декілька варіантів креативів для A/B тестування'
                ]
            };
        } else {
            recommendation = {
                icon: '🚀',
                platform: 'Комплексний підхід',
                why: 'Ваші відповіді показують, що ви можете отримати користь від обох каналів. Використання Google Ads та Facebook/Instagram разом створить синергію: Facebook буде створювати попит та збирати аудиторію, а Google Ads захоплюватиме "гарячих" клієнтів в момент прийняття рішення.',
                budget: {
                    facebook: '40% - Facebook/Instagram (побудова аудиторії)',
                    google: '40% - Google Search (захоплення попиту)',
                    remarketing: '20% - Ремаркетинг на обох платформах'
                },
                minBudget: '$500-800/місяць',
                roi: '2-3 місяці'
            };
        }

        setQuizResult(recommendation);
    };

    return (
        <div className="google-ads-comparison">
            <div className="google-ads-comparison__container">
                <div className="google-ads-comparison__header">
                    <h1>⚖️ Google Ads vs Facebook/Instagram</h1>
                    <p>Оберіть найкращу платформу для вашого бізнесу</p>
                </div>

                <div className="google-ads-comparison__content">
                    {/* Quiz Section */}
                    <div className="google-ads-comparison__quiz-section">
                        <h2>🎯 Швидкий тест: Що підходить саме вам?</h2>
                        <div className="google-ads-comparison__quiz-card">

                            <div className="google-ads-comparison__question">
                                <h3>1. Ваші клієнти активно шукають ваш продукт/послугу?</h3>
                                <div className="google-ads-comparison__options">
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q1"
                                            value="google"
                                            onChange={(e) => handleQuizChange('q1', e.target.value)}
                                        />
                                        <span>Так, вони вводять запити в пошуковики</span>
                                    </label>
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q1"
                                            value="facebook"
                                            onChange={(e) => handleQuizChange('q1', e.target.value)}
                                        />
                                        <span>Ні, їх потрібно зацікавити візуально</span>
                                    </label>
                                </div>
                            </div>

                            <div className="google-ads-comparison__question">
                                <h3>2. Який у вас бюджет на рекламу?</h3>
                                <div className="google-ads-comparison__options">
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q2"
                                            value="google"
                                            onChange={(e) => handleQuizChange('q2', e.target.value)}
                                        />
                                        <span>Від 500$ на місяць</span>
                                    </label>
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q2"
                                            value="facebook"
                                            onChange={(e) => handleQuizChange('q2', e.target.value)}
                                        />
                                        <span>До 500$ на місяць</span>
                                    </label>
                                </div>
                            </div>

                            <div className="google-ads-comparison__question">
                                <h3>3. Яка ваша мета?</h3>
                                <div className="google-ads-comparison__options">
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q3"
                                            value="google"
                                            onChange={(e) => handleQuizChange('q3', e.target.value)}
                                        />
                                        <span>Швидкі продажі та ліди</span>
                                    </label>
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q3"
                                            value="facebook"
                                            onChange={(e) => handleQuizChange('q3', e.target.value)}
                                        />
                                        <span>Впізнаваність бренду та залучення</span>
                                    </label>
                                </div>
                            </div>

                            <div className="google-ads-comparison__question">
                                <h3>4. У вас є якісні фото/відео продукту?</h3>
                                <div className="google-ads-comparison__options">
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q4"
                                            value="facebook"
                                            onChange={(e) => handleQuizChange('q4', e.target.value)}
                                        />
                                        <span>Так, багато візуального контенту</span>
                                    </label>
                                    <label className="google-ads-comparison__option">
                                        <input
                                            type="radio"
                                            name="q4"
                                            value="google"
                                            onChange={(e) => handleQuizChange('q4', e.target.value)}
                                        />
                                        <span>Ні, або мінімально</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                className="google-ads-comparison__quiz-btn"
                                onClick={getRecommendation}
                            >
                                Отримати рекомендацію
                            </button>

                            {quizResult && (
                                <div className="google-ads-comparison__quiz-result">
                                    <h3>
                                        {quizResult.icon} Рекомендуємо: {quizResult.platform}
                                    </h3>
                                    <p><strong>Чому саме {quizResult.platform}:</strong></p>
                                    <p>{quizResult.why}</p>

                                    {quizResult.steps && (
                                        <>
                                            <p><strong>Наступні кроки:</strong></p>
                                            <ol>
                                                {quizResult.steps.map((step, index) => (
                                                    <li key={index}>{step}</li>
                                                ))}
                                            </ol>
                                        </>
                                    )}

                                    {quizResult.budget && (
                                        <>
                                            <p><strong>Рекомендований розподіл бюджету:</strong></p>
                                            <ul>
                                                <li>• {quizResult.budget.facebook}</li>
                                                <li>• {quizResult.budget.google}</li>
                                                <li>• {quizResult.budget.remarketing}</li>
                                            </ul>
                                            <p><strong>Мінімальний бюджет:</strong> {quizResult.minBudget}</p>
                                            <p><strong>Очікуваний термін окупності:</strong> {quizResult.roi}</p>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Comparison Table */}
                    <div className="google-ads-comparison__table-section">
                        <h2>📊 Детальне порівняння</h2>
                        <div className="google-ads-comparison__table-wrapper">
                            <table className="google-ads-comparison__table">
                                <thead>
                                    <tr>
                                        <th>Критерій</th>
                                        <th className="google-ads-comparison__google-col">Google Ads 🔍</th>
                                        <th className="google-ads-comparison__facebook-col">Facebook/Instagram 🎯</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Тип реклами</strong></td>
                                        <td>Пошукова + Медійна</td>
                                        <td>Соціальна + Таргетована</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Намір користувача</strong></td>
                                        <td className="google-ads-comparison__pro">Високий (активно шукають)</td>
                                        <td className="google-ads-comparison__con">Низький (пасивний перегляд)</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Вартість кліку</strong></td>
                                        <td className="google-ads-comparison__con">Вища ($0.5-$5+)</td>
                                        <td className="google-ads-comparison__pro">Нижча ($0.1-$2)</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Конверсія</strong></td>
                                        <td className="google-ads-comparison__pro">Зазвичай вища (3-7%)</td>
                                        <td className="google-ads-comparison__con">Нижча (1-3%)</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Таргетинг</strong></td>
                                        <td>По ключових словах, локації</td>
                                        <td className="google-ads-comparison__pro">Детальний (інтереси, поведінка, демографія)</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Візуальний контент</strong></td>
                                        <td className="google-ads-comparison__con">Обмежений</td>
                                        <td className="google-ads-comparison__pro">Ключовий елемент</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Швидкість результату</strong></td>
                                        <td className="google-ads-comparison__pro">Швидка (години-дні)</td>
                                        <td>Середня (дні-тижні)</td>
                                    </tr>
                                    <tr>
                                        <td className="google-ads-comparison__criteria"><strong>Мінімальний бюджет</strong></td>
                                        <td className="google-ads-comparison__con">$10-20/день</td>
                                        <td className="google-ads-comparison__pro">$5-10/день</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Summary */}
                    <div className="google-ads-comparison__summary">
                        <h2>📝 Підсумок</h2>
                        <div className="google-ads-comparison__summary-content">
                            <p><strong>Немає універсального рішення!</strong> Вибір залежить від:</p>
                            <ul>
                                <li>Вашої ніші та продукту</li>
                                <li>Бюджету та цілей</li>
                                <li>Поведінки цільової аудиторії</li>
                                <li>Наявності візуального контенту</li>
                                <li>Циклу прийняття рішення клієнтом</li>
                            </ul>
                            <p className="google-ads-comparison__summary-cta">
                                <strong>Не впевнені, що обрати?</strong> Ми допоможемо визначити оптимальну стратегію для вашого бізнесу!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsComparison;