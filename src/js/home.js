"use strict";
import { getFood } from "./library";
//import { printFood } from "./library";
import { getDrinks } from "./library";
import { printMenu } from "./library";



document.addEventListener("DOMContentLoaded", async() => {
    //ul-element där data för meny ska skrivas ut
    const brunchList = document.getElementById("brunchList");
    const coldDrinkList = document.getElementById("coldDrinkList");
    const hotDrinkList = document.getElementById("hotDrinkList");
    const dessertList = document.getElementById("dessertList");

    
    //anropar getFood funktion som importerats från library.js
    let allFood = await getFood();
    //anropar getDrinks funktion som importerats från library.js
    let allDrinks = await getDrinks();
    //variabel som skickas med som argument i anrop av printFood från library.js
    let brunch = "brunch";
    let coldDrink = "cold drink";
    //anropar printFood från library.js med data som hämtats från getFood, samt argument för att skriva ut i brunchlist
    let callPrintFood = printMenu(allFood, brunch, brunchList, false);

    let callPrintMenu = printMenu(allDrinks, coldDrink, coldDrinkList, false);
    
});