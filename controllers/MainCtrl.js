define([
  'angular',
  'angularRoute'
], function(angular) {
  angular.module("Main.portfolio", ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    });
  }]).controller("MainCtrl", 
  ["$scope",
  function($scope) {

    // $(document).ready(function (){
    //   $('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
    // });
    
  }]);
});
