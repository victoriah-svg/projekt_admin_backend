"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //anropar funktion som ändrar logga in länk i menyn
    changeNavLink();
});

//ändra meny mellan login/ log out
function changeNavLink() {
//li-element i nav för login
const loginLink = document.getElementById("loginLink");

//om token finns i localStorage - användare inloggad - ändra till logout i meny
    if (localStorage.getItem("cv_token")) {
        loginLink.innerHTML = `
        <button id="logout">Logga ut</button>
        `;
    } else {
        //annars ändra till login
        loginLink.innerHTML = `
        <a href="/login">Log in</a>
        `;
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