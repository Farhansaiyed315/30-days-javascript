
//! If u want to see the effects of this modules visit home.html,styles.css and srcript.js  from home.html open liveserver or just click the browser icon on the top right side of ur vs code (if u are using vs code.

//? Note this codes will not run on script.js file you dont see any output on terminal (u will only see ---> //!ReferenceError: document is not defined)

//! ✅ Module 1: Basic DOM Selection
// ==============================
// 🎯 Theory: The DOM (Document Object Model) is a structure browsers use to represent your HTML page as objects.
// To work with elements dynamically, you need to select them first. It’s like picking a specific part of your webpage to work on.
// Methods like getElementById grab an element by its unique ID quickly and easily.

// Example code:
const title = document.getElementById("title");
const para = document.getElementById("para");
const inputBox = document.getElementById("inputBox");
const btnClick = document.getElementById("btnClick");
const addPara = document.getElementById("addPara");
const toggleMode = document.getElementById("toggleMode");
const box = document.getElementById("box");
const linkBox = document.getElementById("linkBox");

//? 💡 Insight: Use IDs for unique elements because getElementById is super fast and direct. For selecting multiple similar elements, use classes with querySelectorAll.


//! ✅ Module 2: Handling Events
// ==============================
// 🎯 Theory: Events are how users interact with your page — like clicks, scrolls, typing, etc.
// JavaScript listens for these events and reacts. addEventListener is the tool to “listen” for these events and run code when they happen.
// This makes your page interactive and dynamic.

// Example code:
btnClick.addEventListener("click", () => {
  alert("Button was clicked!");
});

//? 💡 Insight: Always use addEventListener instead of inline event handlers (like onclick="...") for cleaner and scalable code.

//! ✅ Module 3: Adding Elements
// ==============================
// 🎯 Theory: You can dynamically add new elements (like paragraphs, divs, images) using JavaScript.
// This means your page can grow and change after it loads, making it interactive and personalized.
// createElement makes a new tag, and appendChild adds it to the page.

// Example code:
addPara.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = "This is a new paragraph added by JS.";
  document.body.appendChild(newPara);
});

//? 💡 Insight: When adding elements, always set their content or attributes before appending for better performance and cleaner code.



//! ✅ Module 4: Adding Attribute using setAttribute()
// ==============================
// 🎯 Theory: Attributes are extra info on HTML elements (like href on links, src on images).
// setAttribute lets you add or change these attributes dynamically with JavaScript.
// This is useful when you want to update elements on the fly.

// Example code:
linkBox.setAttribute("href", "https://example.com");
linkBox.setAttribute("target", "_blank");
linkBox.textContent = "Go to Example.com";

//? 💡 Insight: setAttribute is the standard way to work with any attribute, even custom ones that don’t have direct properties.


//! ✅ Module 5: Adding Attribute without setAttribute()
// ==============================
// 🎯 Theory: Sometimes, you can directly change attributes as properties on the element.
// For example, element.id or element.src can be set directly.
// This is often simpler and faster but only works for standard attributes.

// Example code:
linkBox.id = "newLink";

//?💡 Insight: Use direct property assignment for common attributes. Use setAttribute when you’re not sure or for custom attributes.


//! ✅ Module 6: classList add/remove/toggle
// ==============================
// 🎯 Theory: CSS classes control the style of elements.
// classList API helps you add, remove, or toggle classes easily via JavaScript, so you can change styles dynamically.
// toggle is great for things like dark mode or showing/hiding elements.

// Example code:
// Add a class to the box element
box.classList.add("highlight-box");

// Remove a class from the box element
box.classList.remove("highlight-box");

// Toggle dark mode on body element on button click
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

//? 💡 Insight: Using classList is better than manipulating the className string manually — it’s cleaner and avoids bugs.


// ==============================
//! ✅ Module 7: Text Content vs innerHTML
// ==============================
// 🎯 Theory: 
// textContent sets or gets plain text inside an element — it treats everything as text, so HTML tags show as text.
// innerHTML can set or get HTML inside an element — so you can add tags that get rendered as HTML.
// Use textContent when you want safe plain text, innerHTML when you want to add HTML structures.

// Example code:
para.textContent = "<b>This is textContent</b>"; // shows tags as plain text
// para.innerHTML = "<b>This is innerHTML</b>"; // uncomment to see bold text

