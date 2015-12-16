'use strict';

angular.module('eonRouter')
  .controller('HomeCtrl', function ($scope) {

    var vm = this;

    $scope.$parent.eonSite.titulo = 'Listado de Noticias';

    angular.extend(vm, {
      name: 'HomeCtrl'
    });

  });
