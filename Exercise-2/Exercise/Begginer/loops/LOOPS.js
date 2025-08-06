//! Print even numbers from 1 to 20.
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


//! Print numbers from 10 to 1 (reverse).
for (let i = 10; i >= 1; i--) {
  console.log(i);
}


//! Print the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum is:", sum);



//! Print multiplication table of 5 (like 5 x 1 = 5 ... till 10).
let num = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}


//! Print the factorial of a number (e.g., 5! = 120).
let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log(`Factorial of ${num} is: ${fact}`);


//! Print all prime numbers between 1 and 100 using loops.
for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  // check divisibility from 2 to num - 1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}

//! Check if a string is a palindrome using a loop (no built-in reverse).
function isPalindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false; // mismatch found
    }
  }
  return true; // all matched
}

// Example usage
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("hello"));     // false


//!  (Using Built-in reverse())
function isPalindrome(str) {
  // Step 1: Clean the string (remove spaces and make lowercase)
  str = str.toLowerCase().replace(/\s+/g, '');

  // Step 2: Reverse the string
  let reversed = str.split('').reverse().join('');

  // Step 3: Compare original and reversed
  return str === reversed;
}

// Test cases
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
console.log(isPalindrome("Racecar"));   // true
console.log(isPalindrome("Was it a car or a cat I saw")); // true






//? ----------------  FOR OF LOOP  ------------------------------------------------ 

//! Q1: Use a for...of loop to print each character in the string "Hello World"

const message = "Hello World";

for (const char of message) {
  console.log(char);
}




//! Q2: Given an array of numbers [10, 20, 30, 40], use a for...of loop to print each number

const numbers = [10, 20, 30, 40];

for (const num of numbers) {
  console.log(num);
}




//! Q3: Use a for...of loop to calculate the sum of all elements in the array [1, 2, 3, 4, 5]

const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log("Sum:", sum);






//! Q4: Create a for...of loop to iterate over an array of fruits ["apple", "banana", "mango"] and print each fruit in uppercase.

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit.toUpperCase());
}






//! Q5: Given a string "JavaScript", use a for...of loop to count how many vowels are in the string.

const str = "JavaScript";
let vowelCount = 0;

for (const char of str) {
  if ("aeiouAEIOU".includes(char)) {
    vowelCount++;
  }
}

console.log("Number of vowels:", vowelCount);







//! Q6: Use a for...of loop to print all elements of a nested array: [[1, 2], [3, 4], [5, 6]] (Hint: use two for...of loops)

const nestedArray = [[1, 2], [3, 4], [5, 6]];

for (const innerArray of nestedArray) {
  for (const num of innerArray) {
    console.log(num);
  }
}





//! Q7: Given an array of student names ["Ali", "Sara", "John"], use a for...of loop to print a welcome message for each student.

const students = ["Ali", "Sara", "John"];

for (const student of students) {
  console.log(`Welcome, ${student}!`);
}







//! Q8: Create an array of prices [100, 200, 300], then use a for...of loop to apply a 10% discount and print the discounted prices.

const prices = [100, 200, 300];

for (const price of prices) {
  const discountedPrice = price - price * 0.1; // 10% discount
  console.log(`Discounted Price: ₹${discountedPrice}`);
}





//! Q9: Use a for...of loop to iterate over the string "for...of loop" and print each character except spaces.

const text = "for...of loop";

for (const char of text) {
  if (char !== " ") {
    console.log(char);
  }
}





//! Q10: Given an array of boolean values [true, false, true], use a for...of loop to count how many `true` values are present.

const bools = [true, false, true];
let trueCount = 0;

for (const value of bools) {
  if (value === true) {
    trueCount++;
  }
}

console.log("Number of true values:", trueCount);









//? ----------------------------  FOR EACH LOOP  -----------------------------------


//! Q1: Use forEach to print each element in the array [1, 2, 3, 4, 5].

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (num) {
  console.log(num);
});






//! Q2: Given an array of names ["Farhan", "Ayaan", "Zoya"], use forEach to greet each person like "Hello, Farhan!".

const names = ["Farhan", "Ayaan", "Zoya"];

names.forEach(function(name) {
  console.log(`Hello, ${name}!`);
});





//! Q3: Use forEach to double each number in the array [10, 20, 30] and print the result.

const numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num * 2);
});





//! Q4: Given an array of strings ["pen", "pencil", "eraser"], use forEach to print the length of each string.

