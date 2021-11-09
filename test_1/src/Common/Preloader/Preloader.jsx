import preloaderImg from "./../../assets/img/loading.gif";
import classes from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={classes.pos}>
            <img className={classes.preloader} src={preloaderImg}/>
        </div>
    );
};

export default Preloader;