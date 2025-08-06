//! 1. What are conditional statements in JavaScript? List all types.

//! 2. Write a program to check if a number is positive or negative.


// const number = prompt("Enter a number:"); // html needed

// if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }


//!  3. Write a program that checks if a number is even or odd using if-else.

// let num = 55;
// if (num % 2 ===  0){
//     console.log("Number is even ")
// }
// else {
//     console.log("Number is odd ")
// }

//! 4. How does an if-else statement work? Write a basic syntax example.


//! 5. Use if-else-if ladder to check grades based on marks (90+ = A, 80+ = B, etc).
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your marks: ", function(input) {
  const marks = Number(input);

  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else if (marks >= 60) {
    console.log("Grade: D");
  } else if (marks >= 50) {
    console.log("Grade: E");
  } else {
    console.log("Grade: F (Fail)");
  }

  rl.close(); // Close the input after getting the answer
});

//! browser wala scene 

// const marks = Number(prompt("Enter your marks:"));

// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 80) {
//   console.log("Grade: B");
// } else if (marks >= 70) {
//   console.log("Grade: C");
// } else if (marks >= 60) {
//   console.log("Grade: D");
// } else if (marks >= 50) {
//   console.log("Grade: E");
// } else {
//   console.log("Grade: F (Fail)");
// }
