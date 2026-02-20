import React from 'react';
import './PlatformComparison.css';
import './PlatformComparison.mobile.css';

const PlatformComparison = () => {
  const comparisonData = [
    {
      criterion: 'Призначення',
      webstart: 'Розробка резюме, портфоліо та лендінгів з адаптацією під мобільні пристрої',
      webstudio: 'Open-source конструктор для дизайнерів і розробників',
      webstarts: 'Онлайн-конструктор сайтів для початківців і бізнесу'
    },
    {
      criterion: 'Швидкість роботи',
      webstart: 'Оптимізовано під легкі сторінки',
      webstudio: 'Залежить від налаштувань',
      webstarts: 'Стабільна'
    },
    {
      criterion: 'Мобільна адаптація',
      webstart: 'PWA, базова адаптивність',
      webstudio: 'Адаптивні шаблони',
      webstarts: 'Адаптивні шаблони'
    },
    {
      criterion: 'Гнучкість дизайну',
      webstart: 'Індивідуально під замовника',
      webstudio: 'Висока',
      webstarts: 'Середня'
    },
    {
      criterion: 'SEO-оптимізація',
      webstart: 'Базові налаштування',
      webstudio: 'Є базова',
      webstarts: 'Є базова'
    },
    {
      criterion: 'Підтримка клієнтів',
      webstart: 'Email, онлайн-чат, спільнота, особистий контакт',
      webstudio: 'Спільнота (форум), email',
      webstarts: 'Онлайн-чат, email, спільнота'
    },
    {
      criterion: 'Ціноутворення',
      webstart: 'Узгоджується індивідуально',
      webstudio: 'Безкоштовно / платно',
      webstarts: 'Від $6/міс'
    }
  ];

  return (
    <>

      <div className="platform-comparison-page">
        <section className="comparison-section">
          <h2 className="centered-header">Порівняльний аналіз платформ</h2>
          <p className="centered-text">
            Порівняння <strong>
              Web<span className="highlight-start">Start</span> Studio
            </strong> з популярними конструкторами Webstudio та WebStarts.
            Ми маємо інший підхід — робимо все за вас, додаючи додаткові можливості
            (таргет, PIT, технічна підтримка), яких немає в стандартних конструкторах.
          </p>

          <div className="table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Критерій</th>
                  <th>WebStart Studio (стартує)</th>
                  <th>Webstudio</th>
                  <th>WebStarts</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.criterion}</strong></td>
                    <td>{row.webstart}</td>
                    <td>{row.webstudio}</td>
                    <td>{row.webstarts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlatformComparison;