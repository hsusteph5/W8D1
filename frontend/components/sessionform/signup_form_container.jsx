import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';


const mapStateToProps = (state) => {
  //hey it should be login (make loginErrorReducer ==> errors_reducers)
  return { errors: state.errors.sessions, formType: 'signup'}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { processForm: (user) => dispatch(signup(user))}
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
