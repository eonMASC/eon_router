'use strict';


exports.index = function (req, res) {

	var myJson = {},
		success = true,
		componenteName = req.body.url.split('/')[1];

	var arrPaginas = [
		'primera_pagina',
		'segunda_pagina',
		'ultima_pagina'
	]

	switch(componenteName){
		case 'home':
			myJson = {
				tipo: 'componente',
				componenteURL: "home",
			}
			break;		
		case 'publicaciones':

			myJson = {
				tipo: 'componente',
				componenteURL: "eon_componentes/publicaciones/publicaciones.module.js"
			}
			break;
		default:
			var pagina = req.body.url.replace('/','');

			if((arrPaginas.indexOf(pagina) > -1)){
				myJson = {
					tipo: 'pagina',
					nombre: pagina,
					url: "paginas/" + pagina + ".html"
				};
			} else {
				myJson = {};
				success = false;
			}			
			
	}

	res.json({
		success: success,
		map: myJson
	});

};