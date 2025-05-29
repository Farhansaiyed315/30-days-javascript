// ==============================
// Module 1: Basic DOM Selection
const title = document.getElementById("title");
const para = document.getElementById("para");
const inputBox = document.getElementById("inputBox");
const btnClick = document.getElementById("btnClick");
const addPara = document.getElementById("addPara");
const toggleMode = document.getElementById("toggleMode");
const box = document.getElementById("box");
const linkBox = document.getElementById("linkBox");
const dynamicContent = document.getElementById("dynamicContent");

// ==============================
// Module 2: Handling Events
btnClick.addEventListener("click", () => {
  alert("Button was clicked!");
});

// ==============================
// Module 3: Adding Elements
addPara.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added by JS.";
  document.body.appendChild(newPara);
});

// ==============================
// Module 4: Adding Attribute using setAttribute()
linkBox.setAttribute("href", "https://example.com");
linkBox.setAttribute("target", "_blank");
linkBox.textContent = "Go to Example.com";

// ==============================
// Module 5: Adding Attribute without setAttribute()
linkBox.id = "newLink";

// ==============================
// Module 6: classList add/remove/toggle
// Add a highlight class to the box
box.classList.add("highlight-box");

// Remove highlight after 2 seconds (for demo)
setTimeout(() => {
  box.classList.remove("highlight-box");
}, 2000);

// Toggle dark mode on body on button click
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ==============================
// Module 7: Text Content vs innerHTML
para.textContent = "<b>This is textContent (shows tags as text)</b>";
// Uncomment next line to see innerHTML effect
// para.innerHTML = "<b>This is innerHTML (renders bold)</b>";

// ==============================
// Module 8: Adding Style with JavaScript
title.style.fontSize = "28px";
box.style.backgroundColor = "skyblue";
para.style.color = "green";

// ==============================
// Module 9: Adding class using classList
box.classList.add("bordered", "shadowed");

// ==============================
// Module 10: Removing class using classList.remove
// Remove shadowed class after 3 seconds (for demo)
setTimeout(() => {
  box.classList.remove("shadowed");
}, 3000);

// ==============================
// Module 11: Adding Text to HTML element using textContent
const message = document.createElement("p");
message.textContent = "This is added using textContent";
dynamicContent.appendChild(message);

// ==============================
// Module 12: Adding Text Content using innerHTML
const htmlPara = document.createElement("p");
htmlPara.innerHTML = "<i>This is italic text using innerHTML</i>";
dynamicContent.appendChild(htmlPara);

// ==============================
// Module 13: Text Content (plain text)
const plainText = document.createElement("p");
plainText.textContent = "This is plain text.";
dynamicContent.appendChild(plainText);

// ==============================
// Module 14: Inner HTML (HTML content)
const htmlContent = document.createElement("div");
htmlContent.innerHTML = "<strong>This is bold text using innerHTML</strong>";
dynamicContent.appendChild(htmlContent);

// ==============================
// Module 15: Adding Style Font Size
title.style.fontSize = "30px";

// ==============================
// Module 16: Adding Style Background Color & Color
title.style.backgroundColor = "#f0f0f0";
title.style.color = "blue";
