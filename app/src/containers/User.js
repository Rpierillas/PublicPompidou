/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import User from 'src/components/User';

import { makeAdmin, deletePlayer } from 'src/store/ducks/admin';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  email: state.admin.email,
  informations: state.admin.info,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    makeAdmin,
    deletePlayer,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const UserContainer = withRouter(createContainer(User));


/*
 * Export default
 */
export default UserContainer;
