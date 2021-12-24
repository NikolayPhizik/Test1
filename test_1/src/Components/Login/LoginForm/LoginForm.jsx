import classNames from "classnames";
import {Field} from "redux-form";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
	return (
			<form onSubmit={props.handleSubmit}>
					<p className={classes.login_form_p}>
							<Field className={classNames(classes.login_form_input, classes.login_icon_user)}
										 type="text"
										 name="email"
										 placeholder="Логин"
										 component="input" />
					</p>
					<p className={classes.login_form_p}>
							<Field className={classNames(classes.login_form_input, classes.login_icon_password)}
										 type="password"
										 name="password"
										 placeholder="Пароль"
										 component="input" />
					</p>
					<button className={classes.button} type="submit">Login</button>
			</form>
	);
};

export default LoginForm;