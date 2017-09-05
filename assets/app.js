$(document).ready(function () {

    //Array of Movies for initial buttons and to push new buttons to
    var moviesArray = ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Back to the Future", "Bill and Ted"]

    var key ="fde6c58ab10c4620bb10425b10b2032c"
    var moviegif= $(this).attr("data-name")
    var queryURL="https://api.giphy.com/v1/gifs/search?q=" + moviegif + "&api_key=" + key + "&limit=10&rating=PG-13";
   
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

    buttons();

    $(".movieAdd").on("click", function () {
        event.preventDefault();
        var movie = $(".search").val().trim();
        moviesArray.push(movie);
        buttons();
        })

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response)
        
    })


})
