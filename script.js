// Skapar variablar för åtkomst
// Knappar
const loginBtn = document.getElementById("loginBtn")
const logoutBtn = document.getElementById("logoutBtn")

//const finalCreateAccount = document.getElementById("finalCreateAccount")
const createAccountBtn = document.getElementById("createAccountBtn")
//Inputs
let userName = document.getElementById("userName")
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
let allUsers = JSON.parse(localStorage.getItem("loginInformation"));

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
console.log("Ls >", loginInformation)


// ---------FUNKTIONER----------

// LOGIN, checkar username och password
// om det stämmer överrense, byt div så att inloggad sidan visas 
// välkommna rätt user till sidan.
// Om det inte stämmer överrens, visa felmeddelande med rätt user försök
function getUserInfo(username, password) {

    const allUsers = JSON.parse(localStorage.getItem("loginInformation"));
    console.log('jdfasf', allUsers)

    for (i = 0; i < allUsers.length; i++) {
        if (username == allUsers[i].user && password == allUsers[i].password) {
            console.log("Found user:", username);
            userName = username;
            const allUsers = JSON.parse(localStorage.getItem("loginInformation"));
            //let convertedUser = JSON.parse(allUsers[i]);
            mySession = allUsers[i];
            localStorage.setItem("mySession", JSON.stringify(mySession));
            container.classList.add("formHidden")
            containerLoggedIn.classList.remove("formHidden")
            inloggad.innerHTML = `Du är inloggad som ${username}`
            return
        } else {
            felMeddelande.innerHTML = `${username} is not correct, or maybe its the password... who knows?`
        }
    }
}


function login() {
    let username = document.getElementById("userName").value
    let password = document.getElementById("passWord").value

    //console.log(mySession);
    user = getUserInfo(username, password);
    //console.log(getUserInfo);

}


// Skapar var för LS key, om den hittar user, skapa var för den=userObject
// om password stämmer överrens, tilldela user en ID
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
// pusha ny user, pass och id till befintlig array
function getCreateAccount() {
    console.log("checkar läget")
    if (newPass.value == newPassConfirm.value) {

        if (passwordRules()) {
            let loginInformation = JSON.parse(localStorage.getItem("loginInformation"));
            const user_exists = loginInformation.some(user => user.user === newUser.value);
            if (user_exists == false) {

                let newAccount = {
                    id: loginInformation.length + 1,
                    user: newUser.value,
                    password: newPass.value,
                };

                loginInformation.push(newAccount);
                localStorage.setItem("loginInformation", JSON.stringify(loginInformation))

                containerNewAccount.classList.add("formHidden")
                container.classList.remove("formHidden")
                alert('Sucess!! Time to log in!');


            } else (alert("This username is aleady taken"))
        } else { alert("Password has to be atleast 8 characters long!") }
    } else { alert("Password did not match, buuu") }
}


// Tillbaka knapp för att komma till 'logga in' sidan, från skapa konto sidan.
function getBackToHome() {
    let homepageCreateBtn = document.getElementById("homepageCreateBtn")
    let containerNewAccount = document.getElementById("containerNewAccount")
    containerNewAccount.classList.add("formHidden")
    container.classList.remove("formHidden")
}


//Regler för password,gör det simpelt med 8
passwordRules = () => {
    const pass = newPass.value;
    if (pass.length >= 8) { return true; }
}
// Checkar läget på storajjj
if (localStorage.getItem("mySession")) {
    localStorage.setItem("loginInformation", JSON.stringify(allUsers))
    console.log("hahha", allUsers);
    let userName = JSON.parse(localStorage.getItem("mySession"));
    console.log("LS mysession is found");
    container.classList.add("formHidden")
    containerLoggedIn.classList.remove("formHidden")
    inloggad.innerHTML = `Välkommen tillbaka ${userName.user}!`
} 
