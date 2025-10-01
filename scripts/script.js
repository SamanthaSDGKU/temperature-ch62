console.log("Hello World from JS");

// Double slashes are for comments on a single line
/*
* This is a mulitple line comment
* And i can used it to describe a function or even a file
*/

//console.log("This is a comment");

//Variables and Constants
// keyword nameVar = value;
// var, let and const

//Data Types
//Strings (text), Numerical and Boolean
// Strings are defined with '' or ""
var firstName = "Luis";
let lastName = 'Renteria';

console.log(firstName);
console.log(lastName);

//Numbers
let myAge = 24;
let myHeight = 6.16;
let myAgeTwo = "24";

console.log(myAge);
console.log(myHeight);
console.log(myAgeTwo);

//Boolean - True or False
let isStudent = false;

// Display values in console 
// Concatenation
console.log("My name is: " + firstName + " " + lastName + ", I'm " + myAge + " years old, my size is: " + myHeight);

// Arithmetic Operations: + - / *
let num1 = 10;
let num2 = 2;

let sum = num1 + num2; //Addition -> +
let sub = num1 - num2; //Subtraction -> - (dash)
let mul = num1 * num2; //Multiplication -> * (astherisc)
let div = num1 / num2; //Division -> / (forward slash)

console.log("The sum is: " + sum); //12
console.log("The sub is: " + sub); //8
console.log("The mul is: " + mul); //20
console.log("The div is: " + div); //5