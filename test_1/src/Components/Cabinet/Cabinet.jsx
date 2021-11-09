import classes from "./Cabinet.module.css";
import User from "./User/User";
import Preloader from "../../Common/Preloader/Preloader";

const Cabinet = ({users}) => {
    return (
        <section className={classes.cabinet}>
            {users.length === 0 && <Preloader />}
            {users.map(item => <User key={item.id} name={item.name} imgUrl={item.imgUrl} />)}
        </section>
    );
};

export default Cabinet;