console.log("selftry.js");


let challenge = "30 days of javascript"

let st = "java"

console.log(st);

console.log(st.length);
console.log(st.toUpperCase());
console.log(st.toLowerCase());
console.log(st.slice());

//! substring(start) gives part of the string starting from a certain position.

// We add +1 to skip the space.
let str = "My name is farhan"
let FirstSpaceIndex = str.indexOf(" ")
let result = str.substring(FirstSpaceIndex + 1)
console.log(result);


//! Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript

let text = "30 days of javascript."
let result3 = text.split(" ")
console.log(result3);
console.log(typeof (text));
console.log(typeof (result3)); // object because in javascript array is an object.

//! Check if the string contains a word Script using includes() method
console.log(challenge.includes("script"));

//! Split the string into an array using split() method.
console.log(challenge.split());


//! Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(" "));

//! Change 30 Days Of JavaScript to 30 Days Of Python using replace() method
console.log(text.replace(/javascript/i, "python"));

//! What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method
console.log(text.charAt(15));

//! What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt("j")); // This is the AASCI code. 

//! Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf("a"));

//! Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript
console.log(challenge.lastIndexOf("a"));

//! Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.length);
console.log(sentence.indexOf("because"));

//! Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.lastIndexOf("because"));

//! Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let firstPosition = sentence.search("because");
console.log(firstPosition);

//! Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let trimmedchallenge = challenge.trim();  // ' 30 Days Of JavaScript '  -> 30 Days Of JavaScript bana deta hai 
console.log(trimmedchallenge);

//! Use startsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.startsWith("3"));

//! Use endsWith() method with the string 30 Days Of JavaScript and make the result true.
console.log(challenge.endsWith("t"));

//! Use match() method to find all the a’s in 30 Days Of JavaScript.
console.log(challenge.match(/a/g));

//! Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let string1 = "30 Days of";
let string2 = " JavaScript";
let result1 = string1.concat(string2);
console.log(result1);

//! Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2));

//! Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("Question no 3-------------");

let num1 = Number('10');
let num2 = 10;
console.log(typeof (num1));
console.log(typeof (num2));

if (num1 === num2) {
  console.log('num1 is same as num2 2');


}
else {
  console.log('num1 and num2 are not same');

}

//! Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("Question no 4 -----------");

let gravity = Number(9.8);
let num3 = 10;
console.log(parseFloat(9.8) === (10));

gravity = Math.ceil(gravity);
console.log(num3);
console.log(gravity);

//! Check if 'on' is found in both python and jargon.
console.log("Question no 5 ------------");
let lan1 = 'Python'
let lan2 = 'Jagron'
console.log(lan1.includes('on'));
console.log(lan2.includes('on'));

//! I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("Question no 6---------");

let sentence2 = ' I hope this course is not full of jargon.'
console.log(sentence2.includes('jargon'));

//! Generate a random number between 0 and 100 inclusively.
console.log("Question no 7------------");

let randomnum = Math.floor(Math.random() * 101);
console.log(randomnum);

//! Generate a random number between 50 and 100 inclusively.
console.log("Question no 8--------------------------");

// let min = 50;
// let max = 100;

// let randomnum1 = Math.floor(Math.random() * (max - min +1 )) + min
// console.log(randomnum1);

//! Generate a random number between 0 and 255 inclusively.
console.log("Question no 9-------------------------------------");

let min = 0;
let max = 255;
let randomnum2 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(randomnum2);

//! Access the 'JavaScript' string characters using a random number.
console.log("Question no 10--------------------------------------------");

let str3 = 'javascript';
let randomIndex = Math.floor(Math.random() * str3.length);
let randomchar = str3[randomIndex];
console.log(`Random index: ${randomIndex}`);
console.log(`Character at random Index: ${randomchar}`);


//! pattern bana do 
console.log("Question no 11------------------------------------------------");

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n\     5 1 5 25 125");


//!  Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Question no 12-------------------------------------------------------");

let sentence4 = 'You cannot end a sentence with because because because is a conjunction';

let startIndex = sentence4.indexOf("because");
let phrase = sentence4.substr(startIndex, 23);
console.log(phrase);


console.log("Array.js");
console.log("=========================");

let you = [];
console.log(you);

//! Declare an array with more than 5 number of elements.

let num4 = [1, 2, 3, 4, 5, 6, 7];
console.log(num4);
console.log(num4.length);

//! Get the first item, the middle item and the last item of the array

console.log("first element", num4[0]);
console.log("Middle element", num4[Math.floor(num4.length / 2)]);
console.log("last Index", num4.length - 1);
console.log("last Item", num4[num4.length - 1]);

//! Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itcompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(itcompanies);

//! Print the number of companies in the array
console.log('Question no 8 ---------------------\n');
console.log("Number of companies:", itcompanies.length);


//! Print the first company, middle and last company
console.log('Question no 9 ---------------------\n');

console.log("First company", itcompanies[0]);
let middleIndex = Math.floor(itcompanies.length / 2)
console.log("Middle company", itcompanies[middleIndex]);
console.log("LastCompany", itcompanies[itcompanies.length - 1]);

console.log('Question no 10 ---------------------\n');
//! Print out each company.

itcompanies.forEach(function (company) {
  console.log(company);

})

console.log('Question no 11 ---------------------\n');

//! Change each company name to uppercase one by one and print them out

