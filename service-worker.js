importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

const cacheName = 'MarkupCache_v1';

const component_path = "./src/components/"

precachedAssets = ["./index.html",component_path+"Login_Signup/Lspage.js",component_path+"Login_Signup/Spage.js", component_path+"Login_Signup/LSstyle.css", component_path+"Login_Signup/Otp.js" ]

self.addEventListener('install',(event)=>{
    event.waitUntil(caches.open(cacheName).then((cache)=>{
        return cache.addAll(precachedAssets);
    }))
});

// workbox.routing.registerRoute(
//     ({request})=>request.destination==='image',
//     new workbox.strategies.CacheFirst()
// );

self.addEventListener('fetch',(event)=>{
    const url = new URL(event.request.url);
    const isPrecached = precachedAssets.includes(url.pathname);

    if(isPrecached){
        event.respondWith(caches.open(cacheName).then((cache)=>{
            return cache.match(event.request.url);
        }))
    }
    else{
        return;
    }
})