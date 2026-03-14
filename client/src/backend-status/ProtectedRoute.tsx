import React from "react";
import { Navigate } from "react-router-dom";
import { useBackendStatus } from "./useBackendStatus";

interface ProtectedRouteProps {
  children: React.ReactNode;
  /** Якщо true — маршрут вимагає живого бекенду (кабінет, чат, форум) */
  requiresBackend?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiresBackend = false,
}) => {
  const backendStatus = useBackendStatus();

  // Бекенд недоступний → сторінка-заглушка
  if (requiresBackend && backendStatus === "offline") {
    return <Navigate to="/service-unavailable" replace />;
  }

  // Ще перевіряємо — нічого не показуємо
  if (requiresBackend && backendStatus === "checking") {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
