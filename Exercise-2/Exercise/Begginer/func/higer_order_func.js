
//!  11. Create a function expression that returns the cube of a number.

//? jab function ko ek variable mein rakh dete hai usay hi functin expression kehte hai simple hai bikul chalo banate hai khud se function expression. 

const add = function (num) {
  return  num * num;
};
console.log("The square is: ", add(3)); 





//!  12. Create an arrow function that multiplies 3 numbers.

const multiplythreenum = (a,b,c) => a * b * c ;
console.log("The result is of multiplying the provided three numbers is", multiplythreenum(2,3,4));




//! 13. Use an arrow function inside setTimeout() to print "Hi" after 1 second.

setTimeout(() => {
  console.log("Hello Farhan jii 2 second baad");
},2000);





//! 14. Convert a normal function to arrow function that returns the square of a number









//! 15. Write an arrow function that returns the remainder of two numbers.
const getremainder = (a,b) => a%b
console.log("The remainder is ", getremainder(5,2))





//! 16. Write a function using default parameters.

function add(a = 0, b = 0) {
  console.log("Sum is", a + b);
}

add();           
add(5);          
add(5, 10);     




//! 17. Write a function that uses rest parameters to sum any number of values.

function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log("Total sum:", total);
}

sumAll(1, 2, 3);             
sumAll(10, 20, 30, 40);      
sumAll();                    



//? Arrow function. 
const sumAll = (...nums) => nums.reduce((sum, val) => sum + val, 0);

console.log(sumAll(1, 2, 3));      
console.log(sumAll(100, 200));





//! 18. Write a function that accepts both numbers and strings and returns their types.

function checkTypes(...values) {
  for (let value of values) {
    console.log(`${value} → ${typeof value}`);
  }
}

checkTypes(42, "Farhan", "123", 100); 



//? Arrow function. 
const checkTypes = (...vals) => {
  vals.forEach(val => console.log(`${val} → ${typeof val}`));
};

checkTypes("hello", 99, "22", 3.14);






//! 19. Create a function that counts the number of vowels in a string.

function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(`Vowel count: ${count}`);
}

countVowels("Farhan Saiyed");  


//? Arrow function. 
const countVowels = str => {
  const vowels = "aeiouAEIOU";
  return [...str].filter(char => vowels.includes(char)).length;
};

console.log(countVowels("Engineers are cool"));




//! 20. Write a function that takes an array and returns the sum of all numbers.

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}


console.log(sumArray([1, 2, 3, 4, 5]));  




//? Arrow function. 
const sumArray = arr => arr.reduce((total, num) => total + num, 0);

console.log(sumArray([10, 20, 30])); 





//! 21. Create a function that checks if a string is a palindrome.

function isPalindrome(str) {
  
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madam"));           
console.log(isPalindrome("racecar"));         
console.log(isPalindrome("Farhan"));          
console.log(isPalindrome("A man a plan a canal Panama"));  



//? Arrow function. 
const isPalindrome = str => {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === [...str].reverse().join('');
};

console.log(isPalindrome("No lemon, no melon")); 






//! 22. Create a function that finds the largest number in an array.

function findLargest(arr) {
  let max = arr[0]; 

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}


console.log(findLargest([10, 5, 22, 7, 18]));  




//? Arrow function. 
const findLargest = arr => Math.max(...arr);

console.log(findLargest([99, 3, 101, 56])); 







//! 23. Create a function that removes duplicate values from an array.

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  


// using for loops
function removeDuplicates(arr) {
  let unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

console.log(removeDuplicates(["apple", "banana", "apple", "orange"]));


//? Arrow function. 

const removeDuplicates = arr => [...new Set(arr)];





//! 24. Write a function that capitalizes the first letter of every word in a sentence.

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("farhan is learning javascript"));


//? Arrow function. 
const capitalizeWords = str =>
  str.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

console.log(capitalizeWords("gen z coders rise up"));



//! 28. Write a function that returns another function.

function greetUser(name) {
  return function(message) {
    return `Hello ${name}, ${message}`;
  };
}


const greetFarhan = greetUser("Farhan");
console.log(greetFarhan("welcome to the coding world!"));






// 29. Write a function that takes a function and applies it to all elements of an array.

function applyToAll(arr, func) {
  return arr.map(func);
}


const numbers = [1, 2, 3, 4, 5];

function square(x) {
  return x * x;
}

const squaredNumbers = applyToAll(numbers, square);
console.log(squaredNumbers);






//! 30. Write a pure function that takes an array and returns a new sorted array.

function getSortedArray(arr) {
  return [...arr].sort((a, b) => a - b); // ascending order
}

// Example usage:
const numbers = [5, 2, 9, 1, 7];
const sorted = getSortedArray(numbers);

console.log("Original:", numbers);
console.log("Sorted:", sorted);


