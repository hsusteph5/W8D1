import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    //binding returns a function, invoked, the event handler is automatically passed in
    this.updateUsername = this.updateUsername.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateUsername(e){
    this.setState({username: e.target.value})
  }

  updatePassword(e){
    this.setState({password: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  render() {
    let header = (this.props.formType === 'signup') ?
      (<div>
          <h1> Sign Up </h1>
          <Link to="/login">Sign In</Link>
       </div>) : (
       <div>
          <h1> Sign In</h1>
          <Link to="/signup">Sign Up</Link>
       </div>
     );

    return(
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          { this.props.errors.map((el) => (<p> el </p>)) }
          { header }
          <label> Username:
            <input onChange={this.updateUsername} type="text" value={this.state.username}></input>
          </label>

          <label> Password:
            <input onChange={this.updatePassword} type="password" value={this.state.password}></input>
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
