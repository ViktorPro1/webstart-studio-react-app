import React, { useState } from "react";
import type { ChangeEvent } from "react";
import { Link } from "react-router-dom";

import "./Pricing.css";
import "./Pricing.mobile.css";

interface ServiceItem {
  name: string;
  price: number;
  description: string;
}

interface ServicesData {
  portfolio: ServiceItem[];
  resume: ServiceItem[];
  sites: ServiceItem[];
  adaptive: ServiceItem[];
}

interface AdditionalOption {
  id: string;
  label: string;
  price: number;
}

const servicesData: ServicesData = {
  portfolio: [
    {
      name: "Базовий (5 сторінок)",
      price: 2500,
      description:
        "Простий сайт із 5 сторінок: головна, про вас, приклади робіт, відгуки та контакти. Ідеально щоб заявити про себе онлайн і мати власну адресу в інтернеті.",
    },
    {
      name: "Стандарт (+ дизайн та адаптація)",
      price: 4500,
      description:
        "До базового варіанту додається індивідуальний дизайн під ваш стиль і повна адаптація під мобільні пристрої. Сайт однаково гарно виглядає на телефоні, планшеті і комп'ютері.",
    },
    {
      name: "Преміум (+ анімації та SEO)",
      price: 7000,
      description:
        "Повний пакет: плавні анімації, базова SEO-оптимізація щоб вас знаходили в Google, і технічна підтримка протягом місяця після запуску.",
    },
  ],
  resume: [
    {
      name: "Classic",
      price: 1500,
      description:
        "Резюме-сайт у діловому стилі. Чітка структура, зрозуміла навігація. Підходить для роботи в офіційних компаніях, держустановах або банківській сфері.",
    },
    {
      name: "Creative",
      price: 2500,
      description:
        "Яскраве резюме з оригінальним дизайном і візуальними елементами. Гарний вибір для дизайнерів, фотографів, маркетологів — всіх, хто хоче виділитись.",
    },
    {
      name: "Minimal",
      price: 2000,
      description:
        "Лаконічний і сучасний стиль без зайвого. Фокус на змісті — текст, структура, зручність читання. Підійде для більшості вакансій і напрямків.",
    },
    {
      name: "Premium",
      price: 4000,
      description:
        "Все включено: унікальний дизайн, анімації, оптимізація для пошукових систем, різні формати на вибір. Плюс — персональна консультація щодо змісту резюме.",
    },
  ],
  sites: [
    {
      name: "Landing page",
      price: 4000,
      description:
        "Односторінковий сайт який чітко і переконливо розповідає про вас або ваш продукт. Підійде для реклами послуги, товару чи особистого бренду.",
    },
    {
      name: "Сайт для рекрутера",
      price: 6000,
      description:
        "Спеціалізований сайт для HR-спеціаліста або рекрутера. Розділи з вакансіями, форма для кандидатів, контакти та портфоліо успішних кейсів.",
    },
    {
      name: 'Instagram "Taplink"',
      price: 2500,
      description:
        "Міні-сайт що відкривається по посиланню з Instagram. Кнопки на всі соцмережі, месенджери, прайс або запис — зручний інструмент для блогерів і малого бізнесу.",
    },
    {
      name: "Сайт для мікрокредитування",
      price: 5500,
      description:
        "Сайт з формою заявки, кредитним калькулятором та інформаційними блоками для залучення користувачів. Підходить для невеликих фінансових компаній.",
    },
    {
      name: "Сайт перевезень ЄС",
      price: 8000,
      description:
        "Сайт для компаній що займаються пасажирськими перевезеннями Європою. Маршрути, розклад, онлайн-бронювання та інтерактивна карта напрямків.",
    },
  ],
  adaptive: [
    {
      name: "Базова",
      price: 1500,
      description:
        "Ваш сайт коректно відображатиметься на телефонах і планшетах. Підходить якщо дизайн вже готовий і потрібна лише мобільна адаптація.",
    },
    {
      name: "Розширена",
      price: 2500,
      description:
        "Адаптуємо кнопки, меню, форми і всі інтерактивні елементи — щоб користуватись сайтом було зручно на будь-якому екрані і з будь-якого пристрою.",
    },
    {
      name: "Преміум",
      price: 4000,
      description:
        "Повна адаптація з урахуванням швидкості завантаження, зручності для користувача (UX) та базової пошукової оптимізації під мобільні пристрої.",
    },
  ],
};

