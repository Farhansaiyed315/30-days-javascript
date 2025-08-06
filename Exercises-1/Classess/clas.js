console.log('Classes level one exercise page no 212 of notes pdf.');

//! Create an Animal class. The class will have name, age, color, legs properties and create different methods


//  A method is just a function that lives inside a class or object.

//?   Difference:
//   Term	                                                 Meaning
//   Function	                            A reusable block of code (used anywhere).
//   Method                             	A function that’s inside an object or class.

// Aur clear bole toh Method bhi ek function hi ha bas fark itna hai ki yeh ek object ke andar rahta hai
// theek jaise aap apne ex ke yaado ke andar rehte ho so u are also a method.


console.log('Question number 1');

class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  // Method to describe the animal
  describe() {
    console.log(`${this.name} is ${this.age} years old, ${this.color}, and has ${this.legs} legs.`);
  }

  // Method to make sound 
  makeSound() {
    console.log(`${this.name} makes a sound of bhau`);
  }

  // Method to celebrate birthday 
  birthday() {
    this.age += 1;
    console.log(`${this.name} is now ${this.age} years old! 🎉`);
  }

  // Method to check if it's a 4-legged animal
  isFourLegged() {
    return this.legs === 4;
  }
}

const dog = new Animal("Dogesh bhai ", 3, "yellow", 4);
dog.describe();
dog.makeSound();
dog.birthday();
console.log(dog.isFourLegged());

//! Create a Dog and Cat child class from the Animal Class.
console.log('Question number 2');

// Base Class
class Animaljii {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  describe() {
    console.log(`${this.name} is ${this.age} years old, ${this.color}, and has ${this.legs} legs.`);
  }

  makeSound() {
    console.log(`${this.name} makes a sound 🐾`);
  }

  birthday() {
    this.age += 1;
    console.log(`${this.name} is now ${this.age} years old! 🎉`);
  }

  isFourLegged() {
    return this.legs === 4;
  }
}

//  Dog Class (child of Animal)
class Dog extends Animal {
  constructor(name, age, color) {
    super(name, age, color, 4); 
  }

  bark() {
    console.log(`${this.name} says: Bhau Bhau `);
  }
}

//  Cat Class (child of Animal)
class Cat extends Animaljii {
  constructor(name, age, color) {
    super(name, age, color, 4); 
  }

  meow() {
    console.log(`${this.name} says: Meow Meow!`);
  }
}


const dog1 = new Dog("Bada dogesh bhai ", 10, "black");
dog1.describe();    
dog1.bark();         
dog1.birthday();     

const cat1 = new Cat("Pookie", 4, "white");
cat1.describe();    
cat1.meow();       