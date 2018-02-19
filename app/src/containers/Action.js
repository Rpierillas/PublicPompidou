/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Action from 'src/components/ActionList/Action';
import { loadCurrentPage } from 'src/store/ducks/scenes';
import { selectAction } from 'src/store/ducks/user';
import { updateGame } from 'src/store/ducks/saving';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadCurrentPage,
    selectAction,
    updateGame,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ActionContainer = createContainer(Action);


/*
 * Export default
 */
export default ActionContainer;
