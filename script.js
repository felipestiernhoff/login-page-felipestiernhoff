// Skapar variablar för åtkomst
// Knappar
const loginBtn = document.getElementById("loginBtn")
const logoutBtn = document.getElementById("logoutBtn")

//const finalCreateAccount = document.getElementById("finalCreateAccount")
const createAccountBtn = document.getElementById("createAccountBtn")
//Inputs
const userName = document.getElementById("userName")
const passWord = document.getElementById("passWord")
const newUser = document.getElementById("newUser")
const newPass = document.getElementById("newPass")
const newPassConfirm = document.getElementById("newPassConfirm")

// Pages
const container = document.getElementById("container")
const containerLoggedIn = document.getElementById("containerLoggedIn")
const containerNewAccount = document.getElementById("containerNewAccount")
// Messages
const felMeddelande = document.getElementById("felMeddelande")
const inloggad = document.getElementById("inloggad")
//Global var
let userid;


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

/* if () {
    let lastname = localStorage.getItem(key);
}
 */
// Array för inlogs
let loginInformation = [
    {
        id: 1,
        user: "janne",
        password: "test",
    },
    {
        id: 2,
        user: "felipe",
        password: "haha",
    },
    {
        id: 3,
        user: "medie",
        password: "institutet",
    }
];

localStorage.setItem("loginInformation", JSON.stringify(loginInformation))
console.log("Ls is created!", loginInformation)

// FUNKTIONER

// Login klick, checkar username och password
// om det stämmer överrense, byt div så att inloggad sidan visas 
// välkommna rätt user till sidan.
// Om det inte stämmer överrens, visa felmeddelande med rätt user


function getInfo() {
    if (verification()) {
        let username = document.getElementById("userName").value
        let password = document.getElementById("passWord").value
        let mySession = loginInformation[userid];
        for (i = 0; i < loginInformation.length; i++) {
            if (username == loginInformation[i].user && password == loginInformation[i].password) {
                console.log(username + " is logged in")
                const loginInformation = JSON.parse(localStorage.getItem("loginInformation"));
                let mySession = loginInformation[userid];
                localStorage.setItem("mySession", JSON.stringify(mySession));
                localStorage.setItem("user", loginInformation[i].user);
                container.classList.add("formHidden")
                containerLoggedIn.classList.remove("formHidden")
                inloggad.innerHTML = `Du är inloggad som ${username}`
                return
            }
        }
    }

    console.log("felmeddelande");
    //felMeddelande.innerHTML = `${username} matchar inte lösenordet..Eller kanske inte finns, vem vet?`

}



verification = () => {
    const loginInformation = JSON.parse(localStorage.getItem("loginInformation"));
    const userObject = loginInformation.find(user => { return user.user === userName.value });
    if (userObject == undefined) { alert('Username is not in use') }
    if (userObject.password === passWord.value) {
        userid = userObject.id - 1;
        console.log(userid);
        return true;
    }
}




// Logout klick, se till att clear LS?
// just nu gör den ingenting förutom att ändra div till inloggad sidan...
// och tar bort eventuellt felmeddelande
// Vill få in så att den rensar både input fälten vid utlogg.

function getLoggedOff() {
    container.classList.remove("formHidden")
    containerLoggedIn.classList.add("formHidden")
    felMeddelande.innerHTML = ""
    userName.innerHTML = ""
    passWord.innerHTML = ""
    localStorage.removeItem("mySession");

}

// CreateAcc klick, öppnar skapa konto formulär, inget spec.
function getNewAccount() {
    container.classList.add("formHidden")
    containerNewAccount.classList.remove("formHidden")
}

// FinalCreateAcc, skapar ett konto, kollar värden på user/pass
// kollar så att den inte krockar med befintlig user.
// få in LS?
// pusha ny user, pass och id till befintlig array
// 

function getCreateAccount() {
    console.log("checkar läget")
    if (newPass.value == newPassConfirm.value) {

        if (passwordRules()) {
            let loginInformation = JSON.parse(localStorage.getItem("loginInformation"));
            const user_exists = loginInformation.some(user => user.user === newUser.value);
            if (user_exists == false) {

                let new_account = {
                    id: loginInformation.length + 1,
                    user: newUser.value,
                    password: newPass.value,
                };

                loginInformation.push(new_account);
                localStorage.setItem("loginInformation", JSON.stringify(loginInformation))

                containerNewAccount.classList.add("formHidden")
                container.classList.remove("formHidden")
                alert('account created, please try logging in');


            } else (alert("this username is aleady taken"))
        } else { alert("password is invalid") }
    } else { alert("password did not match, buuu") }
}


// Tillbaka knapp för att komma till 'logga in' sidan.
function getBackToHome() {
    let homepageCreateBtn = document.getElementById("homepageCreateBtn")
    let containerNewAccount = document.getElementById("containerNewAccount")
    containerNewAccount.classList.add("formHidden")
    container.classList.remove("formHidden")

}



//Regler för password
//gör det simpelt med 8
passwordRules = () => {
    const pass = newPass.value;
    if (pass.length >= 8) { return true; }
}

// Checkar läget på storajjj

if (localStorage.getItem("mySession")) {
    let userName = JSON.parse(localStorage.getItem("mySession"));
    console.log("LS mysession is found");
    container.classList.add("formHidden")
    containerLoggedIn.classList.remove("formHidden")
    inloggad.innerHTML = `Du är inloggad som ${userName.user}`

} 