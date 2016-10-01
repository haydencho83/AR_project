var app = angular.module('app', ['ngCordova']);

app.controller('MainCtrl', function($scope) {
    $scope.hello = function() {
     return "Hello World from Angular!";
    }
});


