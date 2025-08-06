
//! Create a function to add two numbers

function addNumbers(a, b) {
  return a + b
}

const result = addNumbers(4, 6);
console.log("The sum is", result)

//! create a function that return a square of a number. 

function squarenum(num) {
  return num * num
}
const square = squarenum(5);
console.log("The square of a given number is ", square)

// //? With arrow function

// const squarenum = (num) => num * num ;
// console.log ("The square of the given number is ", squarenum(5))


//!  Write a function that checks if a number is even or odd.


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your number to check if its even or odd : ", function (input) {
  const numbers = Number(input);

  if (numbers % 2 === 0) {
    console.log(numbers, "is an even number")
  }
  else {
    console.log(numbers, "is an odd number")
  }
  rl.close(); // Close the input after getting the answer
});


//!  4. Create a function that takes a string and returns its length.

function strlent() {
  str = "farhan"
  console.log("\nThe length of the string is", str.length);
}
strlent();

//! 5. Create a function that converts Celsius to Fahrenheit.


function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

const tempInCelsius = 1;
const tempInFahrenheit = celsiusToFahrenheit(tempInCelsius);

console.log(`${tempInCelsius}°C is equal to ${tempInFahrenheit}°F`);


//! 6. Write a function that takes a name and prints "Hello, [name]!"

function greet(name) {
  console.log("Hello , " + name + "!");
}

greet("Farhan");


// //! 7. Write a function that calculates the factorial of a number

//?  Using a for loop:

function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// Example usage:
console.log("Facrotial using normal function call", factorial(5));


//? Using Recursion (cool and interview-friendly):

function factorialrec(n) {
  if (n == 0 || n == 1) {
    return 1
  }
  return n * factorialrec(n - 1);

}
console.log("Factorial using reccursion", factorialrec(5));

//! 8. Create a function that reverses a string.

function reverse(str) {
  return str.split('').reverse().join('');
}

console.log(reverse("Farhan"));

//! // 9. Create a function to check whether a number is prime or not.

function isPrime(num) {
  if (num <= 1) return `${num} is not a prime number.`;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return `${num} is not a prime number.`;
    }
  }

  return `${num} is a prime number.`;
}
console.log(isPrime(1))

//! 10. Write a function to find the smallest number in an array.

//? Using JavaScript’s built-in method

// const findsmallest = arr => Math.min(...arr);
// console.log("The smallest number is ", findsmallest([1,2,36,58,24,7,8,45,]))


//? using for loop. 
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return `${smallest} is the smallest number`;
}

const numbers = [22, 55, 88, 444];

console.log(findSmallest(numbers)); 
