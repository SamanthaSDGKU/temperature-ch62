console.log("Loops");

// FOR
// for(start_point; condition ; interval)

// for(let i=1;i<=20;i++){
//     document.write(`<p>${i}<p>`);
// }

//from 1 to 20
// multiplication table
// const num = 3;
// document.write(`<h2>Table of ${num} </h2>`);
// for(let i=0;i<=10;i++){
//     document.write(`<p> ${num} x ${i} = ${num*i}</p>`);
// }


// for(let i=0;i<5;i++){
//     console.log("counter");
// }

// console.log("The code continues");

// WHILE LOOP
let i=2018; // start point

while(i<=2022){ // stop condition
    console.log(i);
    i++; // interval
}


// DO-WHILE LOOP
let j=10;//start point
do{
    console.log(j); 
    j++; // interval
}while(j<5) // stop condition


// Ex 1
for(let i=1;i<=10;i++){
    if(i==1){
        console.log("Gold medal");
    }else if(i==2){
        console.log("Silver medal");
    }else if(i==3){
        console.log("Bronze medal");
    }else{
        console.log(i);
    }
}


function fillThermo(){
    let thermo = document.getElementById("thermo");
    for(let i=0;i<10;i++){
        let level = document.createElement("div");
        level.classList.add("level");
        if(i<3){
            level.style.backgroundColor = "blue";
        }else if(i<7){
            level.style.backgroundColor = "orange";
        }else{
            level.style.backgroundColor="red";
        }
        thermo.appendChild(level);
    }
}

function generateTable(){
    let tbody = document.getElementById("temps");
    // calculation
    for(let c=1;c<=10;c++){
        let f = (c*(9/5)) + 32;
        tbody.innerHTML+=`
        <tr>
            <td>${c}</td>
            <td>${f}</td>
        <tr>`;
    }
}

generateTable();