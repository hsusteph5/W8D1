import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  //display logic above
  const display = props.currentUser ? (
    <div>
      <p> Welcome {props.currentUser.username}</p>
      <button onClick={props.logout}> Logout </button>
    </div>
  ) : (
    <div>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Login </Link>
    </div>
  );

//the display
  return (
    <header>
      <h1> Greetings! </h1>
      <div>
        { display }
      </div>
    </header>
  );
}


export default Greeting;
