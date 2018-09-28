import { createAction, handleActions } from 'redux-actions';
import { GAME_STATE } from '../../constants';
import { getUser } from '../user';

/**
 * INITIAL STATE
 */
export const initialState = {
  status: GAME_STATE.INIT,
  userShips: [],
  error: null
};

/**
 * ACTION TYPES
 */
export const ADD_USER_SHIP = 'ADD_USER_SHIP';

export const CREATE_OR_JOIN_GAME_RESOLVE = 'CREATE_OR_JOIN_GAME_RESOLVE';
export const CREATE_OR_JOIN_GAME_REJECT = 'CREATE_OR_JOIN_GAME_REJECT';

/**
 * ACTION CREATORS
 */
export const addUserShip = createAction(
  ADD_USER_SHIP,
  (x, y, size, orientation) => ({ x, y, size, orientation })
);

export const createOrJoinGameResolve = createAction(
  CREATE_OR_JOIN_GAME_RESOLVE
);
export const createOrJoinGameReject = createAction(
  CREATE_OR_JOIN_GAME_REJECT,
  error => error
);

/**
 * SELECTORS
 */
export const getUserShips = state => state.game.userShips;
export const getGameStatus = state => state.game.status;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [addUserShip]: (state, { payload: { x, y, size, orientation } }) => ({ ...state, userShips: [...state.userShips, { x, y, size, orientation }] }),
    [createOrJoinGameResolve]: state => ({ ...state, status: GAME_STATE.WAITING_FOR_OPPONENT }),
    [createOrJoinGameReject]: (state, { payload: error }) => ({ ...state, error })
  },
  initialState
);

/**
 * ASYNC ACTIONS
 */
export const createOrJoinGame = () => async (dispatch, getState, { api }) => {
  try {
    const user = getUser(getState());
    const userShips = getUserShips(getState());
    await api.post('/battleship/createOrJoin', { name: user.name, gameId: 'random-gae-id', sessionId: user.room, shipPosition: userShips });
    dispatch(createOrJoinGameResolve());
    console.log('Create or Join game success');
  } catch (error) {
    console.error(error);
    dispatch(createOrJoinGameReject(error));
  }
};
