console.log("conditional statements");

// if-statement (condition y/n)
// if(condition){
// code to be executed if the condition is true
//}

let result = 50;

if (result>40){
    console.log("You passed the exam!");
}

let result1 = 50;
let result2 = 50;

if(result1 == result2){
    console.log("The values are the same!");
}

// case 1: 5 == 5 -> true
// case 2: 5 == "5" -> true == compare the values
// case 3: 5 === "5" -> false === compare the value and datatype

//if-else statement
// if(condition){
// code to be executed if the condition is true
//}else{
// code to be executed if the condtion is false
//}

if(result>40){
    console.log("You passed the exam");
}else{
    console.log("You did not pass the exam");
}

let waterTemp = 105;

if(waterTemp >= 100){
    console.log("The water is boiling");
}else{
    console.log("The water is not boiling");
}


//else-if statement
// if(condition1){
// code to be executed if the condition1 is true
//}else if(condition2){
// code to be executed if the condition2 is true
//}else{
// code to be executed if the condtions are false
//}

function ageCalculator(){
    let age = prompt('Enter your age:');

    if(age<13){
        console.log("you are a child");
    }else if(age < 21){
        console.log("your are a teenager");
    }else if(age < 64){
        console.log("You are an adult");
    }else{
        console.log("You are a senior");
    }
}

// Challenge 1: Ticket price calculator

function ticketCalculator(){

    let age = prompt("Enter your age");
    let price = 0;

    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }

    document.getElementById("results").innerHTML="Your ticket price is " + price;
}


function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit="";
    const p = document.getElementById("results");

    if(tmp<15){
        outfit="Jacket";
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt";
    }

    p.innerHTML="You should wear: " + outfit;  
}

let action = prompt("choose an action: Jump or Run");

switch(action){
    case "J":
        console.log("Jump");
        break;
    case "R":
        console.log("Run");
        break;
    case "D":
        console.log("Defense");
        break;
    default:
        console.log("Unkown action");

}