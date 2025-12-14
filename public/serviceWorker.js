/* eslint-disable no-restricted-globals */

const CACHE_NAME = "webstart-cache-v4"; // змінюй версію при оновленні
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/favicon.ico"
];

// Встановлення SW
self.addEventListener("install", (event) => {
    console.log('[SW] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching files');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // одразу активуємо новий SW
    );
});

// Активація SW
self.addEventListener("activate", (event) => {
    console.log('[SW] Activate');
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => {
                        console.log('[SW] Deleting old cache:', key);
                        return caches.delete(key);
                    })
            )
        ).then(() => self.clients.claim()) // беремо контроль над усіма вкладками
    );
});

// Fetch
self.addEventListener("fetch", (event) => {
    if (event.request.method !== 'GET') return; // кешуємо тільки GET

    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Отримання повідомлень
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
