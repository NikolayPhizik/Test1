import {Link} from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = ({auth}) => {
    return (
        <nav className={classes.main_menu}>
            <Link to="/cabinet">
                <div className={classes.menu_link_cab}>
                    <span className={classes.menu_link_span}>Personal Area</span>
                </div>
            </Link>
            {auth === "" ? 
            <Link to="/login">
                <div className={classes.menu_link}>
                    <span className={classes.menu_link_span}>Login</span>
                </div>
            </Link> : 
            <Link to="/login">
                <div className={classes.menu_link}>
                    <span className={classes.menu_link_span}>Logout</span>
                </div>
            </Link>}
            <Link to="/register">
            <div className={classes.menu_link}>
                <span className={classes.menu_link_span}>Register</span>
            </div>
        </Link>
        </nav>
    );
};

export default Nav;