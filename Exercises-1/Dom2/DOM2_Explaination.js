
//! MODULE 1: Creating an Element
// ==============================

// ✅ Theory:
// We use document.createElement() to create an element in memory.
// It’s not visible until we append it to the DOM.

const newPara = document.createElement("p"); // Create <p>
newPara.textContent = "✅ This paragraph was created using JavaScript!"; // Add text
newPara.style.color = "green";

// Log it to see how it looks in memory
console.log(newPara); // <p>✅ This paragraph was created using JavaScript!</p>


//! MODULE 2: Appending Child to a Parent Node
// ===========================================
// 

// ✅ Theory:
// To display the created element, we must append it to a parent like <body> or a <section>

const outputSection = document.getElementById("output-section"); // Target the section in HTML
outputSection.appendChild(newPara); // Now it appears on the screen


//! MODULE 3: Creating Multiple Elements Dynamically
// =============================================

// ✅ Theory:
// We often need to create lists from data (arrays). Use loops + createElement + appendChild

const languages = ["JavaScript", "Python", "Java"]; // Example data
const langList = document.createElement("ul"); // Create a <ul> list

languages.forEach(lang => {
    const li = document.createElement("li"); // Create <li> for each
    li.textContent = `🔥 ${lang}`; // Add text
    langList.appendChild(li); // Add <li> to <ul>
});

outputSection.appendChild(langList); // Show the <ul> on screen


//! MODULE 4: Removing a Child Element from a Parent Node
// ====================================================

// ✅ Theory:
// We can remove an element using parent.removeChild(child)
// Or just use element.remove() directly in modern JS

const removeBtn = document.getElementById("removeBtn"); // Button from HTML
const toRemove = document.getElementById("toRemove");   // <li> to remove

removeBtn.addEventListener("click", () => {
    // Option 1: Traditional way
    // const parent = document.getElementById("myList");
    // parent.removeChild(toRemove);

    // Option 2: Modern and simple
    toRemove.remove(); // Removes the element from DOM
});