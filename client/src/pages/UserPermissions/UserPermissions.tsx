import React from "react";
import "./UserPermissions.css";
import "./UserPermissions.mobile.css";

interface Permission {
  action: string;
  authorized: boolean;
  unauthorized: boolean;
}

const permissions: Permission[] = [
  { action: "Перегляд тем", authorized: true, unauthorized: true },
  { action: "Створення тем", authorized: true, unauthorized: false },
  { action: "Відповідь", authorized: true, unauthorized: false },
];

const UserPermissions: React.FC = () => {
  return (
    <div className="permissions-page">
      <h2 className="permissions-title">📌 Права користувачів</h2>
      <p className="permissions-subtitle">
        Тут показано, які дії доступні авторизованим та не авторизованим
        користувачам.
      </p>

      <div className="permissions-table-wrapper">
        <table className="permissions-table">
          <thead>
            <tr>
              <th>Дія</th>
              <th>Авторизований</th>
              <th>Не авторизований</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((p, i) => (
              <tr key={i}>
                <td>{p.action}</td>
                <td className={p.authorized ? "allowed" : "denied"}>
                  {p.authorized ? "✅" : "❌"}
                </td>
                <td className={p.unauthorized ? "allowed" : "denied"}>
                  {p.unauthorized ? "✅" : "❌"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserPermissions;
