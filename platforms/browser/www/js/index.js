var app = angular.module('app', ['ngCordova']);

// app.controller('MainCtrl', function($scope, geoLocationFactory) {
    
//     $scope.pos = geoLocationFactory.getPos;
//     $scope.lat = geoLocationFactory.getLat;
//     $scope.lon = geoLocationFactory.getLon;
//     $scope.heading = geoLocationFactory.getHeading;

//     geoLocationFactory.updateCoords;

//     // var posOptions = {timeout: 5000, enableHighAccuracy: false};
//     // var watchOptions = {timeout: 5000, enableHighAccuracy: false};


//     // $scope.updateCoords = function() {
//     //     $cordovaGeolocation
//     //         .getCurrentPosition(posOptions)
//     //         .then(function(position) {
//     //             $scope.lat = position.coords.latitude;
//     //             $scope.lon = position.coords.longitude;
//     //             $scope.pos = position;
//     //         })
//     //         .catch(function(err){
//     //             console.error(err);
//     //         });

//     //     $cordovaDeviceOrientation
//     //         .getCurrentHeading()
//     //         .then(function(result) {
//     //             var magneticHeading = result.magneticHeading;
//     //             var trueHeading = result.trueHeading;
//     //             var accuracy = result.headingAccuracy;
//     //             var timeStamp = result.timestamp;
//     //             $scope.heading = result;
//     //         })
//     //         .catch(function(err){
//     //             console.error(err);
//     //         });

//     // }



// });