import classes from "./Register.module.css";
import { RegisterReduxForm } from "./RegisterContainer";


const Register = ({onSubmit}) => {

    

    return (
        <section className={classes.modal}>
            <div className={classes.modal_register}>
                <h2 className={classes.modal_register_h2}>Personal account registration</h2>
                <p>Enter your email and password</p>
                <RegisterReduxForm onSubmit={onSubmit} />
            </div>
        </section>
    );
};

export default Register;