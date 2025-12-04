import React from 'react';
import './DiyVsUs.css';
import './DiyVsUs.mobile.css';

const DiyVsUs = () => {
  const comparisonRows = [
    {
      criterion: 'Час',
      diy: '❌ 2-4 тижні вивчення + робота',
      us: '✅ 1-3 дні готовий результат'
    },
    {
      criterion: 'Дизайн',
      diy: '❌ Шаблонний або кривий',
      us: '✅ Сучасний, унікальний'
    },
    {
      criterion: 'Технічні знання',
      diy: '❌ Потрібно вчити HTML/CSS',
      us: '✅ Нічого не треба знати'
    },
    {
      criterion: 'Мобільна версія',
      diy: '❌ Часто ламається',
      us: '✅ Ідеально на всіх екранах'
    },
    {
      criterion: 'SEO',
      diy: '❌ Без оптимізації',
      us: '✅ Базове SEO включено'
    },
    {
      criterion: 'Підтримка',
      diy: '❌ Сам собі майстер',
      us: '✅ 30 днів допомоги'
    }
  ];

  return (
    <div className="comparison-table-section">
      <h2>🆚 Самому vs З нами</h2>

      <table className="vs-table">
        <thead>
          <tr>
            <th>Критерій</th>
            <th>Створити самому</th>
            <th>
              Web<span className="logo-header">Start</span> Studio
            </th>
          </tr>
        </thead>

        <tbody>
          {comparisonRows.map((row, index) => (
            <tr key={index}>
              <td>{row.criterion}</td>
              <td>{row.diy}</td>
              <td>{row.us}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="vs-cta">Економте час — довірте нам 💪</p>
    </div>
  );
};

export default DiyVsUs;
