import {usersAPI} from "../API/API";


const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";



let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 10,
    totalUsersCount: ""
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
               ...state,
               users: action.users
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            };
        default:
            return state;
    };
};

export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response));
        //dispatch(setCurrentPage(currentPage));

    }
}

export const requestTotalUsersCount = () => {
    return async (dispatch) => {
        let response = await usersAPI.getTotalUsersCount();
        dispatch(setTotalUsersCount(response.data.totalUsersCount))
    }
}

export const requestSearchUser = (name) => {
    return async (dispatch) => {
        let response = await usersAPI.searchUser(name);
        if (response.length !== 0) {
            dispatch(setUsers(response));
        }
    }
}