/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Register from 'src/components/Register';
import data from 'src/data';
import { signUpSubmit, clearInput } from 'src/store/ducks/auth';
import { loggingIn } from 'src/store/ducks/navbar';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  data: data.registerFields,
  errorMessage: state.auth.errorMessage,
});


// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    signUpSubmit,
    clearInput,
    loggingIn,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const RegisterContainer = withRouter(createContainer(Register));


/*
 * Export default
 */
export default RegisterContainer;
