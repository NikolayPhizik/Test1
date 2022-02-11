import {usersAPI} from "../API/API";
import {UsersType} from "../types/type";


const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";



let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 10,
    totalUsersCount: 0
};

type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
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


type SetUsersActionType = {
    type: typeof SET_USERS, 
    users: Array<UsersType>
};
export const setUsers = (users: Array<UsersType>): SetUsersActionType => ({type: SET_USERS, users});

type SetTotalUsersCountActionType = { 
    type: typeof SET_TOTAL_USERS_COUNT, 
    totalUsersCount: number
};
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setUsers(response));
    }
}

export const requestTotalUsersCount = () => {
    return async (dispatch: any) => {
        let response = await usersAPI.getTotalUsersCount();
        dispatch(setTotalUsersCount(response.data.totalUsersCount))
    }
}

export const requestSearchUser = (name: string) => {
    return async (dispatch: any) => {
        let response = await usersAPI.searchUser(name);
        if (response.length !== 0) {
            dispatch(setUsers(response));
        }
    }
}