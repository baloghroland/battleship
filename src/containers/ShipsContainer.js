import Ships from '../components/Ships';

import { getActiveShip, setActiveShip } from '../state/ships';
import { getUserShips } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ 
    activeShip: getActiveShip(state),
    userShips: getUserShips(state)
 });

const mapDispatchToProps = ({
    setActiveShip
});

export default connect(mapStateToProps, mapDispatchToProps)(Ships);