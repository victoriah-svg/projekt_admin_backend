"use strict";
import { getFood } from "/src/js/library.js";
import { getDrinks } from "/src/js/library.js";


document.addEventListener("DOMContentLoaded", () => {
    //ul-element där data för meny ska skrivas ut
    const brunchList = document.getElementById("brunchList");
    const coldDrinkList = document.getElementById("coldDrinkList");
    const hotDrinkList = document.getElementById("hotDrinkList");
    const dessertList = document.getElementById("dessertList");

    getFood();
    getDrinks();

});