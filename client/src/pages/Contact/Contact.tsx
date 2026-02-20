import React, { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Phone, MessageCircle, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import API from '../../api/api';
import './Contact.css';
import './Contact.mobile.css';

interface IFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface IStatus {
  type: 'success' | 'error' | 'loading' | '';
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<IStatus>({
    type: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Відправка...' });

    try {
      // 1️⃣ Зберігаємо в MySQL
      await API.post('/contacts', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Не вказано',
        service: formData.service,
        message: formData.message
      });

      // 2️⃣ Також відправляємо в Google Sheets
      const scriptURL = 'https://script.google.com/macros/s/AKfycbwXCIDEa8tvukJDhWi3GOaSzZ3Fpoh6ILzJ5KLnBewdYFgNGcGZoY-SYtA98ZhQfx9V9A/exec';
      await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Не вказано',
          service: formData.service,
          message: formData.message
        })
      });

      setStatus({
        type: 'success',
        message: "✅ Дякуємо! Ваша заявка успішно відправлена. Ми зв'яжемося з вами протягом 24 годин."
      });

      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);

    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: '❌ Помилка відправки. Будь ласка, спробуйте пізніше або напишіть нам на email.'
      });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    }
  };

  return (
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

          <div className="contact-viber-card">
            <MessageCircle size={20} className="contact-viber-icon" />
            <div>
              <div className="contact-viber-label">Viber</div>
              <a
                href="viber://chat?number=+380661391932"
                className="contact-viber-value"
              >
                Написати повідомлення
              </a>
            </div>
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
                href="https://chat.whatsapp.com/H5Mz1CTwCwDJAXvyhPKUka"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link whatsapp"
              >
                📱 WhatsApp
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

          {status.message && (
            <div className={`contact-status-message ${status.type}`}>
              {status.type === 'success' && <CheckCircle size={20} />}
              {status.type === 'error' && <AlertCircle size={20} />}
              {status.type === 'loading' && <Loader size={20} className="spinning" />}
              <span>{status.message}</span>
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name">Ім'я *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Ваше ім'я"
                autoComplete="name"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                autoComplete="email"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+38 (___) ___ __ __"
                autoComplete="tel"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="service">Тип послуги *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                autoComplete="off"
              >
                <option value="">Оберіть послугу</option>
                <option value="Лендінг">Лендінг</option>
                <option value="Портфоліо">Портфоліо</option>
                <option value="Резюме">Резюме</option>
                <option value="Корпоративний сайт">Корпоративний сайт</option>
                <option value="AI Автоматизація">AI Автоматизація</option>
                <option value="AI Промптінг">AI Промптінг</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Facebook Ads">Facebook Ads</option>
                <option value="UI/UX Дизайн">UI/UX Дизайн</option>
                <option value="Логотип">Логотип</option>
                <option value="Брендинг">Брендинг</option>
                <option value="Повернення податків">Повернення податків</option>
                <option value="Чистка ПК">Чистка ПК</option>
                <option value="Інше">Інше</option>
              </select>
            </div>

            <div className="contact-form-group">
              <label htmlFor="message">Повідомлення *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Розкажіть детальніше про ваш проєкт..."
                autoComplete="off"
              />
            </div>

            <button
              type="submit"
              className="contact-submit-button"
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? 'Відправка...' : 'Відправити заявку'}
            </button>
          </form>
        </div>
      </section>

      <section className="contact-working-hours">
        <div className="contact-container">
          <h2>Період доступу</h2>
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
  );
};

export default Contact;