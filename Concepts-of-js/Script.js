console.log('hello world', "today is a good day", "this is a test");


console.log(typeof 'farhan');
console.log(typeof 5);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof true);


//! Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

let MyAge = 22;
let YourAge = 25;

console.log('My age is', MyAge);
console.log('Your age is', MyAge);

let NumONe = 3;
let NumTwo = 3;
console.log(NumONe == NumTwo);

let js = 'Javascript';
let Py = 'Python';
console.log(js == Py);

let LightOn = true;
let LightOff = false;

//! DAY-2 DATATYPES...........---------------.....................-------------------.....................-----
// Declaring number datatypes. 

let age = 23;
const gravity = 9.81;
let mass = 72;
const pi = 3.14;
console.log(age, gravity, mass, pi);

// Now math object ;

const Pi = Math.PI;
console.log(Math.round(Pi));
console.log(Math.round(9.8));
console.log(Math.floor(9.8));
console.log(Math.ceil(9.8));
console.log(Math.min(-5, 5, 6, 9, 1, 3, 0)); // returns the minimum value 

console.log(Math.max(-5, 5, 6, 9, 1, 3, 0)); // returns the miximum value 

const randomNum = Math.random();
console.log(randomNum);
console.log(Math.round(Pi));
console.log(Math.sqrt(100));
console.log(Math.pow(3, 2)); // means 3 ka square. 
console.log(Math.log(10));
Math.sin(0);
Math.sin(60);


//? Now we are going to genrate random numbers. 

let randomNUM = Math.random()
let NumberBtwnZeroToTen = randomNUM * 11;
console.log(NumberBtwnZeroToTen);

let randomNumRoundToFloor = Math.floor(NumberBtwnZeroToTen);
console.log(randomNumRoundToFloor)


let a = 33;
let b = 333;

console.log(`${a} is smaller than ${b} : ${a < b}`);  // also called template literals. 

//? String Methods. 

let lan = 'javascript'
console.log(lan.length);
let String = 'java';
let FirstLan = String[0]
console.log(FirstLan);


let secondLan = String[1]
console.log(secondLan);


let ThirdLan = String[2]
console.log(ThirdLan);



let FourthLan = String[3]
console.log(FourthLan);

// Look down the output hahah (: There are too many methods like that you will automatically learn them by time. 




// Now we are gonna Numbers from a sentennce or paragraph. 

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'

let regEx = /\d+/g;  // 'g' = global match
console.log(txt.match(regEx));



//! DAY-3 .............---------------...............-----------------.................-----------------.........
//! Booleans, OPERATORS & DATES.

let NumOne = 4;
let NumbTwo = 3;

let sum = NumOne + NumbTwo;
let diff = NumOne - NumbTwo;
let Division = NumOne / NumbTwo;
let Multiply = NumOne * NumbTwo;
let Remainder = NumOne % NumbTwo;
let powerof = NumOne ** NumbTwo;
console.log(sum, diff, Division, Multiply, Remainder, powerof);

//? lets calculate area of a circle

let radius = 100;
let AreaOFCircle = pi * radius * radius;
console.log(AreaOFCircle);

const Gravity = 9.8;
const Mass = 72
const Weight = Gravity * mass;
console.log(Weight);

const BoilingpointOfWater = 100;
const BodyTemprature = 37;

console.log(`The boilng point of water is ${BodyTemprature}'C\n
     The human body temprature is ${BodyTemprature}'C \n 
     and the gravitational force on earth is ${Gravity}NM/s`);

//! Comparison Operators

let x;
let y;
x == y;   // Equal or Equivalent
x === y; // Equal or Equivalent in terms of both Equilaty and datatypes. 

//? As a rule of thumb using === is safer than using == . 


//! Logical opreators. 

//? && (ampercent) True if both statements are true. 
//? || (pipe) True if at least one  statements is true. 
//? ! (Negation) Returns True if the statement is false and Returns False if the statement is True. 


//! Increment opreator 

//? preincrement (++count)  pahle increment phir print
//? preincrement (count++)  pahle  print phir increment

//! samen goes with Decrement opreator as well

//! Ternary Operators

let age1 = 18;
let message = age1 >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);        //? Sidha bole toh ?(if) ka kaam kar raha hai aur :(else) ka kaam kar raha hai 


//! Operator precedence Dekhna hai 


