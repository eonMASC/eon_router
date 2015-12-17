require.config({

  // alias libraries paths.  Must set 'angular'
  paths: {
    'angular': 'bower_components/angular/angular.min',
    'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
    'angularAMD': 'bower_components/angularAMD/angularAMD.min',
    'ngload': 'bower_components/angularAMD/ngload',
    'oclazyload': 'bower_components/oclazyload/dist/ocLazyLoad.require',
    'angular-animate': 'bower_components/angular-animate/angular-animate.min',
    'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
    'angular-material': 'bower_components/angular-material/angular-material.min',
    'angular-resource': 'bower_components/angular-resource/angular-resource.min',
    'angular-aria': 'bower_components/angular-aria/angular-aria.min',
    'angular-messages': 'bower_components/angular-messages/angular-messages.min',
    'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min'    
  },

  // Add angular modules that does not support AMD out of the box, put it in a shim
  shim: {
    'angularAMD': [ 'angular' ],
    'ngload': [ 'angularAMD' ],
    'oclazyload': [ 'angular' ],
    'angular-resource': [ 'angular' ],
    'angular-cookies': [ 'angular' ],
    'angular-animate': [ 'angular' ],
    'angular-material': [ 'angular' ],
    'angular-sanitize': [ 'angular' ],
    'angular-aria': [ 'angular' ],
    'angular-messages': [ 'angular' ],
    'angular-ui-router': [ 'angular' ],
    'readerJSON':['angular']
  },

  // kick start application
  deps: ['app']
});