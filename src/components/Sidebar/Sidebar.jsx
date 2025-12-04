import React, { useState }from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FileText, Users, Mail, ChevronDown, ChevronUp, Bot, Code, Palette,Megaphone, Target } from 'lucide-react';
import './Sidebar.css';
import './Sidebar.mobile.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  const menuItems = [
    { 
      id: 'home', 
      path: '/', 
      icon: Home, 
      label: 'Головна' 
    },
    { 
    id: 'for-whom',   
    path: '/for-whom', 
    icon: Users,     
    label: 'Для кого ми' 
    },
    { 
      id: 'web-development',
      icon: Briefcase, 
      label: 'Портфоліо',
      submenu: [
        { path: '/landing', label: 'Лендінги' },
        { path: '/portfolio', label: 'Портфоліо' },
        { path: '/resume', label: 'Резюме' },
      ]
    },
    { 
      id: 'ai-services',
      icon: Bot, 
      label: 'AI Сервіси',
      submenu: [
        { path: '/ai-automation', label: 'AI Автоматизація' },
        { path: '/ai-prompting', label: 'AI Промптинг' },
        { path: '/personal-prompting', label: 'Персональний промптинг' },
        { path: '/create-ai-agent', label: 'Створення AI агента' }
      ]
    },
    { 
      id: 'design',
      icon: Palette, 
      label: 'Дизайн',
      submenu: [
        { path: '/ui-ux', label: 'UI/UX Дизайн' },
        { path: '/logo', label: 'Логотипи' },
        { path: '/branding', label: 'Брендинг' }
      ]
    },
    { 
      id: 'about', 
      path: '/about', 
      icon: Users, 
      label: 'Про нас' 
    },
    { 
      id: 'contact', 
      path: '/contact', 
      icon: Mail, 
      label: 'Контакти' 
    }
  ];

  // Додаткові можливості (окрема секція)
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
      id: 'pc-cleaning',
      icon: Code,
      label: 'Чистка ПК віддалено',
      submenu: [
        { path: '/pc-cleaning/diagnostics', label: 'Діагностика системи' },
        { path: '/pc-cleaning/virus-removal', label: 'Видалення вірусів' },
        { path: '/pc-cleaning/optimization', label: 'Оптимізація ПК' },
        { path: '/pc-cleaning/support', label: 'Технічна підтримка' }
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
                // Меню з підменю (dropdown)
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
                // Звичайне меню без підменю
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

          {/* Роздільник */}
          <div className="menu-divider"></div>
          
          {/* Заголовок секції "Додаткові можливості" */}
          <div className="menu-section-title">Додаткові можливості</div>

          {/* Додаткові можливості */}
          {additionalItems.map(item => (
            <div key={item.id}>
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
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
