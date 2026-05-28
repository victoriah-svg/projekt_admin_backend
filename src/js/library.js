"use strict";

//hämtar data från food-tabell
export async function getFood() {
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

//hämtar data från drink-tabell
export async function getDrinks(){

    try {
        //Hämtar all dryck
        let response = await fetch("http://localhost:3000/drink");
        //konverterar svaret från json
        let result = await response.json();
        console.log(result);
        
    } catch (error) {
        console.log(error);
    }
}