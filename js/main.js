if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/ssw.js',
		{scope: '/'}).then(function(reg) {

	}).catch(function(error) {
		console.log(error);
	});
}