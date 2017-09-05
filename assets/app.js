$(document).ready(function () {

    //Array of Movies for initial buttons and to push new buttons to
    var moviesArray = ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Back to the Future", "Bill and Ted"]
   
    function buttons() {
        $(".buttons").empty();
        $.each(moviesArray, function (index) {
            var b = $("<button>")
            b.attr("data-name", moviesArray [index])
            b.addClass("moviesAdd")
            b.text(moviesArray[index])
                $(".buttons").append(b)
        })
    }
    //on click to post Gifs
    $(document).on("click", ".moviesAdd", postGifs);
        

    buttons();

    $(".movieAdd").on("click", function () {
        event.preventDefault();
        var movie = $(".search").val().trim();
        moviesArray.push(movie);
        buttons();
        })

    function postGifs () {
        var moviegif = $(this).attr("data-name")
        var key ="fde6c58ab10c4620bb10425b10b2032c"
        var queryURL="https://api.giphy.com/v1/gifs/search?q=" + moviegif + "&api_key=" + key + "&limit=10&rating=PG-13";
        
        $.ajax({
        url: queryURL,
        method: 'GET'
        }).done(function (response) {
            console.log(response)
            var data = response.data;
            for (var i = 0; i <data.length; i++) {
                $("<div>").append(".movieGifs");
                var gif = $("<img>");
                $(".movieGifs").append(gif)
                var animateGif = data[i].images.original.url;
                var stillGif = data[i].images.original_still.url;
                var ratings = data[i].rating;
                var ratingPosted = $("<p>");
                    ratingPosted.text("Rating = " + ratings);
                    
            }
        })
    }
});
