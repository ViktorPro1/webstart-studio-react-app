import React from 'react';
import './DataAnalytics.css';
import './DataAnalytics.mobile.css';

const DataAnalytics: React.FC = () => {
  const sqlExamples = [
    {
      title: 'Пошук по регіонах',
      query: `SELECT term, country_name, region_name, refresh_date, rank, score, week
FROM \`bigquery-public-data.google_trends.international_top_terms\`
LIMIT 35;`,
      description: 'Витягуємо топові пошукові запити з міжнародних трендів Google'
    },
    {
      title: 'Фільтрація за країною та регіоном',
      query: `SELECT *
FROM \`bigquery-public-data.google_trends.international_top_terms\`
WHERE country_name = "Ukraine"
  AND refresh_date = '2026-01-05'
  AND week = '2026-01-04'
LIMIT 25;`,
      description: 'Фільтруємо дані для конкретної області України'
    },
    {
      title: 'Пошук за ключовим словом',
      query: `SELECT *
FROM \`bigquery-public-data.google_trends.international_top_terms\`
WHERE country_name = "Ukraine"
  AND refresh_date = '2026-01-02'
  AND rank = 3
  AND lower(term) LIKE '%2025%'`,
      description: 'Знаходимо конкретні терміни що містять "2025"'
    }
  ];

  const skills = [
    {
      icon: '🔍',
      title: 'Пошук слів у SQL',
      description: 'Використання операторів LIKE та WHERE для пошуку даних'
    },
    {
      icon: '⚡',
      title: 'Фільтрація таблиць',
      description: 'Застосування умов фільтрації за різними параметрами'
    },
    {
      icon: '💾',
      title: 'Google BigQuery',
      description: 'Робота з хмарною платформою для аналізу великих даних'
    },
    {
      icon: '📊',
      title: 'Looker Studio',
      description: 'Створення візуалізацій та дашбордів для представлення даних'
    }
  ];

  return (
    <div className="DataAnalytics">
      {/* Hero Section */}
      <section className="DataAnalytics-hero">
        <div className="DataAnalytics-container">
          <h1 className="DataAnalytics-title">Data Analytics</h1>
          <p className="DataAnalytics-subtitle">Аналіз даних для прийняття розумних рішень</p>
        </div>
      </section>

      {/* What is Data Analytics */}
      <section className="DataAnalytics-about">
        <div className="DataAnalytics-container">
          <h2 className="DataAnalytics-section-title">Що таке Data Analytics?</h2>
          <div className="DataAnalytics-about-content">
            <p>
              Дата-аналітика — це процес дослідження, очищення, трансформації та моделювання даних 
              з метою виявлення корисної інформації, формування висновків та підтримки прийняття рішень.
            </p>
            <p>
              В сучасному світі дані стали найціннішим активом компаній. Аналітики даних допомагають 
              бізнесу розуміти поведінку клієнтів, оптимізувати процеси, прогнозувати тренди та 
              приймати обґрунтовані рішення на основі фактів, а не здогадок.
            </p>
            <p>
              Основні інструменти дата-аналітика включають SQL для роботи з базами даних, системи 
              візуалізації для представлення результатів, а також платформи для обробки великих 
              обсягів інформації.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="DataAnalytics-journey">
        <div className="DataAnalytics-container">
          <h2 className="DataAnalytics-section-title">Наш шлях у дата-аналітику</h2>
          <div className="DataAnalytics-journey-content">
            <p>
              Ми розпочали вивчати дата-аналітику через освітні марафони, які охоплюють 
              фундаментальні навички роботи з даними. Наша програма включає практичне 
              застосування SQL для запитів до баз даних та створення візуалізацій.
            </p>
            <p>
              Ми практикуємо на реальних датасетах від Google, зокрема працюємо з Google Trends — 
              це дає змогу аналізувати пошукові тренди різних регіонів та країн. Через BigQuery 
              ми вчимося обробляти великі обсяги даних швидко та ефективно.
            </p>
            <p>
              Ми активно розвиваємо навички фільтрації, сортування та пошуку інформації 
              в таблицях, що є базовими компетенціями будь-якого аналітика. Крім того, 
              ми опановуємо Looker Studio для створення інтерактивних дашбордів та звітів.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="DataAnalytics-skills">
        <div className="DataAnalytics-container">
          <h2 className="DataAnalytics-section-title">Навички, які ми практикуємо</h2>
          <div className="DataAnalytics-skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="DataAnalytics-skill-card">
                <div className="DataAnalytics-skill-icon">{skill.icon}</div>
                <h3 className="DataAnalytics-skill-title">{skill.title}</h3>
                <p className="DataAnalytics-skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SQL Examples */}
      <section className="DataAnalytics-sql">
        <div className="DataAnalytics-container">
          <h2 className="DataAnalytics-section-title">Приклади SQL запитів</h2>
          <p className="DataAnalytics-section-description">
            Ми практикуємо написання SQL запитів для роботи з Google BigQuery та аналізу трендів
          </p>
          <div className="DataAnalytics-sql-examples">
            {sqlExamples.map((example, index) => (
              <div key={index} className="DataAnalytics-sql-example">
                <h3 className="DataAnalytics-example-title">{example.title}</h3>
                <p className="DataAnalytics-example-description">{example.description}</p>
                <pre className="DataAnalytics-code-block">
                  <code>{example.query}</code>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="DataAnalytics-tools">
        <div className="DataAnalytics-container">
          <h2 className="DataAnalytics-section-title">Інструменти, з якими ми працюємо</h2>
          <div className="DataAnalytics-tools-grid">
            <div className="DataAnalytics-tool-card">
              <div className="DataAnalytics-tool-header">
                <h3>Google BigQuery</h3>
              </div>
              <p>
                Хмарна платформа для аналізу великих обсягів даних. Ми використовуємо 
                BigQuery для виконання SQL запитів до публічних датасетів Google.
              </p>
            </div>
            <div className="DataAnalytics-tool-card">
              <div className="DataAnalytics-tool-header">
                <h3>Looker Studio</h3>
              </div>
              <p>
                Інструмент для створення візуалізацій та інтерактивних дашбордів. 
                Ми практикуємо перетворення даних у зрозумілі графіки та звіти.
              </p>
            </div>
            <div className="DataAnalytics-tool-card">
              <div className="DataAnalytics-tool-header">
                <h3>SQL</h3>
              </div>
              <p>
                Мова запитів для роботи з базами даних. Ми вивчаємо фільтрацію, 
                сортування, групування та агрегацію даних.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="DataAnalytics-cta">
        <div className="DataAnalytics-container">
          <h2>Продовжуємо вивчати та практикувати</h2>
          <p>
            Ми лише на початку шляху в дата-аналітиці, але вже можемо працювати з реальними 
            даними, писати SQL запити та створювати базові візуалізації. Кожен день приносить 
            нові знання та навички.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;