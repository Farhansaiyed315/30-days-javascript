//! 1. What is the difference between a Promise’s resolve, reject, and finally methods?

//! 2. Write a function that returns a Promise which resolves after 2 seconds with the message "Hello after 2 seconds"

//! 3. Explain the difference between .then() and .catch() in Promise chaining.

//! 4. Convert the following callback-based code into Promise-based:
setTimeout(() => {
  console.log("Task completed");
}, 1000);

//! 5. Create a function fetchUser() that returns a Promise.
//!    If the user is found, resolve with user data, else reject with "User not found"

//! 6. What is Promise.all() and how does it behave if one promise fails?

//! 7. What will be the output of the following code?
Promise.resolve("First")
  .then(res => {
    console.log(res);
    return "Second";
  })
  .then(res => {
    throw new Error("Something went wrong");
  })
  .catch(err => {
    console.log("Caught:", err.message);
  });

//! 8. Create a chained Promise that performs three async tasks in sequence. Log a message after each task.

//! 9. Explain the difference between Promise.all(), Promise.race(), and Promise.any() with examples.

//! 10. Why and when would you use async/await instead of plain Promises with .then()?




//?   .Then 

//! Q1: What is .then() in JavaScript?

//! Q2: How to chain multiple .then() methods?

//! Q3: How does .then() handle asynchronous operations?

//! Q4: What happens if an error occurs in a .then() chain?

//! Q5: Can .then() return another Promise?

