// index.js - Lab 8: Anon Functions and Callbacks
// Author: April Garnica 
// Date: October 31

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log("Is 1 even?", isEven(1));
console.log("Is 2 even?", isEven(2));

array = [14, 23, 8, 79, 36, 150, 10000];
console.log("My array", array);

var result = array.map(isEven);

// should return [true, false, true, false, true, true, true]
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 3;
});

// should return [2744, 12167, 512, 493039, 46656, 3375000, 1000000000000]
console.log("Third power of array:", result);
