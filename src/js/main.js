"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const brunchList = document.getElementById("brunchList");
    const coldDrinkList = document.getElementById("coldDrinkList");
    const hotDrinkList = document.getElementById("hotDrinkList");
    const dessertList = document.getElementById("dessertList");

    if (brunchList && dessertList) {
        getFood(brunchList, dessertList)
    }

});

async function getFood(brunchList, dessertList) {
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/food");
        //konverterar svaret från json
        let result = await response.json();
        printFood(result, brunchList, dessertList);
    } catch (error) {
        console.log(error);
    }
}

function printFood(foodData, brunchList, dessertList) {
    console.log(foodData);
      //för varje objekt i arrayen 
    foodData.forEach(food => {
         //Om kategori är brunch - skriv ut i brunch meny lista
        if (food.category === "brunch") {
            //om description finns med , skriv ut den också
            if (food.description) {
                brunchList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                    <span class="description">${food.description}</span>
                </li>`

            } else {
                //om description inte finns med - skriv bara ut name och price
                brunchList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                </li>`
            }

        }

        //Om kategori är dessert - skriv ut i desserlistan
        if (food.category === "dessert") {
            //Om description finns med - skriv ut den också
            if (food.description) {
                dessertList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                    <span class="description">${food.description}</span>
                </li>`

            } else {
                //Annars skriv bara ut name och price
                dessertList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                </li>`
            }

        }


    });
}