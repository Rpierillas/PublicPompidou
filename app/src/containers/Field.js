/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Field from 'src/components/Field';
import { changeInput } from 'src/store/ducks/auth';


/*
 * Code
 */
// State
const mapStateToProps = (state, ownProps) => ({
  value: state.auth[ownProps.name],
});

// Actions
const mapDispatchToProps = (dispatch, { name }) => ({
  onChange: (value) => {
    dispatch(changeInput({ name, value }));
  },
});


/*
 * Export default
 */
export default connect(mapStateToProps, mapDispatchToProps)(Field);
