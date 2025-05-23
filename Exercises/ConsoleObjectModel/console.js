//! console object model page 193 of notes pdf Day 13 

console.log("console object model page 193 of notes pdf Day 13 .........");

console.log(console);
console.table();
console.warn();
console.error();
// console.time();
// console.time();
console.info(); //! and so on 

//? lets see an example how we can use console methods for complicated tasks and for interview questions. 
// FOR LOOP starts from here
console.time("ForLoop starts");

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.timeEnd("ForLoop starts");

// WHILE LOOP starts from here  
console.time("WhileLoop starts");

let i = 0;
while (i < 10) {
    console.log(2);
    i++;
}

console.timeEnd("WhileLoop starts");

//? Which one is taking longer??
