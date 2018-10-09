import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return { errors: state.errors.sessions, formType: 'login'}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { processForm: (user) => dispatch(login(user))}
}


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
