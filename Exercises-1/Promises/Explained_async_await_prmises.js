// A Promise is like a future contract. JS promises to do something and either gives you the result (resolve) or gives you an error (reject).

// setTimeout(..., 3000) runs the function after 3 seconds (simulating a delay, like calling an API).

// error = true: You manually decide if it should "fail" or "pass" just for learning.

// If error = false → It calls resolve() and sends back an object with username & password.

// If error = true → It calls reject() and sends an error message "Error 404".

const promisememe = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;  // change this to false Then you’ll see the resolved data instead of an error.
        if (!error) {
            resolve({ username: "Farhan saiyed", password: "8001902" });
        } else {
            reject("Error 404 ");
        }
    }, 3000);
});

// If the promise gets rejected (because error = true), this function will throw an error and crash because there’s no error handling.

async function consumePromisememe() {
    const response = await promisememe;
    console.log(response);
}
consumePromisememe();


// async means: this function will work with promises.
// await promisememe pauses the function until the promise finishes (either resolves or rejects).
// try { ... } catch { ... } is used to handle errors nicely.
// If the promise resolves → it logs the data.
// If the promise rejects → it goes into catch and logs the error.

async function consumePromisememe() {
    try {
        const response = await promisememe;  
        console.log(response);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}
consumePromisememe();


// What is fetch()?
// It’s a built-in function to call APIs and get data.
// It returns a Promise (so we use await here).

async function getAllUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        console.log(response);
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E:", error);
    }
}
getAllUser()



// Step by Step:

// 1. const response = await fetch(...)
// Waits for the network call to finish.
// response contains metadata like status, headers, etc. (not the actual data yet).

//2.const data = await response.json()
// Converts raw response into usable JSON format.
// data now contains an array of users.

//3. console.log(data)
// Shows the actual users' data from the API.