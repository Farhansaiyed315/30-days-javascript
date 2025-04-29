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
  ph:"80015555"
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

calculate(5, 3, function(sum) {
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

let doubleNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubleNumbers);


//? FILTER -------------------------------------------

//! Create a new array with only those elements that pass a test (condition).

let numbers1 = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers1.filter(function(num) {
  return num % 2 === 0; // condition: only even numbers
});

console.log(evenNumbers);



//? REDUCE ......................................
// Combine all elements of an array into a single value (like sum, product, etc.).

let numbers3 = [1, 2, 3, 4, 5];

let total = numbers3.reduce(function(acc, num) {
  return acc + num;
}, 0);

console.log(total); // 15


//? EVERY.....................................
// Check if all elements of the array satisfy a condition.

let numbers4 = [2, 4, 6, 8];

let areAllEven = numbers4.every(function(num) {
  return num % 2 === 0; // Check if even
});

console.log(areAllEven);

///        FIND.....................................................

// Find the first element in an array that matches a condition.

let numbers5 = [5, 12, 8, 130, 44];

let found = numbers5.find(function(num) {
  return num > 10; // condition
});

console.log(found);


/// FINDINDEX ....................

//!  Find the index (position) of the first element that matches a condition.
let numbers6 = [5, 12, 8, 130, 44];

let index = numbers6.findIndex(function(num) {
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


































































































































































































































































