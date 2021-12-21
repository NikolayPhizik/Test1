import Login from "./Login";
import {reduxForm} from "redux-form";
import { connect } from 'react-redux';
import {requestLoginUser} from './../../Redux/auth-reducer';
import LoginForm from "./LoginForm/LoginForm";

const LoginReduxContainer = ({requestLoginUser}) => {

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<Login onSubmit={onSubmit} />
	);
};


export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginContainer = connect(null, {requestLoginUser})(LoginReduxContainer);

export default LoginContainer;