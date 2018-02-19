/*
 * Npm import
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/*
 * Local import
 */
import Profil from 'src/components/Profil';
import { loadSaving } from 'src/store/ducks/saving';

/*
 * Code
 */
// State
const mapStateToProps = state => ({
  games: state.saving.games,
});

// Actions
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    loadSaving,
  }, dispatch),
});


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ProfilContainer = createContainer(Profil);


/*
 * Export default
 */
export default ProfilContainer;
