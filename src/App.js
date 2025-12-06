import React, { useState } from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import DjonAssistant from './components/DjonAssistant/DjonAssistant';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="app-content">
        <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        <main className={`main-wrapper ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
          <AppRoutes />
        </main>
        <Footer isSidebarOpen={isSidebarOpen} />
      </div>
      <DjonAssistant />
    </div>
  );
}

export default App;