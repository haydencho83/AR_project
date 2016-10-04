app.controller('SketchCtrl', function($scope, SketchFactory) {

	SketchFactory.sketch(window, document) 

	$scope.saveCanvas = SketchFactory.saveCanvas

	$scope.loadCanvas = SketchFactory.loadCanvas

});