//! Date Methods. 
const Now = new Date()
console.log(Now.getFullYear());
console.log(Now.getMonth());
console.log(Now.getDate());
console.log(Now.getDay());
console.log(Now.getHours());
console.log(Now.getMinutes());
console.log(Now.getSeconds());
console.log(Now.getMilliseconds());
console.log(Now.getTime());  //? 1970 1 january se hai yeh time and yeh time miliseconds mein hai 




const year = Now.getFullYear();
const month = Now.getMonth() + 1;
const date = Now.getDate();
const hours = Now.getHours();
const minutes = Now.getMinutes();
const seconds = Now.getSeconds();
const milliseconds = Now.getMilliseconds();

console.log(`${date}/${month}/${year} : ${hours}:${minutes}:${seconds}:${milliseconds}`);



//! DAY-4 CONDITIONALS..........------....-----........-----------...........-----------...........----------



//? if statement. 

let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`)
}

//? if-else statement 

let num1 = 3;

if (num1 > 0) {
  console.log(`${num1} is a positive number`)
}
else {
  console.log(`${num1} is a negative number`)
}

//? Swich statement 

const dayNumber = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

let dayName;

switch (dayNumber) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Today is:", dayName);


//!  DAY-5 ARRAYS............------------.............--------------...........------------...........-------....



const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numbers2);

const fruits = ["Banana", "Apple", "orange", "Papaya"]
console.log(fruits); //? Array can have items of different datatypes. 


//! creating array using .split().
let = "javascript"
const myjs = js.split('')
console.log(myjs);

let CompaniesString = 'Facebook, Google, microsoft, tata, Zomato , Alphabet , Naturals'
const mycompany = CompaniesString.split('')
console.log(mycompany);


//? Accessing Array. 

const fruits1 = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits1[0] // we are accessing the first item using its index
console.log(firstFruit) // banana secondFruit = fruits[1]

let SecondFruits = fruits1[1]
console.log(SecondFruits);

let ThirdFruits = fruits1[2]
console.log(ThirdFruits);


//! Modifing arary elements.  Array mutable hai mere dost. 


let Numbers = [1, 2, 3, 4, 5, 6, 7, 8,]
Numbers[0] = 10;
Numbers[1] = 20;
Numbers[2] = 30;
Numbers[3] = 40;
console.log(Numbers);


//! Methods to manuplate array. (join karna)

let firstlist = [1, 2, 3, 4,]
let secondlist = [5, 6, 7, 8,]
const Thirdlist = firstlist.concat(secondlist)
console.log(Thirdlist);


console.log(firstlist.length);   // 4 is the size of the array. 
console.log(firstlist.indexOf(2));

console.log(firstlist.join());

console.log(firstlist.toString());

console.log(firstlist.slice(1, 3));  // doest contain the last element. 

let Numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let result = Numbers2.splice(7, 5);
console.log(result);        // Removed items
console.log(Numbers2);       // Updated array


console.log(firstlist.push(5));
console.log(firstlist);

console.log(firstlist.pop());  // End se remove. 
console.log(firstlist);

console.log(firstlist.shift());  // start  se remove. 
console.log(firstlist);

console.log(firstlist.unshift(0));  // start  mein add karna. 
console.log(firstlist);

console.log(firstlist.reverse());
console.log(firstlist);


//! Array of arrays.

//! DAY-6 LOOPS.............-------------------.................-----------------............---------------.....

console.log("Testing commit activity");

//? For Loop

for (let i = 0; i <= 5; i++) {

  console.log(i);

}

let countries = ['Finland', 'Sweden', 'India'];

const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}

console.log(newArr);


//? While Loop
console.log("While Loop");

let i = 0
while (i < 5) {
  console.log(i);
  i++

}

console.log("Do while loop");

//? Do While Loop

let j = 0
do {
  console.log(j);
  j++
} while (j <= 5)



//? For off Loop
console.log("For off loop");

let countries1 = ['Finland', 'Sweden', 'India'];

for (let country of countries1) {
  console.log(country);
}


//? Break 
console.log("Break dikha raha huu");


for (let i = 0; i < 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);

}



console.log(" contunue dikha raha huu"); //! continue skip ki tarah kaam karta hai. 

for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}
console.log("Dekho 3 skip ho gaya");

//! DAY-7 FUNCTIONS..............---------------................---------------..............-------------.......

function square() {
  let num3 = 4;
  let sq = num3 * num3;
  console.log(sq);

}
square(); console.log("call karna jaroori hai har baar bhul jata hai yaad rakho sweety.");

//? Functin with return. 
console.log("Function with return type.");

function FullName() {
  let FirstName = 'Farhan'
  let LastName = "Saiyed"
  let FullName = FirstName + LastName;
  console.log(FullName);
  return FullName
}

FullName()


//? Function with parameter. 
console.log("Function with parameter.");

function square(number) {
  return number * number
}
console.log(square(10));

//? Arrow functions. 
console.log("Arrow functions");

function add1(a, b) {
  return a + b;
}
console.log(add1(2, 3));



const add2 = (a, b) => {
  return a + b;
};

console.log(add2(2, 3));


const add3 = (a, b) => a + b;
console.log(add3(2, 3));


//? Anonymous function
console.log("Anonymous funtions.");

const greet = function (name) {
  return "Hello " + name;
};

console.log(greet("Farhan")); // Hello Farhan


// Immediately Invoked Function Expression (IIFE)
console.log("Immediately Invoked Function Expression (IIFE)");

(function () {
  console.log("I run automatically!");
})();         // Last ka () matlab IIFI hai.


//? Function with default parameters
console.log("Function with default parameters");

function greet1(name = "Guest") {
  console.log("Hello " + name);
}
greet1()
console.log("\n\n\n\,"),



  //!  DAY-8 Scopes and OBJECTS............----------------................----------------..............----------
  console.log("DAY-8 Scopes and OBJECTS.........\n");



const person = {}; // An emplty object. 
// FirstName: "Farhan",  //? And these are properties of Object
//   LastName: "Saiyed", //? properties of Object
//   Class: "10",        //? properties of Object
//   City: "Kolkata"     //? properties of Object


const person1 = {
  FirstName: "Farhan",
  LastName: ['Saiyed'],
  Class: "10",
  City: "Kolkata",
  ph: "80015555"
}

//? Getting values from an object. 

// We can access values from two methods
// 1. Using . Method.
// 2. Using Square bracket Method.

console.log(person1.City);
console.log(person1.FirstName);
console.log(person1.LastName);

console.log(person1['ph']);   //We use Square brackets when there is a special character or space in between properties. 


//! An object is a mutable datastructure and we can modify its content. 

person1.LastName.push("js")
console.log(person1.LastName);   // Note .push only works on arrays 


//? Object Methods

const student = {
  name: "Farhan",
  age: 22,
  course: "BCA"
};

const keys = Object.keys(student);
console.log(keys);  // You can quickly get all the keys of an object without writing a loop manually

const values = Object.values(student);
console.log(values);       //  Object.values:To get values of an object as an array

const entries = Object.entries(student);
console.log(entries);                            //  It returns an array of arrays [key, value].
// The order is same as keys were inserted.

console.log(student.hasOwnProperty("name"));    // It only checks own properties, not prototype properties.

console.log(student.hasOwnProperty("course"));



//!  DAY- 9 HIGHER ORDER FUNCTIONS ............----------------................----------------..............----


console.log("DAY-9 Scopes and OBJECTS..............\n");

//  A named function that is passed to another function as an argument and is called later.
function greet1(name) {
  console.log("Hello, " + name);
}

function processUserInput(callback) {
  let name = "Farhan";  // Assume we got user's name
  callback(name);       // Call the callback function with name
}

processUserInput(greet1);


//? Another Example (Anonymous Callback)
// A function without a name that is directly passed as a callback to another function.


function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculate(5, 3, function (sum) {
  console.log("Sum is: " + sum);
});


//? Returning function
//  A returning function is a function that returns another function.


//?   |     Term         | Meaning |
//    |------------------|--------------|
//    |   Outer Function   | The main (outside) function that is created first. |
//    |   Inner Function   | A  function inside another function  is called an inner function. |

function outerFunction() {
  function innerFunction() {
    console.log("Hello from inner function!");
  }
  return innerFunction;
}

const myFunc = outerFunction(); // outerFunction returns innerFunction
myFunc(); // Now we call the returned function


//!  THE FOREACH METHOD USES CALL BACK.
// It goes through each element in the array one by one.
// For every element, it calls a function (the callback function) and performs an action.
// No need to use for, while, or any other loop manually.
// forEach automates the process.
// You can use forEach only on arrays, not on normal objects.


function printFruit(fruit2) {
  console.log(fruit2);
}

let fruits2 = ["apple", "banana", "cherry"];
fruits2.forEach(printFruit);


//?  SETTING INTERVAL USING A SETINTERVAL FUNCTION
//? Run a piece of code again and again after a fixed time gap (interval).



// setInterval(function() {
//   console.log("Hello Farhan!");
// }, 2000); // 2000 milliseconds = 2 seconds


//? Stop setInterval

// let intervalId = setInterval(function() {
//   console.log("Running...");
// }, 1000);

// // After 5 seconds, stop the interval
// setTimeout(function() {
//   clearInterval(intervalId);
//   console.log("Stopped!");
// }, 5000);


//!  SETTIMEOUT------------------------


// setTimeout(function() {
//   console.log("Hello Farhan after 3 seconds!");
// }, 3000); // 3000 milliseconds = 3 seconds


//? Cancel setTimeout

//! Run a piece of code once, after waiting for a specific time (delay).

// let timeoutId = setTimeout(function() {
//   console.log("You will not see this message");
// }, 5000);

// // Cancel the timeout
// clearTimeout(timeoutId);
// console.log("Timeout cancelled!");

//? MAP().........................................................

// Always creates a new array
// Old array remains same
let numbers = [1, 2, 3, 4, 5];

let doubleNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubleNumbers);


//? FILTER -------------------------------------------

//! Create a new array with only those elements that pass a test (condition).

let numbers1 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers1.filter(function (num) {
  return num % 2 === 0; // condition: only even numbers
});

console.log(evenNumbers);



//? REDUCE ......................................
// Combine all elements of an array into a single value (like sum, product, etc.).

let numbers3 = [1, 2, 3, 4, 5];

let total = numbers3.reduce(function (acc, num) {
  return acc + num;
}, 0);

console.log(total); // 15


//? EVERY.....................................
// Check if all elements of the array satisfy a condition.

let numbers4 = [2, 4, 6, 8];

let areAllEven = numbers4.every(function (num) {
  return num % 2 === 0; // Check if even
});

console.log(areAllEven);

///        FIND.....................................................

// Find the first element in an array that matches a condition.

let numbers5 = [5, 12, 8, 130, 44];

let found = numbers5.find(function (num) {
  return num > 10; // condition
});

console.log(found);


/// FINDINDEX ....................

//!  Find the index (position) of the first element that matches a condition.
let numbers6 = [5, 12, 8, 130, 44];

let index = numbers6.findIndex(function (num) {
  return num > 10; // condition
});

console.log(index);  //! Note index return kiya hai value nahi value 12 hai 12 is greater than 10 and 12 index 1 mein hai


//? Sort. 

//! By default, .sort() converts elements to strings and sorts them alphabetically.

const fruits3 = ['banana', 'apple', 'orange'];
fruits.sort();
console.log(fruits3); // ['apple', 'banana', 'orange']



const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
names.sort();
console.log(names); // ['Asabeneh', 'Brook', 'Elias', 'Mathias']



const numbers7 = [100, 25, 9, 1];
numbers7.sort((a, b) => a - b);
console.log(numbers7); // [1, 9, 25, 100]



//? Sorting Object Arrays

const users = [
  { name: 'Farhan', age: 21 },
  { name: 'Ayesha', age: 19 },
  { name: 'Zaid', age: 25 }
];

// Ascending: Youngest to Oldest
users.sort((a, b) => a.age - b.age);

console.log(users);
// [
//   { name: 'Ayesha', age: 19 },
//   { name: 'Farhan', age: 21 },
//   { name: 'Zaid', age: 25 }
// ]



//! DAY-10 SETS AND MAPS.............----------------...............---------------..................------------
//Set automatically removes duplicates.
// You can quickly check if a value exists.
// ➕➖ 3. Easy add and delete
// Delete with .delete(value)

const companies = new Set();
console.log(companies);



//! To create a Set from an array in JavaScript, you can pass the array directly into the Set constructor.
const numbers10 = [1, 2, 3, 2, 4, 1];
const uniqueNumbers = new Set(numbers10);

console.log(uniqueNumbers);


//? Adding an element to a set.....................

const fruits10 = new Set();

fruits10.add("apple");
fruits10.add("banana");
fruits10.add("apple"); // Duplicate, will be ignored

console.log(fruits10);



//? Deleting an element a set....................

const fruits11 = new Set(["apple", "banana", "mango"]);

fruits11.delete("banana"); // Removes 'banana'

console.log(fruits11);

//? Checking an element in the set.........................

const fruits12 = new Set(["apple", "banana", "mango"]);

console.log(fruits12.has("banana")); // true
console.log(fruits12.has("orange")); // false

//! .has() is case-sensitive, meaning "apple" and "Apple" would be treated as different values.

console.log(fruits12.has("Apple")); // false (different case)


//? Clearing the set.....................................

const fruits13 = new Set(["apple", "banana", "mango"]);

fruits13.clear(); // Clears all elements in the Set

console.log(fruits13);

//? Union of sets......................................

//! To perform a union of two sets in JavaScript, you can combine them using the Set constructor and the spread operator (...).

const set1 = new Set([1, 2, 3]);
const set2 = new Set([3, 4, 5]);

// Union of set1 and set2
const unionSet = new Set([...set1, ...set2]);

console.log(unionSet); // Set(5) { 1, 2, 3, 4, 5 }

//? Intersection of sets..........................................


// To find the intersection of two sets in JavaScript (i.e., the common elements between the sets), you can use the forEach() method and check if an element from one set exists in the other.

const set10 = new Set([1, 2, 3, 4]);
const set20 = new Set([3, 4, 5, 6]);

// Intersection of set1 and set2
const intersectionSet = new Set(
  [...set10].filter(item => set20.has(item))
);

console.log(intersectionSet); // Set(2) { 3, 4 }



// Alternative using .forEach():...........................>>>>>>>>>>>>>>>>>>>>>>>

const set11 = new Set([1, 2, 3, 4]);
const set21 = new Set([3, 4, 5, 6]);

const intersectionSet13 = new Set();

set11.forEach(item => {
  if (set21.has(item)) {
    intersectionSet13.add(item);
  }
});

console.log(intersectionSet13); // Set(2) { 3, 4 }



const set13 = new Set([1, 2, 3, 4]);
const set23 = new Set([3, 4, 5, 6]);

//?  Difference of set1 and set2....................
const differenceSet = new Set(
  [...set13].filter(item => !set23.has(item))
);

console.log(differenceSet); // Set(2) { 1, 2 }


// Alternative using .forEach():.................................>>>>>>>>>>>>>>>>

const set15 = new Set([1, 2, 3, 4]);
const set25 = new Set([3, 4, 5, 6]);

const differenceSet2 = new Set();

set1.forEach(item => {
  if (!set25.has(item)) {
    differenceSet2.add(item);
  }
});

console.log(differenceSet); // Set(2) { 1, 2 }

//! Map................-----------------....................-----------------------......................-------

//? Creating an empty Map.............

let myMap = new Map();

//? Creating an Map from array..............

let data = [
  ['name', 'Farhan'],
  ['age', 22],
  ['city', 'Mumbai']
];

let myMap1 = new Map(data);

console.log(myMap1.get('name'));
console.log(myMap1.get('city'));



//? Adding values to the Map..........

let myMap2 = new Map();


myMap2.set('name', 'Farhan');
myMap2.set('age', 22);
myMap2.set('city', 'Mumbai');


myMap2.set('city', 'Pune');

console.log(myMap2);


//? Getting a value from Map.....................

let myMap4 = new Map();
myMap4.set('name', 'Farhan');
myMap4.set('age', 22);

console.log(myMap4.get('name')); // Output: Farhan
console.log(myMap4.get('age'));  // Output: 22
console.log(myMap4.get('city')); // Output: undefined (not in map)


//? Checking key in Map............................

let myMap5 = new Map();
myMap5.set('name', 'Farhan');
myMap5.set('age', 22);

console.log(myMap5.has('name')); // true
console.log(myMap5.has('city')); // false..........

//! DAY-11 DESTRUCTURING AND SPREADING...........-----------------.................-----------------............
console.log('DAY-11 DESTRUCTURING AND SPREADING...........-----------------...........');

// Destructuring is a feature in JavaScript that allows you to unpack values from arrays or properties from objects into separate variables in a simple and clean way.

// Destructuring means breaking a bigger thing into smaller parts and saving those parts in separate variables.

//? Normal Way (Without Destructuring):

const arr = [1, 2, 3];

const a1 = arr[0];
const b1 = arr[1];
console.log(a1);
console.log(b1);

//? With Destructuring:...............

const arr2 = [1, 2, 3];

const [a2, b2] = arr;  // auto-unpacks first 2 values
console.log(a2); // 1
console.log(b2); // 2

//! Not much to learn its a not a concept but a way to write cleaner code.

//?-------------------------------------------------------------------------------------------------------------

//! DAY-12 REGULAR EXPRESSION Last mein karege aaram se koi zyada need bhi nahi hai as its not a building block .......................----------------------...............----------------------..............----------

//! DAY-13 CONSOLE OBJECT METHODS.................------------------...................----------------------...

//? console.warn().........................

console.log('DAY-13 CONSOLE OBJECT METHODS.................------------------');


//? We use console.warn() to give warning on browser. For instance to inform or warn deprecation of version of a package or bad practices. 

//? console.warn() --- 	Yellow	---  Warning – not serious, just a caution

//? When to Use console.warn():
//? When something is not wrong, but could lead to problems later.

//? Example: When a deprecated function is used, or a user input is risky.

//? console.error()......................

console.log(' The console.error() method shows an error messages.');

//?  The console.error() method shows an error messages.

//! console.error() --- 	Red	---  Error –  serious isssues

//!  console.table().........................
//? The console.table() method display data as a table on the console. Displays tabular data as a table. The console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns


//? const user = { name: 'Asabeneh', title: 'Programmer', country: 'Finland', city: 'Helsinki', age: 250
//? }
//? console.table(user)


//!  console.time()

console.log('console.time(.................................)')
//? Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page. When you call console.timeEnd() with the same name, the browser will output the time, in milliseconds, that elapsed since the timer was started.
console.time("fetchTime");

// Simulating a function that takes time
for (let i = 0; i < 1000000; i++) {
  // some task
}

console.timeEnd("fetchTime");


//! console.info()
console.log('console.info()............');


//? console.info() It displays information message on browser console.
//? console.info('30 Days Of JavaScript challenge is trending on Github')
//?  console.info('30 Days Of fullStack challenge might be released')
//?  console.info('30 Days Of HTML and CSS challenge might be released')
//? Not used in final production code — only for testing and debugging.


//! console.assert()

console.log('console.assert()............');

//? The console.assert() methods writes an error message to the console if the assertion is false. If the assertion is true, nothing happens. The first parameter is an assertion expression. If this expression is false, an Assertion failed error message will be displayed

console.assert(3 > 4, '3 is not greater than 4')

//! console.group()
console.log('console.group(...................)');


//? After calling console.group(), all subsequent console.log(), console.info(), console.warn(), and other messages will be nested inside the group. To close the group and return to the previous logging level, use console.groupEnd().

console.group("User Information");
console.log("Name: John");
console.log("Age: 30");
console.log("Location: USA");
console.groupEnd();

console.log('console.count()..............');

//? console.count() Method in JavaScript
//? The console.count() method is used to count the number of times a specific label has been logged to the //? console. It helps in tracking how many times a particular event or function is called.


console.count("click");
console.count("click");
console.count("click");

console.log('console.clear()......................');
//! console.clear()

//? The console.clear() cleans the browser console.


//! DAY-14 ERROR HANDLING-----------.................----------------------....................---------------..
console.log('DAY-14 ERROR HANDLING-----------.................');


// Type                                 	Meaning

// Syntax Error                 	Mistake in code structure (like missing })
// Reference Error	              Using a variable that doesn’t exist
// Type Error	                  Performing invalid operations on a value

try {
  let data = "Success";
  console.log(data);
} catch (e) {
  console.log("Error:", e);
} finally {
  console.log("This always runs");
}


function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (e) {
  console.log("Custom Error:", e.message);
}


//! DAY-15 CLASSES............------------..............----------------................------------------....................---

console.log('Class in js basic ....................');

// Step 1: Create the class
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Step 2: Define a method
  startEngine() {
    console.log(`${this.brand} ${this.model} engine started.`);
  }

  showDetails() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

// Step 3: Create objects from the class
const car1 = new Car("Toyota", "Fortuner", 2023);
const car2 = new Car("Hyundai", "i20", 2022);

// Step 4: Use the methods
car1.startEngine();   // Output: Toyota Fortuner engine started.
car1.showDetails();   // Output: Brand: Toyota, Model: Fortuner, Year: 2023

car2.startEngine();   // Output: Hyundai i20 engine started.
car2.showDetails();   // Output: Brand: Hyundai, Model: i20, Year: 2022n


//? Class Instantiation..............

console.log('Class instantiation....................');
// Class Instantiation means creating an object (instance) from a class using the new keyword.

class Carl {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  displayInfo() {
    console.log(`Carl: ${this.brand} ${this.model}`);
  }
}

const car3 = new Carl("Toyota", "Innova");
const car4 = new Carl("Honda", "City");

car3.displayInfo(); 
car4.displayInfo();  

//? Class Constructor
console.log('Class Constructor..............');

// A constructor is a special method in a class that is automatically called when a new object is created using the new keyword.

// It is used to initialize properties of the object.

class Student {
  constructor(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.name}, I am ${this.age} years old and I study ${this.course}.`);
  }
}

