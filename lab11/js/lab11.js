// index.js - Lab 11: JavaScript Events and Forms
// Requirements: jQuery must be loaded for this script to work.
// Author: April Garnica 
// Date: November 11

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
    // Convert string to an array, sort it, and join back to string
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function () {
    // Get the value of the input field
    const userName = $("#user-name").val();

    // Sort the username
    const userNameSorted = sortString(userName);

    // Append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});



