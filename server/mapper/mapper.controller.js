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


			if(pagina == ''){ // Pagina Raiz /
				myJson = {
					tipo: 'pagina',
					nombre: 'pagina_inicio',
					paginaTitulo: 'Pagina de Inicio',
					url: "views/home/home.html"
				};
			}else if (pagina == 'pagina_bloques1'){
				myJson = {
					tipo: 'pagina_bloques',
					nombre: pagina,
					paginaTitulo: 'Titulo de ' + pagina.toUpperCase(),
					bloques: [
						{
							tipo: 'bloque',
							titulo: 'Test Bloque 1',
							componente: 'eon_componentes/publicaciones/publicaciones.module.js',
							modo_visual: {
								view: 
							} 
						}

					]
				};

			} else if((arrPaginas.indexOf(pagina) > -1)){ // Pagina registrada
				myJson = {
					tipo: 'pagina',
					nombre: pagina,
					paginaTitulo: 'Titulo de ' + pagina.toUpperCase(),
					url: "paginas/" + pagina + ".html"
				};
			} else { //Ni componente ni pagina
				myJson = {};
				success = false;
			}			
			
	}

	res.json({
		success: success,
		map: myJson
	});

};