const student1 = new Student("Farhan", 22, "BCA");
student1.introduce();  

//? Default values with constructor
console.log('Default values with constructor................');
// In JavaScript, you can give default values to constructor parameters in case no value is passed during object creation and it is called Defalult value construcotr. 

class User {
  constructor(name = "Guest", age = 18) {
    this.name = name;
    this.age = age;
  }

  showInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// Without passing arguments
const user1 = new User();
user1.showInfo();  

// With arguments
const user2 = new User("Farhan", 22);
user2.showInfo();  

//? Class methods
console.log('Class methods...............');
// Class methods are functions defined inside a class that can be used by objects created from that class.
// They usually work on the object’s data using this.

class Student1 {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  showCourse() {
    console.log(`I am studying ${this.course}`);
  }
}

const student4 = new Student1("Farhan", "BCA"); 

student4.greet();       
student4.showCourse(); 

//? Properties with initial value
console.log('Properties with initial value..............');

// baaad mein dekhna hai


//? getter
console.log('getter................');

// A getter is a special method that lets you access a property like a variable, but behind the scenes, it runs a function.

// It is useful when:

// You want to format a value

// You want to calculate something dynamically

// You want to protect direct access to raw data

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person2 = new Person("Farhan", "Saiyed");

console.log(person2.fullName);  

//? setter
console.log('setter...................');

// A setter is a special method in a class that lets you set or update the value of a property like a normal assignment, but internally it runs a function.

class User8 {
  constructor(name) {
    this._name = name;
  }

