// src/App.jsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import DjonAssistant from './components/DjonAssistant/DjonAssistant';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import CookieConsent from './components/CookieConsent';
import UpdateNotification from './components/UpdateNotification';
import ChristmasDecorations from './components/NewYear/ChristmasDecorations';
import { initGoogleAnalytics, trackPageView } from './utils/analytics';
import { initClarity } from './utils/clarity';
import './i18n';
import './App.css';
import './components/Layout/Layout.css';

// Трекінг сторінок
function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

// Головний Layout
const Layout = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Breadcrumbs />
        <main className="page-content">{children}</main>
        <Footer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    initGoogleAnalytics();
    initClarity();
  }, []);

  // Функція для перевірки чи показувати новорічні декорації
  const showChristmasDecorations = () => {
    const now = new Date();
    const month = now.getMonth(); // 0-11 (0 = Січень, 11 = Грудень)
    const day = now.getDate();

    // Показувати з 15 грудня до 15 січня
    return (month === 11 && day >= 15) || (month === 0 && day <= 15);
  };

  return (
    <ThemeProvider>
      {showChristmasDecorations() && <ChristmasDecorations />}
      <AnalyticsTracker />
      <UpdateNotification />
      <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
        <AppRoutes />
      </Layout>
      <DjonAssistant />
      <CookieConsent />
    </ThemeProvider>
  );
}

export default App;