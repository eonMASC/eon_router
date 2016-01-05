define([
    'angularAMD'
], 

function (angularAMD) {
    
    'use strict';

    /**
     * Main module of the Fuse
     */
    var Modulo = angular.module('fuse', [
        // Core
        'app.core',

        // Navigation
        'app.navigation',

        // Toolbar
        'app.toolbar',

        // Quick panel
        'app.quick-panel',

        // ocLazyLoad
        'oc.lazyLoad'
    ]);

    Modulo.config(routeConfig);        
        

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, msNavigationServiceProvider, $ocLazyLoadProvider)
    {
        $locationProvider.html5Mode(true);

        $ocLazyLoadProvider.config({
          debug: true
        });

        //$urlRouterProvider.otherwise('/sample');
        $urlRouterProvider.otherwise(callBackOtherwise);

        // State definitions
        $stateProvider
            .state('app', {
                abstract: true,
                views   : {
                    'main@'         : {
                        templateUrl: 'app/core/layouts/vertical-navigation.html',
                        controller : 'MainController as vm'
                    },
                    'toolbar@app'   : {
                        templateUrl: 'app/toolbar/layouts/vertical-navigation/toolbar.html',
                        controller : 'ToolbarController as vm'
                    },
                    'navigation@app': {
                        templateUrl: 'app/navigation/layouts/vertical-navigation/navigation.html',
                        controller : 'NavigationController as vm'
                    },
                    'quickPanel@app': {
                        templateUrl: 'app/quick-panel/quick-panel.html',
                        controller : 'QuickPanelController as vm'
                    }
                }
            });

        $stateProvider.state({
            name: 'app.notfound',
            url: '/404',
            views: {
                'content@app': {
                    templateUrl: 'views/404/404.html'                    
                }
            }            
        });  

        msNavigationServiceProvider.saveItem('fuse.publicaciones', {
            title      : 'Publicaciones',
            icon       : 'icon-tile-four',
            state      : 'app.publicaciones',
            url        : '/publicaciones'
        });

         msNavigationServiceProvider.saveItem('fuse.PrimeraPagina', {
            title      : 'Primera Pagina',
            icon       : 'icon-tile-four',
            state      : 'app.PrimeraPagina',
            url        : '/primera_pagina'
        });

        msNavigationServiceProvider.saveItem('fuse.PubMartin', {
            title      : 'Publicacion de Martin',
            icon       : 'icon-tile-four',
            state      : 'app.PubMartin',
            url        : '/publicaciones/martin'
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
                    $stateProvider.state('app.' + nombre, {
                        url: '/' + (nombre == 'pagina_inicio' ? '' : nombre) ,                          
                        views: {
                            'content@app': {
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

        $http.post('/mapper/url', {url: $location.url()}).
            then(function success(respuesta){

                //console.log('Respuesta: ',respuesta.data);

                if(respuesta.data.success){
                  if(respuesta.data.map.tipo == 'componente'){
                    console.log('Por cargar...');

                    /*require([respuesta.data.map.componenteURL], function(componente){
                        console.log('... cargado!', componente);
                        //$urlRouter.sync();
                    });*/

                    /*define(['angularAMD', ], function (angularAMD) {
                        angularAMD.processQueue();
                        $urlRouter.sync();
                    });*/

                    $ocLazyLoad.load(respuesta.data.map.componenteURL).then(function(){
                        console.log('Refrescara');
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

    Modulo
        .factory('api', apiService);

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
    function MainController($scope, $rootScope)
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

    return angularAMD.bootstrap(Modulo);

});