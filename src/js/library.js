"use strict";
/*------ Fil med återanvändbara funktioner ------*/

//hämtar data från food-tabell
export async function getFood() {
    try {
        //Hämtar alla maträtter
        let response = await fetch("http://localhost:3000/food");
        //konverterar svaret från json
        let result = await response.json();
        return result
    } catch (error) {
        console.log(error);
    }
}

//hämtar data med specifikt id från food-tabell
export async function getOneFoodItem(id){
    
    try {
        //Hämtar maträtt med specifikt id som skickats med
        let response = await fetch(`http://localhost:3000/food/${id}`);
        //konverterar svaret från json
        let result = await response.json();
        //returnerar objektet som finns i arrayen result
        return result[0];
    } catch (error) {
        console.log(error);
    }
 }

//hämtar data från drink-tabell
export async function getDrinks() {

    try {
        //Hämtar all dryck
        let response = await fetch("http://localhost:3000/drink");
        //konverterar svaret från json
        let result = await response.json();
        return result;

    } catch (error) {
        console.log(error);
    }
}

//hämtar data med specifikt id från drink-tabell
export async function getOneDrinkItem(id){
    
    try {
        //Hämtar maträtt med specifikt id som skickats med
        let response = await fetch(`http://localhost:3000/food/${id}`);
        //konverterar svaret från json
        let result = await response.json();
        //returnerar objektet som finns i arrayen result
        return result[0];
    } catch (error) {
        console.log(error);
    }
 }


//Skriver ut data i meny
export function printMenu(menuData, category, menuList, hasDeleteButton) {

    menuData.forEach(item => {
        //Om kategori är samma som den som skickats med - skriv ut i den den menuList som skickats med
        if (item.category === category) {
            //om description finns med , skriv ut den också
            if (item.description) {
                menuList.innerHTML += `
                <li>
                    <span class="item">${item.name}</span>
                    <span class="price">${item.price}:-</span>
                    <span class="description">${item.description}</span>
                </li>`;

            } else {
                //om description inte finns med - skriv bara ut name och price
                menuList.innerHTML += `
                <li>
                    <span class="item">${item.name}</span>
                    <span class="price">${item.price}:-</span>
                </li>`;
            }
            //om deletebtn = true så skriv ut knappar för delete och update 
            if (hasDeleteButton) {
                menuList.innerHTML += `
            <i class="fa-solid fa-trash"></i><button data-id="${item._id}" class="deletebtn_${category}" id="delete_${item._id}">Delete</button>
            <i class="fa-solid fa-pen"></i><button data-id="${item._id}" class="updatebtn_${category}"><a href="/updatemenu">Update</a></button>
            `;


            }



        }



    });



}

/*export async function updateMenu(menuItem, updateDiv){
        updateDiv.innerHTML="";
        updateDiv.innerHTML =`
           <h2>Chosen item: </h2>
           <p>${menuItem.name }  - ${menuItem.price}:- </p>
           <form>
                    <label for="nameUpdate">Name: </label>
                    <input type="text" name="" id="nameUpdate">
                    <label for="categoryUpdate">Category: </label>
                    <select name="categoryUpdate" id="categoryUpdate">
                        <option value="brunch">brunch</option>
                        <option value="dessert">dessert</option>
                    </select>
                    <label for="priceUpdate">Price: </label>
                    <input type="text" id="priceUpdate">
                    <label for="descriptionUpdate">description (optional)</label>
                    <input type="text" id="descriptionUpdate">
                </form>`;
        
    }*/



