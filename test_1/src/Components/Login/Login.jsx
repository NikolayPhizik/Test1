import classes from "./Login.module.css";
import classNames from "classnames";
import {Field, reduxForm} from "redux-form";

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData);
    };

    return (
        <section className={classes.modal}>
            <div className={classes.modal_login}>
                <h2 className={classes.modal_login_h2}>Personal area</h2>
                <p>Enter your login and password</p>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </section>
    );
};

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <p className={classes.login_form_p}>
                <Field className={classNames(classes.login_form_input, classes.login_icon_user)}
                       type="text"
                       name="login"
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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

export default Login;