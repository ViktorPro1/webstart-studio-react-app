import React from 'react';
import './Cestina.css';
import './Cestina.mobile.css';

const Cz = () => {
    return (
        <main className="cz-page">
            <header>
                <h1>Web & Marketing</h1>
            </header>

            <section>
                <h2>Co vytváříme</h2>
                <p>Nabízíme profesionální designové a marketingové řešení, aby vaše firma nebo osobní značka vynikla:</p>
                <ul>
                    <li>Životopisy a portfolia</li>
                    <li>Landing pages a jednostránkové weby</li>
                    <li>Bannery a šablony pro sociální média</li>
                    <li>Reklamní kampaně na Facebooku a Instagramu</li>
                </ul>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>V případě dotazů nás kontaktujte prostřednictvím:</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>Rádi vám pomůžeme a odpovíme na vaše dotazy.</p>
            </section>
        </main>
    );
};

export default Cz;
