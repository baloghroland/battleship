import Game from '../components/Game';

import { getGameStatus } from '../state/game';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  gameStatus: getGameStatus(state),
});

const mapDispatchToProps = ({});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
