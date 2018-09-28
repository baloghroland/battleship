import { handleActions, createAction } from 'redux-actions';
import axios from 'axios';

export const initialState = {
  id: '',
  name: '',
  coin: '',
  room: '',
  error: null,
};

export const LOGIN_USER_RESOLVE = 'LOGIN_USER_RESOLVE';
export const LOGIN_USER_REJECT = 'LOGIN_USER_REJECT';

export const loginUserResolve = createAction(
  LOGIN_USER_RESOLVE,
  (id, name, coin, room) => ({ id, name, coin, room })
);

export const loginUserReject = createAction(
  LOGIN_USER_REJECT,
  error => ({ error })
);


export const reducer = handleActions(
  {
    [loginUserResolve]: (state, { payload: { id, name, coin, room } }) => ({ ...state, id, name, coin, room }),
    [loginUserReject]: (state, { payload: { error } }) => ({ ...state, error }),
  },
  initialState
);

export const loginUser = (name, room) => async (dispatch) => {
  try {
    const result = await axios.post('/user', { name });
    dispatch(loginUserResolve(result._id, result.name, result.coin, room));
    console.log('Login result', result);
  } catch (error) {
    dispatch(loginUserReject(error));
    console.log('Login error: ', error);
  }
}
