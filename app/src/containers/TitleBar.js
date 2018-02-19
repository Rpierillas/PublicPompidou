/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import TitleBar from 'src/components/TitleBar';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  status: state.user.status,
  title: state.scenes.title,
  logged: state.navbar.loggedIn,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const TitleBarContainer = withRouter(createContainer(TitleBar));


/*
 * Export default
 */
export default TitleBarContainer;
