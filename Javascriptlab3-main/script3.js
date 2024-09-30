const marks = [85, 97, 44, 37, 76, 60];

// Calculating the sum of marks
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);

// Calculating the average
const averageMarks = totalMarks / marks.length;

console.log(averageMarks);  // Output: 66.5

const prices = [250, 645, 300, 900, 50];

// Applying 10% discount on each item
const discountedPrices = prices.map(price => price - (price * 0.1));

console.log(discountedPrices);  // Output: [225, 580.5, 270, 810, 45]

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Removing the first company from the array
companies.shift();

// b. Removing "Uber" and add "Ola" in its place
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
  companies.splice(uberIndex, 1, "Ola");
}

// c. Adding "Amazon" at the end
companies.push("Amazon");

console.log(companies);
// Output: ["Microsoft", "Ola", "Google", "IBM", "Netflix", "Amazon"]
