if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/ssw.js',
		{scope: '/'}).then(function(reg) {
		// Service worker registrado!
	}).catch(function(error) {
		// Não foi possível  registrar o Service Worker
		console.log(error);
	});
}