import classes from "./Header.module.css";
import NavContainer from "./Nav/NavContainer";

const Header = () => {
    return (
        <header className={classes.header_top}>
            <div className={classes.main_wrapper}>
                <h1><span>My</span> Test</h1>
                <NavContainer />
            </div>
        </header>
    );
};

export default Header;