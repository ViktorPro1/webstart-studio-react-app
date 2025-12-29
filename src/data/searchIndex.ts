// Файл формує плоский масив для пошуку по всіх пунктах меню.
// Використовуються три групи меню: servicesItems, additionalItems, aboutItems.
// Функція flattenMenu проходить по кожному пункту та підпункту (submenu)
// і додає їх до масиву SearchEntry з label та path.
// Результат – searchIndex, який можна використовувати для автокомпліту або пошуку по сайту.



import { servicesItems, additionalItems, aboutItems } from './menuData';

interface MenuItem {
  label: string;
  path?: string;
  submenu?: MenuItem[];
}

interface SearchEntry {
  label: string;
  path: string;
}

const flattenMenu = (items: MenuItem[]): SearchEntry[] => {
  const result: SearchEntry[] = [];

  items.forEach((item: MenuItem) => {
    if (item.path && item.label) {
      result.push({ label: item.label, path: item.path });
    }

    if (item.submenu) {
      item.submenu.forEach((sub: MenuItem) => {
        if (sub.path && sub.label) {
          result.push({ label: sub.label, path: sub.path });
        }
      });
    }
  });

  return result;
};

export const searchIndex: SearchEntry[] = [
  ...flattenMenu(servicesItems as MenuItem[]),
  ...flattenMenu(additionalItems as MenuItem[]),
  ...flattenMenu(aboutItems as MenuItem[])
];

