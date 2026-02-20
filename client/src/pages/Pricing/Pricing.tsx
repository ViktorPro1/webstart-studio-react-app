import React, { useState } from 'react';
import type { ChangeEvent } from 'react';

import './Pricing.css';
import './Pricing.mobile.css';

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

const servicesData: ServicesData = {
  portfolio: [
    { name: 'Базовий (5 сторінок)', price: 500, description: 'Ви отримуєте простий сайт із 5 сторінок: головна, про вас, приклади ваших робіт, відгуки клієнтів та контакти. Ідеально, щоб показати себе онлайн.' },
    { name: 'Стандарт (+ дизайн та адаптація)', price: 600, description: 'До стандартного варіанту додаємо гарний індивідуальний дизайн для кожної сторінки та зручність перегляду на телефоні чи планшеті.' },
    { name: 'Преміум (+ анімації та SEO)', price: 700, description: 'Ще краще: додаємо плавні анімації, сайт швидше знаходиться в Google (SEO), і ви отримуєте технічну підтримку після запуску.' }
  ],
  resume: [
    { name: 'Classic', price: 300, description: 'Стандартне резюме у діловому стилі. Ідеально підходить для роботи в офіційних компаніях, держустановах чи банках.' },
    { name: 'Creative', price: 400, description: 'Яскраве, стильне резюме з візуальними елементами. Гарний вибір для дизайнерів, фотографів чи маркетологів.' },
    { name: 'Minimal', price: 450, description: 'Просте, лаконічне резюме з чітким текстом і зручною структурою. Підійде для більшості вакансій.' },
    { name: 'Premium', price: 550, description: 'Все включено: унікальний дизайн, правильне оформлення для систем пошуку резюме (ATS), різні формати (PDF, DOCX), а також персональна порада щодо змісту.' }
  ],
  sites: [
    { name: 'Landing page', price: 800, description: 'Односторінковий сайт, який коротко і чітко розповідає про вас або ваш продукт. Підійде для реклами послуги, товару чи особистого бренду.' },
    { name: 'Сайт для рекрутера', price: 1200, description: 'Ідеально для HR-спеціаліста або рекрутера. Містить розділи з вакансіями, контактами, портфоліо кандидатів.' },
    { name: 'Instagram "Taplink"', price: 500, description: 'Міні-сайт, який відкривається по посиланню з Instagram. Містить кнопки на всі ваші соцмережі, месенджери, послуги чи прайси.' },
    { name: 'Сайт для мікрокредитування', price: 1000, description: 'Простий сайт із формою заявки, калькулятором та короткою інформацією для залучення клієнтів. Підходить для невеликих фінансових послуг.' },
    { name: 'Сайт перевезень ЄС', price: 1500, description: 'Сайт для компаній, що займаються пасажирськими перевезеннями Європою. Інформація про маршрути, ціни, бронювання та інтерактивна карта.' }
  ],
  adaptive: [
    { name: 'Базова', price: 300, description: 'Ваш сайт коректно відображатиметься на телефонах і планшетах. Підходить, якщо дизайн уже готовий.' },
    { name: 'Розширена', price: 450, description: 'Додатково підлаштуємо кнопки, меню, форми — щоб користуватись сайтом було зручно на будь-якому екрані.' },
    { name: 'Преміум', price: 600, description: 'Повна адаптація з урахуванням швидкості завантаження, зручності для користувача та пошукової оптимізації.' }
  ]
};

type ServiceType = keyof ServicesData;

