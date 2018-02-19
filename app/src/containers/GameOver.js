/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import GameOver from 'src/components/GameOver';
import { restartChar } from 'src/store/ducks/user';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    restartChar,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const GameOverContainer = createContainer(GameOver);


/*
 * Export default
 */
export default GameOverContainer;
