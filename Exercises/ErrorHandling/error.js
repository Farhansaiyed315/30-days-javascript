console.log('Error handling page 197 of pdf notes');

//! Write a try-catch block to catch an error when trying to access an undefined variable.
console.log('Question number 1..........');

try {
  console.log(someUndefinedVariable); // this will throw a ReferenceError
} catch (error) {
  console.log("An error occurred:", error.message);
}


//? Realistic Example  Accessing user data from a response

function getUserInfo(response) {
  try {
    // Let's assume we're trying to get the user name from a server response
    const userName = response.user.name;
    console.log("User name:", userName);
  } catch (error) {
    console.log("Oops! Couldn't access user name:", error.message);
  }
}

//Simulating a correct response
const validResponse = {
  user: {
    name: "Farhan",
    age: 22
  }
};

// Simulating a broken response (user is undefined)
const invalidResponse = {};

// Testing both cases
getUserInfo(validResponse);   
getUserInfo(invalidResponse); 

//! Create a function that throws an error if a number is negative.
console.log('Question number 2........');

function checkPositiveNumber(number) {
  if (number < 0) {
    throw new Error("Number cannot be negative!");
  }
  console.log("Valid number:", number);
}

// Using try-catch to call the function
try {
  checkPositiveNumber(10);   // This will work fine
  checkPositiveNumber(-5);   // This will throw an error
} catch (error) {
  console.log("Caught an error:", error.message);
}

// Leaving the rest of two for you guys to practice. 

