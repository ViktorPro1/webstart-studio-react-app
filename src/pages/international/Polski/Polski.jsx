import React from 'react';
import './Polski.css';
import './Polski.mobile.css';

const Pl = () => {
    return (
        <main className="pl-page">
            <header>
                <h1>Web & Marketing</h1>
            </header>

            <section>
                <h2>Co tworzymy</h2>
                <p>Oferujemy profesjonalne rozwiązania w zakresie designu i marketingu, aby wyróżnić Twoją firmę lub markę osobistą:</p>
                <ul>
                    <li>CV i portfolio</li>
                    <li>Landing page i strony jednostronicowe</li>
                    <li>Banery i szablony dla social media</li>
                    <li>Kampanie reklamowe na Facebooku i Instagramie</li>
                    <li>Pomoc w rozliczeniu podatku PIT-11</li>
                </ul>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>W razie pytań skontaktuj się z nami poprzez:</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>Chętnie pomożemy i odpowiemy na Twoje pytania.</p>
            </section>
        </main>
    );
};

export default Pl;
