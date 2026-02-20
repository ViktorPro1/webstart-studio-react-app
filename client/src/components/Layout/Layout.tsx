import React from 'react';
import type { ReactNode } from 'react';

import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className="page-content">
          {children}
        </main>
        <Footer isSidebarOpen={isSidebarOpen} />
      </div>
    </div>
  );
};

export default Layout;

