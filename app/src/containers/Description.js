/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Description from 'src/components/Description';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  text: state.scenes.text,
  image: state.scenes.image,
  imageText: state.scenes.imageText,
  maxHp: state.user.maxHp,
  hp: state.user.hp,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const DescriptionContainer = createContainer(Description);


/*
 * Export default
 */
export default DescriptionContainer;
