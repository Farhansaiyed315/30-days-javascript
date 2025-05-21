console.log('Sets and maps Page number 167........');

//! create an empty set
console.log('Question number 1......');

const mySet = new Set();

console.log(mySet);          
console.log(mySet.size);    

//! Create a set containing 0 to 10 using loop.
console.log('Question number 2......');

const mySet1 = new Set();

for (let i = 0; i <= 10; i++) {
  mySet1.add(i);
}

console.log(mySet1);  

//! Remove an element from a set.
console.log('Question number 3......');

const mySet2 = new Set([0, 1, 2, 3, 4, 5]);

mySet2.delete(3);  

console.log(mySet2); 

//! Clear a set.
console.log('Question number 4......');

const mySet4 = new Set([1, 2, 3, 4, 5]);

mySet.clear();  // Removes all elements

console.log(mySet);      // Output: Set(0) {}
console.log(mySet.size); // Output: 0


//! Create a set of 5 string elements from array.
console.log('Question Number 5.....');

const stringArray = ["apple", "banana", "cherry", "date", "elderberry"];

const mySet5 = new Set(stringArray);

console.log(mySet5);  


//! Create a map of countries and number of characters of a country.
console.log('Question Number 6.....');

const countries = ["India", "Germany", "USA", "Australia", "Nepal"];

const countryMap = new Map();

for (const country of countries) {
  countryMap.set(country, country.length);
}

console.log(countryMap);