const additionalOptionsByType: Record<string, AdditionalOption[]> = {
  portfolio: [
    { id: "opt-seo", label: "SEO оптимізація", price: 800 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 600 },
    {
      id: "opt-forms",
      label: "Інтеграція форм зворотного зв'язку",
      price: 400,
    },
    { id: "opt-analytics", label: "Підключення Google Analytics", price: 300 },
  ],
  resume: [
    { id: "opt-pdf", label: "Експорт у PDF формат", price: 200 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 600 },
    { id: "opt-seo", label: "SEO оптимізація", price: 500 },
  ],
  sites: [
    { id: "opt-seo", label: "SEO оптимізація", price: 800 },
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 600 },
    {
      id: "opt-forms",
      label: "Інтеграція форм зворотного зв'язку",
      price: 400,
    },
    { id: "opt-analytics", label: "Підключення Google Analytics", price: 300 },
    { id: "opt-chat", label: "Онлайн-чат або чат-бот", price: 500 },
  ],
  adaptive: [
    { id: "opt-support", label: "Технічна підтримка 1 місяць", price: 600 },
    {
      id: "opt-speed",
      label: "Оптимізація швидкості завантаження",
      price: 500,
    },
  ],
};

type ServiceType = keyof ServicesData;

const Pricing: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<ServiceType | "">("");
  const [selectedOption, setSelectedOption] = useState<ServiceItem | null>(
    null,
  );
  const [basePrice, setBasePrice] = useState<number>(0);
  const [showAdditional, setShowAdditional] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [checkboxValues, setCheckboxValues] = useState<Record<string, number>>(
    {},
  );

  const togglePricing = (): void => setShowTable(!showTable);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as ServiceType | "";
    setServiceType(value);
    setSelectedOption(null);
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const index = parseInt(e.target.value);
    if (!serviceType || isNaN(index)) {
      setSelectedOption(null);
      setBasePrice(0);
      setShowAdditional(false);
      setShowResult(false);
      return;
    }
    const option = servicesData[serviceType][index];
    setSelectedOption(option);
    setBasePrice(option.price);
    setShowAdditional(true);
    setShowResult(true);
    setCheckboxValues({});
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const val = parseInt(e.target.value);
    setCheckboxValues((prev) => ({
      ...prev,
      [e.target.id]: e.target.checked ? val : 0,
    }));
  };

  const totalPrice =
    basePrice +
    Object.values(checkboxValues).reduce((acc, curr) => acc + curr, 0);

  const resetCalculator = (): void => {
    setServiceType("");
    setSelectedOption(null);
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const getCategoryName = (category: ServiceType): string => {
    const names: Record<ServiceType, string> = {
      portfolio: "Портфоліо",
      resume: "Резюме",
      sites: "Сайти",
      adaptive: "Адаптація для смартфонів",
    };
    return names[category];
  };

  const currentOptions = serviceType
    ? additionalOptionsByType[serviceType]
    : [];

  return (
    <section className="Pricing-section">
      {/* ПЕРША СЕКЦІЯ */}
      <div className="Pricing-container">
        <div className="Pricing-emoji">💰</div>
        <h2 className="Pricing-title">Пакети</h2>
        <p className="Pricing-text">
          Оберіть напрямок і варіант — калькулятор одразу покаже орієнтовну
          вартість. Всі ціни вказані в гривнях і є відправною точкою для
          обговорення. Фінальна вартість узгоджується індивідуально після
          консультації.
        </p>
        <button
          className="Pricing-toggleBtn"
          aria-expanded={showTable}
          aria-controls="PricingTable"
          onClick={togglePricing}
        >
          {showTable ? "Сховати пакети" : "Переглянути всі пакети"}
        </button>
      </div>

      {/* ТЕКСТОВИЙ ОПИС ПАКЕТІВ */}
      {showTable && (
        <div className="Pricing-description">
          {Object.entries(servicesData).map(([category, items]) => (
            <div key={category} className="Pricing-serviceCategory">
              <h3 className="Pricing-titleCategory">
                {getCategoryName(category as ServiceType)}
              </h3>
              {items.map((item: ServiceItem, i: number) => (
                <div key={i} className="Pricing-serviceItemDescription">
                  <strong>
                    {item.name} — {item.price.toLocaleString("uk-UA")} грн
                  </strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* КАЛЬКУЛЯТОР */}
      <div className="Pricing-calculator">
        <h1 className="Pricing-mainTitle">Ми пропонуємо — ви обираєте</h1>

        <div className="Pricing-group">
          <label htmlFor="service-type">Оберіть напрямок:</label>
          <select
            id="service-type"
            value={serviceType}
            onChange={handleTypeChange}
          >
            <option value="">-- Оберіть напрямок --</option>
            <option value="portfolio">Портфоліо</option>
            <option value="resume">Резюме</option>
            <option value="sites">Сайти</option>
            <option value="adaptive">Адаптація для смартфонів</option>
          </select>
        </div>

        {serviceType && (
          <div className="Pricing-group">
            <label htmlFor="service-option">Оберіть варіант:</label>
            <select
              id="service-option"
              onChange={handleOptionChange}
              defaultValue=""
            >
              <option value="">-- Оберіть варіант --</option>
              {servicesData[serviceType].map((opt: ServiceItem, i: number) => (
                <option key={i} value={i}>
                  {opt.name} — {opt.price.toLocaleString("uk-UA")} грн
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Опис обраного варіанту */}
        {selectedOption && (
          <div className="Pricing-optionDesc">
            <span className="Pricing-optionDesc__icon">ℹ️</span>
            <p>{selectedOption.description}</p>
          </div>
        )}

        {/* Додаткові опції — залежать від типу */}
        {showAdditional && currentOptions.length > 0 && (
          <div className="Pricing-group">
            <label>Додаткові опції:</label>
            <div className="Pricing-checkboxGroup">
              {currentOptions.map((opt) => (
                <label key={opt.id}>
                  <input
                    type="checkbox"
                    id={opt.id}
                    value={opt.price}
                    checked={!!checkboxValues[opt.id]}
                    onChange={handleCheckboxChange}
                  />
                  {opt.label} (+{opt.price.toLocaleString("uk-UA")} грн)
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Результат */}
        {showResult && (
          <div className="Pricing-result">
            <div className="Pricing-resultLabel">Орієнтовна вартість:</div>
            <div className="Pricing-resultPrice">
              {totalPrice.toLocaleString("uk-UA")} грн
            </div>
            <p className="Pricing-resultNote">
              Фінальна ціна узгоджується після консультації
            </p>
          </div>
        )}

        {/* CTA після результату */}
        {showResult && (
          <div className="Pricing-cta">
            <Link
              to="/briefs"
              className="Pricing-ctaBtn Pricing-ctaBtn--primary"
            >
              📋 Заповнити бриф
            </Link>
            <Link
              to="/messages"
              className="Pricing-ctaBtn Pricing-ctaBtn--secondary"
            >
              💬 Обговорити в чаті
            </Link>
          </div>
        )}

        {showResult && (
          <button className="Pricing-resetBtn" onClick={resetCalculator}>
            Очистити
          </button>
        )}
      </div>
    </section>
  );
};

export default Pricing;