  // Getter
  get name() {
    return this._name;
  }

  // Setter
  set name(newName) {
    this._name = newName;
  }
}

const user3 = new User("Farhan");

console.log(user3.name);  

user3.name = "Ahmed";    
console.log(user3.name); 


//? Static method
console.log('Static method..................');

// A static method is a method that belongs to the class itself, not to the objects (instances) created from the class.

// You call a static method using the class name, not the object.

class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); 

// You CANNOT call it on an object:
// const obj = new MathUtils();
// obj.add(5, 3);  Error

//? Inheritance
console.log('Inheritance....................');

// Inheritance means one class  can inherit (Child) properties and methods from another class (parent).
// It helps in code reusability and organization.

// 🔹 Parent class
class Student10 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

class CollegeStudent extends Student10 {
  constructor(name, age, course) {
    super(name, age); 
    this.course = course;
  }

  showCourse() {
    console.log(`I'm studying ${this.course}`);
  }
}


const student9 = new CollegeStudent("Farhan", 20, "BCA");

student9.greet();      
student9.showCourse();  


// Overriding same as c and c++. 

//! DAY-16 JSON..............-----------------------.........................----------------------------.......
console.log('DAY-16 JSON....................');

// Lets lern bout json however we have to recall destructor from the previous day to start json The full form of json is javascript object notation. 

