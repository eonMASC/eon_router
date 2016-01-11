define([
  //'eon_servicios/serviciosEON'
], 


function (){//,slidePublicaciones) {
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
    //'serviciosEON'
  ]);

  componente.config(function ($stateProvider) {

      //console.log('Publicaciones Config');

      // $eonRutasProvider.add({
      //   state: 'sitio.publicaciones',
      //   url: '/publicacion',
      //   path: '/durango_angular/componentes/publicaciones/',
      //   views: {
      //     'content@sitio':'listado'
      //   }
      // });

     
   
      $stateProvider.state('sitio.publicaciones', 
          {
            url: '/publicaciones',
            views  : {
                'content@sitio': {
                    templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
                    controller: 'ListadoCtrl as vm',
                }
            },
            resolve: {
              loadCtrl: function($q){
                 var deferred = $q.defer();
                  require(['eon_componentes/publicaciones/listado/listado.controller.js'], function(){   
                    deferred.resolve();
                  });
                 return deferred.promise;
              }
            }
          }
        );
        
      $stateProvider.state('sitio.publicacionesficha', 
          {
            url: '/publicaciones/:id',
            views  : {
                'content@sitio' : {
                    templateUrl : 'eon_componentes/publicaciones/ficha/ficha.html',
                    controller : 'FichaCtrl as vm',                     
                }
            },
            resolve: {
              loadCtrl: function($q){
                 var deferred = $q.defer();
                  require(['eon_componentes/publicaciones/ficha/ficha.controller.js'], function(){   
                    deferred.resolve();
                  });
                 return deferred.promise;
              }
            }                               
          }
        );

  });

  // componente.run(function(directiveLoader,readerJSON, registerStates){
  //   console.log("Modulo corriendo");

  //   // registro de estados de modos visuales del componente
  //   registerStates('eon_componentes/publicaciones/','config.json');

  //   var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
      
  //     directiveLoader.load(response.data.directives);
  //   }); 

  // });

  return componente;

});