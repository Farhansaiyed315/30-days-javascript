console.log("Higher Order Function");

//! Explain the difference between forEach, map, filter, and reduce.


//!  THE FOREACH METHOD USES CALL BACK.
// It goes through each element in the array one by one.
// For every element, it calls a function (the callback function) and performs an action.
// No need to use for, while, or any other loop manually.
// forEach automates the process.
// You can use forEach only on arrays, not on normal objects.


function printFruit(fruit2) {
    console.log(fruit2);
  }
  
  let fruits2 = ["apple", "banana", "cherry"];
  fruits2.forEach(printFruit);


  
