// const app = new App()

const BACKEND_URL = 'http://localhost:3000';
const ITEMS_URL = `${BACKEND_URL}/api/v1/items`;
const CATEGORIES_URL = `${BACKEND_URL}/api/v1/categories`

window.addEventListener('DOMContentLoaded', () => {
    fetchItems()
    
    attachSelectCategoryListener()
    changeQuantity()
    addToCart()




    function attachSelectCategoryListener() {
        const form = document.getElementById('select-form')
        // console.log(selectButton)
        form.addEventListener('submit', fetchItemsByCategory)
        
        
    }




    function fetchItems() {
        fetch (`${ITEMS_URL}`)
        .then(response => response.json())
        .then(data => renderItemCards(data));
    }



    // function selCategory(){
        
    //     let selectedCat = document.getElementById("selCategory");
    //     let category = selectedCat.value;
    //     return category
        
    // }

    
    
  
    function fetchItemsByCategory(event){
        event.preventDefault()
        const id = event.target.selcat.value
        fetch (`${CATEGORIES_URL}/${id}/items`)
        .then(response => response.json())
        .then(data => renderItemCards(data))
    }

    

function renderItemCards(items){
    let main = document.querySelector('main')
    main.innerHTML = ""

    items.forEach((item, idx) => {
        main.innerHTML += (itemCard(item, idx))
        
    })
}



function itemCard(item, idx){

    return `<div class ="card">
    <div class ="header" data-id="${idx}"> <p>${item.name}</p>
    <img src="${item.image}" height="150" width="200" alt="" >
    <p class="price">Price: $${item.price}</p>
    <p class="quantity">${item.quantity}</p>
    <div class="btn-group" role="group" aria-label="Basic example">
    <button type="button" id="${idx}" class="add btn btn-secondary">Add to Cart</button>
    
              </div>`

}



function changeQuantity(){
   
    const table = document.getElementById('cart-items')
     
    table.addEventListener("click", (e) => {
        
        if (e.target.classList.contains("plus")){
           let itemQuantity = e.target.parentElement.previousElementSibling.innerHTML
           itemQuantity++
           e.target.parentElement.previousElementSibling.innerHTML = itemQuantity

          
            
        }
        if (e.target.classList.contains("minus")){
            let itemQuantity = e.target.parentElement.previousElementSibling.innerHTML
            if (itemQuantity > 0){
            itemQuantity--
            e.target.parentElement.previousElementSibling.innerHTML = itemQuantity
            }
        }
        
      

    })
    }



function addToCart(){
    
    const main = document.querySelector('main')
    main.addEventListener("click", (e) => {
        if (e.target.classList.contains("add")) {
            // debugger
            let table = document.getElementById('cart-items')
            const tableRow = table.insertRow(1)
            let cell1 = tableRow.insertCell(0)
            let cell2 = tableRow.insertCell(1)
            let cell3 = tableRow.insertCell(2)
            let cell4 = tableRow.insertCell(3)
            let cell5 = tableRow.insertCell(4)
            
            cell1.innerHTML = `${e.target.parentElement.parentElement.firstElementChild.innerHTML}`;
            cell2.innerHTML = `${e.target.parentElement.parentElement.children[2].innerHTML}`;
            cell3.innerHTML = `${e.target.parentElement.parentElement.children[3].innerHTML}`;
            cell4.innerHTML = `<button type="button" class="plus btn btn-secondary">+</button>
            <button type="button" class="minus btn btn-secondary">-</button>`;
            cell5.innerHTML = `<button type="button" class="remove btn btn-secondary">ⓧ</button>`
        }      
    })

}



// const api = new ApiService("http://localhost:3000")
// console.log(api)
});

//Build code for each item. 

//Have a function to create cards for each item in the json file.
//I will need a fetch request for deleting(removing) the item from the cart when "x" is clicked. I will also need an increment and decrement "+"
// and "-" buttons. I will need to have all the items appended to "main". There should be a drop down for categories which gets all the 
//items. 