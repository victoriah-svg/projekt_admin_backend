"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //Form för login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", loginUser)
});

function loginUser(e) {
    e.preventDefault();
    let errorMessages = []; //array för errors
    //Div för errors
    const errorDiv = document.getElementById("errorDivLogin");
    //tömmer errordiv mellan varje gång
    errorDiv.innerHTML = "";
    //Input element för username och password
    const usernameInput = document.getElementById("usernameLogin").value.trim().replace(/(<([^>]+)>)/ig, '');
    const passwordInput = document.getElementById("passwordLogin").value.trim().replace(/(<([^>]+)>)/ig, '');

    //Om username eller password inputs är tomma - skriv ut felmeddelande
    if (!usernameInput || !passwordInput) {
        errorMessages.push("You have to fill in username and password");
    }else if(usernameInput.length <10 || passwordInput.length <10){
        //annars om username eller password är kortare än 10 karaktärer - skriv ut felmeddelande
        errorMessages.push("username and password must contain at least 10 characters");
    }

    // om error-arrayen innehåller något
    if (errorMessages.length > 0) {

        //loopar igenom arrayen och skriver ut varje felmeddelande
        errorMessages.forEach(error => {
            errorDiv.innerHTML += `<p>${error}</p>`;
        });
    }

    console.log(usernameInput, passwordInput)

}