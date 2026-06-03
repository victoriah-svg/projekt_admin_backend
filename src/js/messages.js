"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    getMessages();

});

async function getMessages() {

    //hämta in token 
    const token = localStorage.getItem("cv_token");

    //section för meddelanden
    const messageSection = document.getElementById("messageSection");

    //tömmer messagesection mellan varje omgång
    messageSection.innerHTML = "";

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
                <p><strong>Message: </strong>${message.message}</p>
                <button class="deletebtn" id="${message._id}">delete</button>      
            </article>`;

        });

        //läser in deleteknappar
        let deleteBtns = document.querySelectorAll(".deletebtn");
        //om finns, loopa igenom, lysnna på klick och anropa deletefunktion med id
        if (deleteBtns) {
            deleteBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    deleteMessage(btn.id);
                })
            });

        }

    } catch (error) {
        console.log("Something went wrong " + error);
    }

}

async function deleteMessage(btnId) {
    //hämta in token 
    const token = localStorage.getItem("cv_token");
    try {
        //tar bort ett meddelande med ett visst id
        const response = await fetch('http://localhost:3000/message/' + btnId, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "application/json"

            }
        });
        //lagrar resultatet
        const result = await response.json();
        //anropar funktion för att hämta om meddelanden 
        getMessages();

    } catch (error) {
        console.log("Something went wrong " + error);
    }


}