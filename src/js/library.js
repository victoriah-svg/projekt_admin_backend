"use strict";
/*------ Fil med återanvändbara funktioner ------*/

//hämtar data från food-tabell
export async function getFood() {
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/food");
        //konverterar svaret från json
        let result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

//hämtar data från drink-tabell
export async function getDrinks() {

    try {
        //Hämtar all dryck
        let response = await fetch("http://localhost:3000/drink");
        //konverterar svaret från json
        let result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

//Skriver ut food data i DOM
export function printFood(foodData, category, foodList, hasDeleteButton) {
    foodData.forEach(food => {
        //Om kategori är samma som den som skickats med - skriv ut i den foodList som skickats med
        if (food.category === category) {
            //om description finns med , skriv ut den också
            if (food.description) {
                foodList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                    <span class="description">${food.description}</span>
                </li>`;

            } else {
                //om description inte finns med - skriv bara ut name och price
                foodList.innerHTML += `
                <li>
                    <span class="item">${food.name}</span>
                    <span class="price">${food.price}:-</span>
                </li>`;
            }
            //om deletebtn = true så skriv ut knappar för delete och update 
            if (hasDeleteButton) {
                foodList.innerHTML += `
            <i class="fa-solid fa-trash"></i><button class="${food._id}">Delete</button>
            <i class="fa-solid fa-pen"></i><button class="${food._id}">Update</button>
            `;

            }
        }

    });
}