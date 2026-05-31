document.addEventListener("DOMContentLoaded", ()=>{
    getBookings();
});

async function getBookings() {
    //hämta in token 
    const token = localStorage.getItem("cv_token");
    //section element där bokningar ska skrivas ut
    const bookingSection = document.getElementById("bookingSection");
    //tömmer section mellan varje gång
    bookingSection.innerHTML= "";

    try {
        //hämtar alla meddelanden och skickar med token i anrop
        const response = await fetch('http://localhost:3000/book', {
            method: "GET",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "application/json"

            }
        });
        //lagrar resultatet
        const result = await response.json();
        //loopar igenom array med result och skriver ut till DOM
        result.forEach(booking => {
            bookingSection.innerHTML += `
            <article>
                <p><strong>Name: </strong>${booking.name}</p><p><strong>Email: </strong>${booking.email}</p>
                <p><strong>Name: </strong>${booking.name}</p><p><strong>Email: </strong>${booking.email}</p>
                
                <button class="deletebtnBook" id="${booking._id}">delete</button>
            </article>`;

        });

        //läser in deleteknappar
        let deleteBtns = document.querySelectorAll(".deletebtnBook");
        //om finns, loopa igenom, lysnna på klick och anropa deletefunktion med id
        if (deleteBtns) {
            deleteBtns.forEach(btn => {
                btn.addEventListener("click", () => {
                    console.log(btn.id);
                })
            });

        }

    } catch (error) {
        console.log("Something went wrong " + error);
    }



}