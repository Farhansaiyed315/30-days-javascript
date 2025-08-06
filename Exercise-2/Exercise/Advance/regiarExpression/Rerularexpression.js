
//! 1. Write a regular expression to check if a string is a valid Indian phone number.
//!    It should be 10 digits and start with 6, 7, 8, or 9.
//!    Example: "9876543210"


const phone = "9876543210";
const phoneRegex = /^[6-9][0-9]{9}$/;
console.log("Phone valid:", phoneRegex.test(phone)); // true









//! 2. Write a regular expression to validate if a string is a proper email address.
//!    Example: "user123@example.com"


const email = "user123@example.com";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
console.log("Email valid:", emailRegex.test(email)); // true










//! 3. Write a regular expression to remove all spaces from a string using .replace().
//!    Input: "Hello World" => Output: "HelloWorld"


const str = "Hello World";
const noSpaces = str.replace(/\s+/g, '');
console.log("Without spaces:", noSpaces); // HelloWorld









//! 4. Write a regular expression to validate a strong password.
//!    Conditions: At least 8 characters, one uppercase letter, one lowercase letter,
//!    one number, and one special character.


const password = "Aa1@abcd";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
console.log("Strong password:", passwordRegex.test(password)); // true









//! 5. Write a regular expression to extract all numbers from a string using .match().
//!    Example: "The price is 250 and the discount is 15" => ["250", "15"]


const text = "The price is 250 and the discount is 15";
const numbers = text.match(/\d+/g);
console.log("Extracted numbers:", numbers); // ["250", "15"]










 //! 6. Write a regular expression to check if a string contains only alphabets (A-Z, a-z).
 //!    Example: "HelloWorld" => true, "Hello123" => false


const name = "HelloWorld";
const alphaRegex = /^[A-Za-z]+$/;
console.log("Only alphabets:", alphaRegex.test(name)); // true









//! 7. Write a regular expression to match dates in the format DD/MM/YYYY.
//!    Example: "14/07/2025"


const date = "14/07/2025";
const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
console.log("Valid date:", dateRegex.test(date)); // true










//! 8. Write a regular expression to find duplicate consecutive words in a sentence.
//!    Example: "this is is a test" => match "is is"


const sentence = "this is is a test";
const duplicateWordRegex = /\b(\w+)\s+\1\b/;
console.log("Has duplicate word:", duplicateWordRegex.test(sentence)); // true












//! 9. Write a regular expression to validate a username.
//!    Conditions: Should start with a letter, can contain letters, numbers, underscores,
//!    and must be between 4 and 12 characters.


const username = "user_123";
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{3,11}$/;
console.log("Valid username:", usernameRegex.test(username)); // true








//! 10. Write a regular expression to replace all vowels in a string with an asterisk (*).
//!     Example: "JavaScript is fun" => "J*v*Scr*pt *s f*n"


const input = "JavaScript is fun";
const replaced = input.replace(/[aeiou]/gi, '*');
console.log("Replaced vowels:", replaced); // J*v*Scr*pt *s f*n
