 //Array of Movies for initial buttons and to push new buttons to
    var moviesArray = ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Back to the Future", "Bill and Ted"]
   
    function buttons() {
        $(".buttons").empty();
        for (var i = 0; i < moviesArray.length; i++) {
            var b = $("<button>");
            b.attr("data-name", moviesArray [i]);
            b.addClass("moviesAdd");
            b.text(moviesArray[i]);
                $(".buttons").append(b);
        }
    };

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
            $(".moviegifs").empty();
            console.log(response)
            for (var i = 0; i < response.data.length; i++) {
                var animateGif = response.data[i].images.original.url;
                var gifImage = $("<img>").attr("src", animateGif);
                var stillGif = response.data[i].images.original_still.url;
                var ratings = response.data[i].rating;
                $(".moviegifs").append("<br>", "Rating = ", ratings, "<br>", gifImage, )
            
            }
        })
    }

$(document).on("click", ".moviesAdd", postGifs);


