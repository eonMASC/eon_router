define([
    'angularAMD',
    'eon_servicios/serviciosEON'
], 

function (angularAMD) {
    
    'use strict';

    /**
     * Main module of the Fuse
     */
    var Modulo = angular.module('durango_angular', [
        // Core
        'app.core',

        // Navigation
        'app.navigation',

        // Toolbar
        'app.toolbar',

        // Quick panel
        'app.quick-panel',

        // ocLazyLoad
        'oc.lazyLoad',

        // ocLazyLoad
        'serviciosEON'
    ]);

    Modulo.config(routeConfig);         

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider, msNavigationServiceProvider)
    {
        $locationProvider.html5Mode(true);

        $ocLazyLoadProvider.config({
          debug: true
        });

        console.log('Configurado');

        //$urlRouterProvider.otherwise('/sample');
        $urlRouterProvider.otherwise(callBackOtherwise);

        // State definitions
        $stateProvider
            .state('sitio', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/vertical-navigation.html',
                        controller : 'MainController as vm'
                    },
                    'toolbar@sitio'   : {
                        templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                        controller : 'ToolbarController as vm'
                    },
                    'navigation@sitio': {
                        templateUrl: 'app/navigation/layouts/vertical-navigation/navigation.html',
                        controller : 'NavigationController as vm'
                    },
                    'quickPanel@sitio': {
                        templateUrl: 'app/quick-panel/quick-panel.html',
                        controller : 'QuickPanelController as vm'
                    }
                }
            });

        $stateProvider.state({
            name: 'sitio.notfound',
            url: '/404',
            views: {
                'content@sitio': {
                    templateUrl: 'views/404/404.html'                    
                }
            }            
        });  

        msNavigationServiceProvider.saveItem('componentes', {
            title      : 'Componentes',
            group      : true,
            icon       : 'icon-tile-four'
        });

         msNavigationServiceProvider.saveItem('publicaciones', {
            title      : 'Publicaciones',
            icon       : 'icon-tile-four'
        });

        msNavigationServiceProvider.saveItem('publicaciones.listado', {
            title      : 'Listado',
            icon       : 'icon-tile-four',
            url        : '/publicaciones'
        });

        msNavigationServiceProvider.saveItem('publicaciones.nota1', {
            title      : 'Publicacion de Martin',
            icon       : 'icon-tile-four',
            url        : '/publicaciones/martin'
        });


        msNavigationServiceProvider.saveItem('paginas', {
            title      : 'Paginas',
            group      : true,
            icon       : 'icon-tile-four'
        });

        msNavigationServiceProvider.saveItem('paginas.primera', {
            title      : 'Primera Pagina',
            icon       : 'icon-tile-four',
            url        : '/primera_pagina'
        });

        msNavigationServiceProvider.saveItem('paginas.segunda', {
            title      : 'Segunda Pagina',
            icon       : 'icon-tile-four',
            url        : '/segunda_pagina'
        });

        msNavigationServiceProvider.saveItem('paginas.ultima', {
            title      : 'Ultima Pagina',
            icon       : 'icon-tile-four',
            url        : '/ultima_pagina'
        });

        msNavigationServiceProvider.saveItem('fuse_ui', {
            title      : 'Fuse UI',
            icon       : 'icon-tile-four',
            url        : '/fuse'
        });

        
    }


    Modulo.run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state)
    {

        // Activate loading indicator
        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function ()
        {
            $rootScope.loadingProgress = true;
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
            $timeout(function ()
            {
                $rootScope.loadingProgress = false;
            });
        });

        console.log('Runeado');

        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        })
    }

    Modulo.provider('$newState', newStateProvider);

    function newStateProvider($stateProvider)
    {
        this.$get = function(){

            return {
                addPageState: function(nombre, url, data) {
                    $stateProvider.state('sitio.' + nombre, {
                        url: '/' + (nombre == 'pagina_inicio' ? '' : nombre) ,                          
                        views: {
                            'content@sitio': {
                                templateUrl: url,
                                controller : 'PageViewerCtrl as vm',
                                data: data
                            }
                        }                           
                    });
                }
            }
        }
    }

    function callBackOtherwise($injector, $location)
    {
        var $http = $injector.get('$http');
        var $ocLazyLoad = $injector.get('$ocLazyLoad');
        var $urlRouter = $injector.get('$urlRouter');
        //var $rootScope = $injector.get('$rootScope');
        var $newState = $injector.get('$newState');

        var sState = $location.url();    

        console.log('Otherwiseado');   

        $http.post('/mapper/url', {url: $location.url()}).
            then(function success(respuesta){

                if(respuesta.data.success){
                  if(respuesta.data.map.tipo == 'componente'){

                    $ocLazyLoad.load(respuesta.data.map.componenteURL).then(function(){
                        
                        $urlRouter.sync();

                    });

                  } else if(respuesta.data.map.tipo == 'pagina'){
                    $newState.addPageState(respuesta.data.map.nombre, respuesta.data.map.url, {titulo: respuesta.data.map.paginaTitulo});
                    $urlRouter.sync();
                  }          
                } else {            
                  $location.url('/404');
                }            
            });
                
    }

    Modulo.factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        var api = {};

        // Base Url
        api.baseUrl = 'app/data/';

        api.sample = $resource(api.baseUrl + 'sample/sample.json');

        api.quickPanel = {
            activities: $resource(api.baseUrl + 'quick-panel/activities.json'),
            contacts  : $resource(api.baseUrl + 'quick-panel/contacts.json'),
            events    : $resource(api.baseUrl + 'quick-panel/events.json'),
            notes     : $resource(api.baseUrl + 'quick-panel/notes.json')
        };

        api.timeline = {
            page1: $resource(api.baseUrl + 'timeline/page-1.json'),
            page2: $resource(api.baseUrl + 'timeline/page-2.json'),
            page3: $resource(api.baseUrl + 'timeline/page-3.json')
        };

        return api;
    }

    Modulo
        .controller('MainController', MainController)
        .controller('PageViewerCtrl', PageViewerController)
        .controller('IndexController', IndexController);

    /** Control de Todo Body */
    function IndexController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }

    /** Control de Paginas Libres */
    function PageViewerController($scope, $state, $ocLazyLoad)
    {
        var vm = this;

        //$scope.$parent.eonSite.titulo = $state.current.data.titulo;

    }

    /** Control Principal de interfaz FUSE */
    function MainController($scope, $rootScope, msUtils)
    {
        // Data

        //////////

        // Remove the splash screen
        $scope.$on('$viewContentAnimationEnded', function (event)
        {
            if ( event.targetScope.$id === $scope.$id )
            {
                $rootScope.$broadcast('msSplashScreen::remove');
            }
        });
    }

    //var otro = angular.module('app.core');
    //console.log('App Module: ', Modulo);    

    return angularAMD.bootstrap(Modulo);

});