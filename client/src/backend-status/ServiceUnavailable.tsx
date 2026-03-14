import React from "react";
import { Link } from "react-router-dom";
import "./ServiceUnavailable.css";

const ServiceUnavailable: React.FC = () => {
  return (
    <div className="su-wrapper">
      <div className="su-card">
        <div className="su-icon-wrap">
          <svg
            className="su-icon"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="currentColor"
              strokeWidth="2.5"
            />
            <path
              d="M20 32 C20 25 26 19 32 19 C38 19 44 25 44 32"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="32" cy="44" r="2" fill="currentColor" />
            <path
              d="M32 36 L32 40"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1 className="su-title">Технічні роботи</h1>

        <p className="su-message">
          Вибачте за незручності. Цей розділ тимчасово недоступний — наш сервер
          зараз на технічному обслуговуванні.
        </p>

        <p className="su-sub">
          Публічна частина сайту працює у штатному режимі. Спробуйте повернутися
          пізніше.
        </p>

        <div className="su-actions">
          <Link to="/" className="su-btn su-btn--primary">
            На головну
          </Link>
          <Link to="/contact" className="su-btn su-btn--ghost">
            Контакти
          </Link>
        </div>

        <p className="su-footer">
          Питання? Напишіть нам на{" "}
          <a href="mailto:webstartstudio978@gmail.com" className="su-email">
            webstartstudio978@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServiceUnavailable;
