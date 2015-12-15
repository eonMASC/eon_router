define([], function () {

   return function ($stateParams) {
      var vm = this;

      console.log('ficha controller ', $stateParams);

      vm.noticia_nombre = $stateParams.id;

      vm.titulo = "Listado de Noticias";
    }
    
}); 