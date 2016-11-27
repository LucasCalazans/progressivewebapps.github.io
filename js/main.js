if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/ssw.js',
		{scope: '/'}).then(function(reg) {
		console.log("Service Worker registrado");
	}).catch(function(error) {
		console.log(error);
	});
}