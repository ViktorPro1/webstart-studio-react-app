import React from 'react';
import SEO from '../../../SEO/SEO';
import { Bot, Zap, TrendingUp } from 'lucide-react';
import './AIAutomation.css';
import './AIAutomation.mobile.css';

const AIAutomation = () => {
  return (
    <>
      <SEO 
        title="AI Автоматизація"
        description="Автоматизація бізнес-процесів за допомогою штучного інтелекту"
        keywords="ai автоматизація, штучний інтелект, автоматизація процесів"
      />
      <div className="ai-automation-page">
        <section className="page-hero">
          <div className="hero-icon">
            <Bot size={60} />
          </div>
          <h1 className="page-title">AI Автоматизація</h1>
          <p className="page-subtitle">
            Автоматизуйте рутинні задачі та оптимізуйте бізнес-процеси за допомогою 
            сучасних AI технологій
          </p>
        </section>

        <section className="content-section">
          <h2 className="section-title">Що ми пропонуємо</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Zap size={40} />
              <h3>Швидкість</h3>
              <p>Автоматизація процесів, які раніше займали години</p>
            </div>
            <div className="feature-card">
              <TrendingUp size={40} />
              <h3>Ефективність</h3>
              <p>Підвищення продуктивності вашого бізнесу</p>
            </div>
            <div className="feature-card">
              <Bot size={40} />
              <h3>AI Рішення</h3>
              <p>Індивідуальні AI інструменти для ваших потреб</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">Переваги автоматизації</h2>
          <ul className="benefits-list">
            <li>Економія часу та ресурсів</li>
            <li>Зменшення людських помилок</li>
            <li>Масштабування бізнесу без додаткових витрат</li>
            <li>24/7 робота автоматизованих систем</li>
            <li>Аналіз та оптимізація процесів</li>
          </ul>
        </section>

        <section className="cta-section">
          <h2>Готові автоматизувати ваш бізнес?</h2>
          <button className="cta-button">Замовити консультацію</button>
        </section>
      </div>
    </>
  );
};

export default AIAutomation;