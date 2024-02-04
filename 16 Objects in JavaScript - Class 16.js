// Rubesh Raman
// 12115752
// Class 16 Assignment
// LPU
// javascript Objects
// Strings
console.log(typeof "Rubesh's Details");

let activity = 'Web Development'; // String.Prototype
// console.log(activity.toUpperCase()); // WEB DEVELOPMENT

// Avoid using reserved keywords as variable names
// let const = "hi"; // Incorrect usage

console.log("Rubesh, 21 years old".length);
console.log("Rubesh".charAt(2));

// Boolean (true-1, false-0)
// True value --> any value
// False value --> 0, false, '', NaN, undefined
console.log(typeof true);
console.log(typeof false);
console.log(typeof isNaN('five'));

/* if(1){
    console.log("Very True ! ")
} else{
    console.log("Very Wrong ! ")
} */

if ("Passionate Developer") {
    console.log("Very True");
} else {
    console.log("Very Wrong");
}

console.log("Rubesh's hobbies include Reading and Hiking".includes('e'));

// Null Undefined
let examScore;
let finalResult = null;

if (finalResult) {
    console.log("Very True");
} else {
    console.log("Very Wrong");
}

// OBJECT FILE

let person = {
    name: "Rubesh",
    age: 21,
    profession: "Student",
    university: "LPU",
    hobbies: ['Reading', 'Hiking'],
    interests: ['Web Development', 'CP/DP']
};

let selectedDetail = 'age';

// Accessing object properties
// console.log(person.profession);  // Student
// console.log(['age']); //[ 'age' ]
// console.log(person['hobbies']);  //[ 'Reading', 'Hiking' ]

// Dynamic property access
// console.log(person[selectedDetail]); // 21

// Modifying the object
console.log(person);
person.city = "Chennai";
// console.log(person);
/* 
{
  name: 'Rubesh',
  age: 21,
  profession: 'Student',
  university: 'LPU',
  hobbies: [ 'Reading', 'Hiking' ],
  interests: [ 'Web Development', 'CP/DP' ],
  city: 'Jalandhar'
  Country : 'India'
}
*/

console.log(typeof person.hobbies); // Object
console.log(typeof null); // Object

/*  
Primitive Data Types: Number, String, Boolean, Undefined
Reference Data Types: Object
*/
