import Table from '../components/Table';

import { getActiveShip, getShips } from '../state/ships';
import { addUserShip } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ activeShip: getActiveShip(state), ships: getShips(state) });

const mapDispatchToProps = ({ addUserShip });

export default connect(mapStateToProps, mapDispatchToProps)(Table);