import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { useLocation } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import { initGoogleAnalytics, trackPageView } from './utils/analytics';
import { initClarity } from './utils/clarity';
import './i18n';
import './App.css';
import './components/Layout/Layout.css';

// --- ЛІНИВИЙ ІМПОРТ (Оптимізація JavaScript) ---
// Ці компоненти тепер не гальмують завантаження головної сторінки
const DjonAssistant = lazy(() => import('./components/DjonAssistant/DjonAssistant'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const UpdateNotification = lazy(() => import('./components/UpdateNotification'));
const ChristmasDecorations = lazy(() => import('./components/NewYear/ChristmasDecorations'));

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

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
    // Відкладаємо важку аналітику на 4 секунди. 
    // Користувач вже побачить сайт, а Google не зарахує цей код як "невикористаний" на старті.
    const timer = setTimeout(() => {
      initGoogleAnalytics();
      initClarity();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const showChristmasDecorations = () => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    return (month === 11 && day >= 15) || (month === 0 && day <= 15);
  };

  return (
    <ThemeProvider>
      <AnalyticsTracker />

      {/* Suspense fallback={null} гарантує, що якщо компонент ще не завантажився, 
          сайт не впаде, а просто нічого не покаже в тому місці на секунду */}
      <Suspense fallback={null}>
        {showChristmasDecorations() && <ChristmasDecorations />}
        <UpdateNotification />

        <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
          <AppRoutes />
        </Layout>

        <DjonAssistant />
        <CookieConsent />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;