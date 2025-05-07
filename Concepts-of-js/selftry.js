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
let result = str.substring(FirstSpaceIndex +1)
console.log(result);


//! Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript

let text = "30 days of javascript."
let result3 = text.split(" ")
console.log(result3);
console.log(typeof(text));
console.log(typeof(result3)); // object because in javascript array is an object.

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
console.log(typeof(num1));
console.log(typeof(num2));

if (num1 === num2) {
    console.log('num1 is same as num2 2');
    
    
}
else{
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

let randomnum = Math.floor(Math.random() * 101 );
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
let randomnum2 = Math.floor(Math.random() * (max - min +1)) + min 
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
let phrase = sentence4.substr(startIndex,23);
console.log(phrase);









































