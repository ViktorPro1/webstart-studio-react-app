import React, { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./DjonAssistant.css";
import "./DjonAssistant.mobile.css";

type ButtonLink = {
  label: string;
  path: string;
};

type Message = {
  id: number;
  text: string;
  sender: "bot" | "user";
  buttons?: ButtonLink[] | null;
};

const DjonAssistant: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem("djonChatHistory");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const seen = localStorage.getItem("djonPopupSeen");
    if (!seen) {
      setTimeout(() => setIsPopupOpen(true), 2500);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("djonChatHistory", JSON.stringify(messages));
    }
  }, [messages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const serviceFacts: string[] = [
    "Якісне резюме підвищує шанси на співбесіду в 3 рази!",
    "Лендінг з однією ціллю — конверсія до 30%!",
    "Професійне портфоліо збільшує чек на 20–50%!",
    "Ми робимо резюме за 1–2 дні, якщо горить!",
    "80% клієнтів повертаються до нас повторно — це наша гордість!",
    "Сайт на Netlify може бути безкоштовним — і виглядати професійно!",
    "Перше враження від сайту формується за 0.05 секунди!",
    "Мобільний трафік вже понад 60% — адаптивний дизайн обов'язковий!",
  ];

  const addMessage = (
    text: string,
    sender: "bot" | "user" = "bot",
    buttons: ButtonLink[] | null = null,
  ) => {
    setMessages((prev) => [...prev, { text, sender, id: Date.now(), buttons }]);
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.toLowerCase();
    addMessage(input, "user");
    setInput("");

    setTimeout(() => {
      // ─── Вітання ───
      if (
        userText.includes("привіт") ||
        userText.includes("добридень") ||
        userText.includes("хай") ||
        userText.includes("вітаю") ||
        userText.includes("hello") ||
        userText.includes("hi") ||
        userText.includes("доброго")
      ) {
        addMessage(
          "Привіт! Я Джон — твій помічник у WebStart Studio. Чим можу допомогти? 😊",
        );

        // ─── Позитив ───
      } else if (
        userText.includes("супер") ||
        userText.includes("клас") ||
        userText.includes("круто") ||
        userText.includes("чудово") ||
        userText.includes("відмінно") ||
        userText.includes("класно") ||
        userText.includes("топ") ||
        userText.includes("cool") ||
        userText.includes("wow") ||
        userText.includes("вау")
      ) {
        addMessage(
          "Радий, що тобі подобається! Я стараюся 😄 Що ще тебе цікавить?",
        );

        // ─── Подяка ───
      } else if (
        userText.includes("дякую") ||
        userText.includes("спасибі") ||
        userText.includes("дякую велике") ||
        userText.includes("thanks")
      ) {
        addMessage("Будь ласка! Завжди радий допомогти. Звертайся ще! 🙏");

        // ─── Слава Україні ───
      } else if (
        userText.includes("слава україні") ||
        userText.includes("слава") ||
        userText.includes("україна") ||
        userText.includes("🇺🇦")
      ) {
        addMessage("Героям Слава! 🇺🇦 Разом до перемоги!");

        // ─── Як справи ───
      } else if (
        userText.includes("як справи") ||
        userText.includes("як ти") ||
        userText.includes("як живеш") ||
        userText.includes("що нового") ||
        userText.includes("як у тебе")
      ) {
        addMessage(
          "У мене все чудово! Працюю 24/7, щоб допомагати вам створювати круті проєкти. А як у тебе? 🤖",
        );

        // ─── Хто ти / що ти вмієш ───
      } else if (
        userText.includes("хто ти") ||
        userText.includes("що ти вмієш") ||
        userText.includes("що ти можеш") ||
        userText.includes("про тебе") ||
        userText.includes("розкажи про себе")
      ) {
        addMessage(
          "Я — Джон, віртуальний гід WebStart Studio! 🤖\n\nМожу допомогти:\n• Знайти потрібну послугу\n• Показати ціни та пакети\n• Відповісти на питання про сайти, рекламу та AI\n• Розказати цікаві факти\n\nПросто пиши!",
        );

        // ─── Макети / приклади ───
      } else if (
        userText.includes("переглянути") ||
        userText.includes("макет") ||
        userText.includes("де подивитись") ||
        userText.includes("приклади") ||
        userText.includes("шаблони") ||
        userText.includes("покажи") ||
        userText.includes("зразки") ||
        userText.includes("портфоліо")
      ) {
        addMessage("З радістю! Ось наші готові рішення:", "bot", [
          { label: "Дизайн портфоліо 🎨", path: "/templates/portfolio" },
          { label: "Електронне резюме 📄", path: "/templates/resume" },
          { label: "Односторінкові сайти 💻", path: "/templates/landing" },
        ]);

        // ─── Ціни / пакети ───
      } else if (
        userText.includes("ціна") ||
        userText.includes("вартість") ||
        userText.includes("пакет") ||
        userText.includes("скільки коштує") ||
        userText.includes("скільки") ||
        userText.includes("тариф") ||
        userText.includes("прайс") ||
        userText.includes("бюджет")
      ) {
        addMessage("Ось наші актуальні пакети послуг:", "bot", [
          { label: "Переглянути ціни 💰", path: "/pricing" },
          { label: "Калькулятор бюджету 🧮", path: "/google-ads/calculator" },
        ]);

        // ─── Реклама ───
      } else if (
        userText.includes("реклама") ||
        userText.includes("google") ||
        userText.includes("facebook") ||
        userText.includes("ads") ||
        userText.includes("таргет") ||
        userText.includes("просування") ||
        userText.includes("маркетинг") ||
        userText.includes("utm")
      ) {
        addMessage("Налаштовуємо рекламу професійно. Обери напрямок:", "bot", [
          { label: "Google Ads 📈", path: "/google-ads/learning" },
          {
            label: "Facebook Ads 📣",
            path: "/facebook-ads/target-advertising",
          },
          { label: "UTM генератор 🔗", path: "/facebook-ads/utm-generator" },
        ]);

        // ─── SEO ───
      } else if (
        userText.includes("seo") ||
        userText.includes("пошук") ||
        userText.includes("гугл") ||
        userText.includes("позиції") ||
        userText.includes("ключові слова")
      ) {
        addMessage(
          "SEO — це основа видимості в інтернеті! Ось що ми пропонуємо:",
          "bot",
          [
            { label: "SEO-оптимізація 🔍", path: "/services/seo" },
            { label: "Ключові слова 🗝️", path: "/google-ads/keywords" },
          ],
        );

        // ─── AI / штучний інтелект ───
      } else if (
        userText.includes("ai") ||
        userText.includes("штучний інтелект") ||
        userText.includes("автоматизація") ||
        userText.includes("чат-бот") ||
        userText.includes("chatgpt") ||
        userText.includes("промпт")
      ) {
        addMessage("AI — наш напрямок майбутнього! Дивись що маємо:", "bot", [
          { label: "AI Сервіси 🤖", path: "/ai-services" },
          { label: "AI Автоматизація ⚙️", path: "/ai-services/ai-automation" },
          { label: "AI Промптинг ✍️", path: "/ai-services/ai-prompting" },
        ]);

        // ─── Сайт / лендінг ───
      } else if (
        userText.includes("сайт") ||
        userText.includes("лендінг") ||
        userText.includes("landing") ||
        userText.includes("веб-сайт") ||
        userText.includes("вебсайт") ||
        userText.includes("інтернет-магазин") ||
        userText.includes("магазин") ||
        userText.includes("blog") ||
        userText.includes("блог")
      ) {
        addMessage(
          "Створюємо сучасні сайти під ключ! Що тебе цікавить?",
          "bot",
          [
            { label: "Односторінкові сайти 💻", path: "/templates/landing" },
            { label: "Інтернет-магазини 🛒", path: "/services/ecommerce" },
            { label: "Блоги та новини 📰", path: "/services/blog" },
            { label: "Переглянути всі послуги 📋", path: "/services" },
          ],
        );

        // ─── Резюме ───
      } else if (
        userText.includes("резюме") ||
        userText.includes("cv") ||
        userText.includes("робота") ||
        userText.includes("вакансія")
      ) {
        addMessage("Зробимо резюме, яке виділить тебе серед інших! 📄", "bot", [
          { label: "Електронне резюме 📄", path: "/templates/resume" },
          { label: "Поради для резюме 💡", path: "/blog/resume-tips" },
          {
            label: "Структура резюме 📋",
            path: "/generators/resume-structure",
          },
        ]);

        // ─── Польща / податки ───
      } else if (
        userText.includes("польща") ||
        userText.includes("подат") ||
        userText.includes("zwrot") ||
        userText.includes("polska")
      ) {
        addMessage("Допомагаємо з поверненням податків з Польщі! 🇵🇱", "bot", [
          { label: "Детальніше 📄", path: "/poland-tax" },
        ]);

        // ─── ПК / комп'ютер ───
      } else if (
        userText.includes("чистка") ||
        userText.includes("пк") ||
        userText.includes("комп") ||
        userText.includes("ноутбук") ||
        userText.includes("вірус") ||
        userText.includes("повільно")
      ) {
        addMessage(
          "Твій комп'ютер буде як новий після нашої допомоги! 🚀",
          "bot",
          [{ label: "Чистка ПК віддалено 🖥️", path: "/pc-service" }],
        );

        // ─── Контакти / зв'язок ───
      } else if (
        userText.includes("контакт") ||
        userText.includes("зв'язок") ||
        userText.includes("написати") ||
        userText.includes("телефон") ||
        userText.includes("viber") ||
        userText.includes("telegram") ||
        userText.includes("пошта") ||
        userText.includes("email")
      ) {
        addMessage(
          "Зв'яжись з нами будь-яким зручним способом! 📬\n\nViber / Telegram: +380661391932\nEmail: contact@webstartstudio.com",
          "bot",
          [{ label: "Сторінка контактів 📞", path: "/contact" }],
        );

        // ─── Форум ───
      } else if (
        userText.includes("форум") ||
        userText.includes("спільнота") ||
        userText.includes("питання") ||
        userText.includes("обговорення")
      ) {
        addMessage(
          "У нас є форум спільноти — задавай питання та ділись досвідом! 🗣️",
          "bot",
          [{ label: "Форум спільноти 💬", path: "/user-permissions" }],
        );

        // ─── Чат / підтримка ───
      } else if (
        userText.includes("підтримка") ||
        userText.includes("допомога") ||
        userText.includes("чат") ||
        userText.includes("менеджер") ||
        userText.includes("людина")
      ) {
        addMessage("Хочеш поговорити з командою напряму? 💬", "bot", [
          { label: "Чат з командою 👥", path: "/messages" },
        ]);

        // ─── Відгуки ───
      } else if (
        userText.includes("відгук") ||
        userText.includes("відгуки") ||
        userText.includes("довіра") ||
        userText.includes("рекомендація")
      ) {
        addMessage("Дивись що кажуть наші клієнти! ⭐", "bot", [
          { label: "Відгуки клієнтів 🌟", path: "/testimonials" },
        ]);

        // ─── Про нас ───
      } else if (
        userText.includes("про вас") ||
        userText.includes("команда") ||
        userText.includes("хто ви") ||
        userText.includes("про компанію") ||
        userText.includes("webstart")
      ) {
        addMessage(
          "WebStart Studio — команда фахівців з веб-розробки, дизайну та маркетингу! 🚀",
          "bot",
          [
            { label: "Про нас 👋", path: "/about" },
            { label: "Наші досягнення 🏆", path: "/achievements" },
            { label: "Наші навички 💪", path: "/skills" },
          ],
        );

        // ─── Акція / знижка ───
      } else if (
        userText.includes("акція") ||
        userText.includes("знижка") ||
        userText.includes("promo") ||
        userText.includes("промо") ||
        userText.includes("бонус") ||
        userText.includes("подарунок")
      ) {
        addMessage(
          "У нас є спеціальні пропозиції для нових клієнтів! 🎁",
          "bot",
          [
            { label: "Актуальні акції 🔥", path: "/promo" },
            { label: "Бонусна програма 🎁", path: "/bonus" },
          ],
        );

        // ─── Безпека ───
      } else if (
        userText.includes("безпека") ||
        userText.includes("хакер") ||
        userText.includes("злом") ||
        userText.includes("захист") ||
        userText.includes("пароль")
      ) {
        addMessage(
          "Кібербезпека — важлива тема! Маємо корисні матеріали:",
          "bot",
          [{ label: "Поради з безпеки 🔐", path: "/security-tips" }],
        );

        // ─── FAQ ───
      } else if (
        userText.includes("питання") ||
        userText.includes("faq") ||
        userText.includes("часті") ||
        userText.includes("не розумію")
      ) {
        addMessage("Можливо, відповідь вже є в нашому FAQ:", "bot", [
          { label: "Часті питання ❓", path: "/faq" },
        ]);

        // ─── Оновлення / що нового ───
      } else if (
        userText.includes("оновлення") ||
        userText.includes("версія") ||
        userText.includes("changelog") ||
        userText.includes("нові функції")
      ) {
        addMessage(
          "Слідкуємо за розвитком платформи! Ось останні оновлення:",
          "bot",
          [{ label: "Оновлення платформи 🔄", path: "/updates" }],
        );

        // ─── Факт ───
      } else if (
        userText.includes("факт") ||
        userText.includes("цікаве") ||
        userText.includes("розкажи") ||
        userText.includes("щось цікаве")
      ) {
        addMessage(
          "💡 " + serviceFacts[Math.floor(Math.random() * serviceFacts.length)],
        );

        // ─── Бруд / образи ───
      } else if (
        userText.includes("дурн") ||
        userText.includes("тупи") ||
        userText.includes("погани") ||
        userText.includes("лайно")
      ) {
        addMessage(
          "Я тут щоб допомагати, а не сваритись 😅 Давай краще знайдемо, що тобі потрібно!",
        );

        // ─── Жарт ───
      } else if (
        userText.includes("жарт") ||
        userText.includes("анекдот") ||
        userText.includes("смішно") ||
        userText.includes("розсміши")
      ) {
        addMessage(
          "Чому програміст не любить природу? Бо там забагато багів! 🐛😄",
        );

        // ─── Прощання ───
      } else if (
        userText.includes("бувай") ||
        userText.includes("до побачення") ||
        userText.includes("пока") ||
        userText.includes("bye") ||
        userText.includes("goodbye")
      ) {
        addMessage("До побачення! Звертайся будь-коли — я завжди тут! 👋😊");

        // ─── За замовчуванням ───
      } else {
        addMessage(
          'Хмм, не зовсім зрозумів 🤔 Спробуй написати:\n• "Сайт" — послуги зі створення сайтів\n• "Ціна" — пакети та вартість\n• "Реклама" — Google / Facebook Ads\n• "Факт" — цікавий факт\n• "Контакти" — зв\'язатись з нами',
        );
      }
    }, 600);
  };

  const closePopupForever = () => {
    setIsPopupOpen(false);
    localStorage.setItem("djonPopupSeen", "true");
  };

  return (
    <>
      {isPopupOpen && (
        <div className="djon-popup-overlay">
          <div className="djon-popup-container">
            <button onClick={closePopupForever} className="djon-close-btn">
              ✕
            </button>
            <div className="djon-popup-text">
              Привіт! 👋
              <br />
              🤖 Я – <strong>Djon</strong>, твій особистий гід у Web
              <span className="djon-brand-red">Start</span> Studio.
            </div>
            <div className="djon-popup-text">
              Пиши нам у <a href="viber://chat?number=+380661391932">Viber</a>{" "}
              або{" "}
              <a href="https://t.me/Viktor_freelancer_recruiting_pit">
                Telegram
              </a>
            </div>
          </div>
        </div>
      )}

      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="djon-chat-button"
          aria-label="Відкрити чат"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {isChatOpen && (
        <div className="djon-chat-window">
          <div className="djon-chat-header">
            <img
              src="/nasha_komanda/assistant.webp"
              alt="Джон"
              className="djon-chat-avatar"
            />
            <div className="djon-chat-info">
              <div className="djon-chat-name">Джон — твій гід</div>
              <div className="djon-chat-status">
                <span className="djon-online-dot"></span>онлайн
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="djon-chat-close"
            >
              <X size={24} />
            </button>
          </div>

          <div className="djon-chat-messages">
            {messages.length === 0 && (
              <div className="djon-chat-empty">
                👋 Привіт! Чим можу допомогти?
                <br />
                <span
                  style={{
                    fontSize: 13,
                    color: "#999",
                    marginTop: 6,
                    display: "block",
                  }}
                >
                  Спробуй: "сайт", "ціна", "реклама", "факт"
                </span>
              </div>
            )}
            {messages.map((m) => (
              <div key={m.id} className={`djon-message ${m.sender}`}>
                <div className="djon-message-content">
                  {m.sender === "bot" && (
                    <img
                      src="/nasha_komanda/assistant.webp"
                      alt=""
                      className="djon-message-avatar"
                    />
                  )}
                  <div className="djon-message-bubble">
                    {m.text}
                    {m.buttons && (
                      <div
                        className="djon-chat-buttons-container"
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "8px",
                        }}
                      >
                        {m.buttons.map((btn, idx) => (
                          <button
                            key={idx}
                            className="djon-chat-btn-link"
                            onClick={() => {
                              navigate(btn.path);
                              if (window.innerWidth <= 768)
                                setIsChatOpen(false);
                            }}
                            style={{
                              padding: "8px 12px",
                              borderRadius: "8px",
                              border: "1px solid #ddd",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                              textAlign: "left",
                              fontSize: "13px",
                              fontWeight: 500,
                            }}
                          >
                            {btn.label}
                          </button>
                        ))}
                      </div>
                    )}
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
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Напиши повідомлення..."
              className="djon-chat-input"
            />
            <button
              onClick={handleSend}
              className="djon-chat-send"
              disabled={!input.trim()}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DjonAssistant;
