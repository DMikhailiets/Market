import { connect } from "react-redux";
import { fetchUserData, fetchCartCounter } from "../../../redux/selectors";
import MenuComponent from '../components/menuComponent'
import { AppState } from "../../../redux/store";
import { logout } from "../../../redux/reducers/userReducer";

export default connect((state: AppState) => ({
    userData: fetchUserData(state),
    counter: fetchCartCounter(state)
}), {logout})(MenuComponent)