"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const shoppingList = document.getElementById("shopping-items");
    const addItemForm = document.getElementById("add-item-form");
    addItemForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const itemNameInput = document.getElementById("item-name");
        const itemQuantityInput = document.getElementById("item-quantity");
        const itemCommentInput = document.getElementById("item-comment");
        const itemName = itemNameInput.value;
        const itemQuantity = itemQuantityInput.value;
        const itemComment = itemCommentInput.value;
        addItemToList(itemName, itemQuantity, itemComment);
        itemNameInput.value = "";
        itemQuantityInput.value = "";
        itemCommentInput.value = "";
    });
    function addItemToList(name, quantity, comment) {
        const newItem = document.createElement("li");
        newItem.classList.add("item");
        newItem.innerHTML = `
        <span class="name">${name}</span>
        <span class="quantity">${quantity}</span>
        <span class="comment">${comment}</span>
        <button class="buy-btn">O</button>
        <button class="delete-btn">X</button>
      `;
        shoppingList.appendChild(newItem);
        const buyBtn = newItem.querySelector(".buy-btn");
        buyBtn.addEventListener("click", () => {
            markAsBought(newItem);
        });
        const deleteBtn = newItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            console.log(`Item "${name}" deleted from the list.`);
            newItem.remove();
        });
    }
    function markAsBought(item) {
        const itemNameElement = item.querySelector(".name");
        const itemName = itemNameElement.textContent || "";
        const currentDate = new Date().toLocaleDateString();
        itemNameElement.textContent = `${itemName} (gekauft am ${currentDate})`;
        console.log(`Item "${itemName}" marked as bought.`);
    }
});
//# sourceMappingURL=L03.js.map