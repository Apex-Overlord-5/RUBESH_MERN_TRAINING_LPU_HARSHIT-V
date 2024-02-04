// Rubesh Raman
// 12115752
// Class 14 Assignment
// LPU
// Introduction to JavaScript
console.log("Print statement to the console_ Or an Output as per your Need");

// Syntax and Variable Declaration
var score = 69;
var result = "22"; // Represented as a string for illustration
const PI = 3.14;  // Can't be changed again

console.log(score);
console.log(result);
console.log(PI);

// Data Types

// 1. Number: let age = 25;
// 2. String: let name = "John";
// 3. Boolean: let isStudent = true;
// 4. Undefined: let x;
// 5. Null: let y = null;
// 6. Symbol: let sym = Symbol('description');
// 7. Object: let person = { name: "Rubesh", age: 21, isStudent: true };
// 8. Array: let numbers = [1, 2, 3, 4, 5];
// 9. Function: function add(a, b) { return a + b; }
// 10. Date: let currentDate = new Date();
// 11. RegExp: let pattern = /[a-z]+/;


// Using 'let' for Block Scoping
let newScore = 30;
let newResult = "10";

// BEDMAS Operations
let finalResult = newScore + parseInt(newResult); 
console.log(finalResult);

let penalty = newScore - parseInt(newResult); 
console.log(penalty);

console.log(typeof penalty);

let totalMatches = 5;
let averageScore = finalResult / totalMatches;
console.log(averageScore);
console.log(typeof averageScore);

let calculatedValue = ((finalResult ** 2) * 10 / (penalty + totalMatches))
console.log(calculatedValue);

let totalMatchesString = 'five';
let parsedTotalMatches = parseInt(totalMatchesString); 

if (!isNaN(parsedTotalMatches)) {
  console.log(calculatedValue);
} else {
  console.log("Invalid totalMatches value. Please provide a valid number.");
}
