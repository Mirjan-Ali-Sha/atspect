// Minimal Service Worker to satisfy PWA installability requirements
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Basic fetch handler (network falling back to cache can be added here later)
    // For now, doing nothing allows the app to be installable.
});
