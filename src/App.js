import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'; // ← Додай імпорт
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import DjonAssistant from './components/DjonAssistant/DjonAssistant';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import CookieConsent from './components/CookieConsent';
// import UpdateNotification from './components/UpdateNotification';
import { initGoogleAnalytics, trackPageView } from './utils/analytics';
import { initClarity } from './utils/clarity';
import './i18n';
import './App.css';

// Компонент для трекінгу сторінок
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Ініціалізуємо аналітику один раз при завантаженні
  useEffect(() => {
    initGoogleAnalytics();
    initClarity();
  }, []);

  return (
    <ThemeProvider> {/* ← Обгорни ВСЕ в ThemeProvider */}
      <div className="app">
        {/* Трекер аналітики */}
        <AnalyticsTracker />

        {/* Сповіщення про оновлення */}
        {/* <UpdateNotification /> */}

        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="app-content">
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          {/* Breadcrumbs — відображається тільки на мобільних */}
          <Breadcrumbs />

          <main className={`main-wrapper ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
            <AppRoutes />
          </main>
          <Footer isSidebarOpen={isSidebarOpen} />
        </div>
        <DjonAssistant />
        <CookieConsent />
      </div>
    </ThemeProvider>
  );
}

export default App;