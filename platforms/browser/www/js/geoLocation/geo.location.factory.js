app.factory('geoLocationFactory', function($cordovaGeolocation, $cordovaDeviceOrientation){

	var posOptions = {timeout: 500, enableHighAccuracy: true};
    var watchOptions = {timeout: 500, enableHighAccuracy: true};
    var geoLocationPos;
    
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
        	return heading
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