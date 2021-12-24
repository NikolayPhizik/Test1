import Login from "./Login";
import {reduxForm} from "redux-form";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {requestLoginUser} from './../../Redux/auth-reducer';
import LoginForm from "./LoginForm/LoginForm";

const LoginReduxContainer = ({auth, requestLoginUser}) => {

	const onSubmit = (formData) => {
		requestLoginUser(formData);
	};

	return (
		auth !== "" ? <Redirect to='/cabinet' /> : <Login onSubmit={onSubmit} />
	);
};


let mapStateToProps = (state) => {
	return {
		auth: state.isAuth.accessToken
	}
};

export const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const LoginContainer = connect(mapStateToProps, {requestLoginUser})(LoginReduxContainer);

export default LoginContainer;