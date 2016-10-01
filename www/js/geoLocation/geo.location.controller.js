app.controller('geoLocationCtrl', function($scope, $log, geoLocationFactory){


    $scope.update = function(){
    	
    	geoLocationFactory.updateLocation()
    	.then(function(position){
    		$scope.pos = position;
    		return null;
    	})
    	.then(function(){
    		return geoLocationFactory.updateOrientation()
    	})
    	.then(function(heading){
    		$scope.heading = heading;
    	})
    	.catch($log)

	    
    }

});