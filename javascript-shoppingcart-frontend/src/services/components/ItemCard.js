class ItemCard {

    constructor(item) {
        this.item = item;
        this.renderItemCard();
        this.addToCart();
    }

    static getAll(){
        api.getAllItems().then((data) => data.forEach((item) => new ItemCard(item))
        );
    }


    

    renderItemCard(){
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
        <p class="price">${item.price}</p>
        <p class="quantity">${item.quantity}</p>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" id="${idx}" class="add btn btn-secondary">Add to Cart</button>
        
                  </div>`
    
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
    
}