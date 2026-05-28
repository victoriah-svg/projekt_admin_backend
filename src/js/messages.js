"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    getMessages();

});

async function getMessages() {
    //hämta in token 
    const token = localStorage.getItem("cv_token");

    //section för meddelanden
    const messageSection = document.getElementById("messageSection");

    try {
        //hämtar alla meddelanden och skickar med token i anrop
        const response = await fetch('http://localhost:3000/message', {
            method: "GET",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "application/json"

            }
        });
        //lagrar resultatet
        const result = await response.json();
        //loopar igenom array med result och skriver ut till DOM
        result.forEach(message => {
            messageSection.innerHTML += `
            <article>
                <p><strong>Name: </strong>${message.name}</p><p><strong>Email: </strong>${message.email}</p>
                <p>${message.message}</p>
                <button class="deletebtn" id="${message._id}">delete</button>
            </article>`;
        });


    } catch (error) {
        console.log("Something went wrong " + error);
    }

}