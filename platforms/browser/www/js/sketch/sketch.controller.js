app.controller('SketchCtrl', function($scope, SketchFactory) {
	var win = window
	var doc = document

	SketchFactory.sketch(win, doc) 

	$scope.savePng = function(){
		SketchFactory.saveImg(win,doc)
	}

	$scope.loadPng = function(){
		SketchFactory.loadImg(win,doc)
	}

	$scope.saveCanvas = SketchFactory.saveCanvas

	$scope.loadCanvas = SketchFactory.loadCanvas

});