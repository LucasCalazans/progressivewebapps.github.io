this.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('0.0.1').then(function(cache) {
			return cache.addAll([
				'/index.html',
				'/css/',
				'/js/',
				'/resources/'
			]);
		})
	);
});

this.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			return response || fetch(event.request);
		})
	);
});