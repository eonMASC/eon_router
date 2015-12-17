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
    'oc.lazyLoad',
    /*'readJSON'*/
  ]);

  App.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(callBackOtherwise);

    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('indigo')
      .warnPalette('red');


    $stateProvider.state({
        name: 'eonSite',
        abstract: true,
        templateUrl: 'views/eon/cascaron.html',
        controller: 'EonSiteCtrl as eonSite'
    });

    /*
    $stateProvider.state({
        name: 'eonSite.inicio',
        url: '/',
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    });
    */

    $stateProvider.state({
        name: 'eonSite.notfound',
        url: '/404',
        templateUrl: 'views/404/404.html',
        //controller: 'HomeCtrl'
    });  

  });

  App.provider('$newState', function($stateProvider){
        this.$get = function($state){
            return {
                /**
                 * @function app.dashboard.dashboardStateProvider.addState
                 * @memberof app.dashboard
                 * @param {string} title - the title used to build state, url & find template
                 * @param {string} controllerAs - the controller to be used, if false, we don't add a controller (ie. 'UserController as user')
                 * @param {string} templatePrefix - either 'content', 'presentation' or null
                 * @author Alex Boisselle
                 * @description adds states to the dashboards state provider dynamically
                 * @returns {object} user - token and id of user
                 */
                addPageState: function(nombre, url, data) {
                    $stateProvider.state('eonSite.' + nombre, {
                          url: '/' + (nombre == 'pagina_inicio' ? '' : nombre) ,                          
                          templateUrl: url,
                          controller: 'PageViewerCtrl as vm',
                          data: data   
                    });
                }
            }
        }
    });

  /*
  App.controller('HomeCtrl', function($scope){
    var vm = this;

    $scope.$parent.eonSite.titulo = 'Inicio';

  });
*/

  App.controller('PageViewerCtrl', function($scope, $state, $ocLazyLoad){
    var vm = this;

    $scope.$parent.eonSite.titulo = $state.current.data.titulo;

  });

  App.controller('EonSiteCtrl', function($mdSidenav, $state, $mdDialog){
    var vm = this;           

    vm.onClickMenu = function () {
        $mdSidenav('left').toggle();
    };

    vm.viewState = function (ev){
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

    vm.titulo = "durango.gob.mx";

  });

  function callBackOtherwise($injector, $location){
    var $http = $injector.get('$http');
    var $ocLazyLoad = $injector.get('$ocLazyLoad');
    var $urlRouter = $injector.get('$urlRouter');
    //var $rootScope = $injector.get('$rootScope');
    var $newState = $injector.get('$newState');

    var sState = $location.url();       

    $http.post('/mapper/url',{url: $location.url()}).
      then(function success(respuesta){
        
        //console.log('Respuesta: ',respuesta.data);
        
        if(respuesta.data.success){
          if(respuesta.data.map.tipo == 'componente'){
            $ocLazyLoad.load(respuesta.data.map.componenteURL).then(function(){
              $urlRouter.sync();
            });
          } else if(respuesta.data.map.tipo == 'pagina'){
            $newState.addPageState(respuesta.data.map.nombre, respuesta.data.map.url, {titulo: respuesta.data.map.paginaTitulo});
            $urlRouter.sync();
          }          
        } else {            
          $location.url('/404');
        }            
      });
            
  }

  return angularAMD.bootstrap(App);
});
