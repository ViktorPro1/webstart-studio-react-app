// src/data/searchIndex.js
import { servicesItems, additionalItems, aboutItems } from './menuData';

const flattenMenu = (items) => {
    const result = [];

    items.forEach(item => {
        if (item.path && item.label) {
            result.push({ label: item.label, path: item.path });
        }

        if (item.submenu) {
            item.submenu.forEach(sub => {
                result.push({ label: sub.label, path: sub.path });
            });
        }
    });

    return result;
};

export const searchIndex = [
    ...flattenMenu(servicesItems),
    ...flattenMenu(additionalItems),
    ...flattenMenu(aboutItems)
];
