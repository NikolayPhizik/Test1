import classes from "./Cabinet.module.css";
import User from "./User/User";

const Cabinet = (props) => {
    return (
        <section className={classes.cabinet}>
            {props.userDate.map(item => <User key={item.id} name={item.name} imgUrl={item.imgUrl} />)}
        </section>
    );
};

export default Cabinet;