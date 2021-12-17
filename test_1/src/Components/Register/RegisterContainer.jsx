import Register from "./Register";
import {reduxForm} from "redux-form";
import RegisterForm from "./RegisterForm/RegisterForm";
import { connect } from 'react-redux';
import {requestRegisterUser} from '../../Redux/auth-reducer';


const RegisterReduxContainer = ({requestRegisterUser}) => {

	const onSubmit = (formData) => {
		requestRegisterUser(formData);
  };

    return (
        <Register onSubmit={onSubmit} />
    );
};

export const RegisterReduxForm = reduxForm({form: 'register'})(RegisterForm);


const RegisterContainer = connect(null, {requestRegisterUser})(RegisterReduxContainer);

export default RegisterContainer;