import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';
import api from '../side-effects/axios';

const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({
    api
  })
);

export const store = createStore(
  rootReducer,
  isDevelopment ? composeWithDevTools(middlewares) : middlewares
);
