function drawPath (startX, startY, endX, endY, context){
  context.beginPath();
  context.moveTo(startX, startY);
  context.lineTo(endX, endY);
  context.strokeStyle = $('#color').val();
  context.stroke();
}

function drawArc(startX, startY, radius, startAngle, endAngle, context){
  context.beginPath();
  context.arc(startX, startY, radius, (startAngle/180)*Math.PI, (endAngle/180)*Math.PI);
  context.strokeStyle = $('#color').val();
  context.stroke();
}

function drawQuad(startX, startY, width, height, context){
  context.fillStyle = $('#color').val();
  context.fillRect(startX, startY, width, height);
}

function drawImage(startX, startY, source, context){
  var img = new Image();
  img.src = source;
  img.onload = function(){
    context.drawImage(img, startX, startY);
  }
}

function clearCanvas(context){
  context.clearRect(0, 0, canvas2.width, canvas2.height);
}

