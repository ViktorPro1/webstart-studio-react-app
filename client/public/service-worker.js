const CACHE_NAME = "webstart-cache-v84";

// ── URL які НЕ кешуємо ──
const NEVER_CACHE = [
    'railway.app',
    '/api/',
];

const shouldSkipCache = (url) =>
    NEVER_CACHE.some((pattern) => url.includes(pattern));

self.addEventListener("install", (event) => {
    console.log('[SW] Install');
    event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
    console.log('[SW] Activate');
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    if (event.request.method !== 'GET') return;

    // ── API запити — завжди мережа, без кешу ──
    if (shouldSkipCache(event.request.url)) {
        event.respondWith(fetch(event.request));
        return;
    }

    // Для HTML - завжди спочатку мережа
    const acceptHeader = event.request.headers.get('accept');
    if (acceptHeader && acceptHeader.includes('text/html')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clonedResponse = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, clonedResponse);
                    });
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Для CSS - завжди спочатку мережа
    if (event.request.url.endsWith('.css')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clonedResponse = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, clonedResponse);
                    });
                    return response;
                })
                .catch(() => caches.match(event.request))
        );
        return;
    }

    // Для JS, зображень - спочатку кеш
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) return response;

            return fetch(event.request)
                .then(response => {
                    if (!response || response.status !== 200 || response.type === 'error') {
                        return response;
                    }
                    const responseToCache = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, responseToCache);
                    });
                    return response;
                })
                .catch(() => {
                    return new Response('Offline', { status: 408, statusText: 'Network failed' });
                });
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});