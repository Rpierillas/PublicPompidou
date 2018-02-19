/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import App from 'src/components/App';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  logo: state.user.logo,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = withRouter(createContainer(App));


/*
 * Export default
 */
export default AppContainer;
