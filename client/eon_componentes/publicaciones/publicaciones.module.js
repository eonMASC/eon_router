define([
  'eon_servicios/serviciosEON'
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
    'serviciosEON'
  ]);
  componente.constant("CONFIG",
      {"modos_visuales":[
        {          
          "state": "sitio.publicaciones", // sitio.publicaciones
          "url": "/publicaciones",
          "path": "/eon_componentes/publicaciones/",
          "views":{
              "content@sitio":"listado"                                                     
          },
          "resolve": {
            test: function(){
              console.log("hola que hace");
            },
            mifuncion: function(){
              console.log("aqui haciendo merge en resolve para publicaciones")
            }
          }         
        },
        {          
          "state": "sitio.publicacionesficha", // sitio.publicaciones
          "url": "/publicaciones/",
          "params":":id",
          "path": "/eon_componentes/publicaciones/",
          "views":{
              "content@sitio":"ficha",
              "simontas@sitio.publicacionesficha":"otras_publicaciones-" ///// con - no usaria control                                       
          }          
        }                
     ]}
  );

  componente.config(function ($stateProvider, registraEstadosProvider, CONFIG) {

      //console.log('Publicaciones Config');

      // $eonRutasProvider.add({
      //   state: 'sitio.publicaciones',
      //   url: '/publicacion',
      //   path: '/durango_angular/componentes/publicaciones/',
      //   views: {
      //     'content@sitio':'listado'
      //   }
      // });         
          registraEstadosProvider.addModovisual(CONFIG.modos_visuales);
   
    /*  $stateProvider.state('sitio.publicaciones', 
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
        );*/

  });

  componente.run(function(){
    console.log("************** Modulo publicaciones corriendo");

  //   // registro de estados de modos visuales del componente
//    registraEstadosProvider.add(CONFIG.modos_visuales);

  //   var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
      
  //     directiveLoader.load(response.data.directives);
  //   }); 

   });

  return componente;

});