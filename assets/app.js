$(document).ready(function () {

    //Array of Movies for initial buttons and to push new buttons to
    var moviesArray = ["Pulp Fiction", "Reservoir Dogs", "Kill Bill", "Back to the Future", "Bill and Ted"]

    var key ="fde6c58ab10c4620bb10425b10b2032c"
    var moviegif=""
    var queryURL="https://api.giphy.com/v1/gifs/search?q=" + moviegif + "&api_key=" + key + "&limit=10&rating=PG-13";
   
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response)
    })


})
