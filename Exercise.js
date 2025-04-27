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





































