//?Dealing with objects without using Destructor. 

const Course = {

  CourseName : 'js',
  CoursePrice : '800',
  CourseTeacher : 'Farhan'
}

console.log(Course.CourseName);           
console.log(Course. CoursePrice);
console.log(Course.CourseTeacher);

//?Dealing with objects using Destructor.

// const  {kya value extract karni hai } = konsay object se karni hai 
const {CourseName} = Course;
console.log(CourseName);

const {CoursePrice} = Course;
console.log(CoursePrice);

//? Now lets learn bout json. 
console.log('JSON.......................................');

//? Converting JSON to JavaScript Object
console.log('Converting JSON to JavaScript Object........................');

//? When we want to change the JSON to an object we parse the JSON using JSON.parse().
//? When we want to change the object to JSON we use JSON.stringify().

// Suppose we have this JSON string
let jsonData = '{"name": "Farhan", "age": 21, "isStudent": true}';

// Convert JSON string to JS object
let jsObject = JSON.parse(jsonData);

console.log(jsObject);

//? object to JSON we use JSON.stringify().

let user = {
  name: "Farhan",
  age: 21,
  isStudent: true
};

let jsonData2 = JSON.stringify(user);

console.log(jsonData2);


//! Day 17 Web Storage objects:.......--------------.............----------------............
console.log('Web Storage objects:.....................');
//? localStorage – Permanent Storage
console.log('localStorage – Permanent Storage..............................');
const { log } = require('console');
// Import the localStorage simulator
const { LocalStorage } = require('node-localstorage');

