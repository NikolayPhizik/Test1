import classes from "./Cabinet.module.css";
import User from "./User/User";
import Preloader from "../../Common/Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

const Cabinet = ({users}) => {
    return (
        <section className={classes.cabinet}>
            {users.length === 0 && <Preloader />}
            <SearchForm />
            {users.map(item => <User key={item.id} name={item.name} imgUrl={item.avatar} />)}
        </section>
    );
};

export default Cabinet;