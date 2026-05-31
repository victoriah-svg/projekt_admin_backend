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
            <label for="categoryAdd">Category</label>
                <select id="categoryAdd">
                    <option value="brunch">brunch</option>
                    <option value="dessert">dessert</option>
                </select>
            `;
    } else {
        //annars (value är drink) - lägg till select dropdown med cold drink och hot drink
        console.log("du valde drink");
        selectDiv.innerHTML = `
            <label for="categoryAdd">Category</label>
                <select id="categoryAdd">
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
            <label for="categoryAdd">Category</label>
                <select id="categoryAdd">
                    <option value="brunch">brunch</option>
                    <option value="dessert">dessert</option>
                </select>
            `;
        } else {
            //annars (value är drink)
            console.log("du valde drink");
            selectDiv.innerHTML = `
            <label for="categoryAdd">Category</label>
                <select id="categoryAdd">
                    <option value="cold drink">cold drink</option>
                    <option value="hot drink">hot drink</option>
                </select>
            `;
        }



    });

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //element för select kategori
        const categoryInput = document.getElementById("categoryAdd");
        //div för errormeddelanden 
        const errorDiv = document.getElementById("errorDivAdd");
        //tömmer errorDiv mellan varje klick
        errorDiv.innerHTML = "";
        //array för felmeddelanden
        let errorMessages = [];
        //inputvalues - sanerade och borttagna mellanslag
        const tableSelectValue = tableSelect.value.replace(/(<([^>]+)>)/ig, '');
        const nameValue = nameInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const categoryValue = categoryInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceValue = priceInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const descriptionValue = descriptionInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceConvertNumb = Number(priceValue); //numbervalue konverterat till number

        (console.log(priceConvertNumb));

        // kontroll om name eller price är tomt - felmeddelande
        if (!nameValue) {
            errorMessages.push("You have to specify name");
        }

        if (!priceValue) {
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
        } else {
            //om felmeddelandearray är tom 

            //variabel där objekt med inputvalues ska lagras
            let itemToAdd;

            //om description skickats med - lagra objekt med description
            if (descriptionValue) {
                itemToAdd = {
                    name: nameValue,
                    category: categoryValue,
                    price: priceConvertNumb,
                    description: descriptionValue
                }


            } else {
                //om description INTE skickats med - lagra objekt UTAN description
                itemToAdd = {
                    name: nameValue,
                    category: categoryValue,
                    price: priceConvertNumb
                }
            }


            //om food har valts som table - anropa addMenuItem med itemToAdd och food som argument
            if (tableSelectValue === "food") {
                addMenuItem(itemToAdd, tableSelectValue);
            } else {
                //om drink valts som table - anropa addMenuItem med itemToAdd och drink som argument
                addMenuItem(itemToAdd, tableSelectValue);
            }
        }

    });

});

async function addMenuItem(item, table) {
    try {
        //hämta in token 
        const token = localStorage.getItem("cv_token");

        // fetch url med table (food eller drink) som skickats med i anropet samt id på item som ska updateras
        const response = await fetch(`http://localhost:3000/${table}`, {
            method: "POST",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "Application/json"
            },
            body: JSON.stringify(item) //skickar med objektet som skickats med i anropet
        });

        const data = await response.json(); //konverterar svaret från json 

        /*//lägger till meddelande: food/drink updated i DOM
        updatedItemSection.innerHTML = `<p id=updateMsg>${data.message}</p><a href="/">See updated menu</a>`;
       
        return data;*/
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}