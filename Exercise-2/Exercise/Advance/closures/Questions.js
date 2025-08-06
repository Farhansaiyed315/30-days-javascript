//! 1. What is a closure in JavaScript? Explain with a simple example.


//! 2. What will be the output of the following code?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter();
counter();


//! 3. How do closures help in data privacy or encapsulation?


//! 4. Can a closure access variables from its outer scope even after the outer function has finished execution?


//! 5. What is the output of this code and why?

function greet() {
  let name = "Farhan";
  return function() {
    console.log("Hello " + name);
  };
}

const sayHello = greet();
sayHello();


//! 6. How does JavaScript handle closures inside a loop? What will this print and why?

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}


//! 7. Rewrite the code above using closures so that it prints 0, 1, and 2.


for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}


//! 8. Explain how closures are used to create private variables in JavaScript.


//! 9. What are potential memory issues with closures, and how can they be avoided?


//! 10. Create a function createCounter(start) that returns two functions: one to increment and one to decrement the counter.
//! Each function should maintain access to the same start value using closures.

function createCounter(start) {
  let count = start;

  return {
    increment: function () {
      count++;
      console.log("Increment:", count);
    },
    decrement: function () {
      count--;
      console.log("Decrement:", count);
    }
  };
}

const counter2 = createCounter(5);
counter2.increment();
counter2.decrement();
