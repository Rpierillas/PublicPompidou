/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


/*
 * Local import
 */
import Character from 'src/components/Character';
import { nameTyping, changeGender, selectCharacter, restartChar, calculateHp } from 'src/store/ducks/user';
import { saveGame } from 'src/store/ducks/saving';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  name: state.user.inputName,
  gender: state.user.gender,
  determination: state.user.determination,
  finesse: state.user.finesse,
  intellect: state.user.intellect,
  chosenStat: state.user.chosenStat,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    nameTyping,
    changeGender,
    selectCharacter,
    restartChar,
    calculateHp,
    saveGame,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const CharacterContainer = createContainer(Character);


/*
 * Export default
 */
export default CharacterContainer;
