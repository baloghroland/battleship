import { handleActions, createAction } from 'redux-actions';

/**
 * INITIAL STATE
 */
export const initialState = {
  id: '',
  name: '',
  coin: '',
  room: '',
  error: null,
};

/**
 * ACTION TYPES
 */
export const LOGIN_USER_RESOLVE = 'LOGIN_USER_RESOLVE';
export const LOGIN_USER_REJECT = 'LOGIN_USER_REJECT';

/**
 * ACTION CREATORS
 */
export const loginUserResolve = createAction(
  LOGIN_USER_RESOLVE,
  (id, name, coin, room) => ({ id, name, coin, room })
);

export const loginUserReject = createAction(
  LOGIN_USER_REJECT,
  error => ({ error })
);

/**
 * REDUCER
 */
export const reducer = handleActions(
  {
    [loginUserResolve]: (state, { payload: { id, name, coin, room } }) => ({ ...state, id, name, coin, room }),
    [loginUserReject]: (state, { payload: { error } }) => ({ ...state, error }),
  },
  initialState
);

<<<<<<< Updated upstream
export const loginUser = (room, name) => async (dispatch, getState, { api }) => {
=======
/**
 * ASYNC ACTIONS
 */
export const loginUser = (name, room) => async (dispatch, getState, { api }) => {
>>>>>>> Stashed changes
  try {
    const result = await api.post('/user', { name });
    dispatch(loginUserResolve(result._id, result.name, result.coin, room));
    console.log('Login result', result);
  } catch (error) {
    dispatch(loginUserReject(error));
    console.log('Login error: ', error);
  }
}
