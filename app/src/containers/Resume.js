/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Resume from 'src/components/Resume';
import { restartChar } from 'src/store/ducks/user';
import { loadPrevious } from 'src/store/ducks/saving';

/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    restartChar,
    loadPrevious,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ResumeContainer = createContainer(Resume);


/*
 * Export default
 */
export default ResumeContainer;
