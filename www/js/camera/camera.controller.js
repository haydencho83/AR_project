app.controller('CameraCtrl', function($scope, CameraFactory) {
	// console.log('here')
	// CameraFactory.streamCamera()


	// /**********************************************************************************

	// < CAMERA PREVIEW >

	document.addEventListener('deviceready', function () {
    CameraFactory.init();
  }, false);

	// **********************************************************************************/

});