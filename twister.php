
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Edward Moss | Me</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon"/>
    <!-- Le styles -->
    <link href="assets/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="assets/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet"/>
    <link href="assets/css/stylesheet.css" rel="stylesheet"/>
    <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="assets/bootstrap/js/html5shiv.js"></script>
    <![endif]-->
    <style type="text/css">
      body {
        padding-top: 20px;
        padding-bottom: 60px;
      }

      /* Custom container */
      .container {
        margin: 0 auto;
        max-width: 1000px;
      }
      .container > hr {
        margin: 60px 0;
      }

      /* Main marketing message and sign up button */
      .jumbotron {
        margin: 80px 0;
        text-align: center;
      }
      .jumbotron h1 {
        font-size: 100px;
        line-height: 1;
      }
      .jumbotron .lead {
        font-size: 24px;
        line-height: 1.25;
      }
      .jumbotron .btn {
        font-size: 21px;
        padding: 14px 24px;
      }

      /* Supporting marketing content */
      .marketing {
        margin: 60px 0;
      }
      .marketing p + h4 {
        margin-top: 28px;
      }


      /* Customize the navbar links to be fill the entire space of the .navbar */
      .navbar .navbar-inner {
        padding: 0;
      }
      .navbar .nav {
        margin: 0;
        display: table;
        width: 100%;
      }
      .navbar .nav li {
        display: table-cell;
        width: 1%;
        float: none;
      }
      .navbar .nav .dropdown-menu li{
        display:list-item;
        width:100%;
      }
      .navbar .nav li a {
        font-weight: bold;
        text-align: center;
        border-left: 1px solid rgba(255,255,255,.75);
        border-right: 1px solid rgba(0,0,0,.1);
      }
      .navbar .nav .dropdown-menu li a {
        font-weight: normal;
        text-align: left;
        border-left: 1px solid rgba(255,255,255,.75);
        border-right: 1px solid rgba(0,0,0,.1);
      }
      .navbar .nav li:first-child a {
        border-left: 0;
        border-radius: 3px 0 0 3px;
      }
      .navbar .nav li:last-child a {
        border-right: 0;
        border-radius: 0 3px 3px 0;
      }

      /* CUSTOMIZE THE CAROUSEL
    -------------------------------------------------- */

    /* Carousel base class */
    .carousel {
      margin-bottom: 60px;
    }

    .carousel .container {
      position: relative;
      z-index: 9;
    }

    .carousel-control {
      height: 80px;
      margin-top: 0;
      font-size: 120px;
      text-shadow: 0 1px 1px rgba(0,0,0,.4);
      background-color: transparent;
      border: 0;
      z-index: 10;
    }

    .carousel .item {
      height: 500px;
    }

    .carousel .imageContainer{
      position: absolute;
      height: 500px;
      width:50%;
      left: 50%;
      text-align: center;
    }

    .carousel img {
      top: 0;
      height: 500px;
    }

    .carousel-caption {
      background-color: transparent;
      position: static;
      max-width: 50%;
      padding: 0 20px;
      margin-top: 200px;
    }
    .carousel-caption h1,
    .carousel-caption .lead {
      margin: 0;
      line-height: 1.25;
      color: #fff;
      text-shadow: 0 1px 1px rgba(0,0,0,.4);
    }
    .carousel-caption .btn {
      margin-top: 10px;
    }

    #overarchingCarousel{
      display:none;
    }

    </style>
  </head>

  <body>

    <div class="container">

      <div class="masthead">
        <h3 class="muted">Edward Moss</h3>
        <div class="navbar">
          <div class="navbar-inner">
            <div class="container">
              <?php include 'navbar.php' ?>
            </div>
          </div>
        </div><!-- /.navbar -->
      </div>

      <div id="canvasLayer" class="hero-unit" style="height:500px; position:relative;"></div>
      <button class='btn btn-personal'>SPIN!</button>

    </div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="http://www.parsecdn.com/js/parse-1.2.8.min.js"></script>
    <script src="assets/js/canvasCommands.js"></script>
    <script src="assets/js/twister.js"></script>
    <script src="assets/js/parse.js"></script>
    <script src="assets/js/blog.js"></script>
    <script type="text/javascript">
      $(".btn-personal").click(function(){
          spin((Math.floor(Math.random()*91))+91);
      });
      window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        };
      })();
    </script>
  </body>
</html>
