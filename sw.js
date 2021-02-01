const cacheName = 'v3';

const cacheAssets = [
    'Index.html',
    'style.css',
    'index.js',
    'paper_00029.jpg'
];

console.log(self+"その1");
self.addEventListener('install', async(ev) =>{
    console.log("SW: install eventが発火");
    console.log(self+"その2");
    ev.waitUntil((async () =>{
        const cache = await caches.open(cacheName);
        cache.addAll(cacheAssets);
        return self.skipWaiting();
    })());
});


self.addEventListener('activate', async(ev) =>{
    console.log("SW: activate eventが発火");
    ev.waitUntil((async () =>{
        const keys = await caches.keys();
        console.log(keys);
        const targets = keys.filter(key => key !== cacheName);
        console.log(targets);
        return Promise.all(targets.map(target => CacheStorage.delete(target)));
    })());

});

self.addEventListener('fetch', async(ev) =>{
    ev.respondWith((async () =>{
        const hit = await caches.match(ev.request);
        if (hit){
            return hit;
        }

        try{
            const res = await fetch(ev.request);
            const resClone = res.clone();
            const cache = await caches.open(cacheName);
            cache.put(ev.rewuest, resClone);
            return res;
        }catch(error){
            return new Response(error);
        }
     })());

});