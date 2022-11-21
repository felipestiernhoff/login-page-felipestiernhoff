console.log("hello");

let username = document.getElementById("username")
let password = document.getElementById("password")
let loginBtn = document.getElementById("loginBtn")


// KOLLA OM DET FINNS ETT NAMN,
// OM TRUE KALLA PÅ PRINT 
// OM FALSE KALLA PÅ UNKNOWN

loginBtn.addEventListener("click", () => {
    console.log(username.value)
    let userInput = username.value;
    localStorage.setItem("userName", username);
    printName()
});



/* 
loginBtn.addEventListener("click", () => {
    // FÅNGA SKRIVER NAMN OCH SPARA I LS
    let userInput = userInput.value;
    console.log("userInput i Event Listener", userInput);
    localStorage.setItem("userName", username);
    printName()
});
 */

function printName() {
    // HÄMTA NAMNET FRÅN LS OCH SKRIV UT PÅ SIDAN
    let userInput = localStorage.getItem("userInput");
}

function printError() {
    //SKRIV UT ATT DET EJ FINNS EN SÅN USER
}