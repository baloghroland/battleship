import Table from '../components/Table';

import { getActiveShip, getShips, setActiveShip } from '../state/ships';
import { addUserShip } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ activeShip: getActiveShip(state), ships: getShips(state) });

const mapDispatchToProps = ({ addUserShip, setActiveShip });

export default connect(mapStateToProps, mapDispatchToProps)(Table);