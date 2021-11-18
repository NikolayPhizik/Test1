import classes from "./Cabinet.module.css";
import User from "./User/User";
import Preloader from "../../Common/Preloader/Preloader";
import PaginatorContainer from "../../Common/Paginator/PaginatorContainer";
import SearchFormContainer from "../SearchForm/SearchFormContainer";

const Cabinet = ({users}) => {
    return (
        <section className={classes.cabinet}>
            {users.length === 0 && <Preloader />}
            <SearchFormContainer />
            <PaginatorContainer />
            {users.map(item => <User key={item.id} name={item.name} imgUrl={item.avatar} />)}
        </section>
    );
};

export default Cabinet;