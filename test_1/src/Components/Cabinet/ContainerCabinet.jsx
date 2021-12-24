import Cabinet from "./Cabinet";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';
import {requestUsers} from "../../Redux/users-reducer";

const ContainerCabinet = ({users, auth}) => {
    return (
        auth === "" ? <Redirect to='/login' /> : <Cabinet users={users} />
    );
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        auth: state.isAuth.accessToken
    }
};

export default connect(mapStateToProps, requestUsers)(ContainerCabinet);