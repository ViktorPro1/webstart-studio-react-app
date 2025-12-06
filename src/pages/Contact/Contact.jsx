import React from 'react';
import SEO from '../../SEO/SEO';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import './Contact.css';
import './Contact.mobile.css';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Контакти"
        description="Зв'яжіться з WebStart Studio - email, телефон, Viber. Ми завжди на зв'язку!"
        keywords="контакти, webstart studio, email, телефон, viber, зв'язок"
      />
      
      <div className="contact-page">
        <section id="contact-gift-wrapper">
          <div className="contact-block">
            <h2>Контакти</h2>
            
            <div className="contact-item">
              <Mail size={24} className="contact-icon" />
              <div className="contact-info">
                <p className="contact-label">Email:</p>
                <a href="mailto:webstartstudio978@gmail.com">
                  webstartstudio978@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={24} className="contact-icon" />
              <div className="contact-info">
                <p className="contact-label">Телефон:</p>
                <a href="tel:+380661391932">
                  +38 (066) 139 19 32
                </a>
              </div>
            </div>

            <div className="viber-wrapper">
              <a 
                href="viber://chat?number=+380661391932" 
                className="viber-button"
              >
                <MessageCircle size={20} />
                Написати у Viber
              </a>
            </div>

            <div className="contact-additional-contacts">
              <h3>Додаткові контакти</h3>
              <div className="contact-social-links">
                <a 
                  href="https://t.me/Viktor_freelancer_recruiting_pit" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link telegram"
                >
                  ✈️ Telegram
                </a>
                <a 
                  href="mailto:webstartstudio978@gmail.com" 
                  className="contact-social-link email"
                >
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="contact-container">
            <h2>Або залиште заявку</h2>
            <p className="contact-form-description">
              Заповніть форму, і ми зв'яжемося з вами протягом 24 годин
            </p>
            
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              alert('Форма відправлена! Ми зв\'яжемося з вами найближчим часом.');
            }}>
              <div className="contact-form-group">
                <label htmlFor="name">Ім'я *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Ваше ім'я"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="your@email.com"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="phone">Телефон</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  placeholder="+38 (___) ___ __ __"
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="service">Тип послуги *</label>
                <select id="service" name="service" required>
                  <option value="">Оберіть послугу</option>
                  <option value="landing">Лендінг</option>
                  <option value="portfolio">Портфоліо</option>
                  <option value="resume">Резюме</option>
                  <option value="corporate">Корпоративний сайт</option>
                  <option value="ai">AI сервіси</option>
                  <option value="other">Інше</option>
                </select>
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Повідомлення *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  placeholder="Розкажіть детальніше про ваш проєкт..."
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-button">
                Відправити заявку
              </button>
            </form>
          </div>
        </section>

        <section className="contact-working-hours">
          <div className="contact-container">
            <h2>Графік роботи</h2>
            <div className="contact-hours-grid">
              <div className="contact-hours-item">
                <strong>Пн - Пт:</strong>
                <span>9:00 - 18:00</span>
              </div>
              <div className="contact-hours-item">
                <strong>Сб - Нд:</strong>
                <span>За домовленістю</span>
              </div>
              <div className="contact-hours-item contact-response">
                <strong>Час відповіді:</strong>
                <span>До 2 годин</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;