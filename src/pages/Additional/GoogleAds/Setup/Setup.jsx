import React from 'react';
import SEO from '../../../../SEO/SEO';
import { Target, TrendingUp, DollarSign } from 'lucide-react';
import './Setup.css';
import './Setup.mobile.css';

const GoogleAdsSetup = () => {
  return (
    <>
      <SEO 
        title="Налаштування Google Ads"
        description="Професійне налаштування рекламних кампаній в Google Ads"
        keywords="google ads, налаштування реклами, контекстна реклама"
      />
      <div className="google-ads-page">
        <section className="page-hero">
          <div className="hero-icon">
            <Target size={60} />
          </div>
          <h1 className="page-title">Налаштування Google Ads</h1>
          <p className="page-subtitle">
            Професійне налаштування рекламних кампаній в Google Ads для максимальної 
            ефективності вашого бізнесу
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Що включає налаштування</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Target size={40} />
              <h3>Аналіз ніші</h3>
              <p>Детальний аналіз конкурентів та цільової аудиторії</p>
            </div>
            <div className="feature-card">
              <TrendingUp size={40} />
              <h3>Стратегія</h3>
              <p>Розробка ефективної рекламної стратегії</p>
            </div>
            <div className="feature-card">
              <DollarSign size={40} />
              <h3>Оптимізація бюджету</h3>
              <p>Раціональний розподіл рекламного бюджету</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">Етапи роботи</h2>
          <div className="steps-list">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Аналіз бізнесу</h3>
                <p>Вивчаємо ваш продукт, цільову аудиторію та конкурентів</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Створення структури</h3>
                <p>Формуємо структуру рекламних кампаній та груп оголошень</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Налаштування таргетингу</h3>
                <p>Налаштовуємо точний таргетинг для досягнення цільової аудиторії</p>
              </div>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Запуск та моніторинг</h3>
                <p>Запускаємо кампанії та постійно моніторимо результати</p>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2 className="section-title">Вартість послуг</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Базовий</h3>
              <div className="price">від 5000 грн</div>
              <ul>
                <li>Налаштування 1-2 кампаній</li>
                <li>Базова аналітика</li>
                <li>Консультація</li>
              </ul>
              <button className="cta-button">Замовити</button>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Популярний</div>
              <h3>Професійний</h3>
              <div className="price">від 10000 грн</div>
              <ul>
                <li>Налаштування до 5 кампаній</li>
                <li>Повна аналітика</li>
                <li>Оптимізація протягом місяця</li>
                <li>Регулярні звіти</li>
              </ul>
              <button className="cta-button">Замовити</button>
            </div>
            <div className="pricing-card">
              <h3>Корпоративний</h3>
              <div className="price">від 20000 грн</div>
              <ul>
                <li>Необмежена кількість кампаній</li>
                <li>Розширена аналітика</li>
                <li>Постійна оптимізація</li>
                <li>Персональний менеджер</li>
              </ul>
              <button className="cta-button">Замовити</button>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Готові розпочати?</h2>
          <p>Зв'яжіться з нами для безкоштовної консультації</p>
          <button className="cta-button">Отримати консультацію</button>
        </section>
      </div>
    </>
  );
};

export default GoogleAdsSetup;