app.controller('geoLocationCtrl', function($scope, $log, geoLocationFactory){

    $scope.update = function(){

    	geoLocationFactory.updateLocation()
    	.then(function(position){
    		$scope.pos = position.coords;
    		return null;
    	})
        .catch($log)

        geoLocationFactory.updateOrientation()
    	.then(function(heading){
            // trueHeading doesn't work for iphone
            // reading about android it just returns magnetic for true
    		$scope.heading = heading.magneticHeading;
    	})
    	.catch($log)

	    
    }

});