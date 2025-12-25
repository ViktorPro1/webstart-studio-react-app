import React from 'react';
import './Svenska.css';
import './Svenska.mobile.css';

const Se = () => {
    return (
        <main className="se-page">
            <header>
                <h1>Webb- & Marknadsföring</h1>
            </header>

            <section>
                <h2>Vad vi skapar</h2>
                <p>Vi erbjuder professionella design- och marknadsföringslösningar som hjälper ditt företag eller personliga varumärke att sticka ut:</p>
                <ul>
                    <li>CV och portföljer</li>
                    <li>Landningssidor och en-sidiga webbplatser</li>
                    <li>Banners och mallar för sociala medier</li>
                    <li>Annonskampanjer på Facebook och Instagram</li>
                </ul>
            </section>

            <section>
                <h2>Kontakta oss</h2>
                <p>Om du har några frågor, kontakta oss via:</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>Vi hjälper dig gärna och svarar på dina frågor.</p>
            </section>
        </main>
    );
};

export default Se;
