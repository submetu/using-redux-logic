import { createStore, applyMiddleware } from 'redux';

import initialState from './initialState';
import logicMiddleware from './logic';
import rootReducer from './reducers';

const store = createStore(rootReducer, initialState,
  applyMiddleware(logicMiddleware));
  
export default store;