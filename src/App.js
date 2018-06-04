import React from 'react';
import { connect } from 'react-redux';

import {usersFetch,usersFetchCancel} from './actions';

function App({ users, fetchStatus, usersFetch, usersFetchCancel }) {
  return (
    <div>
      <div>Note: response is artificially delayed to allow interactive cancelling</div>
      <div>Status: { fetchStatus }</div>
      <button onClick={ usersFetch }>Fetch users</button>
      <button onClick={ usersFetchCancel }>Cancel</button>
      <ul>
        {
          
          users && users.map(user => (
            <li key={ user.id }>{ user.first_name } { user.last_name }</li>
          ))
        }
      </ul>
    </div>
  );
}

const ConnectedApp = connect(
  state => ({
    users: state.list,
    fetchStatus: state.fetchStatus
  }),
  {
    usersFetch,
    usersFetchCancel
  }
)(App);

export default ConnectedApp;