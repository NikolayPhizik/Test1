import classes from "./SearchForm.module.css";


const SearchForm = () => {
    return (
        <section>
            <div className={classes.main_wrapper}>
                <div className={classes.form_container}>
                    <form className={classes.form}>
                        <input className={classes.input} type="text" name="search" placeholder="Enter a name to search" />
                            <button className={classes.button}>
                                <span className={classes.span}>Search</span>
                            </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchForm;