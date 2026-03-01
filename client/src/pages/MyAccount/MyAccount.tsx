import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../api/api";
import "./MyAccount.css";
import "./MyAccount.mobile.css";

interface Order {
  id: number;
  title: string;
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

const SERVICES = [
  "Сайт-візитка",
  "Лендінг",
  "Інтернет-магазин",
  "Корпоративний сайт",
  "Редизайн сайту",
  "SEO-оптимізація",
  "Технічна підтримка",
  "Інше",
];

const MyAccount: React.FC = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [orderService, setOrderService] = useState("");
  const [orderNote, setOrderNote] = useState("");
  const [orderSending, setOrderSending] = useState(false);
  const [orderSent, setOrderSent] = useState(false);

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

  const sendOrder = async () => {
    if (!orderService) return;
    setOrderSending(true);
    try {
      await API.post("/client/orders", {
        service: orderService,
        notes: orderNote.trim(),
      });
      setOrderSent(true);
      fetchOrders();
      setTimeout(() => {
        setShowModal(false);
        setOrderSent(false);
        setOrderService("");
        setOrderNote("");
      }, 2000);
    } catch (e) {
      console.error(e);
    } finally {
      setOrderSending(false);
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

  // ── Захист: не залогінений ──
  if (!user) {
    return (
      <div className="myaccount-container">
        <div style={{ textAlign: "center", padding: "60px 24px" }}>
          <p style={{ fontSize: 56, marginBottom: 16 }}>🔐</p>
          <h2 style={{ marginBottom: 12 }}>Доступ обмежено</h2>
          <p style={{ color: "#666", marginBottom: 28 }}>
            Увійдіть або зареєструйтесь щоб переглянути кабінет
          </p>
          <button
            onClick={() => window.dispatchEvent(new Event("openAuthModal"))}
            className="btn-order"
          >
            🔑 Увійти / Зареєструватись
          </button>
        </div>
      </div>
    );
  }

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
          <button className="btn-order" onClick={() => setShowModal(true)}>
            🚀 Замовити проєкт
          </button>
        </div>
      ) : (
        <>
          <button
            className="btn-order"
            onClick={() => setShowModal(true)}
            style={{ marginBottom: 24 }}
          >
            🚀 Нове замовлення
          </button>
          <div className="orders-list">
            {orders.map((order) => (
              <div
                key={order.id}
                className="order-card"
                style={{ borderTop: `4px solid ${statusColors[order.status]}` }}
              >
                <div className="order-header">
                  <div>
                    <h3>{order.title}</h3>
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
                          (getStepIndex(order.status) / (steps.length - 1)) *
                          100
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
        </>
      )}

      {/* ── Модальне вікно замовлення ── */}
      {showModal && (
        <div
          className="order-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="order-modal">
            {orderSent ? (
              <div className="order-modal-success">
                <p style={{ fontSize: 48 }}>🎉</p>
                <h3>Замовлення надіслано!</h3>
                <p>Ми зв'яжемося з вами найближчим часом</p>
              </div>
            ) : (
              <>
                <div className="order-modal-header">
                  <h2>🚀 Нове замовлення</h2>
                  <button
                    className="order-modal-close"
                    onClick={() => setShowModal(false)}
                  >
                    ✕
                  </button>
                </div>

                <label className="order-modal-label">Оберіть послугу *</label>
                <div className="order-services-grid">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      className={`order-service-btn ${orderService === s ? "active" : ""}`}
                      onClick={() => setOrderService(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <label className="order-modal-label">
                  Короткий опис (необов'язково)
                </label>
                <textarea
                  className="order-modal-textarea"
                  placeholder="Розкажіть коротко що потрібно зробити..."
                  value={orderNote}
                  onChange={(e) => setOrderNote(e.target.value)}
                  rows={4}
                />

                <button
                  className={`order-modal-submit ${orderService ? "active" : "disabled"}`}
                  onClick={sendOrder}
                  disabled={!orderService || orderSending}
                >
                  {orderSending ? "Надсилаємо..." : "📤 Надіслати замовлення"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccount;
