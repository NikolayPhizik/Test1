import {connect} from "react-redux";
import Paginator from "./Paginator";
import {requestTotalUsersCount, requestUsers} from "../../Redux/users-reducer";


const PaginatorContainer = ({currentPage, pageSize, totalUsersCount, requestUsers, requestTotalUsersCount}) => {
    return (
        <Paginator currentPage={currentPage}
                   pageSize={pageSize}
                   totalUsersCount={totalUsersCount}
                   requestUsers={requestUsers}
                   requestTotalUsersCount={requestTotalUsersCount}/>
    )
}

let mapStateToProps = (state) => {
    return {
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount
    }
}

export default connect(mapStateToProps, {requestUsers, requestTotalUsersCount})(PaginatorContainer);