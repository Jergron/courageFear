

require.config({
  paths: {
    angular: '../lib/bower_components/angular/angular',
    firebase: '../lib/bower_components/firebase/firebase',
    angularFire: '../lib/bower_components/angularfire/dist/angularfire.min',
    angularRoute: '../lib/bower_components/angular-route/angular-route',
    jquery: '../lib/bower_components/jquery/dist/jquery.min'
  },
  shim: {
    'angular' : {'exports' : 'angular'},
    'angularRoute': ['angular']
  },
  priority: [
    "angular",
    "jquery"
  ]
});

require([
  'angular',
  'app',
  'jquery'
  ], function(angular, app, $) {

    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
      angular.bootstrap(document, ["Main"]);
    });

  }
);