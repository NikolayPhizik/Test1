import Cabinet from "./Cabinet";
import {connect} from "react-redux";

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

export default connect(mapStateToProps, null)(ContainerCabinet);