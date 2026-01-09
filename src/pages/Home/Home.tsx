import React from 'react';
import { FileText, Briefcase, Users, Search, PieChart, Megaphone, Bot,Shield, Layout,Info, Code, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import PromoPopup from '../Promo/PromoPopup';
import './Home.css';
import './Home.mobile.css';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TickerItem {
  icon: LucideIcon;
  text: string;
  color: string;
}

const Home: React.FC = () => {
  const services: Service[] = [
    {
      icon: FileText,
      title: 'Лендінги',
      description: 'Створюємо ефективні односторонні сайти для вашого бізнесу з сучасним дизайном та високою конверсією.'
    },
    {
      icon: Briefcase,
      title: 'Портфоліо',
      description: 'Професійні портфоліо сайти, які презентують ваші роботи та досягнення в найкращому світлі.'
    },
    {
      icon: Users,
      title: 'Резюме',
      description: 'Інтерактивні онлайн-резюме, які допоможуть вам виділитися серед інших кандидатів та отримати роботу мрії.'
    }
  ];

  const tickerItems: TickerItem[] = [
    { icon: Info, text: 'Додаткові можливості', color: '#ce1313' },
    { icon: Search, text: 'Google Ads • Інструменти контекстної реклами', color: '#4285f4' },
    { icon: Megaphone, text: 'Facebook Ads • Таргетована реклама в соцмережах', color: '#1877f2' },
    { icon: Bot, text: 'AI Сервіси • Автоматизація,написання промптів для ваших-процесів', color: '#667eea' },
    { icon: Layout, text: 'Canva • Створення шаблонів та банерів', color: '#00c4cc' },
    { icon: Shield, text: 'Кібербезпека • Перевіряємо твої посилання і файли', color: '#2e7d32' },
    { icon: Code, text: 'Чистка ПК • Віддалена перевірка комп\'ютерів', color: '#f59e0b' },
    { icon: TrendingUp, text: 'PIT - 11 • Повернення податків з Польщі', color: '#8b5cf6' },
    { icon: PieChart, text: 'Data Analytics • Аналітика даних та графіки', color: '#ff5722' },
  ];

  return (
    <>
      <PromoPopup />

      <div className="home-page">
        {/* Бігучий рядок */}
        <div className="home-ticker-wrapper">
          <div className="home-ticker-track">
            {/* Перша копія */}
            {tickerItems.map((item, index) => (
              <div key={`first-${index}`} className="home-ticker-item">
                <div className="home-ticker-icon" style={{ backgroundColor: item.color }}>
                  <item.icon size={20} />
                </div>
                <span className="home-ticker-text">{item.text}</span>
                <span className="home-ticker-separator">•</span>
              </div>
            ))}
            {/* Друга копія для безшовної анімації */}
            {tickerItems.map((item, index) => (
              <div key={`second-${index}`} className="home-ticker-item">
                <div className="home-ticker-icon" style={{ backgroundColor: item.color }}>
                  <item.icon size={20} />
                </div>
                <span className="home-ticker-text">{item.text}</span>
                <span className="home-ticker-separator">•</span>
              </div>
            ))}
          </div>
        </div>

        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Web<span className="highlight-home">Start</span> Studio
            </h1>
            <p className="hero-subtitle">
              Наш підхід — "менше слів, більше результату": компактний дизайн, зрозуміла структура,
              зручний доступ до всієї потрібної інформації. Ми прагнемо, щоб кожен лендінг, портфоліо
              та резюме був водночас красивим і практичним.
            </p>
          </div>
          <div className="hero-image-container">
            <img
              src="/assets/hero-image.webp"
              alt="Професійний бізнесмен з ноутбуком"
              className="hero-image"
              width={546}
              height={546}
              loading="eager"
            />
          </div>
        </section>

        <section className="services-section">
          <h2 className="section-title">Що ми створюємо</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <service.icon size={30} />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2 className="section-title">Чому обирають нас?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h3>Швидкість</h3>
              <p>Реалізація проектів у короткі терміни без втрати якості</p>
            </div>
            <div className="feature-item">
              <h3>Якість</h3>
              <p>Написаний вручну код, адаптивний дизайн, повне SEO</p>
            </div>
            <div className="feature-item">
              <h3>Підтримка</h3>
              <p>Постійна технічна підтримка та оновлення проектів</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

