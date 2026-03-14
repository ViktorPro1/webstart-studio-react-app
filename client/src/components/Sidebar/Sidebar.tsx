import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Home,
  Palette,
  FileText,
  BarChart,
  BarChart2,
  XCircle,
  Settings,
  Users,
  Boxes,
  HelpCircle,
  Newspaper,
  Mail,
  ChevronDown,
  ChevronUp,
  Bot,
  Code,
  Code2,
  Award,
  FileDown,
  Megaphone,
  MessageCircle,
  Lock,
  Gift,
  GiftIcon,
  BookOpen,
  Monitor,
  Globe,
  AreaChart,
  Globe2,
  Book,
  Layout,
  ClipboardList,
  RefreshCw,
  Star,
  Lightbulb,
  Youtube,
  Zap,
  Sparkles,
  CreditCard,
  Search,
  Server,
  Database,
  Link2,
  Cpu,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

import "./Sidebar.css";
import "./Sidebar.mobile.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface MenuItem {
  id: string;
  path?: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  submenu?: SubmenuItem[];
}

interface SubmenuItem {
  path: string;
  label: string;
  description?: string;
}

type DropdownState = Record<string, boolean>;

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [openDropdowns, setOpenDropdowns] = useState<DropdownState>({});

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      toggleSidebar();
    }
  };

  const handleProtectedClick = () => {
    navigate("/messages");
    handleLinkClick();
  };

  const menuItems: MenuItem[] = [
    { id: "home", path: "/", icon: Home, label: "Головна" },
    { id: "for-whom", path: "/for-whom", icon: Users, label: "Для кого ми" },

    {
      id: "services",
      icon: Boxes,
      label: "Що ми створюємо",
      submenu: [
        { path: "/services/web-apps", label: "Веб-додатки" },
        { path: "/services/seo", label: "SEO-оптимізація" },
        { path: "/services/social-media", label: "Інтеграція з соцмережами" },
        { path: "/services/animations", label: "Динамічні анімації" },
        { path: "/services/ecommerce", label: "Інтернет-магазини" },
        { path: "/services/blog", label: "Блоги та новини" },
        {
          path: "/services/personalized-landing",
          label: "Персоналізовані лендінги",
        },
      ],
    },

    {
      id: "templates",
      icon: Palette,
      label: "Готові макети",
      submenu: [
        { path: "/templates/portfolio", label: "Дизайн портфоліо" },
        { path: "/templates/resume", label: "Електронне резюме" },
        { path: "/templates/landing", label: "Односторінкові сайти" },
      ],
    },

    {
      id: "technical",
      path: "/technical-details",
      icon: Settings,
      label: "Технічні можливості",
    },

    {
      id: "generators",
      icon: Sparkles,
      label: "Генератори",
      submenu: [
        {
          path: "/generators/portfolio-text",
          label: "Генератор текстів портфоліо",
        },
        { path: "/generators/project-checker", label: "Перевірка проєктів" },
        { path: "/generators/resume-structure", label: "Структура резюме" },
      ],
    },

    {
      id: "comparison",
      path: "/platform-comparison",
      icon: BarChart,
      label: "Порівняння платформ",
    },
    {
      id: "diyvsus",
      path: "/diy-vs-us",
      icon: BarChart2,
      label: "DIY vs З нами",
    },
    {
      id: "common-mistakes",
      path: "/common-mistakes",
      icon: XCircle,
      label: "Часті помилки",
    },
    { id: "faq", path: "/faq", icon: HelpCircle, label: "FAQ" },

    {
      id: "blog",
      icon: Newspaper,
      label: "Блог / Дайджест",
      submenu: [
        { path: "/blog/landing-trends", label: "Тренди лендінгів 2025" },
        { path: "/blog/portfolio-tips", label: "Портфоліо, яке продає" },
        { path: "/blog/resume-tips", label: "Поради для резюме" },
        { path: "/blog/free-hosting-tips", label: "Безкоштовне розміщення" },
      ],
    },

    {
      id: "instruction",
      path: "/instruction",
      icon: BookOpen,
      label: "Реєстрація на Netlify",
    },
    {
      id: "edit-instruction",
      path: "/edit-instruction",
      icon: Monitor,
      label: "Редагування проекту у VSCode",
    },
    { id: "bonus", path: "/bonus", icon: Gift, label: "Бонус" },
    {
      id: "interactiveQuiz",
      path: "/interactive-quiz",
      icon: Star,
      label: "Вікторина",
    },
    { id: "promo", path: "/promo", icon: Zap, label: "Акція" },
    { id: "pricing", path: "/pricing", icon: CreditCard, label: "Пакети" },
    { id: "briefs", path: "/briefs", icon: FileDown, label: "Отримати проект" },
  ];

  const additionalItems: MenuItem[] = [
    {
      id: "security",
      path: "/security-tips",
      icon: Lock,
      label: "Кібербезпека",
    },

    {
      id: "google-ads",
      icon: Search,
      label: "Реклама в Google",
      submenu: [
        { path: "/google-ads/learning", label: "Навчання" },
        { path: "/google-ads/calculator", label: "Калькулятор бюджету" },
        { path: "/google-ads/comparison", label: "Порівняння" },
        { path: "/google-ads/glossary", label: "Глосарій" },
        { path: "/google-ads/generator", label: "Генератор" },
        { path: "/google-ads/keywords", label: "Ключові слова" },
      ],
    },

    {
      id: "facebook-ads",
      icon: Megaphone,
      label: "Facebook Ads",
      submenu: [
        {
          path: "/facebook-ads/target-advertising",
          label: "Таргетована реклама",
        },
        { path: "/facebook-ads/ad-calculator", label: "Калькулятор реклами" },
        {
          path: "/facebook-ads/target-explanation",
          label: "Пояснення таргетингу",
        },
        { path: "/facebook-ads/utm-generator", label: "UTM генератор" },
      ],
    },

    {
      id: "data-analytics",
      path: "/data-analytics",
      icon: AreaChart,
      label: "Data Analytics",
    },

    {
      id: "ai-services",
      icon: Bot,
      label: "AI Сервіси",
      submenu: [
        { path: "/ai-automation", label: "AI Автоматизація" },
        { path: "/ai-prompting", label: "AI Промптинг" },
        { path: "/prompt-editor", label: "Персональний промптинг" },
        { path: "/prompt-studio", label: "AI Prompt Studio" },
        { path: "/prompt-showcase", label: "Наші Роботи" },
      ],
    },

    {
      id: "canvaservices",
      path: "/canva-services",
      icon: Layout,
      label: "Банери та Шаблони",
    },
    {
      id: "poland-tax",
      path: "/poland-tax",
      icon: FileText,
      label: "Повернення податків з Польщі",
    },
    {
      id: "pc-service",
      path: "/pc-service",
      icon: Code,
      label: "Чистка ПК віддалено",
    },
  ];

  const aboutItems: MenuItem[] = [
    { id: "about", path: "/about", icon: Users, label: "Про нас" },
    {
      id: "testimonials",
      path: "/testimonials",
      icon: MessageCircle,
      label: "Відгуки",
    },
    { id: "skills", path: "/skills", icon: Code2, label: "Наші навички" },
    {
      id: "achievements",
      path: "/achievements",
      icon: Award,
      label: "Досягнення",
    },
    { id: "contact", path: "/contact", icon: Mail, label: "Контакти" },
    { id: "social", path: "/social", icon: Globe, label: "Соцмережі" },
    {
      id: "certificate-gift",
      path: "/certificate-gift",
      icon: GiftIcon,
      label: "Сертифікат-сувенір",
    },
    { id: "assistant", path: "/assistant", icon: Bot, label: "Гід Djon" },
    {
      id: "webstart-lab",
      path: "/webstart-lab",
      icon: Book,
      label: "WebStart LAB",
    },
    {
      id: "youtube",
      icon: Youtube,
      label: "YouTube Канал",
      path: "/youtube-channel",
    },

    {
      id: "international",
      icon: Globe2,
      label: "International",
      submenu: [
        { path: "/international/en", label: "English" },
        { path: "/international/fr", label: "Français" },
        { path: "/international/pl", label: "Polski" },
        { path: "/international/de", label: "Deutsch" },
        { path: "/international/cz", label: "Čeština" },
        { path: "/international/sv", label: "Svenska" },
      ],
    },

    {
      id: "innovations",
      path: "/innovations",
      icon: Lightbulb,
      label: "Новації",
    },
    {
      id: "survey",
      path: "/survey",
      icon: ClipboardList,
      label: "Як ми тобі?",
    },
    { id: "updates", path: "/updates", icon: RefreshCw, label: "Оновлення" },
  ];

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id}>
      {item.submenu ? (
        <div className="nav-item-wrapper">
          <div
            className={`nav-item dropdown-item ${openDropdowns[item.id] ? "open" : ""}`}
            onClick={() => toggleDropdown(item.id)}
          >
            <div className="nav-item-content">
              <item.icon size={20} />
              <span>{item.label}</span>
            </div>
            {openDropdowns[item.id] ? (
              <ChevronUp size={18} />
            ) : (
              <ChevronDown size={18} />
            )}
          </div>
          <div className={`submenu ${openDropdowns[item.id] ? "open" : ""}`}>
            {item.submenu.map((subItem, index) => (
              <Link
                key={index}
                to={subItem.path}
                className={`submenu-item ${location.pathname === subItem.path ? "active" : ""}`}
                onClick={handleLinkClick}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Link
          to={item.path!}
          className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          onClick={handleLinkClick}
        >
          <item.icon size={20} />
          <span>{item.label}</span>
        </Link>
      )}
    </div>
  );

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-text">WebStart Studio</div>
          <div className="logo-subtitle">Digital Solutions</div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(renderMenuItem)}

          {/* ─── WORDPRESS ─── */}
          <div className="menu-divider"></div>
          <div className="menu-section-title">WordPress розробка</div>

          <Link
            to="/wordpress/what-is"
            className={`nav-item ${location.pathname === "/wordpress/what-is" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Globe size={20} />
            <span>Що таке WordPress</span>
          </Link>

          <Link
            to="/wordpress/differences"
            className={`nav-item ${location.pathname === "/wordpress/differences" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <BarChart2 size={20} />
            <span>Чим відрізняється</span>
          </Link>

          <Link
            to="/wordpress/wp-for-whom"
            className={`nav-item ${location.pathname === "/wordpress/wp-for-whom" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Users size={20} />
            <span>Для кого підходить</span>
          </Link>

          <Link
            to="/wordpress/hosting"
            className={`nav-item ${location.pathname === "/wordpress/hosting" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Monitor size={20} />
            <span>Серверна частина</span>
          </Link>

          <Link
            to="/wordpress/faq"
            className={`nav-item ${location.pathname === "/wordpress/faq" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <HelpCircle size={20} />
            <span>Часті питання</span>
          </Link>

          <Link
            to="/wordpress/in-progress"
            className={`nav-item ${location.pathname === "/wordpress/in-progress" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <RefreshCw size={20} />
            <span>Ми в процесі</span>
          </Link>

          {/* ─── БЕКЕНД ТА БАЗИ ДАНИХ ─── */}
          <div className="menu-divider"></div>
          <div className="menu-section-title">Бекенд та Бази даних</div>

          <Link
            to="/backend/what-is"
            className={`nav-item ${location.pathname === "/backend/what-is" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Server size={20} />
            <span>Що таке бекенд</span>
          </Link>

          <Link
            to="/backend/database"
            className={`nav-item ${location.pathname === "/backend/database" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Database size={20} />
            <span>Що таке база даних</span>
          </Link>

          <Link
            to="/backend/how-it-works"
            className={`nav-item ${location.pathname === "/backend/how-it-works" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Link2 size={20} />
            <span>Як вони працюють разом</span>
          </Link>

          <Link
            to="/backend/when-needed"
            className={`nav-item ${location.pathname === "/backend/when-needed" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <Cpu size={20} />
            <span>Коли це потрібно сайту</span>
          </Link>

          <Link
            to="/backend/faq"
            className={`nav-item ${location.pathname === "/backend/faq" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <HelpCircle size={20} />
            <span>Часті питання</span>
          </Link>
          <Link
            to="/backend/learning"
            className={`nav-item ${location.pathname === "/backend/learning" ? "active" : ""}`}
            onClick={handleLinkClick}
          >
            <BookOpen size={20} />
            <span> Ми вивчаємо</span>
          </Link>

          {/* ─── ДОДАТКОВІ МОЖЛИВОСТІ ─── */}
          <div className="menu-divider"></div>
          <div className="menu-section-title">Додаткові можливості</div>

          {additionalItems.map(renderMenuItem)}

          {/* ─── ПЛАТФОРМА ─── */}
          <div className="menu-divider"></div>
          <div className="menu-section-title">Платформа</div>

          {aboutItems.map(renderMenuItem)}

          {/* ─── ОСОБИСТИЙ КАБІНЕТ ─── */}
          <div className="menu-divider"></div>
          <div className="menu-section-title">Особистий кабінет</div>

          <div
            className={`nav-item ${location.pathname === "/user-permissions" ? "active" : ""}`}
            onClick={() => {
              navigate("/user-permissions");
              handleLinkClick();
            }}
            style={{ cursor: "pointer" }}
          >
            <Users size={20} />
            <span>🗣 Форум платформи</span>
          </div>

          <div
            className={`nav-item ${location.pathname === "/messages" ? "active" : ""}`}
            onClick={handleProtectedClick}
            style={{ cursor: "pointer" }}
          >
            <MessageCircle size={20} />
            <span>💬 Чат з командою</span>
            {!user && (
              <Lock size={14} style={{ marginLeft: "auto", opacity: 0.4 }} />
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
