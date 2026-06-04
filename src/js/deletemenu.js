"use strict";
//importerar funktioner från library
import { getFood } from "./library";
import { getDrinks } from "./library";
import { printMenu } from "./library";
import { getOneFoodItem } from "./library";
import { getOneDrinkItem } from "./library";


document.addEventListener("DOMContentLoaded", async () => {


    //anropar getFood funktion som importerats från library.js
    let allFood = await getFood();
    //anropar getDrinks funktion som importerats från library.js
    let allDrinks = await getDrinks();

    //anropar funktion som renderar meny
    renderMenu(allFood, allDrinks);

});

//RenderMenu funktion 
function renderMenu(food, drinks) {
    //ul-element där data för meny ska skrivas ut
    const brunchList = document.getElementById("brunchListDelete");
    const coldDrinkList = document.getElementById("coldDrinkListDelete");
    const hotDrinkList = document.getElementById("hotDrinkListDelete");
    const dessertList = document.getElementById("dessertListDelete");

    //tömmer listor mellan varje omgång
    brunchList.innerHTML = "";
    coldDrinkList.innerHTML = "";
    hotDrinkList.innerHTML = "";
    dessertList.innerHTML = "";

    //anropar printFood från library.js med data som hämtats från getFood, samt argument för att skriva ut i brunchlist
    printMenu(food, "brunch", brunchList, true);
    //anropar printFood för dessert
    printMenu(food, "dessert", dessertList, true);
    //anropar printFood för kalla drycker
    printMenu(drinks, "cold drink", coldDrinkList, true);
    //anropar printFood för varma drycker
    printMenu(drinks, "hot drink", hotDrinkList, true);

    attachDeleteListeners();
    attachUpdateListeners();
}

//funktion som lägger till eventlyssnare deleteknappar
function attachDeleteListeners() {

    //deleteknappar där klasser är deras kategori (brunch, dessert, cold eller hot)
    let deleteBtnsBrunch = document.querySelectorAll(".deletebtn_brunch");
    let deleteBtnsDesserts = document.querySelectorAll(".deletebtn_dessert");
    let deleteBtnsColdDrinks = document.querySelectorAll(".deletebtn_cold");
    let deleteBtnsHotDrinks = document.querySelectorAll(".deletebtn_hot");


    //loopar igenom brunchknappar och lyssnar efter klick
    deleteBtnsBrunch.forEach(btn => {
        // console.log(btn);
        btn.addEventListener("click", () => {
            let table = "food";
            //console.log("du klickade på knappen " + btn.dataset.id);
            deleteMenuItem(table, btn.dataset.id);
        });
    });

    //loopar igenom dessertknappar och lyssnar efter klick
    deleteBtnsDesserts.forEach(btn => {
        //console.log(btn);
        btn.addEventListener("click", () => {
            let table = "food";
            deleteMenuItem(table, btn.dataset.id);
        });
    })

    //loopar igenom cold drinks knappar och lyssnar efter klick
    deleteBtnsColdDrinks.forEach(btn => {
        //console.log(btn);
        btn.addEventListener("click", () => {
            //namn på tabell som skickas med som argument i deleteMenuItem
            let table = "drink";
            //console.log("du klickade på knappen " + btn.dataset.id);
            deleteMenuItem(table, btn.dataset.id);
        });
    })

    //loopar igenom hot drinks knappar och lyssnar efter klick
    deleteBtnsHotDrinks.forEach(btn => {
        //console.log(btn);
        btn.addEventListener("click", () => {
            let table = "drink";
            // console.log("du klickade på knappen " + btn.dataset.id);
            deleteMenuItem(table, btn.dataset.id);
        });
    })



}

