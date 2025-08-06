// A Promise is just a placeholder for a value that we will get in the future (usually from something async like API calls, setTimeout, etc.).

// Promise has 3 states:

// Pending – The task is still running.

// Resolved (Fulfilled) – The task completed successfully.

// Rejected – The task failed.


//! code explaination
// You created a new Promise and saved it to PromiseOne.
// Inside the promise, there’s a setTimeout() for 2 seconds.
// After 2 secs, it logs Async is completed and calls resolve(), which means the promise is successful.

const PromiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async is completed');
        resolve(); // resolve the promise after 2 seconds
    }, 2000);
});



//! code explaination

// You're consuming the promise using .then(), which runs after the promise is resolved.
// So, after 2 seconds:

PromiseOne.then(function () {
    console.log("Promise consumed");
});



//! code explaination

// Again, a promise that runs a task after 2 seconds.
// Logs Async task two, then resolves.
// Then .then() logs Async two resolved.

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task two");
        resolve();
    }, 2000);
})
.then(function() {
    console.log("Async two resolved");
 });



//! code explaination
// This one resolves after 3 seconds.
// It sends back a user object with username and email.

promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Farhan', email: 'Email@example.com' })
    }, 3000);
});


//! code explaination

// It checks if error is false. If yes, it resolves with a user object.
// If error is true, it rejects with an error message.

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false; // Change this to true to test error
        if (!error) {
            resolve({ username: "Farhan", password: "8001902" });
        } else {
            reject("Error something went wrong");
        }
    }, 3000);
});



//! code explaination

// First .then() logs the full object, then sends username to the next .then()
// Second .then() logs the username.

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    }).finally(() => console.log("The promise is either resolved or rejected.")
    )