//? 💡 Insight: Be careful with innerHTML to avoid XSS (security risks) if you use user input.

// ==============================
//! ✅ Module 8: Adding Style with JavaScript
// ==============================
// 🎯 Theory: You can change element styles dynamically using the style property.
// It allows you to directly modify CSS properties like fontSize, backgroundColor, and color.
// This makes the page look different based on events or conditions.

// Example code:
// Change font size of title
title.style.fontSize = "28px";
// Change background color of box
box.style.backgroundColor = "skyblue";
// Change text color of paragraph
para.style.color = "green";

//? 💡 Insight: Use camelCase for CSS properties in JavaScript (e.g., backgroundColor instead of background-color).


//! ✅ Module 9: Adding class using classList
// ==============================
// 🎯 Theory: You can add multiple CSS classes to elements using classList.add.
// This is great for reusing styles and combining effects.
// Multiple classes allow for more flexible and maintainable styling.

// Example code:
box.classList.add("bordered", "shadowed"); // adds two classes at once

//? 💡 Insight: Adding multiple classes is cleaner than setting className with a long string, avoiding accidental overwrites.




//! ✅ Module 10: Removing class using classList.remove
// ==============================
// 🎯 Theory:
// Just like you can add classes, you can remove any unwanted classes from an element using classList.remove.
// This helps change the look or behavior by turning off styles when needed.

// Example code:
box.classList.remove("shadowed");

//? 💡 Insight: Removing classes dynamically is useful for toggling visibility, animations, or themes.



//! ✅ Module 11: Adding Text to HTML element
// ==============================
// 🎯 Theory:
// You can create new elements and add plain text using textContent.
// This is safe and simple for showing text content without HTML formatting.

// Example code:
const message = document.createElement("p");
message.textContent = "This is added using textContent";
document.body.appendChild(message);

//? 💡 Insight: Use textContent if you want to prevent HTML tags from rendering and just show text as-is.


//! ✅ Module 12: Adding Text Content using innerHTML
// ==============================
// 🎯 Theory:
// innerHTML allows adding content that includes HTML tags.
// You can create rich content like bold, italic, links, etc., inside your elements dynamically.

// Example code:
const htmlPara = document.createElement("p");
htmlPara.innerHTML = "<i>This is italic text using innerHTML</i>";
document.body.appendChild(htmlPara);

//? 💡 Insight: innerHTML is powerful but be careful to avoid injecting unsafe code (XSS attacks) especially when content comes from users.



//! ✅ Module 13: Text Content
// ==============================
// 🎯 Theory:
// textContent is used to get or set the plain text inside an element.
// It displays exactly what you type, without interpreting HTML tags.
// Perfect for showing safe, unformatted text.

// Example code:
const plainText = document.createElement("p");
plainText.textContent = "This is plain text.";
document.body.appendChild(plainText);

//? 💡 Insight: textContent is fast and secure — ideal for user-generated content where you don’t want HTML tags to run.


//! ✅ Module 14: Inner HTML
// ==============================
// 🎯 Theory:
// innerHTML lets you get or set the HTML content inside an element.
// You can add formatted text, images, links, and more by including HTML tags.
// This makes your page dynamic and visually rich.

// Example code:
const htmlContent = document.createElement("div");
htmlContent.innerHTML = "<strong>This is bold text using innerHTML</strong>";
document.body.appendChild(htmlContent);

//? 💡 Insight: innerHTML updates the whole content of an element, so be mindful if you want to keep existing child elements.


//! ✅ Module 15: Adding Style Font Size
// ==============================
// 🎯 Theory:
// You can change font size of elements by modifying the style.fontSize property.
// It supports any CSS unit like px, em, rem, %, etc.
// Useful for dynamically adjusting text size based on user interaction or screen size.

// Example code:
title.style.fontSize = "30px";

//? 💡 Insight: Use relative units like em or rem when possible for better accessibility and responsiveness.


//! ✅ Module 16: Adding Style Background Color & Color
// ==============================
// 🎯 Theory:
// JavaScript can change background color and text color of elements by modifying style.backgroundColor and style.color.
// This helps to highlight, theme, or customize page elements dynamically.

// Example code:
title.style.backgroundColor = "#f0f0f0";
title.style.color = "blue";

//? 💡 Insight: Use colors that maintain good contrast for readability and accessibility.
