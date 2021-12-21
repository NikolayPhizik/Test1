import classes from "./Login.module.css";
import {LoginReduxForm} from "./LoginContainer";


const Login = ({onSubmit}) => {

    return (
        <section className={classes.modal}>
            <div className={classes.modal_login}>
                <h2 className={classes.modal_login_h2}>Personal login</h2>
                <p>Enter your email and password</p>
                <LoginReduxForm onSubmit={onSubmit} />
            </div>
        </section>
    );
};


export default Login;