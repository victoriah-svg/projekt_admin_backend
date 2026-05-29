"use strict";
//importerar funktioner från library
import { getFood } from "./library";
import { getDrinks } from "./library";
import { printMenu } from "./library";

document.addEventListener("DOMContentLoaded", async () => {
    //ul-element där data för meny ska skrivas ut
    const brunchList = document.getElementById("brunchListDelete");
    const coldDrinkList = document.getElementById("coldDrinkListDelete");
    const hotDrinkList = document.getElementById("hotDrinkListDelete");
    const dessertList = document.getElementById("dessertListDelete");

    //anropar getFood funktion som importerats från library.js
    let allFood = await getFood();
    //anropar getDrinks funktion som importerats från library.js
    let allDrinks = await getDrinks();
    //variabler som skickas med som argument i anrop av printFood från library.js
    let brunch = "brunch";
    let dessert = "dessert";
    let coldDrink = "cold drink";
    let hotDrink = "hot drink";


    //anropar printFood från library.js med data som hämtats från getFood, samt argument för att skriva ut i brunchlist
    printMenu(allFood, brunch, brunchList, true);
    //anropar printFood för dessert
    printMenu(allFood, dessert, dessertList, true);
    //anropar printFood för kalla drycker
    printMenu(allDrinks, coldDrink, coldDrinkList, true);
    //anropar printFood för varma drycker
    printMenu(allDrinks, hotDrink, hotDrinkList, true);

    //deleteknappar där klasser är deras kategori (brunch, dessert, cold eller hot)
    let deleteBtnsBrunch = document.querySelectorAll(".deletebtn_brunch");
    let deleteBtnsDesserts = document.querySelectorAll(".deletebtn_dessert");
    let deleteBtnsColdDrinks = document.querySelectorAll(".deletebtn_cold");
    let deleteBtnsHotDrinks = document.querySelectorAll(".deletebtn_hot");

    
    //loopar igenom brunchknappar och lyssnar efter klick
    deleteBtnsBrunch.forEach(btn => {
        console.log(btn);
        btn.addEventListener("click", () => {
            console.log("du klickade på knappen " + btn.dataset.id);
        });
    });

    //loopar igenom dessertknappar och lyssnar efter klick
    deleteBtnsDesserts.forEach(btn =>{
        console.log(btn);
        btn.addEventListener("click", () => {
            console.log("du klickade på knappen " + btn.dataset.id);
        });
    })

    //loopar igenom cold drinks knappar och lyssnar efter klick
    deleteBtnsColdDrinks.forEach(btn =>{
        console.log(btn);
        btn.addEventListener("click", () => {
            console.log("du klickade på knappen " + btn.dataset.id);
        });
    })

    //loopar igenom hot drinks knappar och lyssnar efter klick
    deleteBtnsHotDrinks.forEach(btn =>{
        console.log(btn);
        btn.addEventListener("click", () => {
            console.log("du klickade på knappen " + btn.dataset.id);
        });
    })
    
    
});

//lägg till deletefunktion för food och drink