(function ()
{
    'use strict';

    console.log('Inicio');

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Sample
            'app.sample',

            'oc.lazyLoad',
            'serviciosEON'
        ]);
})();

(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('MainController', MainController);

    /** @ngInject */
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
})();

(function ()
{
    'use strict';

    angular
        .module('fuse')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $timeout, $state)
    {

        console.log('Run Block');

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
})();

(function ()
{
    'use strict';

    console.log('Rutas Code');

    angular
        .module('fuse')
        .config(routeConfig)
        .provider('$newState', newStateProvider)
        .controller('PageViewerCtrl', PageViewerController);

    function PageViewerController($scope, $state, $ocLazyLoad)
    {
        var vm = this;

        //$scope.$parent.eonSite.titulo = $state.current.data.titulo;

    }

    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider, $locationProvider, msNavigationServiceProvider, registerStatesNew)
    {
        $locationProvider.html5Mode(true);

        //$urlRouterProvider.otherwise('/sample');
        $urlRouterProvider.otherwise(callBackOtherwise);

        console.log('Rutas Config');

        var configStates = [
            {
              "sitio_state":"app",
              "state": "", // sitio.publicaciones
              //"url": "/publicaciones",
              "abstract":true,
              "path": "",
              "views": [
                {
                  "at":"main@",
                  "name_controller":"Main",                  
                  "path":"app/core/layouts/vertical-navigation.html"
                },
                {
                  "at":"toolbar@app",
                  "name_controller":"Toolbar",                  
                  "path":"app/toolbar/layouts/vertical-navigation/toolbar.html"
                },
                {
                  "at":"navigation@app",
                  "name_controller":"Navigation",                  
                  "path":"app/navigation/layouts/vertical-navigation/navigation.html"
                },
                {
                  "at":"quickPanel@app",
                  "name_controller":"QuickPanel",                  
                  "path":"app/quick-panel/quick-panel.html"
                }
              ]
            },
            {
              "sitio_state":"app",
              "state": "notfound", // sitio.publicaciones
              "url": "/404",
              "abstract":true,
              "path": "",
              "views": {
                  "at":"content@app",                  
                  "path":"views/404/404.html"
                }
            }           
        ];
        alert("ahora a registrar estados");
        registerStatesNew(configStates);

        // State definitions
        /*$stateProvider
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
*/
        /*$stateProvider.state({
            name: 'app.notfound',
            url: '/404',
            views: {
                'content@app': {
                    templateUrl: 'views/404/404.html'                    
                }
            }            
        });  */

        msNavigationServiceProvider.saveItem('fuse.publicaciones', {
            title      : 'Publicaciones',
            icon       : 'icon-tile-four',
            state      : 'app.publicaciones',
            url        : '/publicaciones'
        });

         msNavigationServiceProvider.saveItem('fuse.pubtest', {
            title      : 'Publicacion Robert',
            icon       : 'icon-tile-four',
            state      : 'app.publicaciones.ficha',
            url        : '/publicaciones/robert'
        });
    }

    function newStateProvider($stateProvider)
    {
        this.$get = function($state){
            return {
                /**
                 * @function app.dashboard.dashboardStateProvider.addState
                 * @memberof app.dashboard
                 * @param {string} title - the title used to build state, url & find template
                 * @param {string} controllerAs - the controller to be used, if false, we don't add a controller (ie. 'UserController as user')
                 * @param {string} templatePrefix - either 'content', 'presentation' or null
                 * @author Alex Boisselle
                 * @description adds states to the dashboards state provider dynamically
                 * @returns {object} user - token and id of user
                 */
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

        $http.post('/mapper/url',{url: $location.url()}).
            then(function success(respuesta){

                //console.log('Respuesta: ',respuesta.data);

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

})();

(function ()
{
    'use strict';

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        //////////
    }
})();

(function ()
{
    'use strict';

    angular
        .module('fuse');
})();


(function ()
{
    'use strict';

    angular
        .module('fuse')
        .factory('api', apiService);

    /** @ngInject */
    function apiService($resource)
    {
        /**
         * You can use this service to define your API urls. The "api" service
         * is designed to work in parallel with "apiResolver" service which you can
         * find in the "app/core/services/api-resolver.service.js" file.
         *
         * You can structure your API urls whatever the way you want to structure them.
         * You can either use very simple definitions, or you can use multi-dimensional
         * objects.
         *
         * Here's a very simple API url definition example:
         *
         *      api.getBlogList = $resource('http://api.example.com/getBlogList');
         *
         * While this is a perfectly valid $resource definition, most of the time you will
         * find yourself in a more complex situation where you want url parameters:
         *
         *      api.getBlogById = $resource('http://api.example.com/blog/:id', {id: '@id'});
         *
         * You can also define your custom methods. Custom method definitions allows you to
         * add hardcoded parameters to your API calls that you want them to be sent every
         * time you make that API call:
         *
         *      api.getBlogById = $resource('http://api.example.com/blog/:id', {id: '@id'}, {
         *         'getFromHomeCategory' : {method: 'GET', params: {blogCategory: 'home'}}
         *      });
         *
         * In addition to these definitions, you can also create multi-dimensional objects.
         * They are nothing to do with the $resource object, it's just a more convenient
         * way that we have created for you to packing your related API urls together:
         *
         *      api.blog = {
         *          list     : $resource('http://api.example.com/blog);
         *          getById  : $resource('http://api.example.com/blog/:id', {id: '@id'});
         *          getByDate: $resource('http://api.example.com/blog/:date', {id: '@date'},
         *              'get': {method: 'GET', params: {getByDate: true}}
         *          );
         *      }
         *
         * If you look at the last example from above, we overrode the 'get' method to put a
         * hardcoded parameter. Now every time we make the "getByDate" call, the {getByDate: true}
         * object will also be sent along with whatever data we are sending.
         *
         * All the above methods are using standard $resource service. You can learn more about
         * it at: https://docs.angularjs.org/api/ngResource/service/$resource
         *
         * -----
         *
         * After you defined your API urls, you can use them in Controllers, Services and even
         * in the UIRouter state definitions.
         *
         * If we use the last example from above, you can do an API call in your Controllers and
         * Services like this:
         *
         *      function MyController (api)
         *      {
         *          // Get the blog list
         *          api.blog.list.get({},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *
         *          // Get the blog with the id of 3
         *          var id = 3;
         *          api.blog.getById.get({'id': id},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *
         *          // Get the blog with the date by using custom defined method
         *          var date = 112314232132;
         *          api.blog.getByDate.get({'date': date},
         *
         *              // Success
         *              function (response)
         *              {
         *                  console.log(response);
         *              },
         *
         *              // Error
         *              function (response)
         *              {
         *                  console.error(response);
         *              }
         *          );
         *      }
         *
         * Because we are directly using $resource servive, all your API calls will return a
         * $promise object.
         *
         * --
         *
         * If you want to do the same calls in your UI Router state definitions, you need to use
         * "apiResolver" service we have prepared for you:
         *
         *      $stateProvider.state('app.blog', {
         *          url      : '/blog',
         *          views    : {
         *               'content@app': {
         *                   templateUrl: 'app/main/apps/blog/blog.html',
         *                   controller : 'BlogController as vm'
         *               }
         *          },
         *          resolve  : {
         *              Blog: function (apiResolver)
         *              {
         *                  return apiResolver.resolve('blog.list@get');
         *              }
         *          }
         *      });
         *
         *  You can even use parameters with apiResolver service:
         *
         *      $stateProvider.state('app.blog.show', {
         *          url      : '/blog/:id',
         *          views    : {
         *               'content@app': {
         *                   templateUrl: 'app/main/apps/blog/blog.html',
         *                   controller : 'BlogController as vm'
         *               }
         *          },
         *          resolve  : {
         *              Blog: function (apiResolver, $stateParams)
         *              {
         *                  return apiResolver.resolve('blog.getById@get', {'id': $stateParams.id);
         *              }
         *          }
         *      });
         *
         *  And the "Blog" object will be available in your BlogController:
         *
         *      function BlogController(Blog)
         *      {
         *          var vm = this;
         *
         *          // Data
         *          vm.blog = Blog;
         *
         *          ...
         *      }
         */

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

})();

(function ()
{
    'use strict';

    angular
        .module('fuse')
        .config(config);

    /** @ngInject */
    function config()
    {
        // Put your custom configurations here
    }

})();

/*Quitar de aqui para abajo */

(function ()
{
    'use strict';

    angular
        .module('app.sample', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider
            .state('app.sample', {
                url    : '/sample',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/sample/sample.html',
                        controller : 'SampleController as vm'
                    }
                },
                resolve: {
                    SampleData: function (apiResolver)
                    {
                        return apiResolver.resolve('sample@get');
                    }
                }
            });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/sample');

        // Navigation
        msNavigationServiceProvider.saveItem('fuse', {
            title : 'SAMPLE',
            group : true,
            weight: 1
        });

        msNavigationServiceProvider.saveItem('fuse.sample', {
            title      : 'Sample',
            icon       : 'icon-tile-four',
            state      : 'app.sample',
            /*stateParams: {
                'param1': 'page'
            },*/
            translation: 'SAMPLE.SAMPLE_NAV',
            weight     : 1
        });
    }
})();

(function ()
{
    'use strict';

    angular
        .module('app.sample')
        .controller('SampleController', SampleController);

    /** @ngInject */
    function SampleController(SampleData)
    {
        var vm = this;

        // Data
        vm.helloText = SampleData.data.helloText;

        // Methods

        //////////
    }
})();


angular.bootstrap(document, ['fuse']);