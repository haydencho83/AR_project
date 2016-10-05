

app.factory('geoLocationFactory', function($cordovaGeolocation, $cordovaDeviceOrientation,$http, $log){

	// var posOptions = {timeout: 10000, enableHighAccuracy: true};
    var posOptions = {enableHighAccuracy: true};
    var watchOptions = {timeout: 500, enableHighAccuracy: true};
    var geoLocationPos;

    var geoLocationFactory = {}

    geoLocationFactory.updateLocation = () => {
         return $cordovaGeolocation.getCurrentPosition(posOptions)
            .then( position => position )
            .catch($log);
    }
    geoLocationFactory.updateOrientation = () => {
        return $cordovaDeviceOrientation.getCurrentHeading()
            .then( heading => heading )
            .catch($log)
    }

    return geoLocationFactory;

})