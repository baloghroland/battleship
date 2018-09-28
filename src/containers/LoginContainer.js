import Login from '../components/Login';

import { loginUser } from '../state/user';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);