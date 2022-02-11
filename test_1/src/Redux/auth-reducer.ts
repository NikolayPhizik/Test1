import {authAPI} from '../API/API';
import {FormDataType} from '../types/type';

const SET_LOGIN_USER = 'SET_LOGIN_USER';


let initialState = {
	accessToken: ""
};

type InitialStateType = typeof initialState;


export const authReducer = (state = initialState, action: any): InitialStateType => {
	switch (action.type) {
		case SET_LOGIN_USER:
			return {
				...state,
				accessToken: action.accessToken
			};
		default:
			return state;
  };
};


type SetLoginUserActionType = {
	type: typeof SET_LOGIN_USER, 
	accessToken: string
};
export const setLoginUser = (accessToken: string): SetLoginUserActionType => ({type: SET_LOGIN_USER, accessToken});


export const requestRegisterUser = (formData: FormDataType) => {
	return async (dispatch: any) => {
		let response = await authAPI.registerUser(formData);
		dispatch(setLoginUser(response.data.accessToken));
	}
}

export const requestLoginUser = (formData: FormDataType) => {
	return async (dispatch: any) => {
		let response = await authAPI.loginUser(formData);
		if (response.data.accessToken) {
		dispatch(setLoginUser(response.data.accessToken));
		}
	}
}