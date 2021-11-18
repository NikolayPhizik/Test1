import SearchForm from "./SearchForm";
import {connect} from "react-redux";
import {requestSearchUser} from "../../Redux/users-reducer";

const SearchFormContainer = ({requestSearchUser}) => {

    const searchUser = (name) => {
        requestSearchUser(name);
    }

    return (
        <SearchForm searchUser={searchUser}/>
    );
};

export default connect(null, {requestSearchUser})(SearchFormContainer);