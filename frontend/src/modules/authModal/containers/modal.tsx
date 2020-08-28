import { connect } from 'react-redux'
import { createUser, authUser } from '../../../redux/reducers/userReducer'
import authModalComponent from '../components/authModalComponent'

export default connect (null, {createUser,authUser}) (authModalComponent);