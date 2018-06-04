import { createLogic } from 'redux-logic'

import {
  USERS_FETCH,
  USERS_FETCH_CANCEL,
  USERS_FETCH_FULFILLED,
  USERS_FETCH_REJECTED 
} from '../constants';


const delay = 2; // 2s delay for interactive use of cancel/take latest
const usersFetchLogic = createLogic({
  type: USERS_FETCH,
  cancelType: USERS_FETCH_CANCEL,
  latest: true, // take latest only

  processOptions: {
    dispatchReturn: true,
    successType: USERS_FETCH_FULFILLED,
    failType: USERS_FETCH_REJECTED
  },

  process({ httpClient }) {
    return httpClient.get(`https://reqres.in/api/users?delay=${delay}`)
      .then(resp => resp.data.data); // use data property of payload
  }
});
export default usersFetchLogic;