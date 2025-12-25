import React, { useState, useEffect, useMemo } from 'react';
import SEO from '../../SEO/SEO';
import './Testimonials.css';
import './Testimonials.mobile.css';

interface Testimonial {
  img: string;
  alt: string;
  name: string;
  text: string;
  cite: string;
  time: string;
}

type TestimonialsData = {
  testimonial1: Testimonial[];
  testimonial2: Testimonial[];
  testimonial3: Testimonial[];
};

type CurrentIndexes = {
  testimonial1: number;
  testimonial2: number;
  testimonial3: number;
};

type ImageLoaded = {
  testimonial1: boolean;
  testimonial2: boolean;
  testimonial3: boolean;
};

const Testimonials: React.FC = () => {
  // ✅ Типізовані стабільні дані
  const testimonialsData: TestimonialsData = useMemo(() => ({
    testimonial1: [
      {
        img: "/images/testimonials/olena.webp",
        alt: "Олена",
        name: "Олена",
        text: "Портфоліо зробили за три дні, загалом непогано. Спочатку був косяк з кольорами на мобільній версії, але швидко виправили. Тепер виглядає стильно.",
        cite: "маркетолог",
        time: "14:23"
      },
      {
        img: "/images/testimonials/nadija.webp",
        alt: "Надія",
        name: "Надія",
        text: "Якість добра, хоча довелося пару разів уточнювати деталі. Дизайн сучасний, але я б хотіла трохи більше варіантів на вибір. В цілому задоволена.",
        cite: "фрілансер",
        time: "09:45"
      },
      {
        img: "/images/testimonials/volodumer.webp",
        alt: "Володимир",
        name: "Володимир",
        text: "Лендінг вийшов професійно, клієнти дзвонять. Єдине — довелося самому додавати пару фото, бо спочатку їх було замало. Але результат того вартий!",
        cite: "будівельник",
        time: "16:12"
      }
    ],
    testimonial2: [
      {
        img: "/images/testimonials/andriy.webp",
        alt: "Андрій",
        name: "Андрій",
        text: "Сайт зробили швидко, це плюс. Мінус — не все працювало ідеально з першого разу, довелося виправляти форму замовлення. Зараз усе ок, магазин працює.",
        cite: "власник магазину",
        time: "11:30"
      },
      {
        img: "/images/testimonials/vika.webp",
        alt: "Віка",
        name: "Віка",
        text: "За два дні готовий лендінг — це круто! Правда, шрифт спочатку був занадто дрібний, попросила збільшити. Клієнти кажуть, що сайт зручний, я рада.",
        cite: "власниця перукарні",
        time: "13:18"
      },
      {
        img: "/images/testimonials/sergey.webp",
        alt: "Сергій",
        name: "Сергій",
        text: "Після запуску заявки пішли, це головне. Хотілося б більше фішок, але як для стартового пакету — нормально. Може потім ще щось додам.",
        cite: "фермер",
        time: "10:05"
      }
    ],
    testimonial3: [
      {
        img: "/images/testimonials/mariya.webp",
        alt: "Марія",
        name: "Марія",
        text: "Резюме допомогло потрапити на співбесіди, це факт. Хоча довелося самій трохи підправити текст під себе — не все було точно сформульовано. Але загалом дуже корисно!",
        cite: "шукачка роботи",
        time: "15:42"
      },
      {
        img: "/images/testimonials/bogdan.webp",
        alt: "Богдан",
        name: "Богдан",
        text: "Структура резюме добра, подача професійна. Мінус — затримали на день, але попередили. Зараз працюю на новій посаді, тож дякую!",
        cite: "рекрутер",
        time: "08:55"
      },
      {
        img: "/images/testimonials/sofia.webp",
        alt: "Софія",
        name: "Софія",
        text: "Портфоліо вийшло креативним, мені подобається. Правда, не з першого разу вловили мій стиль, але після правок — супер. Точно замовлятиму ще.",
        cite: "маркетолог",
        time: "17:20"
      }
    ]
  }), []);

  const [currentIndexes, setCurrentIndexes] = useState<CurrentIndexes>({
    testimonial1: 0,
    testimonial2: 0,
    testimonial3: 0
  });

  const [imageLoaded, setImageLoaded] = useState<ImageLoaded>({
    testimonial1: false,
    testimonial2: false,
    testimonial3: false
  });

  // Ротація відгуків кожні 20 секунд
  useEffect(() => {
    const intervals: NodeJS.Timeout[] = Object.keys(testimonialsData).map((key) => {
      return setInterval(() => {
        setCurrentIndexes(prev => ({
          ...prev,
          [key as keyof CurrentIndexes]: (prev[key as keyof CurrentIndexes]! + 1) % testimonialsData[key as keyof TestimonialsData]!.length
        }));

        setImageLoaded(prev => ({
          ...prev,
          [key as keyof ImageLoaded]: false
        }));

        setTimeout(() => {
          setImageLoaded(prev => ({
            ...prev,
            [key as keyof ImageLoaded]: true
          }));
        }, 100);
      }, 20000);
    });

    // Встановлюємо початковий стан фото
    setTimeout(() => {
      setImageLoaded({
        testimonial1: true,
        testimonial2: true,
        testimonial3: true
      });
    }, 100);

    return () => intervals.forEach(clearInterval);
  }, [testimonialsData]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const target = e.target as HTMLImageElement;
    target.src = '/images/testimonials/placeholder.webp';
  };

  return (
    <>
      <SEO 
        title="Відгуки клієнтів"
        description="Реальні відгуки наших клієнтів про створення лендінгів, портфоліо та резюме"
        keywords="відгуки клієнтів, testimonials, відгуки про webstart studio"
      />
      <div className="testimonials-page">
        <section id="testimonials">
          <h2 id="testimonials-title">Відгуки про нас</h2>
          <div className="testimonials-container">
            {Object.keys(testimonialsData).map((key) => {
              const testimonialKey = key as keyof TestimonialsData;
              const indexKey = key as keyof CurrentIndexes;
              const imageKey = key as keyof ImageLoaded;
              
              const currentData = testimonialsData[testimonialKey][currentIndexes[indexKey]];
              
              return (
                <div className="testimonial" key={key} id={key}>
                  <img 
                    src={currentData.img} 
                    alt={currentData.alt}
                    className={`testimonial-photo ${imageLoaded[imageKey] ? 'visible' : ''}`}
                    onError={handleImageError}
                  />
                  <div className="testimonial-header-name">{currentData.name}</div>
                  <div className="testimonial-wrapper">
                    <div className="testimonial-message">
                      <p>{currentData.text}</p>
                      <div className="testimonial-meta">
                        <cite>{currentData.cite}</cite>
                        <span className="testimonial-time">{currentData.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Testimonials;

