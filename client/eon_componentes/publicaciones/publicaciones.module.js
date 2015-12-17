define([
  'app.includes',
 // 'eon_componentes/publicaciones/directives/slidePublicaciones',
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
    function ($stateProvider) {

      //registerRoutesProvider.register([{name:"Robert"}]);

      // Now set up the states
      $stateProvider
        .state('eonSite.publicaciones', 
          angularAMD.route({
              url: '/publicaciones',
              templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
              controller: 'ListadoCtrl as vm',
              controllerUrl: 'eon_componentes/publicaciones/listado/listado.controller'
          })
        );
        
      $stateProvider.state('eonSite.publicacionesficha', 
          angularAMD.route({
              url: '/publicaciones/:id',
              templateUrl: 'eon_componentes/publicaciones/ficha/ficha.html',
              controller: 'FichaCtrl as vm',
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