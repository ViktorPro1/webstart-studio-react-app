/* eslint-disable no-restricted-globals */

const CACHE_NAME = "webstart-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/logo192.png",
    "/logo512.png",
    "/favicon.ico"
];

// Встановлення Service Worker і кешування файлів
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

// Активація SW і видалення старих кешів
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            )
        )
    );
});

// Підвантаження ресурсів із кешу або мережі
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});

