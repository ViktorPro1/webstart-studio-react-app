// src/routes/AppRoutesWrapper.jsx
import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import AppRoutes from './AppRoutes';

const AppRoutesWrapper = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <Layout isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
            <AppRoutes />
        </Layout>
    );
};

export default AppRoutesWrapper;
