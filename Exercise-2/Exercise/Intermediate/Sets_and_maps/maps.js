
// 1. What is a Map in JavaScript?
// A Map is a collection of key-value pairs where keys can be of any type.

const myMap = new Map();
myMap.set("name", "Farhan");
myMap.set("age", 21);
console.log(myMap.get("name")); // "Farhan"

// Difference between Map and Object:

// | Feature               | Map                              | Object                              |
// |-----------------------|-----------------------------------|--------------------------------------|
// | Key Types             | Any type (string, number, object) | Only strings or symbols              |
// | Order of Keys         | Ordered                           | Unordered                            |
// | Size Property         | map.size                          | Object.keys(obj).length              |
// | Iterability           | Directly iterable (for...of)      | Not directly iterable                |
// | Performance           | Better for frequent ops           | Slower for key-heavy ops             |
// | Prototype Pollution   | Safe                              | Can be unsafe (inherited props)      |



// Example: Object as a key in Map
const objKey = { id: 1 };
myMap.set(objKey, "Value for object key");
console.log("Value for object key",myMap.get(objKey)); 



// Using object as key in normal object
const myObj = {};
myObj[objKey] = "Oops";
console.log(myObj[objKey]); 

// When to use what:
// - Use Map: if keys are not just strings, and you need performance or order
// - Use Object: for simpler structures or JSON-like data





//! 2. How do you create a new Map in JavaScript?

// Create a new empty Map
const myMap = new Map();

// Add key-value pairs using set()
myMap.set('name', 'Farhan');
myMap.set('age', 22);
myMap.set('isStudent', true);

// Log the Map to the console
console.log(myMap);

// Access a value using get()
console.log(myMap.get('name'));







//! 3. How do you add key-value pairs to a Map?

// Create a new Map
const myMap = new Map();

// Add key-value pairs using .set(key, value)
myMap.set('username', 'farhan123');
myMap.set('email', 'farhan@example.com');
myMap.set('loggedIn', true);

// Log the whole Map
console.log(myMap);

// Access individual values
console.log(myMap.get('username')); 




//! 4. How do you get the value of a specific key in a Map?

// Create a new Map
const userMap = new Map();

// Add some key-value pairs
userMap.set('name', 'Farhan');
userMap.set('age', 22);
userMap.set('city', 'Mumbai');

// Get the value of a specific key using .get(key)
const userName = userMap.get('name');
console.log(userName); 

const userCity = userMap.get('city');
console.log(userCity); 




//! 5. How do you check if a Map has a specific key?

// Create a new Map
const settings = new Map();

// Add some key-value pairs
settings.set('theme', 'dark');
settings.set('notifications', true);

// Use .has(key) to check if the key exists
console.log(settings.has('theme'));         
console.log(settings.has('language'));      

// You can use it in an if statement too
if (settings.has('notifications')) {
  console.log('Notifications are enabled.');
}




//! 6. How do you remove a key-value pair from a Map?

// Create a Map
const userData = new Map();
userData.set('username', 'farhan123');
userData.set('email', 'farhan@example.com');
userData.set('loggedIn', true);

// Remove the 'email' key-value pair using .delete(key)
userData.delete('email');

// Log the Map after deletion
console.log(userData);



//! 7. How do you get the number of key-value pairs in a Map?


// Create a Map
const cart = new Map();
cart.set('item1', 'Laptop');
cart.set('item2', 'Mouse');
cart.set('item3', 'Keyboard');

// Use .size to get the number of entries
console.log(cart.size); 


//! 8. How can you loop through all entries (key-value pairs) in a Map?


const student = new Map();
student.set('name', 'Farhan');
student.set('age', 22);
student.set('course', 'BCA');

// Using for...of loop with [key, value]
for (const [key, value] of student) {
  console.log(`${key} → ${value}`);
}



//! 9. How do you convert a Map to an array?
const fruitsMap = new Map();
fruitsMap.set('apple', 3);
fruitsMap.set('banana', 5);
fruitsMap.set('mango', 2);

// Convert the whole Map to an array
const fruitsArray = Array.from(fruitsMap);
console.log(fruitsArray);



//! 10. How do you clear all key-value pairs from a Map?
const myMap = new Map();
myMap.set('name', 'Farhan');
myMap.set('age', 22);
myMap.set('city', 'Mumbai');

// Clear the Map
myMap.clear();

// Check if Map is now empty
console.log(myMap.size); 
console.log(myMap); 








