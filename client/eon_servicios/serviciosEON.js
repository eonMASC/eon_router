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
    //Provider thats register all routes of something
    modulo.provider("registerRoutes", function($stateProvider){
      var objFn = {};
      var objData = [];
      objFn.register = function(object){
        console.log("STATE_PROVIDER:", object);
        objData = object;
        
      }
      objFn.$get = function(){
        //return new objFn.register($state);
        return objData;
      }
      return objFn;
    });
    
  return modulo;

});