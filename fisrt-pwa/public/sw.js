let cacheData = "AppV1";
this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
           return  cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/about',
                '/users'

            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
   if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then((response)=>{
            if(response){
                return response
            }
            let requestUrl = event.request.clone();
            return fetch(requestUrl)
        })
    )
   }
})