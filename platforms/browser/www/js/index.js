var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
    $scope.hello = function() {
     return "Hello World from Angular!";
    }
});