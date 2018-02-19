/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Logout from 'src/components/Logout';
import { logout } from 'src/store/ducks/auth';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  status: state.user.status,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    logout,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const LogoutContainer = withRouter(createContainer(Logout));


/*
 * Export default
 */
export default LogoutContainer;
