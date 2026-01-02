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
import ReadingProgress from './components/UI/ReadingProgress';

// --- ЛІНИВИЙ ІМПОРТ ---
const DjonAssistant = lazy(() => import('./components/DjonAssistant/DjonAssistant'));
const CookieConsent = lazy(() => import('./components/CookieConsent'));
const UpdateNotification = lazy(() => import('./components/UpdateNotification'));
const ChristmasDecorations = lazy(() => import('./components/NewYear/ChristmasDecorations'));
const DynamicMeta = lazy(() => import('./SEO/DynamicMeta'));
const WelcomeModal = lazy(() => import('./components/UI/WelcomeModal'));
const ExitIntentModal = lazy(() => import('./components/UI/ExitIntentModal'));
const CopyProtectionModal = lazy(() => import('./components/UI/CopyProtectionModal'));
const SocialProofNotification = lazy(() => import('./components/UI/SocialProofNotification'));

interface LayoutProps {
  children: React.ReactNode;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  return null;
}

const Layout: React.FC<LayoutProps> = ({ children, isSidebarOpen, toggleSidebar }) => {
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
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [showWelcome, setShowWelcome] = useState<boolean>(false);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      initGoogleAnalytics();
      initClarity();
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(true);
    }, 500);
    return () => clearTimeout(welcomeTimer);
  }, []);

  const showChristmasDecorations = (): boolean => {
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();
    return (month === 11 && day >= 15) || (month === 0 && day <= 15);
  };

  const handleCloseWelcome = () => {
    setShowWelcome(false);
  };

  return (
    <ThemeProvider>
      <ReadingProgress />

      <Suspense fallback={null}>
        <DynamicMeta />
      </Suspense>

      <AnalyticsTracker />

      <Suspense fallback={null}>
        <WelcomeModal 
          isOpen={showWelcome} 
          onClose={handleCloseWelcome}
          autoCloseDuration={4000}
        />

        <ExitIntentModal enabled={true} />

        <CopyProtectionModal enabled={true} showShareButton={true} />

        <SocialProofNotification enabled={true} />

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