// factory to read a json file
define([
  'app.includes',
], 
function (angularAMD) {

  'use strict';
  var modulo = angular.module('serviciosEON', []);
    // Service to read a JSON file
    modulo.factory("readerJSON", ["$http", function($http){                                 
        var result = [];
        var objFn = {};
        // Return data content inside json file
        objFn.getData = function($pathRelativeFile){              
            return $http.get($pathRelativeFile).success(function(response){
                    result = response;
            });                                     
        }
        return objFn;    
    }]);
    modulo.provider("registerStates", function($stateProvider){
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
                    var asNameController = controllerName + " as vm";
                    var controllerUrl = path + vista + '/' + vista + '.controller';
                    var params = state.params != ""? "/" + state.params : "";
                    var url = state.url;
                    var configState = {
                        url: url + params,
                        templateUrl: tplUrl,
                        controller: controller,
                        controllerUrl: controllerUrl
                    };
                    /*console.log(tplUrl);
                    console.log(controller);
                    console.log(controllerUrl);*/
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
      }); 
    modulo.service('directiveLoader',["$ocLazyLoad",function($ocLazyLoad){

        var obj={

          objDirectives:{},
          
          load: function(objPaths){

            this.objDirectives=objPaths;

            angular.forEach(this.objDirectives, function(directive, key) {
              
              console.log("a cargar", directive.name);
              
              $ocLazyLoad.load(directive.directiveUrl).then(function(){
                console.log("se cargo con exito", directive.directiveUrl);
              })
            })


          }
        };

        return obj;
    }]); 
  return modulo;

});