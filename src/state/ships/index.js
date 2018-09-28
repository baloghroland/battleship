import { handleActions, createAction } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  ships: [
    {size: 5},
    {size: 4},
    {size: 3},
    {size: 3},
    {size: 2},
  ],
  activeShip: 1,
};

/**
 * ACTION TYPES
 */
export const SELECT_SHIP = 'SELECT_SHIP';

/**
 * ACTION CREATORS
 */
export const setActiveShip = createAction(
  SELECT_SHIP,
  activeShip => activeShip
);

/**
 * SELECTORS
 */
export const getActiveShip = state => state.ships.activeShip;
export const getShips = state => state.ships.ships;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [setActiveShip]: (state, { payload: activeShip }) => ({ ...state, activeShip }),
  },
  initialState
);

