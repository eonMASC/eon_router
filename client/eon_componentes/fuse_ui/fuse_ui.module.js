define([
  'sassjs'
  //'eon_servicios/serviciosEON'
], 


function (){//,slidePublicaciones) {
  'use strict';

  var componente = angular.module('fuseUiComponente', [
    'app.core',
    'ui.router'
    //'serviciosEON'
  ]);

  componente.config(function ($stateProvider, msNavigationServiceProvider) {
     
    // Navigation
        msNavigationServiceProvider.saveItem('pages', {
            title : 'PAGES',
            group : true,
            weight: 2
        });


      $stateProvider.state('sitio.fuse_ui', 
          {
            url: '/fuse',
            views  : {
                'content@sitio': {
                    templateUrl: 'eon_componentes/fuse_ui/indice/indice.html',
                    controller: 'IndiceCtrl as vm',
                }
            },
            resolve: {
              loadCtrl: function($q){
                var deferred = $q.defer();
                  
                require(['eon_componentes/fuse_ui/indice/indice.controller.js'], function(){   
                  deferred.resolve();
                });

                return deferred.promise;
              }
            }
          }
        );

      $stateProvider.state('sitio.fuse_ui-timeline', 
          {
            url: '/fuse/timeline',
            views  : {
                'content@sitio': {
                    templateUrl: 'eon_componentes/fuse_ui/timeline/timeline.html',
                    controller: 'TimelineCtrl as vm',
                }
            },
            resolve: {
              Timeline : function (apiResolver)
                {
                    return apiResolver.resolve('timeline.page1@get');
                },
                           
              loadSCSS : function ($http, $q, $ocLazyLoad){

                var compileSCSS = false;

                if(!compileSCSS){
                  return $ocLazyLoad.load('eon_componentes/fuse_ui/timeline/timeline.css');
                } 

                var deferred = $q.defer();

                $http.get('eon_componentes/fuse_ui/timeline/timeline.scss').then(function(archivo) {
                  
                  var d = deferred;

                  var Sass = require('sassjs');
                  Sass.setWorkerUrl('bower_components/sass.js/dist/sass.worker.js');

                  // initialize a Sass instance
                  var sass = new Sass();

                  console.log('cargo SCSS', archivo.data);

                  sass.compile(archivo.data, function(result) {
                    //console.log(result);

                    if(result.status == 0){
                      console.log('compilo CSS', result.text);

                      $("<style type='text/css'>" + result.text + "</style>").appendTo("head");

                      d.resolve();
                    } else {
                      console.log(result);
                    }
                      
                  });                  
                });

                return deferred.promise;
              },
              
              loadCtrl: function($q){
                 var deferred = $q.defer();
                  require(['eon_componentes/fuse_ui/timeline/timeline.controller.js'], function(){   
                    deferred.resolve();
                  });
                 return deferred.promise;
              }
            }
          }
        );

  });

 componente.run(function(){
  console.log('Modulo Fuse runeado');
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