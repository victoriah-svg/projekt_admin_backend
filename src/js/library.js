"use strict";
/*------ Fil med återanvändbara funktioner ------*/

//hämtar data från food-tabell
export async function getFood() {
    try {
        //Hämtar alla maträtter
        let response = await fetch("https://projekt-backend-1-3c57.onrender.com/food");
        //konverterar svaret från json
        let result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

//hämtar data med specifikt id från food-tabell
export async function getOneFoodItem(id) {

    try {
        //Hämtar maträtt med specifikt id som skickats med
        let response = await fetch(`https://projekt-backend-1-3c57.onrender.com/food/${id}`);
        //konverterar svaret från json
        let result = await response.json();
        //returnerar objektet som finns i arrayen result
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

//hämtar data från drink-tabell
export async function getDrinks() {

    try {
        //Hämtar all dryck
        let response = await fetch("https://projekt-backend-1-3c57.onrender.com/drink");
        //konverterar svaret från json
        let result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

//hämtar data med specifikt id från drink-tabell
export async function getOneDrinkItem(id) {
    console.log(id);
    try {
        //Hämtar maträtt med specifikt id som skickats med
        let response = await fetch(`https://projekt-backend-1-3c57.onrender.com/drink/${id}`);
        //konverterar svaret från json
        let result = await response.json();
        //returnerar objektet som finns i arrayen result
        return result[0];
    } catch (error) {
        console.log(error);
    }
}


//Skriver ut data i meny
export function printMenu(menuData, category, menuList, hasDeleteButton) {
//loopar igenom menydata som skickats med
    menuData.forEach(item => {
        /*om kategori för datan är samma som kategorin som skickats med 
        - skapa listelement med datan som innehåll*/
        if (item.category === category) {

            const li = document.createElement("li");
            li.id = item._id;

            const itemSpan = document.createElement("span");
            itemSpan.classList.add("item");
            itemSpan.textContent = item.name;

            const priceSpan = document.createElement("span");
            priceSpan.classList.add("price");
            priceSpan.textContent = `${item.price}:-`;

            li.appendChild(itemSpan);
            li.appendChild(priceSpan);
            //om datan har description - skriv ut denna också 
            if (item.description) {
                const descSpan = document.createElement("span");
                descSpan.classList.add("description");
                descSpan.textContent = item.description;

                li.appendChild(descSpan);
            }
            //om true har skickats med för hasDeleteButton - skriv ut deleteknapp och updateknapp
            if (hasDeleteButton) {
                li.innerHTML += `
               <div class="deleteBtnDiv"><i class="fa-solid fa-trash"></i><button data-id="${item._id}" class="deletebtn_${category}" id="delete_${item._id}">Delete</button></div>
             <div class="updateBtnDiv"><i class="fa-solid fa-pen"></i><button data-id="${item._id}" class="updatebtn_${category}">Update</button></div>
               `;
            }


            //lägg till li-elementet i listan som skickats med
            menuList.appendChild(li);
        }

    });



}




