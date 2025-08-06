

//! 1. What is an API and how does JavaScript interact with it?
/*
API (Application Programming Interface) is a way for software to talk to other software.
JavaScript interacts with APIs using tools like `fetch()`, `XMLHttpRequest`, or third-party libraries like Axios.
APIs return data (often in JSON) that JavaScript can use to update the UI or process information.
*/









//! 2. Use fetch() to GET data from "https://jsonplaceholder.typicode.com/posts" and log the result.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => {
    console.log("All posts:", data);
  })
  .catch(error => console.log("Fetch error:", error));










//! 3. What is the difference between fetch() and XMLHttpRequest?
/*
fetch():
- Modern promise-based API
- Cleaner syntax with async/await
- Automatically returns Promises
- No need to manually handle readyState

XMLHttpRequest:
- Old callback-based API
- More boilerplate code
- Not promise-based (you handle states manually)
*/











//! 4. Write an async function that uses await to fetch data from an API and handles errors.
async function getPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }
    const data = await response.json();
    console.log("Posts using async/await:", data);
  } catch (error) {
    console.log("Error fetching posts:", error.message);
  }
}

getPosts();










//! 5. Use fetch() to POST data (name and age) to "https://jsonplaceholder.typicode.com/users".
const newUser = {
  name: "Farhan",
  age: 22
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(newUser)
})
  .then(response => response.json())
  .then(data => console.log("User created:", data))
  .catch(error => console.log("POST error:", error));









//! 6. How do you handle API errors like 404 or 500 inside a fetch() call?
fetch("https://jsonplaceholder.typicode.com/unknown-endpoint")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => console.log("Data:", data))
  .catch(error => console.log("Handled fetch error:", error.message));












//! 7. Fetch a list of users and display only the usernames from the JSON response.
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(users => {
    const usernames = users.map(user => user.username);
    console.log("Usernames:", usernames);
  });









//! 8. What is the purpose of the Content-Type header when making API requests?
/*
The `Content-Type` header tells the server what format the data is being sent in.
Common values:
- "application/json" → for sending JSON
- "application/x-www-form-urlencoded" → for form data
- "multipart/form-data" → for file uploads
*/










//! 9. What does the .json() method do in a fetch() response?
/*
The `.json()` method parses the raw response body (which is a ReadableStream) into a usable JavaScript object.
It returns a Promise, so you must use `await` or `.then()`.
*/

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => response.json()) // parses JSON body
  .then(data => console.log("Parsed JSON object:", data));







  

//! 10. Write code to fetch comments from "https://jsonplaceholder.typicode.com/comments"
//!     and filter out only the comments with postId === 1.
fetch("https://jsonplaceholder.typicode.com/comments")
  .then(response => response.json())
  .then(comments => {
    const filtered = comments.filter(comment => comment.postId === 1);
    console.log("Comments for postId === 1:", filtered);
  });
