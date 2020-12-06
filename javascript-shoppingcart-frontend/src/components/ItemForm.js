class ItemForm {

    
    constructor() {
        this.attachEventListenerForNewProduct();
    }

    attachEventListenerForNewProduct() {
        const form = document.getElementById('add-form')
        form.addEventListener("submit", this.handleOnSubmit)
    }
 
    handleOnSubmit(event) {
        event.preventDefault();
        const {name, price, image} = event.target
        const data = {
            name: name.value,
            price: price.value,
            image: image.value
        };
        api.createItem(data).then((item) => new Item(item))
    }

   

    
}