class ApiService {
    constructor(BACKEND_URL) {
        this.backendURL = BACKEND_URL;
    }

    getAllItems = () => fetch(`${this.baseURL}/items`).then(resp => Response.json)
}

