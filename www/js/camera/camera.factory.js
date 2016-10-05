app.factory('CameraFactory', function ($cordovaCamera, $log) {


	// function streamCamera() {

	// 	document.addEventListener('deviceready', function () {

	// 		var video = document.querySelector("#videoElement");

	// 		navigator.getUserMedia =
	// 			navigator.getUserMedia ||
	// 			navigator.webkitGetUserMedia ||
	// 			navigator.mozGetUserMedia ||
	// 			navigator.msGetUserMedia ||
	// 			navigator.oGetUserMedia;

	// 		if (navigator.getUserMedia) {
	// 			navigator.getUserMedia({
	// 				video: {
	// 					frameRate: {
	// 						ideal: 5,
	// 						max: 10
	// 					}
	// 				}
	// 			}, handleVideo, videoError);
	// 		}

	// 		function handleVideo(stream) {
	// 			video.src = window.URL.createObjectURL(stream);
	// 		}

	// 		function videoError(e) {
	// 			// do something
	// 		}

	// 	}, false);

	// }

	// // Factory service object to return

	// return {
	// 	streamCamera: streamCamera,
	// }

	// /********************************************************************************
	// < CAMERA PREVIEW FEATURE >

	// PROCEDURE
	// https://github.com/westonganger/cordova-plugin-camera-preview/tree/skanygin

	// 1. plugin install
	// cordova plugin add cordova-plugin-camera-preview

	// 2. add a code in config.xml
	// <plugin name="com.mbppower.camerapreview" source="plugins.cordova.io" version="0.9.0" />

	// 3. add a code in index.html
	// <script type="text/javascript" src="plugins/com.mbppower.camerapreview/www/CameraPreview.js"></script>

	// 4. factory function(below)
	// 5. controller

	// **********************************************************************************
	var cp = {

    startCamera: function () {
      CameraPreview.startCamera();
    },

    startCameraAnotherPos: function () {
      CameraPreview.startCamera({
        x: 50,
        y: 100,
        width: 300,
        height: 300,
        camera: "back",
        tapPhoto: true,
        previewDrag: true,
        toBack: false
      });
    },

    stopCamera: function () {
      CameraPreview.stopCamera();
    },

    takePicture: function () {
      CameraPreview.takePicture({
        maxWidth: window.device.width,
        maxHeight: window.device.height
      });
    },

    switchCamera: function () {
      CameraPreview.switchCamera();
    },

    show: function () {
      CameraPreview.show();
    },

    hide: function () {
      CameraPreview.hide();
    },

    colorEffectChanged: function () {
      var effect = document.getElementById('colorEffectCombo').value;
      CameraPreview.setColorEffect(effect);
    },

    init: function () {
      var CameraPreview = cordova.plugins.camerapreview;
      var rect = {
        x: 0,
        y: 0,
        width: 1000,
        height: 1000
      };
      CameraPreview.startCamera({
        x: 100,
        y: 100,
        width: 500,
        height: 500,
        camera: "back",
        tapPhoto: true,
        previewDrag: true,
        toBack: false
      });
      CameraPreview.hide();
      CameraPreview.show();
    }
  };

  return cp;

	// *********************************************************************************/

});