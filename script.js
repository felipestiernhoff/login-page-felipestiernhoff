const loginBtn = document.getElementById("loginBtn")
const userName = document.getElementById("userName")
const passWord = document.getElementById("passWord")
const logoutBtn = document.getElementById("logoutBtn")



/* 
if (localStorage.getItem("loggedIn")) {
    console.log("Är inloggad!")
    loggedInPage //variabeln för logged in page?
} else {
    console.log("Är inte inloggad!");
    localStorage.setItem("inloggad", "nej?")
    loggedOutPage //var för logget out page?
}

 */


/* function setLoggedMode() {
   document.body.classList = localStorage.getItem("inloggad")
   if (localStorage.getItem("user") === "janne"){
   }
   
} */



// Array för inlogs
let loginInformation = [
    {
        id: 1,
        username: "janne",
        password: "test",
    },
    {
        id: 2,
        username: "felipe",
        password: "haha",
    },
    {
        id: 3,
        username: "medie",
        password: "institutet",
    }
]

if (localStorage.setItem("user", loginInformation[0].username)) {
    console.log("Är inloggad!")
}


localStorage.setItem("loginInformation", JSON.stringify(loginInformation))
console.log("Localstorage is wokring", loginInformation)

// Login klick, checkar username och password

function getInfo() {
    let username = document.getElementById("userName").value
    let password = document.getElementById("passWord").value

    for (i = 0; i < loginInformation.length; i++) {
        if (username == loginInformation[i].username && password == loginInformation[i].password) {
            console.log(username + " is logged in")
            //Hämtar html ID
            let container = document.getElementById("container")
            let containerLoggedIn = document.getElementById("containerLoggedIn")
            let inloggad = document.getElementById("inloggad")
            localStorage.setItem("user", loginInformation[i].username);
            //Lägger till en class på div
            container.classList.add("formHidden")
            //Tar bort en class på annan div
            containerLoggedIn.classList.remove("formHidden")
            //Lägger till `` med ${} för att göra en string med var
            document.getElementById("inloggad").innerHTML = `Du är inloggad som ${username}`
            //Avslutar loop??
            return
        }
    }
    console.log("tyvärr blev något fel med inloggningen!");
    //alert("tyvärr blev något fel med inloggningen!")
    let felMeddelande = document.getElementById("felMeddelande")
    document.getElementById("felMeddelande").innerHTML = `${username} matchar inte lösenordet..Eller kanske inte finns, vem vet?`

}

function getLoggedOff() {

    let container = document.getElementById("container") // Login Page
    let containerLoggedIn = document.getElementById("containerLoggedIn") // Inloggad
    let felMeddelande = document.getElementById("felMeddelande")
    let userNameText = document.getElementById("userName")
    let passWordText = document.getElementById("userWord")

    container.classList.remove("formHidden")
    containerLoggedIn.classList.add("formHidden")
    felMeddelande.innerHTML = ""
    //userNameText.innerHTML = ""
    //passWordText.innerHTML = ""

}


function getNewAccount() {
    let createAccountBtn = document.getElementById("createAccountBtn")
    let container = document.getElementById("container")

    container.classList.add("formHidden")
    containerNewAccount.classList.remove("formHidden")
}

function getBackToHome() {
    let homepageCreateBtn = document.getElementById("homepageCreateBtn")
    let container = document.getElementById("container")
    let containerNewAccount = document.getElementById("containerNewAccount")
    containerNewAccount.classList.add("formHidden")
    container.classList.remove("formHidden")

}