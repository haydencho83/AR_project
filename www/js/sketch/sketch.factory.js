app.factory('SketchFactory', function($http){

    var SketchFactory = {}

    var savedCanvas;
    var width, height;
    var canvas;
    var ctx;

    function obj(index, value){
        this.index = index
        this.value = value
    }

    SketchFactory.saveCanvas = function(){

        savedCanvas = ctx.getImageData(0,0,800,650);
        width = savedCanvas.width;
        height = savedCanvas.height;
        savedCanvas = savedCanvas.data;

        console.log("Start: ", savedCanvas)

        
        var savedCanvas2 = Array.prototype.map.call(savedCanvas,function(val, i){
            var obj = {index: i, value:val }
            return obj;
            // return new obj(i, val); //{ index: i, value: val}
        })
        console.log("middle: ", savedCanvas2.length)

        var savedCanvas3 = Array.prototype.filter.call(savedCanvas2, function(obj){
            return obj.value > 0
        })

        console.log("After: ", savedCanvas3.length)
    }

    SketchFactory.loadCanvas = function(){
        // var newImg = document.createElement("img")
        // newImg.src = savedCanvas;
        // ctx.drawImage(newImg, 0, 0)

        
        //ctx.putImageData(savedCanvas,0,0);
    }




    SketchFactory.sketch = function (workspace, doc) {

        // workspace.whiteboard = new workspace.EventEmitter();

        // Ultimately, the color of our stroke;
        var color;

        // The color selection elements on the DOM.
        var colorElements = [].slice.call(doc.querySelectorAll('.marker'));

        colorElements.forEach(function (el) {

            // Set the background color of this element
            // to its id (purple, red, blue, etc).
            el.style.backgroundColor = el.id;

            // Attach a click handler that will set our color variable to
            // the elements id, remove the selected class from all colors,
            // and then add the selected class to the clicked color.
            function pickColor() {
                color = this.id;
                doc.querySelector('.selected').classList.remove('selected');
                this.classList.add('selected');
            }

            el.addEventListener('click', pickColor);
            el.addEventListener('tap', pickColor);

        });

        canvas = doc.getElementById('paint');
        
        ctx = canvas.getContext('2d')

        function resize() {
            // Unscale the canvas (if it was previously scaled)
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            
            // The device pixel ratio is the multiplier between CSS pixels
            // and device pixels
            var pixelRatio = workspace.devicePixelRatio || 1;    
            
            // Allocate backing store large enough to give us a 1:1 device pixel
            // to canvas pixel ratio.
            var w = canvas.clientWidth * pixelRatio,
                h = canvas.clientHeight * pixelRatio;
            if (w !== canvas.width || h !== canvas.height) {
                // Resizing the canvas destroys the current content.
                // So, save it...
                var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)

                canvas.width = w; canvas.height = h;

                // ...then restore it.
                ctx.putImageData(imgData, 0, 0)
            }

            // Scale the canvas' internal coordinate system by the device pixel
            // ratio to ensure that 1 canvas unit = 1 css pixel, even though our
            // backing store is larger.
            ctx.scale(pixelRatio, pixelRatio);
            
            ctx.lineWidth = 5
            ctx.lineJoin = 'round';
            ctx.lineCap = 'round';     
        }
        
        resize()
        workspace.addEventListener('resize', resize) 
        
        var currentMousePosition = {
            x: 0,
            y: 0
        };

        var lastMousePosition = {
            x: 0,
            y: 0
        };

        var drawing = false;

        function mDown(e) {
            e.preventDefault();

            drawing = true;
            currentMousePosition.x = e.changedTouches[0].pageX - this.offsetLeft;
            currentMousePosition.y = e.changedTouches[0].pageY - this.offsetTop;

        }

        function mUp() {
            drawing = false;
        }

        function mMove(e) {
            e.preventDefault();

            if (!drawing) return;

            lastMousePosition.x = currentMousePosition.x;
            lastMousePosition.y = currentMousePosition.y;

            currentMousePosition.x = e.changedTouches[0].pageX - this.offsetLeft;
            currentMousePosition.y = e.changedTouches[0].pageY - this.offsetTop;

            canvas.draw(lastMousePosition, currentMousePosition, color, true);

        }

        //canvas.addEventListener('mousedown', mDown);
        canvas.addEventListener('touchstart', mDown);

        //canvas.addEventListener('mouseup', mUp);
        canvas.addEventListener('touchend', mUp);

        //canvas.addEventListener('mousemove', mMove);
        canvas.addEventListener('touchmove', mMove);

        canvas.draw = function (start, end, strokeColor, shouldBroadcast) {
            ctx.beginPath();
            ctx.strokeStyle = strokeColor || 'black';
            ctx.moveTo(start.x, start.y);
            ctx.lineTo(end.x, end.y);
            ctx.stroke();
            ctx.closePath();
        };

    }

    SketchFactory.save = function(workspace,doc){
        var drawing = doc.getElementById('paint')
        var data = drawing.toDataURL("image/png")
        
        var blob = drawing.toBlob(function(blob) {
          var newImg = document.createElement("img");
          var url = URL.createObjectURL(blob);

          newImg.onload = function() {
            // no longer need to read the blob so it's revoked
            URL.revokeObjectURL(url);
          };
          console.log(url)

          newImg.src = url;

          // var geo = doc.getElementsByClassName('geo')
          // console.log(geo)
          var canvas = doc.getElementById('paint')
          console.log(canvas)
          var parent = doc.getElementById('tester')
          console.log(parent)
          var style = canvas.style
          parent.removeChild(canvas)

          workspace.setTimeout(function(){
            newImg.style.backgroundColor = "transparent"
            newImg.style.zIndex = "2"
            newImg.style.position = "absolute"
            newImg.style.width = "100%"
            newImg.style.height = "80%"
            newImg.style.bottom = "0px"
            doc.body.appendChild(newImg)
          }, 2000)


        })
        
        // $http.post('http://192.168.5.251:1337/api/drawings', blob)
        // .then(function(response){
        //     return response.data
        // })
    }

    return SketchFactory

})