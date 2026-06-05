document.addEventListener("DOMContentLoaded", () => {
    //div där meddelande ska skrivas ut efter fetch
    const messageDiv = document.getElementById("messageDivBook");
    //tömmer mellan varje omgång
    messageDiv.innerHTML ="";
    getBookings();
});

async function getBookings() {
    //hämta in token 
    const token = localStorage.getItem("cv_token");
    //section element där bokningar ska skrivas ut
    const bookingSection = document.getElementById("bookingSection");
    //tömmer section mellan varje gång
    bookingSection.innerHTML = "";

    try {
        //hämtar alla meddelanden och skickar med token i anrop
        const response = await fetch('https://projekt-backend-1-3c57.onrender.com/book', {
            method: "GET",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "application/json"

            }
        });
        //lagrar resultatet
        const result = await response.json();
        console.log(result);
        //loopar igenom array med result och skriver ut till DOM
        result.forEach(booking => {
            bookingSection.innerHTML += `
            <article>
                <p><strong>Name: </strong>${booking.name}</p><p><strong>Email: </strong>${booking.email}</p>
                <p><strong>Phone number: </strong>${booking.phone}</p><p><strong>Date: </strong>${booking.date}</p>
                <p><strong>Time: </strong>${booking.time}</p><p><strong>Number of people: </strong>${booking.peoplenr}</p>
                
                <button class="deletebtnBook" id="${booking._id}">delete</button>
            </article>`;

        });

        //läser in deleteknappar
        let deleteBtns = document.querySelectorAll(".deletebtnBook");
        //om finns, loopa igenom, lysnna på klick och anropa deletefunktion med id
        if (deleteBtns) {
            deleteBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    deleteBooking(btn.id);
                })
            });

        }

    } catch (error) {
        console.log("Something went wrong " + error);
    }



}

async function deleteBooking(id) {
    const messageDiv = document.getElementById("messageDivBook");
    //hämta in token 
    const token = localStorage.getItem("cv_token");
    try {
        //tar bort bokning med ett visst id
        const response = await fetch('https://projekt-backend-1-3c57.onrender.com/book/' + id, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + token, //skickar med token 
                "content-type": "application/json"

            }
        });
        //lagrar resultatet som konverteras från json
        const result = await response.json();
        //skriver ut meddelande i DOM
        messageDiv.innerHTML = `
        <p>${result.message}!</p>
        `;
        //anropar funktion för att hämta om bokningar
        getBookings();

    } catch (error) {
        console.log("Something went wrong " + error);
    }
}