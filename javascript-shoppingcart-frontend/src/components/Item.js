class Item {

    static main = document.querySelector('main')

    constructor(item){
        this.name = item.name;
        this.price = item.price;
        this.image = item.image;
        this.quantity = item.quantity;
        this.category_id = item.category_id
       
        this.renderItemCard();
       
        
    }

    static getAll() {
        api.getAllItems().then((data) =>
        data.forEach((item) => new Item(item)))
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

    renderItemCard() {
    
    this.constructor.main.innerHTML += this.itemCard()
}

 

}