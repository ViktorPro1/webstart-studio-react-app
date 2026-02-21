import React, { useContext, useState, useEffect } from "react";
import type { ChangeEvent, KeyboardEvent, FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, Search, Moon, Check, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";
import { searchIndex } from "../../data/searchIndex";
import "./Header.css";
import "./Header.mobile.css";

interface HeaderProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

interface SearchItem {
  label: string;
  path: string;
}

type AuthMode = "info" | "login" | "register";

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const { t, i18n } = useTranslation();
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { user, login, register, logout } = useAuth();
  const navigate = useNavigate();

  const [query, setQuery] = useState<string>("");
  const [showPortalPopup, setShowPortalPopup] = useState<boolean>(false);
  const [authMode, setAuthMode] = useState<AuthMode>("info");
  const [authError, setAuthError] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // ─── Слухач події від Sidebar ───
  useEffect(() => {
    const handler = () => {
      setShowPortalPopup(true);
      setAuthMode("info");
      setAuthError("");
    };
    window.addEventListener("openAuthModal", handler);
    return () => window.removeEventListener("openAuthModal", handler);
  }, []);

  const closePopup = () => {
    setShowPortalPopup(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    const value = query.trim().toLowerCase();
    if (!value) return;
    const result = (searchIndex as SearchItem[]).find((item) =>
      item.label.toLowerCase().includes(value),
    );
    if (result) {
      navigate(result.path);
      setQuery("");
    }
  };

  const goToContact = () => navigate("/contact");

  const togglePortalPopup = () => {
    const next = !showPortalPopup;
    setShowPortalPopup(next);
    setAuthMode("info");
    setAuthError("");
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      await login(loginData.email, loginData.password);
      closePopup();
      setLoginData({ email: "", password: "" });
    } catch (error: any) {
      setAuthError(error.response?.data?.error || "Помилка входу");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError("");
    try {
      await register(
        registerData.name,
        registerData.email,
        registerData.password,
      );
      closePopup();
      setRegisterData({ name: "", email: "", password: "" });
    } catch (error: any) {
      setAuthError(error.response?.data?.error || "Помилка реєстрації");
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    closePopup();
  };

  return (
    <>
      <header className={`header ${isSidebarOpen ? "" : "full-width"}`}>
        <div className="header-left">
          <button
            className="burger-menu"
            onClick={toggleSidebar}
            aria-label={
              isSidebarOpen ? t("header.closeMenu") : t("header.openMenu")
            }
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="search-bar">
            <Search size={20} color="#667eea" />
            <input
              type="search"
              id="header-search"
              name="search"
              placeholder={t("header.search")}
              value={query}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
              onKeyDown={handleSearch}
            />
          </div>
        </div>

        <div className="header-right">
          <select
            id="language-selector"
            name="language"
            value={i18n.language}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              changeLanguage(e.target.value)
            }
            className="language-selector"
            aria-label={t("header.selectLanguage")}
          >
            <option value="ua">🇺🇦 UA</option>
            <option value="en">🇬🇧 EN</option>
            <option value="pl">🇵🇱 PL</option>
            <option value="cs">🇨🇿 CS</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="de">🇩🇪 DE</option>
          </select>

          <button className="header-btn" onClick={goToContact}>
            {t("header.orderProject")}
          </button>

          <button
            className="header-theme-btn"
            onClick={togglePortalPopup}
            aria-label="Особистий кабінет"
            style={{ position: "relative" }}
          >
            <User size={20} />
            {user && (
              <span
                style={{
                  position: "absolute",
                  top: -4,
                  right: -4,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "2px solid white",
                }}
              />
            )}
          </button>

          <button
            className="header-theme-btn"
            onClick={toggleTheme}
            aria-label={
              darkMode ? t("header.switchToLight") : t("header.switchToDark")
            }
          >
            {darkMode ? <Check size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {showPortalPopup && (
        <>
          <div className="portal-popup-overlay" onClick={closePopup} />
          <div className="portal-popup">
            <button
              className="portal-popup-close"
              onClick={closePopup}
              aria-label="Закрити"
            >
              <X size={20} />
            </button>

            <div className="portal-popup-content">
              <div className="portal-popup-icon">
                <User size={40} />
              </div>

              {/* ✅ ЗАЛОГІНЕНИЙ */}
              {user ? (
                <>
                  <h2 className="portal-popup-title">
                    👋 Вітаємо, {user.name}!
                  </h2>
                  <p
                    style={{
                      textAlign: "center",
                      color: "#666",
                      marginBottom: 8,
                    }}
                  >
                    {user.email}
                  </p>
                  <p style={{ textAlign: "center", marginBottom: 16 }}>
                    <span
                      style={{
                        background:
                          user.role === "admin" ? "#7c3aed" : "#667eea",
                        color: "white",
                        padding: "2px 10px",
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    >
                      {user.role === "admin" ? "👑 Адмін" : "👤 Клієнт"}
                    </span>
                  </p>

                  {/* ─── АДМІН ─── */}
                  {user.role === "admin" && (
                    <button
                      className="portal-popup-btn primary"
                      onClick={() => {
                        navigate("/admin");
                        closePopup();
                      }}
                      style={{ marginBottom: 8 }}
                    >
                      👑 Адмін-панель
                    </button>
                  )}

                  {/* ─── КЛІЄНТ ─── */}
                  {user.role === "client" && (
                    <>
                      <button
                        className="portal-popup-btn primary"
                        onClick={() => {
                          navigate("/my-account");
                          closePopup();
                        }}
                        style={{ marginBottom: 8 }}
                      >
                        📋 Моє замовлення
                      </button>
                      <button
                        className="portal-popup-btn secondary"
                        onClick={() => {
                          navigate("/messages");
                          closePopup();
                        }}
                        style={{ marginBottom: 8 }}
                      >
                        💬 Написати команді
                      </button>
                    </>
                  )}

                  <button
                    className="portal-popup-btn secondary"
                    onClick={handleLogout}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    <LogOut size={16} /> Вийти
                  </button>
                </>
              ) : (
                <>
                  {/* ─── INFO режим ─── */}
                  {authMode === "info" && (
                    <>
                      <h2 className="portal-popup-title">
                        🔐 Особистий кабінет
                      </h2>

                      <p
                        style={{
                          textAlign: "center",
                          color: "#666",
                          fontSize: 14,
                          marginBottom: 16,
                        }}
                      >
                        Увійди або зареєструйся щоб отримати доступ до свого
                        проєкту
                      </p>

                      <div className="portal-popup-section">
                        <ul className="portal-popup-features">
                          <li>✅ Відстежувати статус свого проєкту</li>
                          <li>✅ Завантажувати файли від нас</li>
                          <li>✅ Спілкуватись напряму з командою</li>
                          <li>✅ Бачити всі етапи роботи</li>
                        </ul>
                      </div>

                      <div className="portal-popup-buttons">
                        <button
                          className="portal-popup-btn primary"
                          onClick={() => setAuthMode("login")}
                        >
                          🔑 Увійти
                        </button>
                        <button
                          className="portal-popup-btn secondary"
                          onClick={() => setAuthMode("register")}
                        >
                          📝 Реєстрація
                        </button>
                      </div>

                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "#667eea",
                          cursor: "pointer",
                          marginTop: 8,
                          width: "100%",
                          fontSize: 13,
                        }}
                        onClick={() => {
                          closePopup();
                          navigate("/contact");
                        }}
                      >
                        💬 Є питання? Напишіть нам
                      </button>
                    </>
                  )}

                  {/* ─── LOGIN форма ─── */}
                  {authMode === "login" && (
                    <>
                      <h2 className="portal-popup-title">🔑 Вхід</h2>
                      {authError && (
                        <p
                          style={{
                            color: "#ef4444",
                            textAlign: "center",
                            marginBottom: 8,
                            fontSize: 14,
                          }}
                        >
                          {authError}
                        </p>
                      )}
                      <form onSubmit={handleLogin} style={{ width: "100%" }}>
                        <input
                          type="email"
                          placeholder="Email"
                          value={loginData.email}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              email: e.target.value,
                            })
                          }
                          required
                          style={inputStyle}
                        />
                        <input
                          type="password"
                          placeholder="Пароль"
                          value={loginData.password}
                          onChange={(e) =>
                            setLoginData({
                              ...loginData,
                              password: e.target.value,
                            })
                          }
                          required
                          style={inputStyle}
                        />
                        <button
                          type="submit"
                          className="portal-popup-btn primary"
                          disabled={authLoading}
                          style={{ width: "100%", marginBottom: 8 }}
                        >
                          {authLoading ? "Входжу..." : "🔑 Увійти"}
                        </button>
                      </form>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "#667eea",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                        onClick={() => {
                          setAuthMode("info");
                          setAuthError("");
                        }}
                      >
                        ← Назад
                      </button>
                    </>
                  )}

                  {/* ─── REGISTER форма ─── */}
                  {authMode === "register" && (
                    <>
                      <h2 className="portal-popup-title">📝 Реєстрація</h2>
                      {authError && (
                        <p
                          style={{
                            color: "#ef4444",
                            textAlign: "center",
                            marginBottom: 8,
                            fontSize: 14,
                          }}
                        >
                          {authError}
                        </p>
                      )}
                      <form onSubmit={handleRegister} style={{ width: "100%" }}>
                        <input
                          type="text"
                          placeholder="Ваше ім'я"
                          value={registerData.name}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              name: e.target.value,
                            })
                          }
                          required
                          style={inputStyle}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={registerData.email}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              email: e.target.value,
                            })
                          }
                          required
                          style={inputStyle}
                        />
                        <input
                          type="password"
                          placeholder="Пароль (мінімум 6 символів)"
                          value={registerData.password}
                          onChange={(e) =>
                            setRegisterData({
                              ...registerData,
                              password: e.target.value,
                            })
                          }
                          required
                          style={inputStyle}
                        />
                        <button
                          type="submit"
                          className="portal-popup-btn primary"
                          disabled={authLoading}
                          style={{ width: "100%", marginBottom: 8 }}
                        >
                          {authLoading ? "Реєструю..." : "📝 Зареєструватись"}
                        </button>
                      </form>
                      <button
                        style={{
                          background: "none",
                          border: "none",
                          color: "#667eea",
                          cursor: "pointer",
                          fontSize: 14,
                        }}
                        onClick={() => {
                          setAuthMode("info");
                          setAuthError("");
                        }}
                      >
                        ← Назад
                      </button>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  marginBottom: 10,
  border: "1px solid #e2e8f0",
  borderRadius: 8,
  fontSize: 14,
  boxSizing: "border-box",
  outline: "none",
};

export default Header;
