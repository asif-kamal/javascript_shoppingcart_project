// const app = new App()

const BACKEND_URL = 'http://localhost:3000';
const ITEMS_URL = `${BACKEND_URL}/api/v1/items`;
const CATEGORIES_URL = `${BACKEND_URL}/api/v1/categories`

window.addEventListener('DOMContentLoaded', () => {
    fetchItems()
    
    attachSelectCategoryListener()
    changeQuantity()
    addToCart()
    removeItem()
    changeTotal()
    attachEventListenerForNewProduct()
    

class Item{
    constructor(itemAttributes){
        this.name = itemAttributes.name;
        this.price = itemAttributes.price;
        this.image = itemAttributes.image;
        this.quantity = itemAttributes.quantity;
        this.category_id = itemAttributes.category_id;
    }

    itemCard() {

        return `<div class ="card">
        <div class ="header" data-id="${this.id}"> <p>${this.name}</p>
        <img src="${this.image}" height="150" width="200" alt="" >
        <p class="price">${this.price}</p>
        <p class="quantity">${this.quantity}</p>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" id="${this.id}" class="add btn btn-secondary">Add to Cart</button>
        
                  </div>`
    
    }
}


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




    function createItem(data) {
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        body: JSON.stringify(data),
    };
    return fetch(`${ITEMS_URL}`, config).then((res) => res.json());
};
    
  

   function attachEventListenerForNewProduct() {
       const form = document.getElementById('add-form')
       form.addEventListener("submit", handleOnSubmit)
   }

   function handleOnSubmit(event) {
       event.preventDefault();
       const {name, price, image} = event.target
       const data = {
           name: name.value,
           price: price.value,
           image: image.value
       };
       createItem(data).then((item) => renderItemCard(item))
   }

    function fetchItemsByCategory(event){
        event.preventDefault()
        const id = event.target.selcat.value
        fetch (`${CATEGORIES_URL}/${id}/items`)
        .then(response => response.json())
        .then(data => renderItemCards(data))
    }

    
function renderItemCard(item) {
    let main = document.querySelector('main')
    main.innerHTML += new Item(item).itemCard()
}

function renderItemCards(items){
    let main = document.querySelector('main')
    main.innerHTML = ""

    items.forEach((item, idx) => {
        main.innerHTML += new Item(item).itemCard()
        
    })
}





function changeQuantity(){
   
    const table = document.getElementById('cart-items')
     
    table.addEventListener("click", (e) => {
        
        if (e.target.classList.contains("plus")){
           let itemQuantity = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
           itemQuantity++
           e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = itemQuantity

          
            
        }
        if (e.target.classList.contains("minus")){
            let itemQuantity = e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML
            if (itemQuantity > 0){
            itemQuantity--
            e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML = itemQuantity
            }
        }
        
      

    })
    }



function addToCart(){
    
    const main = document.querySelector('main')
    main.addEventListener("click", (e) => {
        if (e.target.classList.contains("add")) {
            
            let table = document.getElementById('cart-items')
            const tableRow = table.insertRow(1)
            let cell1 = tableRow.insertCell(0)
            let cell2 = tableRow.insertCell(1)
            let cell3 = tableRow.insertCell(2)
            let cell4 = tableRow.insertCell(3)
            let cell5 = tableRow.insertCell(4)
            let cell6 = tableRow.insertCell(5)
            cell4.classList = 'item-total'
            
            cell1.innerHTML = `${e.target.parentElement.parentElement.firstElementChild.innerHTML}`;
            cell2.innerHTML = `${e.target.parentElement.parentElement.children[2].innerHTML}`;
            cell3.innerHTML = `${e.target.parentElement.parentElement.children[3].innerHTML}`;
            cell4.innerHTML = 0;
            cell5.innerHTML = `<button type="button" class="plus btn btn-secondary">+</button>
            <button type="button" class="minus btn btn-secondary">-</button>`;
            cell6.innerHTML = `<button type="button" class="remove btn btn-secondary">ⓧ</button>`

            
        }
    })

}

function removeItem(){

    const table = document.getElementById('cart-items')
     
    table.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove")){
            e.target.parentElement.parentElement.remove()
            const totalPrice = document.getElementsByClassName('cart-total-price')[0]
            totalPrice.innerHTML = ""
        }
    })
}

function changeTotal(){

    let table = document.getElementById('cart-items')
   
   
    

    let itemsTotal = 0

    table.addEventListener("click", (e) => {
        if (e.target.classList.contains("plus")){
            
            let itemQuantity = parseInt(e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML, 10)
            let itemPrice = e.target.parentElement.parentElement.children[1].innerHTML
            let itemTotal = e.target.parentElement.parentElement.children[3]
           
            
           
            
            const newItemTotal = (itemPrice * itemQuantity)
            
            itemTotal.innerHTML = newItemTotal
            updateCartTotal()
            
        }

        if (e.target.classList.contains("minus")){
            let itemQuantity = parseInt(e.target.parentElement.previousElementSibling.previousElementSibling.innerHTML, 10)
            let itemPrice = e.target.parentElement.parentElement.children[1].innerHTML
            let itemTotal = e.target.parentElement.parentElement.children[3]
            
           
            
            const newItemTotal = (itemPrice * itemQuantity)
            
            itemTotal.innerHTML = newItemTotal
            updateCartTotal()
        }
        
    })
   
    }

    
     
     function updateCartTotal(){
        const totalPrice = document.getElementsByClassName('cart-total-price')[0]
        const allItemTotals = document.getElementsByClassName('item-total')
        let itemsTotal = 0

        for(let itemTotal of allItemTotals) {
            
            itemsTotal += parseInt(itemTotal.innerHTML, 10)
            totalPrice.innerHTML = itemsTotal
        }
     }
    



    


});

//Build code for each item. 

//Have a function to create cards for each item in the json file.
//I will need a fetch request for deleting(removing) the item from the cart when "x" is clicked. I will also need an increment and decrement "+"
// and "-" buttons. I will need to have all the items appended to "main". There should be a drop down for categories which gets all the 
//items. 