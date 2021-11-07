import {Link} from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={classes.main_menu}>
            <Link to="/cabinet">
                <div className={classes.menu_link_cab}>
                    <span className={classes.menu_link_span}>Личный кабинет</span>
                </div>
            </Link>
            <Link to="/login">
                <div className={classes.menu_link}>
                    <span className={classes.menu_link_span}>Вход</span>
                </div>
            </Link>
        </nav>
    );
};

export default Nav;