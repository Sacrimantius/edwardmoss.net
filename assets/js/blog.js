var currentPage;
var numberOfPages;
var pageString;

function setupBlog (pageCount){

	currentPage = 1;
	numberOfPages = pageCount;

}

function writePage (pageNumber, blogPosts){

	currentPage = pageNumber;

	$('.btn-personal').hide();

	pageString = '';

	for (i = 0; i < blogPosts.length; i++){
		buildPageString("<h1>" + blogPosts[i].get('Title') + "</h1>");
		buildPageString("<p>" + blogPosts[i].get('Content') + "</p>");
		buildPageString("<hr>");
	}
	console.log(pageString);
	$('.jumbotron').html(pageString);
	console.log(currentPage + " of " + numberOfPages);
	var navString = "<center><p>";
	if (pageNumber != 1){
		navString = navString + "<a id='previousPageLink'><i class='icon-chevron-left icon-white'></i></a> ";
	}
	navString = navString + currentPage + " of " + numberOfPages;
	if (pageNumber != numberOfPages){
		navString = navString + "<a id='nextPageLink'><i class='icon-chevron-right icon-white'></i></a>";
	}
	navString = navString + "</p></center>";
	console.log(navString);
	$('#blogNav').html(navString);

	$('#previousPageLink').click(function(){
		loadPage(currentPage, currentPage - 1, blogPosts[0].get('PostNumber'));
	});
	$('#nextPageLink').click(function(){
		loadPage(currentPage,  currentPage + 1, blogPosts[0].get('PostNumber'));
	});

}

function buildPageString(string){

	pageString = pageString + string;

}