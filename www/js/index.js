var app = angular.module('app', ['ngCordova']);

app.controller('MainCtrl', function($scope, $cordovaGeolocation) {
    $scope.lat = null;
    $scope.lon = null;
    var posOptions = {timeout: 5000, enableHighAccuracy: false};
    var watchOptions = {timeout: 5000, enableHighAccuracy: false};


    $scope.updateCoords = function() {
        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function(position) {
                $scope.lat = position.coords.latitude;
                $scope.lon = position.coords.longitude;
                $scope.pos = position;
            })
            .catch(function(err){
                console.error(err);
            })
    }

});