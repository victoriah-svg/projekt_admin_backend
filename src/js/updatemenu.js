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

        console.log(priceConvertNumb);

        //errorDiv för felmeddelanden
        const errorDiv = document.getElementById("errorDivUpdate");

        //tömmer errorDiv mellan varje klick
        errorDiv.innerHTML = "";

        // kontroll om name eller price är tomt - felmeddelande
        if (!nameValue || !priceValue) {
            errorMessages.push("You have to specify name and price");
        }

        //kontroll om pris är ett Number - felmeddelande
        if(isNaN(priceConvertNumb)){
            errorMessages.push("price must be a number");
        }

        // om error-arrayen innehåller något
        if (errorMessages.length > 0) {

            //loopar igenom arrayen och skriver ut varje felmeddelande
            errorMessages.forEach(error => {
                errorDiv.innerHTML += `<p>${error}</p>`;
            });
        }else{

            if(descriptionValue){
                updateMenu(nameValue, categoryValue, priceValue, descriptionValue);
            }else{
                updateMenu(nameValue, categoryValue, priceValue);
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

async function updateMenu(name, category, price, description){

}