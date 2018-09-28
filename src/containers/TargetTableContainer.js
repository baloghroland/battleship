import TargetTable from '../components/TargetTable';

import { getUserShoots, shoot, getIsGameStatusInProgress } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ userShoots: getUserShoots(state), inProgress: getIsGameStatusInProgress(state) });

const mapDispatchToProps = ({ shoot });

export default connect(mapStateToProps, mapDispatchToProps)(TargetTable);
