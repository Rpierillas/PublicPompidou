/*
 * Npm import
 */
import { combineReducers } from 'redux';


/*
 * Local import
 */
import scenes from './scenes';
import user from './user';
import auth from './auth';
import navbar from './navbar';
import saving from './saving';
import admin from './admin';
/*
 * Code
 */
const reducer = combineReducers({
  scenes,
  user,
  auth,
  navbar,
  saving,
  admin,
});


/*
 * Export default
 */
export default reducer;
