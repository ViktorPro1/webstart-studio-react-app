import React from 'react';
import './PrivacyPolicy.css';
import './PrivacyPolicy.mobile.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <div className="privacy-policy__container">
                <h1 className="privacy-policy__title">Політика конфіденційності</h1>
                <p className="privacy-policy__updated">Останнє оновлення: 19 грудня 2025 року</p>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">1. Вступ</h2>
                    <p className="privacy-policy__text">
                        Вітаємо у WebStart Studio. Ми цінуємо вашу довіру та серйозно ставимося до захисту вашої приватності.
                        Ця Політика конфіденційності описує, як ми збираємо, використовуємо, зберігаємо та захищаємо вашу особисту інформацію.
                    </p>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">2. Інформація, яку ми збираємо</h2>
                    <p className="privacy-policy__text">
                        Ми можемо збирати наступні типи інформації:
                    </p>
                    <ul className="privacy-policy__list">
                        <li className="privacy-policy__list-item">
                            <strong>Особиста інформація:</strong> ім'я, електронна адреса, номер телефону, яку ви надаєте при заповненні форм на нашому сайті.
                        </li>
                        <li className="privacy-policy__list-item">
                            <strong>Технічна інформація:</strong> IP-адреса, тип браузера, операційна система, час відвідування сайту.
                        </li>
                        <li className="privacy-policy__list-item">
                            <strong>Інформація про використання:</strong> дані про те, як ви взаємодієте з нашим веб-сайтом.
                        </li>
                    </ul>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">3. Як ми використовуємо вашу інформацію</h2>
                    <p className="privacy-policy__text">
                        Ми використовуємо зібрану інформацію для:
                    </p>
                    <ul className="privacy-policy__list">
                        <li className="privacy-policy__list-item">Надання та покращення наших послуг</li>
                        <li className="privacy-policy__list-item">Відповіді на ваші запити та підтримки зв'язку з вами</li>
                        <li className="privacy-policy__list-item">Відправки інформаційних повідомлень про наші послуги (за вашою згодою)</li>
                        <li className="privacy-policy__list-item">Аналізу та покращення роботи нашого веб-сайту</li>
                        <li className="privacy-policy__list-item">Забезпечення безпеки та запобігання шахрайству</li>
                    </ul>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">4. Cookies та аналітичні інструменти</h2>
                    <p className="privacy-policy__text">
                        Ми використовуємо cookies та подібні технології для покращення вашого досвіду на нашому сайті.
                        Cookies допомагають нам аналізувати трафік сайту, запам'ятовувати ваші налаштування та забезпечувати персоналізований контент.
                    </p>
                    <p className="privacy-policy__text">
                        Ви можете налаштувати свій браузер для відхилення cookies, але це може вплинути на функціональність деяких частин сайту.
                    </p>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">5. Передача інформації третім особам</h2>
                    <p className="privacy-policy__text">
                        Ми не продаємо, не обмінюємо і не передаємо вашу особисту інформацію третім особам без вашої згоди, за винятком випадків, коли це необхідно для:
                    </p>
                    <ul className="privacy-policy__list">
                        <li className="privacy-policy__list-item">Надання послуг (наприклад, хостинг-провайдери)</li>
                        <li className="privacy-policy__list-item">Виконання законодавчих вимог</li>
                        <li className="privacy-policy__list-item">Захисту наших прав та безпеки</li>
                    </ul>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">6. Захист даних</h2>
                    <p className="privacy-policy__text">
                        Ми вживаємо відповідних технічних та організаційних заходів для захисту вашої особистої інформації від несанкціонованого доступу,
                        зміни, розкриття або знищення. Однак жоден метод передачі через Інтернет або електронного зберігання не є на 100% безпечним.
                    </p>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">7. Ваші права</h2>
                    <p className="privacy-policy__text">
                        Ви маєте право:
                    </p>
                    <ul className="privacy-policy__list">
                        <li className="privacy-policy__list-item">Отримати доступ до своїх особистих даних</li>
                        <li className="privacy-policy__list-item">Виправити неточні дані</li>
                        <li className="privacy-policy__list-item">Видалити свої дані</li>
                        <li className="privacy-policy__list-item">Обмежити обробку своїх даних</li>
                        <li className="privacy-policy__list-item">Заперечити проти обробки ваших даних</li>
                        <li className="privacy-policy__list-item">Отримати свої дані у структурованому форматі</li>
                    </ul>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">8. Зміни в Політиці конфіденційності</h2>
                    <p className="privacy-policy__text">
                        Ми можемо періодично оновлювати цю Політику конфіденційності. Про будь-які зміни ми повідомимо вас, розмістивши нову версію на цій сторінці
                        з оновленою датою "Останнє оновлення".
                    </p>
                </section>

                <section className="privacy-policy__section">
                    <h2 className="privacy-policy__subtitle">9. Контактна інформація</h2>
                    <p className="privacy-policy__text">
                        Якщо у вас виникли питання щодо цієї Політики конфіденційності або ви бажаєте скористатися своїми правами,
                        будь ласка, зв'яжіться з нами:
                    </p>
                    <p className="privacy-policy__text">
                        <strong>Email:</strong> webstartstudio978@gmail.com<br />
                        <strong>Телефон:</strong> +380 (66) 139-19-32
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;