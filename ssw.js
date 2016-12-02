this.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('0.0.1').then(function(cache) {
			return cache.addAll([
				'/index.html',
				'/css/styles.css',
				'/js/main.js',
				'/resources/CaviarDreams.ttf'
			]);
		})
	);
});

this.onfetch = function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      console.log("fetch failure", event.request.url);
      return new Response("Request failed!");
    })
  );
}
