import React, { useEffect, useState } from "react";
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
  user_name?: string;
  user_email?: string;
}

interface ClientThread {
  user_id: number;
  user_name: string;
  user_email: string;
  last_message: string;
  last_time: string;
}

const Messages: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);

  const [threads, setThreads] = useState<ClientThread[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [adminMessages, setAdminMessages] = useState<Message[]>([]);
  const [adminText, setAdminText] = useState("");
  const [adminSending, setAdminSending] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (!user) return;
    if (user.role === "admin") {
      fetchThreads();
      const interval = setInterval(fetchThreads, 10000);
      return () => clearInterval(interval);
    } else {
      fetchMessages();
      const interval = setInterval(fetchMessages, 10000);
      return () => clearInterval(interval);
    }
  }, [user]);

  useEffect(() => {
    if (selectedUserId) {
      fetchAdminMessages(selectedUserId);
      const interval = setInterval(
        () => fetchAdminMessages(selectedUserId),
        10000,
      );
      return () => clearInterval(interval);
    }
  }, [selectedUserId]);

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

  const fetchThreads = async () => {
    try {
      const res = await API.get("/admin/messages");
      const map = new Map<number, ClientThread>();
      res.data.forEach((msg: Message) => {
        if (!map.has(msg.user_id)) {
          map.set(msg.user_id, {
            user_id: msg.user_id,
            user_name: msg.user_name || "Клієнт",
            user_email: msg.user_email || "",
            last_message: msg.text,
            last_time: msg.created_at,
          });
        } else {
          const thread = map.get(msg.user_id)!;
          if (new Date(msg.created_at) > new Date(thread.last_time)) {
            thread.last_message = msg.text;
            thread.last_time = msg.created_at;
          }
        }
      });
      setThreads(Array.from(map.values()));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchAdminMessages = async (userId: number) => {
    try {
      const res = await API.get("/admin/messages");
      setAdminMessages(res.data.filter((m: Message) => m.user_id === userId));
    } catch (e) {
      console.error(e);
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

  const sendAdminMessage = async () => {
    if (!adminText.trim() || !selectedUserId) return;
    setAdminSending(true);
    try {
      await API.post(`/admin/messages/${selectedUserId}`, {
        text: adminText.trim(),
      });
      setAdminText("");
      fetchAdminMessages(selectedUserId);
      fetchThreads();
    } catch (e) {
      console.error(e);
    } finally {
      setAdminSending(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, fn: () => void) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      fn();
    }
  };

  const formatTime = (date: string) =>
    new Date(date).toLocaleTimeString("uk-UA", {
      hour: "2-digit",
      minute: "2-digit",
      day: "2-digit",
      month: "2-digit",
    });

  if (!user) {
    return (
      <div className="msg-locked-wrapper">
        <div className="msg-locked-card">
          <div className="msg-locked-icon">🔐</div>
          <h2 className="msg-locked-title">Доступ обмежено</h2>
          <p className="msg-locked-text">
            Щоб спілкуватись з командою напряму, потрібно увійти або
            зареєструватись в особистому кабінеті
          </p>
          <div className="msg-locked-buttons">
            <button
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
              className="msg-btn-primary"
            >
              🔑 Увійти / Зареєструватись
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="msg-btn-outline"
            >
              💬 Написати через форму контактів
            </button>
          </div>
          <p className="msg-locked-note">
            Реєстрація безкоштовна і займає 30 секунд
          </p>
        </div>
      </div>
    );
  }

  if (user.role === "admin") {
    return (
      <div className="msg-wrapper">
        <div className="msg-header">
          <div className="msg-header-icon">👑</div>
          <div>
            <h1 className="msg-title">Повідомлення від клієнтів</h1>
            <p className="msg-subtitle">
              {threads.length} {threads.length === 1 ? "розмова" : "розмов"}
            </p>
          </div>
        </div>

        <div className="msg-admin-layout">
          <div className="msg-admin-sidebar">
            {loading ? (
              <p className="msg-loading">Завантаження...</p>
            ) : threads.length === 0 ? (
              <p className="msg-loading">Повідомлень поки немає</p>
            ) : (
              threads.map((thread) => (
                <div
                  key={thread.user_id}
                  onClick={() => setSelectedUserId(thread.user_id)}
                  className={`msg-thread-item ${selectedUserId === thread.user_id ? "active" : "inactive"}`}
                >
                  <p className="msg-thread-name">👤 {thread.user_name}</p>
                  <p className="msg-thread-email">{thread.user_email}</p>
                  <p className="msg-thread-preview">{thread.last_message}</p>
                  <p className="msg-thread-time">
                    {formatTime(thread.last_time)}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="msg-admin-chat">
            {!selectedUserId ? (
              <div className="msg-admin-empty">Оберіть клієнта зі списку</div>
            ) : (
              <>
                <div className="msg-body">
                  {adminMessages.map((msg) => (
                    <div key={msg.id} className={`msg-row ${msg.sender}`}>
                      {msg.sender === "admin" && (
                        <div className="msg-avatar">👑</div>
                      )}
                      <div className="msg-bubble-wrapper">
                        {msg.sender === "admin" && (
                          <p className="msg-sender-label">
                            Ти (WebStart Studio)
                          </p>
                        )}
                        {msg.sender === "client" && (
                          <p className="msg-sender-label">
                            👤{" "}
                            {
                              threads.find((t) => t.user_id === selectedUserId)
                                ?.user_name
                            }
                          </p>
                        )}
                        <div className={`msg-bubble ${msg.sender}`}>
                          {msg.text}
                        </div>
                        <p
                          className={`msg-time ${msg.sender === "client" ? "left" : "right"}`}
                        >
                          {formatTime(msg.created_at)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="msg-input-wrapper">
                  <textarea
                    value={adminText}
                    onChange={(e) => setAdminText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, sendAdminMessage)}
                    placeholder="Відповідь клієнту... (Enter — відправити)"
                    rows={2}
                    className="msg-textarea"
                  />
                  <button
                    onClick={sendAdminMessage}
                    disabled={adminSending || !adminText.trim()}
                    className={`msg-send-btn ${adminText.trim() ? "active" : "disabled"}`}
                  >
                    {adminSending ? "..." : "📤 Відповісти"}
                  </button>
                </div>
                <p className="msg-hint">
                  Enter — відправити · Shift+Enter — новий рядок
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="msg-wrapper">
      <div className="msg-header">
        <div className="msg-header-icon">💬</div>
        <div>
          <h1 className="msg-title">Чат з командою WebStart</h1>
          <p className="msg-subtitle">
            Відповідаємо протягом кількох годин в робочий час
          </p>
        </div>
        <div className="msg-status">
          <span className="msg-status-dot" />
          <span>Онлайн</span>
        </div>
      </div>

      <div className="msg-body">
        {loading ? (
          <p className="msg-loading">Завантаження...</p>
        ) : messages.length === 0 ? (
          <div className="msg-empty">
            <p className="msg-empty-icon">👋</p>
            <p>Привіт, {user.name}!</p>
            <p className="msg-empty-sub">
              Напиши своє перше повідомлення — ми відповімо якнайшвидше
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className={`msg-row ${msg.sender}`}>
              {msg.sender === "admin" && <div className="msg-avatar">👑</div>}
              <div className="msg-bubble-wrapper">
                {msg.sender === "admin" && (
                  <p className="msg-sender-label">WebStart Studio</p>
                )}
                <div className={`msg-bubble ${msg.sender}`}>{msg.text}</div>
                <p
                  className={`msg-time ${msg.sender === "client" ? "right" : "left"}`}
                >
                  {formatTime(msg.created_at)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="msg-input-wrapper">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, sendMessage)}
          placeholder="Напишіть повідомлення... (Enter — відправити)"
          rows={2}
          className="msg-textarea"
        />
        <button
          onClick={sendMessage}
          disabled={sending || !text.trim()}
          className={`msg-send-btn ${text.trim() ? "active" : "disabled"}`}
        >
          {sending ? "..." : "📤 Надіслати"}
        </button>
      </div>
      <p className="msg-hint">Enter — відправити · Shift+Enter — новий рядок</p>
    </div>
  );
};

export default Messages;
