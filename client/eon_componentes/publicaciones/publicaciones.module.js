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
    function ($stateProvider) {

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