import React from 'react';
import { Download, FileText, Briefcase, Globe } from 'lucide-react';
import './Briefs.css';
import './Briefs.mobile.css';

const Briefs = () => {
  const briefs = [
    {
      title: 'Бриф на резюме',
      file: '/documents/brief_resume.docx',
      icon: FileText,
      color: 'resume',
      description: 'Завантажте бриф для створення професійного резюме'
    },
    {
      title: 'Бриф на портфоліо',
      file: '/documents/brief_portfolio.docx',
      icon: Briefcase,
      color: 'portfolio',
      description: 'Завантажте бриф для створення портфоліо'
    },
    {
      title: 'Бриф на сайт',
      file: '/documents/brief_site.docx',
      icon: Globe,
      color: 'site',
      description: 'Завантажте бриф для створення сайту або лендінгу'
    }
  ];

  return (
    <>

      <div className="briefs-page">
        <section className="briefs">
          <div className="briefs-container">
            <h2 className="briefs-title">Для отримання індивідуального проєкту</h2>
            <p className="briefs-description">
              Оберіть напрям і завантажте короткий бриф. <br />
              Після того, як ви його заповните, надішліть нам у{' '}
              <a 
                href="viber://chat?number=+380661391932"
                className="viber-link"
              >
                Viber
              </a>
            </p>

            <div className="briefs-grid">
              {briefs.map((brief, index) => (
                <div key={index} className={`brief-card brief-${brief.color}`}>
                  <div className="brief-icon">
                    <brief.icon size={40} />
                  </div>
                  <h3 className="brief-title">{brief.title}</h3>
                  <p className="brief-card-description">{brief.description}</p>
                  <a 
                    href={brief.file} 
                    download 
                    className={`brief-btn brief-${brief.color}-btn`}
                  >
                    <Download size={20} />
                    <span>Завантажити</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="briefs-info">
              <h3>📋 Як це працює?</h3>
              <ol className="steps-list">
                <li>Завантажте потрібний бриф</li>
                <li>Заповніть всі поля детально</li>
                <li>Надішліть заповнений бриф нам у Viber</li>
                <li>Отримайте індивідуальну пропозицію протягом 24 годин</li>
              </ol>
            </div>

            <div className="contact-section">
              <h3>💬 Маєте питання?</h3>
              <p>Зв'яжіться з нами зручним способом:</p>
              <div className="contact-buttons">
                <a 
                  href="viber://chat?number=+380661391932" 
                  className="contact-btn viber-btn"
                >
                  📱 Viber
                </a>
                <a 
                  href="https://t.me/Viktor_freelancer_recruiting_pit" 
                  className="contact-btn telegram-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ✈️ Telegram
                </a>
                <a 
                  href="mailto:webstartstudio978@gmail.com" 
                  className="contact-btn email-btn"
                >
                  📧 Email
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Briefs;