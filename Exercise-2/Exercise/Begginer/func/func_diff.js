// 1. Function Declaration
// This is the regular, old-school way to define a function.

// Features:
// Hoisted (you can call it before it's defined).

// Has its own this and arguments.

// Can be used as a constructor (with new).

function greet1(name) {
  return `Hello, ${name}`;
}

//-----------------------------------------------------------//


// 2. Function Expression
// You define a function and store it in a variable.

//  Features:
// NOT hoisted (you must define it before using).
// Has its own this and arguments.
// Can also be used as a constructor.

const greet = function(name) {
  return `Hello, ${name}`;
};

//---------------------------------------------------------------//


// 3.  Arrow Function (ES6+)
// A modern, shorter syntax for writing functions.

// Features:
// NOT hoisted

//  No own this → it uses this from the outer function (lexical this)
//  No arguments object
//  Cannot be used as a constructor
//  Super short & clean (great for one-liners)

const greet2 = (name) => `Hello, ${name}`;






// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const subtract = function(a, b) {
  return a - b;
};



// Arrow Function
const multiply = (a, b) => a * b;

console.log(add(5, 3));       // 8
console.log(subtract(5, 3));  // 2
console.log(multiply(5, 3));  // 15







