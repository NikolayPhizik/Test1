import classes from "./Login.module.css";
import classNames from "classnames";

const Login = () => {
    return (
        <section className={classes.modal}>
            <div className={classes.modal_login}>
                <h2 className={classes.modal_login_h2}>Личный кабинет</h2>
                <p>Введите свой логин и пароль.</p>
                <form>
                    <p className={classes.login_form_p}>
                        <input className={classNames(classes.login_form_input, classes.login_icon_user)} type="text" name="login" placeholder="Логин"/>
                    </p>
                    <p className={classes.login_form_p}>
                        <input className={classNames(classes.login_form_input, classes.login_icon_password)} type="password" name="password"
                               placeholder="Пароль"/>
                    </p>
                    <button className={classes.button} type="submit">Войти</button>
                </form>
            </div>
        </section>
    );
};

export default Login;