/**
 * AppRoutesWrapper.jsx
 *
 * Обгортка для маршрутизації додатку.
 * Відповідає за:
 * - Підключення основного Layout компонента, який містить шапку, сайдбар та футер.
 * - Управління станом відкриття/закриття бокового меню (sidebar).
 * - Рендеринг усіх маршрутів через компонент AppRoutes.
 *
 * Використовується для централізованого контролю навігації та загального UI обгортання.
 */



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
