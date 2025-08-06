//! 1. What is a class in JavaScript? How is it different from a constructor function?

//! 2. Write a basic class named `Person` with a constructor that takes `name` and `age`, and a method `greet()` that logs "Hello, my name is <name>".

//! 3. What is the use of the `constructor()` method in a class?

//! 4. Explain how inheritance works in JavaScript using the `extends` keyword. Give an example.

//! 5. What is the role of the `super()` keyword in a subclass?

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
d.speak();

//! 7. What are getter and setter methods in classes? Create a simple example to demonstrate them.

//! 8. Can you define private fields in JavaScript classes? If yes, how?

//! 9. What is a static method in a class? How is it different from an instance method?

//! 10. Create a class `BankAccount` that has:
//! - a private balance field
//! - a method to `deposit(amount)`
//! - a method to `withdraw(amount)`
//! - a method to `checkBalance()`
