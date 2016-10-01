app.factory('geoLocationFactory', function($cordovaGeolocation, $cordovaDeviceOrientation){

	var posOptions = {timeout: 5000, enableHighAccuracy: false};
    var watchOptions = {timeout: 5000, enableHighAccuracy: false};
    
    function updateLocation(){
    	return $cordovaGeolocation.getCurrentPosition(posOptions)
        .then(function(position) {
        	return position
        })
        .catch(function(err){
            console.error(err);
        });
    }

    function updateOrientation(){
    	return $cordovaDeviceOrientation.getCurrentHeading()
        .then(function(heading) {
        	return heading;
        })
        .catch(function(err){
            console.error(err);
        });
    }

	return {
		updateLocation: updateLocation,
		updateOrientation: updateOrientation,
	}

})