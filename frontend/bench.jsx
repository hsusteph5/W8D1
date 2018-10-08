import React from 'react';
import ReactDOM from 'react-dom';
import { signupUser, logout, loginUser } from "./util/session_api_util";
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //testing
  window.signupUser = signupUser;
  window.logout = logout;
  window.loginUser = loginUser;
  window.store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //

  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
