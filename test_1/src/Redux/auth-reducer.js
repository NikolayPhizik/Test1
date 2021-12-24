import {authAPI} from '../API/API';

const SET_LOGIN_USER = 'SET_LOGIN_USER';


let initialState = {
	accessToken: ""
};



export const authReducer = (state = initialState, action) => {
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


export const setLoginUser = (accessToken) => ({type: SET_LOGIN_USER, accessToken});


export const requestRegisterUser = (formData) => {
	return async (dispatch) => {
		 let response = await authAPI.registerUser(formData);
		 dispatch(setLoginUser(response.data.accessToken));
	}
}

export const requestLoginUser = (formData) => {
	return async (dispatch) => {
		 let response = await authAPI.loginUser(formData);
		 if (response.data.accessToken) {
			dispatch(setLoginUser(response.data.accessToken));
		 }
		 	
	}
}