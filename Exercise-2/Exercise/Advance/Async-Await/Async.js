

//! 1. What does the `async` keyword do when added to a function declaration?
// The `async` keyword makes a function return a Promise automatically.
// It allows the use of `await` inside the function to pause execution until a Promise is resolved.
// This helps write asynchronous code in a cleaner, more readable way.

async function greet() {
  return "Hello";
}
greet().then(msg => console.log(msg)); // Logs: Hello













//! 2. What will be the output of the following code snippet?
async function test() {
  return "Hello";
}
const result = test();
console.log(result); // Output: Promise { 'Hello' }

// Even though the function returns a string, it is automatically wrapped in a Promise.











//! 3. Rewrite the following `.then()` based promise code using `async`/`await`:
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}











//! 4. What happens if an `await` is used outside of an `async` function? Explain with an example.
// Using `await` outside of an `async` function will cause a SyntaxError.
// Example:
await fetch('https://api.example.com'); // This will throw an error if not inside async function

// To fix it:
async function loadData() {
  const res = await fetch('https://api.example.com');
}










//! 5. Write an `async` function called `getUserData` that fetches user info from an API and handles errors using `try...catch`.
async function getUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Failed to fetch user data:", error);
  }
}












//! 6. Explain the difference between `await Promise.all()` and using multiple `await` statements one after another.
// `await Promise.all()` runs multiple async tasks in parallel and waits for all of them to finish.
// Using multiple `await` statements one after another runs them sequentially (one-by-one).
// Parallel is faster when tasks are independent.

async function exampleParallel() {
  const [data1, data2] = await Promise.all([
    fetch('/api/one'),
    fetch('/api/two')
  ]);
}

async function exampleSequential() {
  const data1 = await fetch('/api/one');
  const data2 = await fetch('/api/two');
}









//! 7. What will the following code log and why?
async function myFunc() {
  console.log("Start");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("End");
}
myFunc();
console.log("Outside");

// Output:
// Start
// Outside
// End

// Explanation: `await` pauses only inside `myFunc`. `console.log("Outside")` runs immediately.












//! 8. Can an `async` function return a non-promise value? If yes, what does it return?
// Yes. If an `async` function returns a non-promise value, JavaScript automatically wraps it in a Promise.
// Example:
async function sayHi() {
  return "Hi";
}
sayHi().then(msg => console.log(msg)); // Logs: Hi













//! 9. How would you wait for two independent async operations to complete in parallel using `async`/`await`?
async function loadInParallel() {
  const promise1 = fetch('/api/data1');
  const promise2 = fetch('/api/data2');

  const [res1, res2] = await Promise.all([promise1, promise2]);

  const data1 = await res1.json();
  const data2 = await res2.json();

  console.log(data1, data2);
}









//! 10. Write an `async` function to load three APIs: `/user`, `/posts`, and `/comments` in parallel, and return all data as one object.
async function loadAllData() {
  const [userRes, postsRes, commentsRes] = await Promise.all([
    fetch('/user'),
    fetch('/posts'),
    fetch('/comments')
  ]);

  const user = await userRes.json();
  const posts = await postsRes.json();
  const comments = await commentsRes.json();

  return { user, posts, comments };
}
