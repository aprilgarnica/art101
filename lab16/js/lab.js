// index.js - Lab 16: JSON and APIs
// Requirements: jQuery must be loaded for this script to work.
// Author: April Garnica 
// Date: December 2

let comicNum=300;


const fetchComic  = () => {
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the API docs)
        url: `https://xkcd.now.sh/?comic=${comicNum}`,
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType: "json",
        // What to do when the API call is successful
        success: function (data) {
            let comicObj = data;
            console.log(data);
            // Display the comic
            $("#output").html(`<h2>${comicObj.title}</h2><img src="${comicObj.img}" alt="${comicObj.alt}" />`);
        },
        // What to do if the API call fails
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
        },
    });
}


// Button click handlers
$("#next").click(() => {
    comicNum++; // Increment comicNum
    fetchComic();
});


$("#previous").click(() => {
    comicNum = Math.max(1, comicNum - 1); // Decrement comicNum, but don't go below 1
    fetchComic();
});


// Load the initial comic
fetchComic();