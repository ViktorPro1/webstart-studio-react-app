import React from 'react';
import './English.css';
import './English.mobile.css';

const En = () => {
    return (
        <main className="en-page">
            <header>
                <h1>Web & Marketing</h1>
            </header>

            <section>
                <h2>What We Create</h2>
                <p>We provide professional design and marketing solutions to help your business or personal brand stand out. Here’s what we create:</p>
                <ul>
                    <li>Resumes and portfolios</li>
                    <li>Landing pages and one-page websites</li>
                    <li>Social media banners and templates</li>
                    <li>Advertising campaigns on Facebook and Instagram</li>
                </ul>
            </section>

            <section>
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out via:</p>
                <div className="contacts">
                    <a href="viber://chat?number=+380661391932">Viber</a>
                    <a href="https://t.me/Viktor_freelancer_recruiting_pit" target="_blank" rel="noreferrer">Telegram</a>
                    <a href="mailto:webstartstudio978@gmail.com">Email</a>
                </div>
                <p>We are happy to assist you and answer your questions.</p>
            </section>
        </main>
    );
};

export default En;
