console.log(__dirname);
const fs = require('fs');

function leer(ruta, cb) {
	fs.readFile(ruta, (err, data) => {
		cb(data.toString());
	});
};


leer(__dirname + '/archivivo.txt', console.log);
