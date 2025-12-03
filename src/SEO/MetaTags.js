export const getMetaTags = (page) => {
    const pages = {
        home: {
            title: 'WebStart Studio - Головна',
            description: 'Створення професійних лендінгів, портфоліо та резюме',
            keywords: 'веб студія, лендінги, портфоліо, резюме'
        },
        services: {
            title: 'Наші послуги - WebStart Studio',
            description: 'Повний спектр послуг веб-розробки та дизайну',
            keywords: 'веб-розробка, веб-дизайн, послуги'
        },
        portfolio: {
            title: 'Портфоліо - WebStart Studio',
            description: 'Наші роботи та проекти',
            keywords: 'портфоліо, проекти, роботи'
        },
        about: {
            title: 'Про нас - WebStart Studio',
            description: 'Історія та команда WebStart Studio',
            keywords: 'про компанію, команда, історія'
        },
        contact: {
            title: 'Контакти - WebStart Studio',
            description: 'Зв\'яжіться з нами для обговорення проекту',
            keywords: 'контакти, зв\'язок, телефон, email'
        }
    };

    return pages[page] || pages.home;
};