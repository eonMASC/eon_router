define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

   componente.controller('FichaController', function ($stateParams) {
      var vm = this;

      vm.noticia_nombre = $stateParams.id;

      vm.titulo = "Listado de Noticias";
    });
    
}); 