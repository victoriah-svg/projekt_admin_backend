"use strict";
import { getFood, printFood } from "./library";
import { getDrinks } from "./library";



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
    //anropar printFood från library.js med data som hämtats från getFood, samt argument för att skriva ut i brunchlist
    let callPrintFood = printFood(allFood, brunch, brunchList, true);
    
});