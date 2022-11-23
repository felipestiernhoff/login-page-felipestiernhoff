const loginBtn = document.getElementById("loginBtn")
const userName = document.getElementById("userName")
const passWord = document.getElementById("passWord")
const logoutBtn = document.getElementById("logoutBtn")

let loginInformation = [
    {
        username: "janne",
        password: "test",
    },
    {
        username: "felipe",
        password: "haha",
    },
    {
        username: "medie",
        password: "institutet",
    }
]

function getInfo() {
    let username = document.getElementById("userName").value
    let password = document.getElementById("passWord").value

    //console.log("your username is " + username + ", And your password is " + password);
    for (i = 0; i < loginInformation.length; i++) {
        if (username == loginInformation[i].username && password == loginInformation[i].password) {
            console.log(username + " is logged in")
            let container = document.getElementById("container")
            let containerLogin = document.getElementById("containerLogin")
            let inloggad = document.getElementById("inloggad")
            container.classList.add("formHidden")
            containerLogin.classList.remove("formHidden")
            document.getElementById("inloggad").innerHTML = `Du är inloggad som ${username}`
            return
        }
    }
    console.log("tyvärr blev något fel med inloggningen!");
    // let felMeddelande = document.getElementById("felMeddelande")
    // document.getElementById("felMeddelande").innerHTML = `${username} existerar inte!`
    // ---BUG---: Försöker få in felmeddelande, se issues.
}

function getLoggedOff() {
    let container = document.getElementById("container")
    let containerLogin = document.getElementById("containerLogin")
    container.classList.remove("formHidden")
    containerLogin.classList.add("formHidden")

} 
