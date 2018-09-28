import Login from '../components/Login';

import { loginUser } from '../state/user';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = ({ loginUser });

export default connect(mapStateToProps, mapDispatchToProps)(Login);