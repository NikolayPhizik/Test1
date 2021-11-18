import axios from "axios";


let instance = axios.create({
    baseURL: "http://localhost:3001"
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`/people?_page=${currentPage}&_limit=${pageSize}`)
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
        return instance.get(`/people?q=${name}`)
            .then(response => {
                return response.data;
            });
    }
};