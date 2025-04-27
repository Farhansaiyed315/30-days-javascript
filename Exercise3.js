const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Step 1: Clean the sentence (remove special characters)
let cleanedSentence = sentence.replace(/[^a-zA-Z0-9\s]/g, "").toLowerCase();

// Step 2: Split the sentence into words
let words = cleanedSentence.split(/\s+/);

// Step 3: Count the frequency of each word (exclude single-letter words)
let wordFrequency = {};
words.forEach(word => {
  if (word.length > 1) { // Only count words with more than 1 letter
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
  }
});

// Step 4: Find the most frequent word
let mostFrequentWord = '';
let maxCount = 0;

for (let word in wordFrequency) {
  if (wordFrequency[word] > maxCount) {
    mostFrequentWord = word;
    maxCount = wordFrequency[word];
  }
}

console.log('Most frequent word:', mostFrequentWord);
console.log('Frequency:', maxCount);



const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

// Step 1: Extract all numbers from the string
let numbers = text.match(/\d+/g).map(Number);  // \d+ matches numbers and .map(Number) converts them to actual numbers

// Step 2: Calculate the monthly income and then convert it to annual
let monthlySalary = numbers[0];  // 5000 (monthly salary)
let monthlyCoursesIncome = numbers[2];  // 15000 (monthly online courses income)
let annualBonus = numbers[1];  // 10000 (annual bonus)

// Step 3: Calculate total annual income
let annualIncome = (monthlySalary + monthlyCoursesIncome) * 12 + annualBonus;

console.log('Total Annual Income:', annualIncome);
