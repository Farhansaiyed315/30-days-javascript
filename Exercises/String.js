console.log("Excercise");


let challenge2 = "30 days of javascript"


let st = "java";

console.log(st);
console.log(st.length);
console.log(st.toUpperCase());
console.log(st.toLowerCase());
console.log(st.slice(1));

//! Cut (slice) out the first word of the string using substr() or substring() method
let str = "My name is farhan"
let FirstSpaceIndex = str.indexOf(" ");
let result = str.substring(FirstSpaceIndex+1);
console.log(result);


//! Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let challenge = "30 days of javascript"
let FirstSpaceIndex2 = challenge.indexOf(" ");
let result2 = challenge.substring(0,FirstSpaceIndex2)
console.log(result2);


let text = "30 Days Of JavaScript";

let result3 = text.split(" ");

console.log(result3);

console.log(typeof(text));
console.log(typeof(result3)); // object because in javascript array is an object. 

console.log(text.replace(/javascript/i, "python"));
console.log(text.charAt(15));


//! What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let text2 = "30 Days Of JavaScript"
console.log(text2.charCodeAt("J"));

console.log(text2.indexOf("a"));
console.log(text2.lastIndexOf("a"));

let sentence ='You cannot end a sentence with because because because is a conjunction'
console.log(sentence.length);
console.log(sentence.indexOf("because"));
console.log(sentence.lastIndexOf("because"));

let me = "  helo  ";
let result4 = me.trim()
console.log(result4);
console.log(sentence.startsWith("Y"));
console.log(sentence.endsWith("n"));
console.log(sentence.match(/a/g));
console.log(sentence.repeat(2));


let str1 = '30 Days of';
let str2 = 'JavaScript';

let result5 = str1.concat(' ', str2);
console.log(result5);  // Output: "30 Days of JavaScript"


//? Exercise level 2. 
console.log("page number 50 xodo");


// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log("Question no 3-------------");
let num1 = Number('10');
let num2 = 10;

console.log(typeof(num1));
console.log(typeof(num2));


if (num1===num2) {
    console.log("num1 and num3 are exactly equal");
    
    
} else {
    console.log("Not equal");
    
    
}

//? Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log("Question no 4 -----------");
let gravity = Number('9.8');
let num = 10;
console.log(parseFloat('9.8') === (10));


gravity = Math.ceil(gravity);  // <-- update gravity here!

console.log(num);
console.log(gravity);
console.log(typeof(gravity));
console.log(typeof(num));
console.log(gravity === num);

let gravity1 = Math.ceil(parseFloat('9.8'));
let num5 = 10;

console.log(gravity1 === num5);  // true

//? Check if 'on' is found in both python and jargon.
console.log("Question no 5 ------------");

let Lan1 = "Python";
let Lan2 = "Jagron";
console.log(Lan1.includes("on"));
console.log(Lan2.includes("on"));

//? I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log("Question no 6---------");
let sentence3 = "I hope this course is not full of jargon."
console.log(sentence3.includes("jargon."));


//? Generate a random number between 0 and 100 inclusively.
console.log("Question no 7------------");

let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);


//? Generate a random number between 50 and 100 inclusively.
console.log("Question no 8--------------------------");

let min = 50;
let max = 80;

let randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum1);

//? Generate a random number between 0 and 255 inclusively.
console.log("Question no 9-------------------------------------");
let min1 = 0;
let max1 = 255;

let randomnum2 = Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
console.log(randomnum2);


//? Access the 'JavaScript' string characters using a random number.
console.log("Question no 10--------------------------------------------");

let str3 = 'JavaScript';

let randomIndex = Math.floor(Math.random() * str3.length);

let randomChar = str3[randomIndex];

console.log(`Random index: ${randomIndex}`);
console.log(`Character at random index: ${randomChar}`);


console.log("Question no 11------------------------------------------------");

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n\     5 1 5 25 125");


//?  Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Question no 12-------------------------------------------------------");

let sentence4 = 'You cannot end a sentence with because because because is a conjunction';

let startIndex = sentence4.indexOf("because");

let phrase = sentence4.substr(startIndex, 23);  

console.log(phrase); 


//! Exercise level 3.

//? 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log("Question no 1----");

let sentence6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';


// let matches = sentence6.match(/love/gi);  // 'g' for global search, 'i' for case-insensitive
// let count = matches ? matches.length : 0;
// console.log(count);

//? Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log("Question no 2-------------");
let sentence7 = 'You cannot end a sentence with because because because is a conjunction';

let matches = sentence7.match(/because/gi);  // 'g' for global search, 'i' for case-insensitive
let count = matches ? matches.length : 0;  
console.log(count); 


//! Exercises








































































