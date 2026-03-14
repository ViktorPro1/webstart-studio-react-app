import React from "react";
import { Database, Table2, Search, Lock, RefreshCw } from "lucide-react";
import "./WhatIsDatabase.css";
import "./WhatIsDatabase.mobile.css";

const WhatIsDatabase: React.FC = () => {
  return (
    <div className="what-is-database">
      <div className="widb-hero">
        <div className="widb-hero-icon">
          <Database size={40} />
        </div>
        <h1 className="widb-title">Що таке база даних?</h1>
        <p className="widb-subtitle">Де живуть усі дані твого сайту</p>
      </div>

      <div className="widb-content">
        <section className="widb-section widb-analogy">
          <h2 className="widb-section-title">📚 Уявімо бібліотеку</h2>
          <p>
            База даних — це як <strong>велика бібліотека</strong>. Кожна книга —
            це запис (наприклад, профіль користувача або замовлення). Полиці —
            це таблиці. А бібліотекар, який знаходить потрібну книгу за секунду
            — це система управління базою даних.
          </p>
          <p>
            Без бібліотеки — книги лежали б у безладді. Без бази даних — дані
            зникали б після кожного перезавантаження сайту.
          </p>
        </section>

        <section className="widb-section">
          <h2 className="widb-section-title">🗂 Як виглядають дані?</h2>
          <p>
            Дані зберігаються у <strong>таблицях</strong> — майже як Excel:
          </p>
          <div className="widb-table-demo">
            <table className="widb-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Ім'я</th>
                  <th>Email</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Олег</td>
                  <td>oleg@mail.com</td>
                  <td>12.01.2025</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Марія</td>
                  <td>maria@mail.com</td>
                  <td>15.01.2025</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Іван</td>
                  <td>ivan@mail.com</td>
                  <td>20.01.2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="widb-table-note">
            Кожен рядок — один запис. Кожна колонка — одна властивість.
          </p>
        </section>

        <section className="widb-section">
          <h2 className="widb-section-title">💡 Що зберігається в БД?</h2>
          <div className="widb-examples">
            <div className="widb-example-item">
              <span>👤</span>
              <div>
                <strong>Користувачі</strong>
                <p>Логін, пароль, ім'я, email</p>
              </div>
            </div>
            <div className="widb-example-item">
              <span>🛒</span>
              <div>
                <strong>Замовлення</strong>
                <p>Що купив, скільки, коли, статус</p>
              </div>
            </div>
            <div className="widb-example-item">
              <span>📝</span>
              <div>
                <strong>Статті та пости</strong>
                <p>Заголовок, текст, автор, дата</p>
              </div>
            </div>
            <div className="widb-example-item">
              <span>💬</span>
              <div>
                <strong>Повідомлення</strong>
                <p>Текст, відправник, отримувач, час</p>
              </div>
            </div>
            <div className="widb-example-item">
              <span>🏷</span>
              <div>
                <strong>Товари</strong>
                <p>Назва, ціна, опис, кількість</p>
              </div>
            </div>
            <div className="widb-example-item">
              <span>⚙️</span>
              <div>
                <strong>Налаштування</strong>
                <p>Мова, тема, сповіщення</p>
              </div>
            </div>
          </div>
        </section>

        <section className="widb-section">
          <h2 className="widb-section-title">🔧 Які бувають бази даних?</h2>
          <div className="widb-types">
            <div className="widb-type widb-type-sql">
              <h4>SQL бази</h4>
              <p>Дані в таблицях з чіткими зв'язками між ними</p>
              <div className="widb-type-tags">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>SQLite</span>
              </div>
            </div>
            <div className="widb-type widb-type-nosql">
              <h4>NoSQL бази</h4>
              <p>Гнучка структура для великих різнорідних даних</p>
              <div className="widb-type-tags">
                <span>MongoDB</span>
                <span>Firebase</span>
                <span>Redis</span>
              </div>
            </div>
          </div>
          <p className="widb-our-choice">
            🛠 Ми використовуємо <strong>MySQL</strong> — надійна перевірена
            реляційна база.
          </p>
        </section>

        <section className="widb-section">
          <h2 className="widb-section-title">🔑 Чому база даних важлива?</h2>
          <div className="widb-features">
            <div className="widb-feature">
              <Search size={20} />
              <span>Миттєвий пошук серед тисяч записів</span>
            </div>
            <div className="widb-feature">
              <Lock size={20} />
              <span>Захист і контроль доступу до даних</span>
            </div>
            <div className="widb-feature">
              <RefreshCw size={20} />
              <span>Дані не зникають після перезапуску сервера</span>
            </div>
            <div className="widb-feature">
              <Database size={20} />
              <span>Зручне оновлення і видалення інформації</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhatIsDatabase;
