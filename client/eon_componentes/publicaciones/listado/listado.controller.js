define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoCtrl', function ($scope, $ocLazyLoad, readerJSON) {
      var vm = this;       
      $ocLazyLoad.load(['./eon_dependencias/royal_slider/royal_slider.js']);      
       //LEER JSON CONFIG PARA OBTENER LOS MODOS VISUALES
       var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
           console.log(response.data);
       });       
       
       $scope.handle = function(){
           mensaje("hola es un mensaje de prueba")
       }

      vm.noticias = [
        {
          titulo:'Noticia 1',
          descripcion: 'bla bla'
        },
        {
          titulo:'Noticia 2',
          descripcion: 'je je'
        }
      ]

      //$scope.$parent.eonSite.titulo = 'Listado de Noticias';

      vm.titulo = "Listado de Noticias";
    });
    
}); 