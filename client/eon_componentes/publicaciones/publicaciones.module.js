define([
  'app.includes',
    'eon_servicios/serviciosEON'
], 


function (angularAMD) {

  'use strict';

  console.log('Modulo cargado');

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

      console.log('Modulo configurado');

      // Now set up the states

      $stateProvider
        .state('publicaciones', 
          angularAMD.route({
              url: '/publicaciones',
              templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
              controller: 'ListadoCtrl as vm',
              controllerUrl: 'eon_componentes/publicaciones/listado/listado.controller'
          })
        );
        
      $stateProvider.state('publicacionesficha', 
          angularAMD.route({
              url: '/publicaciones/:id',
              templateUrl: 'eon_componentes/publicaciones/ficha/ficha.html',
              controller: 'FichaCtrl as vm',
              controllerUrl: 'eon_componentes/publicaciones/ficha/ficha.controller'
          })
        );

  });

  return componente;

});