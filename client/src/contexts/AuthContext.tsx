import React, { createContext, useContext, useState, useEffect } from 'react';
import API from '../api/api';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [isLoading, setIsLoading] = useState(true);

  // Перевіряємо токен при завантаженні
  useEffect(() => {
    const checkToken = async () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        try {
          API.defaults.headers.common['Authorization'] = `Bearer ${savedToken}`;
          const response = await API.get('/auth/me');
          setUser(response.data);
          setToken(savedToken);
        } catch {
          localStorage.removeItem('token');
          setToken(null);
        }
      }
      setIsLoading(false);
    };
    checkToken();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await API.post('/auth/login', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setToken(token);
    setUser(user);
  };

  const register = async (name: string, email: string, password: string) => {
    const response = await API.post('/auth/register', { name, email, password });
    const { token, user } = response.data;
    localStorage.setItem('token', token);
    API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete API.defaults.headers.common['Authorization'];
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};