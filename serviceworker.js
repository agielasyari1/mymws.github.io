var cacheName = 'mymws';
var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/project1/index.html',
    '/project1/kalkulator.js',
    '/project1/style.css',
    '/project2/index.html',
    '/project2/style.css',
    '/project2/peta.js',
    '/project3/index.html',
    '/project3/style.css',
    '/project3/peta.js',
    '/project3/peta.json',
    '/project4/index.html',
    '/project4/style.css',
    '/project5/index.html',
    '/project5/about.html'

];
self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});