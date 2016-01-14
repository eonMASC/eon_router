define([
  'sassjs',
  'eon_servicios/serviciosEON'
], 


function (){//,slidePublicaciones) {
  'use strict';

  var componente = angular.module('fuseUiComponente', [
    'app.core',
    'ui.router',
    'serviciosEON'
  ]);

  componente.constant("CONFIG", {
     "estados":[
        {          
          "state": "sitio.fuse_ui", // sitio.publicaciones
          "url": "/fuse",
          "path": "/eon_componentes/fuse_ui/",
          "views":{
              "content@sitio":"indice"                                                     
          }     
        },{          
          "state": "sitio.fuse_ui-timeline", // sitio.publicaciones
          "url": "/fuse/timeline",
          "path": "/eon_componentes/fuse_ui/",
          "views":{
              "content@sitio":"timeline"                                                     
          },
          "resolve": {
              Timeline : function (apiResolver){
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
              } 
          }    
        }       
     ]
  });

  componente.config(function ($stateProvider, msNavigationServiceProvider, registraEstadosProvider, CONFIG) {
     
    // Navigation
        msNavigationServiceProvider.saveItem('pages', {
            title : 'PAGES',
            group : true,
            weight: 2
        });                     
        registraEstadosProvider.addModovisual(CONFIG.estados);

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