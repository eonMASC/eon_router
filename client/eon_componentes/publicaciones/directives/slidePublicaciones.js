define(['eon_componentes/publicaciones/publicaciones.module'], function (componente) {

	var slidePublicaciones = function () {

		var template = '<h2>Mas noticias...</h2><ul><li ng-repeat="item in vm.items">{{item.titulo }}</li></ul>',

		controller = function() {

			var vm = this;

			vm.articulos = [
		        {
		          titulo:'Articulo 1',
		          descripcion: 'bla bla'
		        },
		        {
		          titulo:'Articulo 2',
		          descripcion: 'je je'
		        }
		    ];

		    vm.noticias = [
		        {
		          titulo:'Noticia 1',
		          descripcion: 'bla bla'
		        },
		        {
		          titulo:'Noticia 2',
		          descripcion: 'je je'
		        }
		    ];

			init();

			function init() {

				vm.items = (vm.tipo=="noticias")? vm.noticias : vm.articulos;
			}

		};

		return {
			restrict: 'EA', //Default in 1.3+
			scope: {
				tipo: '@'
			},
			controller: controller,
			controllerAs: 'vm',
			templateUrl:'eon_componentes/publicaciones/directives/slidePublicaciones.html',
			//template: template,
			bindToController: true
		};
	};

	componente.directive('slidePublicaciones', slidePublicaciones);
    
}); 