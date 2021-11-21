import classes from "./SearchForm.module.css";
import {Field, reduxForm} from "redux-form";


const SearchForm = ({searchUser}) => {

    const onSubmit = (formData) => {
        searchUser(formData.search);
    }

    return (
        <section>
            <div className={classes.main_wrapper}>
                <div className={classes.form_container}>
                    <SearchReduxForm onSubmit={onSubmit}/>
                </div>
            </div>
        </section>
    );
};

const Form = (props) => {
    return (
        <form className={classes.form} onSubmit={props.handleSubmit}>
            <Field className={classes.input}
                   name="search"
                   placeholder="Enter a name to search"
                   component="input" type="text" />
            <button className={classes.button} type="submit">Search</button>
        </form>
    );
};

const SearchReduxForm = reduxForm({form: 'search'})(Form);

export default SearchForm;