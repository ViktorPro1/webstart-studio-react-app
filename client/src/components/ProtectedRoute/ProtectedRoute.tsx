import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useBackendStatus } from "../../backend-status/useBackendStatus";

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
  requiresBackend?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({
  children,
  adminOnly = false,
  requiresBackend = false,
}) => {
  const { user, isLoading } = useAuth();
  const backendStatus = useBackendStatus();

  if (isLoading)
    return (
      <div style={{ padding: 40, textAlign: "center" }}>Завантаження...</div>
    );

  if (!user) return <Navigate to="/" replace />;
  if (adminOnly && user.role !== "admin") return <Navigate to="/" replace />;

  // Бекенд недоступний → сторінка-заглушка
  if (requiresBackend && backendStatus === "offline")
    return <Navigate to="/service-unavailable" replace />;

  // Ще перевіряємо статус → нічого не показуємо
  if (requiresBackend && backendStatus === "checking") return null;

  return <>{children}</>;
};

export default ProtectedRoute;
