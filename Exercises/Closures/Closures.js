console.log('Closures level one exercise page no 243 of notes pdf.');

//! Create a closure which has one inner function.
console.log('Question number 1 level one ......')

function outerFunction() {
  let name = "Farhan";

  function innerFunction() {
    console.log("Hello", name);  // this 'name' is from outerFunction
  }

  return innerFunction;
}

const greet = outerFunction(); // outerFunction khud ko nahi balki inner function ko return kr raha hai
                             //or you can say outer funciton is returning inner function innerFunction
greet(); 

