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
    /*modulo.provider("registerStates", function($stateProvider){
    
      this.$get = function($state, $http){      	
       	return {      	
       		register : function(path){
	        	console.log("STATE_PROVIDER", path);               
	        	//objData = object;		
	       	}
	    }
      }     
    });*/
	/*modulo.provider("registerStates", function($stateProvider){		
		var result = null;      
    	return {      	
       		register : function(){
	        	
      			console.log(this);
	        	result = "terminado";		
	       	},
      		$get : function($state, $http){      	
      			return {
      				result:result
      			}
      		}
	    }          
    });*/
	/*modulo.provider("registerStates", function($stateProvider){		
		var result = null;      
    	
   		this.register = function(){
   			console.log($http)
        	result = "terminado";		
       	};
  		this.$get = function($state, $http){      	
  			return result;
  		}
	           
    });*/
    modulo.provider('registerStates', function registerStatesProvider($stateProvider, $httpProvider) {	  

	  	this.register = function(path) {	    
		  	
		  	$http.get(path).success(function(response){
	            result = response;
	        });                  
		  	
		  };
		  this.$get = ["$http", function registerStatesFactory($http) {		  		  
		    return new registerStates(path);
		  }];
	});    
  return modulo;

});