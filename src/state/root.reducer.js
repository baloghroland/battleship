import { combineReducers } from 'redux';
import { reducer as user } from './user';
import { reducer as app } from './app';

export default combineReducers({
  app,
  user
});
