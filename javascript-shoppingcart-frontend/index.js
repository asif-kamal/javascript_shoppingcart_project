const BACKEND_URL = 'localhost:3000';
const ITEMS_URL = `${BACKEND_URL}/items`;

window.addEventListener('DOMContentLoaded', () => {
    fetchItems()

    function fetchItems() {
        fetch (`${ITEMS_URL}`)
        .then(response => response.json())
        .then(data => renderItemCards(data));
    }
  })

function renderItemCards(items){
    let main = document.querySelector('main')
    items.forEach((item, idx) => main.innerHTML += (itemCard(item, idx)))
}



function itemCard(item, idx){
    return `<div class ="card">
    <div class ="header" data-id="${idx}"> <p>${item.name}</p>
    <img src="${item.image}" height="150" width="200" alt="" >
    <p class="price">"${item.price}"</p>
    <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" class="btn btn-secondary">♡</button>
    <button type="button" class="btn btn-secondary">+</button>
    <button type="button" class="btn btn-secondary">-</button>
              </div>`

}

//Build code for each item. 

//Have a function to create cards for each item in the json file.
//I will need a fetch request for deleting(removing) the item from the cart when "x" is clicked. I will also need an increment and decrement "+"
// and "-" buttons. I will need to have all the items appended to "main". There should be a drop down for categories which gets all the 
//items. 