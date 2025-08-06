
//! 1. What is error handling in JavaScript and why is it important?

// Error handling in JavaScript means managing mistakes or unexpected issues
// that happen while the code is running (e.g., undefined variables, server errors, etc.)

// JavaScript provides tools like `try...catch` to handle these errors gracefully.

try {
  let result = x + 5; //  x is not defined
} catch (error) {
  console.log("Something went wrong: " + error.message);
}

//! Why is Error Handling Important?

// 1. Prevents app crashes – Keeps your app running smoothly even if errors occur.
// 2. Improves user experience – Shows user-friendly messages instead of ugly errors.
// 3. Makes debugging easier – Helps find out what went wrong and where.
// 4. Helps control app flow – You can decide what happens next after an error.
// 5. Increases security – Prevents exposing sensitive system info to users.

//!  Real-life Example:

try {
  loginUser(email, password);
} catch (error) {
  alert("Login failed. Please try again later.");
}

// In this example, even if the login fails, the app doesn't crash,
// and the user sees a helpful message instead.



//! 2. What is the purpose of the try...catch block in JavaScript?

// The `try...catch` block is used to handle errors in JavaScript during runtime.
// It allows us to "try" running a block of code, and "catch" any error that occurs,
// so that the app doesn't crash and can handle the error smoothly.

//!  Syntax:
try {
  // Code that might throw an error
} catch (error) {
  // Code to handle the error
}

//!  Example:
try {
  let result = 10 / x; //  x is not defined
} catch (err) {
  console.log("Error caught:", err.message); // Output: Error caught: x is not defined
}






//! 2. What is the purpose of the try...catch block in JavaScript?
//! Purpose of try...catch:

// 1. Prevents app from crashing when an error occurs.
// 2. Allows you to handle errors gracefully (e.g., show a message to the user).
// 3. Helps in debugging by logging or displaying error info.
// 4. Keeps code clean and readable when dealing with risky operations (like APIs, user input, etc.).
// 5. Makes your program more reliable and professional.

//! Real-world Example:

try {
  JSON.parse("invalid json string"); //  Throws error
} catch (e) {
  console.log("Invalid data format:", e.message);
}

// Output: Invalid data format: Unexpected token i in JSON at position 0




//! 3. What happens if an error occurs inside a try block?

// If an error occurs inside a `try` block:
// 1. The code inside the `try` block **immediately stops** executing at the point of error.
// 2. JavaScript **jumps to the `catch` block**.
// 3. The error object is passed to the `catch` block for handling.

//! 🔹 Example:

try {
  console.log("Start");
  let result = x + 10; //  x is not defined (ReferenceError)
  console.log("This will not run"); //  Skipped due to error
} catch (error) {
  console.log("Caught an error:", error.message);
}

// Output:
// Start
// Caught an error: x is not defined

//! 🔹 Summary:
// - Only the code before the error runs.
// - The rest of the try block is skipped.
// - The catch block runs if an error is thrown.
// - If no error, catch block is ignored.




//! 4. How do you catch and display the error message?

// You catch and display the error message using the `try...catch` block.
// The error object passed to the `catch` block contains useful properties,
// and `.message` gives the actual error message.

//! 🔹 Syntax:
try {
  // Code that may throw an error
} catch (error) {
  console.log(error.message); // Displays the error message
}

//! 🔹 Example:

try {
  let a = b + 10; //  b is not defined (ReferenceError)
} catch (err) {
  console.log("Error caught:", err.message);
}

// Output:
// Error caught: b is not defined

//! 🔹 You can also log the full error (for debugging):
// console.log(err); → shows the whole error object with stack trace.




//! 5. What is the role of the finally block in try...catch...finally?

// The `finally` block is optional and always runs **after** the `try` and `catch` blocks,
// no matter what happens — whether there was an error or not.

// It is usually used for **cleanup tasks** like closing files, stopping loaders,
// disconnecting from servers, etc.

//! 🔹 Syntax:

try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that always runs (success or error)
}

//! 🔹 Example:

try {
  let x = 5;
  let y = x + z; //  z is not defined
} catch (err) {
  console.log("Caught an error:", err.message);
} finally {
  console.log("This always runs.");
}

// Output:
// Caught an error: z is not defined
// This always runs.

//!  Summary:
// - `finally` runs whether an error occurs or not.
// - Useful for things that must happen no matter what.
// - It doesn't catch errors, just ensures final code is executed.




//! 6. Can you use try...catch for asynchronous code like fetch or setTimeout?

//  Yes, but it depends on how you're handling async code.

//! 🔹 1. For `fetch` or other async functions (with `async/await`):
// You CAN use try...catch directly.

async function getData() {
  try {
    const res = await fetch("https://api.example.com/data");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch error:", error.message);
  }
}

//! 🔹 2. For `setTimeout` (or other callback-based async code):
// You CANNOT catch errors with try...catch **outside** the async call.
// Use try...catch **inside** the callback instead.