//funktion som lägger till eventlyssnare deleteknappar
function attachUpdateListeners() {

    //deleteknappar där klasser är deras kategori (brunch, dessert, cold eller hot)
    let updateBtnsBrunch = document.querySelectorAll(".updatebtn_brunch");
    let updateBtnsDesserts = document.querySelectorAll(".updatebtn_dessert");
    let updateBtnsColdDrinks = document.querySelectorAll(".updatebtn_cold");
    let updateBtnsHotDrinks = document.querySelectorAll(".updatebtn_hot");


    //loopar igenom brunchknappar och lyssnar efter klick
    updateBtnsBrunch.forEach(btn => {
        
        btn.addEventListener("click", async () => {
            //anropar funktion som hämtar food med id som skickats med
            let foodItem = await getOneFoodItem(btn.dataset.id);
            //lagrar datan som hämtats från getOneFoodItem i ett objekt
            let fetchedItem = {
                id: foodItem._id,
                name: foodItem.name,
                category: foodItem.category,
                price: foodItem.price,
                table: "food"

            }
            //sparar objektet i localStorage
            localStorage.setItem("item_to_update", JSON.stringify(fetchedItem));
            //locate till updatemenu sidan
            window.location.href = "updatemenu.html";
        });
    });

    //loopar igenom dessertknappar och lyssnar efter klick
    updateBtnsDesserts.forEach(btn => {
        //console.log(btn);
        btn.addEventListener("click", async () => {

            //anropar funktion som hämtar food med id som skickats med
            let foodItem = await getOneFoodItem(btn.dataset.id);
            //lagrar datan som hämtats från getOneFoodItem i ett objekt
            let fetchedItem = {
                id: foodItem._id,
                name: foodItem.name,
                category: foodItem.category,
                price: foodItem.price,
                table: "food"

            }
            //sparar objektet i localStorage
            localStorage.setItem("item_to_update", JSON.stringify(fetchedItem));
            //locate till updatemenu sidan
            window.location.href = "updatemenu.html";
        });
    });

    //loopar igenom cold drinks knappar och lyssnar efter klick
    updateBtnsColdDrinks.forEach(btn => {
        
        btn.addEventListener("click", async() => {
            //anropar funktion som hämtar food med id som skickats med
            let drinkItem = await getOneDrinkItem(btn.dataset.id);
            
            //lagrar datan som hämtats från getOneFoodItem i ett objekt
            let fetchedItem = {
                id: drinkItem._id,
                name: drinkItem.name,
                category: drinkItem.category,
                price: drinkItem.price,
                table: "drink"

            }
            //sparar objektet i localStorage
            localStorage.setItem("item_to_update", JSON.stringify(fetchedItem));
            //locate till updatemenu sidan
            window.location.href = "updatemenu.html";
        });
    })

    //loopar igenom hot drinks knappar och lyssnar efter klick
    updateBtnsHotDrinks.forEach(btn => {
        //console.log(btn);
        btn.addEventListener("click", async() => {
            //anropar funktion som hämtar food med id som skickats med
            let drinkItem = await getOneDrinkItem(btn.dataset.id);
            
            //lagrar datan som hämtats från getOneFoodItem i ett objekt
            let fetchedItem = {
                id: drinkItem._id,
                name: drinkItem.name,
                category: drinkItem.category,
                price: drinkItem.price,
                table: "drink"

            }
            //sparar objektet i localStorage
            localStorage.setItem("item_to_update", JSON.stringify(fetchedItem));
            //locate till updatemenu sidan
            window.location.href = "updatemenu.html";
        });
    });



}



//funktion för att radera item från menyn
async function deleteMenuItem(table, itemId) {
    
    const updateDiv = document.getElementById("updateDiv");
    updateDiv.innerHTML= ""; //tömmer div mellan varje gång

    //hämta in token 
    const token = localStorage.getItem("cv_token");
    try {
        //tar bort ett meddelande med ett visst id
        const response = await fetch(`http://localhost:3000/${table}/${itemId}`, {
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + token,
                "content-type": "application/json"

            }
        });
        //lagrar resultatet
        const result = await response.json();
        let newGetDrinks = await getDrinks();
        let newGetFood = await getFood();
        //skriver ut att delete gjorts
        updateDiv.innerHTML =`Item deleted from menu!`;

        //anropar render-funktion för att rendera om sidan
        renderMenu(newGetFood, newGetDrinks);

    } catch (error) {
        console.log("Something went wrong " + error);
    }
}

