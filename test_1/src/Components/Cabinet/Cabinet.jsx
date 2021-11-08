import classes from "./Cabinet.module.css";
import User from "./User/User";

const Cabinet = ({users}) => {
    return (
        <section className={classes.cabinet}>
            {users.map(item => <User key={item.id} name={item.name} imgUrl={item.imgUrl} />)}
        </section>
    );
};

export default Cabinet;