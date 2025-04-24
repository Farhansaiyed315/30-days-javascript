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
console.log(Math.min(-5,5,6,9,1,3,0)); // returns the minimum value 

console.log(Math.max(-5,5,6,9,1,3,0)); // returns the miximum value 

const randomNum = Math.random();
console.log(randomNum);
console.log(Math.round(Pi));
console.log(Math.sqrt(100));
console.log(Math.pow(3,2)); // means 3 ka square. 
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
 let FirstLan  = String[0]
 console.log(FirstLan);


 let secondLan  = String[1]
 console.log(secondLan);


 let ThirdLan  = String[2]
 console.log(ThirdLan);



 let FourthLan  = String[3]
 console.log(FourthLan);
 
// Look down the output hahah (: There are too many methods like that you will automatically learn them by time. 




// Now we are gonna Numbers from a sentennce or paragraph. 

let txt =  'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'

let regEx = /\d+/g;  // 'g' = global match
console.log(txt.match(regEx));





 
 









