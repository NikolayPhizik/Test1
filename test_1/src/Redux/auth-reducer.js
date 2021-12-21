import {authAPI} from '../API/API';

const SET_REGISTER_USER = 'SET_REGISTER_USER';


let initialState = {
	email: "",
	password: "",
	auth: false
};



export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REGISTER_USER:
			 return {
				 ...state,
				 email: action.formData.email,
				 password: action.formData.password
			 };
		default:
			 return state;
  };
};


export const setRegisterUser = (formData) => ({type: SET_REGISTER_USER, formData});
//export const setLoginUser = (formData) => ({type: SET_REGISTER_USER, formData});


export const requestRegisterUser = (formData) => {
	return async (dispatch) => {
		 let response = await authAPI.registerUser(formData);
		 dispatch(setRegisterUser(response));
	}
}

export const requestLoginUser = (formData) => {
	return async (dispatch) => {
		 let response = await authAPI.loginUser(formData);
		 //dispatch(setLoginUser(response));
	}
}