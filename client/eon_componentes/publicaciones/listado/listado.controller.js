define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoCtrl', function ($scope, $ocLazyLoad) {
      var vm = this;       
      $ocLazyLoad.load(['./eon_dependencias/royal_slider/royal_slider.js']);      
      

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