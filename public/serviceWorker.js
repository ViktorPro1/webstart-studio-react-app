/* eslint-disable no-restricted-globals */

const CACHE_NAME = "webstart-cache-v2"; // ← Збільшуй версію при кожному оновленні
const urlsToCache = [
    "/",
    "/index.html",
    "/logo192.png",
    "/logo512.png",
    "/favicon.ico"
];

// Встановлення Service Worker і кешування файлів
self.addEventListener("install", (event) => {
    console.log('[SW] Installing new version...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[SW] Caching files');
            return cache.addAll(urlsToCache);
        }).then(() => {
            // Примусово активувати новий SW одразу
            return self.skipWaiting();
        })
    );
});

// Активація SW і видалення старих кешів
self.addEventListener("activate", (event) => {
    console.log('[SW] Activating new version...');
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
        ).then(() => {
            // Захоплюємо контроль над всіма сторінками одразу
            return self.clients.claim();
        }).then(() => {
            // Відправляємо повідомлення всім клієнтам про оновлення
            return self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'UPDATE_AVAILABLE',
                        version: CACHE_NAME
                    });
                });
            });
        })
    );
});

// Підвантаження ресурсів із кешу або мережі
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Повертаємо кеш або завантажуємо з мережі
            return response || fetch(event.request).then(fetchResponse => {
                // Кешуємо нові запити (опціонально)
                if (event.request.method === 'GET' && !event.request.url.includes('/api/')) {
                    return caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, fetchResponse.clone());
                        return fetchResponse;
                    });
                }
                return fetchResponse;
            });
        })
    );
});

// Слухаємо повідомлення від клієнта
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});