import Table from '../components/Table';

import { addUserShip } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ game: state.user });

const mapDispatchToProps = ({ addUserShip });

export default connect(mapStateToProps, mapDispatchToProps)(Login);