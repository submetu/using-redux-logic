
import {USERS_FETCH,USERS_FETCH_CANCEL} from '../constants';

export function usersFetch() { return { type: USERS_FETCH }; }
export function usersFetchCancel() { return { type: USERS_FETCH_CANCEL }; }