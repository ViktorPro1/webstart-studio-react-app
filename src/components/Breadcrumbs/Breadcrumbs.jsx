import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const parts = location.pathname.split('/').filter(Boolean);

    const crumbs = parts.map((part, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/');
        const label = decodeURI(part).charAt(0).toUpperCase() + decodeURI(part).slice(1);

        return (
            <span key={path} className="Breadcrumbs-crumb">
                <ChevronRight size={14} />
                <Link to={path} className="Breadcrumbs-link">
                    {label}
                </Link>
            </span>
        );
    });

    return (
        <div className="Breadcrumbs">
            <div className="Breadcrumbs-inner">
                <Link to="/" className="Breadcrumbs-link">
                    Головна
                </Link>
                {crumbs}
            </div>
        </div>
    );
};

export default Breadcrumbs;
