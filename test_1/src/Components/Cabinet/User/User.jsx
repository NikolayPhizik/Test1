import classes from "./User.module.css";

const User = (props) => {
    return (
        <div className={classes.border}>
            <img className={classes.img} src={props.imgUrl}/>
            <div className={classes.namesBlock}>
                <h3 className={classes.h3}>Name and Last name:</h3>
                <p>{props.name}</p>
            </div>
        </div>
    );
};

export default User;