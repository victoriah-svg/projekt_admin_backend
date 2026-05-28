"use strict";
//importerar funktioner från library
import { getFood } from "./library";
import { getDrinks } from "./library";
import { printMenu } from "./library";

document.addEventListener("DOMContentLoaded", async()=>{
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
    
});

//lägg till deletefunktion för food och drink