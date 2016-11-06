define([
  'angular',
  'angularRoute',
  '../controllers/AboutCtrl',
  '../controllers/MainCtrl'
], function(angular, angularRoute, AboutCtrl, MainCtrl ) {

    // Declare app level module which depends on views, and components
    return angular.module('Main',[
      'ngRoute',
      'Main.portfolio',
      'About.portfolio'
    ])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
        .otherwise({redirectTo: '/'});
    }]);
});














