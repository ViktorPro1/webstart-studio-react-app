// src/components/Layout/Layout.jsx
import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children, isSidebarOpen, toggleSidebar }) => {
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
