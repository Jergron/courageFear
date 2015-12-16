define([
  'angular',
  'angularRoute',
  '../controllers/MainCtrl'
], function(angular, angularRoute, MainCtrl) {

    // Declare app level module which depends on views, and components
    return angular.module('Main', [
      'ngRoute',
      'Main.portfolio'
    ])
    .config(['$routeProvider', 
      function($routeProvider) {
        $routeProvider
        .otherwise({redirectTo: '/'});
    }]);
});














