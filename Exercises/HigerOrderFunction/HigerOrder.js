console.log("Higher Order Function pagae 146 of notes pdf..........");

//! Explain the difference between forEach, map, filter, and reduce.


//!  THE FOREACH METHOD USES CALL BACK.
// It goes through each element in the array one by one.
// For every element, it calls a function (the callback function) and performs an action.
// No need to use for, while, or any other loop manually.
// forEach automates the process.
// You can use forEach only on arrays, not on normal objects.


const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const products = [
  {
    product: 'banana', price: 3
  },
  {
    product: 'mango', price: 6
  },
  {
    product: 'potato', price: ' '
  },
  {
    product: 'avocado', price: 8
  },
  {
    product: 'coffee', price: 10
  },
  {
    product: 'tea', price: ''
  },
]

//! Define a callback function before you use it in forEach, map, filter or reduce.
console.log('Question number 2.........');

// A callback function is a function that is passed as an argument to another function and is called inside that function.

// When you're using methods like .forEach(), .map(), .filter(), or .reduce(), you can define the callback function separately before using it. This improves readability and reusability.


// Callback function defined before using map
function double(num) {
  return num * 2;
}

const doubled = numbers.map(double); // [2, 4, 6, 8, 10]
console.log(doubled);

//! Use forEach to console.log each country in the countries array.
console.log('Question number 3.........');

function logCountry(country) {
  console.log(country);
}
countries.forEach(logCountry);  
//? so main function ka name built in function yani foreach ka argument ban gaya hai total 2 function 
//? foreach wala function logcountry ko call kr raha hai yani ek funtion dusre ko call kr raha hai and 
//? this is what we call a call back funtion. 

//! Use forEach to console.log each name in the names array.
console.log('Question number 4.........');

function lognaam(naam){
  console.log(naam);
  
}
names.forEach(lognaam)

//! Use forEach to console.log each number in the numbers array.
console.log('Question number 5.........');

function lognum(num){
  console.log(num);
  
}
numbers.forEach(lognum)

//! Use map to create a new array by changing each country to uppercase in the countries array.
console.log('Question number 6.........');

function loguppercase(country){
  console.log(country.toUpperCase());
}

countries.map(loguppercase);

//! Use map to create an array of countries length from countries array.
console.log('Question number 7.........');

function loglenght(country){
  console.log(country.length);
  
}
countries.map(loglenght);

//! Use map to create a new array by changing each number to square in the numbers array
console.log('Question number 8.........');

function logsquare(num){
  console.log(num * num );
}
numbers.map(logsquare)

//! Use map to change to each name to uppercase in the names array.
console.log('Question number 9.........');

function loguppercase(name){
  console.log(name.toUpperCase());
}

names.map(loguppercase);

//! Use map to map the products array to its corresponding prices
console.log('Question number 10.........');
function logPrices(product) {
  console.log(product.price);
}
products.map(logPrices);


