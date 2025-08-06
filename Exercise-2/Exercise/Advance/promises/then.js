




// .then() is used with Promises in JavaScript to handle the result when the promise is successful (resolved).

// Think of a Promise like ordering something online:
// You order a phone (Promise).
// If it arrives successfully (resolved),
// then you open the box and use the phone — this is where .then() comes in.

// In other words, .then() lets you specify what should happen after a Promise completes successfully.




// | Term        | Meaning                      |
// | ----------- | ---------------------------- |
// | `resolve()` | Promise successful           |
// | `reject()`  | Promise failed               |
// | `.then()`   | Runs after success (resolve) |
// | `.catch()`  | Runs after failure (reject)  |







const PromiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if (!error) {
            resolve({ username: "Farhan", email: "email.com" });
        } else {
            reject(`ERROR: Something went wrong`);
        }
    }, 1000);
});

PromiseFour
.then((user) => {
    console.log(user); // Logs the whole user object
    return user.username; // Accessing the username property
})
.then((username) => {
    console.log(username); // Logs just the username
})
.catch(function(error) {
    console.log(error); // Catches and logs any error
});







orderPizza
  .then((message) => {
    console.log(message); // "Pizza is here!"
    return "Now eating 🍴";
  })
  .then((nextStep) => {
    console.log(nextStep); // "Now eating 🍴"
  });




  const doMath = new Promise((resolve, reject) => {
    resolve(10); // start with 10
});

doMath
  .then((num) => {
    console.log("Starting with:", num); // 10
    return num * 2;
  })
  .then((result) => {
    console.log("After multiply by 2:", result); // 20
    return result + 5;
  })
  .then((finalResult) => {
    console.log("After adding 5:", finalResult); // 25
  })
  .catch((err) => {
    console.log("Error happened:", err);
  });







//!  reject.

  new Promise((resolve, reject) => {
  resolve(5);
})
  .then((num) => {
    console.log(num); // 5
    return num * 2;
  })
  .then((num) => {
    console.log(num); // 10
    throw new Error("Something went wrong! 😢");
  })
  .then((num) => {
    console.log(num); // This won't run
  })
  .catch((error) => {
    console.log("Caught error:", error.message);
  });








  //! Q1: What is .then() in JavaScript?

// .then() is used with Promises to handle the result when the Promise is successfully resolved.
const promise = new Promise((resolve, reject) => {
    resolve("Data loaded successfully ✅");
});

promise.then((message) => {
    console.log(message); // Output: Data loaded successfully ✅
});














//! Q2: How to chain multiple .then() methods?

const number = new Promise((resolve, reject) => {
    resolve(5);
});

number
  .then((num) => {
    return num * 2; // 10
  })
  .then((result) => {
    return result + 3; // 13
  })
  .then((finalResult) => {
    console.log("Final result:", finalResult); // Output: Final result: 13
  });














//! Q3: How does .then() handle asynchronous operations?

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Fetched data after 1 second ⏳");
    }, 1000);
});

fetchData.then((data) => {
    console.log(data); // Output after 1 sec: Fetched data after 1 second ⏳
});















//! Q4: What happens if an error occurs in a .then() chain?

new Promise((resolve, reject) => {
    resolve("Start");
})
  .then((msg) => {
    console.log(msg); // Start
    throw new Error("Something broke 💥");
  })
  .then(() => {
    console.log("This won't run");
  })
  .catch((err) => {
    console.log("Caught error:", err.message); // Output: Caught error: Something broke 💥
  });













  

//! Q5: Can .then() return another Promise?

function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: "Farhan" });
        }, 1000);
    });
}

getUser()
  .then((user) => {
    console.log("User fetched:", user); // Output: { username: 'Farhan' }
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Loading dashboard...");
        }, 1000);
    });
  })
  .then((msg) => {
    console.log(msg); // Output after another 1 sec: Loading dashboard...
  });
