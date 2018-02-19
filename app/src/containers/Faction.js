/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Faction from 'src/components/Factions/Faction';
import { selectFaction, showDescription, restartChar } from 'src/store/ducks/user';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  selected: state.user.factionSelected[ownProps.id],
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectFaction,
    showDescription,
    restartChar,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const FactionContainer = createContainer(Faction);


/*
 * Export default
 */
export default FactionContainer;
