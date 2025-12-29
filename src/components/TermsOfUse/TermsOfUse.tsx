import React from 'react';
import './TermsOfUse.css';
import './TermsOfUse.mobile.css';

const TermsOfUse = () => {
    return (
        <div className="terms-of-use">
            <div className="terms-of-use__container">
                <h1 className="terms-of-use__title">Умови використання</h1>
                <p className="terms-of-use__updated">Останнє оновлення: 19 грудня 2025 року</p>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">1. Прийняття умов</h2>
                    <p className="terms-of-use__text">
                        Ласкаво просимо до WebStart Studio. Використовуючи нашу платформу та сервіси, ви погоджуєтесь з цими Умовами використання.
                        Якщо ви не згодні з будь-якою частиною цих умов, будь ласка, не використовуйте нашу платформу.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">2. Опис сервісів</h2>
                    <p className="terms-of-use__text">
                        WebStart Studio надає сервіси з розробки веб-платформ, веб-додатків, мобільних додатків та інших цифрових рішень.
                        Ми залишаємо за собою право змінювати, призупиняти або припиняти будь-яку частину наших сервісів без попереднього повідомлення.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">3. Права інтелектуальної власності</h2>
                    <p className="terms-of-use__text">
                        Весь контент, розміщений на нашій платформі, включаючи, але не обмежуючись текстом, графікою, логотипами,
                        зображеннями, аудіо- та відеоматеріалами, є власністю WebStart Studio або наших партнерів та захищений законами про авторське право.
                    </p>
                    <ul className="terms-of-use__list">
                        <li className="terms-of-use__list-item">
                            Ви не можете копіювати, відтворювати, розповсюджувати або створювати похідні роботи без нашого письмового дозволу
                        </li>
                        <li className="terms-of-use__list-item">
                            Використання нашого контенту в комерційних цілях без дозволу суворо заборонено
                        </li>
                        <li className="terms-of-use__list-item">
                            Всі товарні знаки, логотипи та фірмові назви є власністю відповідних власників
                        </li>
                    </ul>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">4. Використання платформи</h2>
                    <p className="terms-of-use__text">
                        Ви погоджуєтесь використовувати нашу платформу лише для законних цілей. Заборонено:
                    </p>
                    <ul className="terms-of-use__list">
                        <li className="terms-of-use__list-item">
                            Передавати будь-який матеріал, що містить віруси або будь-яке інше шкідливе програмне забезпечення
                        </li>
                        <li className="terms-of-use__list-item">
                            Намагатись отримати несанкціонований доступ до будь-якої частини платформи
                        </li>
                        <li className="terms-of-use__list-item">
                            Використовувати платформу способом, який може пошкодити, відключити або порушити роботу сервера
                        </li>
                        <li className="terms-of-use__list-item">
                            Збирати або зберігати особисту інформацію про інших користувачів
                        </li>
                    </ul>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">5. Умови взаємодії</h2>
                    <p className="terms-of-use__text">
                        При отримані наших пакетів застосовуються наступні умови:
                    </p>
                    <ul className="terms-of-use__list">
                        <li className="terms-of-use__list-item">
                            <strong>Терміни:</strong> Терміни виконання проєкту узгоджуються індивідуально .
                        </li>
                        <li className="terms-of-use__list-item">
                            <strong>Зміни:</strong> Будь-які зміни в проєкті можуть вплинути на вартість та терміни виконання.
                        </li>
                        <li className="terms-of-use__list-item">
                            <strong>Підтримка:</strong> Після завершення проєкту ми надаємо технічну підтримку згідно з узгодженими умовами.
                        </li>
                    </ul>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">6. Обмеження відповідальності</h2>
                    <p className="terms-of-use__text">
                        WebStart Studio не несе відповідальності за:
                    </p>
                    <ul className="terms-of-use__list">
                        <li className="terms-of-use__list-item">
                            Будь-які прямі, непрямі, випадкові або наслідкові збитки, що виникають внаслідок використання або
                            неможливості використання нашої платформи
                        </li>
                        <li className="terms-of-use__list-item">
                            Помилки, збої або переривання в роботі платформи
                        </li>
                        <li className="terms-of-use__list-item">
                            Несанкціонований доступ до наших серверів або особистої інформації
                        </li>
                        <li className="terms-of-use__list-item">
                            Дії третіх осіб на нашій платформі
                        </li>
                    </ul>
                    <p className="terms-of-use__text">
                        Ми надаємо нашу платформу та сервіси "як є" без будь-яких гарантій, явних чи неявних.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">7. Посилання на сторонні платформи</h2>
                    <p className="terms-of-use__text">
                        Наша платформа може містити посилання на сторонні платформи. Ці посилання надаються лише для вашої зручності.
                        Ми не несемо відповідальності за зміст, політику конфіденційності або практику цих платформ.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">8. Конфіденційність</h2>
                    <p className="terms-of-use__text">
                        Ваша конфіденційність важлива для нас. Будь ласка, ознайомтеся з нашою
                        <strong> Політикою конфіденційності</strong>, щоб зрозуміти, як ми збираємо, використовуємо та захищаємо вашу особисту інформацію.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">9. Зміни в Умовах використання</h2>
                    <p className="terms-of-use__text">
                        Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Будь-які зміни набувають чинності
                        негайно після їх публікації на цій сторінці. Продовження використання нашої платформи після публікації змін означає
                        ваше прийняття нових умов.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">10. Припинення</h2>
                    <p className="terms-of-use__text">
                        Ми залишаємо за собою право припинити або призупинити ваш доступ до нашої платформи без попереднього повідомлення,
                        якщо ви порушуєте ці Умови використання або використовуєте платформу способом, який може завдати шкоди нам або іншим користувачам.
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <h2 className="terms-of-use__subtitle">11. Контактна інформація</h2>
                    <p className="terms-of-use__text">
                        Якщо у вас виникли питання щодо цих Умов використання, будь ласка, зв'яжіться з нами:
                    </p>
                    <p className="terms-of-use__text">
                        <strong>Email:</strong> webstartstudio978@gmail.com<br />
                        <strong>Телефон:</strong> +380 (66) 139-19-32
                    </p>
                </section>

                <section className="terms-of-use__section">
                    <p className="terms-of-use__text">
                        <em>
                            Використовуючи платформу WebStart Studio, ви підтверджуєте, що прочитали, зрозуміли та погодились з цими Умовами використання.
                        </em>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfUse;