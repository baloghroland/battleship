import TargetTable from '../components/TargetTable';

import { getUserShoots, shoot, getIsGameStatusInProgress, getIsUserTurn } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  userShoots: getUserShoots(state),
  inProgress: getIsGameStatusInProgress(state),
  isUserTurn: getIsUserTurn(state)
});

const mapDispatchToProps = ({ shoot });

export default connect(mapStateToProps, mapDispatchToProps)(TargetTable);
