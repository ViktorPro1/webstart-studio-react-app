import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ua from './locales/ua.json';
import en from './locales/en.json';
import pl from './locales/pl.json';
import cs from './locales/cs.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ua: { translation: ua },
            en: { translation: en },
            pl: { translation: pl },
            cs: { translation: cs },
            fr: { translation: fr },
            de: { translation: de }
        },
        lng: 'ua', // мова за замовчуванням
        fallbackLng: 'ua',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;