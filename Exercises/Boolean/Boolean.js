// Page number 64 Boolean and date datatypes exercise. 
console.log('Question number one..............');

let firstName = "Farhan";
let lastName = "Saiyed";
let country = "India";
let city = "Mumbai";
let age = 22;
let isMarried = false;
let year = 2025;

console.log(typeof(firstName));   // string
console.log(typeof(age));         // number
console.log(typeof(isMarried));   // boolean
console.log(typeof(year));        // number

//! Boolean value is either true or false.
//! i. Write three JavaScript statement which provide truthy value.
//! ii. Write three JavaScript statement which provide falsy value.
console.log('Question number 4 ..............');

let LiveAtHomeTown = false;
let GotJob = false;
let IsStudent = false;

let LiveInMumbai = true;
let SearchJob = true;
let IsBad = true;

console.log(typeof LiveAtHomeTown);  
console.log(typeof GotJob);          
console.log(typeof IsStudent);       
console.log(typeof LiveInMumbai);    
console.log(typeof SearchJob);       
console.log(typeof IsBad);

let num = 4
let num2 = 5;
result = 5>4;

console.log(result);
//! Find the length of python and jargon and make a falsy comparison statement
console.log('Question number 5 ka 7..............');

let Lang1 = "python";
let Lang2 = "jargon";

// Print lengths
console.log("Length of Lang1:", Lang1.length);  // 6
console.log("Length of Lang2:", Lang2.length);  // 6

// Compare lengths
let CompareLength = Lang1.length > Lang2.length;
console.log("Is Lang1 longer than Lang2? ", CompareLength);  // false

// Compare string values alphabetically
let CompareValue = Lang1 > Lang2;
console.log("Is Lang1 alphabetically greater than Lang2? ", CompareValue);  // true


//! Use the Date object to do the following activities
console.log('Question number 7 ..............');
const Now = new Date();
const Year = Now.getFullYear();
console.log(Year);

const month = Now.getMonth()
console.log(month);

const day = Now.getDay()
console.log(day);

const date = Now.getDate()
console.log(date);

const hours = Now.getHours()
console.log(hours);

const minutes = Now.getMinutes()
console.log(minutes);

console.log(Now.getTime()); 


// let base = prompt("Enter the base of the triangle: ")
// let height = prompt("Enter the height of the trianle")

// base = parseFloat(base)
// height  = heightFloat(height)                                //! Note it will run on browser enviroment. 
 
// let area = 0.5 * base * height;
// console.log("area of a triangle is " + area );
// alert("area of a triangle is " + area)

//! Need to work on browser enviroment and prompt 


