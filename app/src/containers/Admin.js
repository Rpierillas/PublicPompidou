/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


/*
 * Local import
 */
import Admin from 'src/components/Admin';

import { searchPlayer, makeAdmin, deletePlayer, typePlayer } from 'src/store/ducks/admin';

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
    searchPlayer,
    makeAdmin,
    deletePlayer,
    typePlayer,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AdminContainer = withRouter(createContainer(Admin));


/*
 * Export default
 */
export default AdminContainer;
