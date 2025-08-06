
//! 1. Use setInterval to print "Hello, World!" every 2 seconds in the console.

setInterval(() => {
  console.log("Hello, World!");
}, 2000); // 2000ms = 2 seconds









//! 2. Create a counter using setInterval that prints numbers from 1 to 5 with a 1-second delay between each.

let count = 1;
const interval1 = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(interval1);
  }
}, 1000);









//! 3. Use setInterval to update the time every second and display it in the console like a digital clock.

setInterval(() => {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  console.log("Current Time:", timeString);
}, 1000);








//! 4. Write code to change the background color of the body every 3 seconds using setInterval.

const colors = ["red", "green", "blue", "orange", "purple"];
let index = 0;
setInterval(() => {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}, 3000);








//! 5. Use setInterval to show a countdown from 10 to 0, then stop the interval when it reaches 0.

let countdown = 10;
const interval2 = setInterval(() => {
  console.log(countdown);
  countdown--;
  if (countdown < 0) {
    clearInterval(interval2);
    console.log("Countdown finished!");
  }
}, 1000);









//! 6. What is the difference between setTimeout and setInterval? Explain with a short example of both.

/*
  setTimeout: Runs the function once after the delay.
  setInterval: Repeats the function every delay interval.
*/

setTimeout(() => {
  console.log("This runs once after 2 seconds (setTimeout)");
}, 2000);

setInterval(() => {
  console.log("This runs every 2 seconds (setInterval)");
}, 2000);









//! 7. Create a function using setInterval that increases a number by 10 every second and stops when it reaches 100.

let value = 0;
const interval3 = setInterval(() => {
  value += 10;
  console.log("Value:", value);
  if (value >= 100) {
    clearInterval(interval3);
  }
}, 1000);









//! 8. Use setInterval to print the current date and time every 5 seconds.

setInterval(() => {
  const now = new Date();
  console.log("Date and Time:", now.toLocaleString());
}, 5000);








//! 9. Create a progress bar simulation using setInterval that fills from 0% to 100% in steps of 10% every second.

let progress = 0;
const interval4 = setInterval(() => {
  console.log(`Progress: ${progress}%`);
  progress += 10;
  if (progress > 100) {
    clearInterval(interval4);
    console.log("Progress complete.");
  }
}, 1000);







//! 10. Create a digital stopwatch using setInterval that starts counting when you call a function and stops when another function is called.

let stopwatchTime = 0;
let stopwatchInterval;

function startStopwatch() {
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    console.log("Stopwatch:", stopwatchTime, "seconds");
  }, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
  console.log("Stopwatch stopped.");
}

// Example usage:
// startStopwatch(); // starts the timer
// stopStopwatch();  // stops the timer (after a few seconds)
