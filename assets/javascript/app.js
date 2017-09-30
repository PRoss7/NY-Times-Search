// API Key= 2d659f708f2041ec9eb3b2723e66ea7d
/*$(document).ready(function () {

	

	function articleSearch () {
		
		articleHTML = "<div class='article-section'>" + "<header class='article-header'>" + "<h2>" + "<i class='fa fa-table' aria-hidden='true'>" + "</i>" + "Top Articles" + "</h2>" + "</header>" + "</div>";

		$(".search-results").html(articleHTML);

	}


	$(".search-results").on("click", ".search", function (){
		
		articleSearch();

	});

});

var articleHTML;*/

var APIKey= "2d659f708f2041ec9eb3b2723e66ea7";

var search = $("#searchfor").val();

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2d659f708f2041ec9eb3b2723e66ea7d&q="+ search;

var articlesSet = 0;

var results = 0;

var startYear = 0;
var endYear = 0;

$("#search").on("click", function(event) {

function runQuery(numArticles, queryURL) {


$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

        	console.log(queryURL);
        	console.log(response);

        $(".headline").text(response.response.docs["0"].headline.print_headline);
        $(".author").text(response.response.docs["0"].byline);
        $(".date").text(response.response.docs["0"].pub_date);
        $(".website").text(response.response.docs["0"].queryURL);

});
      for (var i = 0; i < numArticles; i++) {

      	articles++;

      }

}

});