//callback funktion
//intervaller - var försiktig, kan orsaka problem.

window.addEventListener('DOMContentLoaded', main);

let timeoutRef;

function main() {
//start på programmet. En main är en callback-funktion.

timeoutRef = setTimeout(changeBackgroundColor, 2000); //vad ska köras?
setupEventListeners();

}


function changeBackgroundColor() {
    document.body.style.background = getRandomColor();
}

function setupEventListeners () {
    const cancelTimoutbutton = document.getElementById("cancel");
    cancelTimoutbutton.addEventListener('click', cancelBackgroundChange);
    
const startIntervalButton = document.getElementById("start-interval");
startIntervalButton.addEventListener('click', startBackroundChangeInterval)

}   

function cancelBackgroundChange () {
    clearTimeout(timeoutRef);

}

function  startBackroundChangeInterval() {
    setInterval(changeBackgroundColor, 1000);
}

function getRandomColor() {

const value = Math.random();

if (value < 0.2) {
    return "blue";

} else if (value < 0.4) {
    return "red";
} else if (value < 0.6) {
    return "green";
} else if (value < 0.8) {
    return "grey";
} else {
    return "yellow";
}

 

}



/*
function printHello() {
    console.log("Hello Friends!")
}
*/

//console.log("Hello World");

//vad ska vi skriva, vilka ord är reserverade --> let, const, var,  function, if, else, array, for, while, do, switch, case, class
//date, alert, prompt
//"", !, 
//=, +=, -=, *=, /=,
//+, -, /, *, 
//||, &&,

//let number = 2 + 4;
//number +=10;

//console.log(number);

//console.log("Hello" === "hello");

//console.log(true);

//varför ska vi skicka 

//const username = "hanna";
/*const password = "1234"

const enteredUsername = "hanna"; //nu hårdkodar vi då sätter vi ett fast värde.
const enteredPassword = "1234";

function login() {
    if (username === enteredUsername && password === enteredPassword ) {
        console.log("Welcome " + enteredUsername);
    
    } else {
        console.log("Could not login");
    
    }
}



login();//


//skapa tydliga namn för framtiden, så du vet hur du kan okmma tillbaka. */