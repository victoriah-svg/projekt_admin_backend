"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const tableSelect = document.getElementById("selectTableAdd");
    const nameInput = document.getElementById("nameInputAdd");
    const priceInput = document.getElementById("priceInputAdd");
    const descriptionInput = document.getElementById("descriptionInputAdd");
    const submitBtn = document.getElementById("submitbtnAdd");
    const selectDiv = document.getElementById("selectionDivUpdate");

    //tömmer selectDiv i början
    selectDiv.innerHTML = "";

     //om value är food - lägg till select dropdown med brunch och dessert
        if (tableSelect.value === "food") {
            console.log("du valde food");
            selectDiv.innerHTML = `
            <label for="foodCategoryAdd">Category</label>
                <select id="foodCategoryAdd">
                    <option value="brunch">brunch</option>
                    <option value="dessert">dessert</option>
                </select>
            `;
        } else {
            //annars (value är drink) - lägg till select dropdown med cold drink och hot drink
            console.log("du valde drink");
            selectDiv.innerHTML = `
            <label for="drinkCategoryAdd">Category</label>
                <select id="drinkCategoryAdd">
                    <option value="cold drink">cold drink</option>
                    <option value="hot drink">hot drink</option>
                </select>
            `;
        }

    //lyssna på ändring i select drop-down
    tableSelect.addEventListener("change", () => {
        //om value är food 
        if (tableSelect.value === "food") {
            console.log("du valde food");
            selectDiv.innerHTML = `
            <label for="foodCategoryAdd">Category</label>
                <select id="foodCategoryAdd">
                    <option value="brunch">brunch</option>
                    <option value="dessert">dessert</option>
                </select>
            `;
        } else {
            //annars (value är drink)
            console.log("du valde drink");
            selectDiv.innerHTML = `
            <label for="drinkCategoryAdd">Category</label>
                <select id="drinkCategoryAdd">
                    <option value="cold drink">cold drink</option>
                    <option value="hot drink">hot drink</option>
                </select>
            `;
        }

    });

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //div för errormeddelanden 
        const errorDiv = document.getElementById("errorDivAdd");
        //tömmer errorDiv mellan varje klick
        errorDiv.innerHTML = "";
        //array för felmeddelanden
        let errorMessages = [];
        //inputvalues - sanerade och borttagna mellanslag
        const tableSelectValue = tableSelect.value.replace(/(<([^>]+)>)/ig, '');
        const nameValue = nameInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        //const categoryValue = categoryInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceValue = priceInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const descriptionValue = descriptionInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceConvertNumb = Number(priceValue); //numbervalue konverterat till number

        (console.log(priceConvertNumb));

         // kontroll om name eller price är tomt - felmeddelande
        if (!nameValue) {
            errorMessages.push("You have to specify name");
        }

        if(!priceValue){
            errorMessages.push("You have to specify price");
        }

        //kontroll om pris är ett Number - felmeddelande
        if (isNaN(priceConvertNumb)) {
            errorMessages.push("price must be a number (decimals should be seperated with a dot .)");
        }

        // om error-arrayen innehåller något
        if (errorMessages.length > 0) {

            //loopar igenom arrayen och skriver ut varje felmeddelande
            errorMessages.forEach(error => {
                errorDiv.innerHTML += `<p>${error}</p>`;
            });
        }

        console.log("table: " + tableSelectValue + " name: " + nameValue + " price: " + priceValue + " description: " + descriptionValue);

    });

});