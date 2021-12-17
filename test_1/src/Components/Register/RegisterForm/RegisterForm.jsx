import classNames from "classnames";
import {Field} from "redux-form";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
	return (
		 <form onSubmit={props.handleSubmit}>
			  <p className={classes.register_form_p}>
					<Field className={classNames(classes.register_form_input, classes.register_icon_user)}
							 type="text"
							 name="email"
							 placeholder="Логин"
							 component="input" />
			  </p>
			  <p className={classes.register_form_p}>
					<Field className={classNames(classes.register_form_input, classes.register_icon_password)}
							 type="password"
							 name="password"
							 placeholder="Пароль"
							 component="input" />
			  </p>
			  <button className={classes.button} type="submit">Register</button>
		 </form>
	);
};

export default RegisterForm;