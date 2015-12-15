define([
  'app.includes',
  './listado/listado.controller',
  './ficha/ficha.controller'
], 


function (angularAMD, ListadoCtrl, FichaCtrl) {

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
    'ngAria'
  ]);

  componente.config(
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

      console.log('Modulo configurado');

      // Now set up the states

      $stateProvider
        .state('publicaciones', 

          angularAMD.route({
              url: '/publicaciones',
              templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
              controller: 'ListadoCtrl',
              controllerUrl: 'eon_componentes/publicaciones/listado/listado.controller',
              controllerAs: 'vm'
          })
        );
        
      $stateProvider.state('publicacionesficha', 

          angularAMD.route({
              url: '/publicaciones/:id',
              templateUrl: 'eon_componentes/publicaciones/ficha/ficha.html',
              controller: 'FichaCtrl',
              controllerUrl: 'eon_componentes/publicaciones/ficha/ficha.controller',
              controllerAs: 'vm'
          })
        );

      //$locationProvider.html5Mode(true);

  });

  componente.controller('ListadoCtrl', ListadoCtrl);
  componente.controller('FichaCtrl', FichaCtrl);

  return componente;

});