//! ======================
//! Beginner DOM Concepts
//! ======================

//? window object. 

//! 1. What is the DOM?
// DOM = Document Object Model
// It's the structured representation of HTML elements that JavaScript can access and manipulate.





//! 2. Selecting Elements
const byId = document.getElementById("myId");
const byClass = document.getElementsByClassName("myClass");
const byTag = document.getElementsByTagName("div");
const byQuery = document.querySelector(".myClass"); // first match
const byQueryAll = document.querySelectorAll(".myClass"); // NodeList of all matches







//! 3. Reading & Changing Content
const el = document.getElementById("example");
console.log(el.textContent);  // includes hidden text
console.log(el.innerText);    // visible text only
console.log(el.innerHTML);    // returns HTML content
el.textContent = "New content";







//! 4. Changing Attributes
el.setAttribute("title", "Tooltip text");
el.getAttribute("title");
el.removeAttribute("title");






//! 5. Changing Styles
el.style.color = "red";
el.style.backgroundColor = "yellow";

el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
console.log(el.classList.contains("active")); // true or false







//! ============================
//! Intermediate DOM Concepts
//! ============================

//! 6. DOM Tree Navigation
console.log(el.parentElement);
console.log(el.children);
console.log(el.firstElementChild);
console.log(el.nextElementSibling);






//! 7. Creating & Inserting Elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv); // adds to end of body

const container = document.getElementById("container");
container.insertBefore(newDiv, container.firstElementChild);





//! 8. Removing Elements
newDiv.remove(); // modern way
// OR
// container.removeChild(newDiv);






//! 9. Event Listeners
const button = document.getElementById("myBtn");
button.addEventListener("click", () => {
  console.log("Button clicked");
});

button.addEventListener("mouseover", () => {
  console.log("Mouse hovered");
});






//! 10. Form Handling
const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = document.getElementById("nameInput").value;
  console.log("Form submitted with:", inputValue);
});






//! 11. Keyboard & Mouse Events
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

document.addEventListener("mousemove", (e) => {
  console.log("Mouse at:", e.clientX, e.clientY);
});






//! 12. Event Delegation
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});



//! ============================
//! Advanced DOM Concepts
//! ============================


//! 13. Debounce Function (Improves performance)
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

window.addEventListener("resize", debounce(() => {
  console.log("Resized window");
}, 500));






//! 14. Intersection Observer API
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element in view:", entry.target);
    }
  });
});
observer.observe(document.getElementById("lazyElement"));








//! 15. MutationObserver API
const targetNode = document.getElementById("observeTarget");
const config = { childList: true, subtree: true };

const mutationCallback = (mutationsList) => {
  console.log("DOM changed", mutationsList);
};

const mutationObserver = new MutationObserver(mutationCallback);
mutationObserver.observe(targetNode, config);







//! 16. Custom Events
const customEvent = new CustomEvent("myCustomEvent", {
  detail: { name: "Farhan" }
});
document.dispatchEvent(customEvent);

document.addEventListener("myCustomEvent", (e) => {
  console.log("Custom event received:", e.detail.name);
});







//! 17. DOMParser Example
const htmlString = "<div><p>Hello</p></div>";
const parser = new DOMParser();
const doc = parser.parseFromString(htmlString, "text/html");
console.log(doc.body.firstChild); // <div><p>Hello</p></div>


//! 18. Avoiding XSS with innerHTML
const userInput = "<img src='x' onerror='alert(1)'>";
document.getElementById("output").textContent = userInput; // safer than innerHTML










//! ============================
//! Bonus DOM Use Cases
//! ============================


//! 19. Media Control
const video = document.getElementById("myVideo");
video.play();
video.pause();
video.src = "video.mp4";








//! 20. Animating via JS
el.classList.add("animate"); // toggle CSS animation

el.animate([
  { transform: "scale(1)" },
  { transform: "scale(1.5)" }
], {
  duration: 500,
  iterations: 2
});






//! 21. Clipboard API
navigator.clipboard.writeText("Copied text")
  .then(() => console.log("Text copied"));






//! 22. Focus & Blur
const input = document.getElementById("myInput");
input.focus();  // brings focus to input
input.addEventListener("blur", () => {
  console.log("Input blurred");
});