try {
  setTimeout(() => {
    //  This error won’t be caught by the outer try...catch
    throw new Error("Timeout error");
  }, 1000);
} catch (error) {
  console.log("Caught:", error.message); //  Won’t work
}

//!  Correct way — wrap the error handling inside the async function:

setTimeout(() => {
  try {
    throw new Error("Timeout error");
  } catch (err) {
    console.log("Caught inside setTimeout:", err.message); // Works
  }
}, 1000);

//!  Summary:

// - Use try...catch with `async/await`




//! 7. How do you throw a custom error in JavaScript?

// You can throw a custom error in JavaScript using the `throw` keyword.
// It lets you manually create and send an error when something is wrong in your logic.

//! 🔹 Syntax:
throw new Error("Custom error message");

// You can also throw strings or other values, but using `Error` is best practice.

//! 🔹 Example:

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero ");
  }
  return a / b;
}

try {
  console.log(divide(10, 0));
} catch (err) {
  console.log("Caught custom error:", err.message);
}

// Output:
// Caught custom error: Cannot divide by zero 

//! 🔹 You can even create custom error types:
class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

throw new MyCustomError("Something custom went wrong!");


//!  Summary:
// - Use `throw new Error("message")` to throw custom errors.
// - Helps make your code more readable, controlled, and debuggable.
// - Combine with `try...catch` to handle these errors gracefully.






//! 8. What type of objects can be thrown using the throw statement?

// In JavaScript, you can throw **any type of object or value** using the `throw` statement.
// But best practice is to throw `Error` objects for better debugging and consistency.

//! 🔹 You can throw:

// 1. Error objects (Recommended)
throw new Error("Something went wrong");

// 2. Custom error types (by extending Error) 
class MyError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyError";
  }
}
throw new MyError("This is a custom error");

// 3. Strings  (Not recommended)
throw "This is a string error";

// 4. Numbers 
throw 404;

// 5. Boolean values 
throw false;

// 6. Objects 
throw { message: "Something broke", code: 123 };

//! Why only `Error` is recommended:
// - `Error` objects include helpful info: name, message, stack trace
// - Makes error handling consistent and easier to debug
// - Non-Error throws (like strings/numbers) give less useful info

//!  Best practice:
try {
  throw new Error("Invalid input");
} catch (err) {
  console.log(err.name);     // Error
  console.log(err.message);  // Invalid input
}




//! 9. How does JavaScript handle syntax errors vs runtime errors?

//! 🔹 Syntax Errors:
// - Happen when the code has incorrect syntax (wrong structure).
// - Detected by the JavaScript engine before the code runs.
// - Example: missing parentheses, unmatched brackets, typos in keywords.

try {
  eval("if (true { console.log('Oops') }"); // Incorrect syntax
} catch (err) {
  console.log("Syntax Error:", err.message);
}

// Output: Syntax Error: Unexpected token '{'

//! 🔹 Runtime Errors:
// - Happen while the code is running.
// - Code syntax is valid, but something goes wrong during execution.
// - Example: accessing undefined variables, dividing by zero, failed fetch, etc.

try {
  let result = x + 5; //  x is not defined
} catch (err) {
  console.log("Runtime Error:", err.message);
}

// Output: Runtime Error: x is not defined

//!  Key Differences:

// Syntax Errors:
// - Caught at compile/parse time (before code runs)
// - Entire script might fail to execute
// - Must be fixed to run the code at all

// Runtime Errors:
// - Occur during code execution
// - Can be caught using try...catch
// - Only the part with the error is skipped; rest of the code may still run

//!  Summary:
// - Syntax Errors → Detected before execution → Can't be caught with try...catch directly
// - Runtime Errors → Detected during execution → Can be caught with try...catch



//! 10. How do you create and use a custom Error class in JavaScript?

// You can create a custom error by creating a class that extends the built-in `Error` class.
// This lets you define your own error types with custom names, messages, and even extra data.

//! 🔹 Syntax: Custom Error Class

class MyCustomError extends Error {
  constructor(message) {
    super(message);        // Call the parent Error constructor
    this.name = "MyCustomError"; // Set a custom name (optional but recommended)
  }
}

//! 🔹 Example: Using the Custom Error

function withdraw(amount) {
  if (amount > 1000) {
    throw new MyCustomError("Withdrawal limit exceeded ");
  }
  return `Withdrawn ₹${amount}`;
}

try {
  console.log(withdraw(1500));
} catch (error) {
  console.log("Caught:", error.name);     // MyCustomError
  console.log("Message:", error.message); // Withdrawal limit exceeded 
}

//! 🔹 You can also add custom properties if needed

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

throw new ValidationError("Invalid email format", "email");


//!  Summary:
// - Extend `Error` class to create your own custom errors
// - Set a custom `name` for better debugging
// - Throw and catch them like normal errors
// - Useful for clean, modular error handling in apps