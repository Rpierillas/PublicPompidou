/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Login from 'src/components/Login';
import data from 'src/data';
import { signInSubmit, clearInput } from 'src/store/ducks/auth';
import { loggingIn } from 'src/store/ducks/navbar';
import { unfinishedGameCheck } from 'src/store/ducks/saving';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  data: data.loginFields,
  loginFailure: state.auth.loginFailure,
  logged: state.navbar.loggedIn,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    signInSubmit,
    clearInput,
    loggingIn,
    unfinishedGameCheck,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LoginContainer = withRouter(createContainer(Login));


/*
 * Export default
 */
export default LoginContainer;
