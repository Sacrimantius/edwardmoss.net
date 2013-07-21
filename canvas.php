<!DOCTYPE html>
<html lang="en">
  <head>
		<meta charset="utf-8"/>
		<title>Edward Moss | Canvas</title>
		<link rel="icon" href="assets/img/favicon.ico" type="image/x-icon"/>
		<meta name="vie\\/wport" content="width=device-width, initial-scale=1.0"/>
		<meta name="description" content=""/>
		<meta name="author" content="Edward Moss"/>
		<!-- Le styles -->
		<link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
		<link href="assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet"/>
		<link href="assets/css/stylesheet.css" rel="stylesheet"/>
    <link href="assets/farbtastic/farbtastic.css" rel="stylesheet"/>
		<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
		<!--[if lt IE 9]>
			<script src="assets/bootstrap/js/html5shiv.js"></script>
		<![endif]-->
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="me.php">Edward Moss</a>
          <?php include 'navbar.php' ?>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row-fluid">
        <div class="span3">
          <div class="well sidebar-nav">
            <ul class="nav nav-list">
              <li class="nav-header">Slides</li>
              <li class="slideShowLink" data-value="Intro"><a>Intro</a></li>
              <li class="slideShowLink" data-value="Paths"><a>Paths</a></li>
              <li class="slideShowLink" data-value="Circles"><a>Circles</a></li>
              <li class="slideShowLink" data-value="Quads"><a>Quads</a></li>
              <li class="slideShowLink" data-value="Images"><a>Images</a></li>
              <li class="nav-header">Expanding and Examples</li>
              <li><a href="http://www.chromeexperiments.com/">Chrome Experiments</a></li>
              <li><a href="http://learningwebgl.com/lessons/lesson04/index.html">WebGL</a></li>
              <li><a href="http://craftymind.com/factory/html5video/CanvasVideo.html">Exploding Video</a><li>
            </ul>
          </div><!--/.well -->
        </div><!--/span-->
        <div class="span9">
          <div id="canvasDiv" class="hero-unit" style="height:300px">
          </div>
          <div class="row-fluid">
            <div class="span4">
              <form action="" style="width: 100%;">
                <div class="form-item">
                  <label for="color">Color:</label>
                  <input type="text" id="color" name="color" value="#ffffff" />
                </div>
                <div id="picker"></div>
              </form>
						</div><!--/span-->
						<div class="span4">
              <button class='btn btn-personal nextSlide'>Next Slide</button>
              <button class='btn btn-personal wipeScreen'>Wipe Screen</button>
              <button class='btn btn-personal alterBackground'>Alter Background</button>
              <button class='btn btn-personal drawPath'>Draw Path</button>
              <button class='btn btn-personal drawArc'>Draw Arc</button>
              <button class='btn btn-personal drawQuad'>Draw Quad</button>
              <button class='btn btn-personal drawImage'>Draw Image</button>
              <button class='btn btn-personal loadDoodle'>Load Doodle</button>
						</div><!--/span-->
						<div class="span4">
              <label for="startX">Start X:</label>
              <input type="text" id="startX" value=""></input>
              <label for="startY">Start Y:</label>
              <input type="text" id="startY" value=""></input>
              <label for="endX">End X:</label>
              <input type="text" id="endX" value=""></input>
              <label for="endY">End Y:</label>
              <input type="text" id="endY" value=""></input>
              <label for="radius">Radius:</label>
              <input type="text" id="radius" value=""></input>
              <label for="source">Source:</label>
              <input type="text" id="source" value=""></input>
						</div><!--/span-->
					</div><!--/row-->
    			<div class="row-fluid">
      			<div class="span4">
      			</div><!--/span-->
      			<div class="span4">
      			</div><!--/span-->
      			<div class="span4">
      			</div><!--/span-->
    			</div><!--/row-->
  			</div><!--/span-->
			</div><!--/row-->
      <hr/>

      <footer>
        <p>&copy; Company 2013</p>
      </footer>

    </div><!--/.fluid-container-->

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
		<script src="assets/js/jquery.js"></script>
		<script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="http://www.parsecdn.com/js/parse-1.2.8.min.js"></script>
    <script src="assets/js/canvasCommands.js"></script>
		<script src="assets/js/canvas.js"></script>
    <script src="assets/js/parse.js"></script>
    <script src="assets/farbtastic/farbtastic.js"></script>
    <script src="assets/js/javascript.js"></script>
    <script type="text/javascript" charset="utf-8">
      $(document).ready(function() {
        $('#picker').farbtastic('#color');
      });
    </script>
  </body>
</html>
