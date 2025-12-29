// Визначає мета-теги для ключових сторінок сайту (title, description, keywords, og:image).
// Експортує функцію getMetaTags для отримання тегів по ключу сторінки.

type PageKey = 'home' | 'services' | 'portfolio' | 'about' | 'contact';

interface MetaTags {
  title: string;
  description: string;
  keywords: string;
  image: string;
}

const pages: Record<PageKey, MetaTags> = {
  home: {
    title: 'WebStart Studio - Головна',
    description: 'Створення професійних лендінгів, портфоліо та резюме',
    keywords: 'веб студія, лендінги, портфоліо, резюме',
    image: '/web-start-studio-og.jpg'
  },
  services: {
    title: 'Наші послуги - WebStart Studio',
    description: 'Повний спектр послуг веб-розробки та дизайну',
    keywords: 'веб-розробка, веб-дизайн, послуги',
    image: '/web-start-studio-og.jpg'
  },
  portfolio: {
    title: 'Портфоліо - WebStart Studio',
    description: 'Наші роботи та проекти',
    keywords: 'портфоліо, проекти, роботи',
    image: '/web-start-studio-og.jpg'
  },
  about: {
    title: 'Про нас - WebStart Studio',
    description: 'Історія та команда WebStart Studio',
    keywords: 'про компанію, команда, історія',
    image: '/web-start-studio-og.jpg'
  },
  contact: {
    title: 'Контакти - WebStart Studio',
    description: 'Зв\'яжіться з нами для обговорення проекту',
    keywords: 'контакти, зв\'язок, телефон, email',
    image: '/web-start-studio-og.jpg'
  }
};

export const getMetaTags = (page: PageKey): MetaTags => {
  return pages[page] || pages.home;
};
