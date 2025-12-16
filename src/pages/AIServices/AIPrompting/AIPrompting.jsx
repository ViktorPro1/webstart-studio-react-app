import React from 'react';
import './AIPrompting.css';
import './AIPrompting.mobile.css';

const AIPrompting = () => {
    return (
        <div className="ai-prompting">
            <header className="ai-prompting-header">
                <h1 className="ai-prompting-title">AI Промптинг <br /> базовий гід</h1>
            </header>

            <main className="ai-prompting-main">
                <article className="ai-prompting-article">
                    <h2 className="ai-prompting-subtitle">Вступ: що таке промптинг і чому він важливий</h2>
                    <p className="ai-prompting-text">
                        Промптинг (prompting) — це мистецтво й техніка формулювання запитів до систем штучного інтелекту.
                        Від того, наскільки чітко й грамотно ви побудуєте промпт, залежить якість відповіді:
                        тексту, коду, зображення чи навіть комплексної стратегії.
                        Сучасні моделі, такі як GPT-5, Claude, MidJourney, Stable Diffusion, опрацьовують
                        колосальні масиви інформації, але їх результат завжди є проекцією того, як ми поставили запитання.
                        Саме тому промптинг став окремою професією і компетенцією XXI століття.
                    </p>

                    <h2 className="ai-prompting-subtitle">1. Основи промптингу: ключові елементи</h2>
                    <p className="ai-prompting-text">
                        Промпт складається з кількох ключових елементів: <strong>контекст</strong>, <strong>інструкція</strong>,
                        <strong>обмеження</strong> та <strong>очікуваний формат</strong>.
                        Якщо ці частини прописати грамотно, система видає прогнозований результат.
                        Якщо ж запит короткий і абстрактний — результат буде випадковим і поверхневим.
                    </p>

                    <h2 className="ai-prompting-subtitle">2. Промпти для зображень</h2>
                    <p className="ai-prompting-text">
                        Генератори зображень потребують максимально конкретних описів.
                        Базова структура: <em>об'єкт + стиль + деталі + настрій + технічні параметри</em>.
                    </p>
                    <ul className="ai-prompting-list">
                        <li><strong>Об'єкт:</strong> хто або що зображено.</li>
                        <li><strong>Стиль:</strong> реалізм, 3D, аніме, акварель, кіберпанк.</li>
                        <li><strong>Деталі:</strong> колір, одяг, середовище, освітлення.</li>
                        <li><strong>Настрій:</strong> драматичний, святковий, мінімалістичний.</li>
                        <li><strong>Технічні параметри:</strong> формат (16:9, 9:16, 1:1), роздільна здатність.</li>
                    </ul>

                    <blockquote className="ai-prompting-example">
                        <strong>Приклад:</strong> "Яскрава 3D-сцена сучасної студії, молодий колектив за ноутбуками,
                        мінімалістичний дизайн, тепле світло, стиль кіберпанк, формат 16:9".
                    </blockquote>

                    <h3 className="ai-prompting-subtitle-small">Сервіси з безкоштовним планом</h3>
                    <ul className="ai-prompting-list">
                        <li><strong>Stable Diffusion Web (DreamStudio, Clipdrop):</strong> базові кредити для генерацій.</li>
                        <li><strong>Craiyon:</strong> повністю безкоштовний веб-генератор.</li>
                        <li><strong>Fotor AI Image Generator:</strong> безкоштовний план із обмеженням.</li>
                        <li><strong>Canva AI:</strong> доступно з безкоштовним акаунтом (обмежена кількість генерацій).</li>
                        <li><strong>Microsoft Designer (Bing Image Creator):</strong> працює через акаунт Microsoft, базові
                            безкоштовні кредити.</li>
                    </ul>

                    <h2 className="ai-prompting-subtitle">3. Промпти для тексту</h2>
                    <p className="ai-prompting-text">
                        У текстових моделях промпт будується інакше.
                        Формула: <em>Роль + тип тексту + тон + ключові тези + обмеження</em>.
                        Надання ШІ конкретної ролі ("Ти — SMM-менеджер") значно покращує якість і релевантність відповіді.
                    </p>
                    <blockquote className="ai-prompting-example">
                        <strong>Приклад:</strong> "Ти — досвідчений SMM-менеджер. Напиши пост для Instagram українською мовою у
                        дружньому тоні. Тема — як почати вивчати вебдизайн. Обмеження: 150 слів, без жаргону".
                    </blockquote>

                    <h2 className="ai-prompting-subtitle">4. Промпти для коду</h2>
                    <p className="ai-prompting-text">
                        Програмісти використовують промптинг для генерації функцій, оптимізації алгоритмів і написання
                        документації.
                        Тут важливо задавати <em>мову програмування, середовище та приклад вхідних даних</em>.
                    </p>
                    <blockquote className="ai-prompting-example">
                        <strong>Приклад:</strong> "Напиши функцію на Python, яка зчитує CSV-файл з продажами та повертає список
                        товарів із найбільшою виручкою. Не використовуй бібліотеку pandas".
                    </blockquote>

                    <h2 className="ai-prompting-subtitle">5. Промпти для чат-ботів</h2>
                    <p className="ai-prompting-text">
                        Для налаштування голосових і текстових ботів використовується так званий <em>system prompt</em>,
                        який визначає характер і стиль спілкування. Наприклад: "Ти — віртуальний викладач англійської,
                        відповідай просто, використовуй приклади з повсякденного життя, не переходь на інші мови".
                    </p>

                    <h2 className="ai-prompting-subtitle">6. Сучасні техніки промптингу</h2>
                    <ul className="ai-prompting-list">
                        <li><strong>Chain-of-Thought (Ланцюжок думок):</strong> просимо модель показати кроки мислення, перш ніж
                            дати фінальну відповідь.</li>
                        <li><strong>Few-Shot:</strong> даємо кілька прикладів, щоб задати стиль.</li>
                        <li><strong>One-Shot:</strong> один приклад для демонстрації формату.</li>
                        <li><strong>Zero-Shot:</strong> модель працює без прикладів, лише з інструкцією.</li>
                        <li><strong>Multi-Modal:</strong> комбінування тексту, зображень, аудіо.</li>
                    </ul>

                    <h2 className="ai-prompting-subtitle">7. Поширені помилки</h2>
                    <ul className="ai-prompting-list">
                        <li>Занадто загальний опис ("зроби гарну картинку").</li>
                        <li>Відсутність формату (не зазначено розмір чи стиль).</li>
                        <li>Непослідовність: кілька суперечливих інструкцій.</li>
                        <li>Перевантаження: довгі запити без структури.</li>
                    </ul>

                    <h2 className="ai-prompting-subtitle">8. Практичні поради</h2>
                    <ol className="ai-prompting-list">
                        <li>Завжди уточнюй стиль, формат і обмеження.</li>
                        <li>Діли складні завдання на кроки.</li>
                        <li>Використовуй прикметники й конкретику.</li>
                        <li><strong>Ітеруй та Редагуй:</strong> Якщо перша відповідь не ідеальна, відредагуй оригінальний промпт, додавши
                            уточнення, замість того, щоб починати з нуля.</li>
                        <li>Тестуй кілька варіантів промпту та обирай найкращий результат.</li>
                    </ol>

                    <h2 className="ai-prompting-subtitle">9. Шаблони промптів</h2>
                    <pre className="ai-prompting-code">
                        {`[Зображення] 
Створи ілюстрацію [об'єкт] у стилі [стиль], з акцентом на [деталі], 
освітлення [тип], настрій [емоція], формат [16:9].

[Текст] 
Ти — [Роль]. Напиши [тип тексту] українською мовою, у [тон], 
обсяг [кількість слів], тема [тема].

[Код] 
Напиши функцію на [мова програмування], 
яка виконує [завдання], використовуючи [бібліотеки/умови].`}
                    </pre>

                    <h2 className="ai-prompting-subtitle">10. Відповідальність та Етика</h2>
                    <p className="ai-prompting-text">
                        При роботі з ШІ важливо пам'ятати, що це лише інструмент. Завжди <strong>перевіряйте факти</strong>, згенеровані
                        текстовими моделями (фактчекінг), та <strong>звертайте увагу на авторські права</strong> при використанні
                        згенерованих зображень у комерційних цілях.
                    </p>

                    <h2 className="ai-prompting-subtitle">Висновок</h2>
                    <p className="ai-prompting-text">
                        Промптинг — це ключ до ефективної роботи з AI.
                        Той, хто володіє цим інструментом, здатний перетворювати ідеї в тексти,
                        зображення, програми чи діалоги. Ця навичка стає такою ж базовою,
                        як користування комп'ютером або інтернетом.
                        Вивчення промптингу відкриває шлях до швидкої адаптації в майбутньому,
                        де взаємодія з AI стане нормою.
                    </p>
                </article>

                <div className="ai-prompting-cta">
                    <p className="ai-prompting-cta-text">
                        Міні-курс: <br />
                        "Створи свого AI-агента"
                        <br />познайомся з основами створення AI-агента
                        та спробуй свої перші ідеї на практиці
                    </p>
                    <a href="https://ai-agent-from-scratch.netlify.app/" target="_blank" rel="noopener noreferrer" className="ai-prompting-cta-btn">
                        Перейти до міні-курсу
                    </a>
                </div>
            </main>
        </div>
    );
};

export default AIPrompting;