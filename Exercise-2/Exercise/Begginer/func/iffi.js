
//! 31. Create an IIFE that prints "Welcome to JavaScript".

(function() {
    console.log("Welcome to JavaScript");
})();


//! 32. Demonstrate the difference between function declaration and function expression.







//! 33. Create an object with a method that uses `this` to access its own property.

const person = {
    name: "Farhan",
    greet: function() {
        console.log("Hi, my name is " + this.name);
    }
};

person.greet(); 





//! 34. Create an object with a method that prints the full name using `this`.

const user = {
    firstName: "Farhan",
    lastName: "Saiyed",
    getFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
};

user.getFullName();


