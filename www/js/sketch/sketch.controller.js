app.controller('SketchCtrl', function($scope, SketchFactory) {
	var win = window
	var doc = document

	SketchFactory.sketch(win, doc) 

	$scope.savePng = function(){
		SketchFactory.save(win,doc)
	}

});