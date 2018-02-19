/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Skillbar from 'src/components/Skillbar';
import { improveStat } from 'src/store/ducks/user';
// State
const mapStateToProps = state => ({
  chosenStat: state.user.chosenStat,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    improveStat,
  }, dispatch),
});

/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const SkillbarContainer = createContainer(Skillbar);

/*
 * Export default
 */
export default SkillbarContainer;
