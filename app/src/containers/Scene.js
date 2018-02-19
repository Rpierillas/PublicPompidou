/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Scene from 'src/components/Scene';
import { loadCurrentPage } from 'src/store/ducks/scenes';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  title: state.scenes.title,
  actions: state.scenes.actions,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadCurrentPage,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const SceneContainer = createContainer(Scene);


/*
 * Export default
 */
export default SceneContainer;
