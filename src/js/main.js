"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //anropar funktion som ändrar logga in länk i menyn
    changeNavLink();
});

//ändra meny mellan login/ log out
function changeNavLink() {
//li-element i nav för login
const loginLink = document.getElementById("loginLink");
const registerLink = document.getElementById("registerLink");

//om token finns i localStorage - användare inloggad - ändra till logout i meny och lägg till länk för registrering i footer
    if (localStorage.getItem("cv_token")) {
        loginLink.innerHTML = `
        <button id="logout">Log out</button>
        `;

        registerLink.innerHTML=`
        <a href="/register">Registrera ny användare</a>`;
    } else {
        //annars ändra till login
        loginLink.innerHTML = `
        <a href="/login">Log in</a>
        `;

        registerLink.innerHTML="";
    }

    //Logga ut knapp
    const logoutBtn = document.getElementById("logout");

    //om logga-ut-knapp finns - lyssna på klick och ta bort token ur localStorage samt dirigera om till loginsidan
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            console.log("Logga ut");
            localStorage.removeItem("cv_token");
            window.location.href = "login.html";
        });
    }
}