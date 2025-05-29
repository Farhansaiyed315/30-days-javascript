
const title = document.getElementById("title");
const para = document.getElementById("para");
const inputBox = document.getElementById("inputBox");
const btnClick = document.getElementById("btnClick");
const addPara = document.getElementById("addPara");
const toggleMode = document.getElementById("toggleMode");
const box = document.getElementById("box");
const linkBox = document.getElementById("linkBox");


// Adding a click event listener to a button
btnClick.addEventListener("click", () => {
  alert("Button was clicked!");
});


// Creating and appending new paragraph dynamically
addPara.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added by JS.";
  document.body.appendChild(newPara);
});


// Setting attributes like href and target to an anchor tag
linkBox.setAttribute("href", "https://example.com");
linkBox.setAttribute("target", "_blank");
linkBox.textContent = "Go to Example.com";

// Directly assigning values to attributes
linkBox.id = "newLink";



// Adding and removing CSS classes
box.classList.add("highlight-box"); // Assuming class defined in CSS
box.classList.remove("highlight-box");

// Toggle theme using classList.toggle
window.addEventListener("DOMContentLoaded", () => {
  const toggleMode = document.getElementById("toggleMode");

  toggleMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});



// Difference between textContent (renders raw text) vs innerHTML (parses HTML)
para.textContent = "<b>This is textContent</b>"; // Shows as plain text
// para.innerHTML = "<b>This is innerHTML</b>"; // Uncomment to see bold text


// Change Font Size
title.style.fontSize = "28px";

// Change Background Color
box.style.backgroundColor = "skyblue";

// Change Text Color
para.style.color = "green";



