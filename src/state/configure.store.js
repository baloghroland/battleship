import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './root.reducer';

const isDevelopment = process.env.NODE_ENV === 'development';

const middlewares = applyMiddleware(
  thunk.withExtraArgument({})
);

export const store = createStore(
  rootReducer,
  isDevelopment ? composeWithDevTools(middlewares) : middlewares
);
