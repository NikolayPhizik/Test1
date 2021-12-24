import axios from "axios";


let instance = axios.create({
    baseURL: "http://localhost:3001"
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/users?_page=${currentPage}&_limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getTotalUsersCount() {
        return instance.get("/dataCount")
            .then(response => {
                return response;
            });
    },
    searchUser(name) {
        return instance.get(`/users?q=${name}`)
            .then(response => {
                return response.data;
            });
    }
};

export const authAPI = {
    registerUser(formData) {
        return instance.post("/register", formData)
            .then(response => {
                return response.data;
            });
    },
    loginUser(formData) {
        return instance.post("/login", formData)
            .then(response => {
                return response;
            });
    }
};