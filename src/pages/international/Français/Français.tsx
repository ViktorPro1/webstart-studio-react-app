import React from 'react';
import './Français.css';
import './Français.mobile.css';

const Fr = () => {
    return (
        <main className="fr-page">
            <header>
                <h1>Web & Marketing</h1>
            </header>

            <section>
                <h2>Ce que nous créons</h2>
                <p>Nous proposons des solutions professionnelles de design et de marketing pour mettre en valeur votre entreprise ou votre marque personnelle :</p>
                <ul>
                    <li>CV et portfolios</li>
                    <li>Pages d'atterrissage et sites one-page</li>
                    <li>Bannières et modèles pour les réseaux sociaux</li>
                    <li>Campagnes publicitaires sur Facebook et Instagram</li>
                </ul>
            </section>

            <section>
                <h2>Contactez-nous</h2>
                <p>Pour toute question, contactez-nous via :</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>Nous serons heureux de vous aider et de répondre à vos questions.</p>
            </section>
        </main>
    );
};

export default Fr;
