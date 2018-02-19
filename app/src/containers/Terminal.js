/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Terminal from 'src/components/Terminal';
import { unfinishedGameCheck } from 'src/store/ducks/saving';
import { loginSuccess } from 'src/store/ducks/auth';
/*
 * Code
 */
// State
const mapStateToProps = state => ({
  status: state.user.status,
  hp: state.user.hp,
  unfinished: state.saving.unfinished,
  logged: state.navbar.loggedIn,
  admin: state.auth.admin,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    unfinishedGameCheck,
    loginSuccess,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const TerminalContainer = withRouter(createContainer(Terminal));


/*
 * Export default
 */
export default TerminalContainer;
