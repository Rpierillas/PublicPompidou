/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import ActionList from 'src/components/ActionList';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  actions: state.scenes.actions,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ActionListContainer = createContainer(ActionList);


/*
 * Export default
 */
export default ActionListContainer;
