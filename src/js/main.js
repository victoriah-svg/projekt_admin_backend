"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
    const brunchList = document.querySelectorAll(".brunchList");
    const coldDrinkList = document.querySelectorAll(".coldDrinkList");
    const hotDrinkList = document.querySelectorAll(".hotDrinkList");
    const dessertList = document.querySelectorAll(".dessertList");

    if(brunchList.length > 0 && dessertList.length > 0){
        getFood(brunchList, dessertList)
    }

});

async function getFood(brunchList, dessertList){
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/food");
        //konverterar svaret från json
        let result = await response.json();
       console.log(result);
    } catch (error) {
        console.log(error);
    }
}