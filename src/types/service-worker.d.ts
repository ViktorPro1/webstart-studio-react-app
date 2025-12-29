// Цей файл розширює глобальні типи TypeScript
// Ми додаємо нову подію до об'єкта window, щоб TypeScript знав про неї
// Конкретно тут ми додаємо подію 'swUpdate', яка буде викликатися
// коли Service Worker оновлюється. Тип події — CustomEvent<ServiceWorkerRegistration>.

declare global {
  interface WindowEventMap {
    'swUpdate': CustomEvent<ServiceWorkerRegistration>;
  }
}

export {};
