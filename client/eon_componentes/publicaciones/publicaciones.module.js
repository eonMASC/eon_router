define([
  'app.includes',
 // 'eon_componentes/publicaciones/directives/slidePublicaciones',
  'eon_servicios/serviciosEON'
], 


function (angularAMD){//,slidePublicaciones) {


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
  //componente.constant("Publicacion",{rutaBase:'eon_componentes/publicaciones/'});
  componente.config(
    function ($stateProvider, $provide) {

      //registerRoutesProvider.register([{name:"Robert"}]);
      /*$provide.provider("registerX", function($stateProvider){
        var data;
        return {                  
          $get: function($http, readerJSON, $state){
            return function(path, fileName){
              readerJSON.getData(path + fileName).then(function(response){
                if(response.data.modos_visuales){
                  //console.log(response.data.modos_visuales);
                  var states = response.data.modos_visuales;
                  angular.forEach(states, function(state, key){
                    //console.log(state);
                    var name = state.name;
                    var vista = state.vista;
                    var controllerName = state.controller;
                    var tplUrl = path + vista + '/' + vista +'.html';
                    var controller = controllerName + " as vm";
                    var controllerUrl = path + vista + '/' + vista + '.controller';
                    var params = state.params != ""? "/" + state.params : "";
                    var url = state.url;
                    var configState = {
                        url: url + params,
                        templateUrl: tplUrl,
                        controller: controller,
                        controllerUrl: controllerUrl
                    };                  
                    console.log(name);
                    console.log(configState);
                    $stateProvider.state('eonSite.' + name, 
                      angularAMD.route(configState)
                    );                    
                  });

                } else {
                  console.log("Error: no existe 'modos_visuales' en el json");
                }
              });              
            }
          }    
        }
      }); */     

      // Now set up the states
     /* $stateProvider
        .state('eonSite.publicaciones', 
          angularAMD.route({
              url: '/publicaciones',
              templateUrl: 'eon_componentes/publicaciones/listado/listado.html',
              controller: 'ListadoCtrl as vm',
              controllerUrl: 'eon_componentes/publicaciones/listado/listado.controller'
          })
        );
        
      $stateProvider.state('eonSite.publicacionesficha', 
          angularAMD.route({
              url: '/publicaciones/:id',
              templateUrl: 'eon_componentes/publicaciones/ficha/ficha.html',
              controller: 'FichaCtrl as vm',
              controllerUrl: 'eon_componentes/publicaciones/ficha/ficha.controller'
          })
        );*/

  });

  componente.run(function(directiveLoader,readerJSON, registerStates){
    console.log("Modulo corriendo");

    // registro de estados de modos visuales del componente
    registerStates('eon_componentes/publicaciones/','config.json');

    var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
      
      directiveLoader.load(response.data.directives);
    }); 

  });

  return componente;

});