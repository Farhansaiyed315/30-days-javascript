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



const numbers2 = [1,2,3,4,5,6,7,8,9]
console.log(numbers2);

const fruits = ["Banana", "Apple","orange","Papaya"]
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


let Numbers = [1,2,3,4,5,6,7,8,]
Numbers[0] = 10;
Numbers[1] = 20;
Numbers[2] = 30;
Numbers[3] = 40;
console.log(Numbers);


//! Methods to manuplate array. (join karna)

let firstlist = [1,2,3,4,]
let secondlist = [5,6,7,8,]
const Thirdlist = firstlist.concat(secondlist)
console.log(Thirdlist);


console.log(firstlist.length);   // 4 is the size of the array. 
console.log(firstlist.indexOf(2)); 

console.log(firstlist.join());  

console.log(firstlist.toString());

console.log(firstlist.slice(1,3));  // doest contain the last element. 

let Numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];
let result = Numbers2.splice(7,5); 
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









































