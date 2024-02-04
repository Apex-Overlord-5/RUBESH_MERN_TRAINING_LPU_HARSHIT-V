// Rubesh Raman
// 12115752
// Class 17 Assignment
// LPU
// 17 javascript Functions
//# Scoping
function testing() {
    var abc = 20; // Function-scoped variable
    let def = 100; // Block-scoped variable
    console.log(abc); // Output: 20

    // Block scope
    if (1) {
        var xyz = 'block scoped'; // 'var' is not block-scoped
        console.log('Inside If', xyz);
        console.log(abc);
    }
    console.log('Outside if', xyz);
}

testing(); // Calling a function

var globalName = 'Rubesh'; // Global variable
let globalYear = 2020; // Global variable

function test() {
    console.log(globalName); // Output: Rubesh
    console.log(globalYear); // Output: 2020
}

test();

//# Function Declaration and Function Expression

//# Hoisting
myFunc(); // Function declaration is hoisted

// Function expression
let myFunc2 = function () {
    console.log('Inside myFunc2: function expression');
}

console.log(myFunc2); // Output: [Function: myFunc2]
// myFunc2(); // This would result in an error since myFunc2 is a variable and not hoisted before this line

function myFunc() {
    console.log('Inside myFunc Declaration');
}

console.log(myFunc); // Output: [Function: myFunc]

console.log(undefinedVariable); // Output: undefined, as the variable is hoisted but not initialized yet

var undefinedVariable = 'Mrudula'; // Hoisted but not initialized yet

function name() {
    console.log('Hello');
}

console.log(name); // Output: [Function: name]
// name(); // This would result in an error since name is a variable and not hoisted before this line

//# Arrow Functions - ES6 Feature 
// 'this' - context 

let arrowFunc = () => {
    console.log('Arrow Function Created by Rubesh');
    console.log(this); // 'this' in arrow functions refers to the enclosing context (lexical scoping)
}

arrowFunc();

let funcExp = function () {
    console.log('Function Expression Created by Rubesh');
    console.log(this); // 'this' in regular functions depends on how they are called
}

funcExp();

let newFun = name => console.log(name); // Arrow function with a single argument

newFun('Rubesh'); // Output: Rubesh
