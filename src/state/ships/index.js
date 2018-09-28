import { handleActions, createAction } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  ships: [
    {size: 2},
    {size: 3},
    {size: 3},
    {size: 4},
    {size: 5},
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
export const selectShip = createAction(
  SELECT_SHIP,
  (idx, size) => ({ idx, size })
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
    [selectShip]: (state, { payload: { idx, size } }) => ({ ...state, idx, size }),
  },
  initialState
);

