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
                    var name = state.nameUrl;
                    var vista = state.vista;
                    var controller = state.controller;                    
                    var tplUrl = path + vista + '/' + vista +'.html';
                    var as = (state.controllerAs && state.controllerAs != "")? " as " + state.controllerAs : " as vm";
                    var controllerUrl = path + vista + '/' + vista + '.controller';
                    var params = state.params != ""? "/" + state.params : "";
                    var url = state.url;

                    var configState = {
                        url: url + params,
                        views  : {
                            'content@sitio': {
                                templateUrl: tplUrl,
                                controller: controller + as                      
                            }
                        },                        
                        controllerUrl: controllerUrl
                    }
                    /*console.log(tplUrl);
                    console.log(controller);
                    console.log(controllerUrl);*/  
                    console.log(configState);                  
                    $stateProvider.state('sitio.' + name, 
                      angularAMD.route(configState)
                    );  
                    console.log("Estado y modos visual " + name + " registrado!");                  
                  });

                } else {
                  console.log("Error: no existe 'modos_visuales' en el json");
                }
              });              
            }
          }    
        }
      }); 

/* NUEVO PROVIDER TO REGISTER STATES ***************************/
modulo.provider("registerStatesNew", function($stateProvider){
        var data;
        var GLOBAL_STATE = "sitio";        
        return {                  
          $get: function($http, readerJSON, $state){
            return function(objEstados){              
              //readerJSON.getData(path + fileName).then(function(response){                
                  
                if(objEstados.length > 0){       
                  angular.forEach(objEstados, function(estado, key){                                        
                    
                    var state_principal = ((angular.isDefined(estado.sitio_state) && estado.sitio_state !== "")? estado.sitio_state : GLOBAL_STATE) + ".";
                    var state_tmp = (angular.isDefined(estado.state) && estado.state !== "")? angular.lowercase(estado.state) : "";
                    var state = state_principal + state_tmp;

                    var urlTmp = (angular.isDefined(estado.url) && estado.url !== "")? estado.url : "";
                    var paramsTmp = (angular.isDefined(estado.params) && estado.params !== "")? estado.params : "";
                    var url = urlTmp + paramsTmp;                    
                    var VIEWS = estado.views;
                    var vtmp = "", aControllers = [],v, c = 0, urlSubTpl = "";

                    angular.forEach(VIEWS, function(view, key){
                      //VIEWS
                      var controlName = (angular.isDefined(view.name_controller))? view.name_controller : view.name.charAt(0).toUpperCase() + view.name.slice(1);
                      //si usa name_controller usara el path completo a la vista html, si usa name armara la ruta a la vista (en componentes)
                      if(angular.isDefined(view.name_controller)){ 

                        urlSubTpl = view.path;                      
                      } else {
                        urlSubTpl = ((angular.isDefined(view.path) && view.path !== "")? view.path : (estado.path + view.name + '/'));                      
                        urlSubTpl = urlSubTpl + view.name + ".html";
                      }
                      vtmp += '"'+view.at+'": {"templateUrl":"'+ urlSubTpl +'","controller":"'+controlName+'Controller as vm"}';
                      
                      vtmp += (VIEWS.length-1 == c)? "" : ",";
                      c = c+1;
                      //CONTROLLERS                      
                      aControllers.push(estado.path + view.name +'/'+ view.name+'.controller.js');                    

                    });                    
                    v = JSON.parse("{" + vtmp + "}");                                                         
                    // debugger;
                    //*** RESOLVE PASSED AS A PARAMETER


                    var configState = {
                      //ulr = url,
                      views : v,
                      resolve: {
                        loadCtrl: function($q){
                          var deferred = $q.defer();
                          require(aControllers, function(){   
                            deferred.resolve();
                          });
                         return deferred.promise;
                        }
                      }
                    }
                    if(url !== "")
                      configState.url = url;

                    console.log(configState);
                    $stateProvider.state(state, configState);                    
                  }); 
                  // debugger;                 
                  console.log("***** Estado y modos visual " + name + " registrados!");                  

                } else {
                  console.log("xxxxx Error: no existe 'modos_visuales' en el json");
                }
              //});              
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