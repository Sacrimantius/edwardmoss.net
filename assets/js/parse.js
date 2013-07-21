Parse.initialize("DeO6nCeFKlIjl9vKcejkbPH71YAk1FlnfRg1dypa", "y4JA2RrRtsKAkuiatp1tK5hgYFWUUnwo36zwy3EC");

$('.alterBackground').click(function () {

SaveStuff();
//GetStuff();

});

// function GetStuff () {

// var SlideShow = Parse.Object.extend("SlideShows")
// var query = new Parse.Query(SlideShow);
// query.equalTo("Name", "Intro");
// query.find({
// 	success : function(show){
// 		var relation = show[0].relation("Slides");
// 		relation.query().find({
// 			success : function(results){
// 				console.log(results);
// 			}
// 		});
// 	}
// });

//}

// function SaveStuff (){
// 	var SlideShow = Parse.Object.extend("SlideShows");
// 	var slideShow = new SlideShow();

// 	slideShow.set("Name", "Intro");

// 	slideShow.save();

// 	var Slide1 = Parse.Object.extend("Slides");
// 	var slide1 = new Slide1();

// 	slide1.set("Number", 1);
// 	slide1.set("Text", "A blank area in your browser.");
// 	slide1.set("Position", [40,40]);
// 	slide1.set("Clear", true);

// 	console.log('Attempt to save 1');

// 	slide1.save(null, {success : function()
// 		{
// 			var slides1 = slideShow.relation("Slides");
// 			slides1.add(slide1);
// 			slideShow.save();
// 		}
// 	});

// 	var Slide2 = Parse.Object.extend("Slides");
// 	var slide2 = new Slide2();

// 	slide2.set("Number", 2);
// 	slide2.set("Text", "Draw 2D and 3D graphics onto/into it.");
// 	slide2.set("Position", [320,110]);
// 	slide2.set("Clear", false);

// 	console.log('Attempt to save 2');

// 	slide2.save(null, {success : function()
// 		{
// 			var slides2 = slideShow.relation("Slides");
// 			slides2.add(slide2);
// 			slideShow.save();
// 		}
// 	});

// 	var Slide3 = Parse.Object.extend("Slides");
// 	var slide3 = new Slide3();

// 	slide3.set("Number", 3);
// 	slide3.set("Text", "'Simple' to use javascript.");
// 	slide3.set("Position", [160,210]);
// 	slide3.set("Clear", false);

// 	console.log('Attempt to save 3');

// 	slide3.save(null, {success : function()
// 		{
// 			var slides3 = slideShow.relation("Slides");
// 			slides3.add(slide3);
// 			slideShow.save();
// 		}
// 	});

// 	var Slide4 = Parse.Object.extend("Slides");
// 	var slide4 = new Slide4();

// 	slide4.set("Number", 4);
// 	slide4.set("Text", "<canvas id='myCanvas' height='100px' width='300px'></canvas>");
// 	slide4.set("Position", [40,40]);
// 	slide4.set("Clear", true);

// 	console.log('Attempt to save 4');

// 	slide4.save(null, {success : function()
// 		{
// 			var slides4 = slideShow.relation("Slides");
// 			slides4.add(slide4);
// 			slideShow.save();
// 		}
// 	});

// 	var Slide5 = Parse.Object.extend("Slides");
// 	var slide5 = new Slide5();

// 	slide5.set("Number", 5);
// 	slide5.set("Text", "var canvas = $(#myCanvas);");
// 	slide5.set("Position", [320,110]);
// 	slide5.set("Clear", false);

// 	console.log('Attempt to save 5');

// 	slide5.save(null, {success : function()
// 		{
// 			var slides5 = slideShow.relation("Slides");
// 			slides5.add(slide5);
// 			slideShow.save();
// 		}
// 	});

// 	var Slide6 = Parse.Object.extend("Slides");
// 	var slide6 = new Slide6();

// 	slide6.set("Number", 6);
// 	slide6.set("Text", "var context = canvas.getContext('2D');");
// 	slide6.set("Position", [160,210]);
// 	slide6.set("Clear", false);

// 	console.log('Attempt to save 6');

// 	slide6.save(null, {success : function()
// 		{
// 			var slides6 = slideShow.relation("Slides");
// 			slides6.add(slide6);
// 			slideShow.save();
// 		}
// 	});
// }

function loadSlideShow(slideName){
	var SlideShow = Parse.Object.extend("SlideShows");
	var query = new Parse.Query(SlideShow);
	query.equalTo("Name", slideName);
	query.find({
		success : function(results){
			console.log(results);
			var relation = results[0].relation("Slides");
			relation.query().find({
				success : function(results){
					console.log(results);
					drawInitialSlide(results);
				},error : function(error){
					console.log(error);
				}
			});
		},error : function(error){
			console.log(error);
		}
	});
}

function loadPage(currentPage, pageToLoad, currentPost){
	var BlogPosts = Parse.Object.extend("BlogPosts");
	var query = new Parse.Query(BlogPosts);
	query.limit(3);
	query.descending('PostNumber');
	if (currentPage < pageToLoad){
		query.lessThanOrEqualTo('PostNumber', (currentPost - 3));
	} else if (currentPage > pageToLoad){
		query.lessThanOrEqualTo('PostNumber', (currentPost + 3));
	} else {
		query.lessThanOrEqualTo('PostNumber', (currentPost));
	}
	query.find({
		success : function(results){
			console.log(results);
			writePage(pageToLoad, results);
		}, error : function(error){
			console.log(error);
		}
	})
}

function loadBlog(){

	var BlogPosts = Parse.Object.extend("BlogPosts");
	var query = new Parse.Query(BlogPosts);
	query.count({
		success : function(results){
			console.log(results);
			setupBlog(Math.ceil(results/3));
			loadPage(currentPage, currentPage, results);
		}, error : function(error){
			console.log(error);
		}
	})

}

function loadSlide(){
var Drawings = Parse.Object.extend("Drawings");
var query = new Parse.Query(Drawings);
query.equalTo("Player", "Lewie");
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