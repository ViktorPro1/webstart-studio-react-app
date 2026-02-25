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
  user_name?: string;
  user_email?: string;
}

interface ClientThread {
  user_id: number;
  user_name: string;
  user_email: string;
  last_message: string;
  last_time: string;
  unread: number;
}

const Messages: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // ─── Стан для клієнта ───
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // ─── Стан для адміна ───
  const [threads, setThreads] = useState<ClientThread[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [adminMessages, setAdminMessages] = useState<Message[]>([]);
  const [adminText, setAdminText] = useState("");
  const [adminSending, setAdminSending] = useState(false);
  const adminBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

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
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    adminBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [adminMessages]);

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

  // ─── Клієнт: завантажити свої повідомлення ───
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

  // ─── Адмін: завантажити список клієнтів ───
  const fetchThreads = async () => {
    try {
      const res = await API.get("/admin/messages");
      // Групуємо по user_id
      const map = new Map<number, ClientThread>();
      res.data.forEach((msg: Message) => {
        if (!map.has(msg.user_id)) {
          map.set(msg.user_id, {
            user_id: msg.user_id,
            user_name: msg.user_name || "Клієнт",
            user_email: msg.user_email || "",
            last_message: msg.text,
            last_time: msg.created_at,
            unread: 0,
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

  // ─── Адмін: завантажити повідомлення конкретного клієнта ───
  const fetchAdminMessages = async (userId: number) => {
    try {
      const res = await API.get("/admin/messages");
      const filtered = res.data.filter((m: Message) => m.user_id === userId);
      setAdminMessages(filtered);
    } catch (e) {
      console.error(e);
    }
  };

  // ─── Клієнт: відправити повідомлення ───
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

  // ─── Адмін: відповісти клієнту ───
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
              onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
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

  // ───────── АДМІН ─────────
  if (user.role === "admin") {
    return (
      <div className="messages-wrapper">
        <div className="messages-header">
          <div className="messages-header-icon">👑</div>
          <div>
            <h1 className="messages-title">Повідомлення від клієнтів</h1>
            <p className="messages-subtitle">
              {threads.length} {threads.length === 1 ? "розмова" : "розмов"}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flex: 1,
            gap: 16,
            overflow: "hidden",
            padding: "0 0 16px",
          }}
        >
          {/* ─── Список клієнтів ─── */}
          <div
            style={{
              width: 280,
              flexShrink: 0,
              background: "#f8f9ff",
              borderRadius: 16,
              overflow: "auto",
              padding: 12,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {loading ? (
              <p style={{ color: "#aaa", textAlign: "center", padding: 20 }}>
                Завантаження...
              </p>
            ) : threads.length === 0 ? (
              <p style={{ color: "#aaa", textAlign: "center", padding: 20 }}>
                Повідомлень поки немає
              </p>
            ) : (
              threads.map((thread) => (
                <div
                  key={thread.user_id}
                  onClick={() => setSelectedUserId(thread.user_id)}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 12,
                    cursor: "pointer",
                    background:
                      selectedUserId === thread.user_id
                        ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : "white",
                    color: selectedUserId === thread.user_id ? "white" : "#333",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    transition: "all 0.2s",
                  }}
                >
                  <p style={{ fontWeight: 700, fontSize: 14, marginBottom: 2 }}>
                    👤 {thread.user_name}
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                      marginBottom: 4,
                      opacity: selectedUserId === thread.user_id ? 0.85 : 0.6,
                    }}
                  >
                    {thread.user_email}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      opacity: selectedUserId === thread.user_id ? 0.9 : 0.7,
                    }}
                  >
                    {thread.last_message}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      marginTop: 4,
                      opacity: selectedUserId === thread.user_id ? 0.7 : 0.5,
                    }}
                  >
                    {formatTime(thread.last_time)}
                  </p>
                </div>
              ))
            )}
          </div>

          {/* ─── Чат з клієнтом ─── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
            }}
          >
            {!selectedUserId ? (
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#f8f9ff",
                  borderRadius: 16,
                  color: "#aaa",
                  fontSize: 15,
                }}
              >
                👈 Оберіть клієнта зі списку
              </div>
            ) : (
              <>
                {/* Повідомлення */}
                <div className="messages-body" style={{ flex: 1 }}>
                  {adminMessages.map((msg) => (
                    <div key={msg.id} className={`message-row ${msg.sender}`}>
                      {msg.sender === "admin" && (
                        <div className="admin-avatar">👑</div>
                      )}
                      <div>
                        {msg.sender === "admin" && (
                          <p className="admin-label">Ти (WebStart Studio)</p>
                        )}
                        {msg.sender === "client" && (
                          <p
                            className="admin-label"
                            style={{ color: "#667eea" }}
                          >
                            👤{" "}
                            {
                              threads.find((t) => t.user_id === selectedUserId)
                                ?.user_name
                            }
                          </p>
                        )}
                        <div className={`message-bubble ${msg.sender}`}>
                          {msg.text}
                        </div>
                        <p
                          className={`message-time ${msg.sender === "client" ? "time-left" : "time-right"}`}
                        >
                          {formatTime(msg.created_at)}
                        </p>
                      </div>
                    </div>
                  ))}
                  <div ref={adminBottomRef} />
                </div>

                {/* Поле відповіді */}
                <div className="message-input-wrapper">
                  <textarea
                    value={adminText}
                    onChange={(e) => setAdminText(e.target.value)}
                    onKeyDown={(e) => handleKeyDown(e, sendAdminMessage)}
                    placeholder="Відповідь клієнту... (Enter — відправити)"
                    rows={2}
                    className="message-textarea"
                  />
                  <button
                    onClick={sendAdminMessage}
                    disabled={adminSending || !adminText.trim()}
                    className={`message-send-btn ${adminText.trim() ? "active" : "disabled"}`}
                  >
                    {adminSending ? "..." : "📤 Відповісти"}
                  </button>
                </div>
                <p className="messages-hint">
                  Enter — відправити · Shift+Enter — новий рядок
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ───────── КЛІЄНТ ─────────
  return (
    <div className="messages-wrapper">
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

      <div className="messages-body">
        {loading ? (
          <p className="messages-loading">Завантаження...</p>
        ) : messages.length === 0 ? (
          <div className="messages-empty">
            <p className="messages-empty-icon">👋</p>
            <p>Привіт, {user.name}!</p>
            <p className="messages-empty-sub">
              Напиши своє перше повідомлення — ми відповімо якнайшвидше
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
                  className={`message-time ${msg.sender === "client" ? "time-right" : "time-left"}`}
                >
                  {formatTime(msg.created_at)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      <div className="message-input-wrapper">
        <textarea
          name="chatMessage"
          id="chatMessage"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e, sendMessage)}
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
