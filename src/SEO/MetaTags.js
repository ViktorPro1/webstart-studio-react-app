export const getMetaTags = (page) => {
    const pages = {
        home: {
            title: 'WebStart Studio - Головна',
            description: 'Створення професійних лендінгів, портфоліо та резюме',
            keywords: 'веб студія, лендінги, портфоліо, резюме',
            image: '/web-start-studio-og.webp'
        },
        services: {
            title: 'Наші послуги - WebStart Studio',
            description: 'Повний спектр послуг веб-розробки та дизайну',
            keywords: 'веб-розробка, веб-дизайн, послуги',
            image: '/web-start-studio-og.webp'
        },
        portfolio: {
            title: 'Портфоліо - WebStart Studio',
            description: 'Наші роботи та проекти',
            keywords: 'портфоліо, проекти, роботи',
            image: '/web-start-studio-og.webp'
        },
        about: {
            title: 'Про нас - WebStart Studio',
            description: 'Історія та команда WebStart Studio',
            keywords: 'про компанію, команда, історія',
            image: '/web-start-studio-og.webp'
        },
        contact: {
            title: 'Контакти - WebStart Studio',
            description: 'Зв\'яжіться з нами для обговорення проекту',
            keywords: 'контакти, зв\'язок, телефон, email',
            image: '/web-start-studio-og.webp'
        }
    };

    return pages[page] || pages.home;
};