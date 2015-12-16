define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoCtrl', function ($scope, $ocLazyLoad, readerJSON) {
      var vm = this;       
      $ocLazyLoad.load(['./eon_dependencias/royal_slider/royal_slider.js']);      
       //LEER JSON CONFIG PARA OBTENER LOS MODOS VISUALES
       var $confg = readerJSON.getData("/eon_componentes/publicaciones/config.json").then(function(response){
           console.log(response.data);
       });       

      console.log('dentro');
       
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

      vm.titulo = "Listado de Noticias";
    });
    
}); 