const C='afterlife-v1';
self.addEventListener('install',e=>{ self.skipWaiting(); });
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{ const r=e.request; if(r.method!=='GET'||!r.url.startsWith(self.location.origin)) return;
  e.respondWith(caches.open(C).then(c=>c.match(r).then(hit=>{ const net=fetch(r).then(res=>{ if(res.ok) c.put(r,res.clone()); return res; }).catch(()=>hit); return hit||net; }))); });
