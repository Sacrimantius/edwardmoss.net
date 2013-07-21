
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

      <!-- Jumbotron -->
      <div class="jumbotron">
        <h1>A Brief Look At Me</h1>
        <p class="lead">I don't generally like pictures of myself but there are one or two that will always be very important to me. They arn't necessarily attractive photos (depends on your preferance I suppose) but they are Me.</p>
        <a class="btn btn-large btn-personal">Take A Look</a>
      </div>
    </div>
    <div id="overarchingCarousel">
      <div id="myCarousel" class="carousel slide">
        <div class="carousel-inner">
          <div class="item active">
            <div class="imageContainer"> 
              <img src="assets/img/pictures/18thBirthday.jpg" alt="">
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>My 18th.</h1>
                <p class="lead">Yes, that is me dressed at Tweety Pie for my 18th. No, it wasn't against my will (mostly). My Friends and Family decided that it would be fun to go paintballing. This was the handicap imposed on me.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imageContainer"> 
              <img src="assets/img/pictures/RockyHorror.jpg" alt="">
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>Rocky Horror Show.</h1>
                <p class="lead">Another odd one here. During my time at boarding school my house master decided it was a good idea to take ~50 15-18 year old boys to the Rocky Horror Show in full drag. 10/10 Would do again.</p>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="imageContainer"> 
              <img src="assets/img/pictures/RegularOldMe.jpg" alt="">
            </div>
            <div class="container">
              <div class="carousel-caption">
                <h1>:)</h1>
                <p class="lead">Hey! Normal Ed. Just a really comfortable photo. Taken while with Family and Friends and Nelly (the dog). Both of us happy with life and smiling.</p>
              </div>
            </div>
          </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
      </div>
    </div> <!-- /container -->
    <div class="container">
      <hr>
      <div class="footer">
        <p>&copy; Me 2013</p>
      </div>
    </div>

    <!-- Le javascript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/jquery.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script>
      $('.btn-personal').click(function(){
        $('.btn-personal').hide();
        $('#overarchingCarousel').show();
      });
    </script>

  </body>
</html>
