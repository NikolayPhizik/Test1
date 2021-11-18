import classes from "./SearchForm.module.css";


const SearchForm = ({searchUser}) => {

    return (
        <section>
            <div className={classes.main_wrapper}>
                <div className={classes.form_container}>
                    <form className={classes.form}>
                        <input className={classes.input} type="text" name="search" placeholder="Enter a name to search" />
                        <span onClick={(e) => {searchUser("RONNIE BALISTRERI")}} className={classes.span}>Search</span>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchForm;