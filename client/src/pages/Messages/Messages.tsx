import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../api/api";

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
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchMessages();

    // Оновлювати кожні 10 секунд
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

  // ─── НЕ ЗАЛОГІНЕНИЙ ───
  if (!user) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
          padding: 24,
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: 20,
            padding: "48px 40px",
            textAlign: "center",
            maxWidth: 440,
            boxShadow: "0 8px 40px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: 64, marginBottom: 16 }}>🔐</div>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 700,
              marginBottom: 12,
              color: "#1a1a2e",
            }}
          >
            Доступ обмежено
          </h2>
          <p
            style={{
              color: "#666",
              fontSize: 15,
              lineHeight: 1.6,
              marginBottom: 28,
            }}
          >
            Щоб спілкуватись з командою напряму, потрібно увійти або
            зареєструватись в особистому кабінеті
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button
              onClick={() => navigate("/")}
              style={{
                padding: "13px",
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "white",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              🔑 Увійти / Зареєструватись
            </button>
            <button
              onClick={() => navigate("/contact")}
              style={{
                padding: "13px",
                borderRadius: 10,
                border: "2px solid #667eea",
                background: "transparent",
                color: "#667eea",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              💬 Написати через форму контактів
            </button>
          </div>

          <p style={{ color: "#aaa", fontSize: 13, marginTop: 20 }}>
            Реєстрація безкоштовна і займає 30 секунд
          </p>
        </div>
      </div>
    );
  }

  // ─── ЗАЛОГІНЕНИЙ ───
  return (
    <div
      style={{
        maxWidth: 760,
        margin: "0 auto",
        padding: "24px",
        fontFamily: "system-ui",
        height: "calc(100vh - 120px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Заголовок */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          borderRadius: 16,
          padding: "20px 24px",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "white",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 22,
          }}
        >
          💬
        </div>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>
            Чат з командою WebStart
          </h1>
          <p style={{ opacity: 0.85, fontSize: 13 }}>
            Відповідаємо протягом кількох годин в робочий час
          </p>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 13, opacity: 0.9 }}>Онлайн</span>
        </div>
      </div>

      {/* Область повідомлень */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          background: "#f8f9ff",
          borderRadius: 16,
          marginBottom: 12,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {loading ? (
          <p style={{ textAlign: "center", color: "#aaa", padding: 40 }}>
            Завантаження...
          </p>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: "center", padding: 40 }}>
            <p style={{ fontSize: 40, marginBottom: 12 }}>👋</p>
            <p style={{ color: "#666", fontSize: 15 }}>Привіт, {user.name}!</p>
            <p style={{ color: "#aaa", fontSize: 14, marginTop: 4 }}>
              Напиши своє перше повідомлення — ми відповімо якнайшвидше
            </p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "client" ? "flex-end" : "flex-start",
              }}
            >
              {msg.sender === "admin" && (
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    marginRight: 8,
                    flexShrink: 0,
                  }}
                >
                  👑
                </div>
              )}
              <div style={{ maxWidth: "70%" }}>
                {msg.sender === "admin" && (
                  <p
                    style={{
                      fontSize: 11,
                      color: "#667eea",
                      fontWeight: 600,
                      marginBottom: 3,
                    }}
                  >
                    WebStart Studio
                  </p>
                )}
                <div
                  style={{
                    padding: "10px 14px",
                    borderRadius:
                      msg.sender === "client"
                        ? "16px 16px 4px 16px"
                        : "16px 16px 16px 4px",
                    background:
                      msg.sender === "client"
                        ? "linear-gradient(135deg, #667eea, #764ba2)"
                        : "white",
                    color: msg.sender === "client" ? "white" : "#333",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    fontSize: 14,
                    lineHeight: 1.5,
                  }}
                >
                  {msg.text}
                </div>
                <p
                  style={{
                    fontSize: 11,
                    color: "#aaa",
                    marginTop: 4,
                    textAlign: msg.sender === "client" ? "right" : "left",
                  }}
                >
                  {formatTime(msg.created_at)}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={bottomRef} />
      </div>

      {/* Поле вводу */}
      <div
        style={{
          display: "flex",
          gap: 10,
          alignItems: "flex-end",
          background: "white",
          borderRadius: 16,
          padding: "12px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
        }}
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Напишіть повідомлення... (Enter — відправити)"
          rows={2}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            resize: "none",
            fontSize: 14,
            fontFamily: "system-ui",
            lineHeight: 1.5,
            background: "transparent",
          }}
        />
        <button
          onClick={sendMessage}
          disabled={sending || !text.trim()}
          style={{
            padding: "10px 20px",
            borderRadius: 10,
            border: "none",
            background: text.trim()
              ? "linear-gradient(135deg, #667eea, #764ba2)"
              : "#e2e8f0",
            color: text.trim() ? "white" : "#aaa",
            fontWeight: 700,
            cursor: text.trim() ? "pointer" : "default",
            fontSize: 14,
            transition: "all 0.2s",
            flexShrink: 0,
          }}
        >
          {sending ? "..." : "📤 Надіслати"}
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "#aaa",
          fontSize: 12,
          marginTop: 8,
        }}
      >
        Enter — відправити · Shift+Enter — новий рядок
      </p>
    </div>
  );
};

export default Messages;
