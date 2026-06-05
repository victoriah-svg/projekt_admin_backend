"use strict";


document.addEventListener("DOMContentLoaded", () => {
    //Form för register
    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", registerUser)


});

async function registerUser(e) {
    e.preventDefault();
    let errorMessages = []; //array för errors
    //Div för errors
    const errorDiv = document.getElementById("errorDivRegister");
    //tömmer errordiv mellan varje gång
    errorDiv.innerHTML = "";
    //Input element för username och password
    const usernameInput = document.getElementById("usernameRegister").value.trim().replace(/(<([^>]+)>)/ig, '');
    const passwordInput = document.getElementById("passwordRegister").value.trim().replace(/(<([^>]+)>)/ig, '');

    //Om username eller password inputs är tomma - skriv ut felmeddelande
    if (!usernameInput || !passwordInput) {
        errorMessages.push("You have to fill in username and password");
    } else if (usernameInput.length < 10 || passwordInput.length < 10) {
        //annars om username eller password är kortare än 10 karaktärer - skriv ut felmeddelande
        errorMessages.push("username and password must contain at least 10 characters");
    }

    // om error-arrayen innehåller något
    if (errorMessages.length > 0) {

        //loopar igenom arrayen och skriver ut varje felmeddelande
        errorMessages.forEach(error => {
            errorDiv.innerHTML += `<p>${error}</p>`;
        });
    } else {
        //Skapa objekt för användare 
        let user = {
            username: usernameInput,
            password: passwordInput
        }
        try {
            //hämta in token 
            const token = localStorage.getItem("cv_token");
            //div för att skriva ut meddelande när någon registrerats
            const messageEl = document.getElementById("registerMessage");
            messageEl.innerHTML = ""; //tömmer mellan varje omgång
            //gör postanrop register-route och skickar med user
            const response = await fetch("https://projekt-backend-1-3c57.onrender.com/authAPI/register",
                {
                    method: "POST",
                    headers: {
                        "authorization": "Bearer " + token,
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                }
            );

            //om svaret ok
            if (response.ok) {
                const data = await response.json();
                //Dirigerar om till login-sidan
               // window.location.href = "login.html";
               messageEl.innerHTML = `User registered! <a href="/"> Go to homepage</a>`;
            } else {
                throw error;
            }

        } catch (error) {
            //skriv ut felmeddelande till dom
            errorDiv.innerHTML = "Could not register account - please try again";
        }
    }



}