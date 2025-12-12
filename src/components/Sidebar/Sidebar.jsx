import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, Palette, FileText, BarChart, BarChart2, XCircle, Settings, Users,
  Boxes, HelpCircle, Newspaper, Mail, ChevronDown, ChevronUp, Bot, Code,
  Code2, Award, FileDown, Megaphone, MessageCircle, Lock, Gift, GiftIcon,
  BookOpen, Monitor, Globe, Globe2, Book, Layout, Star, Youtube, Zap, Sparkles, CreditCard, Target
} from 'lucide-react';

import './Sidebar.css';
import './Sidebar.mobile.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  const menuItems = [
    { id: 'home', path: '/', icon: Home, label: 'Головна' },
    { id: 'for-whom', path: '/for-whom', icon: Users, label: 'Для кого ми' },

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
    { id: 'faq', path: '/faq', icon: HelpCircle, label: 'FAQ' },

    {
      id: 'blog',
      icon: Newspaper,
      label: 'Блог / Дайджест',
      submenu: [
        { path: '/blog/landing-trends', label: 'Тренди лендінгів 2025' },
        { path: '/blog/portfolio-tips', label: 'Портфоліо, яке продає' },
        { path: '/blog/resume-tips', label: 'Поради для резюме' }
      ]
    },

    { id: 'instruction', path: '/instruction', icon: BookOpen, label: 'Реєстрація на Netlify' },
    { id: 'edit-instruction', path: '/edit-instruction', icon: Monitor, label: 'Редагування проекту у VSCode' },
    { id: 'bonus', path: '/bonus', icon: Gift, label: 'Бонус' },

    {
      id: 'interactiveQuiz',
      path: '/interactive-quiz',
      icon: Star,
      label: 'Вікторина'
    },
    {
      id: 'promo',
      path: '/promo',
      icon: Zap,
      label: 'Акція'
    },
    {
      id: 'pricing',
      path: '/pricing',
      icon: CreditCard,
      label: 'Пакети'
    },

    { id: 'briefs', path: '/briefs', icon: FileDown, label: 'Отримати проект' },
  ];

  const additionalItems = [
    {
      id: 'google-ads',
      icon: Target,
      label: 'Реклама в Google',
      submenu: [
        { path: '/google-ads/setup', label: 'Налаштування Google Ads' },
        { path: '/google-ads/optimization', label: 'Оптимізація кампаній' },
        { path: '/google-ads/analytics', label: 'Аналітика та звіти' },
        { path: '/google-ads/keywords', label: 'Підбір ключових слів' },
        { path: '/google-ads/budget', label: 'Управління бюджетом' },
        { path: '/google-ads/remarketing', label: 'Ремаркетинг' }
      ]
    },

    {
      id: 'facebook-ads',
      icon: Megaphone,
      label: 'Реклама у Facebook',
      submenu: [
        { path: '/facebook-ads/setup', label: 'Налаштування Facebook Ads' },
        { path: '/facebook-ads/targeting', label: 'Таргетинг аудиторії' },
        { path: '/facebook-ads/creatives', label: 'Створення креативів' },
        { path: '/facebook-ads/instagram', label: 'Реклама в Instagram' },
        { path: '/facebook-ads/analytics', label: 'Аналітика результатів' },
        { path: '/facebook-ads/conversion', label: 'Оптимізація конверсій' }
      ]
    },

    {
      id: 'canvaservices',
      path: '/canva-services',
      icon: Layout,
      label: 'Банери та Шаблони'
    },

    {
      id: 'tax-refund',
      icon: FileText,
      label: 'Повернення податків з Польщі',
      submenu: [
        { path: '/tax-refund/documents', label: 'Необхідні документи' },
        { path: '/tax-refund/process', label: 'Процес повернення' },
        { path: '/tax-refund/calculation', label: 'Розрахунок суми' },
        { path: '/tax-refund/consultation', label: 'Консультація' }
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
        { path: '/prompt-studio', label: 'AI Prompt Studio' }
      ]
    },

    { id: 'security', path: '/security-tips', icon: Lock, label: 'Кібербезпека' },

    {
      id: 'pc-service',
      path: '/pc-service',
      icon: Code,
      label: 'Чистка ПК віддалено'
    }

  ];

  const aboutItems = [
    { id: 'about', path: '/about', icon: Users, label: 'Про нас' },
    { id: 'testimonials', path: '/testimonials', icon: MessageCircle, label: 'Відгуки' },
    { id: 'skills', path: '/skills', icon: Code2, label: 'Наші навички' },

    {
      id: 'achievements',
      path: '/achievements',
      icon: Award,
      label: 'Досягнення'
    },

    { id: 'contact', path: '/contact', icon: Mail, label: 'Контакти' },

    {
      id: 'social',
      path: '/social',
      icon: Globe,
      label: 'Соцмережі'
    },

    {
      id: 'certificate-gift',
      path: '/certificate-gift',
      icon: GiftIcon,
      label: 'Сертифікат-сувенір'
    },

    {
      id: 'assistant',
      path: '/assistant',
      icon: Bot,
      label: 'Гід Djon'
    },

    {
      id: 'webstart-lab',
      path: '/webstart-lab',
      icon: Book,
      label: 'WebStart LAB'
    },

    {
      id: 'youtube',
      icon: Youtube,
      label: 'YouTube Канал',
      path: '/youtube-channel'
    },

    {
      id: 'international',
      icon: Globe2,
      label: 'International',
      submenu: [
        { path: '/international/en', label: 'English' },
        { path: '/international/fr', label: 'Français' },
        { path: '/international/pl', label: 'Polski' },
        { path: '/international/de', label: 'Deutsch' },
        { path: '/international/cz', label: 'Čeština' },
        { path: '/international/sv', label: 'Svenska' }
      ]
    }
  ];

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo">
          <div className="logo-text">WebStart Studio</div>
          <div className="logo-subtitle">Digital Solutions</div>
        </div>

        <nav className="sidebar-nav">

          {menuItems.map(item => (
            <div key={item.id}>
              {item.submenu ? (
                <div className="nav-item-wrapper">
                  <div
                    className={`nav-item dropdown-item ${openDropdowns[item.id] ? 'open' : ''}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <div className="nav-item-content">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>

                    {openDropdowns[item.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  <div className={`submenu ${openDropdowns[item.id] ? 'open' : ''}`}>
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className={`submenu-item ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}

          <div className="menu-divider"></div>

          <div className="menu-section-title">Додаткові можливості</div>

          {additionalItems.map(item => (
            <div key={item.id}>
              {item.submenu ? (
                <div className="nav-item-wrapper">
                  <div
                    className={`nav-item dropdown-item ${openDropdowns[item.id] ? 'open' : ''}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <div className="nav-item-content">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>

                    {openDropdowns[item.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  <div className={`submenu ${openDropdowns[item.id] ? 'open' : ''}`}>
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className={`submenu-item ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}

          <div className="menu-divider"></div>

          <div className="menu-section-title">Платформа</div>

          {aboutItems.map(item => (
            <div key={item.id}>
              {item.submenu ? (
                <div className="nav-item-wrapper">
                  <div
                    className={`nav-item dropdown-item ${openDropdowns[item.id] ? 'open' : ''}`}
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <div className="nav-item-content">
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </div>

                    {openDropdowns[item.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>

                  <div className={`submenu ${openDropdowns[item.id] ? 'open' : ''}`}>
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className={`submenu-item ${location.pathname === subItem.path ? 'active' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          ))}

        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

