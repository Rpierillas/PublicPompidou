/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import NavBar from 'src/components/NavBar';
import { openCloseMenu, loggingOut } from 'src/store/ducks/navbar';
import { restartChar } from 'src/store/ducks/user';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  status: state.navbar.navStatus,
  logged: state.navbar.loggedIn,
  admin: state.auth.admin,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    openCloseMenu,
    loggingOut,
    restartChar,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const NavBarContainer = withRouter(createContainer(NavBar));


/*
 * Export default
 */
export default NavBarContainer;
