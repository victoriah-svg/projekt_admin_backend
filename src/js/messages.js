"use strict";

document.addEventListener("DOMContentLoaded", async()=>{
   // getMessages();
   console.log("Hej från messages");
    
});

/*async function getMessages() {
    const messageSection = document.getElementById("messageSection");
    
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/message");
        //konverterar svaret från json
        let result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
    
}*/