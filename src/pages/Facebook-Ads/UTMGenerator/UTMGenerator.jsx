import React, { useState } from 'react';
import './UTMGenerator.css';

const UTMGenerator = () => {
    const [url, setUrl] = useState('');
    const [source, setSource] = useState('');
    const [medium, setMedium] = useState('');
    const [campaign, setCampaign] = useState('');
    const [term, setTerm] = useState('');
    const [content, setContent] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [showCopyMessage, setShowCopyMessage] = useState(false);

    const generateUtmUrl = () => {
        if (!url || !source || !medium || !campaign) {
            setGeneratedUrl('Будь ласка, заповніть усі обов\'язкові поля (*).');
            return;
        }

        let utmParams = [];
        if (source) utmParams.push(`utm_source=${encodeURIComponent(source)}`);
        if (medium) utmParams.push(`utm_medium=${encodeURIComponent(medium)}`);
        if (campaign) utmParams.push(`utm_campaign=${encodeURIComponent(campaign)}`);
        if (term) utmParams.push(`utm_term=${encodeURIComponent(term)}`);
        if (content) utmParams.push(`utm_content=${encodeURIComponent(content)}`);

        const separator = url.includes('?') ? '&' : '?';
        const finalUrl = url + separator + utmParams.join('&');

        setGeneratedUrl(finalUrl);
    };

    const copyUtmUrl = () => {
        if (!generatedUrl || generatedUrl.includes('Будь ласка')) return;

        navigator.clipboard.writeText(generatedUrl).then(() => {
            setShowCopyMessage(true);
            setTimeout(() => setShowCopyMessage(false), 2000);
        });
    };

    return (
        <div className="utm-generator">
            <div className="utm-generator-container">
                <h1 className="utm-generator-title">
                    Генератор UTM-міток <br />
                    <span className="utm-generator-subtitle">(UTM Tag Generator)</span>
                </h1>

                <div className="utm-generator-intro">
                    <p>Використовуйте цей інструмент, щоб додати параметри відстеження до URL-адреси ваших лендінгів.</p>
                </div>

                <div className="utm-generator-form">
                    <div className="utm-generator-form-group">
                        <label htmlFor="url" className="utm-generator-label required">
                            URL вебсайту (адреса лендінгу)
                        </label>
                        <input
                            type="text"
                            id="url"
                            className="utm-generator-input"
                            placeholder="https://example.com/offer"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>

                    <h2 className="utm-generator-section-title">Параметри Кампанії</h2>

                    <div className="utm-generator-form-group">
                        <label htmlFor="source" className="utm-generator-label required">
                            Source (Джерело) - utm_source
                        </label>
                        <input
                            type="text"
                            id="source"
                            className="utm-generator-input"
                            placeholder="facebook, google, telegram"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        />
                    </div>

                    <div className="utm-generator-form-group">
                        <label htmlFor="medium" className="utm-generator-label required">
                            Medium (Тип) - utm_medium
                        </label>
                        <input
                            type="text"
                            id="medium"
                            className="utm-generator-input"
                            placeholder="cpc, banner, email, social"
                            value={medium}
                            onChange={(e) => setMedium(e.target.value)}
                        />
                    </div>

                    <div className="utm-generator-form-group">
                        <label htmlFor="campaign" className="utm-generator-label required">
                            Campaign (Кампанія) - utm_campaign
                        </label>
                        <input
                            type="text"
                            id="campaign"
                            className="utm-generator-input"
                            placeholder="summer_sale_2025"
                            value={campaign}
                            onChange={(e) => setCampaign(e.target.value)}
                        />
                    </div>

                    <div className="utm-generator-form-group">
                        <label htmlFor="term" className="utm-generator-label">
                            Term (Ключове слово) - utm_term (Необов'язково)
                        </label>
                        <input
                            type="text"
                            id="term"
                            className="utm-generator-input"
                            placeholder="купити резюме онлайн"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                        />
                    </div>

                    <div className="utm-generator-form-group">
                        <label htmlFor="content" className="utm-generator-label">
                            Content (Контент) - utm_content (Необов'язково)
                        </label>
                        <input
                            type="text"
                            id="content"
                            className="utm-generator-input"
                            placeholder="blue_banner, text_ad_v2"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>

                    <button className="utm-generator-button" onClick={generateUtmUrl}>
                        Згенерувати URL
                    </button>

                    {generatedUrl && (
                        <div className="utm-generator-result">
                            <h3 className="utm-generator-result-title">Згенерована URL-адреса:</h3>
                            <p className="utm-generator-result-text">{generatedUrl}</p>
                            <button
                                className="utm-generator-copy-button"
                                onClick={copyUtmUrl}
                                disabled={generatedUrl.includes('Будь ласка')}
                            >
                                Скопіювати
                            </button>
                            {showCopyMessage && (
                                <span className="utm-generator-copy-message">Скопійовано!</span>
                            )}
                        </div>
                    )}
                </div>

                {/* Info Section */}
                <div className="utm-generator-info">
                    <h2 className="utm-generator-info-title">Що таке UTM-мітки?</h2>
                    <div className="utm-generator-info-grid">
                        <div className="utm-generator-info-card">
                            <div className="info-icon">📊</div>
                            <h3>Відстеження</h3>
                            <p>Дозволяють відстежувати джерела трафіку в Google Analytics</p>
                        </div>
                        <div className="utm-generator-info-card">
                            <div className="info-icon">🎯</div>
                            <h3>Аналітика</h3>
                            <p>Аналізуйте ефективність кожної рекламної кампанії</p>
                        </div>
                        <div className="utm-generator-info-card">
                            <div className="info-icon">💡</div>
                            <h3>Оптимізація</h3>
                            <p>Приймайте рішення на основі реальних даних про джерела</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UTMGenerator;