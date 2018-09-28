import { createAction, handleActions } from 'redux-actions';
import { GAME_STATE } from '../../constants';
import { getUser, getUserRoom, getUserName } from '../user';
import { setAppIsWaiting } from '../app';

/**
 * INITIAL STATE
 */
export const initialState = {
  status: GAME_STATE.INIT,
  isUserTurn: false,
  userShips: [],
  password: '',
  error: null
};

/**
 * ACTION TYPES
 */
export const ADD_USER_SHIP = 'ADD_USER_SHIP';

export const CREATE_OR_JOIN_GAME_RESOLVE = 'CREATE_OR_JOIN_GAME_RESOLVE';
export const CREATE_OR_JOIN_GAME_REJECT = 'CREATE_OR_JOIN_GAME_REJECT';

export const UPDATE_GAME_STATUS = 'UPDATE_GAME_STATUS';

export const SET_USER_TURN = 'SET_USER_TURN';

/**
 * ACTION CREATORS
 */
export const addUserShip = createAction(
  ADD_USER_SHIP,
  (x, y, size, orientation) => ({ x, y, size, orientation })
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

/**
 * SELECTORS
 */
export const getUserShips = state => state.game.userShips;
export const getGameStatus = state => state.game.status;
export const getGamePassword = state => state.game.password;
export const getIsUserTurn = state => state.game.isUserTurn;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [addUserShip]: (state, { payload: { x, y, size, orientation } }) => ({ ...state, userShips: [...state.userShips, { x, y, size, orientation }] }),
    [createOrJoinGameResolve]: (state, { payload: result }) => ({ ...state, status: GAME_STATE.WAITING_FOR_OPPONENT, password: result.password }),
    [createOrJoinGameReject]: (state, { payload: error }) => ({ ...state, error }),
    [updateGameStatus]: (state, { payload: status }) => ({ ...state, status }),
    [setUserTurn]: (state, { payload: isUserTurn }) => ({ ...state, isUserTurn })
  },
  initialState
);

/**
 * ASYNC ACTIONS
 */
export const createOrJoinGame = () => async (dispatch, getState, { api }) => {
  try {
    await dispatch(setAppIsWaiting(true));
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
    const result = await api.post(`/battleship/getState?sessionId=${user.room}&name=${user.name}&password=${password}`);
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
    await dispatch(setUserTurn(false));
  } catch (error) {
    console.error('getGameState', error);
  }
};
