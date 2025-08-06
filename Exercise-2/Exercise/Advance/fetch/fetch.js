



// ===============================================
//! FETCH() API QUESTIONS
// ===============================================

//! 1. What is `fetch()` in JavaScript?

// fetch() is a built-in function in JavaScript used to make HTTP requests (GET, POST, etc).
// It returns a Promise and works asynchronously.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log('GET data:', data));








//! 2. What are the advantages of using `fetch()` over `XMLHttpRequest`?

// - Simpler and cleaner syntax
// - Uses Promises, so better for async operations
// - Supports async/await
// - More modern and easier to read









//! 3. How do you handle errors with `fetch()`?

fetch('https://jsonplaceholder.typicode.com/invalid-url')
  .then(res => {
    if (!res.ok) throw new Error('Something went wrong');
    return res.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error handled:', error));












//! 4. How do you make a POST request using `fetch()`?

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Farhan',
    body: 'Learning fetch in JS',
    userId: 101
  })
})
  .then(res => res.json())
  .then(data => console.log('POST data:', data))
  .catch(err => console.error('POST error:', err));










//! 5. What is the difference between using fetch().then() and async/await?

// .then() style:
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => console.log('Using .then:', data));

// async/await style:
async function getData() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await res.json();
    console.log('Using async/await:', data);
  } catch (err) {
    console.error('Async/await error:', err);
  }
}
getData();












// ===============================================
//! ASYNC/AWAIT QUESTIONS
// ===============================================










//! 1. What is `async/await` in JavaScript?

// async/await is used to write asynchronous code in a synchronous (clean and readable) way.
// 'await' can only be used inside an 'async' function.

async function example1() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  console.log('Q1 - Async/Await basic:', data);
}
example1();














//! 2. What happens if we forget to use `await` inside an async function?

// Without await, the Promise is not resolved before moving to the next line.

async function example2() {
  const res = fetch('https://jsonplaceholder.typicode.com/posts/1'); // Forgot await
  console.log('Q2 - Forgot await:', res); // Logs a Promise, not actual data
}
example2();












//! 3. How do you handle errors in async/await?

// Use try-catch block to catch errors.

async function example3() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/invalid-url');
    if (!res.ok) throw new Error('404 Not Found');
    const data = await res.json();
    console.log('Q3 - Handled safely:', data);
  } catch (error) {
    console.error('Q3 - Caught error:', error.message);
  }
}
example3();














//! 4. Can we use async/await with multiple fetches?

// Yes, and we can use Promise.all with await to run them in parallel.

async function example4() {
  const [post, user] = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json()),
    fetch('https://jsonplaceholder.typicode.com/users/1').then(res => res.json())
  ]);
  console.log('Q4 - Post:', post);
  console.log('Q4 - User:', user);
}
example4();














//! 5. What happens if you use `await` outside of an async function?

// Error: "SyntaxError: await is only valid in async functions"

const example5 = () => {
  // await fetch('https://jsonplaceholder.typicode.com/posts/1'); // Invalid here
  console.log('Q5 - Cannot use await outside async function');
};

// Correct way:
const fixedExample5 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  console.log('Q5 - Correct usage inside async function:', data);
};
fixedExample5();
