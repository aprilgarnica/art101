// index.js - Lab 13: Loops
// Requirements: jQuery must be loaded for this script to work.
// Author: April Garnica 
// Date: November 18

function fizzBuzz() {
    let oneLongString = ""; 
    
    for (let num = 1; num <= 200; num++) {
        let str = ""; 
        if (num % 3 === 0) {
            str += "Fizz";
        }
        if (num % 5 === 0) {
            str += "Buzz";
        }
        if (num % 7 === 0) {
            str += "Boom";
        }
        
      
        if (str === "") {
            str = num;
        } else {
            str += "!"; 
        }

    
        oneLongString += "<p>" + str + "</p>";
    }

  
    $("#output").html(oneLongString);
}


fizzBuzz();

  