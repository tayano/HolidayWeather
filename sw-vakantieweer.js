// Service Worker voor Vakantieweer app
const CACHE_NAME = 'vakantieweer-v1';
const urlsToCache = [
  '/vakantieweer-app.html',
  '/manifest-vakantieweer.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