// Create a localStorage instance with a directory to save data
const localStorage = new LocalStorage('./scratch');

// Store data
localStorage.setItem("username", "Farhan");

// Get data
const name = localStorage.getItem("username");
console.log("Username from localStorage:", name);

// Optional: Remove or clear
// localStorage.removeItem("username");
// localStorage.clear();

// //? Session storage............
 console.log('Session storage............Browser only');

// // Store data
// sessionStorage.setItem("score", "100");

// // Get data
// let score = sessionStorage.getItem("score");
// console.log(score); // Output: 100

// // Remove one item
// sessionStorage.removeItem("score");

// // Clear all
// sessionStorage.clear();

//! Feature	                         Browser	                          Node.js

// localStorage	                     ✅ Yes	              ❌ Needs node-localstorage
//? sessionStorage                   ✅ Yes	              ❌ Use a JS object for simulation

//! DAY-18 PROMISE..............
console.log('Promises...................');

//  Promise States:
// Pending – the initial state

// Fulfilled – the operation completed successfully

// Rejected – the operation failed

let promise = new Promise(function (resolve, reject) {
  // do something...
  if (true) { // Replace 'true' with your actual success condition
    resolve("Success");
  } else {
    reject("Error");
  }
});

//? Promise Constructor...........

// | Feature    | `Promise`                                | `Promise constructor`                    |
// | ---------- | ---------------------------------------- | ---------------------------------------- |
// | What it is | A **built-in object/type** in JS         | A **function** to create a new Promise   |
// | Used for   | Representing async results               | Creating a custom promise                |
// | Syntax     | `let p = someFunctionReturningPromise()` | `let p = new Promise((res, rej) => {})`  |
// | Used by    | Both browser & developers                | Developers (you) use it to make promises |



