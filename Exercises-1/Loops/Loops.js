console.log('Loops page 100 Level 1st');
console.log('Question Number 1...........');


//! 1. Iterate 0 to 10 using for loop, do the same using while and do while loop

for (int = i = 0; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//! Write a loop that makes the following pattern using console.log(): 
// #
// ##
// ###
// ####
// ##### 
// ###### 
// #######
console.log('Question Number 4 ...........');

for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
}


//! Use loop to print the following pattern:
// 0 x 0 = 0
//  1 x 1 = 1 
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

console.log('Question Number 5 ...........');

for (let i = 0; i <= 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`);
}

//! Using loop print the following pattern i
console.log('Question Number 6 ...........');

// Print i
console.log("i");
for (let i = 0; i <= 10; i++) {
    process.stdout.write(i + " ");
}
console.log("\n");

// Print i^2
console.log("i^2");
for (let i = 0; i <= 10; i++) {
    process.stdout.write((i * i) + " ");
    if ((i + 1) % 4 === 0) console.log(); // new line after every 4 values
}
console.log("\n");

// Print i^3
console.log("i^3");
for (let i = 0; i <= 10; i++) {
    process.stdout.write((i * i * i) + " ");
    if ((i + 1) % 3 === 0) console.log(); // new line after every 3 values
}


//! Use for loop to iterate from 0 to 100 and print only even numbers
console.log('Question Number 7  ...........');

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//! Use for loop to iterate from 0 to 100 and print only odd numbers.
console.log('Question Number 8 ...........');

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

console.log('Another method.......');


for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

//! Use for loop to iterate from 0 to 100 and print only prime numbers.
console.log('Question Number 9 ...........');

for (let i = 2; i <= 100; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}


//! Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050

console.log('Question Number 10 ...........');

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
}

console.log("The sum of all numbers from 0 to 100 is", sum);


//!  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
//!  The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.


console.log('Question Number 12  ...........');
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    } else {
        sumOdd += i;
    }
}

console.log("The sum of all evens from 0 to 100 is", sumEven + ".");
console.log("And the sum of all odds from 0 to 100 is", sumOdd + ".");



//! Develop a small script which generate array of 5 random numbers.

console.log('Question Number 13 ...........');

let randomNumbers = [];

for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.random());
}

console.log(randomNumbers);

//! Develop a small script which generate array of 5 random numbers and the numbers must be unique.

console.log('Question Number 14 ...........');

let uniqueRandoms = [];

while (uniqueRandoms.length < 5) {
    let rand = Math.floor(Math.random() * 100) + 1; // random number 1 to 100
    if (!uniqueRandoms.includes(rand)) {
        uniqueRandoms.push(rand);
    }
}

console.log(uniqueRandoms);


//! Develop a small script which generate a six characters random id:


console.log('Question Number 15 ...........');

function generateRandomId(length = 6) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        id += chars[randomIndex];
    }

    return id;
}

console.log(generateRandomId());
