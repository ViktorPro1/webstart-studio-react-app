import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

interface Props {
  children: React.ReactNode;
  adminOnly?: boolean;
}

const ProtectedRoute: React.FC<Props> = ({ children, adminOnly = false }) => {
  const { user, isLoading } = useAuth();

  if (isLoading)
    return (
      <div style={{ padding: 40, textAlign: "center" }}>Завантаження...</div>
    );
  if (!user) return <Navigate to="/" replace />;
  if (adminOnly && user.role !== "admin") return <Navigate to="/" replace />;

  return <>{children}</>;
};

export default ProtectedRoute;
