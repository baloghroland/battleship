import { createAction, handleActions } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  appIsWaiting: false
};

/**
 * ACTION TYPES
 */
export const SET_APP_IS_WAITING = 'SET_APP_IS_WAITING';


/**
 * ACTION CREATORS
 */
export const setAppIsWaiting = createAction(
  SET_APP_IS_WAITING,
  appIsWaiting => appIsWaiting
);

/**
 * SELECTORS
 */
export const getAppIsWaiting = state => state.app.appIsWaiting;

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [setAppIsWaiting]: (state, { payload: appIsWaiting }) => ({ ...state, appIsWaiting })
  },
  initialState
);
