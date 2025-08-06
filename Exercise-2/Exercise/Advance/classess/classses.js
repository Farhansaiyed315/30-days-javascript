

//! 1. What is a class in JavaScript? How is it different from a constructor function?

/*
A class in JavaScript is a blueprint for creating objects. 
It is a cleaner and more modern syntax introduced in ES6 to work with objects and inheritance.

You can define a class using the `class` keyword. Inside it, you define a `constructor` for initialization and methods for behavior.

Before classes, constructor functions were used to do the same thing using function syntax and prototypes.

Difference between class and constructor function:
- Syntax: Classes use cleaner and more readable syntax.
- Classes are not hoisted like function constructors.
- In classes, methods are automatically added to the prototype.
*/

// Class syntax
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello, I'm " + this.name);
  }
}

const p1 = new Person("Farhan");
p1.greet(); // Hello, I'm Farhan

// Constructor function way (older)
function PersonFn(name) {
  this.name = name;
}

PersonFn.prototype.greet = function () {
  console.log("Hello, I'm " + this.name);
};

const p2 = new PersonFn("Farhan");
p2.greet(); // Hello, I'm Farhan










//! 2. Write a basic class named `Person` with a constructor that takes `name` and `age`, and a method `greet()` that logs "Hello, my name is <name>".

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Farhan", 21);
person1.greet(); // Hello, my name is Farhan












//! 3. What is the use of the `constructor()` method in a class?

/*
The `constructor()` is a special method in a JavaScript class that gets called automatically 
when a new object is created using the `new` keyword.

Its main purpose is to initialize the object’s properties.

Only one `constructor()` is allowed per class, and if you don’t define one, 
JavaScript adds a default empty constructor behind the scenes.
*/

// Example:
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  showDetails() {
    console.log(`${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Tesla", "Model 3");
car1.showDetails(); // Tesla Model 3













//! 4. Explain how inheritance works in JavaScript using the `extends` keyword. Give an example.

/*
In JavaScript, `extends` is used to create a subclass (child class) that inherits
properties and methods from another class (parent class).

This allows code reuse — the child class can use or override the methods of the parent class.
To call the parent class’s constructor inside the child class, we use `super()`.
*/

// Example:
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const d1 = new Dog("Tommy");
d1.speak(); // Tommy barks.

/*
Explanation:
- `Dog` extends `Animal`, so it inherits everything from `Animal`.
- The `Dog` class overrides the `speak()` method with its own version.
*/










//! 5. What is the role of the `super()` keyword in a subclass?

/*
The `super()` keyword is used in a subclass to call the constructor or methods 
of its parent class.

In a subclass’s constructor, you **must** call `super()` before using `this`, 
or you'll get an error.

It’s useful for initializing the parent class’s properties and for reusing its behavior.
*/

// Example:
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // calls Parent's constructor
    this.age = age;
  }

  info() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

const child1 = new Child("Farhan", 21);
child1.info(); // Farhan is 21 years old.












//! 6. What will be the output of the following code and why?

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

let d = new Dog('Tommy');
d.speak(); // ?

/*
Output:
Tommy barks.

Why?
- The `Dog` class extends the `Animal` class and overrides the `speak()` method.
- When `d.speak()` is called, JavaScript uses the method defined in the `Dog` class (not the parent).
- So instead of calling `Animal`'s `speak()`, it uses `Dog`'s version.

This is an example of **method overriding** in class inheritance.
*/












//! 7. What are getter and setter methods in classes? Create a simple example to demonstrate them.

/*
Getter and setter methods allow you to define custom behavior when getting or setting a property value.

- `get` lets you access a property like it's a variable, but it actually runs a function.
- `set` lets you define what happens when someone tries to set a property value.

They’re useful for data validation, formatting, and keeping properties private.
*/

// Example:
class User {
  constructor(name) {
    this._name = name; // underscore to mark it as "internal"
  }

  get name() {
    return this._name.toUpperCase(); // custom behavior on get
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}

const u1 = new User("farhan");
console.log(u1.name); // FARHAN (uppercase because of getter)

u1.name = "ali";
console.log(u1.name); // ALI









//! 8. Can you define private fields in JavaScript classes? If yes, how?

/*
Yes, you can define truly private fields in JavaScript classes using the `#` syntax (introduced in ES2020).

Private fields:
- Can only be accessed inside the class.
- Cannot be accessed or modified directly from outside.
- Are not visible even if you try to log the object.

This is useful for strong encapsulation and data protection.
*/

// Example:
class BankAccount {
  #balance = 0; // private field

  constructor(startingBalance) {
    this.#balance = startingBalance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // 1500

console.log(myAccount.#balance); //  SyntaxError: Private field '#balance' must be declared in an enclosing class











//! 9. What is a static method in a class? How is it different from an instance method?

/*
A static method is a method that belongs to the class itself, not to instances of the class.

To define it, use the `static` keyword.

Difference:
- Static methods are called on the class, not on the object created from the class.
- Instance methods need an object (instance) to be called.

Static methods are usually used for utility/helper functions related to the class.
*/

// Example:
class MathUtils {
  static square(x) {
    return x * x;
  }

  cube(x) {
    return x * x * x;
  }
}

console.log(MathUtils.square(4)); // 16 (called on class)
// console.log(MathUtils.cube(3)); // ❌ Error: cube is not a static method

const utils = new MathUtils();
console.log(utils.cube(3)); // 27 (called on instance)











//! 10. Create a class `BankAccount` that has:
//! - a private balance field
//! - a method to `deposit(amount)`
//! - a method to `withdraw(amount)`
//! - a method to `checkBalance()`

class BankAccount {
  #balance = 0; // private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}`);
    } else {
      console.log("Deposit must be greater than 0");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}`);
    } else {
      console.log("Insufficient balance or invalid amount");
    }
  }

  checkBalance() {
    console.log(`Current balance: ₹${this.#balance}`);
  }
}

// Usage
const myAcc = new BankAccount(1000);
myAcc.deposit(500);      // Deposited ₹500
myAcc.withdraw(300);     // Withdrew ₹300
myAcc.checkBalance();    // Current balance: ₹1200

// console.log(myAcc.#balance); //  Error: private field can't be accessed directly



