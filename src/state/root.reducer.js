import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as app } from './app';
import { reducer as ships } from './ships';

export default combineReducers({
  app,
  ships,
  user
});
