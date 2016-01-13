// factory to read a json file
define([
  //'app.includes', 
], 
function () {

  'use strict';
  var modulo = angular.module('serviciosEON', []);
/* NUEVO PROVIDER TO REGISTER STATES ***************************/
  modulo.provider("registraEstados", function($stateProvider){
        var data;
        var GLOBAL_STATE = "sitio"        
        this.add = function(objEstados){                            
             
            if(objEstados.length > 0){       
              angular.forEach(objEstados, function(estado, key){                                        
                //var state_principal = ((angular.isDefined(estado.sitio_state) && estado.sitio_state !== "")? estado.sitio_state : GLOBAL_STATE) + ".";
                var state = (angular.isDefined(estado.state) && estado.state !== "")? estado.state : GLOBAL_STATE;
                //var state = state_principal + state_tmp;
                var abstract = angular.isDefined(estado.abstract)? estado.abstract : "";

                var urlTmp = (angular.isDefined(estado.url) && estado.url !== "")? estado.url : "";
                var paramsTmp = (angular.isDefined(estado.params) && estado.params !== "")? estado.params : "";
                var url = urlTmp + paramsTmp;                    
                var VIEWS = estado.views;
                var vState = "", aControllers = [], c = 0, urlSubTpl = "", v;                

                // get total views of one state
                var tViews = 0;
                for(v in VIEWS){ tViews++;}  

                // build object of state view 
                for(v in VIEWS){

                  // at = where it'll draw it and declarate of other variables                  
                  var at = v, objView = "", view, urlTemplate = "";
                  // Has "-" load controller to view
                  var hasController = (VIEWS[v].indexOf("-") > -1)? false : true;  
                  // Has "-" remove it of name view
                  view = (VIEWS[v].indexOf("-") > -1)? VIEWS[v].replace("-", "") : VIEWS[v];
                  // url template
                  var urlTemplate = estado.path + view +'/'+ view+'.html';
                  var urlController = estado.path + view +'/'+ view+'.controller.js';
                  console.log(urlController);
                  // array de controllers por vista de un estado
                  
                  if(hasController){
                    aControllers.push(urlController);                    
                    var controllerName = VIEWS[v].charAt(0).toUpperCase() + VIEWS[v].slice(1) + "Controller as vm"; 
                    vState += '"'+ at +'": {"templateUrl":"'+ urlTemplate +'","controller":"'+controllerName+'"}';
                  } else {
                    vState += '"'+ at +'": {"templateUrl":"'+ urlTemplate +'"}';                    
                  } 
                  vState += (tViews-1 == c)? "" : ",";                  
                  c = c+1;                
                }                
                vState = JSON.parse("{" + vState + "}");                                                                                                         
                //*** RESOLVE PASSED AS A PARAMETER
                var configState = {
                  //ulr = url,
                  views : vState,
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
               if(abstract !== "")
                  configState.abstract = abstract; 
                
                console.log("configState: ", configState);
                console.log("controllers: ", aControllers);
                $stateProvider.state(state, configState);                    
              }); 
              // debugger;                 
              console.log("***** Estados" + name + " registrados!");                  

            } else {
              console.log("xxxxx Error: no existe 'modos_visuales' en el json");
            }
          //});                          
        },
        this.$get = function(){
          return {
            add: add
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