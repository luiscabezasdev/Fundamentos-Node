function hola(nombre, miCallback) {
	return new Promise(function (resolve, reject)
		{
			setTimeout(function () {
				console.log('Hola ' + nombre);
				resolve();
			});
	}, 1500);
}

console.log('Iniciando el proceso..');
hola('Carlos')
	.then((nombre) => {
		console.log('Terminando el processo ');
	})
