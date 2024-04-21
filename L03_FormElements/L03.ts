document.addEventListener("DOMContentLoaded", () => {
  let shoppingList = document.getElementById("shopping-items") as HTMLUListElement;
  let addItemForm = document.getElementById("add-item-form") as HTMLFormElement;

  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let itemNameInput = document.getElementById("item-name") as HTMLInputElement;
    let itemQuantityInput = document.getElementById("item-quantity") as HTMLInputElement;
    let itemCommentInput = document.getElementById("item-comment") as HTMLInputElement;

    let itemName = itemNameInput.value;
    let itemQuantity = itemQuantityInput.value;
    let itemComment = itemCommentInput.value;

    addItemToList(itemName, itemQuantity, itemComment);

    itemNameInput.value = "";
    itemQuantityInput.value = "";
    itemCommentInput.value = "";
  });

  function addItemToList(name: string, quantity: string, comment: string) {
    let newItem = document.createElement("li");
    newItem.classList.add("item");

    newItem.innerHTML = `
      <span class="name">${name}</span>
      <span class="quantity">${quantity}</span>
      <span class="comment">${comment}</span>
      <button class="buy-btn">O</button>
      <button class="delete-btn">X</button>
    `;

    shoppingList.appendChild(newItem);

    let buyBtn = newItem.querySelector(".buy-btn") as HTMLButtonElement;
    buyBtn.addEventListener("click", () => {
      markAsBought(newItem);
    });

    let deleteBtn = newItem.querySelector(".delete-btn") as HTMLButtonElement;
    deleteBtn.addEventListener("click", () => {
      console.log(`Item "${name}" deleted from the list.`);
      newItem.remove();
    });
  }

  function markAsBought(item: HTMLLIElement) {
    let itemNameElement = item.querySelector(".name") as HTMLElement;
    let itemName = itemNameElement.textContent || "";
    let currentDate = new Date().toLocaleDateString();
    itemNameElement.textContent = `${itemName} (gekauft am ${currentDate})`;
    console.log(`Item "${itemName}" marked as bought.`);
  }
});
