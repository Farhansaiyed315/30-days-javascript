console.log("Array.js");

let FirstName = ["Farhan"]
console.log(typeof(FirstName));

//! Declare an array with more than 5 number of elements

let Five5 = [1, 2, 3, 4, 5 ]
console.log(Five5);

//! Get the first item, the middle item and the last item of the array
let Five = [0, 2, 4, 6, 8];

console.log("Length:", Five.length);
console.log("First item:", Five[0]);
console.log("Middle item:", Five[Math.floor(Five.length / 2)]);
console.log("Last item:", Five[Five.length - 1]);

//! Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [
    "Farhan",       
    22,     
    true,          
    null,           
    undefined,     
    { city: "Mumbai" },
    ["JS", "HTML"]  
  ];
  
  console.log("Array:", mixedDataTypes);
  console.log("Length of mixedDataTypes:", mixedDataTypes.length);
  
//! Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

//! Print the number of companies in the array
console.log("Number of companies:", itCompanies.length);


//! Print the first company, middle and last company

console.log("First company:", itCompanies[0]);


let middleIndex = Math.floor(itCompanies.length / 2);
console.log("Middle company:", itCompanies[middleIndex]);


console.log("Last company:", itCompanies[itCompanies.length - 1]);



//! Print out each company

itCompanies.forEach(function(company) {
    console.log(company);
  });
  

  //! Change each company name to uppercase one by one and print them out

  itCompanies.forEach(function(company) {
    console.log(company.toUpperCase());
  });


  //!  Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

  let sentence = itCompanies.join(", ") + " are big IT companies.";

console.log(sentence);

//! Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

let companyToSearch = "Google"; 


if (itCompanies.includes(companyToSearch)) {
  console.log(companyToSearch + " exists in the array.");
} else {
  console.log(companyToSearch + " is not found.");
}

  //!  Filter out companies which have more than one 'o' without the filter method.

  



let companiesWithMoreThanOneO = [];

// Loop through the companies
for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  
  // Count occurrences of 'o' in the company name
  let oCount = company.split('o').length - 1;
  
  // If the company has more than one 'o', add it to the result array
  if (oCount > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}

// Output the filtered companies
console.log(companiesWithMoreThanOneO);

//! Sort the array using sort() method.

itCompanies.sort();
console.log(itCompanies);

//! Reverse the array using reverse() method

itCompanies.reverse();
console.log(itCompanies);

//! Slice out the first 3 companies from the array

let firstThree = itCompanies.slice(0, 3);
console.log(firstThree);


//! Slice out the last 3 companies from the array
 let itCompanies1 = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];


let lastThree = itCompanies1.slice(-3);

console.log(lastThree);

//! Slice out the middle IT company or companies from the array

let middle = [];

let midIndex = Math.floor(itCompanies1.length / 2);



// Since the length is 7 (odd), we take 1 middle company
middle = itCompanies1.slice(midIndex, midIndex + 1);

console.log("Middle company:", middle);

//! Remove the first IT company from the array.

itCompanies.shift();
console.log(itCompanies);


//! Remove the middle IT company or companies from the array.

let midIndex1 = Math.floor(itCompanies.length / 2); // 3 for 7 items


itCompanies.splice(midIndex1, 1);

console.log(itCompanies);
//! Remove the last IT company from the array.

itCompanies.pop();
console.log(itCompanies);

//! Remove all IT companies

itCompanies = [];
console.log(itCompanies);



