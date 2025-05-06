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





























