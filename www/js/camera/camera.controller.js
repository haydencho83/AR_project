app.controller('CameraCtrl', function($scope, CameraFactory) {
    
    $scope.takePicture = function(){
    	CameraFactory.takePicture($scope);
    }
});