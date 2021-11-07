import Nav from "./Nav/Nav";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header_top}>
            <div className={classes.main_wrapper}>
                <h1><span>My</span> Test</h1>
                <Nav />
            </div>
        </header>
    );
};

export default Header;