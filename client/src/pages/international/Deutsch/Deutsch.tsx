import React from 'react';
import './Deutsch.css';
import './Deutsch.mobile.css';

const De = () => {
    return (
        <main className="de-page">
            <header>
                <h1>Web & Marketing</h1>
            </header>

            <section>
                <h2>Was wir erstellen</h2>
                <p>Wir bieten professionelle Design- und Marketinglösungen, um Ihr Unternehmen oder Ihre persönliche Marke hervorzuheben:</p>
                <ul>
                    <li>Lebensläufe und Portfolios</li>
                    <li>Landingpages und One-Page-Websites</li>
                    <li>Banners und Vorlagen für Social Media</li>
                    <li>Werbekampagnen auf Facebook und Instagram</li>
                </ul>
            </section>

            <section>
                <h2>Kontakt</h2>
                <p>Bei Fragen kontaktieren Sie uns über:</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>Wir helfen Ihnen gerne und beantworten Ihre Fragen.</p>
            </section>
        </main>
    );
};

export default De;
