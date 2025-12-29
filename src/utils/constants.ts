// Файл констант проекту: зберігає основні значення, які використовуються по всьому додатку.
// BREAKPOINTS – точки переходу для адаптивного дизайну.
// COLORS – основні кольори інтерфейсу.
// SITE_INFO – базова інформація про сайт для SEO та Open Graph.

export const BREAKPOINTS = {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px'
};

export const COLORS = {
    primary: '#667eea',
    secondary: '#764ba2',
    text: '#333',
    textLight: '#666',
    background: '#ffffff',
    backgroundDark: 'rgba(255, 255, 255, 0.95)'
};

export const SITE_INFO = {
    title: 'WebStart Studio',
    description: 'Створення лендінгів, портфоліо та резюме. Професійні веб-рішення для вашого бізнесу.',
    url: 'https://web-start-studio.netlify.app',
    image: '/images/og-image.jpg',
    keywords: 'лендінги, портфоліо, резюме, веб-дизайн, веб-розробка'
};