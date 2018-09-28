import Login from '../components/Login';

import { loginUser } from '../state/user';
import { getIsStartEnabled, createOrJoinGame } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ user: state.user, startEnabled: getIsStartEnabled(state) });

const mapDispatchToProps = ({ loginUser, createOrJoinGame });

export default connect(mapStateToProps, mapDispatchToProps)(Login);
