import axios from "axios";


let instance = axios.create({
    baseURL: "http://localhost:3001"
});

export const usersAPI = {
    getUsers() {
        return instance.get("people")
            .then(response => {
                return response.data;
            });
    }
};