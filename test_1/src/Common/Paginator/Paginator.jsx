const Paginator = ({currentPage, pageSize, totalUsersCount, requestUsers, requestTotalUsersCount}) => {

    requestUsers(currentPage, pageSize);
    requestTotalUsersCount();
    return (
        <div>

        </div>
    );
};

export default Paginator;