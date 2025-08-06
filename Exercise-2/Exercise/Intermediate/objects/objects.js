//! 1. What is an object in JavaScript? Give an example.
 
//! 2. How do you create an object using object literal syntax?


const student = {
  name: "Farhan",
  age: 21,
  course: "BCA",
  isEnrolled: true
};

//! 3.  How do you access object properties using dot and bracket notation?


const student = {
  name: "Farhan",
  age: 21
};

console.log(student.name); 
console.log(student.age);  



//! 4. How can you add, update, and delete a property in an object?
const student = {
  name: "Farhan",
  age: 21
};

// Add new property
student.course = "BCA";             // Dot notation
student["isEnrolled"] = true;      // Bracket notation

console.log(student);

{
  name: "Farhan",
  age: 21,
  course: "BCA",
  isEnrolled: true
}



student.age = 22;           // Update using dot
student["course"] = "MCA";  // Update using bracket

console.log(student.age);   
console.log(student.course); 


delete student.isEnrolled;
console.log(student);

{
  name: "Farhan",
  age: 22,
  course: "MCA"
}



//! 5. How do you loop through all properties of an object?

const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

for (let key in student) {
  console.log(key + ":", student[key]);
}




//! 6. Write a function that takes an object and logs all keys and values.

function logObjectDetails(obj) {
  for (const key in obj) {
    console.log(`Key = ${key}, Value = ${obj[key]}`);
  }
}

const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

logObjectDetails(student);





//! 7. What is the difference between Object.keys(), Object.values(), and Object.entries()?

const user = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

// Object.keys() => array of keys
console.log("🔑 Keys:");
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "course"]

// Object.values() => array of values
console.log("\n📦 Values:");
const values = Object.values(user);
console.log(values); // ["Farhan", 21, "BCA"]

// Object.entries() => array of [key, value] pairs
console.log("\n🧾 Entries:");
const entries = Object.entries(user);
console.log(entries); // [["name", "Farhan"], ["age", 21], ["course", "BCA"]]

// Loop through entries (best for logging both key and value)
console.log("\n🔁 Looping through entries:");
entries.forEach(([key, value]) => {
  console.log(`${key} = ${value}`);
});



//! 8. Create an object 'student' with 'name', 'age', and 'marks'. Log 'name' using bracket notation.

const student = {
  name: "Farhan Saiyed",
  age: 21,
  marks: 88
};


console.log("Student Name:", student["name"]); 



//! 9. What happens if you access a property that doesn’t exist on an object?

// output will be undefined. 


//! 10. What is a nested object? Create an example.


const student = {
  name: "Farhan Saiyed",
  age: 21,
  address: {
    street: "MiG Road",
    city: "Mumbai",
    pincode: 400070
  }
};


console.log(student.address.city);    
console.log(student["address"]["pincode"]); 



//! 11. What is the difference between reference and value in the context of objects?     


//!  Primitive types => Passed by VALUE (copied)
//! Objects/Arrays/Functions => Passed by REFERENCE (shared)
//! Use spread operator or Object.assign() to clone and avoid reference issues



//! Primitive types are stored and copied by value

let a = 10;
let b = a; 

b = 20;

console.log(a); 
console.log(b); 

//! 🔹 Primitive types include: number, string, boolean, null, undefined, symbol, bigint

//! Reference (Non-Primitive Types like Objects, Arrays, Functions)

//! Non-primitive types are stored and copied by reference (memory address)

let obj1 = { name: "Farhan" };
let obj2 = obj1;

obj2.name = "Engineer";

console.log(obj1.name); 

//! 🔹 obj1 and obj2 are referencing the same object

//! Avoiding reference issue - clone the object (shallow copy)

//! Using spread operator
let original = { age: 21 };
let copy = { ...original };  

copy.age = 30;

console.log(original.age); 

console.log(copy.age);    



//! 12. Explain shallow copy vs deep copy with objects. How do you perform both?

//!  Shallow Copy:
//! Copies only the first level of an object.
//! Nested objects are still referenced (not copied).

let user1 = {
  name: "Farhan",
  address: {
    city: "Mumbai",
  },
};

//! Shallow copy using spread operator
let user2 = { ...user1 };

user2.name = "Engineer";       // changes only in user2 
user2.address.city = "Delhi";  // changes in both 

console.log(user1.name);        // Farhan  (not affected)
console.log(user1.address.city); // Delhi  (affected due to shallow copy)
 
//!  So, user2.address is still referencing the same object as user1.address

//!  Deep Copy:
//! Copies everything including nested objects (a full clone, not just top level)

