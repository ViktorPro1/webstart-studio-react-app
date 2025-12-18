import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumbs.css';

// Словник для перекладу URL на українські назви
const pathToUkrainian = {
    'for-whom': 'Для кого ми',
    'services': 'Що ми створюємо',
    'web-apps': 'Веб-додатки',
    'seo': 'SEO-оптимізація',
    'social-media': 'Інтеграція з соцмережами',
    'animations': 'Динамічні анімації',
    'ecommerce': 'Інтернет-магазини',
    'blog': 'Блоги та новини',
    'personalized-landing': 'Персоналізовані лендінги',
    'templates': 'Готові макети',
    'portfolio': 'Дизайн портфоліо',
    'resume': 'Електронне резюме',
    'landing': 'Односторінкові сайти',
    'technical-details': 'Технічні можливості',
    'generators': 'Генератори',
    'portfolio-text': 'Генератор текстів портфоліо',
    'project-checker': 'Перевірка проєктів',
    'resume-structure': 'Структура резюме',
    'platform-comparison': 'Порівняння платформ',
    'diy-vs-us': 'DIY vs З нами',
    'common-mistakes': 'Часті помилки',
    'faq': 'FAQ',
    'landing-trends': 'Тренди лендінгів 2025',
    'portfolio-tips': 'Портфоліо, яке продає',
    'resume-tips': 'Поради для резюме',
    'instruction': 'Реєстрація на Netlify',
    'edit-instruction': 'Редагування проекту у VSCode',
    'bonus': 'Бонус',
    'interactive-quiz': 'Вікторина',
    'promo': 'Акція',
    'pricing': 'Пакети',
    'briefs': 'Отримати проект',
    'security-tips': 'Кібербезпека',
    'google-ads': 'Реклама в Google',
    'learning': 'Навчання',
    'calculator': 'Калькулятор бюджету',
    'comparison': 'Порівняння',
    'glossary': 'Глосарій',
    'generator': 'Генератор',
    'keywords': 'Ключові слова',
    'facebook-ads': 'Facebook Ads',
    'target-advertising': 'Таргетована реклама',
    'ad-calculator': 'Калькулятор реклами',
    'target-explanation': 'Пояснення таргетингу',
    'utm-generator': 'UTM генератор',
    'ai-services': 'AI Сервіси',
    'ai-automation': 'AI Автоматизація',
    'ai-prompting': 'AI Промптинг',
    'prompt-editor': 'Персональний промптинг',
    'prompt-studio': 'AI Prompt Studio',
    'prompt-showcase': 'Наші Роботи',
    'canva-services': 'Банери та Шаблони',
    'poland-tax': 'Повернення податків з Польщі',
    'pc-service': 'Чистка ПК віддалено',
    'about': 'Про нас',
    'testimonials': 'Відгуки',
    'skills': 'Наші навички',
    'achievements': 'Досягнення',
    'contact': 'Контакти',
    'social': 'Соцмережі',
    'certificate-gift': 'Сертифікат-сувенір',
    'assistant': 'Гід Djon',
    'webstart-lab': 'WebStart LAB',
    'youtube-channel': 'YouTube Канал',
    'international': 'International',
    'en': 'English',
    'fr': 'Français',
    'pl': 'Polski',
    'de': 'Deutsch',
    'cz': 'Čeština',
    'sv': 'Svenska',
    'innovations': 'Новації'
};

const Breadcrumbs = () => {
    const location = useLocation();
    const parts = location.pathname.split('/').filter(Boolean);

    const crumbs = parts.map((part, index) => {
        const path = '/' + parts.slice(0, index + 1).join('/');
        // Перевіряємо чи є переклад для цього шляху
        const label = pathToUkrainian[part] ||
            (decodeURI(part).charAt(0).toUpperCase() + decodeURI(part).slice(1));

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