itcompanies.forEach(function (company) {
  console.log(company.toUpperCase());

})

console.log('Question no 12 ---------------------\n');


//! Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies

let sentence6 = itcompanies.join(", ") + "are big it companies"
console.log(sentence6);


//! Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

console.log('Question no 13---------------------\n');
let companyToSearch = "Google"
if (itcompanies.includes(companyToSearch)) {
  console.log(companyToSearch + " exists in the array. ");
}
else {
  console.log(companyToSearch + "is not found ");
}

//! Filter out companies which have more than one 'o' without the filter method.
console.log('Question no 14 ---------------------\n');
let companiesWithMoreThanOneO = [];

for (let i = 0; i < itcompanies.length; i++) {
  let company = itcompanies[i];


  let oCount = company.split("o").lenght - 1

  if (oCount > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}

console.log(companiesWithMoreThanOneO);

//! Sort the array using sort() method.
console.log('Question no 15 ---------------------\n');
itcompanies.sort();
console.log(itcompanies);

//! Reverse the array using reverse() method.
console.log('Question no 16 ---------------------\n');
itcompanies.reverse();
console.log(itcompanies);


//! Slice out the first 3 companies from the array.
console.log('Question no 17 ---------------------\n');

let firstThree = itcompanies.slice(0, 3);
console.log(firstThree); // uapr ke code ke change ke baad out put change ho gaya hai 

//! Slice out the last 3 companies from the array.
console.log('Question no 18 ---------------------\n');

let lastThree = itcompanies.slice(-3);
console.log(lastThree);

//! Slice out the middle IT company or companies from the array
console.log('Question no 19 ---------------------\n');

let middle = []
let midIndex = Math.floor(itcompanies.length / 2) // it will appear 3 as the lenght is seven

itcompanies.splice(midIndex, 1)
console.log(itcompanies);

//! Remove the first IT company from the array.

console.log('Question no 20 ---------------------\n');
itcompanies.shift(); // removes "Facebook"
console.log(itcompanies);

//! Remove the middle IT company or companies from the array
console.log('Question no 21 ---------------------\n');

let midIndex1 = Math.floor(itcompanies.length / 2);

if (itcompanies.length % 2 === 0) {
  // Even number of items → remove 2 middle companies
  itcompanies.splice(midIndex1 - 1, 2);
} else {
  // Odd number of items → remove 1 middle company
  itcompanies.splice(midIndex1, 1);
}

console.log(itcompanies);

//! Remove the last IT company from the array.
console.log('Question no 21 ---------------------\n');
itcompanies.pop();
console.log(itcompanies);

//! Remove all IT companies.
console.log('Question no 22---------------------\n');
itCompanies = [];
console.log(itCompanies);

console.log("Functions");


//! Declare a function fullName and it print out your full name.
console.log('Question no 1 ---------------------\n');

function FullName() {
  console.log("Farhan Saiyed");

}
FullName()


//! Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
console.log('Question no 2 ---------------------\n');

function FullNames(FirstName, LastName) {
  return FirstName + " " + LastName;

}
console.log(FullNames("Farhan", "Saiyed"));


//! Declare a function addNumbers and it takes two two parameters and it returns sum.
console.log('Question no 3 ---------------------\n');

function sum(a, b) {
  return a + b;
}
console.log(sum(10, 25));

//! An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
console.log('Question no 4 ---------------------\n');

function AreaofRectangle(lenght, width) {
  return lenght * width;
}
console.log(AreaofRectangle(5, 5));

//! A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle

console.log('Question no 5 ---------------------\n');

function PerimeterOfRectangle(lenght, width) {
  return lenght + width;
}
console.log(PerimeterOfRectangle(5, 5));

//! Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
console.log('Question no 6 ---------------------\n');

function areaOfCircle(radius) {
  return Math.P * radius * radius;
}
console.log(areaOfCircle(5));


//! Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
console.log('Question no 7 ---------------------\n');

function circumOfcircle(radius) {
  return 2 * Math.PI * radius;
}
console.log(circumOfcircle(5));

//! Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

console.log('Question no 8 ---------------------\n');

function calculateDensity(mass, volume) {
  return mass / volume;
}

console.log(calculateDensity(10, 2));


//! Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

console.log('Question no 9 ---------------------\n');

function calculatespeed(distance, time) {
  return distance / time;

}
console.log(calculatespeed(100, 2));


//! Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

console.log('Question no 10 ---------------------\n');

function calculateWeight(mass, gravity) {
  return mass * gravity;
}
console.log(calculateWeight(10, 9.8));

//! Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer

console.log('Question no 11 ---------------------\n');

function checkseason(month) {
  if (['December', 'January', 'February'].includes(month)) {
    return "Winter"
  } else if (['March', 'April', 'May'].includes(month)) {
    return 'Spring';
  }
  else if (['June', 'July', 'August'].includes(month)) {
    return 'Summer';
  } else if (['September', 'October', 'November'].includes(month)) {
    return 'Autumn';
  } else {
    return 'Invalid month';
  }
}

console.log( checkseason('March'));
console.log(checkseason('July'));

//! Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
//! console.log(findMax(0, 10, 5)) 10
//! console.log(findMax(0, -10, -2)) 0


console.log('Question no 12 ---------------------\n');


function findMax(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findMax(0, 10, 5));  
console.log(findMax(0, -10, -2));





 