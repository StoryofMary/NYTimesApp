$(document).ready(function() {

    $(".container").on("click", "#runSearch", function(evt) {
    evt.preventDefault();
    var searchTerm = $("#searchTerm").val().trim();
    var startYr = $("#startYear").val().trim();
    var endYr = $("#endYear").val().trim();
    

  var APIKey = "c3a12d822e45474ba56cad8bf2d2b534";
  var URL ="http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchTerm+"&page=2&sort=oldest&api-key="+APIKey;
    
  console.log(URL);
  //alert(URL);
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: URL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {

      // Log the queryURL
      console.log(URL);

      // Log the resulting object
      console.log(response);
    });
  });

});