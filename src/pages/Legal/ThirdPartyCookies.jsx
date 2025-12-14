import React from 'react';

export default function ThirdPartyCookies() {
    return (
        <div className="privacy-page">
            <div className="privacy-container">
                <h1>Сторонні файли cookie</h1>

                <section>
                    <h2>Що таке сторонні cookie?</h2>
                    <p>
                        Сторонні cookie встановлюються доменами, відмінними від того, який ви відвідуєте.
                        Вони часто використовуються для відстеження та реклами.
                    </p>
                </section>

                <section>
                    <h2>Які сторонні cookie ми використовуємо?</h2>

                    <div className="cookie-service">
                        <h3>Google Analytics</h3>
                        <p>
                            Використовується для аналізу трафіку сайту та поведінки користувачів.
                        </p>
                        <p><strong>Cookie:</strong> _ga, _gid, _gat</p>
                        <p><strong>Термін дії:</strong> До 2 років</p>
                    </div>

                    <div className="cookie-service">
                        <h3>Google Ads</h3>
                        <p>
                            Використовується для показу персоналізованої реклами.
                        </p>
                        <p><strong>Cookie:</strong> IDE, DSID, NID</p>
                        <p><strong>Термін дії:</strong> До 2 років</p>
                    </div>

                    <div className="cookie-service">
                        <h3>Facebook Pixel</h3>
                        <p>
                            Допомагає відстежувати конверсії та оптимізувати рекламу.
                        </p>
                        <p><strong>Cookie:</strong> _fbp, fr</p>
                        <p><strong>Термін дії:</strong> До 90 днів</p>
                    </div>
                </section>

                <section>
                    <h2>Як керувати сторонніми cookie?</h2>
                    <p>
                        Ви можете керувати сторонніми cookie через наші налаштування cookie або
                        безпосередньо у вашому браузері. Ви також можете відмовитися від персоналізованої
                        реклами на сайтах постачальників послуг.
                    </p>
                </section>

                <p className="privacy-updated">
                    Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
                </p>
            </div>
        </div>
    );
}