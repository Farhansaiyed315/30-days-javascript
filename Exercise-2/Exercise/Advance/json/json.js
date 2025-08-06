//! 1. What is JSON and how is it different from a JavaScript object?
/*
JSON (JavaScript Object Notation) is a data format used to store and exchange data.
Differences:
- JSON is always a string format, JavaScript object is native.
- JSON keys and string values must use double quotes.
- JSON does not support functions, undefined, or comments.
*/

const jsObject = { name: "Farhan", age: 22 };
const jsonString = '{"name":"Farhan","age":22}'; // Valid JSON










//! 2. Convert a JavaScript object to a JSON string using JSON.stringify()
const user = { name: "Farhan", age: 22 };
const json = JSON.stringify(user);
console.log(json); // '{"name":"Farhan","age":22}'












//! 3. Convert a JSON string back to a JavaScript object using JSON.parse()
const jsonStr = '{"name":"Farhan","age":22}';
const parsedObj = JSON.parse(jsonStr);
console.log(parsedObj.name); // Farhan
console.log(parsedObj.age);  // 22












//! 4. Parse this JSON string: '{"name":"Farhan","age":22,"skills":["JS","HTML"]}'
//!    and access the name property.
const data = '{"name":"Farhan","age":22,"skills":["JS","HTML"]}';
const parsed = JSON.parse(data);
console.log(parsed.name); // Farhan













//! 5. What happens if you try to stringify an object with a circular reference? Try it and explain.
const a = {};
const b = { a };
a.b = b;

try {
  const str = JSON.stringify(a);
  console.log(str);
} catch (err) {
  console.log("Error:", err.message); // Converting circular structure to JSON
}
// JSON.stringify() throws error if there is circular reference













//! 6. Write a function that accepts a user object and stores it in localStorage as JSON.
function storeUser(userObj) {
  localStorage.setItem("userData", JSON.stringify(userObj));
}
storeUser({ name: "Farhan", age: 22 });










//! 7. Fetch this JSON string from localStorage and parse it back into an object.
const stored = localStorage.getItem("userData");
const userObj = JSON.parse(stored);
console.log(userObj.name); // Farhan



//! 8. What data types are supported in JSON?
/*
Valid:
- string
- number
- boolean
- array
- object
- null

Invalid:
- undefined
- functions
- symbols
- BigInt
*/

const validJSON = {
  name: "Farhan",
  age: 22,
  isStudent: true,
  skills: ["JS", "HTML"],
  address: null
};

// const invalidJSON = {
//   value: undefined,        // 
//   greet: () => {},         // 
//   big: BigInt(123456789)   // 
// };



//! 9. What is the difference between JSON.stringify() and .toString()? Explain with example.
/*
- .toString() converts a value to string based on its type
- JSON.stringify() converts object to JSON-formatted string
*/

const arr = [1, 2, 3];
console.log(arr.toString());        // "1,2,3"
console.log(JSON.stringify(arr));   // "[1,2,3]"

const obj = { a: 1 };
console.log(obj.toString());        // "[object Object]"
console.log(JSON.stringify(obj));   // '{"a":1}'



//! 10. Send a JSON object as POST data using fetch() in JavaScript.
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
.then(data => console.log("Response:", data))
.catch(error => console.log("Error:", error));
