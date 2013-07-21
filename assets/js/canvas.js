var currentShow;
var currentSlide;

var clickX = [];
var clickY = [];
var clickDrag = [];
var clickColor = [];
var curColor = '#FFFFFF';
var paint;

var canvasDiv = document.getElementById('canvasDiv');
canvas = document.createElement('canvas');
canvas.setAttribute('width', $('#canvasDiv').width());
canvas.setAttribute('height', $('#canvasDiv').height());
canvas.setAttribute('id', 'canvas');
canvasDiv.appendChild(canvas);
context = document.getElementById('canvas').getContext("2d");
if(typeof G_vmlCanvasManager != 'undefined') {
	canvas = G_vmlCanvasManager.initElement(canvas);
}
context = canvas.getContext("2d");

$('.slideShowLink').click(function(){
  $('.active.slideShowLink').removeClass('active');
  $(this).attr('class','active slideShowLink');
  loadSlideShow($(this).data('value'));
});

$('#savePlayer').click(
	loadPlayer();
);

$('#showhideColorPicker').click(function (){ 
if($('#colorPicker').css('display') == 'none'){ 
   $('#colorPicker').show('slow'); 
} else { 
   $('#colorPicker').hide('slow'); 
}
});

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX -findPos(this)[0];
  var mouseY = e.pageY -findPos(this)[1];
  console.log(mouseX + "   " + mouseY);
  paint = true;
  addClick(e.pageX - findPos(this)[0], e.pageY - findPos(this)[1]);
  redraw();
});

$('#canvas').mousemove(function(e){
  if(paint){
    addClick(e.pageX - findPos(this)[0], e.pageY - findPos(this)[1], true);
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

function drawInitialSlide(result){
  currentShow = result;
  currentSlide = 1;
  for (i = 0; i < currentShow.length; i++){
    console.log(i);
    console.log(currentShow[i].get("Number"));
    if(currentShow[i].get("Number") == currentSlide){
      if(currentShow[i].get("Clear") == 1){
        redraw();
      }
      console.log(currentShow[i].get("Text"));
      console.log(currentShow[i].get("Position")[0]);
      context.font="30px Arial";
      context.fillText(currentShow[i].get("Text"),currentShow[i].get("Position")[0],currentShow[i].get("Position")[1]);
    }
  }
}

function drawNextSlide(){
  currentSlide++;
  for(i = 0; i < currentShow.length; i++){
    if(currentShow[i].get("Number") == currentSlide){
      console.log(currentShow[i].get("Text"));
      console.log(currentShow[i].get("Position")[0]);
      if(currentShow[i].get("Clear") == 1){
        redraw();
      }
      context.font="30px Arial";
      context.fillText(currentShow[i].get("Text"),currentShow[i].get("Position")[0],currentShow[i].get("Position")[1]);
    }
  }
}

function wipeScreen(){
  clickX = [];
  clickY = [];
  clickDrag = [];
  clickColor = [];
  redraw();
};

function addClick(x, y, dragging)
{
  curColor =document.getElementById('color').value;
  
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
}

function redraw(){
  canvas.width = canvas.width; // Clears the canvas
  
  context.strokeStyle = "#df4b26";
  context.lineJoin = "round";
  context.lineWidth = 5;
			
  for(var i=0; i < clickX.length; i++)
  {		
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
    context.strokeStyle = clickColor[i];
     context.stroke();
  }
}

function findPos(obj){
var posX = obj.offsetLeft;var posY = obj.offsetTop;
while(obj.offsetParent){
if(obj==document.getElementsByTagName('body')[0]){break;}
else{
posX=posX+obj.offsetParent.offsetLeft;
posY=posY+obj.offsetParent.offsetTop;
obj=obj.offsetParent;
}
}
var posArray=[posX,posY];
return posArray;
}

function loadSlide(name){
  
  var query = new Parse.Query(Slides);
query.equalTo("Player", name);
query.find({
  success: function(results) {
    clickX = results[0].get("ClickX");
    clickY = results[0].get("ClickY");
    clickDrag = results[0].get("ClickDrag");
    clickColor = results[0].get("ClickColor");
    redraw();
    console.log(results);
    currentSlide = name;
  },
  error: function(error) {
    console.log("Failure");
  }
});
  }

 function loadPlayer(){

	var person=prompt("What name do you want to save under?","Harry Potter");

	if (person!==null && person!==""){
	    
		var query = new Parse.Query(Slides);
		query.equalTo("Player", person);
		    
		query.count({
			success: function(count) {
			// Success
		    if(count===0){
				slides.set("Player", person);
				slides.set("ClickX", clickX);
				slides.set("ClickY", clickY);
				slides.set("ClickDrag", clickDrag);
				slides.set("ClickColor", clickColor);
				slides.save(null, {
					success: function(slides) {
						//Success
						alert("Saved");
				  },
				  	error: function(slides, error) {
						//Failure
				  }
				});
			}else{
				alert("Not Saved");
			}
		},
			error: function(error) {
				// Failure
			}
		});
	}
}