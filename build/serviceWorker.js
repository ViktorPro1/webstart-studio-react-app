/* eslint-disable no-restricted-globals */

const CACHE_NAME = "webstart-cache-v2";
const urlsToCache = [
    "/",
    "/index.html",
    "/manifest.json",
    "/favicon.ico"
];

// Встановлення Service Worker
self.addEventListener("install", (event) => {
    console.log('[SW] Install');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Caching files');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

// Активація SW
self.addEventListener("activate", (event) => {
    console.log('[SW] Activate');
    event.waitUntil(
        caches.keys()
            .then((keys) =>
                Promise.all(
                    keys
                        .filter((key) => key !== CACHE_NAME)
                        .map((key) => {
                            console.log('[SW] Deleting old cache:', key);
                            return caches.delete(key);
                        })
                )
            )
            .then(() => self.clients.claim())
    );
});

// Fetch
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});

// Слухаємо повідомлення
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});