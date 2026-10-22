// Offline support for Golf Stroke Tempo.
// The page is loaded fresh from the internet whenever possible, so updates show up right away.
// The saved copy is used only when there is no connection (for example on the course).
const VERSION = 'golf-stroke-tempo-v2';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png'
];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(VERSION)
      .then(c => c.addAll(APP_SHELL.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network first, saved copy as fallback. Every successful load refreshes the saved copy.
// Only this version's saved copies are used, so an older version can never come back.
function networkFirst(req, fallbackUrl) {
  return fetch(new Request(req.url, { cache: 'no-store', credentials: 'same-origin' }))
    .then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req.url, copy)); }
      return res;
    })
    .catch(() => caches.open(VERSION).then(c => c.match(req.url, { ignoreSearch: true })
      .then(hit => hit || (fallbackUrl ? c.match(fallbackUrl) : undefined))));
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.origin === self.location.origin) {
    // The page itself and its manifest: always try for the newest version.
    if (req.mode === 'navigate' || url.pathname.endsWith('/') || url.pathname.endsWith('.html') || url.pathname.endsWith('.webmanifest')) {
      event.respondWith(networkFirst(req, './index.html'));
      return;
    }
    // Icons and other files rarely change: saved copy first, internet if missing.
    event.respondWith(caches.open(VERSION).then(c => c.match(req.url, { ignoreSearch: true })).then(hit => hit || networkFirst(req)));
    return;
  }

  // Google Fonts: saved copy first so the app looks right offline.
  if (FONT_HOSTS.includes(url.hostname)) {
    event.respondWith(
      caches.open(VERSION).then(cache => cache.match(req).then(hit => {
        const net = fetch(req).then(res => { cache.put(req, res.clone()); return res; }).catch(() => hit);
        return hit || net;
      }))
    );
  }
});
