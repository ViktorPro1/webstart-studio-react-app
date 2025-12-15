// src/data/menuData.js

import {
    Boxes,
    Palette,
    Settings,
    Sparkles,
    BarChart,
    BarChart2,
    XCircle,
    HelpCircle,
    Lock,
    Search,
    Megaphone,
    Bot,
    Layout,
    FileText,
    Code,
    Users,
    MessageCircle,
    Code2,
    Award,
    Mail
} from 'lucide-react';


/* === ОСНОВНЕ МЕНЮ === */
export const servicesItems = [
    {
        id: 'services',
        icon: Boxes,
        label: 'Що ми створюємо',
        submenu: [
            { path: '/services/web-apps', label: 'Веб-додатки' },
            { path: '/services/seo', label: 'SEO-оптимізація' },
            { path: '/services/social-media', label: 'Інтеграція з соцмережами' },
            { path: '/services/animations', label: 'Динамічні анімації' },
            { path: '/services/ecommerce', label: 'Інтернет-магазини' },
            { path: '/services/blog', label: 'Блоги та новини' },
            { path: '/services/personalized-landing', label: 'Персоналізовані лендінги' }
        ]
    },

    {
        id: 'templates',
        icon: Palette,
        label: 'Готові макети',
        submenu: [
            { path: '/templates/portfolio', label: 'Дизайн портфоліо' },
            { path: '/templates/resume', label: 'Електронне резюме' },
            { path: '/templates/landing', label: 'Односторінкові сайти' }
        ]
    },

    { id: 'technical', path: '/technical-details', icon: Settings, label: 'Технічні можливості' },

    {
        id: 'generators',
        icon: Sparkles,
        label: 'Генератори',
        submenu: [
            { path: '/generators/portfolio-text', label: 'Генератор текстів портфоліо' },
            { path: '/generators/project-checker', label: 'Перевірка проєктів' },
            { path: '/generators/resume-structure', label: 'Структура резюме' }
        ]
    },

    { id: 'comparison', path: '/platform-comparison', icon: BarChart, label: 'Порівняння платформ' },
    { id: 'diyvsus', path: '/diy-vs-us', icon: BarChart2, label: 'DIY vs З нами' },
    { id: 'common-mistakes', path: '/common-mistakes', icon: XCircle, label: 'Часті помилки' },
    { id: 'faq', path: '/faq', icon: HelpCircle, label: 'FAQ' }
];

/* === ДОДАТКОВЕ === */
export const additionalItems = [
    { id: 'security', path: '/security-tips', icon: Lock, label: 'Кібербезпека' },

    {
        id: 'google-ads',
        icon: Search,
        label: 'Реклама в Google',
        submenu: [
            { path: '/google-ads/calculator', label: 'Калькулятор бюджету' },
            { path: '/google-ads/comparison', label: 'Порівняння' },
            { path: '/google-ads/glossary', label: 'Глосарій' },
            { path: '/google-ads/generator', label: 'Генератор' },
            { path: '/google-ads/keywords', label: 'Ключові слова' }
        ]
    },

    {
        id: 'facebook-ads',
        icon: Megaphone,
        label: 'Facebook Ads',
        submenu: [
            { path: '/facebook-ads/target-advertising', label: 'Таргетована реклама' },
            { path: '/facebook-ads/ad-calculator', label: 'Калькулятор реклами' },
            { path: '/facebook-ads/target-explanation', label: 'Пояснення таргетингу' },
            { path: '/facebook-ads/utm-generator', label: 'UTM генератор' }
        ]
    },

    {
        id: 'ai-services',
        icon: Bot,
        label: 'AI Сервіси',
        submenu: [
            { path: '/ai-automation', label: 'AI Автоматизація' },
            { path: '/ai-prompting', label: 'AI Промптинг' },
            { path: '/prompt-editor', label: 'Персональний промптинг' },
            { path: '/prompt-studio', label: 'AI Prompt Studio' },
            { path: '/prompt-showcase', label: 'Наші Роботи' }
        ]
    },

    { id: 'canvaservices', path: '/canva-services', icon: Layout, label: 'Банери та Шаблони' },
    { id: 'poland-tax', path: '/poland-tax', icon: FileText, label: 'Повернення податків з Польщі' },
    { id: 'pc-service', path: '/pc-service', icon: Code, label: 'Чистка ПК віддалено' }
];

/* === ПРО НАС === */
export const aboutItems = [
    { id: 'about', path: '/about', icon: Users, label: 'Про нас' },
    { id: 'testimonials', path: '/testimonials', icon: MessageCircle, label: 'Відгуки' },
    { id: 'skills', path: '/skills', icon: Code2, label: 'Наші навички' },
    { id: 'achievements', path: '/achievements', icon: Award, label: 'Досягнення' },
    { id: 'contact', path: '/contact', icon: Mail, label: 'Контакти' }
];
