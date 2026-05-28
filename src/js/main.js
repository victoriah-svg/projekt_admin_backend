"use strict";
document.addEventListener("DOMContentLoaded", () => {
    //ul-element där data för meny ska skrivas ut
    const brunchList = document.getElementById("brunchList");
    const coldDrinkList = document.getElementById("coldDrinkList");
    const hotDrinkList = document.getElementById("hotDrinkList");
    const dessertList = document.getElementById("dessertList");

    //om ul-lista för brunch och dessert finns, anropa funktion som hämtar data från food
    if (brunchList && dessertList) {
        getFood(brunchList, dessertList)
    }

    if(coldDrinkList && hotDrinkList){
        getDrinks(coldDrinkList, hotDrinkList);
    }

});

//hämtar data från food-tabell
async function getFood(brunchList, dessertList) {
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/food");
        //konverterar svaret från json
        let result = await response.json();
        //anropar printfunktion med resultat samt ul-listor för utskrift
        printFood(result, brunchList, dessertList);
    } catch (error) {
        console.log(error);
    }
}

//hämtar data från drink-tabell
async function getDrinks(coldDrinkList, hotDrinkList){

    try {
        //Hämtar all dryck
        let response = await fetch("http://localhost:3000/drink");
        //konverterar svaret från json
        let result = await response.json();
        console.log(result);
        //anropar funktion med resultat samt element där data ska skrivas ut
        printDrinks(result, hotDrinkList, coldDrinkList);
    } catch (error) {
        console.log(error);
    }

}

//skriver ut data från food tabell
function printFood(foodData, brunchList, dessertList) {
    console.log(foodData);
      //loopar igenom array innehållandes objekt 
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


//Skriver ut data från drinktabell
function printDrinks(drinkData, hotDrinkList, coldDrinkList) {
   

    //loopar igenom drink-array
    drinkData.forEach(drink => {

        //om kategori är hot drink
        if (drink.category === "hot drink") {
            //Om description finns med - skriv ut den också
            if (drink.description) {
                hotDrinkList.innerHTML += `
                <li>
                    <span class="item">${drink.name}</span>
                    <span class="price">${drink.price}:-</span>
                    <span class="description">${drink.description}</span>
                </li>`

            } else {
                //Annars skriv bara ut name och price
                hotDrinkList.innerHTML += `
                <li>
                    <span class="item">${drink.name}</span>
                    <span class="price">${drink.price}:-</span>
                </li>`
            }
        }

        //om kategori är cold drink
        if (drink.category === "cold drink") {
            //Om description finns med - skriv ut den också
            if (drink.description) {
                coldDrinkList.innerHTML += `
                <li>
                    <span class="item">${drink.name}</span>
                    <span class="price">${drink.price}:-</span>
                    <span class="description">${drink.description}</span>
                </li>`

            } else {
                //Annars skriv bara ut name och price
                coldDrinkList.innerHTML += `
                <li>
                    <span class="item">${drink.name}</span>
                    <span class="price">${drink.price}:-</span>
                </li>`
            }
        }
    });
}
