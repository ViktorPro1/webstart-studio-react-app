import React, { useState, useEffect } from 'react';
import { Package, Download, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import './ClientPortal.css';
import './ClientPortal.mobile.css';

interface ClientParams {
    id: string;
    name: string;
    project: string;
    step: number;
    zip: string;
    price: string;
    status: string;
}

const ClientPortal = () => {
    const [params, setParams] = useState<ClientParams>({
        id: 'demo-123',
        name: 'Клієнт',
        project: 'Веб-проєкт',
        step: 1,
        zip: '',
        price: '500',
        status: 'waiting'
    });
    const [step, setStep] = useState(1);
    const [selectedOption, setSelectedOption] = useState<'zip' | 'hosting' | null>(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsObj: ClientParams = {
            id: urlParams.get('id') || 'demo-123',
            name: urlParams.get('name') || 'Клієнт',
            project: urlParams.get('project') || 'Веб-проєкт',
            step: parseInt(urlParams.get('step') || '1') || 1,
            zip: urlParams.get('zip') || '',
            price: urlParams.get('price') || '500',
            status: urlParams.get('status') || 'waiting'
        };
        setParams(paramsObj);
        setStep(paramsObj.step);

        const storageKey = `client_${paramsObj.id}`;
        const existingData = localStorage.getItem(storageKey);
        if (existingData) {
            try {
                const data = JSON.parse(existingData) as {
                    selectedOption: 'zip' | 'hosting' | null;
                };
                setSelectedOption(data.selectedOption);
            } catch {
            }
        }
    }, []);

    const handleOptionSelect = (option: 'zip' | 'hosting'): void => {
        setSelectedOption(option);
        const storageKey = `client_${params.id}`;
        localStorage.setItem(storageKey, JSON.stringify({
            ...params,
            selectedOption: option,
            timestamp: new Date().toISOString()
        }));
    };

    const getStepStatus = (stepNumber: number): 'completed' | 'active' | 'pending' => {
        if (stepNumber < step) return 'completed';
        if (stepNumber === step) return 'active';
        return 'pending';
    };

    const getStepIcon = (stepNumber: number): string => {
        const status = getStepStatus(stepNumber);
        if (status === 'completed') return '✓';
        return stepNumber.toString();
    };

    const getStepColor = (stepNumber: number): string => {
        const status = getStepStatus(stepNumber);
        if (status === 'completed') return 'client-portal-step-completed';
        if (status === 'active') return 'client-portal-step-active';
        return 'client-portal-step-pending';
    };

    return (
        <div className="client-portal">
            <div className="client-portal-container">
                <div className="client-portal-header">
                    <h1 className="client-portal-title">Твій кабінет</h1>
                    <p className="client-portal-welcome">
                        Вітаю, <span className="client-portal-name">{params.name}</span>!
                    </p>
                    <p className="client-portal-project">Проєкт: {params.project}</p>
                </div>

                <div className="client-portal-progress">
                    <div className="client-portal-progress-steps">

                        <div className="client-portal-progress-line">
                            <div
                                className="client-portal-progress-line-fill"
                                style={{ width: `${((step - 1) / 2) * 100}%` }}
                            ></div>
                        </div>

                        <div className="client-portal-progress-step">
                            <div className={`client-portal-step-circle ${getStepColor(1)}`}>
                                {getStepIcon(1)}
                            </div>
                            <span className="client-portal-step-label">Бриф</span>
                        </div>

                        <div className="client-portal-progress-step">
                            <div className={`client-portal-step-circle ${getStepColor(2)}`}>
                                {getStepIcon(2)}
                            </div>
                            <span className="client-portal-step-label">Вибір</span>
                        </div>

                        <div className="client-portal-progress-step">
                            <div className={`client-portal-step-circle ${getStepColor(3)}`}>
                                {getStepIcon(3)}
                            </div>
                            <span className="client-portal-step-label">Готово</span>
                        </div>
                    </div>
                </div>

                {step === 1 && (
                    <div className="client-portal-content">
                        <div className="client-portal-card">
                            <h2 className="client-portal-card-title">Обери варіант отримання сайту:</h2>

                            <button
                                onClick={() => handleOptionSelect('zip')}
                                className="client-portal-option-btn client-portal-option-zip"
                            >
                                <div className="client-portal-option-content">
                                    <Package className="client-portal-option-icon" />
                                    <div className="client-portal-option-text">
                                        <h3 className="client-portal-option-title">📦 Хочу ZIP-папку (сам розгорну)</h3>
                                        <p className="client-portal-option-desc">Отримай готовий проєкт та розгорни самостійно</p>
                                    </div>
                                </div>
                            </button>

                            <button
                                onClick={() => handleOptionSelect('hosting')}
                                className="client-portal-option-btn client-portal-option-hosting"
                            >
                                <div className="client-portal-option-content">
                                    <CreditCard className="client-portal-option-icon" />
                                    <div className="client-portal-option-text">
                                        <h3 className="client-portal-option-title">🚀 Розмісти від нашої платформи (за певну оплату)</h3>
                                        <p className="client-portal-option-desc">Ми розгорнемо сайт за тебе на Netlify</p>
                                    </div>
                                </div>
                            </button>
                        </div>

                        {selectedOption && (
                            <div className="client-portal-notification client-portal-notification-success">
                                <p className="client-portal-notification-text">
                                    ✅ Вибрано: <span className="client-portal-notification-bold">
                                        {selectedOption === 'zip' ? 'ZIP-папка' : 'Розміщення від платформи'}
                                    </span>
                                </p>
                                <p className="client-portal-notification-subtext">
                                    Очікуй на наступне повідомлення з деталями!
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {step === 2 && params.zip && (
                    <div className="client-portal-content">
                        <div className="client-portal-card">
                            <div className="client-portal-card-icon-wrapper">
                                <div className="client-portal-card-icon client-portal-card-icon-green">
                                    <Package size={48} />
                                </div>
                            </div>
                            <h2 className="client-portal-card-title client-portal-card-title-centered">📦 Отримай ZIP</h2>
                            <p className="client-portal-card-subtitle">Ось ZIP-папка з твоїм проєктом!</p>

                            <a
                                href={params.zip}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="client-portal-download-btn"
                            >
                                <Download size={32} />
                                <span>Скачати ZIP-архів</span>
                            </a>

                            <div className="client-portal-instructions-card">
                                <h3 className="client-portal-instructions-title">
                                    <AlertCircle size={20} />
                                    Як розгорнути самостійно:
                                </h3>
                                <ol className="client-portal-instructions-list">
                                    <li>
                                        <span className="client-portal-instruction-number">1</span>
                                        <span>Розпакуй завантажений ZIP-архів</span>
                                    </li>
                                    <li>
                                        <span className="client-portal-instruction-number">2</span>
                                        <span>Зайди на <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="client-portal-instruction-link">Netlify Drop</a></span>
                                    </li>
                                    <li>
                                        <span className="client-portal-instruction-number">3</span>
                                        <span>Перетягни розпаковану папку у вікно браузера</span>
                                    </li>
                                    <li>
                                        <span className="client-portal-instruction-number">4</span>
                                        <span>Отримай посилання на свій сайт миттєво! 🎉</span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="client-portal-content">
                        <div className="client-portal-card">
                            <div className="client-portal-card-icon-wrapper">
                                <div className="client-portal-card-icon client-portal-card-icon-blue">
                                    <CreditCard size={48} />
                                </div>
                            </div>
                            <h2 className="client-portal-card-title client-portal-card-title-centered">🚀 Розміщу на Netlify</h2>
                            <p className="client-portal-card-subtitle">Я розгорну сайт від нашої платформи</p>

                            <div className="client-portal-price-card">
                                <h3 className="client-portal-price-label">Вартість послуги:</h3>
                                <div className="client-portal-price-amount">{params.price} грн</div>
                                <p className="client-portal-price-note">Одноразовий платіж</p>
                            </div>

                            <div className="client-portal-payment-card">
                                <h3 className="client-portal-payment-title">
                                    <CreditCard size={20} />
                                    Платіжні дані:
                                </h3>
                                <div className="client-portal-payment-info">
                                    <p className="client-portal-payment-label">Номер картки:</p>
                                    <p className="client-portal-payment-value client-portal-card-number">4441 1111 2222 3333</p>
                                </div>
                                <div className="client-portal-payment-info">
                                    <p className="client-portal-payment-label">Отримувач:</p>
                                    <p className="client-portal-payment-value">Олег І.</p>
                                </div>
                            </div>

                            <div className="client-portal-features-card">
                                <h3 className="client-portal-features-title">
                                    <Clock size={20} />
                                    Що входить:
                                </h3>
                                <ul className="client-portal-features-list">
                                    <li>
                                        <CheckCircle size={20} className="client-portal-feature-icon" />
                                        <span>Розміщення на Netlify</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={20} className="client-portal-feature-icon" />
                                        <span>Налаштування домену (якщо є)</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={20} className="client-portal-feature-icon" />
                                        <span>SSL-сертифікат (безпечне з'єднання)</span>
                                    </li>
                                    <li>
                                        <CheckCircle size={20} className="client-portal-feature-icon" />
                                        <span>Технічна підтримка 30 днів</span>
                                    </li>
                                </ul>
                            </div>

                            {params.status === 'waiting' && (
                                <div className="client-portal-notification client-portal-notification-warning">
                                    <p className="client-portal-notification-text">
                                        <Clock size={20} />
                                        Очікуємо оплату...
                                    </p>
                                    <p className="client-portal-notification-subtext">
                                        Після оплати — розгортаю за 10 хвилин! ⚡
                                    </p>
                                </div>
                            )}

                            {params.status === 'paid' && (
                                <div className="client-portal-notification client-portal-notification-success">
                                    <p className="client-portal-notification-text">
                                        <CheckCircle size={20} />
                                        ✅ Оплату отримано!
                                    </p>
                                    <p className="client-portal-notification-subtext">
                                        Розгортаю твій сайт прямо зараз... 🚀
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                <div className="client-portal-footer">
                    <a href="/" className="client-portal-back-btn">
                        ← На головну
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ClientPortal;
