import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../api/api";
import "./MyAccount.css";
import "./MyAccount.mobile.css";

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
    <div className="myaccount-container">
      <div className="myaccount-header">
        <h1>👋 Вітаємо, {user?.name}!</h1>
        <p>{user?.email}</p>
      </div>

      <h2 className="myaccount-title">📋 Мої замовлення</h2>

      {loading ? (
        <p className="loading-text">Завантаження...</p>
      ) : orders.length === 0 ? (
        <div className="empty-orders">
          <p className="empty-icon">📭</p>
          <h3>Замовлень поки немає</h3>
          <p>Оформи замовлення і ми одразу почнемо роботу!</p>
          <a href="/contact" className="btn-order">
            🚀 Замовити проєкт
          </a>
        </div>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div
              key={order.id}
              className="order-card"
              style={{ borderTop: `4px solid ${statusColors[order.status]}` }}
            >
              <div className="order-header">
                <div>
                  <h3>{order.service}</h3>
                  <p className="order-meta">
                    Замовлення #{order.id} · {formatDate(order.created_at)}
                  </p>
                </div>
                <span
                  className="order-status"
                  style={{ background: statusColors[order.status] }}
                >
                  {statusLabels[order.status]}
                </span>
              </div>

              <div className="progress-container">
                <div className="steps-labels">
                  {steps.map((step, i) => (
                    <div key={step.key} className="step">
                      <div
                        className="step-circle"
                        style={{
                          background:
                            i <= getStepIndex(order.status)
                              ? statusColors[order.status]
                              : "#e2e8f0",
                          color:
                            i <= getStepIndex(order.status)
                              ? "#fff"
                              : "#94a3b8",
                        }}
                      >
                        {i < getStepIndex(order.status) ? "✓" : i + 1}
                      </div>
                      <p
                        className="step-label"
                        style={{
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
                <div className="progress-bar-bg">
                  <div
                    className="progress-bar-fill"
                    style={{
                      width: `${
                        (getStepIndex(order.status) / (steps.length - 1)) * 100
                      }%`,
                      background: statusColors[order.status],
                    }}
                  />
                </div>
              </div>

              {order.notes && (
                <div className="order-notes">
                  <p>💬 Повідомлення від команди:</p>
                  <p>{order.notes}</p>
                </div>
              )}

              {order.file_url && (
                <a
                  href={order.file_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-download"
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
