"use strict";

document.addEventListener("DOMContentLoaded", () => {
    //p-element där item som ska uppdateras ska skrivas ut
    const chosenItemEl = document.getElementById("chosenItem");
    //anropar funktion för att skriva ut item med p-elementet som parameter
    addChosenItem(chosenItemEl);
    //formulärelement - inputs för update av meny item
    const nameInput = document.getElementById("nameUpdate");
    const categoryInput = document.getElementById("categoryUpdate");
    const priceInput = document.getElementById("priceUpdate");
    const descriptionInput = document.getElementById("descriptionUpdate");
    const submitBtn = document.getElementById("submitUpdate");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //array för felmeddelanden
        let errorMessages = [];
        //inputvalues - sanerade och borttagna mellanslag
        const nameValue = nameInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const categoryValue = categoryInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceValue = priceInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const descriptionValue = descriptionInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceConvertNumb = Number(priceValue);

        //hämtar item som ska uppdateras från localStorage
        let itemFromStorage = localStorage.getItem("item_to_update");
        //konverterar till js
        let parsedItem = JSON.parse(itemFromStorage);

        // console.log(parsedItem.id);
        // console.log(parsedItem.table);

        // console.log(priceConvertNumb);

        //errorDiv för felmeddelanden
        const errorDiv = document.getElementById("errorDivUpdate");

        //tömmer errorDiv mellan varje klick
        errorDiv.innerHTML = "";

        // kontroll om name eller price är tomt - felmeddelande
        if (!nameValue || !priceValue) {
            errorMessages.push("You have to specify name and price");
        }

        //kontroll om pris är ett Number - felmeddelande
        if (isNaN(priceConvertNumb)) {
            errorMessages.push("price must be a number");
        }

        // om error-arrayen innehåller något
        if (errorMessages.length > 0) {

            //loopar igenom arrayen och skriver ut varje felmeddelande
            errorMessages.forEach(error => {
                errorDiv.innerHTML += `<p>${error}</p>`;
            });
        } else {
            //om description angett - skapar objekt med name, category, price och description
            if (descriptionValue) {
                let menuItem1 = {
                    name: nameValue,
                    category: categoryValue,
                    price: priceValue,
                    description: descriptionValue
                }
                //anropar funktion updateMenu och skickar med objektet, id och table (food eller drink) från localStorage
                updateMenu(menuItem1, parsedItem.id, parsedItem.table);


            } else {
                //annars- skapa objekt utan description
                let menuItem2 = {
                    name: nameValue,
                    category: categoryValue,
                    price: priceValue
                }
                //anropar funktion updateMenu och skickar med objektet, id och table (food eller drink) från localStorage
                updateMenu(menuItem2, parsedItem.id, parsedItem.table);

            }

        }

    });


});

//funktion för att lägga till food / drink item som sparats i localStorage
function addChosenItem(chosenItemEl) {
    //Div där dropdown select kommer läggas till
    let selectionDiv = document.getElementById("selectionDivUpdate");
    //lagrar p-elementet som tagits emot
    let pEl = chosenItemEl;
    //tömmer text i p-element mellan varje omgång
    pEl.innerText = "";
    //hämtar item som ska uppdateras från localStorage
    let itemFromStorage = localStorage.getItem("item_to_update");
    //konverterar till js
    let parsedItem = JSON.parse(itemFromStorage);
    //lägger till item som text inuti p-elementet
    pEl.innerText = parsedItem.name + " " + parsedItem.price + ":-";

    
        //om kategori är brunch eller dessert - lägg till dessa som options i select 
        if (parsedItem.table === "food") {
            console.log("food");

            selectionDiv.innerHTML = `<label for="categoryUpdate">Category: </label>
        <select name="categoryUpdate" id="categoryUpdate">
          <option value="brunch">brunch</option>
          <option value="dessert">dessert</option>
          </select>
          `;

        } else {
            //annars lägg till cold drink och hot drink som options
            console.log("drink");
            selectionDiv.innerHTML = `<label for="categoryUpdate">Category: </label>
        <select name="categoryUpdate" id="categoryUpdate">
          <option value="cold drink">cold drink</option>
          <option value="hot drink">hot drink</option>
          </select>
          `;
        }
    


}

//Uppdatera ett menyitem med visst id
async function updateMenu(menuItem, id, table) {
    console.log(menuItem, id, table);
    const updatedItemSection = document.getElementById("updatedItemSection");
    updatedItemSection.innerHTML = "";
    try {
        //hämta in token 
        const token = localStorage.getItem("cv_token");

        // fetch url med table (food eller drink) som skickats med i anropet samt id på item som ska updateras
        const response = await fetch(`https://projekt-backend-1-3c57.onrender.com/${table}/${id}`, {
            method: "PUT",
            headers: {
                 "authorization": "Bearer " + token,
                "content-type": "Application/json"
            },
            body: JSON.stringify(menuItem) //skickar med objektet som skickats med i anropet
        });

        const data = await response.json(); //konverterar svaret från json 
        
        //lägger till meddelande: food/drink updated i DOM
        updatedItemSection.innerHTML = `<p id=updateMsg>${data.message}</p><a href="/">See updated menu</a>`;
        //tar bort item som uppdaterats från localStorage
        localStorage.removeItem("item_to_update");
        return data;
    } catch (error) {
        console.log(error);
    }

}