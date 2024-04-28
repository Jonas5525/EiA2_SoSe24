// Definition der Datenstruktur für ein Einkaufselement
interface ShoppingItem {
  name: string;
  quantity: number;
  comment: string;
  bought: boolean;
  purchaseDate?: string;
}

document.addEventListener("DOMContentLoaded", () => {
  // Einkaufsliste aus dem Local Storage abrufen
  let shoppingList: ShoppingItem[] = JSON.parse(localStorage.getItem("shoppingList") || "[]");

  // Funktion zum Laden der Einkaufsliste aus dem Local Storage
  function loadShoppingListFromLocalStorage() {
    const savedData = localStorage.getItem("shoppingList");
    if (savedData) {
      shoppingList = JSON.parse(savedData);
      renderShoppingList();
    }
  }

  // Funktion zum Speichern der Einkaufsliste im Local Storage
  function saveShoppingListToLocalStorage() {
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
  }

  // Funktion zum Rendern der Einkaufsliste
  function renderShoppingList() {
    const shoppingListContainer = document.getElementById("shopping-items") as HTMLUListElement;
    shoppingListContainer.innerHTML = "";

    shoppingList.forEach(item => {
      const newItem = createShoppingItemElement(item);
      shoppingListContainer.appendChild(newItem);
    });
  }

  // Funktion zur Erstellung eines HTML-Elements für ein Einkaufselement
  function createShoppingItemElement(item: ShoppingItem): HTMLLIElement {
    const newItem = document.createElement("li");
    newItem.classList.add("item");

    // Text für das Kaufdatum entsprechend setzen
    const purchaseInfo = item.bought ? `(gekauft am ${item.purchaseDate})` : '';

    newItem.innerHTML = `
      <span class="name">${item.name}</span>
      <span class="quantity">${item.quantity}</span>
      <span class="comment">${item.comment}</span>
      <span class="purchase-info">${purchaseInfo}</span>
      <button class="buy-btn" ${item.bought ? 'disabled' : ''}>O</button>
      <button class="delete-btn">X</button>
    `;

    newItem.querySelector(".buy-btn")?.addEventListener("click", () => {
      markAsBought(item);
    });

    newItem.querySelector(".delete-btn")?.addEventListener("click", () => {
      deleteItem(item);
    });

    return newItem;
  }

  // Funktion zum Hinzufügen eines Elements zur Einkaufsliste
  function addItemToList(name: string, quantity: number, comment: string) {
    const newItem: ShoppingItem = {
      name: name,
      quantity: quantity,
      comment: comment,
      bought: false
    };

    shoppingList.push(newItem);
    saveShoppingListToLocalStorage();

    renderShoppingList();
  }

  // Funktion zum Markieren eines Elements als gekauft
  function markAsBought(item: ShoppingItem) {
    if (!item.bought) {
      item.bought = true;
      item.purchaseDate = new Date().toLocaleDateString();
      saveShoppingListToLocalStorage();
      renderShoppingList();
    }
  }

  // Funktion zum Löschen eines Elements aus der Einkaufsliste
  function deleteItem(item: ShoppingItem) {
    shoppingList = shoppingList.filter(i => i !== item);
    saveShoppingListToLocalStorage();
    renderShoppingList();
  }

  // Formular zum Hinzufügen eines Elements zur Einkaufsliste
  const addItemForm = document.getElementById("add-item-form") as HTMLFormElement;
  addItemForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const itemNameInput = document.getElementById("item-name") as HTMLInputElement;
    const itemQuantityInput = document.getElementById("item-quantity") as HTMLInputElement;
    const itemCommentInput = document.getElementById("item-comment") as HTMLInputElement;

    const itemName = itemNameInput.value;
    const itemQuantity = Number(itemQuantityInput.value);
    const itemComment = itemCommentInput.value;

    addItemToList(itemName, itemQuantity, itemComment);

    itemNameInput.value = "";
    itemQuantityInput.value = "";
    itemCommentInput.value = "";
  });

  // Einkaufsliste beim Laden der Seite aus dem Local Storage laden
  loadShoppingListFromLocalStorage();
});


