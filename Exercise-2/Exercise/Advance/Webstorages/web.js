//! 1. What is the difference between localStorage and sessionStorage? Give a small code example of both.

/*
localStorage: Data is stored with no expiration, even if the tab or browser is closed.
sessionStorage: Data lasts only until the tab or browser is closed.
*/

localStorage.setItem("username", "Farhan");
console.log("From localStorage:", localStorage.getItem("username")); // Farhan

sessionStorage.setItem("sessionID", "abc123");
console.log("From sessionStorage:", sessionStorage.getItem("sessionID")); // abc123

// Close tab/browser → sessionStorage data is gone, but localStorage data stays








//! 2. Write a function that stores a user's name in localStorage and then retrieves it.

function saveName(name) {
  localStorage.setItem("userName", name);
  console.log("Saved to localStorage");
}

function getName() {
  const storedName = localStorage.getItem("userName");
  console.log("Retrieved name:", storedName);
}

saveName("Farhan");
getName(); // Output: "Retrieved name: Farhan"








 //! 3. Use sessionStorage to save a counter value that increases every time the page is refreshed.
let count = sessionStorage.getItem("refreshCount");

if (!count) {
  count = 1;
} else {
  count = parseInt(count) + 1;
}
sessionStorage.setItem("refreshCount", count);
console.log("Page refreshed count:", count); // Refresh page to see it increase








//! 4. Create a logout button that clears all items from localStorage when clicked.
const logoutBtn = document.createElement("button");
logoutBtn.innerText = "Logout (Clear localStorage)";
logoutBtn.onclick = () => {
  localStorage.clear();
  console.log("User logged out, localStorage cleared");
};
document.body.appendChild(logoutBtn);







//! 5. Store a user object (with name and age) in localStorage and retrieve it using JSON.
const user = {
  name: "Farhan",
  age: 22
};

// Convert object to JSON string before storing
localStorage.setItem("userObject", JSON.stringify(user));

// Retrieve and convert back to object
const storedUser = JSON.parse(localStorage.getItem("userObject"));
console.log("User from localStorage:", storedUser); // { name: "Farhan", age: 22 }
