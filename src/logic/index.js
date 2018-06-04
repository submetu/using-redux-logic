import axios from 'axios';
import { createLogicMiddleware } from 'redux-logic'

import usersFetchLogic from './userFetch';

const deps = { // injected dependencies for logic
  httpClient: axios
};

const arrLogic = [usersFetchLogic];
const logicMiddleware = createLogicMiddleware(arrLogic, deps);

export default logicMiddleware;