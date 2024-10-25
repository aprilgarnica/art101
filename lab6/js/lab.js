// index.js - Lab 6: Arrays and Objects
// Author: April Garnica 
// Date: October 24

// Define Variables
myTransport = ["car", "bike", "bus"];

// Create an object for my main ride
myMainRide = {
  make: "Honda",
  model: "Odyssey",
  color: "Purple",
  year: 2000,
  age: function() {
      return 2024 - this.year;
  }
}

//Output
document.writeln("My Transportation Methods: ", myTransport, "</br>")
//write an object to the document
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