// let myPromise = new Promise(function (resolve, reject) {
//   resolve("Done");
// });

//? The Fetch API is a modern way to make HTTP requests (like GET, POST, etc.) from the browser — it’s how your website talks to a server or API to get or send data.

// In simple words:
// "Fetch API is like Swiggy delivery but for data!" You order (make a request), and it brings your food (response data)

fetch('https://api.example.com/data')
  .then(response => response.json()) // convert the response to JSON
  .then(data => {
    console.log(data); // do something with the data
  })
  .catch(error => {
    console.error('Error:', error); // if something goes wrong
  });


//? Making a post request. 

  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello',
    body: 'This is a post',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data));



  //  Using async/await (cleaner way)
  async function getJoke() {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await response.json();
    console.log(`${joke.setup} - ${joke.punchline}`);
  } catch (error) {
    console.log("Error fetching joke:", error);
  }
}

getJoke();


// Use async before a function to make it return a Promise.

// Use await inside an async function to wait for the result of a Promise.

//  Old Way: Using .then()

fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));

// New Way: Using async/await
  
  async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}

getData();

//  Another Example: Wait for Something to Happen

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doStuff() {
  console.log("⏳ Waiting 2 seconds...");
  await wait(2000);
  console.log("✅ Done waiting!");
}

doStuff();



//! Rest of he javascript which i know 

// DOM
// Event Listners

//! Rest of the v.advance javascript which i wil learn after practicing and doing basics smoothly 

// Lexical scope 
// Closures. 

console.log('The END.............--------------................------------------..................----------');