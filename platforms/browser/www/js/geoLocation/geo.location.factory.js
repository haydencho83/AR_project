

app.factory('geoLocationFactory', function($cordovaGeolocation, $cordovaDeviceOrientation,$http){

	// var posOptions = {timeout: 10000, enableHighAccuracy: true};
    var posOptions = {enableHighAccuracy: true};
    var watchOptions = {timeout: 500, enableHighAccuracy: true};
    var geoLocationPos;

    var geoLocationFactory ={}

    geoLocationFactory.updateLocation = () => {

        console.log('HIIIIIIIIIII')
         return $cordovaGeolocation.getCurrentPosition(posOptions)
            .then(function(position) {

                // $http.get('http://192.168.5.251:1337/api/locations/ping/'+position.coords.longitude+"/"+position.coords.latitude)
                //     .then(function(response){
                //
                //
                //         return response.data;
                //     });

                console.log('FACTORY GEOLOCATION!!!', position)
                return position
            })
            .catch(function(err){
                console.error(err);
            });
    }
    geoLocationFactory.updateOrientation = () => {
        return $cordovaDeviceOrientation.getCurrentHeading()
            .then(function(heading) {
                return heading
            })
            .catch(function(err){
                console.error(err);
            });
    }

    return geoLocationFactory;




	// return {
	// 	updateLocation: updateLocation,
	// 	updateOrientation: updateOrientation,
	// }

})