/*here is going to be js code*/
console.log("functions");

// step 1. function declaration (creating a function)
function sayHello(){
    // body of the function
    console.log("Hello Cohort 62");
}

// step 2. call/trigger/run/execute the function (code, console, user action)
sayHello();

// Example #2 - with 1 parameter (input)
function greet(name){
    console.log("Hello " + name);// concatenation: join strings
}

greet("Kirt");
greet("Ashton");
greet("Tyler");

// Example #3 - with 2 parameters 
function greet2(fname,lname){
    console.log("Welcome to the system " + fname + " " + lname);
}

greet2("Micheal","Miller");

// Challenge 1: Double the Number
// Task:
// - Create a function called `doubleNumber` that takes one number as a parameter.
// - The function should display the number multiplied by 2.
// - Print the result when you call the function with 3 different numbers.

function doubleNumber(num1){
    let total = num1*2;
    console.log(total);
}

doubleNumber(3);
doubleNumber(4);


// Example #4 - with the prompt
function welcome(){
    let name = prompt("Enter your name:");
    console.log("Welcome " + name);
}
//trigger from the console

// Example #5 - with default parameters

function addNumbers(num1=0, num2=0){
    let total = num1 + num2;
    console.log(`The total is: ${total}`);
}

addNumbers(2,5);
addNumbers(5);
addNumbers();

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(firstName="Unknown",lastName="Unknown"){
    console.log(`${firstName} ${lastName}`);
}


combineNames("Alice","Johnson"); // Alice Johnson
combineNames("Alice");// Alice Unknown
combineNames(); // Unknown Unknown


// Challenge 3: Convert Minutes to Seconds
// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should return the number of seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

// function convertToSeconds(mins){
//     let sec = mins*60;
//     console.log(`${mins} min are ${sec}s`);
// }

// convertToSeconds(2);

function convertToSeconds(){
    let mins = Number(prompt("Enter the min"));
    let sec = mins*60;

    document.getElementById("results").innerHTML=`<p>${sec}</p>`;
}