
//! 1. What is array destructuring in JavaScript? Give an example using a fruits array.

//  Array destructuring is a way to unpack values from arrays into separate variables in a clean and easy way.

const fruits = ['apple', 'banana', 'mango'];

//  Without destructuring
// const first = fruits[0];
// const second = fruits[1];

const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  
console.log(secondFruit);
console.log(thirdFruit);  



//! 2. How can you skip elements while destructuring an array?

//  You can skip elements in array destructuring by leaving empty spaces between commas.

const numbers = [10, 20, 30, 40, 50];

//  Let's say we only want the first and third element
const [first, , third] = numbers;

console.log(first); // 10
console.log(third); // 30



//! 3. How do you assign default values during array destructuring?

//  You can assign default values in case the array doesn't have enough elements.

const colors = ['red'];

//  Destructuring with default values
const [primary = 'blue', secondary = 'green'] = colors;

console.log(primary);   // red (from array)
console.log(secondary); // green (default value used)



//! 4. What is object destructuring? Give an example using a person object.

//  Object destructuring allows you to extract values from an object and assign them to variables.

const person = {
  name: 'Farhan',
  age: 21,
  city: 'Mumbai'
};

//  Destructuring the object
const { name, age, city } = person;

console.log(name); // Farhan
console.log(age);  // 21
console.log(city); // Mumbai




//! 5. How can you rename variables while destructuring an object?

// You can rename variables by using the `key: newVariableName` syntax.

const user = {
  username: 'farhan_saiyed',
  email: 'farhan@example.com',
  location: 'India'
};

//  Destructuring with variable renaming
const { username: userName, email: userEmail, location: userLocation } = user;

console.log(userName);     // farhan_saiyed
console.log(userEmail);    // farhan@example.com
console.log(userLocation); // India



//! 6. What happens if a property doesn't exist while destructuring an object?

//  If the property doesn't exist in the object, the variable will be `undefined`.

const car = {
  brand: 'Tesla',
  model: 'Model 3'
};

//  Trying to destructure a missing property
const { brand, color } = car;

console.log(brand); // Tesla
console.log(color); // undefined (because 'color' doesn't exist in the object)

//  Tip: To avoid undefined, you can assign a default value during destructuring like this:
const { color = 'Black' } = car;
console.log(color);




//! 7. How do you destructure nested objects?

//  You can destructure nested objects by using the same structure as the object itself.

const user = {
  name: 'Farhan',
  address: {
    city: 'Mumbai',
    pin: 400001
  }
};

//  Destructuring nested object
const { address: { city, pin } } = user;

console.log(city); 
console.log(pin); 




//! 8. How do you use rest `...` operator with destructuring?

// The rest operator `...` collects the remaining elements or properties into a new array or object.

//  Example with arrays:
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...restNumbers] = numbers;

console.log(first);       // 1
console.log(second);      // 2
console.log(restNumbers); // [3, 4, 5]

// Example with objects:
const user = {
  id: 101,
  name: 'Farhan',
  age: 21,
  city: 'Mumbai'
};

const { name, ...restInfo } = user;

console.log(name);     // Farhan
console.log(restInfo); // { id: 101, age: 21, city: 'Mumbai' }




//! 9. Can you destructure function parameters? Show an example.

// Yes! You can destructure objects or arrays directly in function parameters.

const showUser = ({ name, age }) => {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
};

const user = {
  name: 'Farhan',
  age: 21,
  city: 'Mumbai'
};

//  Passing object directly to destructured function
showUser(user);





//! 10. How do you swap two variables using array destructuring?

// You can swap values of two variables easily using array destructuring.

let a = 5;
let b = 10;

console.log('Before Swap:', a, b); // 5 10

// Swapping using destructuring
[a, b] = [b, a];

console.log('After Swap:', a, b);  // 10 5