//! Method 1: Using JSON.parse(JSON.stringify())
let user3 = JSON.parse(JSON.stringify(user1));

user3.address.city = "Hyderabad";

console.log(user1.address.city); // Delhi (not affected)
console.log(user3.address.city); // Hyderabad  (changed only in deep copy)

//  Limitations of JSON method:
// - Doesn't work with functions, Dates, undefined, Symbols

//! Method 2: Using structuredClone() (modern JS)
let user4 = structuredClone(user1);

user4.address.city = "Pune";

console.log(user1.address.city); // Delhi 
console.log(user4.address.city); // Pune 

//!  Summary:
// - Shallow Copy: one level copied, nested objects are shared (spread, Object.assign)
// - Deep Copy: full clone, nested objects are also copied (JSON.parse + stringify or structuredClone)

//  Use structuredClone() if supported, else use libraries like lodash's cloneDeep()



//! 13. What is the purpose of 'this' keyword inside an object method?

//! Purpose:
//! The `this` keyword refers to the **object that is calling the method**.
//! It's used to access properties and methods of the same object from inside its method.



let student = {
  name: "Farhan",
  age: 21,
  
  //! Method using `this`
  greet: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }
};

student.greet(); // Output: Hello, my name is Farhan and I am 21 years old.

//  Explanation:
// - `this.name` refers to student.name
// - `this.age` refers to student.age

//  Without `this`, you'd need to hardcode or restructure the code.
// `this` makes it dynamic and reusable inside the object.





//! 14. What is object destructuring?
//! Object destructuring is a short and clean way to extract properties from an object
//! and assign them to variables using a special syntax.

//!  Example: Extract 'name' and 'email' from the object

const user = { 
  name: 'Farhan', 
  email: 'farhan@example.com' 
};

//! Destructuring syntax:
const { name, email } = user;

console.log(name);  // Output: Farhan
console.log(email); // Output: farhan@example.com

//!  This avoids writing: 
//! const name = user.name;
//! const email = user.email;

//   Summary:
//   Destructuring makes code shorter and cleaner
//  You can directly pull values from objects into variables



//! 15. How do you merge two objects in JavaScript?

//! ✅ You can merge two objects using:
//! 1️⃣ Spread operator (...)  🔥
//! 2️⃣ Object.assign() method

const obj1 = { name: "Farhan" };
const obj2 = { age: 21 };

//! 🔹 Method 1: Using Spread Operator (Modern & Easy)
const merged1 = { ...obj1, ...obj2 };

console.log(merged1); // Output: { name: "Farhan", age: 21 }

//! 🔹 Method 2: Using Object.assign()
const merged2 = Object.assign({}, obj1, obj2);

console.log(merged2); // Output: { name: "Farhan", age: 21 }

//! 🔥 If both objects have the same key, the value from the second object will overwrite

const obj3 = { name: "Farhan" };
const obj4 = { name: "Engineer", city: "Mumbai" };

const merged3 = { ...obj3, ...obj4 };

console.log(merged3); // Output: { name: "Engineer", city: "Mumbai" }

// Summary:
// - Use spread operator for cleaner modern syntax
// - Object.assign() works in older JS versions
// - Later keys overwrite earlier ones if they conflict



//! 16. Write a function that counts how many keys are in a given object.

function countKeys(obj) {
  // Object.keys(obj) returns an array of all keys
  // .length gives the total number of keys
  return Object.keys(obj).length;
}

// Example usage:
const student = {
  name: "Farhan",
  age: 21,
  course: "BCA"
};

console.log(countKeys(student)); // Output: 3


//! 17. Explain the difference between for...in and Object.keys().forEach() when looping objects.

//! ✅ for...in loop:
//! - Loops over all **enumerable properties**, including inherited ones (from the prototype chain)
//! - ⚠️ You need to manually check if the key is the object's own property

const student = {
  name: "Farhan",
  age: 21
};

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key + ":", student[key]);
  }
}
//! Output:
//! name: Farhan
//! age: 21

//! ✅ Object.keys().forEach():
//! - Loops only over the **own enumerable properties** of the object
//! - No need for hasOwnProperty check

Object.keys(student).forEach((key) => {
  console.log(key + ":", student[key]);
});
//! Output:
//! name: Farhan
//! age: 21

//! ✅ Key Differences:
//! | Feature                    | for...in                      | Object.keys().forEach()       |
//! |----------------------------|-------------------------------|-------------------------------|
//! | Own properties only        | ❌ (needs manual check)        | ✅ (by default)                |
//! | Inherited properties       |




