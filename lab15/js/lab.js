// index.js - Lab 15: AJAX
// Requirements: jQuery must be loaded for this script to work.
// Author: April Garnica 
// Date: November 25


$(document).ready(function() {
    // Clear the output div initially to ensure no image appears
    $("#output").empty();
  
    // When the button is clicked
    $("#get-cat").on("click", function() {
      // Perform the AJAX request to get a random cat image
      $.ajax({
        url: "https://api.thecatapi.com/v1/images/search",
        type: "GET",
        dataType: "json",
      })
      .done(function(data) {
        // Log the response to check what we get
        console.log(data);
        
        // Extract the image URL
        let imageUrl = data[0].url;
  
        // Append the image to the #output div
        $("#output").html("<img src='" + imageUrl + "' alt='Random Cat' />");
      })
      .fail(function(xhr, status, errorThrown) {
        // Log any errors
        console.log("Error: " + errorThrown + " Status: " + status);
        
        // Display a message if the request fails
        $("#output").text("Failed to load a random cat image. Please try again.");
      });
    });
  });
