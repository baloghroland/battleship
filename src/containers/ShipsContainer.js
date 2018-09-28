import Ships from '../components/Ships';

import { getActiveShip } from '../state/ships';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ 
    activeShip: getActiveShip(state),
 });

const mapDispatchToProps = ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Ships);