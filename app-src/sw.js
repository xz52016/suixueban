/* ====== 穗学伴 · Service Worker (离线缓存) ====== */

const CACHE_NAME = 'suixue-v1';

// 需要缓存的静态资源
const PRECACHE_URLS = [
  './',
  './index.html',
  './manifest.json',
  './css/theme.css',
  './css/layout.css',
  './css/components.css',
  './js/router.js',
  './js/store.js',
  './js/guide-data.js',
  './js/voice.js',
  './js/quiz-engine.js',
  './js/app.js',
  './data/三年级下册_题库.json',
  './assets/icons/icon.svg',
  './assets/icons/icon-180.png',
  './assets/icons/icon-192.png',
  './assets/icons/icon-512.png'
];

// 安装：预缓存所有资源
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => {
      self.skipWaiting();
    })
  );
});

// 激活：清理旧缓存
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// 拦截请求：缓存优先，网络后备
self.addEventListener('fetch', event => {
  // 只缓存同源请求
  if (!event.request.url.startsWith(self.location.origin)) return;
  
  // 跳过非 GET 请求
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      // 有缓存直接用（离线优先）
      if (cached) return cached;

      // 无缓存则去网络获取
      return fetch(event.request).then(response => {
        // 只缓存有效响应
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        // 克隆一份存入缓存
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, clone);
        });
        return response;
      }).catch(() => {
        // 网络也失败：如果是页面请求，返回离线提示
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
        return new Response('离线中', { status: 503 });
      });
    })
  );
});
