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
        var GLOBAL_STATE = "sitio";      
        this.addModovisual = function(objEstados){                                     
             
            if(objEstados.length > 0){       
              angular.forEach(objEstados, function(estado, key){                                                        
                var state = (angular.isDefined(estado.state) && estado.state !== "")? estado.state : GLOBAL_STATE;                
                var abstract = angular.isDefined(estado.abstract)? estado.abstract : "";

                var urlTmp = (angular.isDefined(estado.url) && estado.url !== "")? estado.url : "";
                var paramsTmp = (angular.isDefined(estado.params) && estado.params !== "")? estado.params : "";
                var url = urlTmp + paramsTmp;                    
                var VIEWS = estado.views;
                var vState = "", aControllers = [], c = 0, urlSubTpl = "", v;                

                // get total views of one state --------------------
                var tViews = 0;
                for(v in VIEWS){ tViews++;}  

                // build object of state view --------------------
                for(v in VIEWS){

                    // at = where it'll draw it and declarate of other variables --------------------                  
                    var at = v, objView = "", view, urlTemplate = "", urlController = "";
                    // Has "-" load controller to view --------------------
                    var hasController = (VIEWS[v].indexOf("-") > -1)? false : true;  
                    // Has "-" remove it of name view --------------------
                    view = (VIEWS[v].indexOf("-") > -1)? VIEWS[v].replace("-", "") : VIEWS[v];
                    // url template --------------------
                    var tmpViewMain;
                    if(c > 0){ 
                      console.log("CONTADOR: ", c);
                        urlTemplate = estado.path + tmpViewMain +'/'+ view+'.html';
                    } else {
                        // the first view is the main of the state                        
                        tmpViewMain = view;
                        urlTemplate = estado.path + view +'/'+ view+'.html';
                    }

                    urlController = estado.path + view +'/'+ view+'.controller.js';
                    
                    if(hasController){
                     // array de controllers por vista de un estado --------------------
                      aControllers.push(urlController);                    
                      var controllerName = VIEWS[v].charAt(0).toUpperCase() + VIEWS[v].slice(1) + "Controller as vm"; 
                      vState += '"'+ at +'": {"templateUrl":"'+ urlTemplate +'","controller":"'+controllerName+'"}';
                    } else {
                      vState += '"'+ at +'": {"templateUrl":"'+ urlTemplate +'"}';                    
                    } 
                    vState += (tViews-1 == c)? "" : ",";                  
                    c = c+1;                
                }          
                // parse JSON state view  --------------------    
                vState = JSON.parse("{" + vState + "}");  

                //*** resolve passed as a parameters --------------------
                var configState = {                  
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
                // merge resolve if view config has it --------------------
                if(angular.isDefined(estado.resolve)){
                    configState.resolve = angular.merge({}, configState.resolve, estado.resolve); 
                }   
                console.log(configState);              
                // add url if is neccesary --------------------
                if(url !== "")
                    configState.url = url;
                // add abstract property if is in the view config --------------------
                if(abstract !== "")
                    configState.abstract = abstract;
                //registrar estados --------------------
                $stateProvider.state(state, configState); 

              });                             

            } else {
              console.log("xxxxx Error: no existe 'modos_visuales' en el json");
            }                                  
        },
        this.addPage = function(nombre, url, data) {
            $stateProvider.state('sitio.' + nombre, {
                url: '/' + (nombre == 'pagina_inicio' ? '' : nombre) ,                          
                views: {
                    'content@sitio': {
                        templateUrl: url,
                        controller : 'PageViewerCtrl as vm',
                        data: data
                    }
                }                           
            });
        },
        this.$get = function($http){
          return {
            addModovisual:addModovisual,
            addPage:addPage
          }
        }
      }); 

 /**
    *   SERVICIO CARGADOR DE RECURSOS CSS, SCSS Y JS 
    *   @param array files
    *   @param string ruta 
    */
    modulo.service("cargarRecurso", ["$http", "$ocLazyLoad", function($http, $ocLazyLoad){
        var resource = {       
          loadCSS: function($path){
            var parts = $path.split("/");            
            var nameFile = parts[parts.length-2];
                
            return $ocLazyLoad.load(GLOBAL_PATH + 'media_loader/' + $path + 'all_'+nameFile+'.css');                       
          },
          loadJS: function($path){
            var parts = $path.split("/");            
            var nameFile = parts[parts.length-2];
                
            return $ocLazyLoad.load(GLOBAL_PATH + 'media_loader/' + $path + 'all_'+nameFile+'.js');            
            /*then(function(){
                  console.log("***** se cargaron " + $type + " MODO VISUAL "+ $path +" con exito ");
            });              */
          },
          loadSCSS: function($path){
            return;
          }
        }
        return resource;

    }]);

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