import React, { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import './DjonAssistant.css';
import './DjonAssistant.mobile.css';

const DjonAssistant = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const saved = localStorage.getItem('djonChatHistory');
        if (saved) setMessages(JSON.parse(saved));

        const seen = localStorage.getItem('djonPopupSeen');
        if (!seen) {
            setTimeout(() => setIsPopupOpen(true), 2500);
        }
    }, []);

    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('djonChatHistory', JSON.stringify(messages));
        }
    }, [messages]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const serviceFacts = [
        'Якісне резюме підвищує шанси на співбесіду в 3 рази!',
        'Лендінг з однією ціллю — конверсія до 30%!',
        'Професійне портфоліо збільшує чек на 20–50%!',
        'Ми робимо резюме за 1–2 дні, якщо горить!',
    ];

    const addMessage = (text, sender = 'bot') => {
        setMessages(prev => [...prev, { text, sender, id: Date.now() }]);
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userText = input;
        addMessage(userText, 'user');
        setInput('');

        setTimeout(() => {
            const t = userText.toLowerCase();
            if (t.includes('привіт') || t.includes('добридень')) {
                addMessage('Привіт! Я Джон — твій помічник. Чим допомогти?');
            } else if (t.includes('кава') || t.includes('чайові')) {
                addMessage('Дякую! Найкраща кава — коли ти задоволений 😊');
            } else if (t.includes('факт') || t.includes('розкажи')) {
                addMessage('Ось факт: ' + serviceFacts[Math.floor(Math.random() * serviceFacts.length)]);
            } else if (t.includes('ціна') || t.includes('вартість')) {
                addMessage('Вартість дивись на головній у розділі «Пакети та ціни»');
            } else if (t.includes('контакти') || t.includes('написати')) {
                addMessage('Контакти:\n+380 66 139 19 32\nwebstartstudio978@gmail.com');
            } else {
                addMessage('Не зовсім зрозумів, але я вчуся! Напиши простіше 🙂');
            }
        }, 600);
    };

    const closePopupForever = () => {
        setIsPopupOpen(false);
        localStorage.setItem('djonPopupSeen', 'true');
    };

    return (
        <>
            {/* Попап */}
            {isPopupOpen && (
                <div className="djon-popup-overlay">
                    <div className="djon-popup-container">
                        <button onClick={closePopupForever} className="djon-close-btn">
                            ✕
                        </button>

                        <div className="djon-popup-text">
                            Привіт! 👋<br />
                            🤖 Я – <strong>Djon</strong>, твій особистий гід у Web<span className="djon-brand-red">Start</span> Studio.
                        </div>

                        <div className="djon-popup-text">
                            Якщо потрібна допомога, пиши нам у{' '}
                            <a href="viber://chat?number=+380661391932" className="djon-viber-link">
                                Viber 📱
                            </a>
                            {' · '}
                            <a href="https://t.me/Viktor_freelancer_recruiting_pit" className="djon-telegram-link">
                                Telegram 💬
                            </a>
                        </div>

                        <div className="djon-popup-text" style={{ fontSize: '14px', color: '#6b7280', marginBottom: 0 }}>
                            або залиш запит у{' '}
                            <a href="/contact" className="djon-contact-link">
                                Зворотньому зв'язку ✉️
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Кнопка чату */}
            {!isChatOpen && (
                <button onClick={() => setIsChatOpen(true)} className="djon-chat-button">
                    <MessageCircle size={28} />
                </button>
            )}

            {/* Чат */}
            {isChatOpen && (
                <div className="djon-chat-window">
                    <div className="djon-chat-header">
                        <img src="/nasha_komanda/assistant.webp" alt="Джон" className="djon-chat-avatar" />
                        <div className="djon-chat-info">
                            <div className="djon-chat-name">Джон — твій гід</div>
                            <div className="djon-chat-status">
                                <span className="djon-online-dot"></span>
                                онлайн
                            </div>
                        </div>
                        <button onClick={() => setIsChatOpen(false)} className="djon-chat-close">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="djon-chat-messages">
                        {messages.length === 0 && (
                            <div className="djon-chat-empty">
                                Напиши будь-що — я допоможу! 👋
                            </div>
                        )}
                        {messages.map(m => (
                            <div key={m.id} className={`djon-message ${m.sender}`}>
                                <div className="djon-message-content">
                                    {m.sender === 'bot' && (
                                        <img src="/nasha_komanda/assistant.webp" alt="" className="djon-message-avatar" />
                                    )}
                                    <div className="djon-message-bubble">
                                        {m.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="djon-chat-input-container">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' && handleSend()}
                            placeholder="Напиши повідомлення..."
                            className="djon-chat-input"
                        />
                        <button onClick={handleSend} className="djon-chat-send" disabled={!input.trim()}>
                            <Send size={20} />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default DjonAssistant;