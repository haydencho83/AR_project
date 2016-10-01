app.factory('CameraFactory', function($cordovaCamera, $log){

	function helloCamera{
		return "Hello Camera!";
	}

	function takePicture(scope){

		    var options = {
		      quality: 50,
		      destinationType: Camera.DestinationType.DATA_URL,
		      sourceType: Camera.PictureSourceType.CAMERA,
		      allowEdit: true,
		      encodingType: Camera.EncodingType.JPEG,
		      targetWidth: 100,
		      targetHeight: 100,
		      popoverOptions: CameraPopoverOptions,
		      saveToPhotoAlbum: false,
			  correctOrientation:true
		    };

		    $cordovaCamera.getPicture(options)
		    .then(function(imageData) {
		      scope.imgURI = "data:image/jpeg;base64," + imageData;
		    })
		    .catch($log)

	}

	// Factory service object to return
	return {
		helloCamera: helloCamera,
		takePicture: takePicture,
	}

});