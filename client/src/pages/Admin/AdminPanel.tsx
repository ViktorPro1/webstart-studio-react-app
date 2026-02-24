import React, { useEffect, useState } from "react";
import API from "../../api/api";
import "./AdminPanel.css";
import "./AdminPanel.mobil.css";

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "new" | "in_progress" | "done";
  created_at: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

interface Order {
  id: number;
  client_id: number;
  client_name: string;
  client_email: string;
  service: string;
  status: "new" | "in_progress" | "review" | "done";
  notes: string;
  file_url: string;
  created_at: string;
}

type Tab = "contacts" | "orders" | "users";

const statusColors: Record<string, string> = {
  new: "#3b82f6",
  in_progress: "#f59e0b",
  review: "#8b5cf6",
  done: "#22c55e",
};

const orderStatusLabels: Record<string, string> = {
  new: "🆕 Нова",
  in_progress: "⚙️ В роботі",
  review: "👀 На перевірці",
  done: "✅ Готово",
};

const AdminPanel: React.FC = () => {
  const [tab, setTab] = useState<Tab>("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [newOrder, setNewOrder] = useState({
    client_id: "",
    service: "",
    notes: "",
    file_url: "",
  });
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [c, u, o] = await Promise.all([
        API.get("/admin/contacts"),
        API.get("/admin/users"),
        API.get("/admin/orders"),
      ]);
      setContacts(c.data);
      setUsers(u.data);
      setOrders(o.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id: number, status: string) => {
    await API.patch(`/admin/contacts/${id}`, { status });
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, status: status as Contact["status"] } : c,
      ),
    );
  };

  const deleteContact = async (id: number) => {
    if (!window.confirm("Видалити заявку?")) return;
    await API.delete(`/admin/contacts/${id}`);
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const createOrder = async () => {
    if (!newOrder.client_id || !newOrder.service) {
      alert("Вкажіть клієнта і послугу!");
      return;
    }
    await API.post("/admin/orders", newOrder);
    setNewOrder({ client_id: "", service: "", notes: "", file_url: "" });
    setShowOrderForm(false);
    fetchAll();
  };

  const updateOrder = async () => {
    if (!editingOrder) return;
    await API.patch(`/admin/orders/${editingOrder.id}`, {
      status: editingOrder.status,
      notes: editingOrder.notes,
      file_url: editingOrder.file_url,
    });
    setEditingOrder(null);
    fetchAll();
  };

  const deleteOrder = async (id: number) => {
    if (!window.confirm("Видалити замовлення?")) return;
    await API.delete(`/admin/orders/${id}`);
    setOrders((prev) => prev.filter((o) => o.id !== id));
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const clientUsers = users.filter((u) => u.role === "client");

  return (
    <div className="admin-container">
      <h1 className="admin-title">👑 Адмін-панель</h1>
      <p className="admin-subtitle">
        Управління заявками, замовленнями та користувачами
      </p>

      {/* Статистика */}
      <div className="admin-stats">
        {[
          { label: "Заявок", value: contacts.length, color: "#667eea" },
          { label: "Замовлень", value: orders.length, color: "#8b5cf6" },
          {
            label: "В роботі",
            value: orders.filter((o) => o.status === "in_progress").length,
            color: "#f59e0b",
          },
          {
            label: "Готово",
            value: orders.filter((o) => o.status === "done").length,
            color: "#22c55e",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="card"
            style={{ borderTop: `4px solid ${stat.color}` }}
          >
            <p className="card-label">{stat.label}</p>
            <p className="card-value" style={{ color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Таби */}
      <div className="admin-tabs">
        {(["contacts", "orders", "users"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`admin-tab-btn ${tab === t ? "active" : ""}`}
          >
            {t === "contacts"
              ? "📋 Заявки"
              : t === "orders"
                ? "📦 Замовлення"
                : "👥 Користувачі"}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading-text">Завантаження...</p>
      ) : (
        <>
          {/* ─── ЗАЯВКИ ─── */}
          {tab === "contacts" && (
            <div className="list-container">
              {contacts.length === 0 && (
                <p className="empty-text">Заявок поки немає</p>
              )}
              {contacts.map((c) => (
                <div
                  key={c.id}
                  className="card"
                  style={{ borderLeft: `4px solid ${statusColors[c.status]}` }}
                >
                  <div className="card-content">
                    <div>
                      <p className="card-title">
                        {c.name} —{" "}
                        <span className="highlight">{c.service}</span>
                      </p>
                      <p className="card-subtext">
                        📧 {c.email} {c.phone && `· 📞 ${c.phone}`}
                      </p>
                      <p className="card-text">{c.message}</p>
                      <p className="card-date">{formatDate(c.created_at)}</p>
                    </div>
                    <div className="card-actions">
                      <label
                        htmlFor={`contact-status-${c.id}`}
                        className="sr-only"
                      >
                        Статус заявки
                      </label>
                      <select
                        id={`contact-status-${c.id}`}
                        value={c.status}
                        onChange={(e) =>
                          updateContactStatus(c.id, e.target.value)
                        }
                        className="form-input"
                        name={`contact-status-${c.id}`}
                      >
                        <option value="new">🆕 Нова</option>
                        <option value="in_progress">⚙️ В роботі</option>
                        <option value="done">✅ Готово</option>
                      </select>
                      <button
                        onClick={() => deleteContact(c.id)}
                        className="btn btn-delete"
                      >
                        🗑 Видалити
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── ЗАМОВЛЕННЯ ─── */}
          {tab === "orders" && (
            <div>
              <button
                className="btn btn-create"
                onClick={() => setShowOrderForm(!showOrderForm)}
              >
                ➕ Створити замовлення для клієнта
              </button>

              {showOrderForm && (
                <div className="card form-card">
                  <h3>📦 Нове замовлення</h3>
                  <div className="grid-2">
                    <div>
                      <label htmlFor="new-order-client">Клієнт *</label>
                      <select
                        id="new-order-client"
                        name="client_id"
                        value={newOrder.client_id}
                        onChange={(e) =>
                          setNewOrder({
                            ...newOrder,
                            client_id: e.target.value,
                          })
                        }
                        className="form-input"
                      >
                        <option value="">Оберіть клієнта</option>
                        {clientUsers.map((u) => (
                          <option key={u.id} value={u.id}>
                            {u.name} ({u.email})
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="new-order-service">Послуга *</label>
                      <select
                        id="new-order-service"
                        name="service"
                        value={newOrder.service}
                        onChange={(e) =>
                          setNewOrder({ ...newOrder, service: e.target.value })
                        }
                        className="form-input"
                      >
                        <option value="">Оберіть послугу</option>
                        <option>Лендінг</option>
                        <option>Портфоліо</option>
                        <option>Резюме</option>
                        <option>Корпоративний сайт</option>
                        <option>AI Автоматизація</option>
                        <option>Google Ads</option>
                        <option>Facebook Ads</option>
                        <option>UI/UX Дизайн</option>
                        <option>Логотип</option>
                        <option>Брендинг</option>
                      </select>
                    </div>
                  </div>

                  <label htmlFor="new-order-notes">
                    Повідомлення для клієнта
                  </label>
                  <textarea
                    id="new-order-notes"
                    name="notes"
                    value={newOrder.notes}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, notes: e.target.value })
                    }
                    className="form-input"
                    rows={3}
                    placeholder="Наприклад: Ваш проєкт прийнятий в роботу..."
                  />

                  <label htmlFor="new-order-file">Посилання на файл</label>
                  <input
                    id="new-order-file"
                    name="file_url"
                    type="url"
                    value={newOrder.file_url}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, file_url: e.target.value })
                    }
                    className="form-input"
                    placeholder="https://drive.google.com/..."
                  />

                  <div className="form-buttons">
                    <button onClick={createOrder} className="btn btn-save">
                      ✅ Створити
                    </button>
                    <button
                      onClick={() => setShowOrderForm(false)}
                      className="btn btn-cancel"
                    >
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* Список замовлень */}
              <div className="list-container">
                {orders.length === 0 && (
                  <p className="empty-text">
                    Замовлень поки немає — створи перше!
                  </p>
                )}
                {orders.map((o) => (
                  <div
                    key={o.id}
                    className="card"
                    style={{
                      borderLeft: `4px solid ${statusColors[o.status]}`,
                    }}
                  >
                    {/* Логіка редагування та відображення замовлення */}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── КОРИСТУВАЧІ ─── */}
          {tab === "users" && (
            <div className="list-container">
              {users.map((u) => (
                <div key={u.id} className="card user-card">
                  <div>
                    <p className="card-title">{u.name}</p>
                    <p className="card-subtext">📧 {u.email}</p>
                    <p className="card-date">{formatDate(u.created_at)}</p>
                  </div>
                  <span className={`role-badge ${u.role}`}>
                    {u.role === "admin" ? "👑 Адмін" : "👤 Клієнт"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AdminPanel;
