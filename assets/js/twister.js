var canvasLayer = document.getElementById('canvasLayer');

canvas1 = document.createElement('canvas');
canvas1.setAttribute('width', $('#canvasLayer').width());
canvas1.setAttribute('height', $('#canvasLayer').height());
canvas1.setAttribute('id', 'canvas1');
canvas1.setAttribute('style', 'position: absolute; left: 0; top: 0; z-index: 0;');
canvasLayer.appendChild(canvas1);
context1 = document.getElementById('canvas1').getContext("2d");
if(typeof G_vmlCanvasManager != 'undefined') {
  canvas1 = G_vmlCanvasManager.initElement(canvas1);
}
context1 = canvas1.getContext("2d");

canvas2 = document.createElement('canvas');
canvas2.setAttribute('width', $('#canvasLayer').width());
canvas2.setAttribute('height', $('#canvasLayer').height());
canvas2.setAttribute('id', 'canvas2');
canvas2.setAttribute('style', 'position: absolute; left: 0; top: 0; z-index: 0;');
canvasLayer.appendChild(canvas2);
context2 = document.getElementById('canvas2').getContext("2d");
if(typeof G_vmlCanvasManager != 'undefined') {
  canvas2 = G_vmlCanvasManager.initElement(canvas2);
}
context2 = canvas2.getContext("2d");

function renderTwister(){
  var fillColor = 0;
  for (i=0; i<360;)
  {
    switch (fillColor){
      case 0:
        context1.fillStyle = "#FFFFFF";
        break;
      case 1:
        context1.fillStyle = "#ffff00";
        break;
      case 2:
        context1.fillStyle = "#ff0000";
        break;
      case 3:
        context1.fillStyle = "#00ff00";
        break;
      case 4:
        context1.fillStyle = "#ffa500";
        break;
      default:
        break; 
    }
    context1.beginPath();
    context1.arc((469 + 220 * Math.cos(i * (Math.PI/180))),(250 + 220 * Math.sin(i * (Math.PI/180))),35,0,2*Math.PI);
    context1.fill();

    if (fillColor < 4){
      if (fillColor == 0){
        context1.font="30px Arial";
        context1.fillStyle = "#000000";
        context1.fillText("?",(469 + 220 * Math.cos(i * (Math.PI/180))) - 8,(250 + 220 * Math.sin(i * (Math.PI/180))) + 10);
      }
      fillColor++;
    }else{
      fillColor = 0;
    }
    i += 18;
  }

  drawImage(349, 130, "assets/img/Left-Hand.png", context1);
  drawImage(349, 310, "assets/img/Left-Foot.png", context1);
  drawImage(549, 310, "assets/img/Right-Hand.png", context1);
  drawImage(549, 130, "assets/img/Right-Foot.png", context1);

}

var currentPosition = 0;

function renderPointer(){

  context2.beginPath();
  context2.moveTo(469, 250);
  context2.lineTo((469 + 220 * Math.cos(currentPosition * (Math.PI/180))), (250 + 220 * Math.sin(currentPosition * (Math.PI/180))));
  context2.strokeStyle = "#FFFFFF";  
  context2.lineWidth = 5;
  context2.stroke();

  currentPosition += 4;

  if (currentPosition >=360){
    currentPosition = 0;
  }

}

function spin(spinRemaining) {
  if (spinRemaining<=0){
    return;
  }
  clearCanvas();

  renderTwister();
  renderPointer();

  // request new frame
  requestAnimFrame(function() {
  spin(spinRemaining-1);
  });
}