const items = ["pen", "pencil", "eraser"];

items.forEach(function(item) {
  console.log(`${item} has length: ${item.length}`);
});






//! Q5: Use forEach to calculate the total sum of elements in the array [5, 10, 15, 20].

const numbers = [5, 10, 15, 20];
let sum = 0;

numbers.forEach(function(num) {
  sum += num;
});

console.log("Total sum:", sum);








//! Q6: Given an array of marks [33, 48, 75, 62], use forEach to check and print whether each mark is "pass" (>= 35) or "fail".

const marks = [33, 48, 75, 62];

marks.forEach(function(mark) {
  if (mark >= 35) {
    console.log(`${mark} = Pass`);
  } else {
    console.log(`${mark} = Fail`);
  }
});








//! Q7: Use forEach to iterate over an array of objects: [{name: "Ali"}, {name: "Sara"}] and print each name.

const people = [{ name: "Ali" }, { name: "Sara" }];

people.forEach(function(person) {
  console.log(person.name);
});








//! Q8: Create an array of prices [100, 200, 300]. Use forEach to add ₹50 to each price and print the new price.

const prices = [100, 200, 300];

prices.forEach(function(price) {
  const newPrice = price + 50;
  console.log(`New Price: ₹${newPrice}`);
});










//! Q9: Use forEach to print the index and value of each element in the array ["a", "b", "c"].

const letters = ["a", "b", "c"];

letters.forEach(function(value, index) {
  console.log(`Index: ${index}, Value: ${value}`);
});







//! Q10: Given an array of tasks ["Eat", "Code", "Sleep"], use forEach to print each task in the format: "Task: Eat".

const tasks = ["Eat", "Code", "Sleep"];

tasks.forEach(function(task) {
  console.log(`Task: ${task}`);
});











//?--------------------- FOR IN LOOP ----------------------------------------------


//! Q1: Use a for...in loop to print all keys in the object {name: "Farhan", age: 21, city: "Mumbai"}.

const person = {
  name: "Farhan",
  age: 21,
  city: "Mumbai"
};

for (const key in person) {
  console.log(key);
}







//! Q2: Given an object {math: 80, english: 70, science: 90}, use for...in to print each subject and its marks.

const marks = {
  math: 80,
  english: 70,
  science: 90
};

for (const subject in marks) {
  console.log(`${subject}: ${marks[subject]}`);
}









//! Q3: Use a for...in loop to count how many properties are present in the object {a: 1, b: 2, c: 3}.

const obj = { a: 1, b: 2, c: 3 };
let count = 0;

for (const key in obj) {
  count++;
}

console.log("Total properties:", count);








//! Q4: Create a for...in loop to copy all properties from one object to another.

const source = {
  name: "Farhan",
  age: 21,
  city: "Mumbai"
};

const target = {};

for (const key in source) {
  target[key] = source[key];
}

console.log("Copied object:", target);







//! Q5: Given a nested object like {user: {name: "Ali", age: 22}}, use for...in to print the outer keys.

const data = {
  user: {
    name: "Ali",
    age: 22
  }
};

for (const key in data) {
  console.log(key);
}







//! Q6: Use for...in to print only the keys of an object, not the values.

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023
};

for (const key in car) {
  console.log(key);
}







//! Q7: Use a for...in loop to print both keys and values of the object {brand: "Nike", price: 5000, inStock: true}.

const product = {
  brand: "Nike",
  price: 5000,
  inStock: true
};

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}








//! Q8: Create an object with 5 items and use for...in to convert all string values to uppercase.

const user = {
  name: "farhan",
  city: "mumbai",
  profession: "developer",
  age: 22,
  country: "india"
};

for (const key in user) {
  if (typeof user[key] === "string") {
    user[key] = user[key].toUpperCase();
  }
}

console.log(user);







//! Q9: Use for...in to check if the object {x: 10, y: 20} contains a key named "z".

const obj = { x: 10, y: 20 };
let hasZ = false;

for (const key in obj) {
  if (key === "z") {
    hasZ = true;
    break;
  }
}

console.log("Contains key 'z'?", hasZ);









//! Q10: Given an object of a student with subjects and marks, use for...in to calculate total marks.

const studentMarks = {
  math: 85,
  english: 78,
  science: 92,
  history: 74,
  computer: 88
};

let total = 0;

