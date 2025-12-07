import React from 'react';
import SEO from '../../SEO/SEO';
import { FileText, Briefcase, Users, } from 'lucide-react';
import './Home.css';
import './Home.mobile.css';

const Home = () => {
  const services = [
    {
      icon: FileText,
      title: 'Лендінги',
      description: 'Створюємо ефективні одностороінкові сайти для вашого бізнесу з сучасним дизайном та високою конверсією.'
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

  return (
    <>
      <SEO
        title="Головна"
        description="Створення професійних лендінгів, портфоліо та резюме"
        keywords="веб студія, лендінги, портфоліо, резюме"
      />
      <div className="home-page">
        <section className="hero-section">
          <h1 className="hero-title">WebStart Studio</h1>
          <p className="hero-subtitle">
            Наш підхід — "менше слів, більше результату": компактний дизайн, зрозуміла структура,
            зручний доступ до всієї потрібної інформації. Ми прагнемо, щоб кожен лендінг, портфоліо
            та резюме був водночас красивим і практичним.
          </p>
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