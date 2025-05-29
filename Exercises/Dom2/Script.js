// Module 1: Creating an element
const newPara = document.createElement("p");
newPara.textContent = "✅ This paragraph was created using JS!";
newPara.style.color = "green";

// Module 2: Appending to body (or to a section)
const outputSection = document.getElementById("output-section");
outputSection.appendChild(newPara);

// Module 3: Creating multiple elements dynamically
const languages = ["JavaScript", "Python", "Java"];
const langList = document.createElement("ul");

languages.forEach(lang => {
  const li = document.createElement("li");
  li.textContent = `🔥 ${lang}`;
  langList.appendChild(li);
});

outputSection.appendChild(langList);

// Module 4: Removing a child element
const removeBtn = document.getElementById("removeBtn");
const myList = document.getElementById("myList");
const toRemove = document.getElementById("toRemove");

removeBtn.addEventListener("click", () => {
  // Use either method below
  // myList.removeChild(toRemove); // traditional
  toRemove.remove(); // modern & cleaner
});
