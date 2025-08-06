

//! 1. What is a Set in JavaScript and how is it different from an array?

// A Set is a built-in JavaScript object that allows you to store **unique values** only.
// This means it automatically removes duplicates.

// Example of a Set:
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); 
console.log(" Duplicate, will be ignored",mySet); 

// Difference between Set and Array:
// - Array can have duplicate values, Set cannot.
// - Set has no index, Array uses index to access items.
// - Set has faster lookup for unique values.
// - Set uses methods like add(), delete(), has(), while Array uses push(), pop(), indexOf(), etc.

// Example of Array:
const myArray = [1, 2, 2];
console.log(myArray); 





//! 2. How do you create a new Set in JavaScript?

// You can create a new Set using the `Set` constructor.

// Method 1: Create an empty Set
const emptySet = new Set();
console.log(emptySet); // Output: Set(0) {}

// Method 2: Create a Set with initial values
const numberSet = new Set([1, 2, 3, 4, 4]); 
console.log("duplicate 4 will be removed",numberSet); 

// You can add values later using add()
numberSet.add(5);
console.log(numberSet);





//! 3. How do you add elements to a Set?

// Use the `.add()` method to add elements to a Set.
const fruits = new Set();

// Adding elements
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); 

console.log("Duplicate, will be ignored",fruits); 

// You can chain .add() methods
fruits.add("mango").add("grape");

console.log(fruits); 



//! 4. How do you remove elements from a Set?

// Use the `.delete()` method to remove a specific element from a Set.

const numbers = new Set([1, 2, 3, 4, 5]);

// Remove the number 3
numbers.delete(3);

console.log(numbers); 

// If the element doesn't exist, nothing happens
numbers.delete(10); // No error, just ignored




//! 5. How do you check if a Set contains a certain value?

// Use the `.has()` method to check if a value exists in the Set.

const colors = new Set(["red", "green", "blue"]);

console.log(colors.has("green")); 
console.log(colors.has("yellow")); 





//! 6. How can you find the size (number of elements) of a Set?

// Use the `.size` property to get the total number of unique elements in a Set.

const languages = new Set(["JavaScript", "Python", "C++", "Java"]);

console.log(languages.size); 

languages.add("Java");  
console.log("duplicate, won't increase size",languages.size); 





//! 7. What happens if you add duplicate values to a Set?

// A Set only stores unique values.
// If you try to add a duplicate, it will be ignored — no error, no change.

const nums = new Set();

nums.add(10);
nums.add(20);
nums.add(10);  
console.log("Duplicate, will be ignored",nums); 





//! 8. How can you loop through all the elements in a Set?

const animals = new Set(["dog", "cat", "elephant"]);

// Method 1: Using for...of loop
for (let animal of animals) {
  console.log(animal);
}

// Method 2: Using forEach
animals.forEach((animal) => {
  console.log(animal);
});





//! 9. How do you convert a Set to an array?

const setExample = new Set([1, 2, 3, 4]);

// Method 1: Using spread operator
const array1 = [...setExample];
console.log(array1); 

// Method 2: Using Array.from()
const array2 = Array.from(setExample);
console.log(array2); 





//! 10. How do you clear all elements from a Set?
// Use the `.clear()` method to remove all elements from a Set.

const cities = new Set(["Mumbai", "Delhi", "Pune"]);

console.log(cities.size); 

cities.clear(); 

console.log(cities.size); 
console.log(cities); 





