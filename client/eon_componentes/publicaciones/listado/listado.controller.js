define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('ListadoCtrl', function () {
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

      vm.titulo = "Listado de Noticias";
    });
    
}); 