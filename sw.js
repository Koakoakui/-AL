self.addEventListener("install",e=>{
  e.waitUntil(caches.open("calendar").then(cache=>cache.addAll(["index.html","manifest.json"])))
})
