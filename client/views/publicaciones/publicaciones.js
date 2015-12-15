'use strict';

angular.module('eonRouter')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/publicaciones', {
        templateUrl: 'views/publicaciones/publicaciones.html',
        controller: 'PublicacionesCtrl',
        controllerAs: 'vm'
      });
  });
