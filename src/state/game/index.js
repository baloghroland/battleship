import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  userShips: []
};

/**
 * ACTION TYPES
 */
export const ADD_USER_SHIP = 'ADD_USER_SHIP';

/**
 * ACTION CREATORS
 */
export const addUserShip = createAction(
  ADD_USER_SHIP,
  (x, y, size, orientation) => ({ x, y, size, orientation })
);

/**
 * SELECTORS
 */
export const getUserShips = state => state.game.userShips;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [addUserShip]: (state, { payload: { x, y, size, orientation } }) => ({ ...state, userShips: [...state.userShips, { x, y, size, orientation }] })
  },
  initialState
);
