import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../api/api";
import "./Messages.css";
import "./Messages.mobile.css";

interface Message {
  id: number;
  user_id: number;
  sender: "client" | "admin";
  text: string;
  created_at: string;
}

const Messages: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    fetchMessages();

    const interval = setInterval(fetchMessages, 10000);
    return () => clearInterval(interval);
  }, [user]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const res = await API.get("/client/messages");
      setMessages(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!text.trim()) return;

    setSending(true);
    try {
      await API.post("/client/messages", { text: text.trim() });
      setText("");
      fetchMessages();
    } catch (e) {
      console.error(e);
    } finally {
      setSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatTime = (date: string) =>
    new Date(date).toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    });

  // ───────── НЕ ЗАЛОГІНЕНИЙ ─────────
  if (!user) {
    return (
      <div className="messages-locked-wrapper">
        <div className="messages-locked-card">
          <div className="messages-locked-icon">🔐</div>

          <h2 className="messages-locked-title">Доступ обмежено</h2>

          <p className="messages-locked-text">
            Щоб спілкуватись з командою напряму, потрібно увійти або
            зареєструватись в особистому кабінеті
          </p>

          <div className="messages-locked-buttons">
            <button
              onClick={() => {
                window.dispatchEvent(new Event("openAuthModal"));
              }}
              className="btn-primary"
            >
              🔑 Увійти / Зареєструватись
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="btn-outline"
            >
              💬 Написати через форму контактів
            </button>
          </div>

          <p className="messages-locked-note">
            Реєстрація безкоштовна і займає 30 секунд
          </p>
        </div>
      </div>
    );
  }

  // ───────── ЗАЛОГІНЕНИЙ ─────────
  return (
    <div className="messages-wrapper">
      {/* Header */}
      <div className="messages-header">
        <div className="messages-header-icon">💬</div>

        <div>
          <h1 className="messages-title">Чат з командою WebStart</h1>
          <p className="messages-subtitle">
            Відповідаємо протягом кількох годин в робочий час
          </p>
        </div>

        <div className="messages-status">
          <span className="status-dot" />
          <span>Онлайн</span>
        </div>
      </div>

      {/* Messages */}
      <div className="messages-body">
        {loading ? (
          <p className="messages-loading">Завантаження...</p>
        ) : messages.length === 0 ? (
          <div className="messages-empty">
            <p className="messages-empty-icon">👋</p>
            <p>Привіт, {user.name}!</p>
            <p className="messages-empty-sub">
              Напиши своє перше повідомлення — ми відповімо як найшвидше
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`message-row ${msg.sender}`}>
              {msg.sender === "admin" && <div className="admin-avatar">👑</div>}

              <div>
                {msg.sender === "admin" && (
                  <p className="admin-label">WebStart Studio</p>
                )}

                <div className={`message-bubble ${msg.sender}`}>{msg.text}</div>

                <p
                  className={`message-time ${
                    msg.sender === "client" ? "time-right" : "time-left"
                  }`}
                >
                  {formatTime(msg.created_at)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="message-input-wrapper">
        <textarea
          name="chatMessage"
          id="chatMessage"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Напишіть повідомлення... (Enter — відправити)"
          rows={2}
          className="message-textarea"
        />

        <button
          onClick={sendMessage}
          disabled={sending || !text.trim()}
          className={`message-send-btn ${text.trim() ? "active" : "disabled"}`}
        >
          {sending ? "..." : "📤 Надіслати"}
        </button>
      </div>

      <p className="messages-hint">
        Enter — відправити · Shift+Enter — новий рядок
      </p>
    </div>
  );
};

export default Messages;
