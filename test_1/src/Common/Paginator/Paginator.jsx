import classes from "./Paginator.module.css";
import classNames from "classnames";
import {useState} from "react";


const Paginator = ({pageSize, totalUsersCount, requestTotalUsersCount, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);

    requestTotalUsersCount();
    return (
        <div className={classes.paginator_box}>
            {pages.map(p => {
                return <span className={classNames({[classes.selectedPage]: currentPage === p} ,classes.span)} key={p} onClick={(e) => {
                    onPageChanged(p);
                    setCurrentPage(p);
                }}>{p}</span>
            })}
        </div>
    );
};

export default Paginator;