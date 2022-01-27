function soyAsincrona(miCallback) {
	setTimeout(function() {
		console.log('Soy una función asincrona');
		miCallback();
	}, 1000)
}

console.log('Iniciando proceso...');
soyAsincrona(function(){
	console.log('Terminando proceso');
});
