//! 1. What does the `async` keyword do when added to a function declaration?

//! 2. What will be the output of the following code snippet?
async function test() {
  return "Hello";
}
const result = test();
console.log(result); // What will this log?

//! 3. Rewrite the following `.then()` based promise code using `async`/`await`:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

//! 4. What happens if an `await` is used outside of an `async` function? Explain with an example.

//! 5. Write an `async` function called `getUserData` that fetches user info from an API and handles errors using `try...catch`.

//! 6. Explain the difference between `await Promise.all()` and using multiple `await` statements one after another.

//! 7. What will the following code log and why?
async function myFunc() {
  console.log("Start");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("End");
}
myFunc();
console.log("Outside");

//! 8. Can an `async` function return a non-promise value? If yes, what does it return?

//! 9. How would you wait for two independent async operations to complete in parallel using `async`/`await`?

//! 10. Write an `async` function to load three APIs: `/user`, `/posts`, and `/comments` in parallel, and return all data as one object.
