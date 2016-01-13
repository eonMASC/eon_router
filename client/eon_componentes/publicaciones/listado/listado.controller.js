define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoController', function ($scope) {
      var vm = this;       
      //$ocLazyLoad.load(['./eon_dependencias/royal_slider/royal_slider.js']).t;            
      console.log("CONTROL ListadoController corriendo!");
        
       
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