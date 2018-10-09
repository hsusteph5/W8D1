import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container';

const App = () => {
  return(
    <div>
      <h1>Bench Bnb</h1>
      <Route exact path="/" component={ GreetingContainer } />
      <Route path="/login" component={ LoginFormContainer } />
      <Route path="/signup" component={ SignupFormContainer } />
    </div>
  );
}

export default App;
