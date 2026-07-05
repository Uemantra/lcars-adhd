const CACHE = 'lcars-adhd-v9';
const ASSETS = ['./', './index.html', './manifest.json', './icon.svg', './sw.js'];

self.addEventListener('install', e => {
  // cache: 'reload' bypasses the HTTP cache so a new SW never installs stale assets
  e.waitUntil(caches.open(CACHE).then(c =>
    Promise.all(ASSETS.map(a => c.add(new Request(a, { cache: 'reload' }))))
  ));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Network-first for page loads so new deployments appear on the next reload;
  // fall back to cache when offline.
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() =>
        caches.match(e.request).then(r => r || caches.match('./index.html'))
      )
    );
    return;
  }
  // Cache-first for other assets ('./index.html' — not '/index.html' — so the
  // offline fallback resolves correctly on a project Pages site).
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).catch(() => caches.match('./index.html')))
  );
});