for (const subject in studentMarks) {
  total += studentMarks[subject];
}

console.log("Total Marks:", total);







//? ----------------------------- WHILE LOOP ----------------------------------------------------

//! Q1: Use a while loop to print numbers from 1 to 10.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}








//! Q2: Create a while loop to print even numbers between 1 and 20.

let num = 1;

while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}








//! Q3: Use a while loop to calculate the sum of numbers from 1 to 100.

let i = 1;
let sum = 0;

while (i <= 100) {
  sum += i;
  i++;
}

console.log("Sum from 1 to 100:", sum);







//! Q4: Write a while loop to print the multiplication table of 5 (from 5 × 1 to 5 × 10).

let i = 1;

while (i <= 10) {
  console.log(`5 × ${i} = ${5 * i}`);
  i++;
}









//! Q5: Use a while loop to print all characters of a string "JavaScript" one by one.

const str = "JavaScript";
let i = 0;

while (i < str.length) {
  console.log(str[i]);
  i++;
}








//! Q6: Create a while loop to reverse the digits of a number (e.g., 1234 → 4321).

let num = 1234;
let reversed = 0;

while (num !== 0) {
  let digit = num % 10;
  reversed = reversed * 10 + digit;
  num = Math.floor(num / 10);
}

console.log("Reversed Number:", reversed);










//! Q7: Use a while loop to count how many digits are in a number (e.g., 9876 has 4 digits).

let num = 9876;
let count = 0;

while (num !== 0) {
  num = Math.floor(num / 10);
  count++;
}

console.log("Total digits:", count);










//! Q8: Write a while loop that keeps asking the user to enter a number until they enter 0 (assume input is given).

let number = prompt("Enter a number (0 to stop):");

while (parseInt(number) !== 0) {
  console.log("You entered:", number);
  number = prompt("Enter another number (0 to stop):");
}

console.log("Loop ended because you entered 0.");











//! Q9: Use a while loop to find the factorial of a number (e.g., 5! = 120).

let num = 5;
let factorial = 1;

while (num > 0) {
  factorial *= num;
  num--;
}

console.log("Factorial:", factorial);









//! Q10: Use a while loop to print the Fibonacci sequence up to the 10th term.

let n = 10;
let a = 0, b = 1;
let count = 1;

while (count <= n) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
  count++;
}










//? ------------------------------ DO WHILE LOOP ----------------------------------------------


//! Q1: Use a do...while loop to print numbers from 1 to 5.

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);









//! Q2: Write a do...while loop to print the multiplication table of 7 (from 7 × 1 to 7 × 10).

let i = 1;

do {
  console.log(`7 × ${i} = ${7 * i}`);
  i++;
} while (i <= 10);










//! Q3: Use a do...while loop to print all even numbers from 2 to 20.

let num = 2;

do {
  console.log(num);
  num += 2;
} while (num <= 20);










//! Q4: Create a do...while loop that prints the reverse of a string "hello".

const str = "hello";
let i = str.length - 1;

do {
  console.log(str[i]);
  i--;
} while (i >= 0);











//! Q5: Write a do...while loop that adds numbers from 1 to 50 and prints the total sum.

let i = 1;
let sum = 0;

do {
  sum += i;
  i++;
} while (i <= 50);

console.log("Total Sum:", sum);












//! Q6: Use a do...while loop to count down from 10 to 1.

let i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);










//! Q7: Write a do...while loop that prints a message "Welcome!" 3 times.

let count = 1;

do {
  console.log("Welcome!");
  count++;
} while (count <= 3);














//! Q8: Use a do...while loop to calculate the factorial of a number (e.g., 4! = 24).

let num = 4;
let factorial = 1;
let i = 1;

do {
  factorial *= i;
  i++;
} while (i <= num);

console.log(`Factorial of ${num} is:`, factorial);












//! Q9: Create a do...while loop that keeps running until a random number is greater than 0.9 (use Math.random()).

let randomNumber;

do {
  randomNumber = Math.random();
  console.log("Generated:", randomNumber);
} while (randomNumber <= 0.9);

console.log("Loop stopped. Final number > 0.9:", randomNumber);
















//! Q10: Write a do...while loop that keeps asking the user for a password until the correct one is entered (assume input is given).

const correctPassword = "admin123";
let input;

do {
  input = prompt("Enter password:");
} while (input !== correctPassword);

console.log("Access granted!");