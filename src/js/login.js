"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //Form för login
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", loginUser)
});

async function loginUser(e) {
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
            //gör postanrop login-route och skickar med user
            const response = await fetch("https://projekt-backend-1-3c57.onrender.com/authAPI/login",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(user)
                }
            );

            //om svaret ok
            if (response.ok) {
                const data = await response.json();
                //lagrar token som skickats med från anropet i localStorage
                localStorage.setItem("cv_token", data.response.token);
                //Dirigerar om till start-sidan
                window.location.href = "index.html";
            } else {
                throw error;
            }

        } catch (error) {
            //skriv ut felmeddelande till dom
            errorDiv.innerHTML = "Inaccurate username or password";
        }
    }

   

}