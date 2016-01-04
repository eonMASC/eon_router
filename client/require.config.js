require.config({

  paths: {
    'base_libs' : 'fuse_libs/base_libs',
    'base_fechas' : 'fuse_libs/base_fechas',
    'base_otros' : 'fuse_libs/base_otros',
    'base_graficas' : 'fuse_libs/base_graficas',
    'base_rangy' : 'fuse_libs/base_rangy',
    
    'jquery_interfaz' : 'fuse_libs/jquery_interfaz',
    'jquery_utils' : 'fuse_libs/jquery_utils',
    'jquery_tables' : 'fuse_libs/jquery_tables',
    
    'angular_core' : 'fuse_libs/angular_core',
    'angular_sortable' : 'fuse_libs/angular_sortable',
    'angular_graficas' : 'fuse_libs/angular_graficas',
    'angular_translate' : 'fuse_libs/angular_translate',
    'angular_varios' : 'fuse_libs/angular_varios',
    'angular_textangular' : 'fuse_libs/angular_textangular',

    'fuse_core_start' : 'fuse_libs/fuse_core_start',
    'fuse_core_services' : 'fuse_libs/fuse_core_services',
    'fuse_core_filters' : 'fuse_libs/fuse_core_filters',
    'fuse_core_theming' : 'fuse_libs/fuse_core_theming',
    'fuse_core_directives' : 'fuse_libs/fuse_core_directives',
    'fuse_core_end' : 'fuse_libs/fuse_core_end',
    
    'app_start' : 'fuse_libs/app_start',
    'app_interfaz' : 'fuse_libs/app_interfaz',
    'app_pagina_sample' : 'fuse_libs/app_pagina_sample',

    'angularAMD': 'bower_components/angularAMD/angularAMD.min',
    'oclazyload': 'bower_components/oclazyload/dist/ocLazyLoad.require',
    'ngload': 'bower_components/angularAMD/ngload' 
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'base_fechas' : [ 'base_libs' ],
    'base_otros' : [ 'base_libs' ],
    'base_graficas' : [ 'base_libs' ],
    'base_rangy' : [ 'base_libs' ],
    
    'jquery_interfaz' : [ 'base_libs' ],
    'jquery_utils' : [ 'base_libs' ],
    'jquery_tables' : [ 'base_libs' ],
    
    'angular_core' : [ 
        'base_libs', 
        'base_rangy',
        'base_otros',
        'jquery_utils',
    ],
    'angular_sortable' : [ 'angular_core' ],
    'angular_graficas' : [ 'base_graficas', 'angular_core' ],
    'angular_translate' : [ 'angular_core' ],
    'angular_varios' : [ 'angular_core' ],
    'angular_textangular' : [ 'angular_core' ],

    'fuse_core_start' : [          
        'angular_core',
        'angular_translate', 
        'angular_sortable', 
        'angular_graficas', 
        'angular_textangular',
        'angular_varios'
    ],
    'fuse_core_services' : [ 'fuse_core_start' ],
    'fuse_core_filters' : [ 'fuse_core_services' ],
    'fuse_core_theming' : [ 'fuse_core_filters' ],
    'fuse_core_directives' : [ 'fuse_core_theming' ],
    'fuse_core_end' : [ 'fuse_core_directives' ],
    
    'app_interfaz': [ 'fuse_core_end','angular_core' ],
    'app_pagina_sample': [ 'angular_core' ],

    'app_start' : [      
        'angularAMD',   
        'oclazyload',
        'fuse_core_end',
        'app_pagina_sample',
        'app_interfaz'        
    ],   

    'angularAMD': [ 'angular_core' ],
    'ngload': [ 'angularAMD' ],
    'oclazyload': [ 'angular_core' ]

    // 'readerJSON':['angular']
  },

  // kick start application
  deps: ['app_start']
});