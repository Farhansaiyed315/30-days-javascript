

//! 1. What is a closure in JavaScript? Explain with a simple example.

/*
A closure in JavaScript is when a function remembers and can access variables
from its outer scope, even after the outer function has finished executing.

In short:
If an inner function uses variables from an outer function — and the inner function is returned or used later — that's a closure.

Closures are useful for:
- Data privacy
- Creating private variables
- Keeping state in async code
*/

//  Simple example:
function outer() {
  let name = "Farhan"; // variable from outer function

  function inner() {
    console.log("Hello, " + name); // inner function uses 'name'
  }

  return inner; // return the inner function
}

const greet = outer(); // outer() runs and gives back inner function
greet(); // logs: Hello, Farhan








//! 2. What will be the output of the following code?

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // ?
counter(); // ?

/*
 Output:
1
2

 Explanation:
- `outer()` is called, and it returns the `inner()` function.
- Inside `outer()`, there's a local variable `count = 0`.
- When we call `counter()`, it runs `inner()` which:
  - Increments `count` by 1
  - Logs the new value of `count`
- Because of the **closure**, `inner()` remembers the `count` variable even after `outer()` is done executing.

So the first `counter()` logs 1,
and the second `counter()` logs 2,
because they share the same `count` in closure scope.
*/











//! 3. How do closures help in data privacy or encapsulation?

/*
Closures help in **data privacy** and **encapsulation** by allowing you to create
**private variables** — variables that can't be accessed directly from outside the function.

 In simple words:
You can "lock" variables inside a function and expose only what you want — just like making variables private in other languages like Java or C++.

This is super useful for:
 Protecting internal state
 Preventing accidental changes
 Creating clean, modular code
*/

//  Example: counter with private "count"
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // 1
counter.increment();  // 2
console.log(counter.getCount()); // 2
// console.log(counter.count); //  undefined (can't access directly)













//! 4. Can a closure access variables from its outer scope even after the outer function has finished execution?

/*
 Yes, that's exactly what closures do!

Even after the outer function finishes execution, the inner function (closure)
**remembers** the variables from the outer function's scope.

JavaScript uses something called **lexical scoping**, so the inner function keeps a reference to those variables.
This is what allows closures to work.
*/

// Example:
function outer() {
  let message = "I am still here!";
  
  return function inner() {
    console.log(message);
  };
}

const sayMessage = outer(); // outer() runs and returns inner
sayMessage(); // logs: I am still here!

/*
Explanation:
- When `outer()` is called, it defines `message` and returns `inner()`.
- Even though `outer()` has finished running, `inner()` still remembers `message`.
- This is possible because of closure.
*/










//! 5. What is the output of this code and why?

function greet() {
  let name = "Farhan";
  return function() {
    console.log("Hello " + name);
  };
}

const sayHello = greet();
sayHello(); // ?

/*
 Output:
Hello Farhan

 Why?
- When `greet()` is called, it creates a local variable `name = "Farhan"` and returns an inner function.
- The returned function uses `name` from its outer scope.
- Even though `greet()` has finished executing, the returned function still "remembers" the value of `name`.

This is a perfect example of a **closure** — the function has access to the variables from its outer scope, even after that outer function is done running.
*/












//! 6. How does JavaScript handle closures inside a loop? What will this print and why?

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/*
 What will it print?

 Output (after ~1 second):
3
3
3

Why?
- `var` is function-scoped, NOT block-scoped.
- So all three `setTimeout()` functions share the same `i` (from the same scope).
- By the time the timeouts run (after 1 second), the loop is done and `i` is 3.
- Each callback accesses the same `i` due to closure and sees `3`.

This is a classic "closure inside a loop" problem!

 How to fix it?
Use `let` instead of `var` or wrap the `setTimeout` in a closure.

 Using `let` makes a new `i` for every loop iteration:
*/
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); /








    //! 7. Rewrite the code above using closures so that it prints 0, 1, and 2.

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

/*
Output (after 1 second):
0
1
2

 Why this works:
- We use an IIFE (Immediately Invoked Function Expression) to create a new scope on each loop iteration.
- The current value of `i` is passed as `j`, which becomes a local variable inside the IIFE.
- Each `setTimeout` callback closes over its own copy of `j`, NOT the shared `i`.
- So when the timeout runs, it logs the correct value (0, 1, then 2).

 This is how we manually create closure-based scopes before `let` was introduced in ES6.

 Bonus: Here's a cleaner version using `let` (modern JS):
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
*/












//! 8. Explain how closures are used to create private variables in JavaScript.

/*
 Closures allow us to create **private variables** in JavaScript — variables that can’t be accessed directly from outside a function.

 How it works:
You define variables inside a function, and return other functions that can access those variables.
This way, the internal variables are hidden from the outside world, but still accessible to the returned functions via closure.

This is super useful for:
- Encapsulation
- Hiding internal logic
- Preventing direct modifications
*/

//  Example: Counter with private variable
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log("Incremented:", count);
    },
    decrement: function () {
      count--;
      console.log("Decremented:", count);
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();  // Incremented: 1
counter.increment();  // Incremented: 2
console.log(counter.getCount()); // 2

//  count is private, can't access it directly
console.log(counter.count); // undefined









//! 9. What are potential memory issues with closures, and how can they be avoided?

/*
  Closures can cause **memory leaks** if not handled properly.

Why? Because closures keep a reference to the outer scope's variables.
If these references are held longer than needed (especially in long-lived objects or event listeners), they can **prevent garbage collection** and use up memory unnecessarily.

  Common situations where memory issues happen:
- Storing closures in global variables
- Closures inside event listeners that are never removed
- Unused closures inside timers or callbacks

*/

//  Bad: memory leak due to unremoved listener
function setup() {
  let hugeData = new Array(1000000).fill("fire");

  document.getElementById("btn").addEventListener("click", function () {
    console.log(hugeData[0]); // closure keeps reference to hugeData
  });
}

setup();
// If the event listener is not removed, `hugeData` stays in memory forever!

// Solution: clean up properly
function setupFixed() {
  let hugeData = new Array(1000000).fill("tick");

  const handler = function () {
    console.log(hugeData[0]);
  };

  const btn = document.getElementById("btn");
  btn.addEventListener("click", handler);

  // Later, when not needed
  btn.removeEventListener("click", handler); // releases closure
}

/*
  Tips to avoid memory issues with closures:
- Remove event listeners when no longer needed.
- Don’t store unnecessary data in closures.
- Use weak references if supported (like WeakMap).
- Avoid global closures unless truly needed.
*/












//! 10. Create a function createCounter(start) that returns two functions: one to increment and one to decrement the counter.
//! Each function should maintain access to the same start value using closures.

function createCounter(start) {
  let count = start; // private variable inside closure

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
counter2.increment();   // Increment: 6
counter2.decrement();   // Decrement: 5

/*
Explanation:
- `createCounter` takes a starting number and stores it in `count`.
- It returns an object with two methods: `increment` and `decrement`.
- Both functions are closures that access and modify the same `count` variable.
- The `count` value is private and can’t be accessed directly from outside.
This demonstrates how closures are used to preserve shared state between multiple functions.
*/

