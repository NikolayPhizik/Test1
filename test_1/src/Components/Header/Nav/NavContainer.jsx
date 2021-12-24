import { connect } from "react-redux";
import Nav from "./Nav";

const NavReduxContainer = ({auth}) => {
	return (
		<Nav auth={auth} />
	);
};

let mapStateToProps = (state) => {
	return {
		auth: state.isAuth.accessToken
	}
};

const NavContainer = connect(mapStateToProps, null)(NavReduxContainer);

export default NavContainer;