'use strict';


exports.index = function (req, res) {

	var myJson = {},
		success = true,
		componenteName = req.body.url.split('/')[1];

	switch(componenteName){
		case 'home':
			myJson = {
				//stateTo: "home",
				componenteURL: "home",
			}
			break;		
		case 'publicaciones':

			myJson = {
				//stateTo: "publicaciones",
				componenteURL: "./eon_componentes/publicaciones/publicaciones.module.js"
			}
			break;
		default:
			myJson = {
				name: componenteName
			};
			success = false;
	}

	res.json({
		success: success,
		map: myJson
	});

};