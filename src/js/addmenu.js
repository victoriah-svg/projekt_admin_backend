"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const tableSelect = document.getElementById("selectTableAdd");
    const nameInput = document.getElementById("nameInputAdd");
    const priceInput = document.getElementById("priceInputAdd");
    const descriptionInput = document.getElementById("descriptionInputAdd");
    const submitBtn = document.getElementById("submitbtnAdd");
    const selectDiv = document.getElementById("selectionDivUpdate");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        //array för felmeddelanden
        let errorMessages = [];
        //inputvalues - sanerade och borttagna mellanslag
        const tableSelectValue = tableSelect.value.replace(/(<([^>]+)>)/ig, '');
        const nameValue = nameInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        //const categoryValue = categoryInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceValue = priceInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const descriptionValue = descriptionInput.value.trim().replace(/(<([^>]+)>)/ig, '');
        const priceConvertNumb = Number(priceValue);

        console.log("table: " + tableSelectValue + " name: " + nameValue + " price: " + priceValue + " description: " + descriptionValue);

    });

});