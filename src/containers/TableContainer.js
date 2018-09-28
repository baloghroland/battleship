import Table from '../components/Table';

import { getActiveShip, getShips } from '../state/ships';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ activeShip: getActiveShip(state), ships: getShips(state) });

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Table);