//! 18. What happens if two keys in an object are the same? What value is stored?

//  If two keys in an object are the same, the **last one overwrites the previous one**
// - JavaScript objects can't have duplicate keys
// - The latest key-value pair wins during object creation

const user = {
  name: "Farhan",
  name: "Engineer"
};

console.log(user.name); // Output: "Engineer"

//  Explanation:
// - The first key `name: "Farhan"` is overwritten by `name: "Engineer"`
// - Only the last value assigned to that key is stored in memory

//  Summary:
// - Duplicate keys are not allowed in objects
// - If written, the last one will overwrite previous ones
// - Always make sure keys are unique to avoid data loss






//!  Q. 19 What are computed property names? Create a dynamic object key using a variable.

// Answer:
// Computed property names allow us to use a variable or expression as the property key in an object.

// Instead of hardcoding the key, we wrap the variable inside square brackets [] in the object literal.

// This is useful when we want to create dynamic object keys.


let key = "name";
let obj = {
  [key]: "John"
};
console.log(obj); // { name: "John" }


let subject = "math";
let marks = 95;

let result = {
  [subject]: marks
};

console.log(result); 





//! ✅ Q. 22. Explain prototypal inheritance using an example.

// ✅ Answer:
// Prototypal inheritance is a feature in JavaScript where one object can inherit
// properties and methods from another object using its prototype.

// In JavaScript, every object has a hidden property called [[Prototype]] which points
// to another object. This forms a prototype chain and allows one object to use another’s behavior.

//  Syntax using Object.create():
const parent = {
  greet: function () {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent); // child inherits from parent

child.greet(); // Output: Hello from parent

// Even though 'greet' is not defined in 'child',
// it can still access it from 'parent' through the prototype chain.





//  Answer:
// Object freezing means making an object IMMUTABLE — which means we can't add, delete, or update its properties.
// JavaScript provides a method called Object.freeze(obj) to freeze an object.

// Once an object is frozen:
// - We can't change existing property values
// - We can't add new properties
// - We can't delete properties
// - It stays as it is — fully locked 🔒

// ✅ Syntax:
Object.freeze(objectName);

// ✅ Example:
const user = {
  name: "Farhan",
  age: 21
};

Object.freeze(user);

user.age = 25;        
user.city = "Mumbai";
delete user.name;    

console.log(user);



//! Q. 23. Create a constructor function and use it to make multiple objects.

//  Answer:
// A constructor function is a regular function used to create multiple objects with the same structure.
// It uses the 'this' keyword to assign values, and we call it using the 'new' keyword.

// Constructor Function:
function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.sayHello = function () {
    console.log(`Hi, I'm ${this.name}, and I'm studying ${this.course}.`);
  };
}

//  Creating multiple objects using the constructor:
const student1 = new Student("Farhan", 21, "BCA");
const student2 = new Student("Aisha", 20, "BSc IT");

student1.sayHello(); // Hi, I'm Farhan, and I'm studying BCA.
student2.sayHello(); // Hi, I'm Aisha, and I'm studying BSc IT.

console.log(student1); // { name: 'Farhan', age: 21, course: 'BCA', sayHello: [Function] }
console.log(student2); // { name: 'Aisha', age: 20, course: 'BSc IT', sayHello: [Function] }




//! 24. How do you override a method in a child object that inherits from a parent object?


//  Answer:
// To override a method in a child object, we define a method with the same name in the child.
// When the method is called on the child, JavaScript uses the child’s version instead of the parent’s.

//Example:
const parent = {
  greet: function () {
    console.log("Hello from parent 👨‍👦");
  }
};

// Create child object that inherits from parent
const child = Object.create(parent);

// Override the greet() method in child
child.greet = function () {
  console.log("Hello from child 👶");
};

// Call the method
child.greet();  // Output: Hello from child 
parent.greet(); // Output: Hello from parent 👨‍👦


//! 25. Explain the difference between Object.create() and class-based object creation. Give examples.

//  Answer:
// In JavaScript, we can create objects in two main ways:
// 1️ Using Object.create()
// 2️ Using class-based syntax (ES6 classes)

// 🔹 Object.create(): 
// - Creates a new object and sets its prototype to an existing object.
// - More manual and flexible (like old-school inheritance).

const parent = {
  greet: function () {
    console.log("Hello from parent");
  }
};

const child = Object.create(parent); // Inherit from parent
child.greet(); // Output: Hello from parent

// 🔹 class-based (ES6):
// - Modern, cleaner, and more structured way of creating objects and inheritance.

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const user = new Person("Farhan");
user.greet(); 







