
//! 1. What is the difference between a Promise’s resolve, reject, and finally methods?

// resolve: used to indicate a successful completion of the promise
// reject: used to indicate an error or failure
// finally: runs after the promise is settled (either resolved or rejected)








//! 2. Write a function that returns a Promise which resolves after 2 seconds with the message "Hello after 2 seconds"

function delayHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello after 2 seconds");
    }, 2000);
  });
}

delayHello().then((msg) => console.log(msg));











//! 3. Explain the difference between .then() and .catch() in Promise chaining.

// .then(): handles successful result of the promise
// .catch(): handles any error that happens in the chain before it












//! 4. Convert the following callback-based code into Promise-based:

// Original code:
setTimeout(() => {
  console.log("Task completed");
}, 1000);

// Promise-based version:
function taskCompleted() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task completed");
    }, 1000);
  });
}

taskCompleted().then((msg) => console.log(msg));












//! 5. Create a function fetchUser() that returns a Promise. 
//!    If the user is found, resolve with user data, else reject with "User not found"

function fetchUser(id) {
  const users = {
    1: { name: "Farhan", age: 21 },
    2: { name: "Ali", age: 22 },
  };

  return new Promise((resolve, reject) => {
    if (users[id]) {
      resolve(users[id]);
    } else {
      reject("User not found");
    }
  });
}

fetchUser(1)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));











//! 6. What is Promise.all() and how does it behave if one promise fails?

// Promise.all() runs multiple promises in parallel and resolves when all are successful.
// If even one fails, it immediately rejects with that error.

const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.reject("Error in p3");

Promise.all([p1, p2])
  .then((res) => console.log("All passed:", res))
  .catch((err) => console.log("Error:", err));

Promise.all([p1, p2, p3])
  .then((res) => console.log(res))
  .catch((err) => console.log("Promise.all failed:", err));












//! 7. What will be the output of the following code?

Promise.resolve("First")
  .then(res => {
    console.log(res); // First
    return "Second";
  })
  .then(res => {
    throw new Error("Something went wrong");
  })
  .catch(err => {
    console.log("Caught:", err.message); // Caught: Something went wrong
  });









//! 8. Create a chained Promise that performs three async tasks in sequence. Log a message after each task.

function step1() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 1 done");
      res();
    }, 1000);
  });
}

function step2() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 2 done");
      res();
    }, 1000);
  });
}

function step3() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Step 3 done");
      res();
    }, 1000);
  });
}

step1()
  .then(() => step2())
  .then(() => step3())
  .then(() => console.log("All steps completed"));







//! 9. Explain the difference between Promise.all(), Promise.race(), and Promise.any() with examples.

// Promise.all(): waits for all promises to resolve, fails if any reject
// Promise.race(): resolves/rejects as soon as the first one settles
// Promise.any(): resolves when any one resolves, fails only if all reject

const a = new Promise((res) => setTimeout(() => res("A"), 1000));
const b = new Promise((res) => setTimeout(() => res("B"), 500));
const c = new Promise((_, rej) => setTimeout(() => rej("C failed"), 200));

Promise.all([a, b]).then(console.log);        // ["A", "B"]
Promise.race([a, b, c]).then(console.log);     // "B"
Promise.any([c, a]).then(console.log).catch(console.log); // "A"










//! 10. Why and when would you use async/await instead of plain Promises with .then()?

// async/await makes code cleaner, easier to read and debug
// especially useful when chaining multiple async calls

async function runSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log("Steps done using async/await");
  } catch (err) {
    console.log("Error:", err);
  }
}

runSteps();





//? ----------- finally------------ 


const pizzaOrder = new Promise((resolve, reject) => {
    resolve("Pizza delivered! ");
});

pizzaOrder
  .then((msg) => {
    console.log("Success:", msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Order process complete. ✅");
  });

// Output:
// Success: Pizza delivered! 
// Order process complete. 






const pizzaOrder = new Promise((resolve, reject) => {
    reject("Pizza store closed ");
});

pizzaOrder
  .then((msg) => {
    console.log("Success:", msg);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Order process complete. ");
  });

// Output:
// Error: Pizza store closed 
// Order process complete. 
