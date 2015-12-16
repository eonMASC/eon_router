define([
  'app.includes'
], 


function (angularAMD) {

  'use strict';

  var proveedorEstados = {};

  var App = angular.module('eonRouter', [
    'ui.router',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ngMaterial',
    'ngMessages',
    'ngAria',
    'oc.lazyLoad'
  ]);

  App.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // Now set up the states
    $stateProvider
      .state('inicio', {
        url: "/",
        templateUrl: "views/home/home.html"
      })
      .state('otra', {
        url: "/todo/lo/demas",
        templateUrl: "views/home/home.html"
      })
      .state('notfound',{
        url: "/404",
        template: "<h1>Error 404</h1>"
      });    
    
    $urlRouterProvider.otherwise(callBackOtherwise);

    $locationProvider.html5Mode(true);

  });

  App.controller('AppCtrl', function($mdSidenav, $state, $mdDialog, $ocLazyLoad){
    var vm = this;

    var $stateProvider = proveedorEstados;

    vm.toggleMenu = function () {
      $mdSidenav('menu_principal').toggle();
        
    };

    vm.viewState = function (ev){
      console.log($state);

      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .title('Aviso')
          .textContent('Ver Estado: ' + $state.current.url)
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    }

    vm.cargaPublicaciones = function(){
      $ocLazyLoad.load('./eon_componentes/publicaciones/publicaciones.module.js')
    }

    vm.titulo = "durango.gob.mx";

  });

  function callBackOtherwise($injector, $location){
    var $http = $injector.get('$http');
    var $ocLazyLoad = $injector.get('$ocLazyLoad');
    var $urlRouter = $injector.get('$urlRouter');
    var $rootScope = $injector.get('$rootScope');

    var sState = $location.url();       

    $http.post('/mapper/url',{url: $location.url()}).
      then(function success(respuesta){
        console.log('Respuesta: ',respuesta.data);
        if(respuesta.data.success){
          $ocLazyLoad.load(respuesta.data.map.componenteURL).then(function(){
            $urlRouter.sync();
          });
        } else {            
          $location.url('/404');
        }            
      });
            
  }

  return angularAMD.bootstrap(App);
});
