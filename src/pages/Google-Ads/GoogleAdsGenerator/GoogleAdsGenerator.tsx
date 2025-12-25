import React, { useState } from 'react';
import './GoogleAdsGenerator.css';
import './GoogleAdsGenerator.mobile.css';

interface FormData {
    businessName: string;
    keywords: string;
    usp: string;
    offer: string;
    cta: string;
    location: string;
}

interface Results {
    headlines: string[];
    descriptions: string[];
}

interface Template {
    businessName: string;
    keywords: string;
    usp: string;
    offer: string;
    location: string;
}

type TemplateType = 'ecommerce' | 'services' | 'restaurant';

const GoogleAdsGenerator: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        businessName: '',
        keywords: '',
        usp: '',
        offer: '',
        cta: 'Замовити зараз',
        location: ''
    });

    const [results, setResults] = useState<Results | null>(null);

    const templates: Record<TemplateType, Template> = {
        ecommerce: {
            businessName: 'ТехноМаркет',
            keywords: 'ноутбуки, техніка, купити',
            usp: 'Офіційна гарантія 2 роки',
            offer: 'Знижка 15% на перше замовлення',
            location: 'Київ'
        },
        services: {
            businessName: 'МайстерСервіс',
            keywords: 'ремонт, майстер, виклик',
            usp: 'Виїзд майстра за 30 хвилин',
            offer: 'Безкоштовна діагностика',
            location: 'Київ'
        },
        restaurant: {
            businessName: 'Смачна Піца',
            keywords: 'піца, доставка, їжа',
            usp: 'Доставка за 30 хв або безкоштовно',
            offer: 'Друга піца в подарунок',
            location: 'Київ'
        }
    };

    const loadTemplate = (templateType: TemplateType): void => {
        const template = templates[templateType];
        setFormData({ ...template, cta: 'Замовити зараз' });
    };

    const generateAds = (): void => {
        const { businessName, keywords, usp, offer, cta, location } = formData;

        if (!businessName || !keywords) {
            alert('Будь ласка, заповніть назву бізнесу та ключові слова');
            return;
        }

        const keywordsList = keywords.split(',').map(k => k.trim()).filter(k => k);
        const mainKeyword = keywordsList[0] || '';

        const headlines: string[] = [];
        if (mainKeyword) {
            headlines.push(`${businessName} - ${mainKeyword.charAt(0).toUpperCase() + mainKeyword.slice(1)}`);
        } else {
            headlines.push(businessName);
        }

        if (offer) {
            headlines.push(offer.substring(0, 30));
        } else if (usp) {
            headlines.push(usp.substring(0, 30));
        } else {
            headlines.push(`${cta} | ${businessName}`);
        }

        if (location && mainKeyword) {
            headlines.push(`${mainKeyword.charAt(0).toUpperCase() + mainKeyword.slice(1)} ${location}`);
        } else if (location) {
            headlines.push(`${businessName} у ${location}`);
        } else {
            headlines.push(`${cta} зараз`);
        }

        const finalHeadlines = headlines.map(h => h.substring(0, 30));

        const descriptions: string[] = [];
        if (usp) {
            descriptions.push(`${usp}. ${cta}!`.substring(0, 90));
        } else {
            descriptions.push(`${businessName}. ${cta} вже сьогодні!`.substring(0, 90));
        }

        if (offer) {
            let desc2 = `${offer}. ${keywordsList.slice(0, 2).join(', ')}`;
            if (location) desc2 += ` ${location}`;
            descriptions.push(desc2.substring(0, 90));
        } else {
            let desc2 = `Якісні ${mainKeyword}`;
            if (location) desc2 += ` у ${location}`;
            desc2 += `. ${cta}!`;
            descriptions.push(desc2.substring(0, 90));
        }

        setResults({ headlines: finalHeadlines, descriptions });
    };

    const copyToClipboard = (text: string): void => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="google-ads-generator">
            <div className="google-ads-generator__container">
                <div className="google-ads-generator__header">
                    <h1>✍️ Генератор оголошень Google Ads</h1>
                    <p>Створіть ефективні рекламні оголошення за лічені хвилини</p>
                </div>

                <div className="google-ads-generator__content">
                    <div className="google-ads-generator__info-panel">
                        <div className="google-ads-generator__info-item">
                            <div className="google-ads-generator__info-icon">📏</div>
                            <div className="google-ads-generator__info-content">
                                <strong>Заголовки:</strong> до 30 символів (3 шт)
                            </div>
                        </div>
                        <div className="google-ads-generator__info-item">
                            <div className="google-ads-generator__info-icon">📝</div>
                            <div className="google-ads-generator__info-content">
                                <strong>Описи:</strong> до 90 символів (2 шт)
                            </div>
                        </div>
                    </div>

                    <div className="google-ads-generator__main-layout">
                        <div className="google-ads-generator__form-section">
                            <h2>Введіть інформацію</h2>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="businessName">Назва бізнесу / продукту</label>
                                <input
                                    type="text"
                                    id="businessName"
                                    placeholder="Наприклад: Супер Піца"
                                    maxLength={50}
                                    value={formData.businessName}
                                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                                />
                            </div>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="keywords">Ключові слова (через кому)</label>
                                <input
                                    type="text"
                                    id="keywords"
                                    placeholder="Наприклад: піца, доставка, київ"
                                    value={formData.keywords}
                                    onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                                />
                            </div>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="usp">Унікальна пропозиція (УТП)</label>
                                <input
                                    type="text"
                                    id="usp"
                                    placeholder="Наприклад: Доставка за 30 хвилин або безкоштовно"
                                    maxLength={100}
                                    value={formData.usp}
                                    onChange={(e) => setFormData({ ...formData, usp: e.target.value })}
                                />
                            </div>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="offer">Спеціальна пропозиція / знижка</label>
                                <input
                                    type="text"
                                    id="offer"
                                    placeholder="Наприклад: Знижка 20% на перше замовлення"
                                    maxLength={80}
                                    value={formData.offer}
                                    onChange={(e) => setFormData({ ...formData, offer: e.target.value })}
                                />
                            </div>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="cta">Заклик до дії (CTA)</label>
                                <select
                                    id="cta"
                                    value={formData.cta}
                                    onChange={(e) => setFormData({ ...formData, cta: e.target.value })}
                                >
                                    <option value="Замовити зараз">Замовити зараз</option>
                                    <option value="Купити">Купити</option>
                                    <option value="Дізнатись більше">Дізнатись більше</option>
                                    <option value="Спробувати безкоштовно">Спробувати безкоштовно</option>
                                    <option value="Отримати знижку">Отримати знижку</option>
                                </select>
                            </div>

                            <div className="google-ads-generator__form-group">
                                <label htmlFor="location">Місцезнаходження (опціонально)</label>
                                <input
                                    type="text"
                                    id="location"
                                    placeholder="Наприклад: Київ, Україна"
                                    maxLength={30}
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                />
                            </div>

                            <button className="google-ads-generator__generate-btn" onClick={generateAds}>
                                🚀 Згенерувати оголошення
                            </button>
                        </div>

                        <div className="google-ads-generator__preview-section">
                            <h2>Прев'ю оголошення</h2>
                            {results && (
                                <div className="google-ads-generator__results">
                                    <h3>📋 Ваші оголошення готові!</h3>

                                    <div className="google-ads-generator__result-block">
                                        <h4>Заголовки (Headlines)</h4>
                                        {results.headlines.map((headline: string, index: number) => (
                                            <div key={index} className="google-ads-generator__result-item">
                                                <span className="google-ads-generator__result-text">{headline}</span>
                                                <button
                                                    className="google-ads-generator__copy-btn"
                                                    onClick={() => copyToClipboard(headline)}
                                                >
                                                    Копіювати
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="google-ads-generator__result-block">
                                        <h4>Описи (Descriptions)</h4>
                                        {results.descriptions.map((description: string, index: number) => (
                                            <div key={index} className="google-ads-generator__result-item">
                                                <span className="google-ads-generator__result-text">{description}</span>
                                                <button
                                                    className="google-ads-generator__copy-btn"
                                                    onClick={() => copyToClipboard(description)}
                                                >
                                                    Копіювати
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="google-ads-generator__templates-section">
                        <h2>🎨 Готові шаблони</h2>
                        <div className="google-ads-generator__templates-grid">
                            <div className="google-ads-generator__template-card" onClick={() => loadTemplate('ecommerce')}>
                                <div className="google-ads-generator__template-icon">🛍️</div>
                                <h3>E-commerce</h3>
                                <p>Інтернет-магазин, товари</p>
                            </div>
                            <div className="google-ads-generator__template-card" onClick={() => loadTemplate('services')}>
                                <div className="google-ads-generator__template-icon">⚙️</div>
                                <h3>Послуги</h3>
                                <p>Ремонт, консультації, сервіс</p>
                            </div>
                            <div className="google-ads-generator__template-card" onClick={() => loadTemplate('restaurant')}>
                                <div className="google-ads-generator__template-icon">🍕</div>
                                <h3>Ресторан / Кафе</h3>
                                <p>Доставка їжі, заклади</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleAdsGenerator;