import classes from "./Paginator.module.css";


const Paginator = ({pageSize, totalUsersCount, requestTotalUsersCount, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    requestTotalUsersCount();
    return (
        <div className={classes.paginator_box}>
            {pages.map(p => {
                return <span className={classes.span} key={p} onClick={(e) => {
                    onPageChanged(p);
                }}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;