const Pricing: React.FC = () => {
  const [showTable, setShowTable] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<ServiceType | ''>('');
  const [serviceOption, setServiceOption] = useState<string>('');
  const [basePrice, setBasePrice] = useState<number>(0);
  const [showAdditional, setShowAdditional] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [checkboxValues, setCheckboxValues] = useState<Record<string, number>>({});

  const togglePricing = (): void => setShowTable(!showTable);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value as ServiceType | '';
    setServiceType(value);
    setServiceOption('');
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const handleOptionChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    const price = parseInt(e.target.value);
    setServiceOption(e.target.value);
    setBasePrice(price || 0);
    setShowAdditional(!!price);
    setShowResult(!!price);
    setCheckboxValues({});
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCheckboxValues(prev => ({
      ...prev,
      [e.target.id]: e.target.checked ? parseInt(e.target.value) : 0
    }));
  };

  const totalPrice = basePrice + Object.values(checkboxValues).reduce((acc: number, curr: number) => acc + curr, 0);

  const resetCalculator = (): void => {
    setServiceType('');
    setServiceOption('');
    setBasePrice(0);
    setShowAdditional(false);
    setShowResult(false);
    setCheckboxValues({});
  };

  const getCategoryName = (category: ServiceType): string => {
    const names: Record<ServiceType, string> = {
      portfolio: 'Портфоліо',
      resume: 'Резюме',
      sites: 'Сайти',
      adaptive: 'Адаптація сайту для смартфонів'
    };
    return names[category];
  };

  return (
    <section className="Pricing-section">
      {/* ПЕРША СЕКЦІЯ */}
      <div className="Pricing-container">
        <div className="Pricing-emoji">💰</div>
        <h2 className="Pricing-title">Пакети</h2>
        <p className="Pricing-text">
          Щоб детально ознайомитися з усіма актуальними пропозиціями, будь-ласка, перегляньте доступні пакети та їх умови.
          Кожна пропозиція містить повну інформацію про тарифи, що допоможе вам обрати найзручніший та оптимальний варіант для ваших потреб.
        </p>

        <button
          className="Pricing-toggleBtn"
          aria-expanded={showTable}
          aria-controls="PricingTable"
          aria-label="Показати таблицю цін"
          onClick={togglePricing}
        >
          Знайти найвигідніший пакет
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
                  <strong>{item.name} — {item.price} грн</strong>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* ДРУГА СЕКЦІЯ — КАЛЬКУЛЯТОР */}
      <div className="Pricing-calculator">
        <h1 className="Pricing-mainTitle">Ми пропонуємо — ви обираєте</h1>
        <div className="Pricing-group">
          <label htmlFor="service-type">Оберіть тип послуги:</label>
          <select id="service-type" value={serviceType} onChange={handleTypeChange}>
            <option value="">-- Оберіть пакет --</option>
            <option value="portfolio">Портфоліо</option>
            <option value="resume">Резюме</option>
            <option value="sites">Сайти</option>
            <option value="adaptive">Адаптація для смартфонів</option>
          </select>
        </div>

        {serviceType && (
          <div className="Pricing-group">
            <label htmlFor="service-option">Оберіть варіант:</label>
            <select id="service-option" value={serviceOption} onChange={handleOptionChange}>
              <option value="">-- Оберіть варіант --</option>
              {servicesData[serviceType].map((opt: ServiceItem, i: number) => (
                <option key={i} value={opt.price}>{opt.name} — {opt.price} грн</option>
              ))}
            </select>
          </div>
        )}

        {showAdditional && (
          <div className="Pricing-group">
            <label>Додаткові опції:</label>
            <div className="Pricing-checkboxGroup">
              <label>
                <input 
                  type="checkbox" 
                  id="option-seo" 
                  value={200} 
                  checked={checkboxValues['option-seo'] > 0} 
                  onChange={handleCheckboxChange} 
                />
                SEO оптимізація (+200 грн)
              </label>
              <label>
                <input 
                  type="checkbox" 
                  id="option-support" 
                  value={150} 
                  checked={checkboxValues['option-support'] > 0} 
                  onChange={handleCheckboxChange} 
                />
                Технічна підтримка 1 місяць (+150 грн)
              </label>
              <label>
                <input 
                  type="checkbox" 
                  id="option-forms" 
                  value={100} 
                  checked={checkboxValues['option-forms'] > 0} 
                  onChange={handleCheckboxChange} 
                />
                Інтеграція форм (+100 грн)
              </label>
            </div>
          </div>
        )}

        {showResult && (
          <div className="Pricing-result">
            <div className="Pricing-resultLabel">Загальна вартість:</div>
            <div className="Pricing-resultPrice">{totalPrice} грн</div>
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