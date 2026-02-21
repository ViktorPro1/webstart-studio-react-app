import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../api/api";

interface Order {
  id: number;
  service: string;
  status: "new" | "in_progress" | "review" | "done";
  notes: string;
  file_url: string;
  created_at: string;
}

const statusLabels: Record<string, string> = {
  new: "🆕 Нова заявка",
  in_progress: "⚙️ В роботі",
  review: "👀 На перевірці",
  done: "✅ Готово",
};

const statusColors: Record<string, string> = {
  new: "#3b82f6",
  in_progress: "#f59e0b",
  review: "#8b5cf6",
  done: "#22c55e",
};

const steps = [
  { key: "new", label: "Заявка" },
  { key: "in_progress", label: "В роботі" },
  { key: "review", label: "Перевірка" },
  { key: "done", label: "Готово" },
];

const MyAccount: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await API.get("/client/my-orders");
      setOrders(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  const getStepIndex = (status: string) =>
    steps.findIndex((s) => s.key === status);

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: 800,
        margin: "0 auto",
        fontFamily: "system-ui",
      }}
    >
      {/* Привітання */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea, #764ba2)",
          borderRadius: 16,
          padding: "28px 32px",
          marginBottom: 32,
          color: "white",
        }}
      >
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
          👋 Вітаємо, {user?.name}!
        </h1>
        <p style={{ opacity: 0.85, fontSize: 14 }}>{user?.email}</p>
      </div>

      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 20 }}>
        📋 Мої замовлення
      </h2>

      {loading ? (
        <p style={{ textAlign: "center", padding: 40, color: "#666" }}>
          Завантаження...
        </p>
      ) : orders.length === 0 ? (
        <div
          style={{
            background: "white",
            borderRadius: 16,
            padding: 40,
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
          }}
        >
          <p style={{ fontSize: 48, marginBottom: 16 }}>📭</p>
          <h3 style={{ fontWeight: 700, marginBottom: 8 }}>
            Замовлень поки немає
          </h3>
          <p style={{ color: "#666", marginBottom: 24 }}>
            Оформи замовлення і ми одразу почнемо роботу!
          </p>
          <a
            href="/contact"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              color: "white",
              borderRadius: 10,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            🚀 Замовити проєкт
          </a>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {orders.map((order) => (
            <div
              key={order.id}
              style={{
                background: "white",
                borderRadius: 16,
                padding: 24,
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                borderTop: `4px solid ${statusColors[order.status]}`,
              }}
            >
              {/* Заголовок */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 20,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div>
                  <h3
                    style={{ fontWeight: 700, fontSize: 18, marginBottom: 4 }}
                  >
                    {order.service}
                  </h3>
                  <p style={{ color: "#aaa", fontSize: 13 }}>
                    Замовлення #{order.id} · {formatDate(order.created_at)}
                  </p>
                </div>
                <span
                  style={{
                    background: statusColors[order.status],
                    color: "white",
                    padding: "6px 14px",
                    borderRadius: 20,
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {statusLabels[order.status]}
                </span>
              </div>

              {/* Прогрес бар */}
              <div style={{ marginBottom: 20 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  {steps.map((step, i) => (
                    <div
                      key={step.key}
                      style={{ textAlign: "center", flex: 1 }}
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          margin: "0 auto 6px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 700,
                          fontSize: 13,
                          background:
                            i <= getStepIndex(order.status)
                              ? statusColors[order.status]
                              : "#e2e8f0",
                          color:
                            i <= getStepIndex(order.status)
                              ? "white"
                              : "#94a3b8",
                        }}
                      >
                        {i < getStepIndex(order.status) ? "✓" : i + 1}
                      </div>
                      <p
                        style={{
                          fontSize: 11,
                          color:
                            i <= getStepIndex(order.status)
                              ? "#333"
                              : "#94a3b8",
                        }}
                      >
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    height: 4,
                    background: "#e2e8f0",
                    borderRadius: 2,
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: 2,
                      background: statusColors[order.status],
                      width: `${(getStepIndex(order.status) / (steps.length - 1)) * 100}%`,
                      transition: "width 0.5s ease",
                    }}
                  />
                </div>
              </div>

              {/* Нотатки від команди */}
              {order.notes && (
                <div
                  style={{
                    background: "#f8f9ff",
                    borderRadius: 10,
                    padding: "12px 16px",
                    marginBottom: 16,
                    borderLeft: "3px solid #667eea",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      color: "#667eea",
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    💬 Повідомлення від команди:
                  </p>
                  <p style={{ fontSize: 14, color: "#333" }}>{order.notes}</p>
                </div>
              )}

              {/* Файл для скачування */}
              {order.file_url && (
                <a
                  href={order.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 20px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #667eea, #764ba2)",
                    color: "white",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  📥 Завантажити файл
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAccount;
