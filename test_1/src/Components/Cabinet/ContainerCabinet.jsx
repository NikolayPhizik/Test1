import Cabinet from "./Cabinet";
import {connect} from "react-redux";
import {requestUsers} from "../../Redux/users-reducer";

const ContainerCabinet = ({users}) => {
    return (
        <Cabinet users={users} />
    );
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

export default connect(mapStateToProps, requestUsers)(ContainerCabinet);