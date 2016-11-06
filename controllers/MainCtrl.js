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
    var count = 0; 
    var maxDelay = 1300;
    var minSpeed = 1300;
    var maxSpeed = 2000;
    var fadeTo = 1;
    $('div span').each(function(){
        var delay = Math.ceil(Math.random() * maxDelay);
        var speed = maxSpeed + Math.ceil(Math.random() * (minSpeed - maxSpeed));
        count++;
        $(this).delay(delay).fadeTo(speed, fadeTo, function(){
            count--;
            if (count == 0){
                //onFinish();
            }
        });
    });
  }]);
});
