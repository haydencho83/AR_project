app.factory('CameraFactory', function($cordovaCamera, $log){


	function streamCamera(){

		document.addEventListener('deviceready', function () {

		   var video = document.querySelector("#videoElement");
		   
		   navigator.getUserMedia = 
		   	navigator.getUserMedia || 
		   	navigator.webkitGetUserMedia || 
		   	navigator.mozGetUserMedia || 
		   	navigator.msGetUserMedia || 
		   	navigator.oGetUserMedia;

		   if (navigator.getUserMedia) {     
		       navigator.getUserMedia({video: true}, handleVideo, videoError);
		   }

		   function handleVideo(stream) {
		       video.src = window.URL.createObjectURL(stream);
		   }
		    
		   function videoError(e) {
		       // do something
		   }

		}, false);    

	}

	// Factory service object to return
	return {
		streamCamera: streamCamera,
	}

});