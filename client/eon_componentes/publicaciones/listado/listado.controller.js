define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoCtrl', function ($scope) {
      var vm = this;

      console.log('dentro');

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

      $scope.$parent.eonSite.titulo = 'Listado de Noticias';

      vm.titulo = "Listado de Noticias";
    });
    
}); 