import React, { useState } from 'react';
import './ProjectChecker.css';
import './ProjectChecker.mobile.css';

const ProjectChecker = () => {
    const [projectType, setProjectType] = useState('landing');
    const [url, setUrl] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    const checksData = {
        landing: [
            { name: 'CTA присутній', status: 'ok', desc: 'Кнопка заклику до дії видна і привертає увагу. Має бути чітко помітною, у вас приблизно 60% від ідеалу.', percentage: 60 },
            { name: 'Текст читається', status: 'ok', desc: 'Шрифт достатньо великий, контрастний. Має бути максимально 1000 символів на блок, у вас близько 600.', percentage: 90 },
            { name: 'Контраст кольорів', status: 'warning', desc: 'Деякі кольори фон/текст погано контрастують. Має бути 100% видимості тексту, у вас близько 70%.', percentage: 70 },
            { name: 'Заголовки H1/H2', status: 'ok', desc: 'Заголовки присутні, структура логічна. Має бути 3-5 блоків, у вас 3.', percentage: 100 },
            { name: 'Мобільна адаптивність', status: 'warning', desc: 'Деякі блоки з\'їжджають на мобільних. Має бути 100% адаптивності, у вас близько 60%.', percentage: 60 }
        ],
        resume: [
            { name: 'Наявність секцій', status: 'ok', desc: 'Досвід, Освіта та Навички присутні. Має бути всі ключові секції, у вас 3 з 3.', percentage: 100 },
            { name: 'Читаємість тексту', status: 'ok', desc: 'Шрифт достатньо великий та контрастний. Має бути 100%, у вас 90%.', percentage: 90 },
            { name: 'Ключові слова', status: 'warning', desc: 'Деякі професійні слова відсутні. Має бути 100%, у вас близько 60%.', percentage: 60 },
            { name: 'Структура логічна', status: 'ok', desc: 'Розділи розташовані правильно. Має бути ідеальна логіка, у вас 80%.', percentage: 80 }
        ],
        portfolio: [
            { name: 'Наявність кейсів / робіт', status: 'ok', desc: 'Всі основні роботи показані. Має бути 5+, у вас 4.', percentage: 80 },
            { name: 'Фото / зображення завантажені', status: 'ok', desc: 'Зображення присутні та якісні. Має бути 100%, у вас 95%.', percentage: 95 },
            { name: 'Опис проектів зрозумілий', status: 'ok', desc: 'Опис простий і зрозумілий. Має бути коротко та ясно, у вас 80%.', percentage: 80 },
            { name: 'Контактна інформація присутня', status: 'warning', desc: 'Контакти частково заповнені. Має бути 100%, у вас 50%.', percentage: 50 }
        ]
    };

    const handleCheck = () => {
        setError('');
        setResults([]);

        if (!url.trim()) {
            setError('Введіть URL або завантаж файл (демо)');
            return;
        }

        const checks = checksData[projectType];
        setResults(checks);
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'ok':
                return '✓';
            case 'warning':
                return '⚠';
            case 'error':
                return '✕';
            default:
                return '•';
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'ok':
                return '#10b981';
            case 'warning':
                return '#f59e0b';
            case 'error':
                return '#ef4444';
            default:
                return '#6b7280';
        }
    };

    return (
        <div className="project-checker">
            <div className="checker-container">
                <div className="checker-header">
                    <h1 className="checker-title">Універсальна перевірка проектів</h1>
                    <p className="checker-subtitle">
                        Вибери тип проєкту та введи URL або завантаж HTML-файл для перевірки.
                    </p>
                </div>

                <div className="checker-form">
                    <div className="form-group">
                        <label htmlFor="project-type" className="form-label">
                            Тип проєкту
                        </label>
                        <select
                            id="project-type"
                            className="form-select"
                            value={projectType}
                            onChange={(e) => setProjectType(e.target.value)}
                        >
                            <option value="landing">Лендінг</option>
                            <option value="resume">Резюме</option>
                            <option value="portfolio">Портфоліо</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="url-input" className="form-label">
                            URL проєкту
                        </label>
                        <input
                            type="text"
                            id="url-input"
                            className="form-input"
                            placeholder="Введи URL або залиш поле порожнім"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>

                    <button className="check-btn" onClick={handleCheck}>
                        <span className="btn-icon">🔍</span>
                        Оцінити проєкт
                    </button>
                </div>

                {error && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        {error}
                    </div>
                )}

                {results.length > 0 && (
                    <div className="results-container">
                        <div className="results-header">
                            <h2 className="results-title">Результати перевірки</h2>
                            <div className="results-stats">
                                <span className="stat-item stat-ok">
                                    {results.filter(r => r.status === 'ok').length} OK
                                </span>
                                <span className="stat-item stat-warning">
                                    {results.filter(r => r.status === 'warning').length} Попередження
                                </span>
                            </div>
                        </div>

                        <div className="results-list">
                            {results.map((check, index) => (
                                <div key={index} className={`result-card status-${check.status}`}>
                                    <div className="result-header">
                                        <div className="result-status-icon" style={{ backgroundColor: getStatusColor(check.status) }}>
                                            {getStatusIcon(check.status)}
                                        </div>
                                        <h3 className="result-name">{check.name}</h3>
                                    </div>

                                    <p className="result-desc">{check.desc}</p>

                                    <div className="result-progress">
                                        <div className="progress-bar">
                                            <div
                                                className={`progress-fill progress-${check.status}`}
                                                style={{
                                                    width: `${check.percentage}%`,
                                                    backgroundColor: getStatusColor(check.status)
                                                }}
                                            />
                                        </div>
                                        <span className="progress-text">{check.percentage}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectChecker;