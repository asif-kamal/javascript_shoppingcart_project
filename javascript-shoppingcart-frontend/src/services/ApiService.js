class ApiService {
    constructor(BACKEND_URL) {
        this.BACKEND_URL = BACKEND_URL;
    }

    getAllItems = () => fetch(`${this.baseURL}/items`).then(resp => Response.json)


    createItem = (data) => {
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


  fetchItemsByCategory = (event) => {
    event.preventDefault()
    const id = event.target.selcat.value
    fetch (`${CATEGORIES_URL}/${id}/items`)
    .then(response => response.json())
    .then(data => renderItemCards(data))
}
}