define([
  'app.includes',
  'eon_servicios/serviciosEON'
], 


function (angularAMD){//,slidePublicaciones) {


  'use strict';

  var componente = angular.module('publicacionesComponente', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'ngAria',
    'serviciosEON'
  ]);

  componente.config(
    function ($stateProvider, registerRoutesProvider) {

      registerRoutesProvider.register([{name:"Robert"}]);

   
      $stateProvider
        .state('app.publicaciones', 
          angularAMD.route({
              url: '/publicaciones',
              views  : {
                  'content@app': {
                      templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
                      controller: 'ListadoCtrl as vm'          
                  }
              },
              controllerUrl: 'eon_componentes/publicaciones/listado/listado.controller'              
          })
        );
        
      $stateProvider.state('app.publicacionesficha', 
          angularAMD.route({
              url: '/publicaciones/:id',
              views  : {
                  'content@app': {
                      templateUrl: 'eon_componentes/publicaciones/ficha/ficha.html',
                      controller: 'FichaCtrl as vm'                      
                  }
              },
              controllerUrl: 'eon_componentes/publicaciones/ficha/ficha.controller'           
          })
        );

  });

  componente.run(function(directiveLoader,readerJSON){
    console.log("Modulo corriendo");

    var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
      
      directiveLoader.load(response.data.directives);
    }); 

  });

  return componente;

});