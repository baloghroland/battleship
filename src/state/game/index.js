import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { GAME_STATE } from '../../constants';
import { getUser, getUserName } from '../user';

/**
 * INITIAL STATE
 */
export const initialState = {
  status: GAME_STATE.INIT,
  isUserTurn: false,
  userShips: [],
  password: '',
  error: null,
  lastShootType: null,
  lastShootResult: {},
  shoots: []
};

/**
 * ACTION TYPES
 */
export const ADD_USER_SHIP = 'ADD_USER_SHIP';

export const CREATE_OR_JOIN_GAME_RESOLVE = 'CREATE_OR_JOIN_GAME_RESOLVE';
export const CREATE_OR_JOIN_GAME_REJECT = 'CREATE_OR_JOIN_GAME_REJECT';

export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';

export const SET_USER_TURN = 'SET_USER_TURN';

export const SHOOT_RESOLVE = 'SHOOT_RESOLVE';
export const SHOOT_REJECT = 'SHOOT_REJECT';

export const UPDATE_SHOOTS = 'UPDATE_SHOOTS';

/**
 * ACTION CREATORS
 */
export const addUserShip = createAction(
  ADD_USER_SHIP,
  (x, y, size, orientation, idx) => ({ x, y, size, orientation, idx })
);

export const createOrJoinGameResolve = createAction(
  CREATE_OR_JOIN_GAME_RESOLVE,
  result => result
);
export const createOrJoinGameReject = createAction(
  CREATE_OR_JOIN_GAME_REJECT,
  error => error
);

export const updateGameStatus = createAction(
  UPDATE_GAME_STATUS,
  status => status
);

export const setUserTurn = createAction(
  SET_USER_TURN,
  isUserTurn => isUserTurn
);

export const shootResolve = createAction(
  SHOOT_RESOLVE,
  (destroy, type) => ({ destroy, type })
);
export const shootReject = createAction(
  SHOOT_REJECT,
  error => error
);

export const updateShoots = createAction(
  UPDATE_SHOOTS,
  shoots => shoots
);

/**
 * SELECTORS
 */
export const getUserShips = state => state.game.userShips;
export const getGameStatus = state => state.game.status;
export const getGamePassword = state => state.game.password;
export const getIsUserTurn = state => state.game.isUserTurn;
export const getLastShootResult = state => state.game.lastShootResult;
export const getLastShotType = state => state.game.lastShootType;
export const getIsLastShootHit = createSelector(
  getLastShotType,
  lastShootType => lastShootType === 'hit'
);
export const geIsLastShootDestroyed = createSelector(
  getLastShootResult,
  lastShootResult => !!lastShootResult
);
export const getLastDestroyedShipSize = createSelector(
  getLastShootResult,
  lastShootResult => lastShootResult ? lastShootResult.size : 0
);
export const getShoots = state => state.game.shoots;
export const getUserShoots = createSelector(
  [getShoots, getUserName],
  (shoots, username) => shoots.filter(shoot => shoot.name === username)
);
export const getEnemyShoots = createSelector(
  [getShoots, getUserName],
  (shoots, username) => shoots.filter(shoot => shoot.name !== username)
);
export const getIsGameStatusInProgress = createSelector(
  getGameStatus,
  status => status === GAME_STATE.BATTLE_IN_PROGRESS
);

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [addUserShip]: (state, { payload: { x, y, size, orientation, idx } }) => ({ ...state, userShips: [...state.userShips, { x, y, size, orientation, idx }] }),
    [createOrJoinGameResolve]: (state, { payload: result }) => ({ ...state, status: GAME_STATE.WAITING_FOR_OPPONENT, password: result.password }),
    [createOrJoinGameReject]: (state, { payload: error }) => ({ ...state, error }),
    [updateGameStatus]: (state, { payload: status }) => ({ ...state, status }),
    [setUserTurn]: (state, { payload: isUserTurn }) => ({ ...state, isUserTurn }),
    [shootResolve]: (state, { payload: { destroy, type } }) => ({ ...state, lastShootType: type, lastShootResult: destroy }),
    [shootReject]: (state, { payload: error }) => ({ ...state, error }),
    [updateShoots]: (state, { payload: shoots }) => ({ ...state, shoots })
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
    const result = await api.post('/battleship/createOrJoin', { name: user.name, gameId: 'random-gae-id', sessionId: user.room, shipPosition: userShips });
    dispatch(createOrJoinGameResolve(result));
    console.log('Create or Join game success', result);
  } catch (error) {
    console.error('createOrJoinGame', error);
    dispatch(createOrJoinGameReject(error));
  }
};

export const getGameState = () => async (dispatch, getState, { api }) => {
  try {
    const password = getGamePassword(getState());
    const user = getUser(getState());
    const result = await api.get(`/battleship/getState?sessionId=${user.room}&name=${user.name}&password=${password}`);
    switch(result.state) {
      case 'new':
        await dispatch(updateGameStatus(GAME_STATE.WAITING_FOR_OPPONENT));
        break;
      case 'inprogress':
        await dispatch(updateGameStatus(GAME_STATE.BATTLE_IN_PROGRESS));
        break;
      case 'complete':
        if (result.winner === user.name) await dispatch(updateGameStatus(GAME_STATE.VICTORY));
        await dispatch(updateGameStatus(GAME_STATE.GAME_OVER));
        break;
    }
    if (result.turn === user.name) await dispatch(setUserTurn(true));
    await dispatch(updateShoots(result.shoots));
    await dispatch(setUserTurn(false));
  } catch (error) {
    console.error('getGameState', error);
  }
};


export const shoot = (x, y) => async (dispatch, getState, { api }) => {
  try {
    const user = getUser(getState());
    const password = getGamePassword(getState());
    const { destroy, type } = await api.post('/battleship/shoot', { sessionId: user.room, password, name: user.name, x, y });
    await dispatch(shootResolve(destroy, type));
  } catch (error) {
    console.error('getGameState', error);
  }
};
