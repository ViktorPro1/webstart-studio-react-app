import React from 'react';
import SEO from '../../SEO/SEO';
import './FAQ.css';
import './FAQ.mobile.css';


const FAQ = () => {
  const faqItems = [
    {
      question: 'А якщо я в цьому нічого не тямлю?',
      answer: (
        <>
          Нічого страшного — усе зробимо за вас. Лише відповісте на кілька
          простих питань у файлі (брифі). Детальніше дивіться у розділі{' '}
          <a href="/briefs" className="nav-btn">Отримати</a>.
        </>
      )
    },
    {
      question: 'Скільки часу йде на створення?',
      answer: (
        <>
          Залежно від завдання, терміни виконання можуть варіюватися.
          Зазвичай це займає від кількох годин до 3 днів. Якщо проєкт складніший —
          ми повідомимо вас про це заздалегідь.
        </>
      )
    },
    {
      question: 'А можна щось підправити, якщо мені не сподобається?',
      answer: (
        <>
          Звісно. Якщо щось не підходить — разом підкоригуємо до бажаного
          вигляду.
        </>
      )
    },
    {
      question: 'Як розмістити своє резюме, портфоліо або лендінг?',
      answer: (
        <>
          Ви отримаєте архів з усіма файлами та інструкцією. Також можемо
          розмістити сторінку в інтернеті для вас. Ви можете ознайомитись із
          деталями у розділі <a href="/instruction" className="nav-btn">Реєстрація на Netlify</a>.
        </>
      )
    },
    {
      question: 'А якщо я щось забуду або не зрозумію?',
      answer: (
        <>
          Пишіть нам у Viber чи Telegram — допоможемо розібратись або нагадаємо,
          що і як.
        </>
      )
    }
  ];

  return (
    <>
      <SEO
        title="Поширені запитання"
        description="FAQ — відповіді на найчастіші запитання користувачів WebStart Studio"
        keywords="faq, поширені запитання, webstart studio"
      />
      <section id="faq" className="faq-section">
        <h2 id="faq-title">Поширені запитання</h2>
        {faqItems.map((item, index) => (
          <details key={index}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </section>
    </>
  );
};

export default FAQ;
