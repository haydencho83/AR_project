app.controller('CameraCtrl', function($scope, CameraFactory) {
    
    $scope.helloCamera = CameraFactory.helloCamera;

    $scope.takePicture = function(){
    	CameraFactory.takePicture($scope);
    }
});