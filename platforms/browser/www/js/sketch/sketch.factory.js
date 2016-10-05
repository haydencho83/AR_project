// app.factory('SketchFactory', function($http, $log, geoLocationFactory ){

//     var SketchFactory = {}

//     var canvas;
//     var ctx;
//     var canvasPoints = [];

//     SketchFactory.sketch = function (workspace, doc) {

//         // Ultimately, the color of our stroke;
//         var color;

//         // The color selection elements on the DOM.
//         var colorElements = [].slice.call(doc.querySelectorAll('.marker'));

//         colorElements.forEach(function (el) {

//             // Set the background color of this element
//             // to its id (purple, red, blue, etc).
//             el.style.backgroundColor = el.id;

//             // Attach a click handler that will set our color variable to
//             // the elements id, remove the selected class from all colors,
//             // and then add the selected class to the clicked color.
//             function pickColor() {
//                 color = this.id;
//                 doc.querySelector('.selected').classList.remove('selected');
//                 this.classList.add('selected');
//             }

//             el.addEventListener('click', pickColor);
//             el.addEventListener('tap', pickColor);

//         });

//         canvas = doc.getElementById('paint');

//         ctx = canvas.getContext('2d')

//         function resize() {
//             // Unscale the canvas (if it was previously scaled)
//             ctx.setTransform(1, 0, 0, 1, 0, 0);

//             // The device pixel ratio is the multiplier between CSS pixels
//             // and device pixels
//             var pixelRatio = workspace.devicePixelRatio || 1;

//             // Allocate backing store large enough to give us a 1:1 device pixel
//             // to canvas pixel ratio.
//             var w = canvas.clientWidth * pixelRatio,
//                 h = canvas.clientHeight * pixelRatio;
//             if (w !== canvas.width || h !== canvas.height) {
//                 // Resizing the canvas destroys the current content.
//                 // So, save it...
//                 var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

//                 canvas.width = w; canvas.height = h;

//                 // ...then restore it.
//                 ctx.putImageData(imgData, 0, 0)
//             }

//             // Scale the canvas' internal coordinate system by the device pixel
//             // ratio to ensure that 1 canvas unit = 1 css pixel, even though our
//             // backing store is larger.
//             ctx.scale(pixelRatio, pixelRatio);

//             ctx.lineWidth = 5
//             ctx.lineJoin = 'round';
//             ctx.lineCap = 'round';
//         }

//         resize()
//         workspace.addEventListener('resize', resize)

//         var currentMousePosition = {
//             x: 0,
//             y: 0
//         };

//         var lastMousePosition = {
//             x: 0,
//             y: 0
//         };

//         var drawing = false;

//         function mDown(e) {
//             e.preventDefault();

//             drawing = true;
//             currentMousePosition.x = e.changedTouches[0].pageX - this.offsetLeft;
//             currentMousePosition.y = e.changedTouches[0].pageY - this.offsetTop;

//         }

//         function mUp() {
//             drawing = false;
//         }

//         function mMove(e) {
//             e.preventDefault();

//             if (!drawing) return;

//             lastMousePosition.x = currentMousePosition.x;
//             lastMousePosition.y = currentMousePosition.y;

//             currentMousePosition.x = e.changedTouches[0].pageX - this.offsetLeft;
//             currentMousePosition.y = e.changedTouches[0].pageY - this.offsetTop;

//             // Push our points into an array
//             canvasPoints.push(
//                 lastMousePosition.x + "," +
//                 lastMousePosition.y + "," +
//                 currentMousePosition.x + "," +
//                 currentMousePosition.y + "," +
//                 color
//             )
//             canvas.draw(lastMousePosition, currentMousePosition, color);

//         }

//         //canvas.addEventListener('mousedown', mDown);
//         canvas.addEventListener('touchstart', mDown);

//         //canvas.addEventListener('mouseup', mUp);
//         canvas.addEventListener('touchend', mUp);

//         //canvas.addEventListener('mousemove', mMove);
//         canvas.addEventListener('touchmove', mMove);

//         canvas.draw = function (start, end, strokeColor) {
//             ctx.beginPath();
//             ctx.strokeStyle = strokeColor || 'black';
//             ctx.moveTo(start.x, start.y);
//             ctx.lineTo(end.x, end.y);
//             ctx.stroke();
//             ctx.closePath();
//         };

//     }

//     SketchFactory.saveImg = function(workspace, doc){

//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         var canvasPointsString = canvasPoints.join(",")

//         $http.post('http://192.168.5.251:1337/api/drawings', { image: canvasPointsString })
//         .then(function(response){
//             console.log("posted")
//             console.log('!!!!!!!!!!',geoLocationFactory.updateLocation())
//             console.log(response)
//             return response.data // Don't do anything right now
//         })
//         .catch($log)

//     } /* End of saveImg Function */

//     SketchFactory.loadImg = function(workspace, doc){

//         var drawing = doc.getElementById('paint')

//         $http.get('http://192.168.5.251:1337/api/drawings/21')
//         .then(function(response){
//             console.log("responded")
//             return response.data.image;
//         })
//         .then(function(canvasString){
//             console.log(canvasString)

//             var canvasArray = canvasString.split(",")
//             for( var i = 0; i < canvasArray.length; i += 5 ){

//                 canvas.draw(  /* Start Point */
//                              { x: canvasArray[i],
//                                y: canvasArray[i+1]
//                              },
//                              /* End Point */
//                              {
//                                 x: canvasArray[i + 2],
//                                 y: canvasArray[i + 3]
//                              },
//                              /* Color */
//                              canvasArray[i + 4]
//                              );
//             }

//         })
//         .catch($log)

//     }

//     return SketchFactory

// })