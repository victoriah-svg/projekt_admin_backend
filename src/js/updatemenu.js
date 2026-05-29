"use strict";

document.addEventListener("DOMContentLoaded", ()=>{
   //p-element där item som ska uppdateras ska skrivas ut
    const chosenItemEl = document.getElementById("chosenItem");
   //anropar funktion för att skriva ut item med p-elementet som parameter
    addChosenItem(chosenItemEl);
   
});

//funktion för att lägga till food / drink item som sparats i localStorage
function addChosenItem(chosenItemEl){
    //Div där dropdown select kommer läggas till
    let selectionDiv = document.getElementById("selectionDivUpdate");
    //lagrar p-elementet som tagits emot
    let pEl = chosenItemEl;
    //tömmer text i p-element mellan varje omgång
    pEl.innerText= "";
    //hämtar item som ska uppdateras från localStorage
     let itemFromStorage = localStorage.getItem("item_to_update");
     //konverterar till js
     let parsedItem = JSON.parse(itemFromStorage);
     //lägger till item som text inuti p-elementet
     pEl.innerText = parsedItem.name + " " + parsedItem.price + ":-";

     //om kategori är brunch eller dessert - lägg till dessa som options i select 
     if(parsedItem.category === "brunch" || parsedItem.category === "dessert"){
        console.log("brunch");
        
        selectionDiv.innerHTML = `<label for="categoryUpdate">Category: </label>
        <select name="categoryUpdate" id="categoryUpdate">
          <option value="brunch">brunch</option>
          <option value="dessert">dessert</option>
          </select>
          `;
          
     }else{
        //annars lägg till cold drink och hot drink som options
        console.log("not brunch");
        selectionDiv.innerHTML = `<label for="categoryUpdate">Category: </label>
        <select name="categoryUpdate" id="categoryUpdate">
          <option value="cold drink">cold drink</option>
          <option value="hot drink">hot drink</option>
          </select>
          `;
     }
     
}

