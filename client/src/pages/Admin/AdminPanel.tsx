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

type Tab = "contacts" | "users";

const statusLabels: Record<string, string> = {
  new: "🆕 Нова",
  in_progress: "⚙️ В роботі",
  done: "✅ Готово",
};

const statusColors: Record<string, string> = {
  new: "#3b82f6",
  in_progress: "#f59e0b",
  done: "#22c55e",
};

const AdminPanel: React.FC = () => {
  const [tab, setTab] = useState<Tab>("contacts");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    fetchContacts();
    fetchUsers();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/admin/contacts");
      setContacts(res.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch (e) {
      console.error(e);
    }
  };

  const updateStatus = async (id: number, status: string) => {
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

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

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
        Управління заявками та користувачами
      </p>

      {/* Статистика */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 16,
          marginBottom: 32,
        }}
      >
        {[
          { label: "Всього заявок", value: contacts.length, color: "#667eea" },
          {
            label: "В роботі",
            value: contacts.filter((c) => c.status === "in_progress").length,
            color: "#f59e0b",
          },
          {
            label: "Готово",
            value: contacts.filter((c) => c.status === "done").length,
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
        {(["contacts", "users"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              background: tab === t ? "#667eea" : "#f1f5f9",
              color: tab === t ? "white" : "#64748b",
              fontWeight: 600,
            }}
          >
            {t === "contacts" ? "📋 Заявки" : "👥 Користувачі"}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ textAlign: "center", padding: 40, color: "#666" }}>
          Завантаження...
        </p>
      ) : (
        <>
          {/* ЗАЯВКИ */}
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
                    borderLeft: `4px solid ${statusColors[c.status]}`,
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
                        onChange={(e) => updateStatus(c.id, e.target.value)}
                        style={{
                          padding: "8px 12px",
                          borderRadius: 8,
                          border: "1px solid #e2e8f0",
                          background: "#f8fafc",
                          cursor: "pointer",
                          fontWeight: 600,
                          color: statusColors[c.status],
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

          {/* КОРИСТУВАЧІ */}
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
