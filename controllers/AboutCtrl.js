define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module("About.portfolio", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/about', {
      templateUrl: 'partials/about.html',
      controller: 'AboutCtrl'
    });
  }]).controller("AboutCtrl", 
  ["$scope",
  function($scope) {
    $(document).ready(function (){
      $('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
    });
  
  }]);
});
