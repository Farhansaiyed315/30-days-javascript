
//! 1. Use setTimeout to print "Welcome to JavaScript" after a 3-second delay.

setTimeout(() => {
  console.log("Welcome to JavaScript");
}, 3000); // 3000 ms = 3 seconds










//! 2. Write a function that prints "Task completed" after 5 seconds using setTimeout.

function completeTask() {
  setTimeout(() => {
    console.log("Task completed");
  }, 5000); // 5000 ms = 5 seconds
}
completeTask(); // Call the function










//! 3. Show a message in the console after 2 seconds, then clear the timeout before it runs.

const timeoutId = setTimeout(() => {
  console.log("This will NOT be shown");
}, 2000);

clearTimeout(timeoutId); // Cancels the above timeout immediately











//! 4. Use setTimeout in a loop to print numbers 1 to 5, each after i seconds (i.e., 1 after 1s, 2 after 2s, ...)

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000); // delay increases with i
}











//! 5. Explain the difference between setTimeout and setInterval using a short example.

/*
  setTimeout: Executes a function ONCE after a delay.
  setInterval: Executes a function REPEATEDLY after every interval.
*/

// setTimeout example
setTimeout(() => {
  console.log("This runs once after 2 seconds (setTimeout)");
}, 2000);

// setInterval example
setInterval(() => {
  console.log("This runs every 2 seconds (setInterval)");
}, 2000);







//?         clearTimeout

//! 1. Create a setTimeout that prints "Loading..." after 3 seconds, but cancel it using clearTimeout.

const loadingTimeout = setTimeout(() => {
  console.log("Loading...");
}, 3000);

clearTimeout(loadingTimeout); // Timeout is cancelled before it runs










//! 2. Declare a timeout that shows "Session expired" after 10 seconds.
//!    Add a button that cancels the timeout when clicked.

const sessionTimeout = setTimeout(() => {
  console.log("Session expired");
}, 10000);

const cancelButton = document.createElement("button");
cancelButton.innerText = "Cancel Session Timeout";
cancelButton.onclick = () => {
  clearTimeout(sessionTimeout);
  console.log("Session timeout cancelled");
};
document.body.appendChild(cancelButton);











//! 3. Set a timeout to show "Auto-save done" after 5 seconds.
//!    Also create a reset button that clears the timeout and starts a new one.

let autoSaveTimeout;

function startAutoSave() {
  autoSaveTimeout = setTimeout(() => {
    console.log("Auto-save done");
  }, 5000);
}

startAutoSave(); // start once initially

const resetButton = document.createElement("button");
resetButton.innerText = "Reset Auto-Save Timer";
resetButton.onclick = () => {
  clearTimeout(autoSaveTimeout);
  console.log("Auto-save timer reset");
  startAutoSave(); // restart timer
};
document.body.appendChild(resetButton);










//! 4. What happens if you call clearTimeout() with an invalid ID? Try it and log the result.

clearTimeout(999); // No error, but nothing happens
console.log("Cleared invalid timeout ID (no effect)"); // still runs without crashing













//! 5. Explain the difference between setTimeout and clearTimeout with a working example.

/*
  setTimeout schedules a task to run after a delay.
  clearTimeout cancels it before it runs.
*/
const exampleTimeout = setTimeout(() => {
  console.log("This will not run");
}, 4000);

clearTimeout(exampleTimeout); // Cancel before execution
console.log("Timeout was cleared before it executed");
