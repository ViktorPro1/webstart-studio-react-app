import React from 'react';
import './AIAutomation.css';
import './AIAutomation.mobile.css';

const AIAutomation = () => {
    return (
        <div className="ai-automation">
            <section className="ai-automation-hero">
                <h1 className="ai-automation-title">AI Автоматизація: повний гайд для початківців</h1>
                <p className="ai-automation-subtitle">
                    Дізнайтесь, що таке AI та workflow автоматизація, як її застосовувати та які інструменти використовувати.
                </p>
            </section>

            <main className="ai-automation-main">
                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Що таке AI автоматизація</h2>
                    <p className="ai-automation-text">
                        AI автоматизація – це процес використання штучного інтелекту для виконання завдань, які раніше
                        потребували людського втручання. Алгоритми машинного навчання, нейронні мережі та аналітика даних
                        дозволяють системам автоматично приймати рішення, прогнозувати результати та оптимізувати робочі
                        процеси.
                    </p>
                    <p className="ai-automation-text">
                        AI автоматизація допомагає економити час, зменшувати людські помилки та підвищувати ефективність бізнесу,
                        освіти, технологій та медицини.
                    </p>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Workflow автоматизація: n8n, Zapier, Make</h2>
                    <p className="ai-automation-text">
                        Workflow автоматизація – це автоматизація задач без використання AI, або з додаванням AI через API. Вона
                        дозволяє об'єднувати сервіси, передавати дані між ними та автоматично виконувати рутинні процеси.
                    </p>
                    <ul className="ai-automation-list">
                        <li>
                            <strong>n8n:</strong> open-source платформа для створення інтеграцій і автоматизацій. Безкоштовна
                            версія дозволяє створювати локальні воркфлоу. AI можна підключати через API (OpenAI, Hugging Face).
                        </li>
                        <li>
                            <strong>Zapier:</strong> комерційний сервіс для інтеграції понад 5000 додатків. Має безкоштовний
                            тариф з обмеженням по кількості задач.
                        </li>
                        <li>
                            <strong>Make (раніше Integromat):</strong> гнучкий інструмент для автоматизації бізнес-процесів,
                            підключення додатків та API. Є безкоштовний тариф.
                        </li>
                    </ul>
                    <p className="ai-automation-text">Приклади використання workflow автоматизації:</p>
                    <ul className="ai-automation-list">
                        <li>Автоматичне створення завдань у Trello з нових листів Gmail.</li>
                        <li>Публікація контенту у соцмережах за розкладом.</li>
                        <li>Обробка форм з вебсайтів та додавання даних у CRM.</li>
                        <li>Інтеграція AI для генерації текстів або аналітики у workflow.</li>
                    </ul>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Де використовується AI автоматизація</h2>
                    <ul className="ai-automation-list">
                        <li>Маркетинг: створення реклами, сегментація аудиторії, аналіз поведінки клієнтів.</li>
                        <li>Бізнес-процеси: обробка документів, автоматизація фінансів, управління персоналом.</li>
                        <li>Технології: робототехніка, розпізнавання зображень, системи безпеки.</li>
                        <li>Освіта: персоналізоване навчання, аналітика успішності учнів.</li>
                        <li>Медицина: діагностика, прогнозування ризиків, автоматизовані звіти.</li>
                        <li>Контент: генерація текстів, переклади, створення графіки та відео.</li>
                    </ul>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Програми для AI автоматизації</h2>
                    <div className="ai-automation-tools">
                        <div className="ai-automation-tool-card">
                            <h3 className="ai-automation-tool-title">Безкоштовні інструменти</h3>
                            <ul className="ai-automation-list">
                                <li>Google Colab – онлайн-середовище для Python та ML.</li>
                                <li>TensorFlow – бібліотека для створення нейронних мереж.</li>
                                <li>Hugging Face – робота з моделями AI та NLP.</li>
                                <li>ChatGPT Free – генерація тексту для навчальних або тестових задач.</li>
                                <li>n8n – локальна автоматизація workflow.</li>
                            </ul>
                        </div>
                        <div className="ai-automation-tool-card">
                            <h3 className="ai-automation-tool-title">Платні інструменти</h3>
                            <ul className="ai-automation-list">
                                <li>OpenAI ChatGPT Plus – розширені можливості генерації тексту.</li>
                                <li>Adobe Firefly – AI генерація зображень для професіоналів.</li>
                                <li>DataRobot – корпоративна AI-платформа для аналітики та автоматизації.</li>
                                <li>Zapier Pro, Make Pro – розширені тарифи для великих компаній.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Нюанси та проблеми AI автоматизації</h2>
                    <ul className="ai-automation-list">
                        <li>Якість даних – AI дає некоректні результати при поганих або неповних даних.</li>
                        <li>Складність інтеграції – необхідно правильно підключати сервіси та API.</li>
                        <li>Вартість – платні інструменти можуть бути дорогими для малого бізнесу.</li>
                        <li>Етичні питання – AI може створювати упередження у прийнятті рішень.</li>
                        <li>Надмірна автоматизація – іноді важливі людські рішення.</li>
                    </ul>
                    <p className="ai-automation-text">Рішення проблем:</p>
                    <ul className="ai-automation-list">
                        <li>Очищення та перевірка даних перед навчанням моделей.</li>
                        <li>Використання безкоштовних інструментів для тестування перед масштабуванням.</li>
                        <li>Комбінування безкоштовних та платних рішень для оптимізації бюджету.</li>
                        <li>Слідкування за етичними стандартами та аудит AI-рішень.</li>
                    </ul>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Як почати працювати з AI автоматизацією</h2>
                    <ol className="ai-automation-list">
                        <li>Визначте завдання, яке хочете автоматизувати.</li>
                        <li>Підготуйте дані для навчання моделей або інтеграції workflow.</li>
                        <li>Обирайте інструменти: безкоштовні для тестування, платні для масштабування.</li>
                        <li>Створюйте прототип та тестуйте на невеликій кількості даних.</li>
                        <li>Оптимізуйте та інтегруйте у робочі процеси.</li>
                    </ol>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Корисні поради</h2>
                    <ul className="ai-automation-list">
                        <li>Починайте з невеликих проектів, щоб зрозуміти основи AI.</li>
                        <li>Комбінуйте workflow та AI для максимального ефекту.</li>
                        <li>Слідкуйте за оновленнями сервісів та бібліотек.</li>
                        <li>Вибирайте завдання для автоматизації, які реально економлять час і ресурси.</li>
                        <li>Використовуйте відкриті спільноти та документацію для навчання.</li>
                    </ul>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Реальні приклади використання</h2>
                    <ul className="ai-automation-list">
                        <li>AI аналізує запити клієнтів та автоматично генерує відповіді через n8n інтеграцію.</li>
                        <li>Маркетингова команда використовує ChatGPT + Google Sheets для генерації контент-плану.</li>
                        <li>HR автоматизує збір резюме та первинний аналіз через workflow без AI, а потім AI підсилює відбір
                            кандидатів.</li>
                        <li>Малий бізнес об'єднує соцмережі, CRM та електронну пошту через n8n, економлячи до 10 годин на
                            тиждень.</li>
                    </ul>
                </section>

                <section className="ai-automation-section">
                    <h2 className="ai-automation-heading">Де навчитися AI автоматизації</h2>
                    <ul className="ai-automation-list">
                        <li>Coursera та Udemy – курси з AI та workflow автоматизації.</li>
                        <li>Документація TensorFlow, PyTorch, Hugging Face.</li>
                        <li>Блоги та спільноти n8n, Zapier, Make.</li>
                        <li>YouTube – навчальні відео з інтеграцій та AI-проектів.</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default AIAutomation;