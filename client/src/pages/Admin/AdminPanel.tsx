import React, { useEffect, useState } from "react";
import API from "../../api/api";

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

const formInputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  fontSize: 14,
  boxSizing: "border-box",
  outline: "none",
  background: "#f8fafc",
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
    <div
      style={{
        padding: "24px",
        maxWidth: 1100,
        margin: "0 auto",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        👑 Адмін-панель
      </h1>
      <p style={{ color: "#666", marginBottom: 24 }}>
        Управління заявками, замовленнями та користувачами
      </p>

      {/* Статистика */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          marginBottom: 32,
        }}
      >
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
            style={{
              background: "white",
              borderRadius: 12,
              padding: "20px 24px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              borderTop: `4px solid ${stat.color}`,
            }}
          >
            <p style={{ color: "#666", fontSize: 13, marginBottom: 4 }}>
              {stat.label}
            </p>
            <p style={{ fontSize: 32, fontWeight: 700, color: stat.color }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/* Таби */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
        {(
          [
            { key: "contacts", label: "📋 Заявки" },
            { key: "orders", label: "📦 Замовлення" },
            { key: "users", label: "👥 Користувачі" },
          ] as { key: Tab; label: string }[]
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: tab === t.key ? "#667eea" : "#f1f5f9",
              color: tab === t.key ? "white" : "#64748b",
              fontWeight: 600,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: "center", padding: 40, color: "#666" }}>
          Завантаження...
        </p>
      ) : (
        <>
          {/* ─── ЗАЯВКИ ─── */}
          {tab === "contacts" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contacts.length === 0 && (
                <p style={{ color: "#666", textAlign: "center", padding: 40 }}>
                  Заявок поки немає
                </p>
              )}
              {contacts.map((c) => (
                <div
                  key={c.id}
                  style={{
                    background: "white",
                    borderRadius: 12,
                    padding: 20,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    borderLeft: `4px solid ${statusColors[c.status] || "#667eea"}`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontWeight: 700,
                          fontSize: 16,
                          marginBottom: 4,
                        }}
                      >
                        {c.name} —{" "}
                        <span style={{ color: "#667eea" }}>{c.service}</span>
                      </p>
                      <p
                        style={{ color: "#666", fontSize: 13, marginBottom: 2 }}
                      >
                        📧 {c.email} {c.phone && `· 📞 ${c.phone}`}
                      </p>
                      <p style={{ color: "#444", fontSize: 14, marginTop: 8 }}>
                        {c.message}
                      </p>
                      <p style={{ color: "#aaa", fontSize: 12, marginTop: 8 }}>
                        {formatDate(c.created_at)}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        minWidth: 160,
                      }}
                    >
                      <select
                        value={c.status}
                        onChange={(e) =>
                          updateContactStatus(c.id, e.target.value)
                        }
                        style={{
                          padding: "8px 12px",
                          borderRadius: 8,
                          border: "1px solid #e2e8f0",
                          background: "#f8fafc",
                          cursor: "pointer",
                          fontWeight: 600,
                          color: statusColors[c.status] || "#667eea",
                        }}
                      >
                        <option value="new">🆕 Нова</option>
                        <option value="in_progress">⚙️ В роботі</option>
                        <option value="done">✅ Готово</option>
                      </select>
                      <button
                        onClick={() => deleteContact(c.id)}
                        style={{
                          padding: "8px 12px",
                          borderRadius: 8,
                          border: "none",
                          background: "#fee2e2",
                          color: "#ef4444",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
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
                onClick={() => setShowOrderForm(!showOrderForm)}
                style={{
                  padding: "12px 24px",
                  borderRadius: 10,
                  border: "none",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "white",
                  fontWeight: 700,
                  cursor: "pointer",
                  marginBottom: 20,
                  fontSize: 15,
                }}
              >
                ➕ Створити замовлення для клієнта
              </button>

              {/* Форма створення */}
              {showOrderForm && (
                <div
                  style={{
                    background: "white",
                    borderRadius: 12,
                    padding: 24,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
                    marginBottom: 24,
                    border: "2px solid #667eea",
                  }}
                >
                  <h3 style={{ fontWeight: 700, marginBottom: 16 }}>
                    📦 Нове замовлення
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div>
                      <label
                        style={{
                          fontSize: 13,
                          color: "#666",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        Клієнт *
                      </label>
                      <select
                        value={newOrder.client_id}
                        onChange={(e) =>
                          setNewOrder({
                            ...newOrder,
                            client_id: e.target.value,
                          })
                        }
                        style={formInputStyle}
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
                      <label
                        style={{
                          fontSize: 13,
                          color: "#666",
                          display: "block",
                          marginBottom: 4,
                        }}
                      >
                        Послуга *
                      </label>
                      <select
                        value={newOrder.service}
                        onChange={(e) =>
                          setNewOrder({ ...newOrder, service: e.target.value })
                        }
                        style={formInputStyle}
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

                  <div style={{ marginBottom: 12 }}>
                    <label
                      style={{
                        fontSize: 13,
                        color: "#666",
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      Повідомлення для клієнта
                    </label>
                    <textarea
                      value={newOrder.notes}
                      onChange={(e) =>
                        setNewOrder({ ...newOrder, notes: e.target.value })
                      }
                      placeholder="Наприклад: Ваш проєкт прийнятий в роботу, очікуйте результат протягом 3 днів..."
                      rows={3}
                      style={{ ...formInputStyle, resize: "vertical" }}
                    />
                  </div>

                  <div style={{ marginBottom: 16 }}>
                    <label
                      style={{
                        fontSize: 13,
                        color: "#666",
                        display: "block",
                        marginBottom: 4,
                      }}
                    >
                      Посилання на файл (Google Drive, Dropbox...)
                    </label>
                    <input
                      type="url"
                      value={newOrder.file_url}
                      onChange={(e) =>
                        setNewOrder({ ...newOrder, file_url: e.target.value })
                      }
                      placeholder="https://drive.google.com/..."
                      style={formInputStyle}
                    />
                  </div>

                  <div style={{ display: "flex", gap: 8 }}>
                    <button
                      onClick={createOrder}
                      style={{
                        padding: "10px 24px",
                        borderRadius: 8,
                        border: "none",
                        background: "#22c55e",
                        color: "white",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      ✅ Створити
                    </button>
                    <button
                      onClick={() => setShowOrderForm(false)}
                      style={{
                        padding: "10px 24px",
                        borderRadius: 8,
                        border: "1px solid #e2e8f0",
                        background: "white",
                        color: "#666",
                        fontWeight: 600,
                        cursor: "pointer",
                      }}
                    >
                      Скасувати
                    </button>
                  </div>
                </div>
              )}

              {/* Список замовлень */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {orders.length === 0 && (
                  <p
                    style={{ color: "#666", textAlign: "center", padding: 40 }}
                  >
                    Замовлень поки немає — створи перше!
                  </p>
                )}
                {orders.map((o) => (
                  <div
                    key={o.id}
                    style={{
                      background: "white",
                      borderRadius: 12,
                      padding: 20,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                      borderLeft: `4px solid ${statusColors[o.status]}`,
                    }}
                  >
                    {editingOrder?.id === o.id ? (
                      <div>
                        <h4 style={{ fontWeight: 700, marginBottom: 12 }}>
                          ✏️ Редагування: {o.client_name} — {o.service}
                        </h4>

                        <div style={{ marginBottom: 10 }}>
                          <label
                            style={{
                              fontSize: 13,
                              color: "#666",
                              display: "block",
                              marginBottom: 4,
                            }}
                          >
                            Статус
                          </label>
                          <select
                            value={editingOrder.status}
                            onChange={(e) =>
                              setEditingOrder({
                                ...editingOrder,
                                status: e.target.value as Order["status"],
                              })
                            }
                            style={formInputStyle}
                          >
                            <option value="new">🆕 Нова</option>
                            <option value="in_progress">⚙️ В роботі</option>
                            <option value="review">👀 На перевірці</option>
                            <option value="done">✅ Готово</option>
                          </select>
                        </div>

                        <div style={{ marginBottom: 10 }}>
                          <label
                            style={{
                              fontSize: 13,
                              color: "#666",
                              display: "block",
                              marginBottom: 4,
                            }}
                          >
                            Повідомлення для клієнта
                          </label>
                          <textarea
                            value={editingOrder.notes || ""}
                            onChange={(e) =>
                              setEditingOrder({
                                ...editingOrder,
                                notes: e.target.value,
                              })
                            }
                            rows={3}
                            style={{ ...formInputStyle, resize: "vertical" }}
                          />
                        </div>

                        <div style={{ marginBottom: 16 }}>
                          <label
                            style={{
                              fontSize: 13,
                              color: "#666",
                              display: "block",
                              marginBottom: 4,
                            }}
                          >
                            Посилання на файл
                          </label>
                          <input
                            type="url"
                            value={editingOrder.file_url || ""}
                            onChange={(e) =>
                              setEditingOrder({
                                ...editingOrder,
                                file_url: e.target.value,
                              })
                            }
                            placeholder="https://drive.google.com/..."
                            style={formInputStyle}
                          />
                        </div>

                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={updateOrder}
                            style={{
                              padding: "10px 24px",
                              borderRadius: 8,
                              border: "none",
                              background: "#22c55e",
                              color: "white",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            💾 Зберегти
                          </button>
                          <button
                            onClick={() => setEditingOrder(null)}
                            style={{
                              padding: "10px 24px",
                              borderRadius: 8,
                              border: "1px solid #e2e8f0",
                              background: "white",
                              color: "#666",
                              fontWeight: 600,
                              cursor: "pointer",
                            }}
                          >
                            Скасувати
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                          flexWrap: "wrap",
                          gap: 12,
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontWeight: 700,
                              fontSize: 16,
                              marginBottom: 4,
                            }}
                          >
                            👤 {o.client_name} —{" "}
                            <span style={{ color: "#667eea" }}>
                              {o.service}
                            </span>
                          </p>
                          <p
                            style={{
                              color: "#666",
                              fontSize: 13,
                              marginBottom: 4,
                            }}
                          >
                            📧 {o.client_email}
                          </p>
                          {o.notes && (
                            <p
                              style={{
                                color: "#444",
                                fontSize: 14,
                                marginTop: 6,
                                fontStyle: "italic",
                              }}
                            >
                              💬 {o.notes}
                            </p>
                          )}
                          {o.file_url && (
                            <a
                              href={o.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                color: "#667eea",
                                fontSize: 13,
                                display: "block",
                                marginTop: 4,
                              }}
                            >
                              📎 Файл для клієнта
                            </a>
                          )}
                          <p
                            style={{
                              color: "#aaa",
                              fontSize: 12,
                              marginTop: 6,
                            }}
                          >
                            {formatDate(o.created_at)}
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            minWidth: 160,
                          }}
                        >
                          <span
                            style={{
                              padding: "6px 12px",
                              borderRadius: 20,
                              textAlign: "center",
                              background: statusColors[o.status],
                              color: "white",
                              fontWeight: 600,
                              fontSize: 13,
                            }}
                          >
                            {orderStatusLabels[o.status]}
                          </span>
                          <button
                            onClick={() => setEditingOrder(o)}
                            style={{
                              padding: "8px 12px",
                              borderRadius: 8,
                              border: "none",
                              background: "#e0e7ff",
                              color: "#667eea",
                              cursor: "pointer",
                              fontWeight: 600,
                            }}
                          >
                            ✏️ Редагувати
                          </button>
                          <button
                            onClick={() => deleteOrder(o.id)}
                            style={{
                              padding: "8px 12px",
                              borderRadius: 8,
                              border: "none",
                              background: "#fee2e2",
                              color: "#ef4444",
                              cursor: "pointer",
                              fontWeight: 600,
                            }}
                          >
                            🗑 Видалити
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ─── КОРИСТУВАЧІ ─── */}
          {tab === "users" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {users.map((u) => (
                <div
                  key={u.id}
                  style={{
                    background: "white",
                    borderRadius: 12,
                    padding: 20,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <p
                      style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}
                    >
                      {u.name}
                    </p>
                    <p style={{ color: "#666", fontSize: 13 }}>📧 {u.email}</p>
                    <p style={{ color: "#aaa", fontSize: 12, marginTop: 4 }}>
                      {formatDate(u.created_at)}
                    </p>
                  </div>
                  <span
                    style={{
                      background: u.role === "admin" ? "#7c3aed" : "#667eea",
                      color: "white",
                      padding: "4px 12px",
                      borderRadius: 20,
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
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
