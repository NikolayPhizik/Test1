import {connect} from "react-redux";
import Paginator from "./Paginator";
import {requestTotalUsersCount, requestUsers} from "../../Redux/users-reducer";


const PaginatorContainer = ({pageSize, totalUsersCount, requestUsers, requestTotalUsersCount}) => {

    const onPageChanged = (currentPage) => {
        requestUsers(currentPage, pageSize);
    };

    return (
        <Paginator pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   requestTotalUsersCount={requestTotalUsersCount}
                   onPageChanged={onPageChanged}/>
    )
}

let mapStateToProps = (state) => {
    return {
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

export default connect(mapStateToProps, {requestUsers, requestTotalUsersCount})(PaginatorContainer);