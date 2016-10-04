app.controller('CameraCtrl', function($scope, CameraFactory) {
	console.log('here')
	CameraFactory.streamCamera()

});