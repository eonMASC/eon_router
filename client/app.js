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
      .state('pagina',{
        abstract: true,
        template: "<div id='page_container' ng-view='pagina_viewer'></div>"
      })
      .state('notfound',{
        url: "/404",
        template: "<h1>Error 404</h1>"
      });    
    
    $urlRouterProvider.otherwise(callBackOtherwise);

    $locationProvider.html5Mode(true);

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
                addPageState: function(nombre, url) {
                    $stateProvider.state(nombre, {
                          url: '/' + nombre,
                          //views: {
                          //  "@pagina_viewer": {
                              templateUrl: url,
                              controller: 'PageViewerCtrl as vm'
                          //  }
                          //}
                          
                    });
                }
            }
        }
    });


  App.controller('PageViewerCtrl', function(){
    var vm = this;


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
    //var $rootScope = $injector.get('$rootScope');
    var $newState = $injector.get('$newState');

    var sState = $location.url();       

    $http.post('/mapper/url',{url: $location.url()}).
      then(function success(respuesta){
        console.log('Respuesta: ',respuesta.data);
        if(respuesta.data.success){
          if(respuesta.data.map.tipo == 'componente'){
            $ocLazyLoad.load(respuesta.data.map.componenteURL).then(function(){
              $urlRouter.sync();
            });
          } else if(respuesta.data.map.tipo == 'pagina'){
            $newState.addPageState(respuesta.data.map.nombre, respuesta.data.map.url);
            $urlRouter.sync();
          }          
        } else {            
          $location.url('/404');
        }            
      });
            
  }

  return angularAMD.bootstrap(App);
});
