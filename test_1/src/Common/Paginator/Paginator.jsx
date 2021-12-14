import classes from "./Paginator.module.css";
import classNames from "classnames";
import {useState} from "react";


const Paginator = ({pageSize, totalUsersCount, requestTotalUsersCount, onPageChanged}) => {

    const [portionNumber, setpPortionNumber] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionSize = 3;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    requestTotalUsersCount();
    return (
        <div className={classes.paginator_box}>
            <div className={classes.button_back}>
                {portionNumber > 1 && <button className={classes.button} onClick={() => {setpPortionNumber(portionNumber - 1)}}>Back</button>}
            </div>
            <div className={classes.container}>
                {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
                    return <div className={classNames(
                        {[classes.selectedPage]: currentPage === p}, 
                        classes.span)} key={p} onClick={(e) => {
                        onPageChanged(p);
                        setCurrentPage(p);
                    }}>{p}</div>
                })}
            </div>
            <div className={classes.button_next}>
                {portionCount > portionNumber && <button className={classes.button} onClick={() => {setpPortionNumber(portionNumber + 1)}}>Next</button>}
            </div>
        </div>
    );
};

export default Paginator;